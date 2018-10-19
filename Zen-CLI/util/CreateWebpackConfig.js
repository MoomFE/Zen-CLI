const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackConfigDefault = require('../config/webpack.config');


/**
 * 创建 webpack 配置
 * @param {String} entry 当前文件文件夹
 * @param {String} filePath 当前文件完整路径
 * @param {any} config 当前配置
 * @param {any} WebpackConfig 上一级用来继承的 webpack 配置
 * @param {any} WebpackConfigArray 生成 webpack 完成后, 存放的路径
 */
module.exports = function(
  entry, filePath,
  config,
  WebpackConfigArray
){
  /**
   * 当前文件的 Webpack 配置
   */
  const NewWebpackConfig = Object.$assign( {}, WebpackConfigDefault, {
    mode: config.mode === true || config.mode === 'production' ? 'production'
                                                               : 'development'
  });
  /**
   * Webpack 插件列表
   */
  const plugins = NewWebpackConfig.plugins = NewWebpackConfig.plugins || [];

  // 入口信息
  NewWebpackConfig.entry[ entry ] = filePath;

  // 处理单个文件
  if( config.from ){
    // 出口信息
    NewWebpackConfig.output.filename = path.basename( config.to );
    NewWebpackConfig.output.path = path.dirname( config.to );
  }else{
    // 出口信息
    NewWebpackConfig.output.filename = config.outputFilename;
    NewWebpackConfig.output.path = entry.replace( config.entry, config.output );
  }

  // 插件 - 清空出口文件夹
  if( config.PluginCleanWebpackPlugin ){
    plugins.push(
      new CleanWebpackPlugin( [ NewWebpackConfig.output.path ], config.PluginCleanWebpackPluginOptions )
    );
  }

  WebpackConfigArray.push(
    NewWebpackConfig
  );
}