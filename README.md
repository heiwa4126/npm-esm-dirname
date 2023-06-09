# @heiwa4126/esm-dirname (npm-esm-dirname)

- [English](./README.md)
- [日本語](./README-ja.md)

This module provides functionality to retrieve the script directory and filename and set the script directory as the current working directory using Node.js’s `path` and `url` modules for **ECMAScript**.

It is the same as CommonJS’s \_\_dirname and \_\_filename. It’s a short code, but I got tired of writing it over and over again so I made it into a package.

## Install

```bash
npm install @heiwa4126/esm-dirname
```

## Usage

```javascript
import esmDirname from "@heiwa4126/esm-dirname";
const { __filename, __dirname, setCwdToScriptDir } = esmDirname();

console.log(__dirname); // Script directory
console.log(__filename); // Script filename
setCwdToScriptDir(); // Set script directory as current working directory
```
