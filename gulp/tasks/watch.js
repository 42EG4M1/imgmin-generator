const gulp   = require('gulp');
const config = require('../config').image;
const $      = require('gulp-load-plugins')();

gulp.task('watch', () => {
  $.watch(config.watch, function(event) {
    gulp.start(['imagemin']);
  });
});