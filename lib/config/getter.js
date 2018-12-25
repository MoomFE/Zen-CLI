require('@moomfe/zenjs');
const console = require('../console');
const question = require('../console/question');
const defaultConfig = require('../../config/zen.config');



module.exports = async function getter(){
  const configPath = `${ runCommandPath }\\zen.config.js`;
  const configs = [];
  let config;


  console.logStart();
  console.log(`正在查找位于 "${ runCommandPath }" 的 "zen.config.js" 配置文件 ...`);


  try {
    config = require( configPath );
  } catch (error) {
    await question(
      '- 未在指定位置查找到配置文件或配置文件有误, 是否使用默认配置 ? ( Y / N ) ',
      () => { config = {} },
      () => {
        console.logEnd('感谢使用 !');
        process.exit(0)
      }
    );
  } finally {
    // 确保配置文件重载时可以去重新读取最新的配置文件
    delete require.cache[ configPath ];
  }


  // 使用了分组配置
  // 将 config 选项视为当前项目的公用默认配置使用
  if( config.group ){
    // 当用户使用了指令限定了指定组时
    // 则只使用指定组的配置以及 pipe 内的配置
    if( commandDir ){
      if( config.group[ commandDir ] && config.group[ commandDir ].length ){
        configs.$concat(
          assign( config.group[ commandDir ], config.config )
        );
      }
    }
    // 未指定组时
    // 则使用所有组的配置以及 pipe 内的配置
    else{
      Object.$each( config.group, ( name, pipe ) => {
        configs.$concat(
          assign( pipe, config.config )
        );
      });
    }
  }

  // 使用了 pipe 配置
  // 将 config 选项视为当前项目的公用默认配置使用
  if( config.pipe ){
    if( config.pipe.length ){
      configs.$concat(
        assign( config.pipe, config.config )
      );
    }
  }
  // 未使用了 pipe 配置
  // 否则将 config 当做唯一配置使用
  else{
    configs.$concat(
      Object.$assign( {}, defaultConfig.config, config.config || config )
    );
  }

  console.log(
    '用户配置文件已读取完毕 .',
    '配置文件编译开始 ...'
  );

  return configs;
}


/**
 * 将一组配置进行初始化
 * @param {any[]} pipe 需要初始化的一组配置
 * @param {{}} config 公用默认配置
 */
function assign( pipe, config ){
  return pipe.map( cfg => {
    return Object.$assign( {}, defaultConfig.config, config, cfg );
  });
}