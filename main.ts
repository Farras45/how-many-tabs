// how-many-tabs — make.fun entry for
// "How Many Tabs Do You Have Open?" (u-danu-how-many-tabs-do-you-have-open-d86e783d)
//
// Writes the entrant's honest count of open browser tabs to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The entry text is digits only, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = "47";

// The gate requires UTF-8 text of 1 to 5 characters, not only white space,
// and the task requires digits only — refuse to write anything that fails it.
if (!/^[0-9]{1,5}$/.test(ENTRY_TEXT)) {
  throw new Error(`invalid entry text: ${JSON.stringify(ENTRY_TEXT)}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`wrote entry.txt (${ENTRY_TEXT.length} bytes) to ${outputDir}`);
