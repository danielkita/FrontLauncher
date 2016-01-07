var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var browserSync  = require('browser-sync')
var handleErrors = require('../lib/handleErrors')
var uglify       = require('gulp-uglify')

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}

gulp.task('js', function() {
  return gulp.src(paths.src)
    .pipe(uglify())
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
})
