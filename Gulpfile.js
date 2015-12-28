const gulp = require('gulp');
const tsc = require('gulp-typescript');
const Server = require('karma').Server;
const tsProject = tsc.createProject('src/tsconfig.json');
const tsProjectSpec = tsc.createProject('spec/tsconfig.json');

gulp.task('default', ['build']);
gulp.task('build', () => {
  return tsProject.src()
    .pipe(tsc(tsProject))
    .pipe(gulp.dest('build'));
});
gulp.task('test', ['test-build:spec', 'test-build:src'], () => {
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
gulp.task('test-build:spec', (done) => {
  tsProjectSpec.src()
    .pipe(tsc(tsProjectSpec))
    .pipe(gulp.dest('test-build'))
    .on('end', done);
});
gulp.task('test-build:src', (done) => {
  tsProject.src()
    .pipe(tsc(tsProject))
    .pipe(gulp.dest('test-build/src'))
    .on('end', done);
});
