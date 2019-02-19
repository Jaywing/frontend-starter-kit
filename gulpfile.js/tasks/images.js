const gulp = require("gulp");
const projectPath = require("../lib/projectPath");

gulp.task("images", function() {
  images_paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.images.src, "**/*{jpg,png,svg}")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.images.dest)
  };

  return gulp.src(images_paths.src).pipe(gulp.dest(images_paths.dest));
});
