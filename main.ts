import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const b64Path = join(here, "entry.png.b64");

const encoded = readFileSync(b64Path, "utf8").trim();
const png = Buffer.from(encoded, "base64");

if (png.length === 0 || png.readUInt32BE(0) !== 0x89504e47) {
  throw new Error("entry.png.b64 did not decode to a PNG");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);
console.log(`wrote ${png.length} bytes to ${join(outDir, "entry.png")}`);
