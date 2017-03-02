import template from './template.twig'
assert.equal(template.render({ foo: 'bar' }), '<div>bar</div>') // eslint-disable-line
