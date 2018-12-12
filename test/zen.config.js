

module.exports = {

  pipe: [
    {
      from: 'src/index.ts',
      to: 'dist/index.js'
    }
  ],

  config: {
    autoPolyfill: false,

    useVue: true,
    useSass: true,
    useLess: true,
    useTypeScript: true,

    resource: {
      limit: 8192,
      name: '[hash].[ext]',
      outputPath: 'public/img/'
    }
  }

}