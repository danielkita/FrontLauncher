var gulp         = require('gulp')
var render       = require('gulp-nunjucks-render')
var rename       = require('gulp-rename')
var handleErrors = require('../../lib/handleErrors')
var gutil        = require('gulp-util')

module.exports = function(config) {
  return function(glyphs, options) {
    gutil.log(gutil.colors.blue('Generating ' + config.demoDest + '/' + config.demoOutput))
    render.nunjucks.configure(config.nunjucks, {watch: false })
    return gulp.src(config.demo)
      .pipe(render({
        icons: glyphs.map(function(glyph) {
          gutil.log(gutil.colors.green('+ adding ' + glyph.name + ' glyph'))
          return {
            name: glyph.name,
            code: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
          }
        }),

        fontName: config.options.fontName,
        fontPath: config.fontPath,
        className: config.className,
        comment: '// DO NOT EDIT DIRECTLY!\n  //Generated by gulpfile.js/tasks/iconFont.js\n  //from ' + config.demo
      }))
    .on('error', handleErrors)
    .pipe(rename(config.demoOutput))
    .pipe(gulp.dest(config.demoDest))
  }
}