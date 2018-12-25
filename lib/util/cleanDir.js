const fs = require('fs-extra');


module.exports = function cleanDir( dirPath ){
  try {
    fs.emptyDirSync( dirPath );
  }catch(error){}
}