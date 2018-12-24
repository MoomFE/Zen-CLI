
module.exports = function autoPolyfill( webpackConfig, config ){

  /**
   * 克隆的当前配置使用的 babel 配置
   */
  const babelrc = Object.$assign(
    null,
    require('../../config/babelrc')
  );

  const babel = babelrc.true;
  const presetEnv = babel.use.options.presets[ 0 ];

  // 自动引入 polyfill
  if( config.autoPolyfill ){
    presetEnv[ 1 ].useBuiltIns = 'usage';
  }

  // 兼容的最低浏览器
  if( config.browserslist ){
    presetEnv[ 1 ].targets = {
      browsers: config.browserslist
    };
  }

}