module.exports = {
  stripPrefix: 'dist/',
  staticFileGlobs: [
    'dist/*.html',
    'dist/*.php',
    'dist/manifest.json',
    'dist/*.png',
    'dist/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'dist/service-worker.js'
};
