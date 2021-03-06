# Zen-CLI
Zen-CLI 是一个基于 webpack 的打包工具

<br>
<br>

## 安装

```bash
  > mkdir project
```

```bash
  > cd project
```

```bash
  > npm init -y
  > npm install @moomfe/zen-cli
```

> 1. 打开项目根目录的 package.json
> 2. 在 scripts 内添加以下字段:

```json
  {
    "build": "node_modules\\.bin\\zen build",
    "watch": "node_modules\\.bin\\zen watch"
  }
```

<br>

## 使用

> 1. 新建 zen.config.js 文件并配置
> 2. 使用以下指令开始打包

```bash
  > npm run build
```

```bash
  > npm run watch
```

<br>

## 配置

### 单个完整配置 ( 默认配置 )
```js
  {
    // 打包模式
    // 开发模式: "development" || false
    // 生产环境: "production" || true
    "mode": "development",

    /* ------  文件输入输出相关 - Start ------ */

    // 单入口打包模式 ( 推荐模式 )
    //   - 一般使用这种就好
    //   - 使用时将会忽略 [ 'entry', 'output' ] 配置项

    // 入口文件地址 ( 必须使用完整文件路径 )
    "from": "",
    // 输出文件地址 ( 必须使用完整文件路径 )
    "to": "",


    // 自动搜寻打包模式 ( 默认模式 )
    //   - 程序会递归搜寻 "入口文件夹" 下所有文件夹, 找到所有指定 "入口文件名"
    //   - 并且将每个搜寻到的文件视为一个独立的模块入口
    //   - 打包完成后, 将在 "输出文件夹" 输出一个与"入口文件夹"类似的文件树
    //   - 使用时将会忽略 [ 'from', 'to' ] 配置项

    // 入口文件夹
    "entry": "src/",
    // 输出文件夹
    "output": "dist/",
    // 入口文件名
    "entryFilename": "index.js",
    // 输出文件名
    "outputFilename": "index.js",

    /* ------  文件输入输出相关 - End ------ */

    // 使用 rollup 作为打包核心而不使用 webpack ( 开发中 )
    //   - 目前可用属性:
    //   - mode, from, to, entry, output, entryFilename, outputFilename
    //   - babel, babelrc, autoPolyfill, browserslist, format, name
    //   - terserOptions, replace, on, banner, bannerIsComment
    "rollup": false,

    // 使用 babel 编译 js 代码
    //   - 值为假时, [ "babelrc", "autoPolyfill", "browserslist" ] 选项将不生效
    "babel": true,
    // 使用自定义 babel 配置
    //   - 配置后, [ "autoPolyfill", "browserslist" ] 选项将不生效
    "babelrc": null,
    // 是否根据 js 代码自动引入使用过的相应 polyfill
    //   - "babel" 选项为 true 时可用
    "autoPolyfill": true,

    // 兼容的最低浏览器
    //   - 会用于 babel 和 postcss 用于转译代码
    "browserslist": [ "last 1 versions" ],

    // 生成包的格式
    //   - webpack: umd, commonjs, amd, this, var, assign, window, global, jsonp
    //     - default: undefined
    //   - rollup : umd, cjs, es, amd, iife
    //     - default: umd
    "format": undefined,
    // 生成包的名称
    "name": undefined,

    // JS CSS 内的资源文件输出选项
    //   - png, jpg, jpeg, gif, svg
    //   - woff, woff2, ttf, eot
    "resource": {
      // 超过这个大小的资源文件将被输出到文件夹 ( Byte )
      "limit": 8192,
      // 资源命名规则
      "name": "[name].[ext]",
      // 自定义输出目录 ( 相对路径 )
      "outputPath": undefined
    },

    // 替换字符串
    //   - 比如: { 'process.env.NODE_ENV': JSON.stringify('production') }
    "replace": {},

    // JS 压缩选项
    //   - 将会传递给 terser 作为压缩选项
    //   - "mode" 选项为 "production" 时可用
    "terserOptions": null,

    // 解析 TypeScript 文件 ( .ts )
    "useTypeScript": false,

    // 解析 Vue 单文件组件 ( .vue )
    "useVue": false,

    // 解析 React 单文件组件 ( .jsx )
    "useReact": false,

    // 项目使用了 Polymer 相关类库时使用
    //   - 可以解决 Class constructor LitElement / PolymerElement cannot be invoked without 'new' 的问题
    "usePolymer": false,

    // 解析 Less 文件 ( .less )
    "useLess": false,

    // 解析 Sass 文件 ( .scss, .sass )
    "useSass": false,

    // 将代码内引入的 css 内置在 js 中
    //   - 否则会输出为 css 文件
    "builtInCss": true,
    // 插件 "extract-text-webpack-plugin" 的配置项
    //   - 将代码内引入的 css 输出为 css 文件时使用, 配置输出的 css 相关信息
    "Plugin_ExtractTextPluginOptions": {
      // 输出的 css 文件名
      "filename": "index.css",
      // 提取 chunk 的 css
      "allChunks": true
    },

    // 是否使用 "html-webpack-plugin" 输出 HTML
    "outputHtml": false,
    // 传递给 "html-webpack-plugin" 插件的配置项
    "outputHtmlOptions": {},

    // 输出文件时是否强制写入 ( 输出文件权限为只读时, 尝试强制解锁并写入 )
    "forcedWrite": true,

    // 是否清理输出文件夹
    "cleanOutputDir": false,
    // 清理输出文件夹选项
    "cleanOutputDirOptions": {
      // 清理输出文件夹所有内容
      //   - 此条目为真时, 此选项其它条目全部不生效
      "cleanAll": true,
      // 清理输出文件夹内的文件
      "cleanFile": true,
      // 清理输出文件夹内的文件夹
      "cleanDir": false,
      // 只清理匹配的文件或文件夹, 可传入正则或字符串规则
      //   - 每条规则将会依次和文件或文件夹的文件名和完整路径进行比对
      //   - 示例: [ /\.js$/, 'index.css', ... ]
      "cleanMatching": []
    },

    // 在打包好的文件的块的外部的最顶部插入的一段内容
    "banner": "",
    // 在指定类型文件插入内容
    //   - 可配置为数组: [ /\.(js|css)$/, ... ]
    "bannerOutputTypes": /\.(js|css)$/,
    // 是否为插入的内容自动添加段落注释, 否则将原样输出
    "bannerIsComment": true,

    // 事件回调
    "on": {
      // webpack 配置文件创建完成后调用, 可对 webpack 配置进行修改
      //   - ConfigCreated( WebpackConfig, ZenConfig )
      "ConfigCreated": null,
      // webpack 打包完成后写入文件时调用
      //   - WriteFile( WebpackConfig, ZenConfig, path, size, gzipSize )
      "WriteFile": null
    }
  }
```

