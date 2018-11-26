

module.exports = function( webpack, config ){
  if( config.useReact ){

    // 继承至解析 js 的规则
    const jsRule = webpack.module.rules[0];

    // 新建一条专门解析 jsx 的规则
    const JsxRule = Object.$assign( {}, jsRule, {
      test: /\.jsx$/
    });

    // 解析 jsx
    JsxRule.use.options.presets.push([
      '@babel/preset-react'
    ]);

    webpack.module.rules.push( JsxRule );

  }
}