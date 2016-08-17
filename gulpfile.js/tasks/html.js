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
  src: [path.join(config.root.src, config.tasks.html.src, '**/*.{' + config.tasks.html.extensions.join(',') + '}'), exclude],
  dest: path.resolve(config.root.dest, config.tasks.html.dest),
}

var getData = function(file) {
  var dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

var stdFilter = function(str){
    return str;
};

var filterList = ['rev','i18n'];

var manageEnvironment = function(environment) {
    filterList.forEach(function(filter){
        environment.addFilter(filter, stdFilter);
    });
}

var nunjucksPath = path.resolve(config.root.src, config.tasks.html.src);
var nunjucksOptions = {
    path: nunjucksPath,
    manageEnv: manageEnvironment,
    envOptions: {
      watch: false
    }
}
var htmlTask = function() {
  return gulp.src(paths.src)
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render(nunjucksOptions))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)
  
}

gulp.task('html', htmlTask)
module.exports = htmlTask