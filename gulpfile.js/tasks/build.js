var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var config       = require('../config')
var getEnabledTasks = require('../lib/getEnabledTasks')
var tasks = getEnabledTasks('watch')

gulp.task('build', function(cb) {
    gulpSequence(tasks.assetTasks, tasks.codeTasks,['copy', 'usemin'], 'vendorcss', cb);
});