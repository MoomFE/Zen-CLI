const fs = require('fs-extra');


module.exports = function chmod( path ){
  try {
    fs.chmodSync( path, 0o765 );
  }catch(error){}
}