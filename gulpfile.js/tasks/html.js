const gulp = require("gulp");
const gulpif = require("gulp-if");
const nunjucksRender = require("gulp-nunjucks-render");
const projectPath = require("../lib/projectPath");
const data = require("gulp-data");
const path = require("path");
const fs = require("fs");

gulp.task("html", function() {
  paths = {
    src: [
      `./node_modules/giza-framework/html/**/*.html`,
      `./node_modules/jaywing-frontend-component-library/html/**/*.html`,
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      "!" +
        projectPath(
          PATH_CONFIG.BASE,
          PATH_CONFIG.html.src,
          "**/{layouts,shared,macros,data}/**"
        )
    ],
    src_render: [
      projectPath(PATH_CONFIG.lab),
      `./node_modules/jaywing-frontend-component-library/lab`,
      `./node_modules/giza-framework/lab/html`,
      `./node_modules/jaywing-frontend-component-library/html/components`,
      `./node_modules/jaywing-frontend-component-library/html/content`,
      `./node_modules/giza-framework/html/components`,
      `./node_modules/giza-framework/html/content`,
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src)
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.buildSite)
  };

  const dataFunction = function() {
    var dataPath = path.resolve(`${PATH_CONFIG.lab}/_data.json`);
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(paths.src)
    .pipe(data(dataFunction))
    .pipe(
      nunjucksRender({
        path: paths.src_render
      })
    )
    .pipe(gulp.dest(paths.dest));
});
