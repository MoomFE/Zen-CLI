const config = require('./config');

config.forEach( config => {
  config.run(( err, stats ) => {
    console.log( stats )
  });
});

/*
Hash: 3753c8f47b80eeefa6cd
Version: webpack 4.21.0
Child
    Hash: 3753c8f47b80eeefa6cd
    Time: 150ms
    Built at: 2018-10-19 18:35:40
                            Asset      Size                                                      Chunks             Chunk Names
    index.73cdc0d572ada76eb3dd.js  3.79 KiB  Z:\Zw\Zen-CLI-b7615c07466a4324bd43c78e61f670186baf2322\src  [emitted]  Z:\Zw\Zen-CLI-b7615c07466a4324bd43c78e61f670186baf2322\src
    Entrypoint Z:\Zw\Zen-CLI-b7615c07466a4324bd43c78e61f670186baf2322\src = index.73cdc0d572ada76eb3dd.js
    [../src/index.js] 19 bytes {Z:\Zw\Zen-CLI-b7615c07466a4324bd43c78e61f670186baf2322\src} [built]
*/

/*
Stats {
  compilation:
   Compilation {
     _pluginCompat:
      SyncBailHook {
        _args: [Array],
        taps: [Array],
        interceptors: [],
        call: [Function: lazyCompileHook],
        promise: [Function: lazyCompileHook],
        callAsync: [Function: lazyCompileHook],
        _x: undefined },
     hooks:
      { buildModule: [SyncHook],
        rebuildModule: [SyncHook],
        failedModule: [SyncHook],
        succeedModule: [SyncHook],
        dependencyReference: [SyncWaterfallHook],
        finishModules: [SyncHook],
        finishRebuildingModule: [SyncHook],
        unseal: [SyncHook],
        seal: [SyncHook],
        beforeChunks: [SyncHook],
        afterChunks: [SyncHook],
        optimizeDependenciesBasic: [SyncBailHook],
        optimizeDependencies: [SyncBailHook],
        optimizeDependenciesAdvanced: [SyncBailHook],
        afterOptimizeDependencies: [SyncHook],
        optimize: [SyncHook],
        optimizeModulesBasic: [SyncBailHook],
        optimizeModules: [SyncBailHook],
        optimizeModulesAdvanced: [SyncBailHook],
        afterOptimizeModules: [SyncHook],
        optimizeChunksBasic: [SyncBailHook],
        optimizeChunks: [SyncBailHook],
        optimizeChunksAdvanced: [SyncBailHook],
        afterOptimizeChunks: [SyncHook],
        optimizeTree: [AsyncSeriesHook],
        afterOptimizeTree: [SyncHook],
        optimizeChunkModulesBasic: [SyncBailHook],
        optimizeChunkModules: [SyncBailHook],
        optimizeChunkModulesAdvanced: [SyncBailHook],
        afterOptimizeChunkModules: [SyncHook],
        shouldRecord: [SyncBailHook],
        reviveModules: [SyncHook],
        optimizeModuleOrder: [SyncHook],
        advancedOptimizeModuleOrder: [SyncHook],
        beforeModuleIds: [SyncHook],
        moduleIds: [SyncHook],
        optimizeModuleIds: [SyncHook],
        afterOptimizeModuleIds: [SyncHook],
        reviveChunks: [SyncHook],
        optimizeChunkOrder: [SyncHook],
        beforeChunkIds: [SyncHook],
        optimizeChunkIds: [SyncHook],
        afterOptimizeChunkIds: [SyncHook],
        recordModules: [SyncHook],
        recordChunks: [SyncHook],
        beforeHash: [SyncHook],
        contentHash: [SyncHook],
        afterHash: [SyncHook],
        recordHash: [SyncHook],
        record: [SyncHook],
        beforeModuleAssets: [SyncHook],
        shouldGenerateChunkAssets: [SyncBailHook],
        beforeChunkAssets: [SyncHook],
        additionalChunkAssets: [SyncHook],
        additionalAssets: [AsyncSeriesHook],
        optimizeChunkAssets: [AsyncSeriesHook],
        afterOptimizeChunkAssets: [SyncHook],
        optimizeAssets: [AsyncSeriesHook],
        afterOptimizeAssets: [SyncHook],
        needAdditionalSeal: [SyncBailHook],
        afterSeal: [AsyncSeriesHook],
        chunkHash: [SyncHook],
        moduleAsset: [SyncHook],
        chunkAsset: [SyncHook],
        assetPath: [SyncWaterfallHook],
        needAdditionalPass: [SyncBailHook],
        childCompiler: [SyncHook],
        normalModuleLoader: [SyncHook],
        optimizeExtractedChunksBasic: [SyncBailHook],
        optimizeExtractedChunks: [SyncBailHook],
        optimizeExtractedChunksAdvanced: [SyncBailHook],
        afterOptimizeExtractedChunks: [SyncHook] },
     name: undefined,
     compiler:
      Compiler {
        _pluginCompat: [SyncBailHook],
        hooks: [Object],
        name: undefined,
        parentCompilation: undefined,
        outputPath:
         'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\dist',
        outputFileSystem: [NodeOutputFileSystem],
        inputFileSystem: [CachedInputFileSystem],
        recordsInputPath: undefined,
        recordsOutputPath: undefined,
        records: [Object],
        fileTimestamps: Map {},
        contextTimestamps: Map {},
        resolverFactory: [ResolverFactory],
        resolvers: [Object],
        options: [Object],
        context:
         'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test',
        requestShortener: [RequestShortener],
        running: false,
        watchFileSystem: [NodeWatchFileSystem],
        dependencies: undefined },
     resolverFactory:
      ResolverFactory {
        _pluginCompat: [SyncBailHook],
        hooks: [Object],
        cache1: [WeakMap],
        cache2: [Map] },
     inputFileSystem:
      CachedInputFileSystem {
        fileSystem: NodeJsInputFileSystem {},
        _statStorage: [Storage],
        _readdirStorage: [Storage],
        _readFileStorage: [Storage],
        _readJsonStorage: [Storage],
        _readlinkStorage: [Storage],
        _stat: [Function: bound bound ],
        _statSync: [Function: bound bound ],
        _readdir: [Function: bound readdir],
        _readdirSync: [Function: bound readdirSync],
        _readFile: [Function: bound bound readFile],
        _readFileSync: [Function: bound bound readFileSync],
        _readJson: [Function],
        _readJsonSync: [Function],
        _readlink: [Function: bound bound readlink],
        _readlinkSync: [Function: bound bound readlinkSync] },
     requestShortener:
      RequestShortener {
        currentDirectoryRegExp:
         /(^|!)E:\/Program\ Files\ \(x86\)\/VMware\/Windows\ 7\/Zw\/Zen\-CLI\/test/g,
        parentDirectoryRegExp:
         /(^|!)E:\/Program\ Files\ \(x86\)\/VMware\/Windows\ 7\/Zw\/Zen\-CLI/g,
        buildinsAsModule: true,
        buildinsRegExp:
         /(^|!)E:\/Program\ Files\ \(x86\)\/VMware\/Windows\ 7\/Zw\/Zen\-CLI\/test\/node_modules\/webpack/g,
        cache: Map {} },
     options:
      { entry: [Object],
        output: [Object],
        mode: 'production',
        plugins: [],
        devtool: false,
        cache: false,
        context:
         'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test',
        target: 'web',
        module: [Object],
        node: [Object],
        performance: [Object],
        optimization: [Object],
        resolve: [Object],
        resolveLoader: [Object] },
     outputOptions:
      { filename: 'index.js',
        path:
         'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\dist',
        chunkFilename: '[id].index.js',
        webassemblyModuleFilename: '[modulehash].module.wasm',
        library: '',
        hotUpdateFunction: 'webpackHotUpdate',
        jsonpFunction: 'webpackJsonp',
        chunkCallbackName: 'webpackChunk',
        globalObject: 'window',
        devtoolNamespace: '',
        libraryTarget: 'var',
        pathinfo: false,
        sourceMapFilename: '[file].map[query]',
        hotUpdateChunkFilename: '[id].[hash].hot-update.js',
        hotUpdateMainFilename: '[hash].hot-update.json',
        crossOriginLoading: false,
        jsonpScriptType: false,
        chunkLoadTimeout: 120000,
        hashFunction: 'md4',
        hashDigest: 'hex',
        hashDigestLength: 20,
        devtoolLineToLine: false,
        strictModuleExceptionHandling: false },
     bail: undefined,
     profile: undefined,
     performance:
      { maxAssetSize: 250000,
        maxEntrypointSize: 250000,
        hints: 'warning' },
     mainTemplate:
      MainTemplate {
        _pluginCompat: [SyncBailHook],
        outputOptions: [Object],
        hooks: [Object],
        requireFn: '__webpack_require__' },
     chunkTemplate:
      ChunkTemplate {
        _pluginCompat: [SyncBailHook],
        outputOptions: [Object],
        hooks: [Object] },
     hotUpdateChunkTemplate:
      HotUpdateChunkTemplate {
        _pluginCompat: [SyncBailHook],
        outputOptions: [Object],
        hooks: [Object] },
     runtimeTemplate:
      RuntimeTemplate {
        outputOptions: [Object],
        requestShortener: [RequestShortener] },
     moduleTemplates:
      { javascript: [ModuleTemplate], webassembly: [ModuleTemplate] },
     semaphore:
      Semaphore {
        available: 100,
        waiters: [],
        _continue: [Function: bound _continue] },
     entries: [ [NormalModule] ],
     _preparedEntrypoints: [ [Object] ],
     entrypoints:
      Map {
        'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\src' => [Entrypoint] },
     chunks: [ [Chunk] ],
     chunkGroups: [ [Entrypoint] ],
     namedChunkGroups:
      Map {
        'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\src' => [Entrypoint] },
     namedChunks:
      Map {
        'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\src' => [Chunk] },
     modules: [ [NormalModule] ],
     _modules:
      Map {
        'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\src\\index.js' => [NormalModule] },
     cache: null,
     records: { modules: [Object], chunks: [Object] },
     additionalChunkAssets: [],
     assets: { 'index.js': [RawSource] },
     errors: [],
     warnings: [],
     children: [],
     dependencyFactories:
      Map {
        [Function: WebAssemblyImportDependency] => [NormalModuleFactory],
        [Function: WebAssemblyExportImportedDependency] => [NormalModuleFactory],
        [Function: SingleEntryDependency] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [ContextModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => [ContextModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [ContextModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function: LoaderDependency] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [ContextModuleFactory],
        [Function: ContextElementDependency] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [ContextModuleFactory] },
     dependencyTemplates:
      Map {
        'hash' => '',
        [Function] => ConstDependencyTemplate {},
        [Function] => HarmonyExportDependencyTemplate {},
        [Function] => HarmonyInitDependencyTemplate {},
        [Function] => HarmonyImportSideEffectDependencyTemplate {},
        [Function] => HarmonyImportSpecifierDependencyTemplate {},
        [Function] => HarmonyExportDependencyTemplate {},
        [Function] => HarmonyExportDependencyTemplate {},
        [Function] => HarmonyExportSpecifierDependencyTemplate {},
        [Function] => HarmonyExportImportedSpecifierDependencyTemplate {},
        [Function] => HarmonyAcceptDependencyTemplate {},
        [Function] => HarmonyAcceptImportDependencyTemplate {},
        [Function] => AMDRequireDependencyTemplate {},
        [Function] => ModuleDependencyTemplateAsRequireId {},
        [Function] => AMDRequireArrayDependencyTemplate {},
        [Function] => ContextDependencyTemplateAsRequireCall {},
        [Function] => AMDDefineDependencyTemplate {},
        [Function] => UnsupportedDependencyTemplate {},
        [Function] => LocalModuleDependencyTemplate {},
        [Function] => ModuleDependencyTemplateAsId {},
        [Function] => ContextDependencyTemplateAsRequireCall {},
        [Function] => ModuleDependencyTemplateAsId {},
        [Function] => ContextDependencyTemplateAsId {},
        [Function] => RequireResolveHeaderDependencyTemplate {},
        [Function] => RequireHeaderDependencyTemplate {},
        [Function] => RequireIncludeDependencyTemplate {},
        [Function] => NullDependencyTemplate {},
        [Function] => RequireEnsureDependencyTemplate {},
        [Function] => ModuleDependencyTemplateAsRequireId {},
        [Function] => ImportDependencyTemplate {},
        [Function] => ImportEagerDependencyTemplate {},
        [Function] => ImportDependencyTemplate {},
        [Function] => ContextDependencyTemplateAsRequireCall {} },
     childrenCounters: {},
     usedChunkIds: null,
     usedModuleIds: null,
     fileTimestamps: Map {},
     contextTimestamps: Map {},
     compilationDependencies: Set {},
     _buildingModules: Map {},
     _rebuildingModules: Map {},
     fullHash: '4d8d6867edb329aaaf48a9ac73b37be8',
     hash: '4d8d6867edb329aaaf48',
     fileDependencies:
      SortableSet [Set] {
        'E:\\Program Files (x86)\\VMware\\Windows 7\\Zw\\Zen-CLI\\test\\src\\index.js',
        _sortFn: undefined,
        _lastActiveSortFn: null,
        _cache: undefined,
        _cacheOrderIndependent: undefined },
     contextDependencies:
      SortableSet [Set] {
        _sortFn: undefined,
        _lastActiveSortFn: null,
        _cache: undefined,
        _cacheOrderIndependent: undefined },
     missingDependencies:
      SortableSet [Set] {
        _sortFn: undefined,
        _lastActiveSortFn: null,
        _cache: undefined,
        _cacheOrderIndependent: undefined } },
  hash: '4d8d6867edb329aaaf48',
  startTime: 1539945378475,
  endTime: 1539945378564
}
*/