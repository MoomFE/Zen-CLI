

module.exports = async function(){
  const userConfigs = await require('../lib/config/getter')();
  const configs = await require('../lib/config/init')( userConfigs );
  const webpackConfigs = configs.$findAll({ isWebpack: true });
  const rollupConfigs  = configs.$findAllNot({ isWebpack: true });

  if( webpackConfigs.length ){
    
  }

  return [
    webpackConfigs,
    rollupConfigs
  ];
}