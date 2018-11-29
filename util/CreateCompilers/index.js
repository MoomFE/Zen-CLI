
module.exports = function( isBuilder ){

  const ConfigArray = require('../../scripts/config');

  const webpack = require('webpack');
  const compilers = webpack( ConfigArray );

  const Writefile = require('./WriteFile');
  const PrintInfo = require('./PrintInfo');


  compilers.compilers.forEach(( compiler, index ) => {
    const config = ConfigArray[ index ];

    // 文件写入相关
    Writefile( compiler, config );

    // 控制台信息相关
    PrintInfo( compiler, config, isBuilder );

  });


  return compilers;
}