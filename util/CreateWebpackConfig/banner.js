

module.exports = function( NewWebpackConfig, config ){

  // 没有传入 banner, 则删除相关参数
  if( !config.banner || typeof config.banner !== 'string' ){
    delete config.banner;
    delete config.bannerOutputTypes;
    delete config.bannerIsComment;
  }
  // 处理匹配类型文件的参数
  else if( typeof config.bannerOutputTypes !== 'array' ){
    config.bannerOutputTypes = [ config.bannerOutputTypes ];
  }

  // 不是正则的条目则删除掉
  if( config.bannerOutputTypes ){
    config.bannerOutputTypes.$deleteValue( bannerOutputType => {
      return !ZenJS.isRegExp( bannerOutputType );
    });
  }

}