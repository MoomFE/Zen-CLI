

module.exports = {

  pipe: [
    {
      rollup: true,
      from: 'node_modules/@polymer/lit-element/lit-element.js',
      to: 'dist/index.js'
    }
  ],

  config: {
    mode: false,
    babel: true,

    useVue: true,
    useReact: true,
    // usePolymer: true,
    useSass: true,
    useLess: true,

    autoPolyfill: false
  }

}