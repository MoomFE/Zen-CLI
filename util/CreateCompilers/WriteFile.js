const MemoryFS = require('memory-fs');
const fs = require('fs-extra');


module.exports = function( compiler, webpackConfig ){
  const memoryFS = new MemoryFS();
  const config = webpackConfig._zen_config_;

  // 将输出文件存在内存中
  compiler.outputFileSystem = memoryFS;

  // 将存在内存中的文件写到存储中
  compiler.hooks.afterEmit.tap( 'writeFile', compilation => {
    // 将所有文件写入到存储中
    compilation.assets.$each(( noop, RawSource ) => {
      const path = RawSource.existsAt;

      let data = memoryFS.readFileSync( path );

      // 输出文件顶部添加 banner
      if( config.banner ){
        data = `${ config.banner }\n\n${ data }`;
      }

      // 如果文件上锁, 尝试解锁文件
      if( config.forcedWrite ){
        try {
          fs.chmodSync( path, 0o765 );
        }catch(error){}
      }

      // 写入文件
      try {
        fs.outputFileSync( path, data );
      } catch (error) {
        // 错误处理暂未处理
      }
    });
  });
}