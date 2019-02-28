const gulp = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const projectPath = require("../lib/projectPath");

gulp.task("stylesheets", function() {
  paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.stylesheets.src, "**/*.scss")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.stylesheets.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(gulpif(!production, sourcemaps.init()))
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
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dest));
});
