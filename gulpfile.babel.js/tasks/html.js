const gulp         = require('gulp')
const config       = require('../config')
const browserSync  = require('browser-sync')
const path         = require('path')
const handleErrors = require('../lib/handleErrors')
const data         = require('gulp-data')
const render       = require('gulp-nunjucks-render')
const fs           = require('fs')

const exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

const paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '**/*.{' + config.tasks.html.extensions.join(',') + '}'), exclude],
  dest: path.resolve(config.root.dest, config.tasks.html.dest),
}

const getData = file => {
  const dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

const stdFilter = str => str;

const filterList = ['rev','i18n'];

const manageEnvironment = environment => {
    filterList.forEach(function(filter){
        environment.addFilter(filter, stdFilter);
    });
}

const nunjucksPath = path.resolve(config.root.src, config.tasks.html.src);
const nunjucksOptions = {
    path: nunjucksPath,
    manageEnv: manageEnvironment,
    envOptions: {
      watch: false
    }
}
const htmlTask = () => {
  if(global.production) return;
  
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