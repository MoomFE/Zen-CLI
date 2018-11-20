const DefaultWebpackConfig = require('../../config/webpack.config');


module.exports = function( NewWebpackConfig, config ){
  if( config.useReact ){

    // 继承至解析 js 的规则
    const JS = DefaultWebpackConfig.module.rules[0];

    // 新建一条专门解析 jsx 的规则
    const JSX = Object.$assign( {}, JS, {
      test: /\.jsx$/
    });

    // 解析 jsx
    JSX.use.options.presets.push([
      '@babel/preset-react'
    ]);

    // 如果需要自动添加 polyfill
    if( config.autoPolyfill ){
      JSX.use.options.presets[0].push({ useBuiltIns: 'usage' });
    }

    NewWebpackConfig.module.rules.push( JSX );

  }
}