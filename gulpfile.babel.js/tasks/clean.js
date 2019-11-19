import gulp from 'gulp';
import del from 'del';
import path from 'path';
import config from '../config';

const cleanTask = cb => {
  del([
    config.root.dest,
    path.resolve(config.root.src, config.tasks.sass.src, config.tasks.iconFont.sassDest, '_icons.scss'),
  ]).then(function(paths) {
    cb();
  });
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
