var gulp = require('gulp');
var config = require('../config')
var path = require('path');
var sass = require('gulp-sass');
var cssGlobbing = require('gulp-css-globbing');
var sourcemaps = require('gulp-sourcemaps');
var neat = require('node-neat');
var bourbon = require('node-bourbon');


var options = {
    includePaths: neat.with().concat(bourbon),
    sourceMap: true,
    outputStyle: 'compressed', // nested, expanded, compact, compressed
    sourceComments: false,
}
gulp.task('sass', function() {
    gulp.src(path.resolve(config.root.src, config.tasks.sass.src, config.tasks.sass.main))
    	.pipe(sourcemaps.init())
    	.pipe(cssGlobbing(config.tasks.sass.sassGlobbing))
     	.pipe(sass(options))
     	.pipe(sourcemaps.write('./'))
    	.pipe(gulp.dest(config.root.dest + config.tasks.sass.dest));
});