var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var config       = require('../config')

gulp.task('default', function(cb) {
    global.watch = true
    gulpSequence(config.tasks.code, 'watch', cb);
});