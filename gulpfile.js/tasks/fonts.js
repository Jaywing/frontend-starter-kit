const gulp = require("gulp");
const projectPath = require("../lib/projectPath");

fonts_paths = {
  src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.fonts.src, "/**/*")],
  dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.fonts.dest)
};

gulp.task("fonts", function() {
  return gulp.src(fonts_paths.src).pipe(gulp.dest(fonts_paths.dest));
});
