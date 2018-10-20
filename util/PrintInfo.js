const package = require('../package.json');
const getSize = require('../util/GetSize');
require('colors');


module.exports = function( err, stats ){
  const options = stats.toJson();

  const input  = options.modules[0].identifier;
  const output = options.outputPath + '\\' + options.assets[0].name;
  const date   = Date.$format( options.builtAt, 'YYYY-MM-DD HH:mm:ss Z' );
  const time   = options.time + 'ms';
  const size   = getSize( options.assets[0].size );


  console.log(`Zen-CLI v${ package.version }`);
  console.log(`------------------------------------`);
  console.log(`- Built at: ${ date.green }`);
  console.log(`- Bundles : ${ input.green } → ${ output.green }`);
  console.log(`- Time    : ${ time.green }`);
  console.log(`- Size    : ${ size.green }`);
  console.log(`------------------------------------\n`);
}