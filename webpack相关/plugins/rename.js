const fs = require('fs')

class webpackRenamePlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tapAsync('webpackRenamePlugin', (compilation, next) => {
      let dirpath = compilation.compilation.compiler.options.context
      const filterMap = /\.(map)$/
      Array.from(compilation.compilation.compiler._assetEmittingPreviousFiles).map((it) => {
        if (filterMap.test(it)) {
          let newPath = it.split('.js.map')[0] + '.js.map'
          fs.rename(it, newPath, (error) => {})
        }
      })
      next()
    })
  }
}

module.exports = webpackRenamePlugin
