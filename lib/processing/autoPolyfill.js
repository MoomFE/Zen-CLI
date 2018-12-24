
module.exports = function autoPolyfill( webpackConfig, config ){

  /**
   * 克隆的当前配置使用的 babel 配置
   */
  const babelrc = config.babelrc = Object.$assign(
    null,
    require('../../config/babelrc')
  );

  // 使用 babel
  if( config.babel ){

    Object.$assign( babelrc.use.options, {
      presets: [
        [ '@babel/preset-env', {} ]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    });

    const presetEnv = babelrc.use.options.presets[ 0 ];

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

}