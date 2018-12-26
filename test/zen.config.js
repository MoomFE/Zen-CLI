

module.exports = {

  pipe: [
    {
      from: 'src/index.js',
      to: 'dist/index.js'
    }
  ],

  config: {
    mode: false,
    babel: true,

    useVue: true,
    useReact: true,
    usePolymer: true,
    useSass: true,
    useLess: true,

    autoPolyfill: false
  }

}