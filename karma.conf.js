var webpackConfig = require('./webpack.config.js');

var config = function(config) {
  return config.set({
    basePath: '',
    browsers: [
      'PhantomJS',
    ],
    frameworks: [
      'jasmine'
    ],
    files: [
      'src/**/spec.js',
    ],
    preprocessors: {
      'src/**/*.js': [
        'webpack',
        'sourcemap',
      ],
      'src/**/spec.js': [
        'webpack',
        'sourcemap',
      ],
    },
    webpack: Object.assign(
      {},
      webpackConfig,
      {
        externals: {
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true,
        },
      }
    ),
    webpackServer: {
      noInfo: true,
    },
    frameworks: [
      'jasmine'
    ],
    reporters: [
      'progress',
    ],
    colors: true,
    autoWatch: true,
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher',
    ],
  });
};

module.exports = config;
