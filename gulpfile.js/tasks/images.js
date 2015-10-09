var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var imagemin    = require('gulp-imagemin')

var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
}

gulp.task('images', function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}))
})
