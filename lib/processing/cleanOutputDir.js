require('@moomfe/zenjs');
const cleanAll = require('../util/cleanDir');
const readDir = require('../util/readDir');
const stat = require('../util/stat');
const remove = require('../util/remove');


module.exports = function cleanOutputDir( webpackConfig, config ){

  // 格式化 cleanMatching 选项
  if( config.cleanOutputDir ){
    let cleanMatching = config.cleanOutputDirOptions.cleanMatching;

    // 转为数组格式
    cleanMatching = Array.isArray( cleanMatching ) ? cleanMatching
                                                   : [ cleanMatching ];

    // 只保留正则和字符串
    cleanMatching = cleanMatching.filter( matching => {
      return ZenJS.isRegExp( matching ) || ZenJS.isString( matching );
    });

    cleanMatching = cleanMatching.map( matching => {
      return ZenJS.isRegExp( matching ) ? matching : RegExp.$parse( matching );
    });

    config.cleanOutputDirOptions.cleanMatching = cleanMatching;
  }else{
    delete config.cleanOutputDirOptions;
  }


  // 处理逻辑
  if( webpackConfig.isWebpack ){
    // 不清空输出文件夹
    if( !config.cleanOutputDir ) return;

    const options = config.cleanOutputDirOptions || {};


    config['Webpack-Processing'].push( compiler => {
      compiler.hooks.afterEmit.tap( 'writeFile', compilation => {
        // 清空输出目录所有文件及文件夹
        if( options.cleanAll ) return cleanAll( config.output );

        /** 输出文件夹所有文件及文件夹列表 */
        let fileList = readDir( config.output ).map( name => [ `${ config.output }\\${ name }`, name ] );

        // 输出文件夹有文件或文件夹
        if( fileList.length ){
          const { cleanFile, cleanDir, cleanMatching } = options;

          // 有正则匹配规则
          if( cleanMatching.length ){
            // 遍历所有文件及文件夹, 没通过正则匹配的则不进行删除
            fileList = fileList.filter(([ path, name ]) => {
              let isSuccess;

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
            const [ isFile, isDirectory ] = stat( path );

            if( isFile ){
              if( cleanFile )
                remove( path );
            }else if( isDirectory && cleanDir ){
              remove( path );
            }
          });
        }
      });
    });
  }

}