

module.exports = {
  group: {
    
  },
  pipe: [
    
  ],
  config: {

    mode: 'development',

    from: '',
    to: '',

    entry: 'src/',
    output: 'dist/',
    entryFilename: 'index.js',
    outputFilename: 'index.js',

    rollup: false,

    babel: true,
    babelrc: null,
    autoPolyfill: true,

    browserslist: [ 'last 1 versions' ],

    format: undefined,
    name: undefined,

    resource: {
      limit: 8192,
      name: '[name].[ext]',
      outputPath: undefined
    },

    replace: {},

    terserOptions: null,

    useTypeScript: false,

    useVue: false,

    useReact: false,

    usePolymer: false,

    useLess: false,

    useSass: false,

    builtInCss: true,
    Plugin_ExtractTextPluginOptions: {
      filename: 'index.css',
      allChunks: true
    },

    outputHtml: false,
    outputHtmlOptions: {},

    forcedWrite: true,

    cleanOutputDir: false,
    cleanOutputDirOptions: {
      cleanAll: true,
      cleanFile: true,
      cleanDir: false,
      cleanMatching: []
    },

    banner: '',
    bannerOutputTypes: /\.(js|css)$/,
    bannerIsComment: true,

    on: {
      ConfigCreated: null,
      WriteFile: null
    }

  }
}