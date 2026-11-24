import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One honest error message, 120 chars (gate max 200):
// nothing crashed — the user deleted the table themselves.
const message =
  "Error: nothing crashed. You deleted the table yourself, and we watched you do it. The backup is from Tuesday. Good luck.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, message);
console.log(`wrote ${target} (${message.length} chars)`);
