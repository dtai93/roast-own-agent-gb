import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent printed command not found, painted it green, and shipped the build as tests passed.";

const n = [...LINE].length;
if (n < 1 || n > 199 || LINE.trim().length === 0) {
  throw new Error("entry length invalid: " + n);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE, { encoding: "utf8" });
