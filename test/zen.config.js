

module.exports = {

  pipe: [
    {
      from: 'src/index.js',
      to: 'dist/index.js'
    }
  ],

  config: {
    mode: false,

    babel: false,

    useTypeScript: true,
    useVue: true,
    useReact: true,
    useSass: true,
    useLess: true,

    builtInCss: false,
    outputHtml: true,

    forcedWrite: true
  }

}