<br>

### 配置文件 zen.config.js 书写规则

> #### 无配置文件时
```js
  // 将使用默认配置
  // 即 "自动搜寻打包模式" 搜索 "src/" 下所有 "index.js" 并打包至 "dist/" 文件夹相应目录
```

> #### 单配置模式
```js
  module.exports = {
    // ... 配置
  }
```
```js
  module.exports = {
    // 使用 config 选项时, 将会默认忽略同级其它配置
    config: {
      // ... 配置
    }
  }
```

> #### 多配置设置
```js
  module.exports = {
    // 使用 pipe 配置时, 将会把 config 视为默认配置
    // 在 config 里配置的配置项, 将会默认继承到 pipe 内所有配置里
    pipe: [
      {
        // ... 配置 1
      },
      {
        // ... 配置 2
      }
    ],
    config: {
      // ... 默认配置
    }
  }
```
```js
  module.exports = {
    // 可以使用 "npm run build name1" 等指令来运行指定组内的配置组
    // 为被指定的组在本次运行时将不生效
    group: {
      name1: [], // 配置组: name1
      name2: []  // 配置组: name2
    },
    // 无论使不使用 group, pipe 内的配置都永远生效
    pipe: [
      // 配置组: default
    ],
    config: {
      // ... 默认配置
    }
  }
```

<br>

## License

Zen-CLI is licensed under a [MIT  License](./LICENSE).