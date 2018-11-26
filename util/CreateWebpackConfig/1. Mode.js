

module.exports = function( webpack, config ){
  // 生产环境
  if( config.mode === true || config.mode === 'production' ){
    webpack.mode = config.mode = 'production';
  }
  // 开发模式 ( 默认模式 )
  else{
    webpack.mode = config.mode = 'development';
  }
}