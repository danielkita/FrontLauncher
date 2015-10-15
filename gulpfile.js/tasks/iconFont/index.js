var config = require('../../config')
var gulp = require('gulp')
var iconfont = require('gulp-iconfont')
var notify = require("gulp-notify")
var generateIconSass = require('./generateIconSass')
var plumber = require('gulp-plumber')
var path = require('path')

var fontPath = path.join(config.root.dest, config.tasks.iconFont.dest)
var cssPath = path.join(config.root.dest, config.tasks.sass.dest)

var settings = {
  name: 'icons',
  src: path.join(config.root.src, config.tasks.iconFont.src, '/*.svg'),
  dest: path.join(config.root.dest, config.tasks.iconFont.dest),
  sassDest: path.join(config.root.src, config.tasks.sass.src, config.tasks.iconFont.sassDest),
  template: path.normalize('./gulpfile.js/tasks/iconFont/template.sass'),
  sassOutputName: '_icons.sass',
  fontPath: path.relative(cssPath, fontPath),
  className: 'icon',
  options: {
    svg: true,
    timestamp: 0,
    fontName: 'icons',
    appendUnicode: true,
    normalize: false,
    formats: config.tasks.iconFont.extensions
  }
}

gulp.task('iconFont', function() {
  return gulp.src(settings.src)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(iconfont(settings.options))
    .on('glyphs', generateIconSass(settings))
    .pipe(gulp.dest(settings.dest))
})

module.exports = settings
