const chmod = require('../util/chmod');


module.exports = function forcedWrite( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    // 不强制写入文件
    if( !config.forcedWrite ) return;

    config['Webpack-Processing'].push( compiler => {
      // 当文件写入内存中
      compiler.hooks.afterEmit.tap( 'writeFile', compilation => {
        compilation.assets.$each(( noop, RawSource ) => {
          // 尝试解锁文件
          chmod( RawSource.existsAt );
        });
      });
    });

  }

}