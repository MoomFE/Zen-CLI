const GetDirFiles = require('./GetDirFiles');
const fs = require('fs-extra');
const CreateWebpackConfig = require('./CreateWebpackConfig');


module.exports = function RecursiveFile(
  rootEntry, rootOutput,
  entry, config,
  WebpackConfig, WebpackConfigArray
){
  /** 该文件夹下所有文件及文件夹 */
  const files = GetDirFiles( entry );

  // 遍历该文件夹所有文件及文件夹
  files.forEach( fileName => {
    /** 当前文件或文件夹完整路径 */
    const filePath = `${ entry }\\${ fileName }`;

    // 当前路径是文件夹, 递归继续向内查找
    if( fs.statSync( filePath ).isDirectory() ){
      return RecursiveFile(
        rootEntry, rootOutput,
        filePath, config,
        WebpackConfig, WebpackConfigArray
      );
    }

    // 入口文件
    if( fileName.toLowerCase() === config.entryFilename ){
      WebpackConfigArray.push(
        CreateWebpackConfig(
          rootEntry, rootOutput,
          entry, filePath,
          config,
          WebpackConfig
        )
      );
    }

  });
}