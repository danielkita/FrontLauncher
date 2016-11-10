import config      from '../config';
import browserSync from 'browser-sync';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import path        from 'path';

const paths = {
  src: path.join(config.root.src, config.tasks.fonts.src, '/**/*'),
  dest: path.join(config.root.dest, config.tasks.fonts.dest)
}

const fontsTask = ()=> {
    if(!config.tasks.fonts) return

	return gulp.src(paths.src)
		.pipe(changed(paths.dest)) // Ignore unchanged files
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream())
}

gulp.task('fonts', fontsTask)
module.exports = fontsTask
