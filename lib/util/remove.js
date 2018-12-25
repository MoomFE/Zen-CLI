const fs = require('fs-extra');


module.exports = function remove( path ){
  try {
    fs.removeSync( path );
  }catch(error){}
}