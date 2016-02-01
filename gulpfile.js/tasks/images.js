var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var handleErrors = require('../lib/handleErrors')
var browserSync  = require('browser-sync')
var changed      = require('gulp-changed')
var imagemin     = require('gulp-imagemin')

var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
}

gulp.task('images', function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .on('error', handleErrors)
    .pipe(imagemin())
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
})