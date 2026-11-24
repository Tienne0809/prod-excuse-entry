import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I deployed to prod on Friday and deleted the rollback script — if we can't go back, we're forced to move forward, which is literally the roadmap.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");
