const gulp = require("gulp");
const projectPath = require("../lib/projectPath");

paths = {
  src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.fonts.src, "/**/*")],
  dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.fonts.dest)
};

gulp.task("fonts", function() {
  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
