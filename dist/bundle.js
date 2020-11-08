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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function () {\n  function throttle(fn, ms) {\n    // Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls\n    var time,\n      last = 0;\n    return function () {\n      var a = arguments,\n        t = this,\n        now = +new Date(),\n        exe = function () {\n          last = now;\n          fn.apply(t, a);\n        };\n      clearTimeout(time);\n      now >= last + ms ? exe() : (time = setTimeout(exe, ms));\n    };\n  }\n  function hasClass(el, cls) {\n    if (el.className.match(\"(?:^|\\\\s)\" + cls + \"(?!\\\\S)\")) {\n      return true;\n    }\n  }\n  function addClass(el, cls) {\n    if (!el.className.match(\"(?:^|\\\\s)\" + cls + \"(?!\\\\S)\")) {\n      el.className += \" \" + cls;\n    }\n  }\n  function delClass(el, cls) {\n    el.className = el.className.replace(\n      new RegExp(\"(?:^|\\\\s)\" + cls + \"(?!\\\\S)\"),\n      \"\"\n    );\n  }\n\n  document.documentElement.className += \" js\"; // adds class=\"js\" to <html> element\n\n  function elementFromTop(elem, classToAdd, distanceFromTop, unit) {\n    var winY = window.innerHeight || document.documentElement.clientHeight,\n      elemLength = elem.length,\n      distTop,\n      distPercent,\n      distPixels,\n      distUnit,\n      i;\n\n    console.count(elemLength);\n    for (i = 0; i < elemLength; ++i) {\n      distTop = elem[i].getBoundingClientRect().top;\n      distPercent = Math.round((distTop / winY) * 100);\n      distPixels = Math.round(distTop);\n      distUnit = unit == \"percent\" ? distPercent : distPixels;\n      if (distUnit <= distanceFromTop) {\n        if (!hasClass(elem[i], classToAdd)) {\n          addClass(elem[i], classToAdd);\n        }\n      } else {\n        delClass(elem[i], classToAdd);\n      }\n    }\n  }\n  // params: element, classes to add, distance from top, unit ('percent' or 'pixels')\n\n  const p = document.querySelectorAll(\"#main-article > p\");\n  const h1 = document.querySelectorAll(\"#main-article > h1\");\n  const h2 = document.querySelectorAll(\"#main-article > h2\");\n  const h3 = document.querySelectorAll(\"#main-article > h3\");\n  const video = document.querySelectorAll(\"#main-article > video\");\n\n  const checkIfElementAreInView = (params) => {\n    elementFromTop(p, \"inView\", 100, \"percent\");\n    elementFromTop(h1, \"inView\", 100, \"percent\");\n    elementFromTop(h2, \"inView\", 100, \"percent\");\n    elementFromTop(h3, \"inView\", 100, \"percent\");\n    elementFromTop(video, \"inView\", 100, \"percent\");\n  };\n\n  window.addEventListener(\n    \"scroll\",\n    throttle(function () {\n      checkIfElementAreInView();\n    }, 100),\n    false\n  );\n\n  checkIfElementAreInView();\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });