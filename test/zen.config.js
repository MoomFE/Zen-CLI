

module.exports = {

  pipe: [
    {
      from: 'src/index.less',
      to: 'dist/indexx.css'
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
    outputHtml: true
  }

}