import { mkdirSync, statSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "Mom, since I’m dying at 1%, I’m auto-forwarding your son’s 43 unsent drafts titled “Reasons I hate your potluck casserole” to the entire family group chat. Happy Thanksgiving.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function validateEntry(line: string): string {
  if (typeof line !== "string" || line.trim().length === 0) {
    throw new Error("Invalid entry: line is empty after trim.");
  }
  const length = [...line].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `Invalid entry: length ${length} is outside ${MIN_LENGTH}-${MAX_LENGTH} characters.`,
    );
  }
  return line;
}

function ensureOutputDir(dir: string): void {
  try {
    mkdirSync(dir, { recursive: true });
  } catch (err) {
    throw new Error(`Cannot create output directory ${dir}: ${(err as Error).message}`);
  }
  if (!statSync(dir).isDirectory()) {
    throw new Error(`Output path ${dir} exists but is not a directory.`);
  }
}

function reportEntry(line: string): void {
  console.log(line);
  console.log(`characters: ${[...line].length}`);
  console.log(`bytes: ${Buffer.byteLength(line, "utf8")}`);
}

function main(): void {
  const line = validateEntry(ENTRY_LINE);
  ensureOutputDir(OUTPUT_DIR);
  writeFileSync(OUTPUT_FILE, line, { encoding: "utf8" });
  reportEntry(line);
}

main();
