import gulp from "gulp";
import config from "../config";
import path from "path";

gulp.task(
  "watch",
  gulp.series("browserSync", done => {
    const watchableTasks = ["fonts", "sass", "html", "images", "svg"];
    watchableTasks.forEach(function(taskName) {
      const task = config.tasks[taskName];
      if (task) {
        const filePattern = path.join(
          config.root.src,
          task.src,
          "**/*.{" + task.extensions.join(",") + "}"
        );
        gulp.watch(filePattern, gulp.series(taskName));
      }
    });
    done();
  })
);
