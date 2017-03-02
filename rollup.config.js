import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')
const external = Object.keys(require('./package.json').dependencies).concat(['path'])

export default {
  entry: 'src/index.js',
  plugins: [
    buble()
  ],
  external,
  sourceMap: true,
  targets: [
    {
      format: 'es',
      dest: pkg.module
    },
    {
      format: 'cjs',
      dest: pkg.main
    }
  ]
}
