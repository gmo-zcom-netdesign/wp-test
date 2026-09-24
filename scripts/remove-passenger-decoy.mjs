import { rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const decoy = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../node_modules/react-dom/server.js",
);

rmSync(decoy, { force: true });
