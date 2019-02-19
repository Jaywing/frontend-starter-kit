const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");

gulp.task("default", function(cb) {
  global.production = false;

  gulpSequence(
    "clean:build",
    "html",
    "stylesheets",
    "images",
    "javascripts",
    "icons",
    "fonts",
    "lab:html",
    "lab:stylesheets",
    "lab:javascripts",
    "serve",
    "watch",
    cb
  );
});
