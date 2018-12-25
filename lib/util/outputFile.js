const fs = require('fs-extra');


module.exports = function outputFile( path, data ){
  try {
    fs.outputFileSync( path, data );
  } catch (error) {
    throw error;
  }
}