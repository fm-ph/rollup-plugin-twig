const assert = require('assert')
const rollup = require('rollup').rollup

const twigPlugin = require('../')

process.chdir(__dirname)

function executeBundle (bundle) {
  const result = bundle.generate({
    format: 'cjs'
  })

  const fn = new Function('require', 'assert', result.code) // eslint-disable-line
  fn(require, assert)
}

describe('rollup-plugin-twig', () => {
  it('compiles twig template', () =>
    rollup({
      entry: 'fixtures/basic/basic.js',
      plugins: [
        twigPlugin({
          include: '**/*.twig',
          exclude: 'node_modules/**'
        })
      ]
    }).then(executeBundle)
  )

  it('compiles twig template without minify', () =>
    rollup({
      entry: 'fixtures/minify/minify.js',
      plugins: [
        twigPlugin({
          include: '**/*.twig',
          exclude: 'node_modules/**',
          minify: false
        })
      ]
    }).then(executeBundle)
  )

  it('compiles twig template with data', () =>
    rollup({
      entry: 'fixtures/data/data.js',
      plugins: [
        twigPlugin({
          include: '**/*.twig',
          exclude: 'node_modules/**'
        })
      ]
    }).then(executeBundle)
  )
})
