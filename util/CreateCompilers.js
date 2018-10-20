const ConfigArray = require('../scripts/config');
const webpack = require('webpack');
const print = require('./PrintInfo');

/**
 * [ config, config, false, ... ]
 */
const runStats = Array.$create( ConfigArray.length, false );
/**
 * [ stats, stats, false, ... ]
 */
const doneStats = Array.$create( ConfigArray.length, false );


const compilers = webpack( ConfigArray );


module.exports = function( isBuilder ){

  compilers.compilers.forEach(( compiler, index ) => {
    const config = ConfigArray[ index ];
  
    compiler.hooks[ isBuilder ? 'run' : 'watchRun' ].tap( 'print', () => {
      if( !index || doneStats[ index - 1 ] === true ) runSign( index, config );
      else{
        runStats[ index ] = config;
      }
    });
  
    compiler.hooks.done.tap( 'print', stats => {
      if( runStats[ index ] === true ) doneSign( index, stats );
      else{
        doneStats[ index ] = stats;
      }
    });
  });

  return compilers;
}


function runSign( index, config ){
  print.run( config );
  runStats[ index ] = true;

  const next = doneStats[ index ];

  if( next && next !== true ){
    doneSign( index, next );
  }
}

function doneSign( index, stats ){
  print.done( stats );
  doneStats[ index ] = true;

  const nextIndex = index + 1;
  const next = runStats[ nextIndex ];

  if( next && next !== true ){
    runSign( nextIndex, next );
  }
}