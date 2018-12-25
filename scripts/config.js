const console = require('../lib/console');


module.exports = async function(){
  const userConfigs = await require('../lib/config/getter')();
  const [ webpackConfigs, rollupConfigs ] = await require('../lib/config/init')( userConfigs );
  let webpackCompilers;
  let rollupCompilers;

  if( webpackConfigs.length ){
    webpackCompilers = require('../lib/compiler/webpack')( webpackConfigs );
    console.log('Webpack 已解析配置完成 .');
  }

  if( rollupConfigs.length ){
    // rollupCompilers = require('../lib/compiler/rollup')( rollupConfigs );
    // console.log('Rollup 已解析配置完成 .');
  }

  console.logEnd('打包开始 .')

  return [
    webpackCompilers,
    rollupCompilers
  ];
}