var config = require('../config')
var compact = require('lodash/array/compact')

// Grouped by what can run in parallel
var assetTasks = config.tasks.assets
var codeTasks = config.tasks.code

module.exports = function(env) {
  var jsTasks = {
    watch: 'webpack:watch',
    development: 'webpack:watch',
    production: 'webpack:production'
  }

  var matchFilter = function(task) {
    if(config.tasks[task]) {
      if(task === 'js') {
        task = jsTasks[env] || jsTask.watch
      }
      return task
    }
  }

  return {
    assetTasks: compact(assetTasks.map(matchFilter)),
    codeTasks: compact(codeTasks.map(matchFilter))
  }
}
