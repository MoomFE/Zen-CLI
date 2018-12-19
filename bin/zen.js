#!/usr/bin/env node

require('@moomfe/zenjs');
const program = require('commander');


program
  .version(
    require( '../package.json' ).version,
    '-v, --version'
  );


[ 'build', 'watch' ].forEach( name => {
  [ '', 'private-' ].forEach(( prefix, index ) => {
    const fullname = prefix + name;
    const isPrivateCommand = !!index;

    program
      .command( fullname )
      .action( dir => {
        global.commandDir = typeof dir === 'string' ? dir : '';
        global.isPrivateCommand = isPrivateCommand;

        require( '../scripts/' + name );
      });
  });
});


program.on('--help', () => {
  console.log('');
});


program.parse( process.argv );