import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist", "client");
const indexPath = path.join(root, "index.html");

if (!existsSync(indexPath)) {
  console.error("Missing dist/client/index.html. Run npm run build first.");
  process.exit(1);
}

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".map": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function fileInsideRoot(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const relative = decoded.replace(/^\/+/, "");
  const filePath = path.resolve(root, relative);
  if (filePath !== root && !filePath.startsWith(root + path.sep)) return null;
  return filePath;
}

function existingFile(pathname) {
  const filePath = fileInsideRoot(pathname);
  if (!filePath || !existsSync(filePath)) return null;
  const stat = statSync(filePath);
  return stat.isFile() ? { filePath, size: stat.size } : null;
}

const port = Number(process.env.PORT) || 3000;
const passenger = globalThis.PhusionPassenger;

if (passenger) {
  passenger.configure({ autoInstall: false });
}

const server = createServer((req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }

  const pathname = new URL(req.url ?? "/", "http://127.0.0.1").pathname;
  const file = existingFile(pathname) ?? { filePath: indexPath, size: statSync(indexPath).size };
  const type = mimeTypes[path.extname(file.filePath).toLowerCase()] ?? "application/octet-stream";

  res.writeHead(200, {
    "Content-Length": file.size,
    "Content-Type": type,
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  createReadStream(file.filePath).pipe(res);
});

if (passenger) {
  server.listen("passenger");
} else {
  server.listen(port, "0.0.0.0", () => {
    console.log(`Serving dist/client on http://0.0.0.0:${port}`);
  });
}
