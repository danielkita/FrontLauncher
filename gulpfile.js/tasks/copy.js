var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var flatten = require('gulp-flatten');


var paths = {
	src: path.resolve(config.root.dest, config.tasks.bower.src , '**/*.{' + config.tasks.bower.extensions.join(',') + '}'),
	dest: path.resolve(config.root.dest, config.tasks.sass.dest , 'resources')
}
gulp.task('copy', function () {
  gulp.src(paths.src)
   .pipe(flatten())
   .pipe(gulp.dest(paths.dest));
});