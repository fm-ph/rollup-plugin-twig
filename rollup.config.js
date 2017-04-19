import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'

const pkg = require('./package.json')
const external = Object.keys(require('./package.json').dependencies).concat(['path'])

let targets = [
  {
    format: 'es',
    dest: pkg.module
  },
  {
    format: 'cjs',
    dest: pkg.main
  }
]

if (process.env.INCLUDE_DEPS === 'false') {
  targets = [
    {
      format: 'cjs',
      dest: pkg.noDependency
    }
  ]
}

export default {
  entry: 'src/index.js',
  plugins: [
    buble(),
    replace({
      INCLUDE_DEPS: process.env.INCLUDE_DEPS
    })
  ],
  external,
  sourceMap: true,
  targets
}
