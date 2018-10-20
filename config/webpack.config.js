

module.exports = {

  entry: {},
  output: {},

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env', { useBuiltIns: 'usage' } ]
            ],
            plugins: [ '@babel/plugin-transform-runtime' ]
          }
        }
      }

    ]
  }

};