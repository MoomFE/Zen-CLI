const fs = require('fs-extra');


module.exports = function stat( path ){
  let isFile = false;
  let isDirectory = false;
  let stat;

  try {
    stat = fs.statSync( path )
  }catch(error){}

  if( stat ){
    if( isFile = stat.isFile() ){}
    else{
      isDirectory = stat.isDirectory();
    }
  }

  return [ isFile, isDirectory ];
}