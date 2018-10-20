const WebpackConfigArray = require('./config');
const printInfo = require('../util/PrintInfo');
const webpack = require("webpack");


WebpackConfigArray.forEach( config => {
  webpack( config, ( err, stats ) => {
    printInfo( err, stats );
  });
});

// 这种方式 stats 信息太少
// webpack( WebpackConfigArray, ( err, stats ) => {
//   printInfo( err, stats );
// });