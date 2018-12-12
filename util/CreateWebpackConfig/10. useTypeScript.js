

module.exports = function( webpack, config ){
  if( config.useTypeScript ){

    // 继承至解析 js 的规则
    const jsRule = webpack.module.rules[0];

    // 新建一条专门解析 jsx 的规则
    const tsRule = Object.$assign( {}, jsRule, {
      test: /\.ts$/
    });

    tsRule.use = [
      tsRule.use, 'ts-loader'
    ];

    webpack.module.rules.push( tsRule );

  }
}