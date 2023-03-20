import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function setCwdToScriptDir() {
  process.chdir(__dirname);
}

export { __dirname, __filename, setCwdToScriptDir };
