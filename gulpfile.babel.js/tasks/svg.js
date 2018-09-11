import gulp from "gulp";
import config from "../config";
import path from "path";
import browserSync from "browser-sync";
import handleErrors from "../lib/handleErrors";
import svgstore from "gulp-svgstore";

const paths = {
  src: path.join(config.root.src, config.tasks.svg.src, "/**"),
  dest: path.join(config.root.dest, config.tasks.svg.dest)
};

const svgTask = () => {
  return gulp
    .src(paths.src)
    .pipe(svgstore())
    .on("error", handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task("svg", svgTask);
module.exports = svgTask;
