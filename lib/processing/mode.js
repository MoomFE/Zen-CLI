
module.exports = function mode( webpackConfig, config ){

  // 生产环境
  if( config.mode === true || config.mode === 'production' ){
    config.mode = 'production';
  }
  // 开发模式 ( 默认模式 )
  else{
    config.mode = 'development';
  }

  if( webpackConfig.isWebpack ){
    webpackConfig.mode = config.mode;
  }

}