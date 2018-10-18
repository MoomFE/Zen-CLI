require('@moomfe/zenjs');

const path = require('path');
const util = require('./util/index')

/** 用户目录 */
const userDir = path.resolve( __dirname, '../' );
/** 用户配置集 */
const userConfig = util.GetUserConfig( userDir );

/** 默认 Webpack 配置 */
const WebpackConfigDefault = require('./config/webpack.config');
/** 生成的 Webpack 配置 */
const WebpackConfigArray = [];

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

  util.RecursiveFile(
    entry, output,
    entry,
    config,
    WebpackConfig,
    WebpackConfigArray
  );

});

module.exports = WebpackConfigArray;