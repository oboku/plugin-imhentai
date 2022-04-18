const path = require(`path`)

const IS_PROD = process.env.NODE_ENV !== `development`

module.exports = {
  entry: {
    index: `./src/index.tsx`
  },
  externals: [
    `react`,
    `react-dom`,
    /^@material-ui\/.+$/,
    /^@oboku\/.+$/
  ],
  ...!IS_PROD && {
    devtool: `source-map`,
    mode: `development`
  },
  ...IS_PROD && {
    mode: `production`,
    optimization: {
      minimize: true
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: `ts-loader`,
          options: {
            compilerOptions: {
              noEmit: false
            }
          }
        }]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: `url-loader`,
        options: {
          limit: Infinity // everything
        }
      }
    ]
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`]
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, `dist`),
    libraryTarget: `commonjs`,
    clean: true
  }
}
