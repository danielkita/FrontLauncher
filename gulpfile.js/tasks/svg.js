var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var browserSync = require('browser-sync')
var notify = require("gulp-notify");
var svgstore = require('gulp-svgstore');
var imagemin    = require('gulp-imagemin')
var plumber = require('gulp-plumber')

var paths = {
  src: path.join(config.root.src, config.tasks.svg.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.svg.dest)
}

gulp.task('svg', function() {
  return gulp.src(paths.src)
  	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(imagemin())
    .pipe(svgstore())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream: true}))
})