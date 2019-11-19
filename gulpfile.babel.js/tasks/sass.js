import gulp from "gulp";
import gulpif from "gulp-if";
import config from "../config";
import path from "path";
import browserSync from "browser-sync";
import handleErrors from "../lib/handleErrors";
import sass from "gulp-sass";
import cssGlobbing from "gulp-css-globbing";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import cssnano from "gulp-cssnano";

const paths = {
  src: path.resolve(
    config.root.src,
    config.tasks.sass.src,
    config.tasks.sass.main
  ),
  dest: path.resolve(config.root.dest, config.tasks.sass.dest)
};
const options = {
  includePaths: ["node_modules/foundation-sites/scss"],
  outputStyle: "expanded", // nested, expanded, compact, compressed
  sourceComments: false
};
const sassTask = () => {
  return gulp
    .src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(cssGlobbing(config.tasks.sass.sassGlobbing))
    .pipe(sass(options))
    .on("error", handleErrors)
    .pipe(autoprefixer())
    .pipe(gulpif(global.production, cssnano({ autoprefixer: false })))
    .pipe(gulpif(!global.production, sourcemaps.write("./")))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream({ match: "**/*.css" }));
};
gulp.task("sass", sassTask);
module.exports = sassTask;
