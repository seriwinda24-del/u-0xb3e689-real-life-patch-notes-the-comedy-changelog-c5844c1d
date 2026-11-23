// Real-Life Patch Notes: The Comedy Changelog — one-line entry (151 chars).
// LINE: "v2.0.3: Fixed an issue where the inner cheek swells after being bitten, guaranteeing further bites; please chew on the opposite side until 2.0.4 ships."
// The joke: a self-reinforcing body bug — bite your cheek once and the swelling
// guarantees you bite it again — reported in dry release-note voice, with the
// workaround ("chew on the opposite side until 2.0.4 ships") as the punchline.
// Specific, universal, wince-and-laugh at once; version number + terse
// engineering register, fix stated as shipped. Freshness: anchor
// 7231fd58b5f62189364e8502544814fa8b205003, drand-quicknet round 34223304.
// Revision: verified the line twice from different working directories;
// both runs wrote identical bytes (sha256 9c126054...), 151 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "v2.0.3: Fixed an issue where the inner cheek swells after being bitten, guaranteeing further bites; please chew on the opposite side until 2.0.4 ships.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
