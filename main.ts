import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text =
  "The cursor has not moved in four hours. I have not moved either.";

// Gate guard: one line, 1–200 characters, not only whitespace.
if (text.length < 1 || text.length > 200 || text.includes("\n") || text.trim().length === 0) {
  throw new Error(`entry fails gate: ${text.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
