var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var replace = require('gulp-replace');

var paths = {
	src: path.resolve(config.root.dest, config.tasks.sass.dest,'/vendor.min.css'),
	dest: path.resolve(config.root.dest, config.tasks.sass.dest)
}
gulp.task('vendorcss', function(){
  gulp.src(paths.src)
    .pipe(replace(/url\(([^\)]+\/)?([^\/)]+)\)/g, 'url(resources/$2)'))
    .pipe(gulp.dest(paths.dest));
});