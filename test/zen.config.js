

module.exports = {

  pipe: [
    {
      from: 'src/index.js',
      to: 'dist/index.js'
    }
  ],

  config: {
    mode: true,
    rollup: true,
    on: {
      WriteFile( webpackConfig, config, path, size, gzipSize ){
        console.log( `path: ${ path }, size: ${ size }, gzipSize: ${ gzipSize }` )
      }
    }
  }

}