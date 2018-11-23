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
      // 清理输出文件夹
      CleanOutputDir( config, path );
      // 写入文件
      OutputFile( config, path, memoryFS );
    });
  });
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
 * 尝试强制解锁文件只读状态
 */
function Chmod( config, path ){
  if( config.forcedWrite ){
    try {
      fs.chmodSync( path, 0o765 );
    }catch(error){}
  }
}



function CleanOutputDir( config ){
  // 不清空输出文件夹
  if( !config.cleanOutputDir ) return;
  // 清空输出所有文件及文件夹
  if( config.cleanOutputDirOptions.cleanAll ) return CleanAll( config );

  /** 输出文件夹所有文件及文件夹列表 */
  let fileList = GetFileList( config );

  // 输出文件夹有文件或文件夹
  if( fileList.length ){

    const { cleanFile, cleanDir, cleanMatching } = config.cleanOutputDirOptions;

    // 有正则匹配规则
    if( cleanMatching.length ){
      // 遍历所有文件及文件夹, 没通过正则匹配的则不进行删除
      fileList = fileList.filter(([ path, name ]) => {
        let isSuccess = false;

        // 遍历所有正则匹配规则
        // 如果其中一个匹配成功, 那么其余的就不进行匹配
        cleanMatching.$each( matching => {
          if( matching.test( name ) || matching.test( path ) ){
            return !( isSuccess = true );
          }
        });

        return isSuccess;
      });

    }

    // 将通过检测的文件进行删除
    fileList.forEach(([ path ]) => {
      const [ isFile, isDirectory ] = GetStat( path );

      if( isFile ){
        if( config.cleanOutputDirOptions.cleanFile ){
          Remove( path );
        }
      }else if( isDirectory ){
        if( config.cleanOutputDirOptions.cleanDir ){
          Remove( path );
        }
      }
    });
  }
}
/**
 * 清空输出所有文件及文件夹
 */
function CleanAll( config ){
  try {
    fs.emptyDirSync( config.output );
  }catch(error){}
}
/**
 * 移除文件或文件夹
 */
function Remove( path ){
  try {
    fs.removeSync( path );
  }catch(error){}
}
/**
 * 获取输出文件夹所有文件及文件夹
 */
function GetFileList( config ){
  const fileList = [];

  try {
    fileList.$concat(
      fs.readdirSync( config.output )
    );
  }catch(error){}

  return fileList.map( name => {
    return [ `${ config.output }\\${ name }`, name ];
  });
}
/**
 * 获取传入路径是否是文件或文件夹
 */
function GetStat( path ){
  let isFile = false;
  let isDirectory = false;
  let stat;

  try {
    stat = fs.statSync( path )
  }catch(error){}

  if( stat ){
    if( isFile = stat.isFile() ){}
    else{
      isDirectory = stat.isDirectory();
    }
  }

  return [ isFile, isDirectory ];
}