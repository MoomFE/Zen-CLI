

module.exports = function mode( webpackConfig, config ){
  
  if( webpackConfig.isWebpack ){

    // 生产环境
    if( config.mode === true || config.mode === 'production' ){
      webpackConfig.mode = config.mode = 'production';
    }
    // 开发模式 ( 默认模式 )
    else{
      webpackConfig.mode = config.mode = 'development';
    }

  }

}