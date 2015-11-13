var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var config       = require('../config')

gulp.task('build', function(cb) {
    gulpSequence(config.tasks.assets,config.tasks.code,['copy', 'usemin'], 'vendorcss', cb);
});