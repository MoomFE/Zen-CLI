const defaultConfig = require('../config/zen.config');


module.exports = function( userDir ){
  const commandDir = global.commandDir;
  let config;
  let result = [];

  try {
    config = require(`${ userDir }\\zen.config.js`);
  } catch (error) {
    config = {};
  }

  if( config.group ){
    // 指定了 group 组时
    // 则使用相应 group 组内配置和 pipe 默认配置
    if( commandDir ){
      if( config.group[ commandDir ] && config.group[ commandDir ].length ){
        result.$concat(
          assign( config.group[ commandDir ], config.config )
        );
      }
    }
    // 未指定 group 组时
    // 则使用所有 group 组内配置
    else{
      Object.$each( config.group, ( name, pipe ) => {
        result.$concat(
          assign( pipe, config.config )
        );
      });
    }
  }

  // 如果有 pipe 配置, 则将 config 配置视为当前项目的默认配置使用
  // 否则将 config 当做唯一配置使用
  if( config.pipe && config.pipe.length ){
    result.$concat(
      assign( config.pipe, config.config )
    );
  }else if( !commandDir && !result.length ){
    result.$concat([
      Object.$assign( {}, defaultConfig.config, config.config || config )
    ]);
  }

  return result;
}

function assign( pipe, config ){
  return pipe.map( cfg => {
    return Object.$assign( {}, defaultConfig.config, config, cfg );
  });
}