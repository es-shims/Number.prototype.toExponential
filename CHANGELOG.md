# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.3](https://github.com/es-shims/Number.prototype.toExponential/compare/v1.0.2...v1.0.3) - 2021-10-27

### Commits

- [Fix] implementation: properly handle `0.toExponential(2)` etc [`7f2b3fc`](https://github.com/es-shims/Number.prototype.toExponential/commit/7f2b3fc409661e2d7549078ae2cb771f8583a448)
- [Tests] fix tests [`92f9820`](https://github.com/es-shims/Number.prototype.toExponential/commit/92f9820cee346cfd69f2d40145239c5259735fe7)
- [Tests] increase coverage [`9f43110`](https://github.com/es-shims/Number.prototype.toExponential/commit/9f4311056c28dbbc7df2a12a4eab9ad07d461645)
- [Fix] Safari &lt; 11 and FF &lt; 50 incorrectly throw on edge cases [`d34fe4b`](https://github.com/es-shims/Number.prototype.toExponential/commit/d34fe4b52d552b20eead6d79d17813db247cc684)
- [actions] update codecov uploader [`39654a4`](https://github.com/es-shims/Number.prototype.toExponential/commit/39654a49a6b6733df9dbaee78be113114bddfad1)
- [Fix] FF 3.6 - 86 do not round properly [`8a06af7`](https://github.com/es-shims/Number.prototype.toExponential/commit/8a06af775730f295645623541c834caf0258616b)
- [Fix] IE &lt;= 11 and Edge &lt;= 14 have a rounding bug [`e5765a9`](https://github.com/es-shims/Number.prototype.toExponential/commit/e5765a9af462fdb6907b75146c02c0c267e941a3)
- [Dev Deps] update `@es-shims/api` [`f04ed07`](https://github.com/es-shims/Number.prototype.toExponential/commit/f04ed072c9ecd2d8cf87ea024c51213cd549d155)
- [Tests] increase coverage [`2e068f9`](https://github.com/es-shims/Number.prototype.toExponential/commit/2e068f90762fe5adaf7cbfff8b1eab091183fbcd)

## [v1.0.2](https://github.com/es-shims/Number.prototype.toExponential/compare/v1.0.1...v1.0.2) - 2021-10-03

### Commits

- [Deps] update `es-abstract` [`fbef089`](https://github.com/es-shims/Number.prototype.toExponential/commit/fbef0898cb0dcd139be31eb166c96861a450717d)
- [Fix] use `thisNumberValue` instead of `Number()` [`45aef15`](https://github.com/es-shims/Number.prototype.toExponential/commit/45aef15dc681d7fb1729c5071446d55ac92a6752)
- [actions] update workflows [`6f5a556`](https://github.com/es-shims/Number.prototype.toExponential/commit/6f5a5569a538db605fc8eff2d6d691f1fbc7b8e4)
- [Dev Deps] update `@es-shims/api` [`7b966fd`](https://github.com/es-shims/Number.prototype.toExponential/commit/7b966fd0cffcbd39a4833034269c99e08db5e75a)
- [readme] Edge 18 works fine [`7b8c229`](https://github.com/es-shims/Number.prototype.toExponential/commit/7b8c2294337712e67276fb9450fd0886627487f5)

## [v1.0.1](https://github.com/es-shims/Number.prototype.toExponential/compare/v1.0.0...v1.0.1) - 2021-08-31

### Commits

- [Fix] handle IE 6-8 not throwing on fractionalDigits [`1ee52e0`](https://github.com/es-shims/Number.prototype.toExponential/commit/1ee52e0fa49fbc355e7e57924f6d37851e03dfe8)
- [Refactor] use `math.log10` [`6f5f251`](https://github.com/es-shims/Number.prototype.toExponential/commit/6f5f2516c2b569cabe6ee4df494af4dd4c2366d1)
- [Tests] add `@es-shims/api` [`5bd4ff3`](https://github.com/es-shims/Number.prototype.toExponential/commit/5bd4ff3e81b7d3fe4bd58cb9cb3537de6a69f907)

## v1.0.0 - 2021-08-31

### Commits

- Implementation and tests [`55ca823`](https://github.com/es-shims/Number.prototype.toExponential/commit/55ca8234a02a70b2b48667eb6aaddfc84ed0b088)
- Initial commit [`2d90a4f`](https://github.com/es-shims/Number.prototype.toExponential/commit/2d90a4f26683d06e0aee61548bc47f8b16c97938)
- readme [`983f6ad`](https://github.com/es-shims/Number.prototype.toExponential/commit/983f6ad186010c65cda51a4199e5e7e1611dc83f)
- npm init [`4d0e707`](https://github.com/es-shims/Number.prototype.toExponential/commit/4d0e70756de6eb353d98c9aa08f0001966c1369b)
- [meta] add `auto-changelog` [`ec429ac`](https://github.com/es-shims/Number.prototype.toExponential/commit/ec429ac5acf030a6ff5eb809445e2e113787653f)
- Only apps should have lockfiles [`8049899`](https://github.com/es-shims/Number.prototype.toExponential/commit/8049899af4ddef6d2ce836151cc29f70eaf5217b)
