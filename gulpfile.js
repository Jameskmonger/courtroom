const gulp = require('gulp');
const tsc = require('gulp-typescript');
const mocha = require('gulp-mocha');

gulp.task('test', ['test:build:src', 'test:build:spec'], () => {
  return gulp.src('test-build/spec/**/*.spec.js')
      .pipe(mocha());
});
gulp.task('test:build:spec', (done) => {
  const specProject = tsc.createProject('spec/tsconfig.json', {
    module: 'commonjs'
  });

  specProject.src()
    .pipe(tsc(specProject))
    .pipe(gulp.dest('test-build'))
    .on('end', done);
});
gulp.task('test:build:src', (done) => {
  const srcProject = tsc.createProject('src/tsconfig.json', {
    module: 'commonjs'
  });

  srcProject.src()
    .pipe(tsc(srcProject))
    .pipe(gulp.dest('test-build/src'))
    .on('end', done);
});
