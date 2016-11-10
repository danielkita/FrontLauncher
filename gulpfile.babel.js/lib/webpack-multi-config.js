var config = require('../config')

var path            = require('path')
var slash           = require('slash')
var webpack         = require('webpack')
var webpackManifest = require('./webpackManifest')

module.exports = function(env) {
  if(!config.tasks.js) return
  var jsSrc = path.resolve(config.root.src, config.tasks.js.src)
  var jsDest = path.resolve(config.root.dest, config.tasks.js.dest)
  var publicPath = slash(path.join(config.tasks.js.dest, '/'))
  var filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js'
  var extensions = config.tasks.js.extensions.map(function(extension) {
    return '.' + extension
  })
  var hashStr = 'RnJvbnRMYXVuY2hlcg0KTGljZW5zZTogTUlUDQpBdXRob3I6IERhbmllbCBLaXRhIDx0LnRyYXgwQGdtYWlsLmNvbT4NClJlcG86IGh0dHBzOi8vZ2l0aHViLmNvbS9ULVRyYVgvRnJvbnRMYXVuY2hlcg==';
  var banner = new Buffer(hashStr, 'base64');
  var webpackConfig = {
    context: jsSrc,
    plugins: [
        new webpack.BannerPlugin(banner.toString()),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
      root: jsSrc,
      extensions: [''].concat(extensions)
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader?presets[]=es2015',
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader",
            exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass',
          exclude: /node_modules/
        },
        { 
          test: /\.(png|jpg|gif|jpeg|svg)$/,
          loader: "url-loader?limit=100000" 
        },
        {
          test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
          loader: 'imports?define=>false&this=>window'
        },
        { test: /jquery\.js$/, loader: 'expose?$' },
        { test: /jquery\.js$/, loader: 'expose?jQuery' }
      ]
    }
  }

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = config.tasks.js.entries

    webpackConfig.output= {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath
    }

    if(config.tasks.js.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'shared',
          filename: filenamePattern,
        })
      )
    }
  }

  if(env === 'development') {
    webpackConfig.devtool = 'inline-source-map'

    // Create new entries object with webpack-hot-middleware added
    for (var key in config.tasks.js.entries) {
      var entry = config.tasks.js.entries[key]
      config.tasks.js.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry)
    }

    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if(env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, config.root.dest),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  return webpackConfig
}
