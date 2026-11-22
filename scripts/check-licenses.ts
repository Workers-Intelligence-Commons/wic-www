// Fails when a production dependency of an app, direct or indirect, is under a license that cannot be
// combined with AGPL-3.0-or-later. The accepted list follows the license table of the organisation.
import { readdir, readFile, realpath } from "node:fs/promises";
import { dirname, join } from "node:path";

const ACCEPTED = new Set([
  "MIT", "MIT-0", "ISC", "BSD-2-Clause", "BSD-3-Clause", "0BSD", "Apache-2.0", "MPL-2.0", "CC0-1.0", "Unlicense",
  "BlueOak-1.0.0", "Python-2.0", "CC-BY-4.0", "LGPL-3.0-or-later", "GPL-3.0-or-later", "AGPL-3.0-or-later", "OFL-1.1",
]);
// Packages of the organisation; their licenses are reviewed in their own repositories.
const OWN_SCOPE = "@workers-intelligence-commons/";

type Manifest = { name: string; version?: string; license?: string | { type: string }; dependencies?: Record<string, string>; optionalDependencies?: Record<string, string> };

async function manifest(dir: string): Promise<Manifest | null> {
  try {
    return JSON.parse(await readFile(join(dir, "package.json"), "utf8"));
  } catch {
    return null;
  }
}

/** Every identifier must be accepted across "AND"; one is enough across "OR". */
function accepted(expression: string): boolean {
  const clean = expression.replace(/[()]/g, " ").trim();
  if (/\sOR\s/.test(clean)) return clean.split(/\s+OR\s+/).some(accepted);
  return clean.split(/\s+AND\s+/).every((id) => ACCEPTED.has(id.trim()));
}

/** The installed folder of a dependency, searched the way Node does: up the node_modules chain. */
async function resolve(name: string, from: string): Promise<string | null> {
  for (let dir = from; ; dir = dirname(dir)) {
    const candidate = join(dir, "node_modules", name);
    if (await manifest(candidate)) return realpath(candidate);
    if (dirname(dir) === dir) return null;
  }
}

const root = new URL("..", import.meta.url).pathname;
const seen = new Set<string>();
const refused: string[] = [];

async function walk(dir: string) {
  const m = await manifest(dir);
  if (!m) return;
  for (const dep of Object.keys({ ...m.dependencies, ...m.optionalDependencies })) {
    if (dep.startsWith(OWN_SCOPE)) continue;
    const found = await resolve(dep, dir);
    if (!found || seen.has(found)) continue;
    seen.add(found);
    const dm = (await manifest(found))!;
    const license = typeof dm.license === "object" ? dm.license.type : dm.license;
    if (!license || !accepted(license)) refused.push(`${dm.name}@${dm.version}: ${license ?? "no license field"}`);
    await walk(found);
  }
}

for (const app of await readdir(join(root, "apps"))) await walk(join(root, "apps", app));

if (refused.length) {
  console.error(`Dependencies under a license not accepted next to AGPL-3.0-or-later:\n${refused.map((r) => `  ${r}`).join("\n")}`);
  process.exit(1);
}
console.log(`${seen.size} production dependencies checked, every license accepted.`);
