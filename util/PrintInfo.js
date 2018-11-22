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
    const output = options.outputPath + '\\';
    const date   = Date.$format( options.builtAt, 'YYYY-MM-DD HH:mm:ss Z' );
    const time   = options.time + 'ms';


    console.log(`Zen-CLI v${ package.version }`);
    console.log(`------------------------------------`);
    console.log(`- Input   : ${ input.green }`);
    options.assets.$each(( options, index ) => {
      console.log(
        `- ${ index ? '      ' : 'Output' }  : ${ output.green }${ options.name.green } - ( ${ getSize( options.size ).green } )`,
      );
    });
    console.log(`- Built at: ${ date.green }`);
    console.log(`- Mode    : ${ config.mode.green }`);
    console.log(`- Time    : ${ time.green }`);
    console.log(`------------------------------------\n`);
  },

  error( error ){
    console.error( error );
    console.log( '\n' );
  }

};