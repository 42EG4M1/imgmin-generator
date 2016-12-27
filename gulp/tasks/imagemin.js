const gulp   = require('gulp');
const config = require('../config').image;
const $      = require('gulp-load-plugins')();

gulp.task('imagemin', () => {
  var imageminOptions = {
    optimizationLevel: 7,
    progressive: true,
    interlaced: true
  };
  return gulp.src(config.src)
  .pipe($.changed(config.dest))
  .pipe($.plumber())
  .pipe($.imagemin(imageminOptions))
  .pipe(gulp.dest(config.dest));
});