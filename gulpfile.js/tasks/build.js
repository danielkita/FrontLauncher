var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var config       = require('../config')
var getEnabledTasks = require('../lib/getEnabledTasks')
var tasks = getEnabledTasks('watch')


var buildTask = function(cb) {
    gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, cb);
}
gulp.task('build', buildTask);
module.exports = buildTask
