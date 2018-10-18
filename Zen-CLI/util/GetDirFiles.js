const fs = require('fs-extra');


module.exports = function( dirPath ){
  try {
    return fs.readdirSync( dirPath );
  } catch (error) {
    return [];
  }
}