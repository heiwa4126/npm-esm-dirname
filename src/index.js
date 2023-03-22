import path from "node:path";
import process from "node:process";
import url from "node:url";

function getCallStack() {
  const _bak = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => stack;
  const stack = new Error().stack.slice(1);
  Error.prepareStackTrace = _bak;
  return stack;
}

/**
 * 現在のスクリプトの情報を取得する関数
 * @returns {{ __dirname: string, __filename: string, setCwdToScriptDir: function }} 現在のスクリプトのディレクトリ名(__dirname)、ファイル名(__filename)、およびスクリプトのディレクトリをカレントディレクトリに変更するsetCwdToScriptDir()関数を含むオブジェクト
 *
 * @example
 *
 * // スクリプトのディレクトリを取得する例
 * const { __dirname } = getCurrentScriptInfo();
 * console.log(__dirname); // /path/to/your/script/directory
 *
 * // スクリプトのファイル名を取得する例
 * const { __filename } = getCurrentScriptInfo();
 * console.log(__filename); // /path/to/your/script.js
 *
 * // スクリプトのディレクトリをカレントディレクトリに変更する例
 * const { setCwdToScriptDir } = getCurrentScriptInfo();
 * setCwdToScriptDir();
 * console.log(process.cwd()); // /path/to/your/script/directory
 */
function esmDirname() {
  const stack = getCallStack();
  const __filename = url.fileURLToPath(stack[1].getFileName());
  const __dirname = path.dirname(__filename);

  const setCwdToScriptDir = () => {
    process.chdir(__dirname);
  };

  return { __dirname, __filename, setCwdToScriptDir };
}

export default esmDirname;
