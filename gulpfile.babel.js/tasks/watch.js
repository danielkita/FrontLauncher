import gulp from "gulp";
import config from "../config";
import path from "path";
import watch from "gulp-watch";

gulp.task("watch", ["browserSync"], function() {
  const watchableTasks = ["fonts", "sass", "html", "images", "svg"];
  watchableTasks.forEach(function(taskName) {
    const task = config.tasks[taskName];
    if (task) {
      const filePattern = path.join(
        config.root.src,
        task.src,
        "**/*.{" + task.extensions.join(",") + "}"
      );
      watch(filePattern, function() {
        gulp.start(taskName);
      });
    }
  });
});
