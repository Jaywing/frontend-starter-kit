/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules */ \"./modules/index.js\");\n\nconsole.log(\"app.js has loaded!\");\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./modules sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./modules sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./modules/index.js\",\n\t\"./Accordion\": \"./modules/Accordion.js\",\n\t\"./Accordion.js\": \"./modules/Accordion.js\",\n\t\"./Nav\": \"./modules/Nav.js\",\n\t\"./Nav.js\": \"./modules/Nav.js\",\n\t\"./Toggle\": \"./modules/Toggle.js\",\n\t\"./Toggle.js\": \"./modules/Toggle.js\",\n\t\"./example\": \"./modules/example.js\",\n\t\"./example.js\": \"./modules/example.js\",\n\t\"./index\": \"./modules/index.js\",\n\t\"./index.js\": \"./modules/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./modules_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./modules/Accordion.js":
/*!******************************!*\
  !*** ./modules/Accordion.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Accordion = function () {\n  function Accordion(el) {\n    _classCallCheck(this, Accordion);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Accordion, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        accordionParent: this.el.querySelectorAll(\".c-accordion__toggle\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.accordionParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.accordionParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.accordionParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Accordion;\n}();\n\nexports.default = Accordion;\n\n//# sourceURL=webpack:///./modules/Accordion.js?");

/***/ }),

/***/ "./modules/Nav.js":
/*!************************!*\
  !*** ./modules/Nav.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Nav, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        dropdownMenuParent: this.el.querySelectorAll(\".is-dropdown-button\"),\n        accordionMenuParent: this.el.querySelectorAll(\".is-accordion-button\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.dropdownMenuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.dropdownMenuParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.dropdownMenuParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n\n      var _loop2 = function _loop2(i, len) {\n        _this.dom.accordionMenuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.accordionMenuParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.accordionMenuParent.length; i < len; i++) {\n        _loop2(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Nav;\n}();\n\nexports.default = Nav;\n\n//# sourceURL=webpack:///./modules/Nav.js?");

/***/ }),

/***/ "./modules/Toggle.js":
/*!***************************!*\
  !*** ./modules/Toggle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Toggle = function () {\n  function Toggle(el, options) {\n    _classCallCheck(this, Toggle);\n\n    var defaults = {\n      activeClass: \"is-active\",\n      target: \"\"\n    };\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(Toggle, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var toggle = function toggle() {\n        var target = _this.settings.target;\n        if (target === \"\") {\n          _this.el.classList.toggle(_this.settings.activeClass);\n        } else {\n          if (typeof target === \"string\") {\n            if (target === \"parent\") {\n              _this.el.parentNode.classList.toggle(_this.settings.activeClass);\n            } else {\n              document.querySelector(target).classList.toggle(_this.settings.activeClass);\n            }\n          }\n        }\n      };\n\n      this.el.addEventListener(\"click\", toggle);\n    }\n  }]);\n\n  return Toggle;\n}();\n\nexports.default = Toggle;\n\n//# sourceURL=webpack:///./modules/Toggle.js?");

/***/ }),

/***/ "./modules/example.js":
/*!****************************!*\
  !*** ./modules/example.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Example = function Example(el) {\n  _classCallCheck(this, Example);\n\n  this.el = el;\n  console.log(el.textContent, \"- From the example module\");\n};\n\nexports.default = Example;\n\n//# sourceURL=webpack:///./modules/example.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\r\n  Automatically instantiates modules based on data-attributes\r\n  specifying module file-names.\r\n*/\n\nvar moduleElements = document.querySelectorAll(\"[data-module]\");\n\nfor (var i = 0; i < moduleElements.length; i++) {\n  var el = moduleElements[i];\n  var name = el.getAttribute(\"data-module\");\n  var options = {};\n  var dataOptions = el.getAttribute(\"data-options\");\n  if (dataOptions) {\n    options = JSON.parse(dataOptions);\n  }\n  var Module = __webpack_require__(\"./modules sync recursive ^\\\\.\\\\/.*$\")(\"./\" + name).default;\n  new Module(el, options);\n}\n\n/*\r\n  Usage:\r\n  ======\r\n  html\r\n  ----\r\n  <button data-module=\"disappear\">disappear!</button>\r\n  js\r\n  --\r\n  // modules/disappear.js\r\n  export default class Disappear {\r\n    constructor(el) {\r\n      el.style.display = 'none'\r\n    }\r\n  }\r\n*/\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ })

/******/ });