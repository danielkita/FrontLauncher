import gulp from 'gulp';
import gulpSequence from 'gulp4-run-sequence';
import getEnabledTasks from '../lib/getEnabledTasks';
const tasks = getEnabledTasks('watch');

const defaultTask = cb => gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'watch', cb);

gulp.task('default', defaultTask);
module.exports = defaultTask;
