const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addLessLoader,
  fixBabelImports
} = require("customize-cra");
const path = require("path");

function pathResolve (dir) {
  return path.resolve(__dirname,  dir)
}

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
  
  // disable eslint in webpack
  disableEsLint(),
  addLessLoader(),
  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  
  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    '@': pathResolve('src'),
    'assets': pathResolve('src/assets'),
    'common': pathResolve('src/common'),
    'components': pathResolve('src/components'),
    'network': pathResolve('src/network'),
    'pages': pathResolve('src/views'),
    'utils': pathResolve('src/utils'),
    'router': pathResolve('src/router')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'  //这里一定要写true，css和less都不行
  }),
  // adjust the underlying workbox
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat("index.html")
    })
  ),
);