const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  entry: {},
  output: {
    pathinfo: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env' ]
            ],
            plugins: [ '@babel/plugin-transform-runtime' ]
          }
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: { plugins: [ require('autoprefixer') ] }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('index.css')
  ]

};