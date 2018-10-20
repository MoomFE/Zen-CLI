require('@moomfe/zenjs');

const path = require('path');

/** 用户目录 */
const userDir = path.resolve( __dirname, global.isPrivateCommand ? '../test' : '../../../../' );
/** 用户配置集 */
const userConfig = require('../util/GetUserConfig')( userDir );

/** 生成的 Webpack 配置 */
const WebpackConfigArray = [];
/** 遍历文件夹下所有文件的方法 */
const RecursiveFile = require('../util/RecursiveFile');
/** 创建 webpack 配置所用方法 */
const CreateWebpackConfig = require('../util/CreateWebpackConfig');


// 生成 Webpack 配置
userConfig.forEach( config => {

  // 处理单个文件
  if( config.from ){
    // 处理路径到正确的格式
    config.from = path.resolve( userDir, config.from );
    config.to = path.resolve( userDir, config.to );

    return CreateWebpackConfig(
      path.dirname( config.from ), config.from,
      config,
      WebpackConfigArray
    );
  }

  /** 入口文件夹 */
  config.entry = path.resolve( userDir, config.entry );
  config.output = path.resolve( userDir, config.output );

  // 生成 Webpack 配置
  RecursiveFile(
    config.entry,
    config,
    WebpackConfigArray
  );

});


module.exports = WebpackConfigArray;