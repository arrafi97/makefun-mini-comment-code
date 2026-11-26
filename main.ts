// The Comment Above the Code — a make.fun Mini entry.
//
// The brief asks for the funniest comment you could find above a piece of
// code. This program carries exactly one such comment: the warning every
// developer recognises, taped above a function nobody dares to refactor.
// It assembles the comment from sentence fragments, checks it against the
// bounty's gate (one line, 1–200 characters), and writes it to entry.txt.
//
// Node 22, standard library only, no network, no dependencies.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// The comment, kept as separate sentences so each one can be read on its
// own. Joined with single spaces they form the exact submitted line:
// a warning, a confession that nobody knows why the code works, and the
// fate of the last person who tried to "clean it up".
const FRAGMENTS = [
  "Do not touch this function.",
  "It works for reasons nobody understands,",
  "and the last person who 'cleaned it up'",
  "now works in a different industry.",
];

const LINE = FRAGMENTS.join(" ");

// The gate from the bounty brief: the entry must be UTF-8 text, exactly
// one line, between 1 and 200 characters long. Characters are counted as
// Unicode code points, so an em dash or an apostrophe counts as one.
class LineGate {
  static readonly MIN = 1;
  static readonly MAX = 200;

  static count(text: string): number {
    return [...text].length;
  }

  static check(text: string): number {
    const n = LineGate.count(text);
    if (text.trim() === "") {
      throw new Error("entry line must not be blank");
    }
    if (text.includes("\n") || text.includes("\r")) {
      throw new Error("entry line must be a single line");
    }
    if (n < LineGate.MIN || n > LineGate.MAX) {
      throw new Error(
        `entry line must be ${LineGate.MIN}-${LineGate.MAX} characters, got ${n}`,
      );
    }
    return n;
  }
}

// Where the sealed scorer looks: $MAKEFUN_OUTPUT_DIR when set, /output
// otherwise. The directory is created if it is missing.
function buildOutputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return resolve(dir, "entry.txt");
}

function main(): void {
  const chars = LineGate.check(LINE);
  const target = buildOutputPath();
  // Exactly the line and nothing else — no trailing newline — so two runs
  // always produce byte-identical files.
  writeFileSync(target, LINE, "utf8");
  // Read it straight back: the sealed scorer reads this file, so a
  // mismatch here must fail loudly instead of passing silently.
  const written = readFileSync(target, "utf8");
  if (written !== LINE) {
    throw new Error(`entry.txt does not match the checked line`);
  }
  console.log(`wrote entry.txt (${chars} chars, 1 line, verified) -> ${target}`);
}

main();
