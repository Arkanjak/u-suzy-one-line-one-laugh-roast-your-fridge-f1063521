import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line, under the 200-character gate: a specific fridge detail with the twist last.
const line =
  "My fridge light comes on like it's presenting dinner, then reveals three condiments and a yogurt old enough to have opinions.";

const primary = "/output/entry.txt";

try {
  mkdirSync(dirname(primary), { recursive: true });
  writeFileSync(primary, line, "utf8");
} catch {
  const here = dirname(fileURLToPath(import.meta.url));
  const fallback = join(here, "output", "entry.txt");
  mkdirSync(dirname(fallback), { recursive: true });
  writeFileSync(fallback, line, "utf8");
}
