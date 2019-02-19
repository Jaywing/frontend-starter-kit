const gulp = require("gulp");
const svgstore = require("gulp-svgstore");
const projectPath = require("../lib/projectPath");

gulp.task("icons", function() {
  icons_paths = {
    src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.icons.src, "*.svg")],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.icons.dest)
  };

  return gulp
    .src(icons_paths.src)
    .pipe(svgstore())
    .pipe(gulp.dest(icons_paths.dest));
});
