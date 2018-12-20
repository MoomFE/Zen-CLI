require('@moomfe/zenjs');
const path = require('path');
const fs = require('fs-extra');
const readDir = require('../util/readDir');


module.exports = async function init( userConfigs ){

  const configs = [];

  initPath( userConfigs, configs );

}


/**
 * 初始化入口出口信息
 * 如果是自动搜寻打包模式, 则去搜索入口目录
 * @param {any[]} userConfigs 初始配置集
 * @param {any[]} configs 最终配置集
 */
function initPath( userConfigs, configs ){
  userConfigs.forEach( config => {

    // 当前配置是处理单个文件
    if( config.from ){
      config.from = path.resolve( runCommandPath, config.from );
      config.to = path.resolve( runCommandPath, config.to );
      
      configs.push(
        config.$delete( 'entry', 'output' )
      );
    }
    // 当前配置是自动搜寻模式
    else{
      config.entry = path.resolve( runCommandPath, config.entry );
      config.output = path.resolve( runCommandPath, config.output );

      recursiveEntry( config.entry, config, configs );
    }

  });
}


/**
 * 使用搜索自动搜寻打包模式的配置, 尝试寻找入口文件夹所有匹配的打包入口文件
 * @param {*} entry 入口文件夹
 * @param {*} config 单个自动搜寻打包配置
 * @param {*} configs 最终配置集
 */
function recursiveEntry( entry, config, configs ){
  /** 该文件夹下所有文件及文件夹 */
  const files = readDir( entry );

  files.forEach( name => {
    const path = `${ entry }\\${ name }`;
    const stat = fs.statSync( path );

    // 当前路径是文件夹, 递归继续向内查找
    if( stat.isDirectory() ){
      return recursiveEntry( path, config, configs );
    }

    // 查找到了入口文件
    if( stat.isFile() ){
      if( name.toLowerCase() === config.entryFilename.toLowerCase() ){
        // config.$delete( 'entry', 'output' )
        configs.push(
          Object.$assign( {}, config, {
            entry,
            output: entry.replace( config.entry, config.output )
          })
        );
      }
    }
  });
}