require('@moomfe/zenjs');

const path = require('path');

/** 用户目录 */
const userDir = path.resolve( __dirname, '../' );
/** 用户配置集 */
const userConfig = require('./util/GetUserConfig')( userDir );

/** 默认 Webpack 配置 */
const WebpackConfigDefault = require('./config/webpack.config');
/** 生成的 Webpack 配置 */
const WebpackConfigArray = [];
/** 遍历文件夹下所有文件的方法 */
const RecursiveFile = require('./util/RecursiveFile');


// 生成 Webpack 配置
userConfig.forEach( config => {

  /** 当前配置的 Webpack 配置 */
  const WebpackConfig = Object.$assign( {}, WebpackConfigDefault, {
    mode: config.mode,
    output: {
      filename: config.outputFilename
    }
  });

  /** 入口文件夹 */
  const entry = path.resolve( userDir, config.entry );
  const output = path.resolve( userDir, config.output );

  // 生成 Webpack 配置
  RecursiveFile(
    entry, output,
    entry,
    config,
    WebpackConfig,
    WebpackConfigArray
  );

});


module.exports = WebpackConfigArray;