const WebpackConfigArray = require('./config');
const print = require('../util/PrintInfo');
const webpack = require("webpack");


WebpackConfigArray.forEach( config => {
  const compiler = webpack( config );

  compiler.hooks.compile.tap( 'beforeRun', () => {
    print.run( config );
  });

  compiler.run(( err, stats ) => {
    print.done( err, stats );
  });
});

// 这种方式 stats 信息太少
// webpack( WebpackConfigArray, ( err, stats ) => {
//   printInfo( err, stats );
// });