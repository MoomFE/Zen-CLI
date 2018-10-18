require('@moomfe/zenjs');


const defaultConfig = require('../config/zen.config');


module.exports = function( userDir ){
  let config;

  try {
    config = require(`${ userDir }\\zen.config.js`);
  } catch (error) {
    config = {};
  }

  if( config.pipe && config.pipe.length ){
    config = config.pipe.map( cfg => {
      return Object.$assign( {}, defaultConfig.config, config.config, cfg );
    });
  }else{
    config = [
      Object.$assign( {}, defaultConfig.config, config.config )
    ];
  }

  return config;
}