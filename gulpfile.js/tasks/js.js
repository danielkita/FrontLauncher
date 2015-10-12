var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var browserSync = require('browser-sync')
var notify = require("gulp-notify");
var plumber = require('gulp-plumber')
var uglify     = require('gulp-uglify')

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}

gulp.task('js', function() {
  return gulp.src(paths.src)
  	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}))
})
