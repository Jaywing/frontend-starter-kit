const gulp = require("gulp");
const browser = require("browser-sync");
const projectPath = require("../lib/projectPath");

stylesheets_paths = {
  src: [
    projectPath(PATH_CONFIG.BASE, PATH_CONFIG.stylesheets.src, "**/*.scss")
  ],
  dest: projectPath(PATH_CONFIG.buildDest)
};

javascripts_paths = {
  src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js")],
  dest: projectPath(PATH_CONFIG.buildDest)
};

gulp.task("watch", function() {
  gulp.watch(
    ["./lab/**/*", "./html/**/*"],
    ["html", "lab_html", browser.reload]
  );
  gulp.watch(stylesheets_paths.src, ["stylesheets", browser.reload]);
  gulp.watch(javascripts_paths.src, ["javascripts", browser.reload]);
});
