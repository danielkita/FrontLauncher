var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    watch(path.resolve(config.root.src , config.tasks.sass.src , '**/*'), function() {
        gulp.start('sass');
    });
});



gulp.task('watch', ['browserSync'], function() {
  var watchableTasks = ['sass', 'html']
  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var filePattern = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      watch(filePattern, function() { gulp.start(taskName) })
    }
  })
})


