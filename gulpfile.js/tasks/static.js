const gulp = require("gulp");
const projectPath = require("../lib/projectPath");

gulp.task("static", function() {
  paths = {
    src: projectPath(
      PATH_CONFIG.BASE,
      PATH_CONFIG.static.src,
      "**/*{ico,png,svg,webmanifest,xml,json}"
    ),
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.static.dest)
  };

  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
