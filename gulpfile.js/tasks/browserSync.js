var gulp        = require('gulp');
var config      = require('../config')
var path = require('path');
var browserSync = require('browser-sync').create();

var options = {
  server: {
    baseDir: path.resolve(config.root.dest, config.tasks.html.dest)
  }
}
gulp.task('browserSync', function() {
    browserSync.init(options);
    gulp.watch([
    	path.resolve(config.root.dest,config.tasks.sass.dest,'*.css'),
    	path.resolve(config.root.dest,config.tasks.html.dest,'*.html'),
    	path.resolve(config.root.dest,config.tasks.js.dest,'*.js')
    	 ]).on("change", browserSync.reload);
});