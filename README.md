# rollup-plugin-twig

[![build status][travis-image]][travis-url]
[![stability][stability-image]][stability-url]
[![npm version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

[Rollup](https://github.com/rollup/rollup) plugin that imports pre-compiled [Twig.js](https://github.com/twigjs/twig.js) templates.

## Installation

[![NPM](https://nodei.co/npm/rollup-plugin-twig.png)](https://www.npmjs.com/package/rollup-plugin-twig)

```sh
npm install rollup-plugin-twig --save-dev
```

## Usage

Configure Rollup with `rollup-plugin-twig` :

```js
import { rollup } from 'rollup'
import twig from 'rollup-plugin-twig'

rollup({
  entry: 'src/main.js',
  plugins: [
    twig()
  ]
}).then(...)
```

Create a template :

```html
<div>{{ foo }}</div>
```

Import the template and render it with data (optional) :

```js
import template from './template.twig'

const data = { foo: 'bar' }
console.log(template.render(data));  // <div>bar</div>
```

## Options

Plugin options you can pass :

* `include` - Minimatch or array of minimatch with files that should be included by default.
* `exclude` - Minimatch or array of minimatch with files that should be excluded by default.
* `minify` - Minify the template (`true` by default).

## Build

To build the sources with `rollup` in `./lib` directory :

```sh
npm run build
```

## Testing

To run the tests, first clone the repository and install its dependencies :

```sh
git clone https://github.com/fm_ph/rollup-plugin-twig.git
cd rollup-plugin-twig
npm install
```

Then, run the tests :

```sh
npm test
```

To watch (test-driven development) :

```sh
npm run test:watch
```

For coverage :

```sh
npm run test:coverage
```

## License

MIT [License](LICENSE.md) © [Patrick Heng](http://hengpatrick.fr/) [Fabien Motte](http://fabienmotte.com/) 

[travis-image]: https://img.shields.io/travis/fm-ph/rollup-plugin-twig/master.svg?style=flat-square
[travis-url]: http://travis-ci.org/fm-ph/rollup-plugin-twig
[stability-image]: https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index
[npm-image]: https://img.shields.io/npm/v/rollup-plugin-twig.svg?style=flat-square
[npm-url]: https://npmjs.org/package/rollup-plugin-twig
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
