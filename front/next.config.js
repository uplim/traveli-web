module.exports = {
  distDir: 'build',
  basePath: '/home',
  optimizeFonts: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300
    }
    return config
  }
}
