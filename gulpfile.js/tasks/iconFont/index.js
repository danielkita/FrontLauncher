var config = require('../../config')
var gulp = require('gulp')
var iconfont = require('gulp-iconfont')
var handleErrors = require('../../lib/handleErrors')
var generateIconSass = require('./generateIconSass')
var generateTemplate = require('./generateTemplate')
var path = require('path')
var slash = require('slash')

var fontPath = path.join(config.root.dest, config.tasks.iconFont.dest)
var cssPath = path.join(config.root.dest, config.tasks.sass.dest)
var joinPath 

var settings = {
  name: 'icons',
  src: path.join(config.root.src, config.tasks.iconFont.src, '/*.svg'),
  dest: path.join(config.root.dest, config.tasks.iconFont.dest),
  sassDest: path.join(config.root.src, config.tasks.sass.src, config.tasks.iconFont.sassDest),
  demoDest: path.join(config.root.dest, config.tasks.iconFont.dest),
  template: path.normalize('./gulpfile.js/tasks/iconFont/template.scss'),
  demo: path.normalize('./gulpfile.js/tasks/iconFont/demo.html'),
  demoOutput: 'demo.html',
  sassOutputName: '_icons.scss',
  fontPath: slash(path.relative(cssPath, fontPath)),
  className: 'icon',
  options: {
    svg: true,
    timestamp: 0,
    fontName: 'icons',
    appendUnicode: true,
    normalize: true,
    fontHeight: 512,
    descent:64,
    round:10e12,
    formats: config.tasks.iconFont.extensions
  }
}

gulp.task('iconFont', function() {
  return gulp.src(settings.src)
    .pipe(iconfont(settings.options))
    .on('error', handleErrors)
    .on('glyphs', generateIconSass(settings))
    .on('glyphs', generateTemplate(settings))
    .pipe(gulp.dest(settings.dest))
})

module.exports = settings
