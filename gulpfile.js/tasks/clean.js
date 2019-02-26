const gulp = require("gulp");
const clean = require("del").sync;

gulp.task("clean:build", function() {
  clean([PATH_CONFIG.buildDest]);
});

gulp.task("clean:production", function() {
  clean([PATH_CONFIG.finalDest]);
});
