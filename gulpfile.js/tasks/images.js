const gulp = require("gulp");
const projectPath = require("../lib/projectPath");

gulp.task("images", function() {
  paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.images.src, "**/*{jpg,png,svg}")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.images.dest)
  };

  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
