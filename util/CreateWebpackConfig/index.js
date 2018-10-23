const path = require('path');
const WebpackConfigDefault = require('../../config/webpack.config');


module.exports = function( config, entry, filePath ){
  const NewWebpackConfig = Object.$assign( {}, WebpackConfigDefault );

  // 当前模式
  if( config.mode === true || config.mode === 'production' ){
    NewWebpackConfig.mode = 'production';
  }else{
    NewWebpackConfig.mode = 'development';
  }

  // 存储原始配置
  Object.defineProperty( NewWebpackConfig, '_zen_config_', {
    value: config
  });

  // 入口信息
  NewWebpackConfig.entry[ entry ] = filePath;

  // 出口信息
  if( config.from ){// 处理单个文件
    NewWebpackConfig.output.filename = path.basename( config.to );
    NewWebpackConfig.output.path = path.dirname( config.to );
  }else{// 处理文件夹
    NewWebpackConfig.output.filename = config.outputFilename;
    NewWebpackConfig.output.path = entry.replace( config.entry, config.output );
  }
  
  return NewWebpackConfig;
}