
module.exports = function resource( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    webpackConfig.module.rules.push(
      resourceRule( config )
    );
  }

}


function resourceRule( config ){
  return {
    test: /\.((png|jpe?g|gif|svg)|((woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?))$/,
    use: {
      loader: 'url-loader',
      options: config.resource.$get(
        'limit',
        'name',
        'outputPath'
      )
    }
  };
}