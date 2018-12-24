
module.exports = function babel( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    webpackConfig.module.rules.push( config.babelrc );
  }

}