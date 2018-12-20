

module.exports = async function(){
  const userConfigs = await require('../lib/config/getter')();
  const configs = await require('../lib/config/init')( userConfigs );

  return configs;
}