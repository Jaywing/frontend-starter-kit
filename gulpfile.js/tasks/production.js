const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");

gulp.task("production", function(cb) {
  global.production = true;

  PATH_CONFIG.buildDest = PATH_CONFIG.finalDest;

  gulpSequence(
    "clean:production",
    "html",
    "stylesheets",
    "images",
    "webpack",
    "icons",
    "fonts",
    "migrate",
    cb
  );
});
