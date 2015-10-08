var gulp        = require('gulp');
var config      = require('../config')
var path = require('path');
var browserSync = require('browser-sync').create();

var options = {
  server: {
    baseDir: path.resolve(config.root.dest, config.assets.html)
  }
}
gulp.task('browser-sync', function() {
    browserSync.init(options);
    gulp.watch([
    	path.resolve('public/assets/css/*.css'),
    	path.resolve('public/*.html'),
    	path.resolve('public/assets/js/*.js'),
    	 ]).on("change", browserSync.reload);
});