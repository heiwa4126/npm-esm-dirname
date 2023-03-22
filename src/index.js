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
Retrieves the directory name and filename of the current ES module script, and provides a function to change the working directory to the script directory.
@function
@returns {Object} An object containing the directory name, filename, and a function to set the current working directory to the script directory.
@throws {TypeError} If the current script is not an ES module.
@example
const { __dirname, __filename, setCwdToScriptDir } = esmDirname();
console.log(__dirname); // Outputs the directory name of the current script
console.log(__filename); // Outputs the filename of the current script
setCwdToScriptDir(); // Changes the working directory to the directory of the current script
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
