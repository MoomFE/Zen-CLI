const WebpackConfigArray = require('./config');
const print = require('../util/PrintInfo');
const webpack = require("webpack");


WebpackConfigArray.forEach( config => {
  const compiler = webpack( config );

  compiler.hooks.compile.tap( 'beforeRun', () => {
    print.run( config );
  });

  compiler.watch( {}, ( err, stats ) => {
    print.done( err, stats );
  });
});