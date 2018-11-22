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


/**
 * 尝试强制解锁文件只读状态
 */
function Chmod( config, path ){
  if( config.forcedWrite ){
    try {
      fs.chmodSync( path, 0o765 );
    }catch(error){}
  }
}

/**
 * 格式化用户定义的 banner 后返回
 */
function GetBanner( config, path ){
  let banner = config.banner;
  let success = true;

  // 验证文件类型
  config.bannerOutputTypes.$each( reg => {
    return success = reg.test( path );
  });

  // 是不需要添加 banner 的文件类型
  if( !success ){
    return '';
  }

  // 使用注释对 banner 进行包裹
  if( config.bannerIsComment ){
    banner = banner.$replaceAll( '*/', '*\\/' );
    banner = banner.split( /\r\n|\r|\n/ );
    banner = banner.map( line => ' * ' + line );
    banner = [ '/*!', ' */' ].$concatTo( 1, banner ).join('\n');
  }

  return banner + '\n\n';
}

/**
 * 读取文件并且导入用户传入的 banner
 */
function ReadFile( config, path, memoryFS ){
  const data = memoryFS.readFileSync( path );

  if( config.banner ){
    return GetBanner( config, path ) + data;
  }

  return data;  
}

/**
 * 输出文件到系统中
 */
function OutputFile( config, path, memoryFS ){
  const data = ReadFile( config, path, memoryFS );

  try {
    fs.outputFileSync( path, data );
  } catch (error) {
    throw error;
  }
}