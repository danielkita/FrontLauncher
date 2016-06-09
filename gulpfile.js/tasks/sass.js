var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var config       = require('../config')
var path         = require('path')
var browserSync  = require('browser-sync')
var handleErrors = require('../lib/handleErrors')
var sass         = require('gulp-sass')
var cssGlobbing  = require('gulp-css-globbing')
var sourcemaps   = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var cssnano      = require('gulp-cssnano')

var paths = {
    src: path.resolve(config.root.src, config.tasks.sass.src, config.tasks.sass.main),
    dest: path.resolve(config.root.dest, config.tasks.sass.dest)
}
var options = {
    includePaths: ['node_modules/foundation-sites/scss'],
    outputStyle: 'compressed', // nested, expanded, compact, compressed
    sourceComments: false,
} 
var sassTask = function() {
    gulp.src(paths.src)
        .pipe(gulpif(!global.production, sourcemaps.init()))
        .pipe(cssGlobbing(config.tasks.sass.sassGlobbing))
        .pipe(sass(options))
        .on('error', handleErrors)
        .pipe(autoprefixer(config.tasks.sass.autoprefixer))
        .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
        .pipe(gulpif(!global.production, sourcemaps.write('./')))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream({match: '**/*.css'}))
}
gulp.task('sass', sassTask)
module.exports = sassTask