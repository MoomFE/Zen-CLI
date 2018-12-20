const path = require('path');


module.exports = async function init( userConfigs ){

  const configs = [];

  initPath( userConfigs, configs );

  // console.log(
  //   userConfigs
  // );

  // 测试是否可以同时执行 rollup 和 webpack 的打包
  // return [
  //   {
  //     entry: 'D:\\Node\\Zen-CLI\\test\\src\\index.js',
  //     output: {
  //       path: 'D:\\Node\\Zen-CLI\\test\\dist',
  //       filename: 'index.js'
  //     }
  //   }, {
  //     input: 'D:\\Node\\Zen-CLI\\test\\src\\index1.js',
  //     output: {
  //       file: 'D:\\Node\\Zen-CLI\\test\\dist\\index1.js',
  //       format: 'es'
  //     }
  //   }
  // ];
}


/**
 * 初始化入口出口信息
 * 如果是自动搜寻打包模式, 则去搜索入口目录
 * @param {any[]} configs 
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

      configs.$concat(
        recursiveEntry( config, configs )
      );
    }

  });
}


function recursiveEntry( config, configs ){

}