var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var flatten = require('gulp-flatten');

gulp.task('copy', function () {
  gulp.src(path.resolve(config.tasks.bower.src , '**/*.{' + config.tasks.bower.extensions.join(',') + '}'))
   .pipe(flatten())
   .pipe(gulp.dest(path.resolve(config.root.dest, config.assets.css , '/resources')));
});