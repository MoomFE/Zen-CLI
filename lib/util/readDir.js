const fs = require('fs-extra');


module.exports = function readDir( dirPath ){
  try {
    return fs.readdirSync( dirPath );
  } catch (error) {
    return [];
  }
}