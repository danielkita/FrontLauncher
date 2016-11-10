import webpackConfig  from '../lib/webpack-multi-config';
import gulp    from 'gulp';
import logger  from '../lib/compileLogger';
import webpack from 'webpack';

const config =  new webpackConfig('production');

const webpackProductionTask = callback => {
  webpack(config, function(err, stats) {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack:production', webpackProductionTask)
module.exports = webpackProductionTask
