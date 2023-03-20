import { __filename, __dirname, setCwdToScriptDir } from "../src/index.js";

console.log(__filename);
console.log(__dirname);
console.log(process.cwd());
setCwdToScriptDir();
console.log(process.cwd());
