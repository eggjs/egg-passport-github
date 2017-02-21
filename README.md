# egg-passport-github

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-github.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-github
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-github.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-github
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-github.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-github?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-github.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-github
[snyk-image]: https://snyk.io/test/npm/egg-passport-github/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-github
[download-image]: https://img.shields.io/npm/dm/egg-passport-github.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-github

github passport plugin for egg

## Install

```bash
$ npm i egg-passport-github --save
```

## Usage

```js
// config/plugin.js
exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};
```

## Configuration

```js
// config/config.default.js
exports.passportGithub = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
