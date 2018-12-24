
module.exports = function babel( webpackConfig, config ){

  if( webpackConfig.isWebpack ){

    // 使用 babel
    if( config.babel ){
      webpackConfig.module.rules.push( config.babelrc.true );
    }
    // 不使用 babel
    else{
      webpackConfig.module.rules.push( config.babelrc.false );
    }

  }

}