# Webpack Stylelint loader

> [Stylelint](https://stylelint.io/) loader for Webpack 4.

## Installation

    $ npm install -D @sdvg/stylelint-loader

You also need to install Stylelint and [provide a config](https://stylelint.io/user-guide/configuration/):

    $ npm install -D stylelint

Add as first loader (last in Array) for your styles like this:

    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: '@sdvg/stylelint-loader',
            options: {
              ...
            }
          }
        ]
    }

## Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>quiet</code></td>
      <td><code>false</code></td>
      <td>Suppress Stylelint output</td>
    </tr>

    <tr>
      <td><code>emitError</code></td>
      <td><code>false</code></td>
      <td>Emit all warnings and errors as errors (recommended for production builds)</td>
    </tr>

    <tr>
      <td><code>emitWarning</code></td>
      <td><code>false</code></td>
      <td>Emit all warnings and errors as warnings (recommended when using Hot Module Reloading)</td>
    </tr>
  </tbody>
</table>

By default Stylelint warnings are emitted as warnings and Stylelint errors as errors.

The following options are passed directly to Stylelint:

* [configBasedir](https://stylelint.io/user-guide/node-api/#configbasedir)
* [configFile](https://stylelint.io/user-guide/node-api/#configfile)
* [configOverrides](https://stylelint.io/user-guide/node-api/#configoverrides)
* [ignoreDisables](https://stylelint.io/user-guide/node-api/#ignoredisables)
* [disableDefaultIgnores](https://stylelint.io/user-guide/node-api/#disabledefaultignores)
* [reportNeedlessDisables](https://stylelint.io/user-guide/node-api/#reportneedlessdisables)
* [syntax](https://stylelint.io/user-guide/node-api/#syntax)
* [customSyntax](https://stylelint.io/user-guide/node-api/#customsyntax)

## License

[MIT License](LICENSE)