

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
      WriteFile( webpackConfig, config, name, size ){
        
      }
    }
  }

}