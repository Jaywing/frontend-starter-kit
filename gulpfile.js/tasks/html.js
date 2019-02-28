const gulp = require("gulp");
const gulpif = require("gulp-if");
const nunjucksRender = require("gulp-nunjucks-render");
const projectPath = require("../lib/projectPath");

gulp.task("html", function() {
  paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      "!" +
        projectPath(
          PATH_CONFIG.BASE,
          PATH_CONFIG.html.src,
          "**/{components,layouts,shared,macros,data}/**"
        )
    ],
    src_render: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src)],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.site)
  };

  return gulp
    .src(paths.src)
    .pipe(
      nunjucksRender({
        path: paths.src_render
      })
    )
    .pipe(gulp.dest(paths.dest));
});
