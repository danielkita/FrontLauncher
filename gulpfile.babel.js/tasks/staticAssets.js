import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import path from 'path';

const paths = {
  src: path.join(config.root.src, config.tasks.staticAssets.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.staticAssets.dest),
};

const staticTask = () => {
  return gulp
    .src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest));
};

gulp.task('staticAssets', staticTask);
module.exports = staticTask;
