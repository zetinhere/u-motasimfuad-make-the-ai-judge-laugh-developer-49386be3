// Make the AI Judge Laugh: Developer Excuses
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
//
// The entry is one funny single-line excuse a developer gives when code
// breaks in production. This program writes it, deterministically, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
//
// The line: a confession from the incident call. Every developer has lived
// it — the "temporary" hack that quietly became structural, until the day
// it stops holding. The punchline lands on the last word.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE = "Turns out the 'temporary workaround' was load-bearing.";

// Write exactly the line — no trailing newline — so the file's bytes are
// the excuse itself, keeping it minimal for the size tie-break.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(EXCUSE);
