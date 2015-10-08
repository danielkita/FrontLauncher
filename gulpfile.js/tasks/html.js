var config       = require('../config')
var data         = require('gulp-data')
var gulp         = require('gulp')
var path         = require('path')
var render       = require('gulp-nunjucks-render')
var fs           = require('fs')

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.html'), exclude],
  dest: path.join(config.root.dest, config.tasks.html.dest),
}

var getData = function(file) {
  var dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

gulp.task('html', function() {
  render.nunjucks.configure([path.join(config.root.src, config.tasks.html.src)], {watch: false })
  return gulp.src(paths.src)
    .pipe(data(getData))
    .pipe(render())
    .pipe(gulp.dest(paths.dest))
})
