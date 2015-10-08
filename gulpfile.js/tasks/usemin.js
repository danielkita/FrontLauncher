var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('usemin', function() {
  return gulp.src(path.resolve(config.root.dest, config.assets.html, '*.html'))
    .pipe(usemin({
      css: [minifyCss, 'concat'],
      js: [uglify],
      inlinejs: [ uglify ],
      inlinecss: [ minifyCss, 'concat' ]
    }))
    .pipe(gulp.dest(path.resolve(config.root.dest, config.assets.html)));
});