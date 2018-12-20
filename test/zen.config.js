

module.exports = {

  // pipe: [
  //   {
  //     from: 'src/index.js',
  //     to: 'dist/index.js'
  //   }
  // ],

  config: {
    autoPolyfill: false,

    useVue: true,
    useSass: true,
    useLess: true,

    resource: {
      limit: 8192,
      name: '[hash].[ext]',
      outputPath: 'public/img/'
    },

    outputHtml: true,
    cleanOutputDir: true
  }

}