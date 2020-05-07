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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/appStyles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/appStyles.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-container .node-messages-container .node-container .initiate-paxos-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button {\n  border: none;\n  color: white;\n  text-align: center; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:focus {\n    outline: 0; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:disabled {\n    color: #141414;\n    background-color: #646464; }\n\n.app-container .node-messages-container .node-container .proposal-modal {\n  -webkit-animation: fade-in 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n/* ----------------------------------------------\n * Generated by Animista on 2018-7-2 0:40:5\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.app-container .node-messages-container .node-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  background-color: lightblue; }\n  .app-container .node-messages-container .node-container .node-component {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 4px;\n    height: 150px;\n    width: 400px;\n    border-radius: 50% / 50%;\n    -moz-border-radius: 50% / 50%;\n    -webkit-border-radius: 50% / 50%;\n    background-color: lightgrey;\n    border: 4px solid lightgrey; }\n    .app-container .node-messages-container .node-container .node-component .node-label {\n      margin-bottom: 4px; }\n    .app-container .node-messages-container .node-container .node-component .roles-container {\n      display: flex;\n      flex-direction: row;\n      background-color: white;\n      height: 96px;\n      width: 280px;\n      margin-bottom: 4px; }\n      .app-container .node-messages-container .node-container .node-component .roles-container .proposer-component, .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .receiver-component, .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .learner-component {\n        white-space: nowrap;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        text-overflow: ellipsis; }\n      .app-container .node-messages-container .node-container .node-component .roles-container .proposer-component {\n        flex: 1;\n        padding: 4px;\n        background-color: pink;\n        margin: 1px; }\n      .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        min-width: 0; }\n        .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .receiver-component {\n          flex: 1;\n          padding: 4px;\n          background-color: lightgreen;\n          margin: 1px; }\n        .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .learner-component {\n          flex: 1;\n          padding: 4px;\n          background-color: yellow;\n          margin: 1px; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button {\n    background-color: #00aa00;\n    font-size: 14px; }\n    .app-container .node-messages-container .node-container .initiate-paxos-button:hover {\n      background-color: #008200; }\n    .app-container .node-messages-container .node-container .initiate-paxos-button:active {\n      background-color: #005000; }\n  .app-container .node-messages-container .node-container .proposal-modal {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    position: absolute;\n    left: 25%;\n    top: 25%;\n    width: 50%;\n    height: 50%;\n    box-shadow: 4px 4px 10px;\n    background-color: #b4b4fa; }\n    .app-container .node-messages-container .node-container .proposal-modal .proposal-input {\n      padding: 4px;\n      border: 1px solid white;\n      border-radius: 2px; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-input:focus {\n        outline: 0; }\n    .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button {\n      background-color: #00aa00;\n      margin: 2px;\n      font-size: 12px;\n      width: 80px; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:hover {\n        background-color: #008200; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:active {\n        background-color: #005000; }\n    .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button {\n      background-color: #969696;\n      margin: 2px;\n      font-size: 12px;\n      width: 80px; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:hover {\n        background-color: #828282; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:active {\n        background-color: #505050; }\n\n.app-container .node-messages-container .node-container .initiate-paxos-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button {\n  border: none;\n  color: white;\n  text-align: center; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:focus {\n    outline: 0; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:disabled {\n    color: #141414;\n    background-color: #646464; }\n\n.app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container {\n  -webkit-animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n/* ----------------------------------------------\n * Generated by Animista on 2018-7-2 0:56:17\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-in-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-in-top {\n  0% {\n    -webkit-transform: translateY(-110px);\n    transform: translateY(-110px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes slide-in-top {\n  0% {\n    -webkit-transform: translateY(-110px);\n    transform: translateY(-110px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n\n.app-container .node-messages-container .messages-outer-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: lightgreen;\n  border: 1px solid black;\n  overflow: hidden; }\n  .app-container .node-messages-container .messages-outer-container .messages-label {\n    margin-left: 10px; }\n  .app-container .node-messages-container .messages-outer-container .messages-middle-container {\n    flex: 1;\n    display: flex;\n    width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden; }\n    .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container {\n      display: flex;\n      flex-direction: row; }\n      .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container {\n        display: flex;\n        flex-direction: column;\n        margin: 10px;\n        padding: 4px;\n        height: 110px;\n        width: 140px;\n        border-radius: 2px;\n        background-color: #f0be00; }\n        .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-text-container {\n          flex: 1; }\n        .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container {\n          display: flex;\n          flex-direction: row; }\n          .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button {\n            flex: 1;\n            background-color: #0000e6;\n            font-size: 12px; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:hover {\n              background-color: #0000aa; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:active {\n              background-color: #000078; }\n          .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button {\n            flex: 1;\n            background-color: #dc0000;\n            font-size: 12px; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:hover {\n              background-color: #aa0000; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:active {\n              background-color: #780000; }\n        .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-text {\n          font-size: 14px; }\n\n* {\n  font-family: Arial; }\n\n* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n* ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 8px;\n  height: 6px; }\n\n* ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.app-container {\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n  border: 2px solid black;\n  min-width: 800px; }\n  .app-container .node-messages-container {\n    display: flex;\n    flex-direction: row;\n    height: 160px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var paxos_1 = __webpack_require__(/*! ./lib/paxos */ "./src/lib/paxos.ts");
var NodeMessagesComponent_1 = __webpack_require__(/*! ./NodeMessagesComponent */ "./src/NodeMessagesComponent.tsx");
__webpack_require__(/*! ./styles/appStyles.scss */ "./src/styles/appStyles.scss");
function getNodeStates(paxos) {
    return paxos.nodes.map(function (node, index) {
        if (node.getId() !== index) {
            throw Error('Something is terribly wrong!!!');
        }
        return {
            id: node.getId(),
            proposer: {
                isProposing: node.isProposing(),
                proposalNumber: node.getProposalNumber(),
                proposedValue: node.getProposedValue(),
                responses: node.getNumProposerResponses(),
                phase: node.getProposerPhase(),
            },
            receiver: {
                highestSeenProposalNumber: node.getHighestSeenProposalNumber(),
                acceptedValue: node.getAcceptedValue(),
            },
            learner: {
                responses: node.getNumLearnerResponses(),
                learnedValue: node.getLearnedValue(),
            },
            messages: paxos.messagePool.getIdMessagePairsToNodeId(node.getId()),
        };
    });
}
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.beginDraftingProposal = function (nodeId) {
            _this.setState({ nodeIdDraftingProposal: nodeId });
        };
        _this.endDraftingProposal = function () {
            _this.setState({ nodeIdDraftingProposal: -1 });
        };
        _this.initiatePaxos = function (nodeId, proposedValue) {
            var paxos = _this.state.paxos;
            var node = paxos.getNodeById(nodeId);
            var messages = node.generatePrepareRequests(proposedValue);
            messages.forEach(function (message) { return paxos.messagePool.addMessage(message); });
            _this.setState({
                nodeStates: getNodeStates(paxos),
            });
        };
        _this.deliverMessage = function (messageId) {
            var paxos = _this.state.paxos;
            var message = paxos.messagePool.retrieveMessage(messageId);
            var toNode = paxos.getNodeById(message.headers.toNodeId);
            var responses = toNode.receiveMessage(message);
            responses.forEach(function (response) { return paxos.messagePool.addMessage(response); });
            _this.setState({
                nodeStates: getNodeStates(paxos),
            });
        };
        _this.dropMessage = function (messageId) {
            var paxos = _this.state.paxos;
            paxos.messagePool.dropMessage(messageId);
            _this.setState({
                nodeStates: getNodeStates(paxos),
            });
        };
        var paxos = new paxos_1.default(5);
        _this.state = {
            paxos: paxos,
            nodeStates: getNodeStates(paxos),
            nodeIdDraftingProposal: -1,
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        var nodeMessagesComponents = this.state.nodeStates.map(function (nodeState) {
            return React.createElement(NodeMessagesComponent_1.default, { paxos: _this.state.paxos, nodeState: nodeState, initiatePaxos: _this.initiatePaxos, deliverMessage: _this.deliverMessage, dropMessage: _this.dropMessage, beginDraftingProposal: _this.beginDraftingProposal, endDraftingProposal: _this.endDraftingProposal, nodeIdDraftingProposal: _this.state.nodeIdDraftingProposal });
        });
        return (React.createElement("div", { className: "app-container" }, nodeMessagesComponents));
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),

/***/ "./src/MessageButtonsComponent.tsx":
/*!*****************************************!*\
  !*** ./src/MessageButtonsComponent.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MessageButtonsComponent = function (props) {
    var deliver = props.deliver, drop = props.drop;
    return (React.createElement("div", { className: "message-buttons-container" },
        React.createElement("button", { className: "message-deliver-button", onClick: deliver }, "Deliver"),
        React.createElement("button", { className: "message-drop-button", onClick: drop }, "Drop")));
};
exports.default = MessageButtonsComponent;


/***/ }),

/***/ "./src/MessageComponent.tsx":
/*!**********************************!*\
  !*** ./src/MessageComponent.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MessageButtonsComponent_1 = __webpack_require__(/*! ./MessageButtonsComponent */ "./src/MessageButtonsComponent.tsx");
var MessageHeadersComponent_1 = __webpack_require__(/*! ./MessageHeadersComponent */ "./src/MessageHeadersComponent.tsx");
var MessageComponent = /** @class */ (function (_super) {
    __extends(MessageComponent, _super);
    function MessageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.extractNameAndBodyTexts = function (message) {
            var name;
            var bodyTexts;
            switch (message.kind) {
                case 'PrepareRequest': {
                    name = 'Prepare Request';
                    bodyTexts = [];
                    break;
                }
                case 'PrepareResponse': {
                    var response = message;
                    var _a = response.body, highestSeenProposalNumber = _a.highestSeenProposalNumber, acceptedValue = _a.acceptedValue;
                    name = 'Prepare Response';
                    bodyTexts = [
                        "prev promised PN: " + highestSeenProposalNumber,
                        "accepted value: " + acceptedValue,
                    ];
                    break;
                }
                case 'AcceptRequest': {
                    var request = message;
                    var proposedValue = request.body.proposedValue;
                    name = 'Accept Request';
                    bodyTexts = ["PV: " + proposedValue];
                    break;
                }
                case 'AcceptResponse': {
                    var response = message;
                    var _b = response.body, accepted = _b.accepted, highestSeenProposalNumber = _b.highestSeenProposalNumber;
                    name = 'Accept Response';
                    if (accepted) {
                        bodyTexts = ['ACCEPTED'];
                    }
                    else {
                        bodyTexts = [
                            'REJECTED',
                            "highest seen PN: " + highestSeenProposalNumber,
                        ];
                    }
                    break;
                }
            }
            return {
                name: name,
                bodyTexts: bodyTexts,
            };
        };
        _this.deliverMessage = function () {
            var id = _this.props.messageState.id;
            _this.props.deliverMessage(id);
        };
        _this.dropMessage = function () {
            var id = _this.props.messageState.id;
            _this.props.dropMessage(id);
        };
        return _this;
    }
    MessageComponent.prototype.render = function () {
        var _a = this.props, messageState = _a.messageState, deliverMessage = _a.deliverMessage, dropMessage = _a.dropMessage;
        var id = messageState.id, message = messageState.message;
        var _b = this.extractNameAndBodyTexts(message), name = _b.name, bodyTexts = _b.bodyTexts;
        var bodyTextComponents = bodyTexts.map(function (text) { return React.createElement("div", { className: "message-text" }, text); });
        return (React.createElement("div", { className: "message-container", id: id },
            React.createElement("div", { className: "message-text-container" },
                React.createElement(MessageHeadersComponent_1.default, { name: name, message: message }),
                bodyTextComponents),
            React.createElement(MessageButtonsComponent_1.default, { deliver: this.deliverMessage, drop: this.dropMessage })));
    };
    return MessageComponent;
}(React.Component));
exports.default = MessageComponent;


/***/ }),

/***/ "./src/MessageHeadersComponent.tsx":
/*!*****************************************!*\
  !*** ./src/MessageHeadersComponent.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MessageHeadersComponent = function (_a) {
    var name = _a.name, message = _a.message;
    var _b = message.headers, proposalNumber = _b.proposalNumber, fromNodeId = _b.fromNodeId, toNodeId = _b.toNodeId;
    return (React.createElement("div", { className: "message-header-component" },
        React.createElement("div", { className: "message-text" }, name),
        React.createElement("div", { className: "message-text" },
            "PN ",
            proposalNumber),
        React.createElement("div", { className: "message-text" },
            "from node #",
            fromNodeId)));
};
exports.default = MessageHeadersComponent;


/***/ }),

