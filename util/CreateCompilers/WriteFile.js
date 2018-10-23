const MemoryFS = require('memory-fs');
const fs = require('fs-extra');


module.exports = function( compiler, webpackConfig ){
  const memoryFS = new MemoryFS();
  const config = webpackConfig._zen_config_;

  // 将输出文件存在内存中
  compiler.outputFileSystem = memoryFS;

  // 当文件写入内存中
  compiler.hooks.afterEmit.tap( 'writeFile', compilation => {
    // 将所有文件写入到存储中
    compilation.assets.$each(( noop, RawSource ) => {
      const path = RawSource.existsAt;

      // 如果文件上锁, 尝试解锁文件
      Chmod( config, path );

      // 写入文件
      OutputFile( config, path, memoryFS );
    });
  });
}


function Chmod( config, path ){
  if( config.forcedWrite ){
    try {
      fs.chmodSync( path, 0o765 );
    }catch(error){}
  }
}

function GetBanner( config ){
  let banner = config.banner;

  if( banner ){
    if( config.bannerIsComment ){
      banner = banner.$replaceAll( '*/', '*\\/' );
      banner = banner.split(/\r\n|\r|\n/);
      banner = banner.map( line => ' * ' + line );
      banner = [ '/*!', ' */' ].$concatTo( 1, banner ).join('\n');
    }

    banner += '\n\n';
  }

  return banner || '';
}

function ReadFile( config, path, memoryFS ){
  const data = memoryFS.readFileSync( path );
  const banner = GetBanner( config );

  return banner + data;
}

function OutputFile( config, path, memoryFS ){
  const data = ReadFile( config, path, memoryFS );

  try {
    fs.outputFileSync( path, data );
  } catch (error) {
    // 错误处理暂未处理
  }
}