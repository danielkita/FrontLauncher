var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var browserSync  = require('browser-sync')
var handleErrors = require('../lib/handleErrors')
var svgstore     = require('gulp-svgstore')

var paths = {
  src: path.join(config.root.src, config.tasks.svg.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.svg.dest)
}

var svgTask = function() {
  return gulp.src(paths.src)
    .pipe(svgstore())
  	.on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('svg', svgTask)
module.exports = svgTask