const gulp = require("gulp");
const data = require("gulp-data");
const path = require("path");
const fs = require("fs");
const nunjucksRender = require("gulp-nunjucks-render");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const projectPath = require("../lib/projectPath");

lab_html_paths = {
  src: [
    projectPath(PATH_CONFIG.lab, "**/*.html"),
    "!" +
      projectPath(
        PATH_CONFIG.lab,
        "**/{components,layouts,shared,macros,data}/**"
      )
  ],
  src_render: [
    projectPath(PATH_CONFIG.lab),
    `./node_modules/giza-lab/html`,
    projectPath(PATH_CONFIG.lab),
    `./node_modules/jaywing-frontend-starter-kit/lab/html`,
    projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src)
  ],
  dest: projectPath(PATH_CONFIG.buildDest),
  finalDest: projectPath(PATH_CONFIG.finalDest)
};

lab_stylesheets_paths = {
  src: [
    `./node_modules/jaywing-frontend-starter-kit/dist/stylesheets/lab.css`,
    projectPath(PATH_CONFIG.lab, PATH_CONFIG.stylesheets.src, "**/*.scss")
  ],
  dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.stylesheets.dest)
};

lab_javascripts_paths = {
  src: [`./node_modules/jaywing-frontend-starter-kit/dist/javascripts/lab.js`],
  dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.javascripts.dest),
  finalDest: projectPath(PATH_CONFIG.finalDest, PATH_CONFIG.javascripts.dest)
};

gulp.task("lab:html", function() {
  const dataFunction = function() {
    var dataPath = path.resolve(`${PATH_CONFIG.BASE}/lab/data/global.json`);
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(lab_html_paths.src)
    .pipe(data(dataFunction))
    .pipe(
      nunjucksRender({
        path: lab_html_paths.src_render
      })
    )
    .pipe(gulp.dest(lab_html_paths.dest));
});

gulp.task("lab:stylesheets", function() {
  return gulp
    .src(lab_stylesheets_paths.src)
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["> 1%"]
        })
      ])
    )
    .pipe(gulp.dest(lab_stylesheets_paths.dest));
});

gulp.task("lab:javascripts", function() {
  return gulp
    .src(lab_javascripts_paths.src)
    .pipe(gulp.dest(lab_javascripts_paths.dest));
});
