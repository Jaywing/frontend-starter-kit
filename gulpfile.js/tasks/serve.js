const gulp = require("gulp");
const browser = require("browser-sync");
const port = process.env.SERVER_PORT || 3000;

gulp.task("serve", function() {
  browser.init({
    server: "./_build",
    port: port,
    open: false
  });
});
