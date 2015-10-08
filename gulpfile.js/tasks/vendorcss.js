var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('vendorcss', function(){
  gulp.src(['assets/css/vendor.min.css'])
    .pipe(replace(/url\(([^\)]+\/)?([^\/)]+)\)/g, 'url(resources/$2)'))
    .pipe(gulp.dest('css'));
});