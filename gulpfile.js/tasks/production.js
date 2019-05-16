const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");

gulp.task("production", function(cb) {
  global.production = true;

  PATH_CONFIG.buildDest = PATH_CONFIG.finalDest;

  gulpSequence(
    "set-prod-node-env",
    "clean:production",
    "html",
    "stylesheets",
    "images",
    "webpack",
    "icons",
    "fonts",
    "static",
    "migrate",
    cb
  );
});

gulp.task("set-prod-node-env", function() {
  return (process.env.NODE_ENV = "production");
});
