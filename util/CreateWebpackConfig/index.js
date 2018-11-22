const path = require('path');
const WebpackConfigDefault = require('../../config/webpack.config');


module.exports = function( config, entry, filePath ){
  const NewWebpackConfig = Object.$assign( {}, WebpackConfigDefault );

  // 存储原始配置
  Object.defineProperty( NewWebpackConfig, '_zen_config_', {
    value: config
  });

  // 入口信息
  NewWebpackConfig.entry[ entry ] = filePath;

  // 出口信息
  if( config.from ){
    // 处理单个文件
    NewWebpackConfig.output.filename = path.basename( config.to );
    NewWebpackConfig.output.path = path.dirname( config.to );

    // 删除不相关的参数
    delete config.entry;
    delete config.output;
    delete config.entryFilename;
    delete config.outputFilename;
  }else{
    // 处理文件夹
    NewWebpackConfig.output.filename = config.outputFilename;
    NewWebpackConfig.output.path = entry.replace( config.entry, config.output );

    // 删除不相关的参数
    delete config.from;
    delete config.to;
  }
  
  return NewWebpackConfig;
}