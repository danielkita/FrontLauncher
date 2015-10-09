var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');


var paths = {
	src: path.resolve(config.root.dest, config.tasks.html.dest, '*.html'),
	dest: path.resolve(config.root.dest, config.tasks.html.dest)
}
gulp.task('usemin', function() {
  return gulp.src(paths.src)
    .pipe(usemin({
      css: [minifyCss, 'concat'],
      js: [uglify],
      inlinejs: [ uglify ],
      inlinecss: [ minifyCss, 'concat' ]
    }))
    .pipe(gulp.dest(paths.dest));
});