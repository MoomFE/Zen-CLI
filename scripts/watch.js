const WebpackConfigArray = require('./config');
const printInfo = require('../util/PrintInfo');
const webpack = require("webpack");


WebpackConfigArray.forEach( config => {
  const compiler = webpack( config );

  compiler.watch( {}, ( err, stats ) => {
    printInfo( err, stats );
  });
});