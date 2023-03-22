# @heiwa4126/esm-dirname (npm-esm-dirname)

- [English](./REDAME.md)
- [日本語](./REDAME-ja.md)

このモジュールは、**Node.js の ECMAScript 用**に
`path` と `url` モジュールを使用して、
スクリプトのディレクトリとファイル名を取得し、
スクリプトのディレクトリを現在の作業ディレクトリに設定する機能を提供します。

CommonJS の\_\_dirname, \_\_filename と同じもので、
短いコードですが、何度も書いていて嫌気がさしたので
パッケージにしました。

## インストール

```bash
npm install @heiwa4126/esm-dirname
```

## 使用方法

```javascript
import esmDirname from "@heiwa4126/esm-dirname";
const { __filename, __dirname, setCwdToScriptDir } = esmDirname();

console.log(__dirname); // スクリプトのディレクトリ
console.log(__filename); // スクリプトのファイル名
setCwdToScriptDir(); // スクリプトのディレクトリを現在の作業ディレクトリに設定
```
