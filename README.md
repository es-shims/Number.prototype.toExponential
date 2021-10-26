# Number.prototype.toExponential <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES-spec-compliant Number.prototype.toExponential shim/polyfill/replacement that works as far down as ES3

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-number.prototype.exponential).

## Where this is needed

In particular:
 - Edge 15-17, and the equivalent versions of ChakraCore, have a rounding bug
 - IE 6-8 do not properly throw on ±Infinity as fractionalDigits
 - FF 3.6-86 have a rounding bug
 - Safari < 11 and FF < 50 incorrectly throw on edge cases

If you are not concerned with supporting these engines, there is no need to use this package.

Note: ES2018 increased the maximum range from 20 to 100. This package does _not_ attempt to patch this difference.

## Getting started

```sh
npm install --save number.prototype.exponential
```

## Usage/Examples

```js
console.log((-3).toExponential()); // "-3e+0"
console.log(0x10.toExponential(2)); // "1.60e+1"
console.log(1.23456.toExponential(5)); // "1.23456e+0"
console.log((-6.9e-11).toExponential(4)); // "-6.9000e-11"
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/number.prototype.exponential
[npm-version-svg]: https://versionbadg.es/es-shims/Number.prototype.toExponential.svg
[deps-svg]: https://david-dm.org/es-shims/Number.prototype.toExponential.svg
[deps-url]: https://david-dm.org/es-shims/Number.prototype.toExponential
[dev-deps-svg]: https://david-dm.org/es-shims/Number.prototype.toExponential/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Number.prototype.toExponential#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/number.prototype.exponential.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/number.prototype.exponential.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/number.prototype.exponential.svg
[downloads-url]: https://npm-stat.com/charts.html?package=number.prototype.exponential
[codecov-image]: https://codecov.io/gh/es-shims/Number.prototype.toExponential/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Number.prototype.toExponential/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Number.prototype.toExponential
[actions-url]: https://github.com/es-shims/Number.prototype.toExponential/actions
