

module.exports = {

  pipe: [
    {
      from: 'src/index.css',
      to: 'dist/index2.css'
    }
  ],

  config: {
    autoPolyfill: false,

    useVue: true,
    useSass: true,
    useLess: true,

    resource: {
      limit: 8192,
      name: '[hash].[ext]',
      outputPath: 'public/img/'
    }
  }

}