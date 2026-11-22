// Astro hands slot content to React components as pre-rendered HTML, but Slogan splits its children
// into words and needs a plain string, so the text comes in through a prop.
import { Slogan, type SloganProps } from "@workers-intelligence-commons/components";

export default function SloganText({ text, ...rest }: Omit<SloganProps, "children"> & { text: string }) {
  return <Slogan {...rest}>{text}</Slogan>;
}
