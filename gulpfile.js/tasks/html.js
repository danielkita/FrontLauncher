var gulp         = require('gulp')
var config       = require('../config')
var browserSync  = require('browser-sync')
var path         = require('path')
var handleErrors = require('../lib/handleErrors')
var data         = require('gulp-data')
var render       = require('gulp-nunjucks-render')
var fs           = require('fs')

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
  var env = render.nunjucks.configure([path.resolve(config.root.src, config.tasks.html.src)], {watch: false })
  return gulp.src(paths.src)
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render())
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
})
