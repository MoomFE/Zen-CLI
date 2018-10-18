const path = require('path');


const userDir = path.resolve( __dirname, '../' );

const userConfig = require('./util/GetUserConfig')( userDir );

console.log(
  userConfig
)