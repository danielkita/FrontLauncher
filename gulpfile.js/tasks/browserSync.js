var gulp        = require('gulp');
var config      = require('../config')
var path 		= require('path');
var browserSync = require('browser-sync')

var options = {
  server: {
    baseDir: path.resolve(config.root.dest, config.tasks.html.dest),
    directory:true
  }
}
gulp.task('browserSync', function() {
    browserSync.init(options);
});