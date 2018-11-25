
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
              [ '@babel/preset-env', {
                targets: {}
              }]
            ],
            plugins: [ '@babel/plugin-transform-runtime' ]
          }
        }
      }
    ]
  },

  plugins: []

};