/***/ "./src/MessagesComponent.tsx":
/*!***********************************!*\
  !*** ./src/MessagesComponent.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MessageComponent_1 = __webpack_require__(/*! ./MessageComponent */ "./src/MessageComponent.tsx");
var MessagesComponent = /** @class */ (function (_super) {
    __extends(MessagesComponent, _super);
    function MessagesComponent(props) {
        return _super.call(this, props) || this;
    }
    MessagesComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, nodeId = _a.nodeId, messageStates = _a.messageStates;
        var messageComponents = messageStates.map(function (messageState) {
            return React.createElement(MessageComponent_1.default, { messageState: messageState, deliverMessage: _this.props.deliverMessage, dropMessage: _this.props.dropMessage });
        });
        return (React.createElement("div", { className: "messages-outer-container" },
            React.createElement("div", { className: "messages-label" },
                "Messages for Node #",
                nodeId),
            React.createElement("div", { className: "messages-middle-container" },
                React.createElement("div", { className: "messages-inner-container" }, messageComponents))));
    };
    return MessagesComponent;
}(React.Component));
exports.default = MessagesComponent;


/***/ }),

/***/ "./src/NodeComponent.tsx":
/*!*******************************!*\
  !*** ./src/NodeComponent.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ProposalModalComponent_1 = __webpack_require__(/*! ./ProposalModalComponent */ "./src/ProposalModalComponent.tsx");
var ProposerComponent = function (_a) {
    var proposerState = _a.proposerState;
    var isProposing = proposerState.isProposing, proposalNumber = proposerState.proposalNumber, proposedValue = proposerState.proposedValue, responses = proposerState.responses, phase = proposerState.phase;
    if (isProposing) {
        return (React.createElement("div", { className: "proposer-component" },
            React.createElement("div", { className: "node-text" },
                "PN: ",
                proposalNumber),
            React.createElement("div", { className: "node-text" },
                "PV: ",
                proposedValue),
            React.createElement("div", { className: "node-text" },
                "responses: ",
                responses),
            React.createElement("div", { className: "node-text" },
                "phase: ",
                phase)));
    }
    else {
        return (React.createElement("div", { className: "proposer-component" },
            React.createElement("div", { className: "node-text" }, "not proposing")));
    }
};
var ReceiverComponent = function (_a) {
    var receiverState = _a.receiverState;
    var highestSeenProposalNumber = receiverState.highestSeenProposalNumber, acceptedValue = receiverState.acceptedValue;
    return (React.createElement("div", { className: "receiver-component" },
        React.createElement("div", { className: "node-text" },
            "promised PN: ",
            receiverState.highestSeenProposalNumber),
        React.createElement("div", { className: "node-text" },
            "accepted: ",
            receiverState.acceptedValue)));
};
var LearnerComponent = function (_a) {
    var learnerState = _a.learnerState;
    var responses = learnerState.responses, learnedValue = learnerState.learnedValue;
    return (React.createElement("div", { className: "learner-component" },
        React.createElement("div", { className: "node-text" },
            "responses: ",
            learnerState.responses),
        React.createElement("div", { className: "node-text" },
            "LV: ",
            learnerState.learnedValue)));
};
var NodeComponent = /** @class */ (function (_super) {
    __extends(NodeComponent, _super);
    function NodeComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            _this.props.beginDraftingProposal(_this.props.nodeState.id);
        };
        return _this;
    }
    NodeComponent.prototype.render = function () {
        var nodeState = this.props.nodeState;
        var id = nodeState.id, proposer = nodeState.proposer, receiver = nodeState.receiver, learner = nodeState.learner;
        return (React.createElement("div", { className: "node-component" },
            React.createElement("div", { className: "node-label" },
                "Node #",
                id),
            React.createElement("div", { className: "roles-container" },
                React.createElement(ProposerComponent, { proposerState: proposer }),
                React.createElement("div", { className: "receiver-learner-container" },
                    React.createElement(ReceiverComponent, { receiverState: receiver }),
                    React.createElement(LearnerComponent, { learnerState: learner }))),
            React.createElement("button", { className: "initiate-paxos-button", onClick: this.handleClick, disabled: this.props.nodeIdDraftingProposal !== -1 }, "Initiate Paxos"),
            this.props.nodeIdDraftingProposal === nodeState.id &&
                React.createElement(ProposalModalComponent_1.default, { nodeState: this.props.nodeState, initiatePaxos: this.props.initiatePaxos, endDraftingProposal: this.props.endDraftingProposal })));
    };
    return NodeComponent;
}(React.Component));
exports.default = NodeComponent;


/***/ }),

/***/ "./src/NodeMessagesComponent.tsx":
/*!***************************************!*\
  !*** ./src/NodeMessagesComponent.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MessagesComponent_1 = __webpack_require__(/*! ./MessagesComponent */ "./src/MessagesComponent.tsx");
var NodeComponent_1 = __webpack_require__(/*! ./NodeComponent */ "./src/NodeComponent.tsx");
var NodeMessagesComponent = /** @class */ (function (_super) {
    __extends(NodeMessagesComponent, _super);
    function NodeMessagesComponent(props) {
        return _super.call(this, props) || this;
    }
    NodeMessagesComponent.prototype.render = function () {
        var nodeState = this.props.nodeState;
        return (React.createElement("div", { className: "node-messages-container" },
            React.createElement("div", { className: "node-container" },
                React.createElement(NodeComponent_1.default, { nodeState: nodeState, initiatePaxos: this.props.initiatePaxos, beginDraftingProposal: this.props.beginDraftingProposal, endDraftingProposal: this.props.endDraftingProposal, nodeIdDraftingProposal: this.props.nodeIdDraftingProposal, paxos: this.props.paxos })),
            React.createElement(MessagesComponent_1.default, { nodeId: nodeState.id, messageStates: nodeState.messages, deliverMessage: this.props.deliverMessage, dropMessage: this.props.dropMessage, paxos: this.props.paxos })));
    };
    return NodeMessagesComponent;
}(React.Component));
exports.default = NodeMessagesComponent;


/***/ }),

/***/ "./src/ProposalModalComponent.tsx":
/*!****************************************!*\
  !*** ./src/ProposalModalComponent.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ProposalModalComponent = /** @class */ (function (_super) {
    __extends(ProposalModalComponent, _super);
    function ProposalModalComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) { return _this.setState({ valueToPropose: event.target.value }); };
        _this.handleCancel = function (event) {
            event.preventDefault();
            _this.props.endDraftingProposal();
        };
        _this.handlePropose = function (event) {
            event.preventDefault();
            if (_this.state.valueToPropose.length > 0) {
                _this.props.initiatePaxos(_this.props.nodeState.id, _this.state.valueToPropose);
                _this.props.endDraftingProposal();
            }
        };
        _this.state = { valueToPropose: '' };
        return _this;
    }
    ProposalModalComponent.prototype.render = function () {
        return (React.createElement("form", { className: "proposal-modal" },
            React.createElement("div", null, "Enter a value to propose"),
            React.createElement("input", { className: "proposal-input", type: "text", autoFocus: true, value: this.state.valueToPropose, onChange: this.handleChange }),
            React.createElement("div", { className: "proposal-buttons-container" },
                React.createElement("button", { className: "propose-button", onClick: this.handlePropose }, "Propose"),
                React.createElement("button", { className: "cancel-button", onClick: this.handleCancel }, "Cancel"))));
    };
    return ProposalModalComponent;
}(React.Component));
exports.default = ProposalModalComponent;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById("root"));


/***/ }),

/***/ "./src/lib/learner.ts":
/*!****************************!*\
  !*** ./src/lib/learner.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var paxos_role_1 = __webpack_require__(/*! ./paxos_role */ "./src/lib/paxos_role.ts");
var Learner = /** @class */ (function (_super) {
    __extends(Learner, _super);
    function Learner(id) {
        var _this = _super.call(this) || this;
        _this.getId = function () { return _this.id; };
        _this.getNumResponses = function () { return _this.responses.length; };
        _this.getLearnedValue = function () { return _this.learnedValue; };
        _this.id = id;
        _this.proposalNumber = -1;
        _this.responses = [];
        return _this;
    }
    Learner.prototype.initializeReceiverNodeIds = function (receiverNodeIds) {
        this.receiverNodeIds = receiverNodeIds;
    };
    Learner.prototype.receivePrepareRequest = function (message) {
        return [];
    };
    Learner.prototype.receivePrepareResponse = function (message) {
        return [];
    };
    Learner.prototype.receiveAcceptRequest = function (message) {
        return [];
    };
    // TODO: rethink how to implement this method
    Learner.prototype.receiveAcceptResponse = function (message) {
        var headers = message.headers, body = message.body;
        if (headers.proposalNumber < this.proposalNumber) {
            return [];
        }
        if (headers.proposalNumber > this.proposalNumber) {
            this.proposalNumber = headers.proposalNumber;
            this.responses = [];
            this.learnedValue = null;
        }
        if (body.highestSeenProposalNumber > this.proposalNumber) {
            return [];
        }
        this.responses.push(message);
        if (this.responses.length > this.receiverNodeIds.length / 2) {
            this.learnedValue = this.responses[0].body.acceptedValue;
        }
        return [];
    };
    return Learner;
}(paxos_role_1.default));
exports.default = Learner;


/***/ }),

/***/ "./src/lib/message_pool.ts":
/*!*********************************!*\
  !*** ./src/lib/message_pool.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessagePool = /** @class */ (function () {
    function MessagePool() {
        this.idMessagePairs = [];
    }
    MessagePool.prototype._uniqueId = function () {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    };
    MessagePool.prototype.addMessage = function (message) {
        var id = this._uniqueId();
        this.idMessagePairs.push({
            id: id,
            message: message,
        });
        return id;
    };
    // TODO: make this more efficient
    MessagePool.prototype.peekMessage = function (id) {
        var messages = this.idMessagePairs
            .filter(function (pair) { return pair.id === id; })
            .map(function (pair) { return pair.message; });
        if (messages.length > 0) {
            return messages[0];
        }
        else {
            return null;
        }
    };
    MessagePool.prototype.retrieveMessage = function (id) {
        var messages = this.idMessagePairs
            .filter(function (pair) { return pair.id === id; })
            .map(function (pair) { return pair.message; });
        if (messages.length > 0) {
            this.idMessagePairs = this.idMessagePairs.filter(function (pair) { return pair.id !== id; });
            return messages[0];
        }
        else {
            return null;
        }
    };
    MessagePool.prototype.getMessages = function () {
        return this.idMessagePairs.map(function (pair) { return pair.message; });
    };
    MessagePool.prototype.dropMessage = function (id) {
        this.idMessagePairs = this.idMessagePairs.filter(function (pair) { return pair.id !== id; });
    };
    MessagePool.prototype.clear = function () {
        this.idMessagePairs = [];
    };
    MessagePool.prototype.getIdMessagePairsToNodeId = function (nodeId) {
        return this.idMessagePairs.filter(function (pair) { return pair.message.headers.toNodeId === nodeId; });
    };
    return MessagePool;
}());
exports.default = MessagePool;


/***/ }),

/***/ "./src/lib/paxos.ts":
/*!**************************!*\
  !*** ./src/lib/paxos.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var message_pool_1 = __webpack_require__(/*! ./message_pool */ "./src/lib/message_pool.ts");
var paxos_node_1 = __webpack_require__(/*! ./paxos_node */ "./src/lib/paxos_node.ts");
var Paxos = /** @class */ (function () {
    function Paxos(size) {
        var _this = this;
        this.messagePool = new message_pool_1.default();
        this.nodes = new Array(size).fill(0).map(function (_, index) { return new paxos_node_1.default(index, size); });
        this.nodes.forEach(function (node) {
            node.initializeNodeIds(_this.nodes.map(function (node) { return node.getId(); }));
        });
    }
    Paxos.prototype.getNodeById = function (id) {
        return this.nodes.find(function (node) { return node.getId() === id; });
    };
    return Paxos;
}());
exports.default = Paxos;


/***/ }),

/***/ "./src/lib/paxos_node.ts":
/*!*******************************!*\
  !*** ./src/lib/paxos_node.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var proposer_1 = __webpack_require__(/*! ./proposer */ "./src/lib/proposer.ts");
