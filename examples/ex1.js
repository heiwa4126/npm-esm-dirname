import esmDirname from "../src/index.js";
const { __filename, __dirname, setCwdToScriptDir } = esmDirname();
// 要るものだけimportしてください

console.log(__filename);
console.log(__dirname);
console.log(process.cwd());
setCwdToScriptDir();
console.log(process.cwd());
