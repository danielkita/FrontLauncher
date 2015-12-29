var gulp = require('gulp')
var config = require('../config')
var path = require('path')
var watch = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  var watchableTasks = ['fonts','sass', 'html','images','svg']
  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var filePattern = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      watch(filePattern, function() { gulp.start(taskName) })
    }
  })
})