var receiver_1 = __webpack_require__(/*! ./receiver */ "./src/lib/receiver.ts");
var learner_1 = __webpack_require__(/*! ./learner */ "./src/lib/learner.ts");
var PaxosNode = /** @class */ (function () {
    function PaxosNode(id, numNodes) {
        var _this = this;
        // getter methods
        this.getId = function () { return _this.id; };
        // proposer
        this.isProposing = function () { return _this.proposer.getIsProposing(); };
        this.getProposalNumber = function () { return _this.proposer.getProposalNumber(); };
        this.getProposedValue = function () { return _this.proposer.getProposedValue(); };
        this.getNumProposerResponses = function () { return _this.proposer.getNumResponses(); };
        this.getProposerPhase = function () { return _this.proposer.getPhase(); };
        // receiver
        this.getHighestSeenProposalNumber = function () { return _this.receiver.getHighestSeenProposalNumber(); };
        this.getAcceptedValue = function () { return _this.receiver.getAcceptedValue(); };
        // learner
        this.getNumLearnerResponses = function () { return _this.learner.getNumResponses(); };
        this.getLearnedValue = function () { return _this.learner.getLearnedValue(); };
        this.id = id;
        this.proposer = new proposer_1.default(id);
        this.receiver = new receiver_1.default(id);
        this.learner = new learner_1.default(id);
    }
    PaxosNode.prototype.initializeNodeIds = function (nodeIds) {
        this.proposer.initializeReceiverNodeIds(nodeIds);
        this.learner.initializeReceiverNodeIds(nodeIds);
    };
    PaxosNode.prototype.receiveMessage = function (message) {
        var _this = this;
        var proposerMessages = this.proposer.receiveMessage(message);
        var receiverMessages = this.receiver.receiveMessage(message);
        var learnerMessages = this.learner.receiveMessage(message);
        if (proposerMessages.length > 0) {
            // The proposer is initiating the accept stage.
            var acceptRequestToSelf = proposerMessages.find(function (request) { return request.headers.toNodeId === _this.id; });
            var acceptResponseToSelf = this.receiver.receiveMessage(acceptRequestToSelf)[0];
            this.learner.receiveMessage(acceptResponseToSelf);
            return proposerMessages.filter(function (message) { return message.headers.toNodeId !== _this.id; });
        }
        if (receiverMessages.length > 0) {
            return receiverMessages;
        }
        if (learnerMessages.length > 0) {
            return learnerMessages;
        }
        return [];
    };
    PaxosNode.prototype.generatePrepareRequests = function (valueToPropose) {
        var _this = this;
        var highestSeenProposalNumber = this.receiver.getHighestSeenProposalNumber();
        var prepareRequests = this.proposer.generatePrepareRequests(valueToPropose, highestSeenProposalNumber);
        var prepareRequestToSelf = prepareRequests.find(function (request) { return request.headers.toNodeId === _this.id; });
        var prepareResponseToSelf = this.receiver.receiveMessage(prepareRequestToSelf)[0];
        this.proposer.receiveMessage(prepareResponseToSelf);
        return prepareRequests.filter(function (request) { return request.headers.toNodeId !== _this.id; });
    };
    return PaxosNode;
}());
exports.default = PaxosNode;


/***/ }),

/***/ "./src/lib/paxos_role.ts":
/*!*******************************!*\
  !*** ./src/lib/paxos_role.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PaxosRole = /** @class */ (function () {
    function PaxosRole() {
    }
    PaxosRole.prototype.receiveMessage = function (message) {
        switch (message.kind) {
            case 'PrepareRequest': return this.receivePrepareRequest(message);
            case 'PrepareResponse': return this.receivePrepareResponse(message);
            case 'AcceptRequest': return this.receiveAcceptRequest(message);
            case 'AcceptResponse': return this.receiveAcceptResponse(message);
            default: return [];
        }
    };
    return PaxosRole;
}());
exports.default = PaxosRole;


/***/ }),

/***/ "./src/lib/proposer.ts":
/*!*****************************!*\
  !*** ./src/lib/proposer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var paxos_role_1 = __webpack_require__(/*! ./paxos_role */ "./src/lib/paxos_role.ts");
var Proposer = /** @class */ (function (_super) {
    __extends(Proposer, _super);
    function Proposer(id) {
        var _this = _super.call(this) || this;
        _this.getId = function () { return _this.id; };
        _this.getIsProposing = function () { return _this.isProposing; };
        _this.getProposalNumber = function () { return _this.proposalNumber; };
        _this.getProposedValue = function () { return _this.proposedValue; };
        _this.getNumResponses = function () { return _this.responses.length; };
        _this.getPhase = function () {
            if (!_this.isProposing) {
                return 'N/A';
            }
            else if (!_this.initiatedAcceptPhase) {
                return 'Prepare';
            }
            else {
                return 'Accept';
            }
        };
        _this.id = id;
        _this.reset();
        return _this;
    }
    Proposer.prototype.initializeReceiverNodeIds = function (receiverNodeIds) {
        this.receiverNodeIds = receiverNodeIds;
    };
    Proposer.prototype.generatePrepareRequests = function (value, proposalNumberToBeat) {
        var _this = this;
        this.reset();
        this.proposalNumber = this.getNewProposalNumber(proposalNumberToBeat);
        this.proposedValue = value;
        this.isProposing = true;
        return this.receiverNodeIds
            .map(function (nodeId) {
            return ({
                kind: 'PrepareRequest',
                headers: {
                    toNodeId: nodeId,
                    fromNodeId: _this.id,
                    proposalNumber: _this.proposalNumber,
                },
                body: {},
            });
        });
    };
    Proposer.prototype.reset = function () {
        this.proposalNumber = -1;
        this.proposedValue = '';
        this.responses = [];
        this.isProposing = false;
        this.initiatedAcceptPhase = false;
    };
    Proposer.prototype.getNewProposalNumber = function (proposalNumberToBeat) {
        if (!proposalNumberToBeat) {
            proposalNumberToBeat = 0;
        }
        var numNodes = this.receiverNodeIds.length;
        return (Math.floor(proposalNumberToBeat / numNodes) + 1) * numNodes + this.id;
    };
    Proposer.prototype.receivePrepareRequest = function (message) {
        if (message.headers.proposalNumber > this.proposalNumber) {
            this.reset();
        }
        return [];
    };
    ;
    Proposer.prototype.receivePrepareResponse = function (message) {
        var headers = message.headers, body = message.body;
        if (!this.isProposing ||
            this.initiatedAcceptPhase ||
            headers.proposalNumber !== this.proposalNumber) {
            return [];
        }
        if (body.highestSeenProposalNumber > this.proposalNumber) {
            this.reset();
            return [];
        }
        this.responses.push(message);
        // If the majority of receiver nodes haven't acknowledged the prepare request yet, then do nothing.
        if (this.responses.length <= this.receiverNodeIds.length / 2) {
            return [];
        }
        // Majority of receiver nodes have acknowledged the prepare request!
        this.initiatedAcceptPhase = true;
        var messageWithHighestProposalNumber = this.responses
            .reduce(function (prevMessage, nextMessage) {
            return prevMessage.body.highestSeenProposalNumber > nextMessage.body.highestSeenProposalNumber
                ? prevMessage : nextMessage;
        });
        var _a = messageWithHighestProposalNumber.body, highestSeenProposalNumber = _a.highestSeenProposalNumber, acceptedValue = _a.acceptedValue;
        if (acceptedValue != null) {
            this.proposedValue = acceptedValue;
        }
        return this.generateAcceptRequests();
    };
    Proposer.prototype.generateAcceptRequests = function () {
        var _this = this;
        return this.receiverNodeIds.map(function (nodeId) {
            return ({
                kind: 'AcceptRequest',
                headers: {
                    toNodeId: nodeId,
                    fromNodeId: _this.id,
                    proposalNumber: _this.proposalNumber,
                },
                body: {
                    proposedValue: _this.proposedValue,
                },
            });
        });
    };
    Proposer.prototype.receiveAcceptRequest = function (message) {
        if (message.headers.proposalNumber > this.proposalNumber) {
            this.reset();
        }
        return [];
    };
    Proposer.prototype.receiveAcceptResponse = function (message) {
        if (message.body.highestSeenProposalNumber > this.proposalNumber) {
            this.reset();
        }
        return [];
    };
    return Proposer;
}(paxos_role_1.default));
exports.default = Proposer;


/***/ }),

/***/ "./src/lib/receiver.ts":
/*!*****************************!*\
  !*** ./src/lib/receiver.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var paxos_role_1 = __webpack_require__(/*! ./paxos_role */ "./src/lib/paxos_role.ts");
var Receiver = /** @class */ (function (_super) {
    __extends(Receiver, _super);
    function Receiver(id) {
        var _this = _super.call(this) || this;
        _this.getId = function () { return _this.id; };
        _this.getAcceptedValue = function () { return _this.acceptedValue; };
        _this.getHighestSeenProposalNumber = function () { return _this.highestSeenProposalNumber; };
        _this.id = id;
        _this.highestSeenProposalNumber = -1;
        _this.acceptedValue = null;
        return _this;
    }
    Receiver.prototype.receivePrepareRequest = function (message) {
        var headers = message.headers;
        var highestSeenProposalNumber = this.highestSeenProposalNumber;
        var acceptedValue = this.acceptedValue;
        if (headers.proposalNumber > this.highestSeenProposalNumber) {
            this.highestSeenProposalNumber = headers.proposalNumber;
            this.acceptedValue = null;
        }
        return [
            {
                kind: 'PrepareResponse',
                headers: {
                    toNodeId: headers.fromNodeId,
                    fromNodeId: this.id,
                    proposalNumber: headers.proposalNumber,
                },
                body: {
                    highestSeenProposalNumber: highestSeenProposalNumber,
                    acceptedValue: acceptedValue,
                },
            }
        ];
    };
    ;
    Receiver.prototype.receivePrepareResponse = function (message) {
        return [];
    };
    Receiver.prototype.receiveAcceptRequest = function (message) {
        var headers = message.headers, body = message.body;
        var accepted = false;
        if (headers.proposalNumber >= this.highestSeenProposalNumber) {
            this.highestSeenProposalNumber = headers.proposalNumber;
            this.acceptedValue = body.proposedValue;
            accepted = true;
        }
        return [
            {
                kind: 'AcceptResponse',
                headers: {
                    toNodeId: headers.fromNodeId,
                    fromNodeId: this.id,
                    proposalNumber: headers.proposalNumber,
                },
                body: {
                    accepted: accepted,
                    highestSeenProposalNumber: this.highestSeenProposalNumber,
                    acceptedValue: accepted ? this.acceptedValue : null,
                },
            }
        ];
    };
    Receiver.prototype.receiveAcceptResponse = function (message) {
        return [];
    };
    return Receiver;
}(paxos_role_1.default));
exports.default = Receiver;


/***/ }),

