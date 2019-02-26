const gulp = require("gulp");
const browser = require("browser-sync");
const projectPath = require("../lib/projectPath");

gulp.task("watch", function() {
  html_paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      projectPath(PATH_CONFIG.lab, "**/*.html")
    ]
  };

  stylesheets_paths = {
    src: projectPath(PATH_CONFIG.BASE, PATH_CONFIG.stylesheets.src, "**/*.scss")
  };

  webpack_paths = {
    src: projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js")
  };

  gulp.watch(html_paths.src, ["html", "lab:html", browser.reload]);
  gulp.watch(stylesheets_paths.src, ["stylesheets", browser.reload]);
  gulp.watch(webpack_paths.src, ["webpack", browser.reload]);
});
