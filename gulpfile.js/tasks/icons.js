const gulp = require("gulp");
const svgstore = require("gulp-svgstore");
const projectPath = require("../lib/projectPath");

gulp.task("icons", function() {
  paths = {
    src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.icons.src, "*.svg")],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.icons.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(svgstore())
    .pipe(gulp.dest(paths.dest));
});