/***/ "./src/styles/appStyles.scss":
/*!***********************************!*\
  !*** ./src/styles/appStyles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./appStyles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/appStyles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hcHBTdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9NZXNzYWdlQnV0dG9uc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01lc3NhZ2VDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9NZXNzYWdlSGVhZGVyc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01lc3NhZ2VzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTm9kZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGVNZXNzYWdlc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb3Bvc2FsTW9kYWxDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9sZWFybmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWVzc2FnZV9wb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcGF4b3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9wYXhvc19ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcGF4b3Nfcm9sZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Byb3Bvc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVjZWl2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hcHBTdHlsZXMuc2Nzcz81MDA3Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxxckJBQXFyQixpQkFBaUIsaUJBQWlCLHVCQUF1QixFQUFFLG90QkFBb3RCLGlCQUFpQixFQUFFLG11QkFBbXVCLHFCQUFxQixnQ0FBZ0MsRUFBRSw2RUFBNkUsOEVBQThFLHNFQUFzRSxFQUFFLDRWQUE0VixRQUFRLGlCQUFpQixFQUFFLFVBQVUsaUJBQWlCLEVBQUUsRUFBRSx3QkFBd0IsUUFBUSxpQkFBaUIsRUFBRSxVQUFVLGlCQUFpQixFQUFFLEVBQUUsNkRBQTZELGtCQUFrQiwyQkFBMkIsd0JBQXdCLHVCQUF1Qixn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QUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDcEQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRVMsd0NBQXFCLEdBQS9CLFVBQWdDLE9BQXVCO1FBQ3JELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUtILGVBQUM7QUFBRCxDQUFDLENBN0VxQyxvQkFBUyxHQTZFOUM7Ozs7Ozs7Ozs7Ozs7O0FDdEZELGNBQWMsbUJBQU8sQ0FBQyw0TkFBMkc7O0FBRWpJLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pbml0aWF0ZS1wYXhvcy1idXR0b24sIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAucHJvcG9zZS1idXR0b24sIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b24sIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRyb3AtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaW5pdGlhdGUtcGF4b3MtYnV0dG9uOmZvY3VzLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLnByb3Bvc2UtYnV0dG9uOmZvY3VzLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRlbGl2ZXItYnV0dG9uOmZvY3VzLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kcm9wLWJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG4gIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmluaXRpYXRlLXBheG9zLWJ1dHRvbjpkaXNhYmxlZCwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbjpkaXNhYmxlZCwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kZWxpdmVyLWJ1dHRvbjpkaXNhYmxlZCwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b246ZGlzYWJsZWQge1xcbiAgICBjb2xvcjogIzE0MTQxNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NjQ2NDsgfVxcblxcbi5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuMjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDsgfVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOC03LTIgMDo0MDo1XFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qKlxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBhbmltYXRpb24gZmFkZS1pblxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7IH1cXG4gIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIC8gNTAlO1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJSAvIDUwJTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCUgLyA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRncmV5OyB9XFxuICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IC5ub2RlLWxhYmVsIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7IH1cXG4gICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAubm9kZS1jb21wb25lbnQgLnJvbGVzLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGhlaWdodDogOTZweDtcXG4gICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAubm9kZS1jb21wb25lbnQgLnJvbGVzLWNvbnRhaW5lciAucHJvcG9zZXItY29tcG9uZW50LCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIC5yZWNlaXZlci1sZWFybmVyLWNvbnRhaW5lciAucmVjZWl2ZXItY29tcG9uZW50LCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIC5yZWNlaXZlci1sZWFybmVyLWNvbnRhaW5lciAubGVhcm5lci1jb21wb25lbnQge1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAubm9kZS1jb21wb25lbnQgLnJvbGVzLWNvbnRhaW5lciAucHJvcG9zZXItY29tcG9uZW50IHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICAgICAgbWFyZ2luOiAxcHg7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIC5yZWNlaXZlci1sZWFybmVyLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtaW4td2lkdGg6IDA7IH1cXG4gICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IC5yb2xlcy1jb250YWluZXIgLnJlY2VpdmVyLWxlYXJuZXItY29udGFpbmVyIC5yZWNlaXZlci1jb21wb25lbnQge1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgICAgICAgIG1hcmdpbjogMXB4OyB9XFxuICAgICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIC5yZWNlaXZlci1sZWFybmVyLWNvbnRhaW5lciAubGVhcm5lci1jb21wb25lbnQge1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgICAgICAgbWFyZ2luOiAxcHg7IH1cXG4gIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmluaXRpYXRlLXBheG9zLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFhMDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pbml0aWF0ZS1wYXhvcy1idXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyMDA7IH1cXG4gICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaW5pdGlhdGUtcGF4b3MtYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTAwMDsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIHRvcDogMjUlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGZhOyB9XFxuICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1pbnB1dCB7XFxuICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcbiAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiAwOyB9XFxuICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAucHJvcG9zZS1idXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFhMDA7XFxuICAgICAgbWFyZ2luOiAycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIHdpZHRoOiA4MHB4OyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MjAwOyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbjphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTAwMDsgfVxcbiAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5Njk2OTY7XFxuICAgICAgbWFyZ2luOiAycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIHdpZHRoOiA4MHB4OyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MjgyODI7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b246YWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7IH1cXG5cXG4uYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pbml0aWF0ZS1wYXhvcy1idXR0b24sIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAucHJvcG9zZS1idXR0b24sIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b24sIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRyb3AtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaW5pdGlhdGUtcGF4b3MtYnV0dG9uOmZvY3VzLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLnByb3Bvc2UtYnV0dG9uOmZvY3VzLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRlbGl2ZXItYnV0dG9uOmZvY3VzLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kcm9wLWJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG4gIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmluaXRpYXRlLXBheG9zLWJ1dHRvbjpkaXNhYmxlZCwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbjpkaXNhYmxlZCwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kZWxpdmVyLWJ1dHRvbjpkaXNhYmxlZCwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b246ZGlzYWJsZWQge1xcbiAgICBjb2xvcjogIzE0MTQxNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NjQ2NDsgfVxcblxcbi5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi10b3AgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdG9wIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7IH1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTgtNy0yIDA6NTY6MTdcXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyoqXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIGFuaW1hdGlvbiBzbGlkZS1pbi10b3BcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwcHgpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbi10b3Age1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMHB4KTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbi5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XFxuICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcXG4gICAgICAgIHdpZHRoOiAxNDBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGJlMDA7IH1cXG4gICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLXRleHQtY29udGFpbmVyIHtcXG4gICAgICAgICAgZmxleDogMTsgfVxcbiAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAgICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRlbGl2ZXItYnV0dG9uIHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwZTY7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XFxuICAgICAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBhYTsgfVxcbiAgICAgICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRlbGl2ZXItYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDc4OyB9XFxuICAgICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRyb3AtYnV0dG9uIHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzAwMDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XFxuICAgICAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhMDAwMDsgfVxcbiAgICAgICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRyb3AtYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwMDAwOyB9XFxuICAgICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS10ZXh0IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogQXJpYWw7IH1cXG5cXG4qIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogNnB4OyB9XFxuXFxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1pbi13aWR0aDogODAwcHg7IH1cXG4gIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogMTYwcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbGliL21lc3NhZ2VfdHlwZXMnO1xuaW1wb3J0IFBheG9zTm9kZSBmcm9tICcuL2xpYi9wYXhvc19ub2RlJztcbmltcG9ydCBNZXNzYWdlUG9vbCBmcm9tICcuL2xpYi9tZXNzYWdlX3Bvb2wnO1xuaW1wb3J0IFBheG9zIGZyb20gJy4vbGliL3BheG9zJztcblxuaW1wb3J0IHsgTm9kZVN0YXRlIH0gZnJvbSAnLi9BcHBTdGF0ZSc7XG5pbXBvcnQgTm9kZU1lc3NhZ2VzQ29tcG9uZW50IGZyb20gJy4vTm9kZU1lc3NhZ2VzQ29tcG9uZW50JztcblxuaW1wb3J0ICcuL3N0eWxlcy9hcHBTdHlsZXMuc2Nzcyc7XG5cbmZ1bmN0aW9uIGdldE5vZGVTdGF0ZXMocGF4b3M6IFBheG9zKTogQXJyYXk8Tm9kZVN0YXRlPiB7XG4gIHJldHVybiBwYXhvcy5ub2Rlcy5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKG5vZGUuZ2V0SWQoKSAhPT0gaW5kZXgpIHtcbiAgICAgIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgdGVycmlibHkgd3JvbmchISEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBub2RlLmdldElkKCksXG5cbiAgICAgIHByb3Bvc2VyOiB7XG4gICAgICAgIGlzUHJvcG9zaW5nOiBub2RlLmlzUHJvcG9zaW5nKCksXG4gICAgICAgIHByb3Bvc2FsTnVtYmVyOiBub2RlLmdldFByb3Bvc2FsTnVtYmVyKCksXG4gICAgICAgIHByb3Bvc2VkVmFsdWU6IG5vZGUuZ2V0UHJvcG9zZWRWYWx1ZSgpLFxuICAgICAgICByZXNwb25zZXM6IG5vZGUuZ2V0TnVtUHJvcG9zZXJSZXNwb25zZXMoKSxcbiAgICAgICAgcGhhc2U6IG5vZGUuZ2V0UHJvcG9zZXJQaGFzZSgpLFxuICAgICAgfSxcblxuICAgICAgcmVjZWl2ZXI6IHtcbiAgICAgICAgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcjogbm9kZS5nZXRIaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyKCksXG4gICAgICAgIGFjY2VwdGVkVmFsdWU6IG5vZGUuZ2V0QWNjZXB0ZWRWYWx1ZSgpLFxuICAgICAgfSxcblxuICAgICAgbGVhcm5lcjoge1xuICAgICAgICByZXNwb25zZXM6IG5vZGUuZ2V0TnVtTGVhcm5lclJlc3BvbnNlcygpLFxuICAgICAgICBsZWFybmVkVmFsdWU6IG5vZGUuZ2V0TGVhcm5lZFZhbHVlKCksXG4gICAgICB9LFxuXG4gICAgICBtZXNzYWdlczogcGF4b3MubWVzc2FnZVBvb2wuZ2V0SWRNZXNzYWdlUGFpcnNUb05vZGVJZChub2RlLmdldElkKCkpLFxuICAgIH07XG4gIH0pO1xufVxuXG5pbnRlcmZhY2UgQXBwU3RhdGUge1xuICBwYXhvczogUGF4b3M7XG4gIG5vZGVTdGF0ZXM6IEFycmF5PE5vZGVTdGF0ZT47XG4gIG5vZGVJZERyYWZ0aW5nUHJvcG9zYWw6IG51bWJlcjsgLy8gLTEgaWYgbm9uZSwgb3RoZXJ3aXNlIGl0J3MgdGhlIGlkIG9mIHRoZSBub2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIEFwcFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgcGF4b3MgPSBuZXcgUGF4b3MoNSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBheG9zOiBwYXhvcyxcbiAgICAgIG5vZGVTdGF0ZXM6IGdldE5vZGVTdGF0ZXMocGF4b3MpLFxuICAgICAgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbDogLTEsXG4gICAgfTtcbiAgfVxuXG4gIGJlZ2luRHJhZnRpbmdQcm9wb3NhbCA9IChub2RlSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBub2RlSWREcmFmdGluZ1Byb3Bvc2FsOiBub2RlSWQgfSk7XG4gIH1cblxuICBlbmREcmFmdGluZ1Byb3Bvc2FsID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBub2RlSWREcmFmdGluZ1Byb3Bvc2FsOiAtMSB9KTtcbiAgfVxuXG4gIGluaXRpYXRlUGF4b3MgPSAobm9kZUlkOiBudW1iZXIsIHByb3Bvc2VkVmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgcGF4b3MgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBub2RlID0gcGF4b3MuZ2V0Tm9kZUJ5SWQobm9kZUlkKSBhcyBQYXhvc05vZGU7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBub2RlLmdlbmVyYXRlUHJlcGFyZVJlcXVlc3RzKHByb3Bvc2VkVmFsdWUpO1xuICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHBheG9zLm1lc3NhZ2VQb29sLmFkZE1lc3NhZ2UobWVzc2FnZSkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub2RlU3RhdGVzOiBnZXROb2RlU3RhdGVzKHBheG9zKSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGl2ZXJNZXNzYWdlID0gKG1lc3NhZ2VJZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBwYXhvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBwYXhvcy5tZXNzYWdlUG9vbC5yZXRyaWV2ZU1lc3NhZ2UobWVzc2FnZUlkKSBhcyBNZXNzYWdlO1xuICAgIGNvbnN0IHRvTm9kZSA9IHBheG9zLmdldE5vZGVCeUlkKG1lc3NhZ2UuaGVhZGVycy50b05vZGVJZCkgYXMgUGF4b3NOb2RlO1xuICAgIGNvbnN0IHJlc3BvbnNlcyA9IHRvTm9kZS5yZWNlaXZlTWVzc2FnZShtZXNzYWdlKTtcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHBheG9zLm1lc3NhZ2VQb29sLmFkZE1lc3NhZ2UocmVzcG9uc2UpKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbm9kZVN0YXRlczogZ2V0Tm9kZVN0YXRlcyhwYXhvcyksXG4gICAgfSk7XG4gIH1cblxuICBkcm9wTWVzc2FnZSA9IChtZXNzYWdlSWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgcGF4b3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgcGF4b3MubWVzc2FnZVBvb2wuZHJvcE1lc3NhZ2UobWVzc2FnZUlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5vZGVTdGF0ZXM6IGdldE5vZGVTdGF0ZXMocGF4b3MpLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5vZGVNZXNzYWdlc0NvbXBvbmVudHMgPSB0aGlzLnN0YXRlLm5vZGVTdGF0ZXMubWFwKChub2RlU3RhdGUpID0+XG4gICAgICA8Tm9kZU1lc3NhZ2VzQ29tcG9uZW50XG4gICAgICAgIHBheG9zPXt0aGlzLnN0YXRlLnBheG9zfVxuICAgICAgICBub2RlU3RhdGU9e25vZGVTdGF0ZX1cbiAgICAgICAgaW5pdGlhdGVQYXhvcz17dGhpcy5pbml0aWF0ZVBheG9zfVxuICAgICAgICBkZWxpdmVyTWVzc2FnZT17dGhpcy5kZWxpdmVyTWVzc2FnZX1cbiAgICAgICAgZHJvcE1lc3NhZ2U9e3RoaXMuZHJvcE1lc3NhZ2V9XG4gICAgICAgIGJlZ2luRHJhZnRpbmdQcm9wb3NhbD17dGhpcy5iZWdpbkRyYWZ0aW5nUHJvcG9zYWx9XG4gICAgICAgIGVuZERyYWZ0aW5nUHJvcG9zYWw9e3RoaXMuZW5kRHJhZnRpbmdQcm9wb3NhbH1cbiAgICAgICAgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbD17dGhpcy5zdGF0ZS5ub2RlSWREcmFmdGluZ1Byb3Bvc2FsfVxuICAgICAgLz5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAge25vZGVNZXNzYWdlc0NvbXBvbmVudHN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBNZXNzYWdlQnV0dG9uc0NvbXBvbmVudFByb3BzIHtcbiAgZGVsaXZlcjogKCkgPT4gdm9pZDtcbiAgZHJvcDogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgTWVzc2FnZUJ1dHRvbnNDb21wb25lbnQgPSAocHJvcHM6IE1lc3NhZ2VCdXR0b25zQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgeyBkZWxpdmVyLCBkcm9wIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVzc2FnZS1kZWxpdmVyLWJ1dHRvblwiIG9uQ2xpY2s9e2RlbGl2ZXJ9PlxuICAgICAgICBEZWxpdmVyXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVzc2FnZS1kcm9wLWJ1dHRvblwiIG9uQ2xpY2s9e2Ryb3B9PlxuICAgICAgICBEcm9wXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCdXR0b25zQ29tcG9uZW50O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBNZXNzYWdlLFxuICBQcmVwYXJlUmVxdWVzdCxcbiAgUHJlcGFyZVJlc3BvbnNlLFxuICBBY2NlcHRSZXF1ZXN0LFxuICBBY2NlcHRSZXNwb25zZSxcbn0gZnJvbSAnLi9saWIvbWVzc2FnZV90eXBlcyc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4vQXBwU3RhdGUnO1xuaW1wb3J0IE1lc3NhZ2VCdXR0b25zQ29tcG9uZW50IGZyb20gJy4vTWVzc2FnZUJ1dHRvbnNDb21wb25lbnQnO1xuaW1wb3J0IE1lc3NhZ2VIZWFkZXJzQ29tcG9uZW50IGZyb20gJy4vTWVzc2FnZUhlYWRlcnNDb21wb25lbnQnO1xuXG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIG1lc3NhZ2VTdGF0ZTogTWVzc2FnZVN0YXRlLFxuICBkZWxpdmVyTWVzc2FnZTogKG1lc3NhZ2VJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBkcm9wTWVzc2FnZTogKG1lc3NhZ2VJZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tcG9uZW50UHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGV4dHJhY3ROYW1lQW5kQm9keVRleHRzID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiB7IG5hbWU6IHN0cmluZywgYm9keVRleHRzOiBzdHJpbmdbXSB9ID0+IHtcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgYm9keVRleHRzO1xuICAgIHN3aXRjaChtZXNzYWdlLmtpbmQpIHtcbiAgICAgIGNhc2UgJ1ByZXBhcmVSZXF1ZXN0Jzoge1xuICAgICAgICBuYW1lID0gJ1ByZXBhcmUgUmVxdWVzdCc7XG4gICAgICAgIGJvZHlUZXh0cyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ1ByZXBhcmVSZXNwb25zZSc6IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBtZXNzYWdlIGFzIFByZXBhcmVSZXNwb25zZTtcbiAgICAgICAgY29uc3QgeyBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyLCBhY2NlcHRlZFZhbHVlIH0gPSByZXNwb25zZS5ib2R5O1xuICAgICAgICBuYW1lID0gJ1ByZXBhcmUgUmVzcG9uc2UnO1xuICAgICAgICBib2R5VGV4dHMgPSBbXG4gICAgICAgICAgYHByZXYgcHJvbWlzZWQgUE46ICR7aGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcn1gLFxuICAgICAgICAgIGBhY2NlcHRlZCB2YWx1ZTogJHthY2NlcHRlZFZhbHVlfWAsXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnQWNjZXB0UmVxdWVzdCc6IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG1lc3NhZ2UgYXMgQWNjZXB0UmVxdWVzdDtcbiAgICAgICAgY29uc3QgeyBwcm9wb3NlZFZhbHVlIH0gPSByZXF1ZXN0LmJvZHk7XG4gICAgICAgIG5hbWUgPSAnQWNjZXB0IFJlcXVlc3QnO1xuICAgICAgICBib2R5VGV4dHMgPSBbYFBWOiAke3Byb3Bvc2VkVmFsdWV9YF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnQWNjZXB0UmVzcG9uc2UnOiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbWVzc2FnZSBhcyBBY2NlcHRSZXNwb25zZTtcbiAgICAgICAgY29uc3QgeyBhY2NlcHRlZCwgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciB9ID0gcmVzcG9uc2UuYm9keTtcbiAgICAgICAgbmFtZSA9ICdBY2NlcHQgUmVzcG9uc2UnO1xuICAgICAgICBpZiAoYWNjZXB0ZWQpIHtcbiAgICAgICAgICBib2R5VGV4dHMgPSBbJ0FDQ0VQVEVEJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9keVRleHRzID0gW1xuICAgICAgICAgICAgJ1JFSkVDVEVEJyxcbiAgICAgICAgICAgIGBoaWdoZXN0IHNlZW4gUE46ICR7aGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcn1gLFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYm9keVRleHRzOiBib2R5VGV4dHMsXG4gICAgfTtcbiAgfVxuXG4gIGRlbGl2ZXJNZXNzYWdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubWVzc2FnZVN0YXRlO1xuICAgIHRoaXMucHJvcHMuZGVsaXZlck1lc3NhZ2UoaWQpO1xuICB9XG5cbiAgZHJvcE1lc3NhZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcy5tZXNzYWdlU3RhdGU7XG4gICAgdGhpcy5wcm9wcy5kcm9wTWVzc2FnZShpZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlU3RhdGUsIGRlbGl2ZXJNZXNzYWdlLCBkcm9wTWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlkLCBtZXNzYWdlIH0gPSBtZXNzYWdlU3RhdGU7XG5cbiAgICBjb25zdCB7IG5hbWUsIGJvZHlUZXh0cyB9ID0gdGhpcy5leHRyYWN0TmFtZUFuZEJvZHlUZXh0cyhtZXNzYWdlKTtcblxuICAgIGNvbnN0IGJvZHlUZXh0Q29tcG9uZW50cyA9IGJvZHlUZXh0cy5tYXAoKHRleHQpID0+IDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10ZXh0XCI+e3RleHR9PC9kaXY+KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGFpbmVyXCIgaWQ9e2lkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPE1lc3NhZ2VIZWFkZXJzQ29tcG9uZW50IG5hbWU9e25hbWV9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cbiAgICAgICAgICB7Ym9keVRleHRDb21wb25lbnRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1lc3NhZ2VCdXR0b25zQ29tcG9uZW50XG4gICAgICAgICAgZGVsaXZlcj17dGhpcy5kZWxpdmVyTWVzc2FnZX1cbiAgICAgICAgICBkcm9wPXt0aGlzLmRyb3BNZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9saWIvbWVzc2FnZV90eXBlcyc7XG5cblxuaW50ZXJmYWNlIENvbXBvbmVudFByb3BzIHtcbiAgbmFtZTogc3RyaW5nLFxuICBtZXNzYWdlOiBNZXNzYWdlLFxufVxuXG5jb25zdCBNZXNzYWdlSGVhZGVyc0NvbXBvbmVudCA9ICh7IG5hbWUsIG1lc3NhZ2UgfTogQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wb3NhbE51bWJlciwgZnJvbU5vZGVJZCwgdG9Ob2RlSWQgfSA9IG1lc3NhZ2UuaGVhZGVycztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyLWNvbXBvbmVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXRleHRcIj57bmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10ZXh0XCI+UE4ge3Byb3Bvc2FsTnVtYmVyfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXRleHRcIj5mcm9tIG5vZGUgI3tmcm9tTm9kZUlkfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUhlYWRlcnNDb21wb25lbnQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYXhvcyBmcm9tICcuL2xpYi9wYXhvcyc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4vQXBwU3RhdGUnO1xuaW1wb3J0IE1lc3NhZ2VDb21wb25lbnQgZnJvbSAnLi9NZXNzYWdlQ29tcG9uZW50JztcblxuaW50ZXJmYWNlIENvbXBvbmVudFByb3BzIHtcbiAgcGF4b3M6IFBheG9zO1xuICBub2RlSWQ6IG51bWJlcjtcbiAgbWVzc2FnZVN0YXRlczogQXJyYXk8TWVzc2FnZVN0YXRlPjtcbiAgZGVsaXZlck1lc3NhZ2U6IChtZXNzYWdlSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgZHJvcE1lc3NhZ2U6IChtZXNzYWdlSWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZXNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tcG9uZW50UHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5vZGVJZCwgbWVzc2FnZVN0YXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZXNzYWdlQ29tcG9uZW50cyA9IG1lc3NhZ2VTdGF0ZXMubWFwKChtZXNzYWdlU3RhdGUpID0+XG4gICAgICA8TWVzc2FnZUNvbXBvbmVudFxuICAgICAgICBtZXNzYWdlU3RhdGU9e21lc3NhZ2VTdGF0ZX1cbiAgICAgICAgZGVsaXZlck1lc3NhZ2U9e3RoaXMucHJvcHMuZGVsaXZlck1lc3NhZ2V9XG4gICAgICAgIGRyb3BNZXNzYWdlPXt0aGlzLnByb3BzLmRyb3BNZXNzYWdlfVxuICAgICAgLz5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzLWxhYmVsXCI+TWVzc2FnZXMgZm9yIE5vZGUgI3tub2RlSWR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXMtaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7bWVzc2FnZUNvbXBvbmVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9saWIvbWVzc2FnZV90eXBlcyc7XG5pbXBvcnQgUGF4b3NOb2RlIGZyb20gJy4vbGliL3BheG9zX25vZGUnO1xuaW1wb3J0IFBheG9zIGZyb20gJy4vbGliL3BheG9zJztcblxuaW1wb3J0IHsgTm9kZVN0YXRlLCBQcm9wb3NlclN0YXRlLCBSZWNlaXZlclN0YXRlLCBMZWFybmVyU3RhdGUgfSBmcm9tICcuL0FwcFN0YXRlJztcbmltcG9ydCBQcm9wb3NhbE1vZGFsQ29tcG9uZW50IGZyb20gJy4vUHJvcG9zYWxNb2RhbENvbXBvbmVudCc7XG5cblxuaW50ZXJmYWNlIENvbXBvbmVudFByb3BzIHtcbiAgbm9kZVN0YXRlOiBOb2RlU3RhdGU7XG4gIGluaXRpYXRlUGF4b3M6IChub2RlSWQ6IG51bWJlciwgcHJvcG9zZWRWYWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBiZWdpbkRyYWZ0aW5nUHJvcG9zYWw6IChub2RlSWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgZW5kRHJhZnRpbmdQcm9wb3NhbDogKCkgPT4gdm9pZDtcbiAgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbDogbnVtYmVyO1xuICBwYXhvczogUGF4b3M7XG59XG5cbmNvbnN0IFByb3Bvc2VyQ29tcG9uZW50ID0gKHsgcHJvcG9zZXJTdGF0ZSB9OiB7IHByb3Bvc2VyU3RhdGU6IFByb3Bvc2VyU3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IGlzUHJvcG9zaW5nLCBwcm9wb3NhbE51bWJlciwgcHJvcG9zZWRWYWx1ZSwgcmVzcG9uc2VzLCBwaGFzZSB9ID0gcHJvcG9zZXJTdGF0ZTtcbiAgaWYgKGlzUHJvcG9zaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcG9zZXItY29tcG9uZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgICAgUE46IHtwcm9wb3NhbE51bWJlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgICAgUFY6IHtwcm9wb3NlZFZhbHVlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLXRleHRcIj5cbiAgICAgICAgICByZXNwb25zZXM6IHtyZXNwb25zZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtdGV4dFwiPlxuICAgICAgICAgIHBoYXNlOiB7cGhhc2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wb3Nlci1jb21wb25lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLXRleHRcIj5cbiAgICAgICAgICBub3QgcHJvcG9zaW5nXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgUmVjZWl2ZXJDb21wb25lbnQgPSAoeyByZWNlaXZlclN0YXRlIH06IHsgcmVjZWl2ZXJTdGF0ZTogUmVjZWl2ZXJTdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciwgYWNjZXB0ZWRWYWx1ZSB9ID0gcmVjZWl2ZXJTdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVyLWNvbXBvbmVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLXRleHRcIj5cbiAgICAgICAgcHJvbWlzZWQgUE46IHtyZWNlaXZlclN0YXRlLmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgIGFjY2VwdGVkOiB7cmVjZWl2ZXJTdGF0ZS5hY2NlcHRlZFZhbHVlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMZWFybmVyQ29tcG9uZW50ID0gKHsgbGVhcm5lclN0YXRlIH06IHsgbGVhcm5lclN0YXRlOiBMZWFybmVyU3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IHJlc3BvbnNlcywgbGVhcm5lZFZhbHVlIH0gPSBsZWFybmVyU3RhdGU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWFybmVyLWNvbXBvbmVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLXRleHRcIj5cbiAgICAgICAgcmVzcG9uc2VzOiB7bGVhcm5lclN0YXRlLnJlc3BvbnNlc31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLXRleHRcIj5cbiAgICAgICAgTFY6IHtsZWFybmVyU3RhdGUubGVhcm5lZFZhbHVlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbXBvbmVudFByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmJlZ2luRHJhZnRpbmdQcm9wb3NhbCh0aGlzLnByb3BzLm5vZGVTdGF0ZS5pZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBub2RlU3RhdGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGlkLCBwcm9wb3NlciwgcmVjZWl2ZXIsIGxlYXJuZXIgfSA9IG5vZGVTdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtY29tcG9uZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1sYWJlbFwiPlxuICAgICAgICAgIE5vZGUgI3tpZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9sZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPFByb3Bvc2VyQ29tcG9uZW50IHByb3Bvc2VyU3RhdGU9e3Byb3Bvc2VyfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlci1sZWFybmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFJlY2VpdmVyQ29tcG9uZW50IHJlY2VpdmVyU3RhdGU9e3JlY2VpdmVyfS8+XG4gICAgICAgICAgICA8TGVhcm5lckNvbXBvbmVudCBsZWFybmVyU3RhdGU9e2xlYXJuZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJpbml0aWF0ZS1wYXhvcy1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMubm9kZUlkRHJhZnRpbmdQcm9wb3NhbCAhPT0gLTF9XG4gICAgICAgID5cbiAgICAgICAgICBJbml0aWF0ZSBQYXhvc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge3RoaXMucHJvcHMubm9kZUlkRHJhZnRpbmdQcm9wb3NhbCA9PT0gbm9kZVN0YXRlLmlkICYmXG4gICAgICAgICAgPFByb3Bvc2FsTW9kYWxDb21wb25lbnRcbiAgICAgICAgICAgIG5vZGVTdGF0ZT17dGhpcy5wcm9wcy5ub2RlU3RhdGV9XG4gICAgICAgICAgICBpbml0aWF0ZVBheG9zPXt0aGlzLnByb3BzLmluaXRpYXRlUGF4b3N9XG4gICAgICAgICAgICBlbmREcmFmdGluZ1Byb3Bvc2FsPXt0aGlzLnByb3BzLmVuZERyYWZ0aW5nUHJvcG9zYWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGF4b3MgZnJvbSAnLi9saWIvcGF4b3MnO1xuXG5pbXBvcnQgeyBOb2RlU3RhdGUgfSBmcm9tICcuL0FwcFN0YXRlJztcbmltcG9ydCBNZXNzYWdlc0NvbXBvbmVudCBmcm9tICcuL01lc3NhZ2VzQ29tcG9uZW50JztcbmltcG9ydCBOb2RlQ29tcG9uZW50IGZyb20gJy4vTm9kZUNvbXBvbmVudCc7XG5cblxuaW50ZXJmYWNlIENvbXBvbmVudFByb3BzIHtcbiAgcGF4b3M6IFBheG9zO1xuICBub2RlU3RhdGU6IE5vZGVTdGF0ZTtcbiAgaW5pdGlhdGVQYXhvczogKG5vZGVJZDogbnVtYmVyLCBwcm9wb3NlZFZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGRlbGl2ZXJNZXNzYWdlOiAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGRyb3BNZXNzYWdlOiAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGJlZ2luRHJhZnRpbmdQcm9wb3NhbDogKG5vZGVJZDogbnVtYmVyKSA9PiB2b2lkO1xuICBlbmREcmFmdGluZ1Byb3Bvc2FsOiAoKSA9PiB2b2lkO1xuICBub2RlSWREcmFmdGluZ1Byb3Bvc2FsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVNZXNzYWdlc0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb21wb25lbnRQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbm9kZVN0YXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtbWVzc2FnZXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8Tm9kZUNvbXBvbmVudFxuICAgICAgICAgICAgbm9kZVN0YXRlPXtub2RlU3RhdGV9XG4gICAgICAgICAgICBpbml0aWF0ZVBheG9zPXt0aGlzLnByb3BzLmluaXRpYXRlUGF4b3N9XG4gICAgICAgICAgICBiZWdpbkRyYWZ0aW5nUHJvcG9zYWw9e3RoaXMucHJvcHMuYmVnaW5EcmFmdGluZ1Byb3Bvc2FsfVxuICAgICAgICAgICAgZW5kRHJhZnRpbmdQcm9wb3NhbD17dGhpcy5wcm9wcy5lbmREcmFmdGluZ1Byb3Bvc2FsfVxuICAgICAgICAgICAgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbD17dGhpcy5wcm9wcy5ub2RlSWREcmFmdGluZ1Byb3Bvc2FsfVxuICAgICAgICAgICAgcGF4b3M9e3RoaXMucHJvcHMucGF4b3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZXNzYWdlc0NvbXBvbmVudFxuICAgICAgICAgIG5vZGVJZD17bm9kZVN0YXRlLmlkfVxuICAgICAgICAgIG1lc3NhZ2VTdGF0ZXM9e25vZGVTdGF0ZS5tZXNzYWdlc31cbiAgICAgICAgICBkZWxpdmVyTWVzc2FnZT17dGhpcy5wcm9wcy5kZWxpdmVyTWVzc2FnZX1cbiAgICAgICAgICBkcm9wTWVzc2FnZT17dGhpcy5wcm9wcy5kcm9wTWVzc2FnZX1cbiAgICAgICAgICBwYXhvcz17dGhpcy5wcm9wcy5wYXhvc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTm9kZVN0YXRlIH0gZnJvbSAnLi9BcHBTdGF0ZSc7XG5cblxuaW50ZXJmYWNlIENvbXBvbmVudFByb3BzIHtcbiAgbm9kZVN0YXRlOiBOb2RlU3RhdGU7XG4gIGluaXRpYXRlUGF4b3M6IChub2RlSWQ6IG51bWJlciwgcHJvcG9zZWRWYWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBlbmREcmFmdGluZ1Byb3Bvc2FsOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ29tcG9uZW50U3RhdGUge1xuICB2YWx1ZVRvUHJvcG9zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wb3NhbE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyB2YWx1ZVRvUHJvcG9zZTogJycgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlVG9Qcm9wb3NlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cbiAgaGFuZGxlQ2FuY2VsID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmVuZERyYWZ0aW5nUHJvcG9zYWwoKTtcbiAgfVxuXG4gIGhhbmRsZVByb3Bvc2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlVG9Qcm9wb3NlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMuaW5pdGlhdGVQYXhvcyh0aGlzLnByb3BzLm5vZGVTdGF0ZS5pZCwgdGhpcy5zdGF0ZS52YWx1ZVRvUHJvcG9zZSk7XG4gICAgICB0aGlzLnByb3BzLmVuZERyYWZ0aW5nUHJvcG9zYWwoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInByb3Bvc2FsLW1vZGFsXCI+XG4gICAgICAgIDxkaXY+RW50ZXIgYSB2YWx1ZSB0byBwcm9wb3NlPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3Bvc2FsLWlucHV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVUb1Byb3Bvc2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcm9wb3NlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJvcG9zZX0+UHJvcG9zZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FuY2VsLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iLCJpbXBvcnQge1xuICBQcmVwYXJlUmVxdWVzdCxcbiAgUHJlcGFyZVJlc3BvbnNlLFxuICBBY2NlcHRSZXF1ZXN0LFxuICBBY2NlcHRSZXNwb25zZSxcbiAgTWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlX3R5cGVzJztcblxuaW1wb3J0IFBheG9zUm9sZSBmcm9tICcuL3BheG9zX3JvbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFybmVyIGV4dGVuZHMgUGF4b3NSb2xlIHtcbiAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuICBwcml2YXRlIHJlY2VpdmVyTm9kZUlkczogQXJyYXk8bnVtYmVyPjtcblxuICBwcml2YXRlIHByb3Bvc2FsTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgcmVzcG9uc2VzOiBBcnJheTxBY2NlcHRSZXNwb25zZT47XG4gIHByaXZhdGUgbGVhcm5lZFZhbHVlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnByb3Bvc2FsTnVtYmVyID0gLTE7XG4gICAgdGhpcy5yZXNwb25zZXMgPSBbXTtcbiAgfVxuXG4gIGluaXRpYWxpemVSZWNlaXZlck5vZGVJZHMocmVjZWl2ZXJOb2RlSWRzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgdGhpcy5yZWNlaXZlck5vZGVJZHMgPSByZWNlaXZlck5vZGVJZHM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZVByZXBhcmVSZXF1ZXN0KG1lc3NhZ2U6IFByZXBhcmVSZXF1ZXN0KTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNlaXZlUHJlcGFyZVJlc3BvbnNlKG1lc3NhZ2U6IFByZXBhcmVSZXNwb25zZSk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZUFjY2VwdFJlcXVlc3QobWVzc2FnZTogQWNjZXB0UmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBUT0RPOiByZXRoaW5rIGhvdyB0byBpbXBsZW1lbnQgdGhpcyBtZXRob2RcbiAgcHJvdGVjdGVkIHJlY2VpdmVBY2NlcHRSZXNwb25zZShtZXNzYWdlOiBBY2NlcHRSZXNwb25zZSk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIGJvZHkgfSA9IG1lc3NhZ2U7XG5cbiAgICBpZiAoaGVhZGVycy5wcm9wb3NhbE51bWJlciA8IHRoaXMucHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoaGVhZGVycy5wcm9wb3NhbE51bWJlciA+IHRoaXMucHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHRoaXMucHJvcG9zYWxOdW1iZXIgPSBoZWFkZXJzLnByb3Bvc2FsTnVtYmVyO1xuICAgICAgdGhpcy5yZXNwb25zZXMgPSBbXTtcbiAgICAgIHRoaXMubGVhcm5lZFZhbHVlID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChib2R5LmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIgPiB0aGlzLnByb3Bvc2FsTnVtYmVyKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdGhpcy5yZXNwb25zZXMucHVzaChtZXNzYWdlKTtcbiAgICBpZiAodGhpcy5yZXNwb25zZXMubGVuZ3RoID4gdGhpcy5yZWNlaXZlck5vZGVJZHMubGVuZ3RoIC8gMikge1xuICAgICAgdGhpcy5sZWFybmVkVmFsdWUgPSB0aGlzLnJlc3BvbnNlc1swXS5ib2R5LmFjY2VwdGVkVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xuICBnZXROdW1SZXNwb25zZXMgPSAoKSA9PiB0aGlzLnJlc3BvbnNlcy5sZW5ndGg7XG4gIGdldExlYXJuZWRWYWx1ZSA9ICgpID0+IHRoaXMubGVhcm5lZFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZV90eXBlcyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJZE1lc3NhZ2VQYWlyIHtcbiAgaWQ6IHN0cmluZyxcbiAgbWVzc2FnZTogTWVzc2FnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVBvb2wge1xuICBwdWJsaWMgaWRNZXNzYWdlUGFpcnM6IEFycmF5PElkTWVzc2FnZVBhaXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWRNZXNzYWdlUGFpcnMgPSBbXTtcbiAgfVxuXG4gIF91bmlxdWVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnaWRfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgfVxuXG4gIGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl91bmlxdWVJZCgpO1xuICAgIHRoaXMuaWRNZXNzYWdlUGFpcnMucHVzaCh7XG4gICAgICBpZDogaWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIH0pO1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBtb3JlIGVmZmljaWVudFxuICBwZWVrTWVzc2FnZShpZDogc3RyaW5nKTogTWVzc2FnZSB8IG51bGwge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5pZE1lc3NhZ2VQYWlyc1xuICAgICAgLmZpbHRlcigocGFpcikgPT4gcGFpci5pZCA9PT0gaWQpXG4gICAgICAubWFwKChwYWlyKSA9PiBwYWlyLm1lc3NhZ2UpO1xuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHJpZXZlTWVzc2FnZShpZDogc3RyaW5nKTogTWVzc2FnZSB8IG51bGwge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5pZE1lc3NhZ2VQYWlyc1xuICAgICAgLmZpbHRlcigocGFpcikgPT4gcGFpci5pZCA9PT0gaWQpXG4gICAgICAubWFwKChwYWlyKSA9PiBwYWlyLm1lc3NhZ2UpO1xuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlkTWVzc2FnZVBhaXJzID0gdGhpcy5pZE1lc3NhZ2VQYWlycy5maWx0ZXIoKHBhaXIpID0+IHBhaXIuaWQgIT09IGlkKTtcbiAgICAgIHJldHVybiBtZXNzYWdlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIHJldHVybiB0aGlzLmlkTWVzc2FnZVBhaXJzLm1hcCgocGFpcikgPT4gcGFpci5tZXNzYWdlKTtcbiAgfVxuXG4gIGRyb3BNZXNzYWdlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlkTWVzc2FnZVBhaXJzID0gdGhpcy5pZE1lc3NhZ2VQYWlycy5maWx0ZXIoKHBhaXIpID0+IHBhaXIuaWQgIT09IGlkKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuaWRNZXNzYWdlUGFpcnMgPSBbXTtcbiAgfVxuXG4gIGdldElkTWVzc2FnZVBhaXJzVG9Ob2RlSWQobm9kZUlkOiBudW1iZXIpOiBBcnJheTxJZE1lc3NhZ2VQYWlyPiB7XG4gICAgcmV0dXJuIHRoaXMuaWRNZXNzYWdlUGFpcnMuZmlsdGVyKChwYWlyKSA9PiBwYWlyLm1lc3NhZ2UuaGVhZGVycy50b05vZGVJZCA9PT0gbm9kZUlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1lc3NhZ2VQb29sIGZyb20gJy4vbWVzc2FnZV9wb29sJztcbmltcG9ydCBQYXhvc05vZGUgZnJvbSAnLi9wYXhvc19ub2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF4b3Mge1xuICBwdWJsaWMgbWVzc2FnZVBvb2w6IE1lc3NhZ2VQb29sO1xuICBwdWJsaWMgbm9kZXM6IEFycmF5PFBheG9zTm9kZT47XG5cbiAgZ2V0Tm9kZUJ5SWQoaWQ6IG51bWJlcik6IFBheG9zTm9kZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMuZmluZCgobm9kZSkgPT4gbm9kZS5nZXRJZCgpID09PSBpZCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLm1lc3NhZ2VQb29sID0gbmV3IE1lc3NhZ2VQb29sKCk7XG4gICAgdGhpcy5ub2RlcyA9IG5ldyBBcnJheShzaXplKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IG5ldyBQYXhvc05vZGUoaW5kZXgsIHNpemUpKTtcbiAgICB0aGlzLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUuaW5pdGlhbGl6ZU5vZGVJZHModGhpcy5ub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUuZ2V0SWQoKSkpXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFByZXBhcmVSZXF1ZXN0LFxuICBQcmVwYXJlUmVzcG9uc2UsXG4gIEFjY2VwdFJlcXVlc3QsXG4gIEFjY2VwdFJlc3BvbnNlLFxuICBNZXNzYWdlLFxufSBmcm9tICcuL21lc3NhZ2VfdHlwZXMnO1xuXG5pbXBvcnQgUHJvcG9zZXIgZnJvbSAnLi9wcm9wb3Nlcic7XG5pbXBvcnQgUmVjZWl2ZXIgZnJvbSAnLi9yZWNlaXZlcic7XG5pbXBvcnQgTGVhcm5lciBmcm9tICcuL2xlYXJuZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXhvc05vZGUge1xuICBwcml2YXRlIGlkOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBwcm9wb3NlcjogUHJvcG9zZXI7XG4gIHByaXZhdGUgcmVjZWl2ZXI6IFJlY2VpdmVyO1xuICBwcml2YXRlIGxlYXJuZXI6IExlYXJuZXI7XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbnVtTm9kZXM6IG51bWJlcikge1xuICAgIHRoaXMuaWQgPSBpZDtcblxuICAgIHRoaXMucHJvcG9zZXIgPSBuZXcgUHJvcG9zZXIoaWQpO1xuICAgIHRoaXMucmVjZWl2ZXIgPSBuZXcgUmVjZWl2ZXIoaWQpO1xuICAgIHRoaXMubGVhcm5lciA9IG5ldyBMZWFybmVyKGlkKTtcbiAgfVxuXG4gIGluaXRpYWxpemVOb2RlSWRzKG5vZGVJZHM6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICB0aGlzLnByb3Bvc2VyLmluaXRpYWxpemVSZWNlaXZlck5vZGVJZHMobm9kZUlkcyk7XG4gICAgdGhpcy5sZWFybmVyLmluaXRpYWxpemVSZWNlaXZlck5vZGVJZHMobm9kZUlkcyk7XG4gIH1cblxuICByZWNlaXZlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIGNvbnN0IHByb3Bvc2VyTWVzc2FnZXMgPSB0aGlzLnByb3Bvc2VyLnJlY2VpdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIGNvbnN0IHJlY2VpdmVyTWVzc2FnZXMgPSB0aGlzLnJlY2VpdmVyLnJlY2VpdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIGNvbnN0IGxlYXJuZXJNZXNzYWdlcyA9IHRoaXMubGVhcm5lci5yZWNlaXZlTWVzc2FnZShtZXNzYWdlKTtcblxuICAgIGlmIChwcm9wb3Nlck1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFRoZSBwcm9wb3NlciBpcyBpbml0aWF0aW5nIHRoZSBhY2NlcHQgc3RhZ2UuXG4gICAgICBjb25zdCBhY2NlcHRSZXF1ZXN0VG9TZWxmID0gcHJvcG9zZXJNZXNzYWdlcy5maW5kKChyZXF1ZXN0KSA9PiByZXF1ZXN0LmhlYWRlcnMudG9Ob2RlSWQgPT09IHRoaXMuaWQpO1xuICAgICAgY29uc3QgYWNjZXB0UmVzcG9uc2VUb1NlbGYgPSB0aGlzLnJlY2VpdmVyLnJlY2VpdmVNZXNzYWdlKGFjY2VwdFJlcXVlc3RUb1NlbGYhKVswXTtcbiAgICAgIHRoaXMubGVhcm5lci5yZWNlaXZlTWVzc2FnZShhY2NlcHRSZXNwb25zZVRvU2VsZik7XG5cbiAgICAgIHJldHVybiBwcm9wb3Nlck1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5oZWFkZXJzLnRvTm9kZUlkICE9PSB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBpZiAocmVjZWl2ZXJNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcmVjZWl2ZXJNZXNzYWdlcztcbiAgICB9XG5cbiAgICBpZiAobGVhcm5lck1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBsZWFybmVyTWVzc2FnZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2VuZXJhdGVQcmVwYXJlUmVxdWVzdHModmFsdWVUb1Byb3Bvc2U6IHN0cmluZyk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBjb25zdCBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID0gdGhpcy5yZWNlaXZlci5nZXRIaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyKCk7XG4gICAgY29uc3QgcHJlcGFyZVJlcXVlc3RzID0gdGhpcy5wcm9wb3Nlci5nZW5lcmF0ZVByZXBhcmVSZXF1ZXN0cyh2YWx1ZVRvUHJvcG9zZSwgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcik7XG5cbiAgICBjb25zdCBwcmVwYXJlUmVxdWVzdFRvU2VsZiA9IHByZXBhcmVSZXF1ZXN0cy5maW5kKChyZXF1ZXN0KSA9PiByZXF1ZXN0LmhlYWRlcnMudG9Ob2RlSWQgPT09IHRoaXMuaWQpO1xuICAgIGNvbnN0IHByZXBhcmVSZXNwb25zZVRvU2VsZiA9IHRoaXMucmVjZWl2ZXIucmVjZWl2ZU1lc3NhZ2UocHJlcGFyZVJlcXVlc3RUb1NlbGYhKVswXTtcbiAgICB0aGlzLnByb3Bvc2VyLnJlY2VpdmVNZXNzYWdlKHByZXBhcmVSZXNwb25zZVRvU2VsZik7XG5cbiAgICByZXR1cm4gcHJlcGFyZVJlcXVlc3RzLmZpbHRlcigocmVxdWVzdDogUHJlcGFyZVJlcXVlc3QpID0+IHJlcXVlc3QuaGVhZGVycy50b05vZGVJZCAhPT0gdGhpcy5pZClcbiAgfVxuXG4gIC8vIGdldHRlciBtZXRob2RzXG4gIGdldElkID0gKCkgPT4gdGhpcy5pZDtcblxuICAvLyBwcm9wb3NlclxuICBpc1Byb3Bvc2luZyA9ICgpID0+IHRoaXMucHJvcG9zZXIuZ2V0SXNQcm9wb3NpbmcoKTtcbiAgZ2V0UHJvcG9zYWxOdW1iZXIgPSAoKSA9PiB0aGlzLnByb3Bvc2VyLmdldFByb3Bvc2FsTnVtYmVyKCk7XG4gIGdldFByb3Bvc2VkVmFsdWUgPSAoKSA9PiB0aGlzLnByb3Bvc2VyLmdldFByb3Bvc2VkVmFsdWUoKTtcbiAgZ2V0TnVtUHJvcG9zZXJSZXNwb25zZXMgPSAoKSA9PiB0aGlzLnByb3Bvc2VyLmdldE51bVJlc3BvbnNlcygpO1xuICBnZXRQcm9wb3NlclBoYXNlID0gKCkgPT4gdGhpcy5wcm9wb3Nlci5nZXRQaGFzZSgpO1xuXG4gIC8vIHJlY2VpdmVyXG4gIGdldEhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIgPSAoKSA9PiB0aGlzLnJlY2VpdmVyLmdldEhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIoKTtcbiAgZ2V0QWNjZXB0ZWRWYWx1ZSA9ICgpID0+IHRoaXMucmVjZWl2ZXIuZ2V0QWNjZXB0ZWRWYWx1ZSgpO1xuXG4gIC8vIGxlYXJuZXJcbiAgZ2V0TnVtTGVhcm5lclJlc3BvbnNlcyA9ICgpID0+IHRoaXMubGVhcm5lci5nZXROdW1SZXNwb25zZXMoKTtcbiAgZ2V0TGVhcm5lZFZhbHVlID0gKCkgPT4gdGhpcy5sZWFybmVyLmdldExlYXJuZWRWYWx1ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgUHJlcGFyZVJlcXVlc3QsXG4gIFByZXBhcmVSZXNwb25zZSxcbiAgQWNjZXB0UmVxdWVzdCxcbiAgQWNjZXB0UmVzcG9uc2UsXG4gIE1lc3NhZ2UsXG59IGZyb20gJy4vbWVzc2FnZV90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBheG9zUm9sZSB7XG4gIHJlY2VpdmVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgc3dpdGNoKG1lc3NhZ2Uua2luZCkge1xuICAgICAgY2FzZSAnUHJlcGFyZVJlcXVlc3QnOiByZXR1cm4gdGhpcy5yZWNlaXZlUHJlcGFyZVJlcXVlc3QobWVzc2FnZSk7XG4gICAgICBjYXNlICdQcmVwYXJlUmVzcG9uc2UnOiByZXR1cm4gdGhpcy5yZWNlaXZlUHJlcGFyZVJlc3BvbnNlKG1lc3NhZ2UpO1xuICAgICAgY2FzZSAnQWNjZXB0UmVxdWVzdCc6IHJldHVybiB0aGlzLnJlY2VpdmVBY2NlcHRSZXF1ZXN0KG1lc3NhZ2UpO1xuICAgICAgY2FzZSAnQWNjZXB0UmVzcG9uc2UnOiByZXR1cm4gdGhpcy5yZWNlaXZlQWNjZXB0UmVzcG9uc2UobWVzc2FnZSk7XG4gICAgICBkZWZhdWx0OiByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY2VpdmVQcmVwYXJlUmVxdWVzdChtZXNzYWdlOiBQcmVwYXJlUmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+O1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVjZWl2ZVByZXBhcmVSZXNwb25zZShtZXNzYWdlOiBQcmVwYXJlUmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY2VpdmVBY2NlcHRSZXF1ZXN0KG1lc3NhZ2U6IEFjY2VwdFJlcXVlc3QpOiBBcnJheTxNZXNzYWdlPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY2VpdmVBY2NlcHRSZXNwb25zZShtZXNzYWdlOiBBY2NlcHRSZXNwb25zZSk6IEFycmF5PE1lc3NhZ2U+O1xufVxuIiwiaW1wb3J0IHtcbiAgUHJlcGFyZVJlcXVlc3QsXG4gIFByZXBhcmVSZXNwb25zZSxcbiAgQWNjZXB0UmVxdWVzdCxcbiAgQWNjZXB0UmVzcG9uc2UsXG4gIE1lc3NhZ2UsXG59IGZyb20gJy4vbWVzc2FnZV90eXBlcyc7XG5cbmltcG9ydCBQYXhvc1JvbGUgZnJvbSAnLi9wYXhvc19yb2xlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcG9zZXIgZXh0ZW5kcyBQYXhvc1JvbGUge1xuICBwcml2YXRlIGlkOiBudW1iZXI7XG4gIHByaXZhdGUgcmVjZWl2ZXJOb2RlSWRzOiBBcnJheTxudW1iZXI+O1xuXG4gIHByaXZhdGUgcHJvcG9zYWxOdW1iZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBwcm9wb3NlZFZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVzcG9uc2VzOiBBcnJheTxQcmVwYXJlUmVzcG9uc2U+O1xuICBwcml2YXRlIGlzUHJvcG9zaW5nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgaW5pdGlhdGVkQWNjZXB0UGhhc2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVSZWNlaXZlck5vZGVJZHMocmVjZWl2ZXJOb2RlSWRzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgdGhpcy5yZWNlaXZlck5vZGVJZHMgPSByZWNlaXZlck5vZGVJZHM7XG4gIH1cblxuICBnZW5lcmF0ZVByZXBhcmVSZXF1ZXN0cyh2YWx1ZTogc3RyaW5nLCBwcm9wb3NhbE51bWJlclRvQmVhdDogbnVtYmVyKTogQXJyYXk8UHJlcGFyZVJlcXVlc3Q+IHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5wcm9wb3NhbE51bWJlciA9IHRoaXMuZ2V0TmV3UHJvcG9zYWxOdW1iZXIocHJvcG9zYWxOdW1iZXJUb0JlYXQpO1xuICAgIHRoaXMucHJvcG9zZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNQcm9wb3NpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMucmVjZWl2ZXJOb2RlSWRzXG4gICAgICAubWFwKChub2RlSWQ6IG51bWJlcik6IFByZXBhcmVSZXF1ZXN0ID0+XG4gICAgICAgIDxQcmVwYXJlUmVxdWVzdD57XG4gICAgICAgICAga2luZDogJ1ByZXBhcmVSZXF1ZXN0JyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICB0b05vZGVJZDogbm9kZUlkLFxuICAgICAgICAgICAgZnJvbU5vZGVJZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHByb3Bvc2FsTnVtYmVyOiB0aGlzLnByb3Bvc2FsTnVtYmVyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keToge30sXG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvcG9zYWxOdW1iZXIgPSAtMTtcbiAgICB0aGlzLnByb3Bvc2VkVmFsdWUgPSAnJztcbiAgICB0aGlzLnJlc3BvbnNlcyA9IFtdO1xuICAgIHRoaXMuaXNQcm9wb3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRpYXRlZEFjY2VwdFBoYXNlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld1Byb3Bvc2FsTnVtYmVyKHByb3Bvc2FsTnVtYmVyVG9CZWF0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghcHJvcG9zYWxOdW1iZXJUb0JlYXQpIHtcbiAgICAgIHByb3Bvc2FsTnVtYmVyVG9CZWF0ID0gMDtcbiAgICB9XG4gICAgY29uc3QgbnVtTm9kZXMgPSB0aGlzLnJlY2VpdmVyTm9kZUlkcy5sZW5ndGg7XG4gICAgcmV0dXJuIChNYXRoLmZsb29yKHByb3Bvc2FsTnVtYmVyVG9CZWF0IC8gbnVtTm9kZXMpICsgMSkgKiBudW1Ob2RlcyArIHRoaXMuaWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZVByZXBhcmVSZXF1ZXN0KG1lc3NhZ2U6IFByZXBhcmVSZXF1ZXN0KTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIGlmIChtZXNzYWdlLmhlYWRlcnMucHJvcG9zYWxOdW1iZXIgPiB0aGlzLnByb3Bvc2FsTnVtYmVyKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICBwcm90ZWN0ZWQgcmVjZWl2ZVByZXBhcmVSZXNwb25zZShtZXNzYWdlOiBQcmVwYXJlUmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBib2R5IH0gPSBtZXNzYWdlO1xuXG4gICAgaWYgKCF0aGlzLmlzUHJvcG9zaW5nIHx8XG4gICAgICAgIHRoaXMuaW5pdGlhdGVkQWNjZXB0UGhhc2UgfHxcbiAgICAgICAgaGVhZGVycy5wcm9wb3NhbE51bWJlciAhPT0gdGhpcy5wcm9wb3NhbE51bWJlcikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoYm9keS5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID4gdGhpcy5wcm9wb3NhbE51bWJlcikge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHRoaXMucmVzcG9uc2VzLnB1c2gobWVzc2FnZSk7XG5cbiAgICAvLyBJZiB0aGUgbWFqb3JpdHkgb2YgcmVjZWl2ZXIgbm9kZXMgaGF2ZW4ndCBhY2tub3dsZWRnZWQgdGhlIHByZXBhcmUgcmVxdWVzdCB5ZXQsIHRoZW4gZG8gbm90aGluZy5cbiAgICBpZiAodGhpcy5yZXNwb25zZXMubGVuZ3RoIDw9IHRoaXMucmVjZWl2ZXJOb2RlSWRzLmxlbmd0aCAvIDIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyBNYWpvcml0eSBvZiByZWNlaXZlciBub2RlcyBoYXZlIGFja25vd2xlZGdlZCB0aGUgcHJlcGFyZSByZXF1ZXN0IVxuICAgIHRoaXMuaW5pdGlhdGVkQWNjZXB0UGhhc2UgPSB0cnVlO1xuXG4gICAgY29uc3QgbWVzc2FnZVdpdGhIaWdoZXN0UHJvcG9zYWxOdW1iZXIgPSB0aGlzLnJlc3BvbnNlc1xuICAgICAgLnJlZHVjZSgocHJldk1lc3NhZ2UsIG5leHRNZXNzYWdlKSA9PlxuICAgICAgICBwcmV2TWVzc2FnZS5ib2R5LmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIgPiBuZXh0TWVzc2FnZS5ib2R5LmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXJcbiAgICAgICAgPyBwcmV2TWVzc2FnZSA6IG5leHRNZXNzYWdlXG4gICAgICApO1xuICAgIGNvbnN0IHsgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciwgYWNjZXB0ZWRWYWx1ZSB9ID0gbWVzc2FnZVdpdGhIaWdoZXN0UHJvcG9zYWxOdW1iZXIuYm9keTtcbiAgICBpZiAoYWNjZXB0ZWRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnByb3Bvc2VkVmFsdWUgPSBhY2NlcHRlZFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUFjY2VwdFJlcXVlc3RzKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQWNjZXB0UmVxdWVzdHMoKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIHJldHVybiB0aGlzLnJlY2VpdmVyTm9kZUlkcy5tYXAoKG5vZGVJZDogbnVtYmVyKTogQWNjZXB0UmVxdWVzdCA9PlxuICAgICAgPEFjY2VwdFJlcXVlc3Q+e1xuICAgICAgICBraW5kOiAnQWNjZXB0UmVxdWVzdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICB0b05vZGVJZDogbm9kZUlkLFxuICAgICAgICAgIGZyb21Ob2RlSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgcHJvcG9zYWxOdW1iZXI6IHRoaXMucHJvcG9zYWxOdW1iZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBwcm9wb3NlZFZhbHVlOiB0aGlzLnByb3Bvc2VkVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNlaXZlQWNjZXB0UmVxdWVzdChtZXNzYWdlOiBBY2NlcHRSZXF1ZXN0KTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIGlmIChtZXNzYWdlLmhlYWRlcnMucHJvcG9zYWxOdW1iZXIgPiB0aGlzLnByb3Bvc2FsTnVtYmVyKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNlaXZlQWNjZXB0UmVzcG9uc2UobWVzc2FnZTogQWNjZXB0UmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgaWYgKG1lc3NhZ2UuYm9keS5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID4gdGhpcy5wcm9wb3NhbE51bWJlcikge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG4gIGdldElzUHJvcG9zaW5nID0gKCkgPT4gdGhpcy5pc1Byb3Bvc2luZztcbiAgZ2V0UHJvcG9zYWxOdW1iZXIgPSAoKSA9PiB0aGlzLnByb3Bvc2FsTnVtYmVyO1xuICBnZXRQcm9wb3NlZFZhbHVlID0gKCkgPT4gdGhpcy5wcm9wb3NlZFZhbHVlO1xuICBnZXROdW1SZXNwb25zZXMgPSAoKSA9PiB0aGlzLnJlc3BvbnNlcy5sZW5ndGg7XG4gIGdldFBoYXNlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5pc1Byb3Bvc2luZykge1xuICAgICAgcmV0dXJuICdOL0EnO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaW5pdGlhdGVkQWNjZXB0UGhhc2UpIHtcbiAgICAgIHJldHVybiAnUHJlcGFyZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnQWNjZXB0JztcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBQcmVwYXJlUmVxdWVzdCxcbiAgUHJlcGFyZVJlc3BvbnNlLFxuICBBY2NlcHRSZXF1ZXN0LFxuICBBY2NlcHRSZXNwb25zZSxcbiAgTWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlX3R5cGVzJztcblxuaW1wb3J0IFBheG9zUm9sZSBmcm9tICcuL3BheG9zX3JvbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNlaXZlciBleHRlbmRzIFBheG9zUm9sZSB7XG4gIHByaXZhdGUgaWQ6IG51bWJlcjtcblxuICBwcml2YXRlIGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBhY2NlcHRlZFZhbHVlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIgPSAtMTtcbiAgICB0aGlzLmFjY2VwdGVkVmFsdWUgPSBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlY2VpdmVQcmVwYXJlUmVxdWVzdChtZXNzYWdlOiBQcmVwYXJlUmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMgfSA9IG1lc3NhZ2U7XG5cbiAgICBjb25zdCBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID0gdGhpcy5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyO1xuICAgIGNvbnN0IGFjY2VwdGVkVmFsdWUgPSB0aGlzLmFjY2VwdGVkVmFsdWU7XG5cbiAgICBpZiAoaGVhZGVycy5wcm9wb3NhbE51bWJlciA+IHRoaXMuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcikge1xuICAgICAgdGhpcy5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID0gaGVhZGVycy5wcm9wb3NhbE51bWJlcjtcbiAgICAgIHRoaXMuYWNjZXB0ZWRWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIDxQcmVwYXJlUmVzcG9uc2U+e1xuICAgICAgICBraW5kOiAnUHJlcGFyZVJlc3BvbnNlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIHRvTm9kZUlkOiBoZWFkZXJzLmZyb21Ob2RlSWQsXG4gICAgICAgICAgZnJvbU5vZGVJZDogdGhpcy5pZCxcbiAgICAgICAgICBwcm9wb3NhbE51bWJlcjogaGVhZGVycy5wcm9wb3NhbE51bWJlcixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXI6IGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIsXG4gICAgICAgICAgYWNjZXB0ZWRWYWx1ZTogYWNjZXB0ZWRWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBdO1xuICB9O1xuXG4gIHByb3RlY3RlZCByZWNlaXZlUHJlcGFyZVJlc3BvbnNlKG1lc3NhZ2U6IFByZXBhcmVSZXNwb25zZSk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZUFjY2VwdFJlcXVlc3QobWVzc2FnZTogQWNjZXB0UmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIGJvZHkgfSA9IG1lc3NhZ2U7XG5cbiAgICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICBpZiAoaGVhZGVycy5wcm9wb3NhbE51bWJlciA+PSB0aGlzLmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHRoaXMuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA9IGhlYWRlcnMucHJvcG9zYWxOdW1iZXI7XG4gICAgICB0aGlzLmFjY2VwdGVkVmFsdWUgPSBib2R5LnByb3Bvc2VkVmFsdWU7XG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICA8QWNjZXB0UmVzcG9uc2U+e1xuICAgICAgICBraW5kOiAnQWNjZXB0UmVzcG9uc2UnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgdG9Ob2RlSWQ6IGhlYWRlcnMuZnJvbU5vZGVJZCxcbiAgICAgICAgICBmcm9tTm9kZUlkOiB0aGlzLmlkLFxuICAgICAgICAgIHByb3Bvc2FsTnVtYmVyOiBoZWFkZXJzLnByb3Bvc2FsTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgYWNjZXB0ZWQ6IGFjY2VwdGVkLFxuICAgICAgICAgIGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXI6IHRoaXMuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcixcbiAgICAgICAgICBhY2NlcHRlZFZhbHVlOiBhY2NlcHRlZCA/IHRoaXMuYWNjZXB0ZWRWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNlaXZlQWNjZXB0UmVzcG9uc2UobWVzc2FnZTogQWNjZXB0UmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xuICBnZXRBY2NlcHRlZFZhbHVlID0gKCkgPT4gdGhpcy5hY2NlcHRlZFZhbHVlO1xuICBnZXRIaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID0gKCkgPT4gdGhpcy5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYXBwU3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYXBwU3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FwcFN0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=