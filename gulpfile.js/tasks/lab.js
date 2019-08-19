const gulp = require("gulp");
const gulpif = require("gulp-if");
const path = require("path");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const WebpackStrip = require("strip-loader");
const projectPath = require("../lib/projectPath");

const webpackConfig_dev = {
  context: path.resolve("./node_modules/giza-framework/js/"),
  entry: {
    app: ["babel-polyfill", "./giza.js"]
  },
  mode: "development",
  output: {
    path: path.resolve("./node_modules/giza-framework/js/"),
    filename: "giza.js",
    publicPath: "/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve("./node_modules/giza-framework/js/"),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        query: {
          presets: [["es2015", { modules: false }], "stage-1", "react-app"]
        }
      }
    ]
  }
};

const webpackConfig_production = {
  context: path.resolve("./node_modules/giza-framework/js/"),
  entry: {
    app: ["babel-polyfill", "./giza.js"]
  },
  mode: "production",
  output: {
    path: path.resolve("./node_modules/giza-framework/js/"),
    filename: "giza.js",
    publicPath: "/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve("./node_modules/giza-framework/js/"),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", { modules: false }], "stage-1", "react-app"]
            }
          },
          {
            loader: WebpackStrip.loader("debug", "console.log")
          }
        ]
      }
    ]
  }
};

gulp.task("lab:javascripts", function() {
  labWebpack_paths = {
    src: ["./node_modules/giza-framework/js/{*,*.*}.js"],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.javascripts.dest)
  };

  return gulp
    .src(labWebpack_paths.src)
    .pipe(gulpif(!production, webpackStream(webpackConfig_dev, webpack)))
    .pipe(gulpif(production, webpackStream(webpackConfig_production, webpack)))
    .pipe(gulp.dest(labWebpack_paths.dest));
});
