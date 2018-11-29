const css = /\.css$/;

module.exports = function( config ){
  // 使用了 vue         非直出 css 文件时
  if( config.useVue && !css.test( config.to ) ){
    return 'vue-style-loader';
  }

  return '';
}