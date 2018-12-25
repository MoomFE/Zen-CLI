#!/usr/bin/env node

const program = require('commander');
const path = require('path');


program
  .version(
    require( '../package.json' ).version,
    '-v, --version'
  );


[ 'build', 'watch' ].forEach( name => {
  [ '', 'private-' ].forEach(( prefix, index ) => {
    /** 完整的命令名称 */
    const fullname = prefix + name;
    /** 当前是否是私有命令 */
    const isPrivateCommand = !!index;
    /** 是否是 build 指令 */
    const isBuildCommand = name === 'build';
    /** 用户执行指令的目录 */
    const runCommandPath = path.resolve( __dirname, isPrivateCommand ? '../test' : '../'.repeat( 4 ) );

    program
      .command( fullname )
      .action( dir => {
        global.commandDir = typeof dir === 'string' ? dir : '';
        global.isPrivateCommand = isPrivateCommand;
        global.isBuildCommand = isBuildCommand;
        global.runCommandPath = runCommandPath;

        require( '../scripts/' + name )();
      });
  });
});


program.on('--help', () => {
  console.log('');
});


program.parse( process.argv );