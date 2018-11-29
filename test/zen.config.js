

module.exports = {

  pipe: [
    {
      from: 'src/index.css',
      to: 'dist/index.css'
    }
  ],

  config: {
    autoPolyfill: false,

    useVue: true,
    useSass: true,
    useLess: true
  }

}