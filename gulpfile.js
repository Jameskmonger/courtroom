const gulp = require('gulp');
const tsc = require('gulp-typescript');
const mocha = require('gulp-mocha');

gulp.task('test', () => {
  var specProject = tsc.createProject('spec/tsconfig.json', {
    module: 'commonjs'
  });

  var srcProject = tsc.createProject('src/tsconfig.json', {
    module: 'commonjs'
  });

  specProject.src()
    .pipe(tsc(specProject))
    .pipe(gulp.dest('test-build'));

  srcProject.src()
    .pipe(tsc(srcProject))
    .pipe(gulp.dest('test-build/src'));

  return gulp.src('test-build/spec/**/*.spec.js')
      .pipe(mocha());
});
