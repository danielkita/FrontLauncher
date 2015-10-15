var gulp = require('gulp')
var config = require('../config')
var path = require('path')
var browserSync = require('browser-sync')
var notify = require("gulp-notify")
var sass = require('gulp-sass')
var cssGlobbing = require('gulp-css-globbing')
var sourcemaps = require('gulp-sourcemaps')
var neat = require('node-neat')
var plumber = require('gulp-plumber')
var bourbon = require('node-bourbon')

var paths = {
    src: path.resolve(config.root.src, config.tasks.sass.src, config.tasks.sass.main),
    dest: path.resolve(config.root.dest, config.tasks.sass.dest)
}
var options = {
    includePaths: neat.with().concat(bourbon),
    outputStyle: 'compressed', // nested, expanded, compact, compressed
    sourceComments: false,
} 
gulp.task('sass', function() {
    gulp.src(paths.src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(cssGlobbing(config.tasks.sass.sassGlobbing))
        .pipe(sass(options))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.reload({stream:true}));
});