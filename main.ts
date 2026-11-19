import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Reconstructs entry.png from the single-line base64 text file shipped
// beside this program and writes it to the output directory.
// Deterministic: the same bytes are written on every run.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const encoded = readFileSync(join(here, "entry.png.b64"), "utf8").trim();
const png = Buffer.from(encoded, "base64");

writeFileSync(join(outDir, "entry.png"), png);
