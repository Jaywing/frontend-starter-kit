const gulp = require("gulp");
const browser = require("browser-sync");
const projectPath = require("../lib/projectPath");

gulp.task("watch", function() {
  paths = {
    htmlSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      projectPath(PATH_CONFIG.lab, "**/*.html")
    ],
    stylesheetsSrc: projectPath(
      PATH_CONFIG.BASE,
      PATH_CONFIG.stylesheets.src,
      "**/*.scss"
    ),
    javascriptsSrc: projectPath(
      PATH_CONFIG.BASE,
      PATH_CONFIG.javascripts.src,
      "**/*.js"
    )
  };

  gulp.watch(paths.htmlSrc, ["html", browser.reload]);
  gulp.watch(paths.stylesheetsSrc, ["stylesheets", browser.reload]);
  gulp.watch(paths.javascriptsSrc, ["javascripts", browser.reload]);
});
