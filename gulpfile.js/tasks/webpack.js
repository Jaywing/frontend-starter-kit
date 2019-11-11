const gulp = require("gulp");
const gulpif = require("gulp-if");
const path = require("path");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const projectPath = require("../lib/projectPath");

const webpackConfig = {
  context: path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
  entry: {
    app: "./app.js"
  },
  mode: "development",
  output: {
    path: path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
    filename: "app.js",
    publicPath: "/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        // test: /\.js$/,
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        query: {
          presets: [["es2015", { modules: false }], "stage-1", "react-app"]
        }
      }
    ]
  }
};

const webpackConfig_production = {
  context: path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
  entry: {
    app: "./app.js"
  },
  mode: "production",
  output: {
    path: path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
    filename: "app.js",
    publicPath: "/assets/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        // test: /\.js$/,
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        query: {
          presets: [["es2015", { modules: false }], "stage-1", "react-app"]
        }
      }
    ]
  }
};

gulp.task("webpack", function() {
  paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.javascripts.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(gulpif(!production, webpackStream(webpackConfig, webpack)))
    .pipe(gulpif(production, webpackStream(webpackConfig_production, webpack)))
    .pipe(gulp.dest(paths.dest));
});
