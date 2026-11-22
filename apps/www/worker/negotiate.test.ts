/// <reference types="bun" />
import { expect, test } from "bun:test";
import { preferredLocale, safeReturnPath, savedLocale } from "./negotiate.ts";

test("the browser's highest ranked supported language wins", () => {
  expect(preferredLocale("fr-FR,fr;q=0.9,en;q=0.8")).toBe("fr");
  expect(preferredLocale("en-GB,fr;q=0.5")).toBe("en");
  expect(preferredLocale("de-DE,fr;q=0.7,en;q=0.6")).toBe("fr");
  expect(preferredLocale("en;q=0.4,fr;q=0.8")).toBe("fr");
});

test("no usable language falls back to English", () => {
  expect(preferredLocale(null)).toBe("en");
  expect(preferredLocale("")).toBe("en");
  expect(preferredLocale("de,es;q=0.5")).toBe("en");
  expect(preferredLocale("fr;q=0")).toBe("en");
});

test("a saved choice is read from the cookie", () => {
  expect(savedLocale("a=1; lang=fr; b=2")).toBe("fr");
  expect(savedLocale("lang=xx")).toBeNull();
  expect(savedLocale(null)).toBeNull();
});

test("only same-site paths are followed after a choice", () => {
  expect(safeReturnPath("/fr/support/")).toBe("/fr/support/");
  expect(safeReturnPath("//evil.example/")).toBe("/");
  expect(safeReturnPath("https://evil.example/")).toBe("/");
  expect(safeReturnPath("/\\evil.example")).toBe("/");
  expect(safeReturnPath(null)).toBe("/");
});
