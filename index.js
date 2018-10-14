const stylelint = require('stylelint')
const path = require('path')
const loaderUtils = require('loader-utils')

const defaultOptions = {
  quiet: false,
  emitError: false,
  emitWarning: false
}

const supportedStylelintOptions = [
  'configBasedir',
  'configFile',
  'configOverrides',
  'ignoreDisables',
  'disableDefaultIgnores,',
  'reportNeedlessDisables',
  'syntax',
  'customSyntax'
]

module.exports = function loader (source) {
  const callback = this.async()
  const options = Object.assign(defaultOptions, loaderUtils.getOptions(this))
  const stylelintOptions = {
    code: source,
    codeFilename: path.relative(this.context, this.resourcePath),
    formatter: 'verbose'
  }

  supportedStylelintOptions.forEach(optionKey => {
    if (options[optionKey] !== undefined) {
      stylelintOptions[optionKey] = options[optionKey]
    }
  })

  stylelint.lint(stylelintOptions).then(result => {
    const hasResultWarnings = result.results.some(result => result.warnings.length > 0)

    if (result.errored || hasResultWarnings) {
      if (!options.quiet) {
        console.log(result.output)
      }

      if (options.emitError || options.emitWarning) {
        let emitter = result.errored ? this.emitError : this.emitWarning

        if (options.emitError) {
          emitter = this.emitError
        } else if (options.emitWarning) {
          emitter = this.emitWarning
        }

        emitter(new Error('Stylelint found errors'))
      }
    }

    callback(null, source)
  }).catch(error => {
    callback(new Error(`Stylelint error: ${error.toString()}`))
  })
}
