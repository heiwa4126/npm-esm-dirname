# @heiwa4126/esm-dirname (npm-esm-dirname)

- [English](./REDAME.md)
- [日本語](./REDAME-ja.md)

このモジュールは、Node.js の ECMAScript 用に
`path` と `url` モジュールを使用して、
スクリプトのディレクトリとファイル名を取得し、
スクリプトのディレクトリを現在の作業ディレクトリに設定する機能を提供します。

CommonJS の\_\_dirname, \_\_filename と同じもので、
短いコードですが、何度も書いていて嫌気がさしたので
パッケージにしました。

## 使用方法

最初に

```bash
npm install @heiwa4126/esm-dirname
```

で、

```javascript
import { __dirname, __filename, setCwdToScriptDir } from "@heiwa4126/esm-dirname";

console.log(__dirname); // スクリプトのディレクトリ
console.log(__filename); // スクリプトのファイル名

setCwdToScriptDir(); // スクリプトのディレクトリを現在の作業ディレクトリに設定
```

## エキスポートされる変数と関数

- \_\_dirname: スクリプトが配置されているディレクトリ。
- \_\_filename: スクリプトファイル名。
- setCwdToScriptDir: 関数。スクリプトが配置されているディレクトリを現在の作業ディレクトリに設定します。
