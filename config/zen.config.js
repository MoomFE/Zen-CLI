

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
    autoPolyfill: true,

    browserslist: [ 'last 1 versions' ],

    resource: {
      limit: 8192,
      name: '[name].[ext]',
      outputPath: undefined
    },

    outputHtml: false,
    outputHtmlOptions: {},

    banner: '',
    bannerOutputTypes: /\.(js|css)$/,
    bannerIsComment: true,

    builtInCss: true,
    Plugin_ExtractTextPluginOptions: {
      filename: 'index.css',
      allChunks: true
    },

    cleanOutputDir: false,
    cleanOutputDirOptions: {
      cleanAll: true,
      cleanFile: true,
      cleanDir: false,
      cleanMatching: []
    },

    forcedWrite: true,

    useTypeScript: false,

    useVue: false,

    useReact: false,

    useLess: false,

    useSass: false,

    on: {
      ConfigCreated: null
    }

  }
}