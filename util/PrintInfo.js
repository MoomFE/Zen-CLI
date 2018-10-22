const package = require('../package.json');
const getSize = require('../util/GetSize');
require('colors');


module.exports = {

  run( config ){
    const input = Object.values( config.entry )[0];

    console.log(`Zen-CLI v${ package.version }`);
    console.log(`------------------------------------`);
    console.log(`- Start   : ${ input.green }`);
    console.log(`------------------------------------\n`);
  },

  done( config, stats ){
    const options = stats.toJson();
    
    const input = Object.values( config.entry )[0];
    const output = options.outputPath + '\\' + options.assets[0].name;
    const date   = Date.$format( options.builtAt, 'YYYY-MM-DD HH:mm:ss Z' );
    const time   = options.time + 'ms';
    const size   = getSize( options.assets[0].size );

    console.log(`Zen-CLI v${ package.version }`);
    console.log(`------------------------------------`);
    console.log(`- Input   : ${ input.green }`);
    console.log(`- Output  : ${ output.green }`);
    console.log(`- Built at: ${ date.green }`);
    console.log(`- Time    : ${ time.green }`);
    console.log(`- Size    : ${ size.green }`);
    console.log(`------------------------------------\n`);
  }

};