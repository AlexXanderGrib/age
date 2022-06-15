QIWI SDK / [Exports](modules.md)

# Quality Package Template

> Light and fully documented Age object for TS and JS
[![Test Status](https://github.com/AlexXanderGrib/age/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/age)
[![Downloads](https://img.shields.io/npm/dt/age.js.svg)](https://npmjs.com/package/age.js)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/age.svg)](https://github.com/AlexXanderGrib/age)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/age/main.svg)](https://codecov.io/gh/AlexXanderGrib/age)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/age.svg)](https://github.com/AlexXanderGrib/age)
[![age.js](https://snyk.io/advisor/npm-package/age.js/badge.svg)](https://snyk.io/advisor/npm-package/age.js)
[![Known Vulnerabilities](https://snyk.io/test/npm/age.js/badge.svg)](https://snyk.io/test/npm/age.js)
[![Quality](https://img.shields.io/npms-io/quality-score/age.js.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=age.js)
[![npm](https://img.shields.io/npm/v/age.js.svg)](https://npmjs.com/package/age.js)
[![license MIT](https://img.shields.io/npm/l/age.js.svg)](https://github.com/AlexXanderGrib/age/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/age.js)](https://bundlephobia.com/package/age.js)

## 📦 Installation

- **Using `npm`**
  ```shell
  npm i age.js
  ```
- **Using `Yarn`**
  ```shell
  yarn add age.js
  ```
- **Using `pnpm`**
  ```shell
  pnpm add age.js
  ```

## ⚙️ Usage

### How to import

1. ES Modules
   ```javascript
   import { Age } from "age.js";
   ```
2. Common JS
   ```javascript
   const { Age } = require("age.js");
   ```

### How to construct

Age constructor is exactly the same as [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)'s
Cause age is determined by underlying date.

Ways to construct

1. Date string
   ```javascript
   const age = new Age("1970-01-01 11:25:04");
   ```
2. Milliseconds since 1st of jan. 1970
   ```javascript
   const age = new Age(19504000);
   ```
3. By passing a date object
   ```javascript
   const age = new Age(new Date("1970-01-01 11:25:04"));
   ```
4. By passing each date part separately
   ```javascript
   const age = new Age(
     1970, // year
     0, // month (january)
     0, // Optional: day of the mons
     0, // Optional: hours
     0, // Optional: minutes
     0, // Optional: seconds
     0 // Optional: milliseconds
   );
   ```

### Properties

1. `value`
   ```javascript
   console.log(age.value); // 52
   ```
2. `dateOfBirth`
   ```javascript
   console.log(age.dateOfBirth.toISOString()); // "1970-01-01T08:25:04.000Z"
   ```
3. `dayOfBirth`
   ```javascript
   console.log(age.dateOfBirth.toISOString()); // "1970-01-01T00:00:00.000Z"
   ```
4. `isBirthday(date?)`
   ```javascript
   console.log(age.isBirthday(/* default: now */)); // false
   console.log(age.isBirthday("2021-01-01")); // true
   console.log(age.isBirthday("2021-01-02")); // false
   ```

### Serialization

Date object serializes as a number

```javascript
console.log(age.value); // 52
console.log(age.valueOf); // 52
console.log(+age); // 52
console.log(String(age)); // 52
console.log(JSON.stringify(age)); // 52
```
