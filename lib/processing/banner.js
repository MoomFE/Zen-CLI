
module.exports = function banner( webpackConfig, config ){

  // 没有传入 banner, 则删除相关参数
  if( !config.banner || !ZenJS.isString( config.banner ) ){
    delete config.banner;
    delete config.bannerOutputTypes;
    delete config.bannerIsComment;
  }
  // 处理匹配类型文件的参数
  else if( !ZenJS.isArray( config.bannerOutputTypes ) ){
    config.bannerOutputTypes = [ config.bannerOutputTypes ];
  }

  // 不是正则的条目则删除掉
  if( config.bannerOutputTypes ){
    config.bannerOutputTypes.$deleteValue( bannerOutputType => {
      return !ZenJS.isRegExp( bannerOutputType );
    });
  }

  // 使用注释对 banner 进行包裹
  if( config.banner ){
    if( config.bannerIsComment ){
      config.banner = config.banner.$replaceAll( '*/', '*\\/' );
      config.banner = config.banner.split( /\r\n|\r|\n/ );
      config.banner = config.banner.map( line => ' * ' + line );
      config.banner = [ '/*!', ' */' ].$concatTo( 1, config.banner ).join('\n');
    }
    config.banner = config.banner + '\n\n';
  }

}