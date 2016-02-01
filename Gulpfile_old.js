const gulp = require('gulp');
const tsc = require('gulp-typescript');
const tsProject = tsc.createProject('src/tsconfig.json');
const mocha = require('gulp-mocha');

gulp.task('default', ['build']);
gulp.task('build', () => {
  return tsProject.src()
    .pipe(tsc(tsProject))
    .pipe(gulp.dest('.'));
});
gulp.task('build:commonjs', () => {
  const tsProjectCommonJS = tsc.createProject('src/tsconfig.json', {
    module: 'commonjs'
  });

  return tsProjectCommonJS.src()
    .pipe(tsc(tsProjectCommonJS))
    .pipe(gulp.dest('.'));
});
gulp.task('build:umd', () => {
  const tsProjectUMD = tsc.createProject('src/tsconfig.json', {
    module: 'umd'
  });

  return tsProjectUMD.src()
    .pipe(tsc(tsProjectUMD))
    .pipe(gulp.dest('.'));
});
gulp.task('test', ['test-build:spec:commonjs', 'test-build:src:commonjs'], () => {
    return gulp.src('test-build/spec/**/*.spec.js', {read: false})
        .pipe(mocha());
});
gulp.task('test:umd', ['test-build:spec', 'test-build:src:umd'], () => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-coveralls',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ]
  }).start();
});

gulp.task('test-build:spec:commonjs', (done) => {
  const tsProjectCommonJS = tsc.createProject('spec/tsconfig.json', {
    module: 'commonjs'
  });

  tsProjectCommonJS.src()
    .pipe(tsc(tsProjectCommonJS))
    .pipe(gulp.dest('test-build'))
    .on('end', done);
});

gulp.task('test-build:src:commonjs', (done) => {
  const tsProjectCommonJS = tsc.createProject('src/tsconfig.json', {
    module: 'commonjs'
  });

  tsProjectCommonJS.src()
    .pipe(tsc(tsProjectCommonJS))
    .pipe(gulp.dest('test-build/src'))
    .on('end', done);
});


gulp.task('test-build:src', (done) => {
  tsProject.src()
    .pipe(tsc(tsProject))
    .pipe(gulp.dest('test-build/src'))
    .on('end', done);
});

gulp.task('test-build:src:umd', (done) => {
  const tsProjectUMD = tsc.createProject('src/tsconfig.json', {
    module: 'umd'
  });

  tsProjectUMD.src()
    .pipe(tsc(tsProjectUMD))
    .pipe(gulp.dest('test-build/src'))
    .on('end', done);
});
