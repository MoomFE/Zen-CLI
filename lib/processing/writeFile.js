require('@moomfe/zenjs');
const beautifyCss = require('../util/beautifyCss');
const outputFile = require('../util/outputFile');


module.exports = function writeFile( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    config['Webpack-Processing'].push( compiler => {
      
      // 当文件写入内存中
      compiler.hooks.afterEmit.tap( 'writeFile', compilation => {
        // 将所有文件进行输出
        compilation.assets.$each(( noop, RawSource ) => {
          const path = RawSource.existsAt;
          const data = processingOutputFiles( config, path );

          outputFile( path, data );
        });
      });
    });
  }

}


function processingOutputFiles( config, path ){
  let data = config.memoryFS.readFileSync( path );

  // 开发模式下, 对输出的 css 进行美化
  if( config.mode === 'development' && /\.css$/.test( path ) ){
    data = data.toString();
    data = beautifyCss( data );
    data = Buffer.from( data );
  }

  // 需要插入 banner
  if(
    config.banner &&
    config.bannerOutputTypes.$find( reg => reg.test( path ) )  
  ){
    data = config.banner + data.toString();
    data = Buffer.from( data );
  }

  return data;
}