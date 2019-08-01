const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");

gulp.task("default", function(cb) {
  global.production = false;

  gulpSequence(
    "set-dev-node-env",
    "clean:build",
    "html",
    "stylesheets",
    "images",
    "webpack",
    "icons",
    "fonts",
    "static",
    "lab:html",
    "lab:stylesheets",
    "lab:javascripts",
    "lab:images",
    "serve",
    "watch",
    cb
  );
});

gulp.task("set-dev-node-env", function() {
  return (process.env.NODE_ENV = "development");
});
