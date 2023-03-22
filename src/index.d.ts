declare function esmDirname(): {
  __filename: string;
  __dirname: string;
  setCwdToScriptDir: () => void;
};

export default esmDirname;
