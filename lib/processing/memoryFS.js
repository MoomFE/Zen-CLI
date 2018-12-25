const MemoryFS = require('memory-fs');


module.exports = function memoryFS( webpackConfig, config ){
  if( webpackConfig.isWebpack ){
    config['Webpack-Processing'].push( compiler => {
      // 将输出文件存在内存中
      compiler.outputFileSystem = config.memoryFS = new MemoryFS();
    });
  }
}