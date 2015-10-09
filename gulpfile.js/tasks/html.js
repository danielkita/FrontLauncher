var gulp         = require('gulp')
var config       = require('../config')
var path         = require('path')
var browserSync = require('browser-sync')
var data         = require('gulp-data')
var render       = require('gulp-nunjucks-render')
var fs           = require('fs')
var debug = require('gulp-debug')

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.html'), exclude],
  dest: path.resolve(config.root.dest, config.tasks.html.dest),
}

var getData = function(file) {
  var dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}
gulp.task('html', function() {
  render.nunjucks.configure([path.resolve(config.root.src, config.tasks.html.src)], {watch: false })
  return gulp.src(paths.src)
  .pipe(debug({title: 'unicorn:'}))
    .pipe(data(getData))
    .pipe(render())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}))
})
