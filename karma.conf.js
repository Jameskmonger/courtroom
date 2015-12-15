// Karma configuration
// Generated on Thu Dec 10 2015 00:03:13 GMT+0000 (GMT)

module.exports = function(config) {
  var configuration = ({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.ts',
      {pattern: 'test-build/src/courtroom/*.js', included: false},
      {pattern: 'test-build/src/courtroom/juries/*.js', included: false},
      {pattern: 'test-build/src/courtroom/laws/*.js', included: false},
      {pattern: 'test-build/spec/courtroom/*.spec.js', included: false},
      {pattern: 'test-build/spec/courtroom/juries/*.spec.js', included: false},
      {pattern: 'test-build/spec/courtroom/laws/*.spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test-build/src/courtroom/*.js': ['coverage'],
      'test-build/src/courtroom/juries/*.js': ['coverage'],
      'test-build/src/courtroom/laws/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    coverageReporter: {
		reporters: [{type: 'lcov'}, {type: 'text-summary'}],
		dir: "coverage/"
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });

  if(process.env.TRAVIS){
    configuration.browsers = ['PhantomJS'];
    configuration.reporters.push('coveralls');
    configuration.singleRun = true;
  }

  config.set(configuration);
}
