const config = require('../config');

const path = require('path');
const slash = require('slash');
const webpack = require('webpack');
const webpackManifest = require('./webpackManifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
  if (!config.tasks.js) return;
  var jsSrc = path.resolve(config.root.src, config.tasks.js.src);
  var jsDest = path.resolve(config.root.dest, config.tasks.js.dest);
  var publicPath = slash(path.join(config.tasks.js.dest, '/'));
  var filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js';
  var extensions = config.tasks.js.extensions.map(function(extension) {
    return '.' + extension;
  });
  var hashStr =
    'RnJvbnRMYXVuY2hlcg0KTGljZW5zZTogTUlUDQpBdXRob3I6IERhbmllbCBLaXRhIDx0LnRyYXgwQGdtYWlsLmNvbT4NClJlcG86IGh0dHBzOi8vZ2l0aHViLmNvbS9ULVRyYVgvRnJvbnRMYXVuY2hlcg==';
  var banner = new Buffer(hashStr, 'base64');
  var webpackConfig = {
    mode: env,
    optimization: {},
    context: jsSrc,
    plugins: [
      new webpack.BannerPlugin(banner.toString()),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
    resolve: {
      //extensions: [''].concat(extensions),
      modules: [jsSrc, 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!(foundation-sites)\/).*/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style!css!sass',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|jpeg|svg)$/,
          use: [
            {
              loader: 'url-loader?limit=100000',
            },
          ],
        },
        {
          test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
          use: [
            {
              loader: 'imports?define=>false&this=>window',
            },
          ],
        },
        {
          test: /jquery\.js$/,
          use: [
            {
              loader: 'expose-loader',
              query: 'jQuery',
            },
            {
              loader: 'expose-loader',
              query: '$',
            },
          ],
        },
      ],
    },
  };

  if (env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = config.tasks.js.entries;

    webpackConfig.output = {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath,
    };

    if (config.tasks.js.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.optimization.splitChunks = {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'shared',
            chunks: 'initial',
          },
        },
      };
    }
  }

  if (env === 'development') {
    webpackConfig.devtool = 'inline-source-map';

    // Create new entries object with webpack-hot-middleware added
    for (var key in config.tasks.js.entries) {
      var entry = config.tasks.js.entries[key];
      config.tasks.js.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry);
    }

    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, config.root.dest),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      })
    );
    webpackConfig.optimization.noEmitOnErrors = true;
    webpackConfig.optimization.minimizer = [new UglifyJsPlugin()];
  }

  return webpackConfig;
};
