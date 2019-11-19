import browserSync from "browser-sync";
import gulp from "gulp";
import slash from "slash";
import path from "path";
import webpackMultiConfig from "../lib/webpack-multi-config";
import config from "../config";
import webpack from "webpack";

const browserSyncTask = (done) => {
  const webpackConfig = webpackMultiConfig("development");
  const compiler = webpack(webpackConfig);
  const proxyConfig = config.tasks.browserSync.proxy || null;

  if (typeof proxyConfig === "string") {
    config.tasks.browserSync.proxy = {
      target: proxyConfig
    };
  }

  const server =
    config.tasks.browserSync.proxy || config.tasks.browserSync.server;

  server.middleware = [
    require("webpack-dev-middleware")(compiler, {
      stats: "errors-only",
      publicPath: slash(path.join("/", webpackConfig.output.publicPath))
    }),
    require("webpack-hot-middleware")(compiler)
  ];

  browserSync.init(config.tasks.browserSync);
  done();
};

gulp.task("browserSync", browserSyncTask);
module.exports = browserSyncTask;
