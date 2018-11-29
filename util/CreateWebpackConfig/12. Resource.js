

module.exports = function( webpack, config ){

  webpack.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)|((woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?)$/,
    use: [
      {
        loader: 'url-loader',
        options: config.resource.$get(
          'limit',
          'name',
          'outputPath'
        )
      }
    ]
  });

}