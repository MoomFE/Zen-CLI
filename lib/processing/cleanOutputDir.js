

module.exports = function cleanOutputDir( webpackConfig, config ){

  if( webpackConfig.isWebpack ){
    // 不清空输出文件夹
    if( !config.cleanOutputDir ){
      delete config.cleanOutputDirOptions;
      return;
    }

    config['Webpack-Processing'].push( compiler => {
      compiler.hooks.afterEmit.tap( 'writeFile', compilation => {



      });
    });
  }

}