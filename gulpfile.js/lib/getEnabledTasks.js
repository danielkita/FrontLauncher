var config = require('../config')

// Grouped by what can run in parallel
var assetTasks = config.tasks.assets
var codeTasks = config.tasks.code

module.exports = function(env) {
  function matchFilter(task) {
    if(config.tasks[task]) {
      if(task === 'js') {
        task = env === 'production' ? 'webpack:production' : false
      }
      return task
    }
  }

  function exists(value) {
    return !!value
  }

  return {
    assetTasks: assetTasks.map(matchFilter).filter(exists),
    codeTasks: codeTasks.map(matchFilter).filter(exists)
  }
}
