const defaultConfig = require('../config/zen.config');


module.exports = function( userDir ){
  let config;

  try {
    config = require(`${ userDir }\\zen.config.js`);
  } catch (error) {
    config = {};
  }

  // 如果有 pipe 配置, 则将 config 配置视为当前项目的默认配置使用
  // 否则将 config 当做唯一配置使用
  if( config.pipe && config.pipe.length ){
    config = config.pipe.map( cfg => {
      return Object.$assign( {}, defaultConfig.config, config.config, cfg );
    });
  }else{
    config = [
      Object.$assign( {}, defaultConfig.config, config.config || config )
    ];
  }

  return config;
}