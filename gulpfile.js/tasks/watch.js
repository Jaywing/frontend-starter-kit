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

  javascripts_paths = {
    src: projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js")
  };

  gulp.watch(html_paths, ["html", "lab_html", browser.reload]);
  gulp.watch(stylesheets_paths.src, ["stylesheets", browser.reload]);
  gulp.watch(javascripts_paths.src, ["javascripts", browser.reload]);
});
