import gulp from 'gulp';
import gulpSequence from 'gulp4-run-sequence';
import getEnabledTasks from '../lib/getEnabledTasks';

const productionTask = cb => {
  global.production = true;
  const tasks = getEnabledTasks('production');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'rev', cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
