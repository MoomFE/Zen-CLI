const print = require('../PrintInfo');


module.exports = function( compiler, webpackConfig, isBuilder ){

  // 进入编译时, 进行提示
  compiler.hooks[ isBuilder ? 'run' : 'watchRun' ].tap( 'print', () => {
    print.run( webpackConfig );
  });

  // 编译完成后, 进行提示
  compiler.hooks.done.tap( 'print', stats => {
    print.done( webpackConfig, stats );
  });

}