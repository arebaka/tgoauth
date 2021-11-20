# Telegram OAuth for Node.js
*When you dont know what to code, code something useful.*

> A microservice for [Telegram](https://telegram.org) OAuth on Node.js.

![](https://img.shields.io/tokei/lines/github/arebaka/tgoauth)
![](https://img.shields.io/github/repo-size/arebaka/tgoauth)
![](https://img.shields.io/npm/v/tgoauth)
![](https://img.shields.io/codefactor/grade/github/arebaka/tgoauth)

## Installation
```bash
npm i tgoauth
```

## Usage
```javascript
const tgoauth = require("tgoauth");

const secretKey = tgoauth.createSecretKey(BOT_TOKEN);

if (tgoauth.check(secretKey, data)) {
    // success
} else {
    // failed
}
```
