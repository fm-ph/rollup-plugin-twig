import { createFilter } from 'rollup-pluginutils'
import { extname } from 'path'
import { minify } from 'html-minifier'
import { twig } from 'twig'

function TwigPlugin (options) {
  const filter = createFilter(options.include, options.exclude)
  const extensions = ['.twig']
  const minifyDefaults = {
    removeComments: true,
    collapseWhitespace: true
  }

  if (typeof options.minify === 'undefined') {
    options.minify = true
  }

  function compile (code) {
    let minified = code

    if (options.minify === true) {
      minified = minify(code, minifyDefaults)
    }

    const template = twig({
      data: minified
    })

    const tokens = JSON.stringify(template.tokens)

    return `Twig.twig({ data: ${tokens}, precompiled: true, allowInlineIncludes: true })`
  }

  return {
    name: 'rollup-plugin-twig',
    transform (code, id) {
      if (filter(id) && ~extensions.indexOf(extname(id).toLowerCase())) {
        if (INCLUDE_DEPS) {
          return {
            code: `import Twig from 'twig'
                 export default ${compile(code)}`,
            map: { mappings: '' }
          }
        } else {
          return {
            code: `export default ${compile(code)}`,
            map: { mappings: '' }
          }
        }
      }

      return null
    }
  }
}

export default TwigPlugin
