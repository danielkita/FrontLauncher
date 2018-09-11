var gulp = require("gulp");
var gulpif = require("gulp-if");
var config = require("../config");
var path = require("path");
var handleErrors = require("../lib/handleErrors");
var browserSync = require("browser-sync");
var changed = require("gulp-changed");

var paths = {
  src: path.join(config.root.src, config.tasks.images.src, "/**"),
  dest: path.join(config.root.dest, config.tasks.images.dest)
};

var imagesTask = function() {
  return gulp
    .src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task("images", imagesTask);
module.exports = imagesTask;
