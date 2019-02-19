const requireDir = require("require-dir");

global.PATH_CONFIG = require("./path-config");

requireDir("./tasks", { recurse: true });
