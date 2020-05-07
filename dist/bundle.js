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
exports.push([module.i, ".app-container .node-messages-container .node-container .initiate-paxos-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button {\n  border: none;\n  color: white;\n  text-align: center; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:focus {\n    outline: 0; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:disabled {\n    color: #141414;\n    background-color: #646464; }\n\n.app-container .node-messages-container .node-container .proposal-modal {\n  -webkit-animation: fade-in 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n/* ----------------------------------------------\n * Generated by Animista on 2018-7-2 0:40:5\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.app-container .node-messages-container .node-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  background-color: lightblue; }\n  .app-container .node-messages-container .node-container .node-component {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 4px;\n    height: 150px;\n    width: 400px;\n    border-radius: 50% / 50%;\n    -moz-border-radius: 50% / 50%;\n    -webkit-border-radius: 50% / 50%;\n    background-color: lightgrey;\n    border: 4px solid lightgrey; }\n    .app-container .node-messages-container .node-container .node-component .node-label {\n      margin-bottom: 4px; }\n    .app-container .node-messages-container .node-container .node-component .roles-container {\n      display: flex;\n      flex-direction: row;\n      background-color: white;\n      height: 96px;\n      width: 280px;\n      margin-bottom: 4px; }\n      .app-container .node-messages-container .node-container .node-component .roles-container .proposer-component, .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .receiver-component, .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .learner-component {\n        white-space: nowrap;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        text-overflow: ellipsis; }\n      .app-container .node-messages-container .node-container .node-component .roles-container .proposer-component {\n        flex: 1;\n        padding: 4px;\n        background-color: pink;\n        margin: 1px; }\n      .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        min-width: 0; }\n        .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .receiver-component {\n          flex: 1;\n          padding: 4px;\n          background-color: lightgreen;\n          margin: 1px; }\n        .app-container .node-messages-container .node-container .node-component .roles-container .receiver-learner-container .learner-component {\n          flex: 1;\n          padding: 4px;\n          background-color: yellow;\n          margin: 1px; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button {\n    background-color: #00aa00;\n    font-size: 14px; }\n    .app-container .node-messages-container .node-container .initiate-paxos-button:hover {\n      background-color: #008200; }\n    .app-container .node-messages-container .node-container .initiate-paxos-button:active {\n      background-color: #005000; }\n  .app-container .node-messages-container .node-container .proposal-modal {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    position: absolute;\n    left: 25%;\n    top: 25%;\n    width: 50%;\n    height: 50%;\n    box-shadow: 4px 4px 10px;\n    background-color: #b4b4fa; }\n    .app-container .node-messages-container .node-container .proposal-modal .proposal-input {\n      padding: 4px;\n      border: 1px solid white;\n      border-radius: 2px; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-input:focus {\n        outline: 0; }\n    .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button {\n      background-color: #00aa00;\n      margin: 2px;\n      font-size: 12px;\n      width: 80px; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:hover {\n        background-color: #008200; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:active {\n        background-color: #005000; }\n    .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button {\n      background-color: #969696;\n      margin: 2px;\n      font-size: 12px;\n      width: 80px; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:hover {\n        background-color: #828282; }\n      .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:active {\n        background-color: #505050; }\n\n.app-container .node-messages-container .node-container .initiate-paxos-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button {\n  border: none;\n  color: white;\n  text-align: center; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:focus, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:focus, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:focus {\n    outline: 0; }\n  .app-container .node-messages-container .node-container .initiate-paxos-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .propose-button:disabled, .app-container .node-messages-container .node-container .proposal-modal .proposal-buttons-container .cancel-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:disabled, .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:disabled {\n    color: #141414;\n    background-color: #646464; }\n\n.app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container {\n  -webkit-animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n/* ----------------------------------------------\n * Generated by Animista on 2018-7-2 0:56:17\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-in-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-in-top {\n  0% {\n    -webkit-transform: translateY(-110px);\n    transform: translateY(-110px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes slide-in-top {\n  0% {\n    -webkit-transform: translateY(-110px);\n    transform: translateY(-110px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n\n.app-container .node-messages-container .messages-outer-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: lightgreen;\n  border: 1px solid black;\n  overflow: hidden; }\n  .app-container .node-messages-container .messages-outer-container .messages-label {\n    margin-left: 10px; }\n  .app-container .node-messages-container .messages-outer-container .messages-middle-container {\n    flex: 1;\n    display: flex;\n    width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden; }\n    .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container {\n      display: flex;\n      flex-direction: row; }\n      .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container {\n        display: flex;\n        flex-direction: column;\n        margin: 10px;\n        padding: 4px;\n        height: 110px;\n        width: 140px;\n        border-radius: 2px;\n        background-color: #f0be00; }\n        .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-text-container {\n          flex: 1; }\n        .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container {\n          display: flex;\n          flex-direction: row; }\n          .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button {\n            flex: 1;\n            background-color: #0000e6;\n            font-size: 12px; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:hover {\n              background-color: #0000aa; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-deliver-button:active {\n              background-color: #000078; }\n          .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button {\n            flex: 1;\n            background-color: #dc0000;\n            font-size: 12px; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:hover {\n              background-color: #aa0000; }\n            .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-buttons-container .message-drop-button:active {\n              background-color: #780000; }\n        .app-container .node-messages-container .messages-outer-container .messages-middle-container .messages-inner-container .message-container .message-text {\n          font-size: 14px; }\n\n* {\n  font-family: Arial; }\n\n* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n* ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 8px;\n  height: 6px; }\n\n* ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.app-container {\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n  border: 2px solid black; }\n  .app-container .node-messages-container {\n    display: flex;\n    flex-direction: row;\n    height: 160px; }\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hcHBTdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9NZXNzYWdlQnV0dG9uc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01lc3NhZ2VDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9NZXNzYWdlSGVhZGVyc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01lc3NhZ2VzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTm9kZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGVNZXNzYWdlc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb3Bvc2FsTW9kYWxDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9sZWFybmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWVzc2FnZV9wb29sLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcGF4b3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9wYXhvc19ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcGF4b3Nfcm9sZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Byb3Bvc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVjZWl2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hcHBTdHlsZXMuc2Nzcz81MDA3Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxxckJBQXFyQixpQkFBaUIsaUJBQWlCLHVCQUF1QixFQUFFLG90QkFBb3RCLGlCQUFpQixFQUFFLG11QkFBbXVCLHFCQUFxQixnQ0FBZ0MsRUFBRSw2RUFBNkUsOEVBQThFLHNFQUFzRSxFQUFFLDRWQUE0VixRQUFRLGlCQUFpQixFQUFFLFVBQVUsaUJBQWlCLEVBQUUsRUFBRSx3QkFBd0IsUUFBUSxpQkFBaUIsRUFBRSxVQUFVLGlCQUFpQixFQUFFLEVBQUUsNkRBQTZELGtCQUFrQiwyQkFBMkIsd0JBQXdCLHVCQUF1Qixn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LENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNwRDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFUyx3Q0FBcUIsR0FBL0IsVUFBZ0MsT0FBdUI7UUFDckQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBS0gsZUFBQztBQUFELENBQUMsQ0E3RXFDLG9CQUFTLEdBNkU5Qzs7Ozs7Ozs7Ozs7Ozs7QUN0RkQsY0FBYyxtQkFBTyxDQUFDLDROQUEyRzs7QUFFakksNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmluaXRpYXRlLXBheG9zLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kZWxpdmVyLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pbml0aWF0ZS1wYXhvcy1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAucHJvcG9zZS1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbjpmb2N1cywgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRyb3AtYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaW5pdGlhdGUtcGF4b3MtYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLnByb3Bvc2UtYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b246ZGlzYWJsZWQsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRlbGl2ZXItYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kcm9wLWJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0OyB9XFxuXFxuLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjI1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoOyB9XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE4LTctMiAwOjQwOjVcXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyoqXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqIGFuaW1hdGlvbiBmYWRlLWluXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4uYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAubm9kZS1jb21wb25lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgLyA1MCU7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlIC8gNTAlO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJSAvIDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBsaWdodGdyZXk7IH1cXG4gICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAubm9kZS1jb21wb25lbnQgLm5vZGUtbGFiZWwge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDsgfVxcbiAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgaGVpZ2h0OiA5NnB4O1xcbiAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIC5wcm9wb3Nlci1jb21wb25lbnQsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IC5yb2xlcy1jb250YWluZXIgLnJlY2VpdmVyLWxlYXJuZXItY29udGFpbmVyIC5yZWNlaXZlci1jb21wb25lbnQsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IC5yb2xlcy1jb250YWluZXIgLnJlY2VpdmVyLWxlYXJuZXItY29udGFpbmVyIC5sZWFybmVyLWNvbXBvbmVudCB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5ub2RlLWNvbXBvbmVudCAucm9sZXMtY29udGFpbmVyIC5wcm9wb3Nlci1jb21wb25lbnQge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICAgICAgICBtYXJnaW46IDFweDsgfVxcbiAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IC5yb2xlcy1jb250YWluZXIgLnJlY2VpdmVyLWxlYXJuZXItY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAubm9kZS1jb21wb25lbnQgLnJvbGVzLWNvbnRhaW5lciAucmVjZWl2ZXItbGVhcm5lci1jb250YWluZXIgLnJlY2VpdmVyLWNvbXBvbmVudCB7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgICAgICAgbWFyZ2luOiAxcHg7IH1cXG4gICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLm5vZGUtY29tcG9uZW50IC5yb2xlcy1jb250YWluZXIgLnJlY2VpdmVyLWxlYXJuZXItY29udGFpbmVyIC5sZWFybmVyLWNvbXBvbmVudCB7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICAgICAgICBtYXJnaW46IDFweDsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaW5pdGlhdGUtcGF4b3MtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWEwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmluaXRpYXRlLXBheG9zLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODIwMDsgfVxcbiAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pbml0aWF0ZS1wYXhvcy1idXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MDAwOyB9XFxuICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGI0ZmE7IH1cXG4gICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWlucHV0IHtcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IDA7IH1cXG4gICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWEwMDtcXG4gICAgICBtYXJnaW46IDJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgd2lkdGg6IDgwcHg7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLnByb3Bvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyMDA7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLnByb3Bvc2UtYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MDAwOyB9XFxuICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk2OTY5NjtcXG4gICAgICBtYXJnaW46IDJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgd2lkdGg6IDgwcHg7IH1cXG4gICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgyODI4MjsgfVxcbiAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbjphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDsgfVxcblxcbi5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmluaXRpYXRlLXBheG9zLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5wcm9wb3NlLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAucHJvcG9zYWwtbW9kYWwgLnByb3Bvc2FsLWJ1dHRvbnMtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kZWxpdmVyLWJ1dHRvbiwgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pbml0aWF0ZS1wYXhvcy1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAucHJvcG9zZS1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLnByb3Bvc2FsLW1vZGFsIC5wcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbjpmb2N1cywgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b246Zm9jdXMsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRyb3AtYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaW5pdGlhdGUtcGF4b3MtYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLnByb3Bvc2UtYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5wcm9wb3NhbC1tb2RhbCAucHJvcG9zYWwtYnV0dG9ucy1jb250YWluZXIgLmNhbmNlbC1idXR0b246ZGlzYWJsZWQsIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5tZXNzYWdlLWRlbGl2ZXItYnV0dG9uOmRpc2FibGVkLCAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kcm9wLWJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0OyB9XFxuXFxuLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLXRvcCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi10b3AgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDsgfVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOC03LTIgMDo1NjoxN1xcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKipcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogYW5pbWF0aW9uIHNsaWRlLWluLXRvcFxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTBweCk7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwcHgpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxcbiAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cXG4gICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYmUwMDsgfVxcbiAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtdGV4dC1jb250YWluZXIge1xcbiAgICAgICAgICBmbGV4OiAxOyB9XFxuICAgICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG4gICAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b24ge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBlNjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kZWxpdmVyLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGFhOyB9XFxuICAgICAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZGVsaXZlci1idXR0b246YWN0aXZlIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNzg7IH1cXG4gICAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b24ge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMDAwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIgLm1lc3NhZ2VzLW91dGVyLWNvbnRhaW5lciAubWVzc2FnZXMtbWlkZGxlLWNvbnRhaW5lciAubWVzc2FnZXMtaW5uZXItY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1kcm9wLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwOyB9XFxuICAgICAgICAgICAgLmFwcC1jb250YWluZXIgLm5vZGUtbWVzc2FnZXMtY29udGFpbmVyIC5tZXNzYWdlcy1vdXRlci1jb250YWluZXIgLm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXIgLm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lciAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtZHJvcC1idXR0b246YWN0aXZlIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODAwMDA7IH1cXG4gICAgICAgIC5hcHAtY29udGFpbmVyIC5ub2RlLW1lc3NhZ2VzLWNvbnRhaW5lciAubWVzc2FnZXMtb3V0ZXItY29udGFpbmVyIC5tZXNzYWdlcy1taWRkbGUtY29udGFpbmVyIC5tZXNzYWdlcy1pbm5lci1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLXRleHQge1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDsgfVxcblxcbioge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiogOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA2cHg7IH1cXG5cXG4qIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyB9XFxuICAuYXBwLWNvbnRhaW5lciAubm9kZS1tZXNzYWdlcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDE2MHB4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL2xpYi9tZXNzYWdlX3R5cGVzJztcbmltcG9ydCBQYXhvc05vZGUgZnJvbSAnLi9saWIvcGF4b3Nfbm9kZSc7XG5pbXBvcnQgTWVzc2FnZVBvb2wgZnJvbSAnLi9saWIvbWVzc2FnZV9wb29sJztcbmltcG9ydCBQYXhvcyBmcm9tICcuL2xpYi9wYXhvcyc7XG5cbmltcG9ydCB7IE5vZGVTdGF0ZSB9IGZyb20gJy4vQXBwU3RhdGUnO1xuaW1wb3J0IE5vZGVNZXNzYWdlc0NvbXBvbmVudCBmcm9tICcuL05vZGVNZXNzYWdlc0NvbXBvbmVudCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYXBwU3R5bGVzLnNjc3MnO1xuXG5mdW5jdGlvbiBnZXROb2RlU3RhdGVzKHBheG9zOiBQYXhvcyk6IEFycmF5PE5vZGVTdGF0ZT4ge1xuICByZXR1cm4gcGF4b3Mubm9kZXMubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChub2RlLmdldElkKCkgIT09IGluZGV4KSB7XG4gICAgICB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHRlcnJpYmx5IHdyb25nISEhJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpZDogbm9kZS5nZXRJZCgpLFxuXG4gICAgICBwcm9wb3Nlcjoge1xuICAgICAgICBpc1Byb3Bvc2luZzogbm9kZS5pc1Byb3Bvc2luZygpLFxuICAgICAgICBwcm9wb3NhbE51bWJlcjogbm9kZS5nZXRQcm9wb3NhbE51bWJlcigpLFxuICAgICAgICBwcm9wb3NlZFZhbHVlOiBub2RlLmdldFByb3Bvc2VkVmFsdWUoKSxcbiAgICAgICAgcmVzcG9uc2VzOiBub2RlLmdldE51bVByb3Bvc2VyUmVzcG9uc2VzKCksXG4gICAgICAgIHBoYXNlOiBub2RlLmdldFByb3Bvc2VyUGhhc2UoKSxcbiAgICAgIH0sXG5cbiAgICAgIHJlY2VpdmVyOiB7XG4gICAgICAgIGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXI6IG5vZGUuZ2V0SGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcigpLFxuICAgICAgICBhY2NlcHRlZFZhbHVlOiBub2RlLmdldEFjY2VwdGVkVmFsdWUoKSxcbiAgICAgIH0sXG5cbiAgICAgIGxlYXJuZXI6IHtcbiAgICAgICAgcmVzcG9uc2VzOiBub2RlLmdldE51bUxlYXJuZXJSZXNwb25zZXMoKSxcbiAgICAgICAgbGVhcm5lZFZhbHVlOiBub2RlLmdldExlYXJuZWRWYWx1ZSgpLFxuICAgICAgfSxcblxuICAgICAgbWVzc2FnZXM6IHBheG9zLm1lc3NhZ2VQb29sLmdldElkTWVzc2FnZVBhaXJzVG9Ob2RlSWQobm9kZS5nZXRJZCgpKSxcbiAgICB9O1xuICB9KTtcbn1cblxuaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgcGF4b3M6IFBheG9zO1xuICBub2RlU3RhdGVzOiBBcnJheTxOb2RlU3RhdGU+O1xuICBub2RlSWREcmFmdGluZ1Byb3Bvc2FsOiBudW1iZXI7IC8vIC0xIGlmIG5vbmUsIG90aGVyd2lzZSBpdCdzIHRoZSBpZCBvZiB0aGUgbm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBBcHBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHBheG9zID0gbmV3IFBheG9zKDUpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYXhvczogcGF4b3MsXG4gICAgICBub2RlU3RhdGVzOiBnZXROb2RlU3RhdGVzKHBheG9zKSxcbiAgICAgIG5vZGVJZERyYWZ0aW5nUHJvcG9zYWw6IC0xLFxuICAgIH07XG4gIH1cblxuICBiZWdpbkRyYWZ0aW5nUHJvcG9zYWwgPSAobm9kZUlkOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbDogbm9kZUlkIH0pO1xuICB9XG5cbiAgZW5kRHJhZnRpbmdQcm9wb3NhbCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbDogLTEgfSk7XG4gIH1cblxuICBpbml0aWF0ZVBheG9zID0gKG5vZGVJZDogbnVtYmVyLCBwcm9wb3NlZFZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHBheG9zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHBheG9zLmdldE5vZGVCeUlkKG5vZGVJZCkgYXMgUGF4b3NOb2RlO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gbm9kZS5nZW5lcmF0ZVByZXBhcmVSZXF1ZXN0cyhwcm9wb3NlZFZhbHVlKTtcbiAgICBtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiBwYXhvcy5tZXNzYWdlUG9vbC5hZGRNZXNzYWdlKG1lc3NhZ2UpKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbm9kZVN0YXRlczogZ2V0Tm9kZVN0YXRlcyhwYXhvcyksXG4gICAgfSk7XG4gIH1cblxuICBkZWxpdmVyTWVzc2FnZSA9IChtZXNzYWdlSWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgcGF4b3MgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gcGF4b3MubWVzc2FnZVBvb2wucmV0cmlldmVNZXNzYWdlKG1lc3NhZ2VJZCkgYXMgTWVzc2FnZTtcbiAgICBjb25zdCB0b05vZGUgPSBwYXhvcy5nZXROb2RlQnlJZChtZXNzYWdlLmhlYWRlcnMudG9Ob2RlSWQpIGFzIFBheG9zTm9kZTtcbiAgICBjb25zdCByZXNwb25zZXMgPSB0b05vZGUucmVjZWl2ZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlKSA9PiBwYXhvcy5tZXNzYWdlUG9vbC5hZGRNZXNzYWdlKHJlc3BvbnNlKSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5vZGVTdGF0ZXM6IGdldE5vZGVTdGF0ZXMocGF4b3MpLFxuICAgIH0pO1xuICB9XG5cbiAgZHJvcE1lc3NhZ2UgPSAobWVzc2FnZUlkOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHBheG9zIH0gPSB0aGlzLnN0YXRlO1xuICAgIHBheG9zLm1lc3NhZ2VQb29sLmRyb3BNZXNzYWdlKG1lc3NhZ2VJZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub2RlU3RhdGVzOiBnZXROb2RlU3RhdGVzKHBheG9zKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBub2RlTWVzc2FnZXNDb21wb25lbnRzID0gdGhpcy5zdGF0ZS5ub2RlU3RhdGVzLm1hcCgobm9kZVN0YXRlKSA9PlxuICAgICAgPE5vZGVNZXNzYWdlc0NvbXBvbmVudFxuICAgICAgICBwYXhvcz17dGhpcy5zdGF0ZS5wYXhvc31cbiAgICAgICAgbm9kZVN0YXRlPXtub2RlU3RhdGV9XG4gICAgICAgIGluaXRpYXRlUGF4b3M9e3RoaXMuaW5pdGlhdGVQYXhvc31cbiAgICAgICAgZGVsaXZlck1lc3NhZ2U9e3RoaXMuZGVsaXZlck1lc3NhZ2V9XG4gICAgICAgIGRyb3BNZXNzYWdlPXt0aGlzLmRyb3BNZXNzYWdlfVxuICAgICAgICBiZWdpbkRyYWZ0aW5nUHJvcG9zYWw9e3RoaXMuYmVnaW5EcmFmdGluZ1Byb3Bvc2FsfVxuICAgICAgICBlbmREcmFmdGluZ1Byb3Bvc2FsPXt0aGlzLmVuZERyYWZ0aW5nUHJvcG9zYWx9XG4gICAgICAgIG5vZGVJZERyYWZ0aW5nUHJvcG9zYWw9e3RoaXMuc3RhdGUubm9kZUlkRHJhZnRpbmdQcm9wb3NhbH1cbiAgICAgIC8+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgIHtub2RlTWVzc2FnZXNDb21wb25lbnRzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgTWVzc2FnZUJ1dHRvbnNDb21wb25lbnRQcm9wcyB7XG4gIGRlbGl2ZXI6ICgpID0+IHZvaWQ7XG4gIGRyb3A6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1lc3NhZ2VCdXR0b25zQ29tcG9uZW50ID0gKHByb3BzOiBNZXNzYWdlQnV0dG9uc0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGVsaXZlciwgZHJvcCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lc3NhZ2UtZGVsaXZlci1idXR0b25cIiBvbkNsaWNrPXtkZWxpdmVyfT5cbiAgICAgICAgRGVsaXZlclxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lc3NhZ2UtZHJvcC1idXR0b25cIiBvbkNsaWNrPXtkcm9wfT5cbiAgICAgICAgRHJvcFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQnV0dG9uc0NvbXBvbmVudDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgTWVzc2FnZSxcbiAgUHJlcGFyZVJlcXVlc3QsXG4gIFByZXBhcmVSZXNwb25zZSxcbiAgQWNjZXB0UmVxdWVzdCxcbiAgQWNjZXB0UmVzcG9uc2UsXG59IGZyb20gJy4vbGliL21lc3NhZ2VfdHlwZXMnO1xuXG5pbXBvcnQgeyBNZXNzYWdlU3RhdGUgfSBmcm9tICcuL0FwcFN0YXRlJztcbmltcG9ydCBNZXNzYWdlQnV0dG9uc0NvbXBvbmVudCBmcm9tICcuL01lc3NhZ2VCdXR0b25zQ29tcG9uZW50JztcbmltcG9ydCBNZXNzYWdlSGVhZGVyc0NvbXBvbmVudCBmcm9tICcuL01lc3NhZ2VIZWFkZXJzQ29tcG9uZW50JztcblxuXG5pbnRlcmZhY2UgQ29tcG9uZW50UHJvcHMge1xuICBtZXNzYWdlU3RhdGU6IE1lc3NhZ2VTdGF0ZSxcbiAgZGVsaXZlck1lc3NhZ2U6IChtZXNzYWdlSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgZHJvcE1lc3NhZ2U6IChtZXNzYWdlSWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbXBvbmVudFByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBleHRyYWN0TmFtZUFuZEJvZHlUZXh0cyA9IChtZXNzYWdlOiBNZXNzYWdlKTogeyBuYW1lOiBzdHJpbmcsIGJvZHlUZXh0czogc3RyaW5nW10gfSA9PiB7XG4gICAgbGV0IG5hbWU7XG4gICAgbGV0IGJvZHlUZXh0cztcbiAgICBzd2l0Y2gobWVzc2FnZS5raW5kKSB7XG4gICAgICBjYXNlICdQcmVwYXJlUmVxdWVzdCc6IHtcbiAgICAgICAgbmFtZSA9ICdQcmVwYXJlIFJlcXVlc3QnO1xuICAgICAgICBib2R5VGV4dHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdQcmVwYXJlUmVzcG9uc2UnOiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbWVzc2FnZSBhcyBQcmVwYXJlUmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHsgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciwgYWNjZXB0ZWRWYWx1ZSB9ID0gcmVzcG9uc2UuYm9keTtcbiAgICAgICAgbmFtZSA9ICdQcmVwYXJlIFJlc3BvbnNlJztcbiAgICAgICAgYm9keVRleHRzID0gW1xuICAgICAgICAgIGBwcmV2IHByb21pc2VkIFBOOiAke2hpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXJ9YCxcbiAgICAgICAgICBgYWNjZXB0ZWQgdmFsdWU6ICR7YWNjZXB0ZWRWYWx1ZX1gLFxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0FjY2VwdFJlcXVlc3QnOiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBtZXNzYWdlIGFzIEFjY2VwdFJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHsgcHJvcG9zZWRWYWx1ZSB9ID0gcmVxdWVzdC5ib2R5O1xuICAgICAgICBuYW1lID0gJ0FjY2VwdCBSZXF1ZXN0JztcbiAgICAgICAgYm9keVRleHRzID0gW2BQVjogJHtwcm9wb3NlZFZhbHVlfWBdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0FjY2VwdFJlc3BvbnNlJzoge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IG1lc3NhZ2UgYXMgQWNjZXB0UmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHsgYWNjZXB0ZWQsIGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIgfSA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgIG5hbWUgPSAnQWNjZXB0IFJlc3BvbnNlJztcbiAgICAgICAgaWYgKGFjY2VwdGVkKSB7XG4gICAgICAgICAgYm9keVRleHRzID0gWydBQ0NFUFRFRCddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHlUZXh0cyA9IFtcbiAgICAgICAgICAgICdSRUpFQ1RFRCcsXG4gICAgICAgICAgICBgaGlnaGVzdCBzZWVuIFBOOiAke2hpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXJ9YCxcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGJvZHlUZXh0czogYm9keVRleHRzLFxuICAgIH07XG4gIH1cblxuICBkZWxpdmVyTWVzc2FnZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLm1lc3NhZ2VTdGF0ZTtcbiAgICB0aGlzLnByb3BzLmRlbGl2ZXJNZXNzYWdlKGlkKTtcbiAgfVxuXG4gIGRyb3BNZXNzYWdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubWVzc2FnZVN0YXRlO1xuICAgIHRoaXMucHJvcHMuZHJvcE1lc3NhZ2UoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZVN0YXRlLCBkZWxpdmVyTWVzc2FnZSwgZHJvcE1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpZCwgbWVzc2FnZSB9ID0gbWVzc2FnZVN0YXRlO1xuXG4gICAgY29uc3QgeyBuYW1lLCBib2R5VGV4dHMgfSA9IHRoaXMuZXh0cmFjdE5hbWVBbmRCb2R5VGV4dHMobWVzc2FnZSk7XG5cbiAgICBjb25zdCBib2R5VGV4dENvbXBvbmVudHMgPSBib2R5VGV4dHMubWFwKCh0ZXh0KSA9PiA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtdGV4dFwiPnt0ZXh0fTwvZGl2Pik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRhaW5lclwiIGlkPXtpZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxNZXNzYWdlSGVhZGVyc0NvbXBvbmVudCBuYW1lPXtuYW1lfSBtZXNzYWdlPXttZXNzYWdlfS8+XG4gICAgICAgICAge2JvZHlUZXh0Q29tcG9uZW50c31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZXNzYWdlQnV0dG9uc0NvbXBvbmVudFxuICAgICAgICAgIGRlbGl2ZXI9e3RoaXMuZGVsaXZlck1lc3NhZ2V9XG4gICAgICAgICAgZHJvcD17dGhpcy5kcm9wTWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbGliL21lc3NhZ2VfdHlwZXMnO1xuXG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIG5hbWU6IHN0cmluZyxcbiAgbWVzc2FnZTogTWVzc2FnZSxcbn1cblxuY29uc3QgTWVzc2FnZUhlYWRlcnNDb21wb25lbnQgPSAoeyBuYW1lLCBtZXNzYWdlIH06IENvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcG9zYWxOdW1iZXIsIGZyb21Ob2RlSWQsIHRvTm9kZUlkIH0gPSBtZXNzYWdlLmhlYWRlcnM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlci1jb21wb25lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10ZXh0XCI+e25hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtdGV4dFwiPlBOIHtwcm9wb3NhbE51bWJlcn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10ZXh0XCI+ZnJvbSBub2RlICN7ZnJvbU5vZGVJZH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VIZWFkZXJzQ29tcG9uZW50O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGF4b3MgZnJvbSAnLi9saWIvcGF4b3MnO1xuXG5pbXBvcnQgeyBNZXNzYWdlU3RhdGUgfSBmcm9tICcuL0FwcFN0YXRlJztcbmltcG9ydCBNZXNzYWdlQ29tcG9uZW50IGZyb20gJy4vTWVzc2FnZUNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIHBheG9zOiBQYXhvcztcbiAgbm9kZUlkOiBudW1iZXI7XG4gIG1lc3NhZ2VTdGF0ZXM6IEFycmF5PE1lc3NhZ2VTdGF0ZT47XG4gIGRlbGl2ZXJNZXNzYWdlOiAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGRyb3BNZXNzYWdlOiAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbXBvbmVudFByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBub2RlSWQsIG1lc3NhZ2VTdGF0ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVzc2FnZUNvbXBvbmVudHMgPSBtZXNzYWdlU3RhdGVzLm1hcCgobWVzc2FnZVN0YXRlKSA9PlxuICAgICAgPE1lc3NhZ2VDb21wb25lbnRcbiAgICAgICAgbWVzc2FnZVN0YXRlPXttZXNzYWdlU3RhdGV9XG4gICAgICAgIGRlbGl2ZXJNZXNzYWdlPXt0aGlzLnByb3BzLmRlbGl2ZXJNZXNzYWdlfVxuICAgICAgICBkcm9wTWVzc2FnZT17dGhpcy5wcm9wcy5kcm9wTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1vdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1sYWJlbFwiPk1lc3NhZ2VzIGZvciBOb2RlICN7bm9kZUlkfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzLW1pZGRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge21lc3NhZ2VDb21wb25lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbGliL21lc3NhZ2VfdHlwZXMnO1xuaW1wb3J0IFBheG9zTm9kZSBmcm9tICcuL2xpYi9wYXhvc19ub2RlJztcbmltcG9ydCBQYXhvcyBmcm9tICcuL2xpYi9wYXhvcyc7XG5cbmltcG9ydCB7IE5vZGVTdGF0ZSwgUHJvcG9zZXJTdGF0ZSwgUmVjZWl2ZXJTdGF0ZSwgTGVhcm5lclN0YXRlIH0gZnJvbSAnLi9BcHBTdGF0ZSc7XG5pbXBvcnQgUHJvcG9zYWxNb2RhbENvbXBvbmVudCBmcm9tICcuL1Byb3Bvc2FsTW9kYWxDb21wb25lbnQnO1xuXG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIG5vZGVTdGF0ZTogTm9kZVN0YXRlO1xuICBpbml0aWF0ZVBheG9zOiAobm9kZUlkOiBudW1iZXIsIHByb3Bvc2VkVmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgYmVnaW5EcmFmdGluZ1Byb3Bvc2FsOiAobm9kZUlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIGVuZERyYWZ0aW5nUHJvcG9zYWw6ICgpID0+IHZvaWQ7XG4gIG5vZGVJZERyYWZ0aW5nUHJvcG9zYWw6IG51bWJlcjtcbiAgcGF4b3M6IFBheG9zO1xufVxuXG5jb25zdCBQcm9wb3NlckNvbXBvbmVudCA9ICh7IHByb3Bvc2VyU3RhdGUgfTogeyBwcm9wb3NlclN0YXRlOiBQcm9wb3NlclN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBpc1Byb3Bvc2luZywgcHJvcG9zYWxOdW1iZXIsIHByb3Bvc2VkVmFsdWUsIHJlc3BvbnNlcywgcGhhc2UgfSA9IHByb3Bvc2VyU3RhdGU7XG4gIGlmIChpc1Byb3Bvc2luZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3Bvc2VyLWNvbXBvbmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtdGV4dFwiPlxuICAgICAgICAgIFBOOiB7cHJvcG9zYWxOdW1iZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtdGV4dFwiPlxuICAgICAgICAgIFBWOiB7cHJvcG9zZWRWYWx1ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgICAgcmVzcG9uc2VzOiB7cmVzcG9uc2VzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLXRleHRcIj5cbiAgICAgICAgICBwaGFzZToge3BoYXNlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcG9zZXItY29tcG9uZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgICAgbm90IHByb3Bvc2luZ1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFJlY2VpdmVyQ29tcG9uZW50ID0gKHsgcmVjZWl2ZXJTdGF0ZSB9OiB7IHJlY2VpdmVyU3RhdGU6IFJlY2VpdmVyU3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIsIGFjY2VwdGVkVmFsdWUgfSA9IHJlY2VpdmVyU3RhdGU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlci1jb21wb25lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgIHByb21pc2VkIFBOOiB7cmVjZWl2ZXJTdGF0ZS5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtdGV4dFwiPlxuICAgICAgICBhY2NlcHRlZDoge3JlY2VpdmVyU3RhdGUuYWNjZXB0ZWRWYWx1ZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGVhcm5lckNvbXBvbmVudCA9ICh7IGxlYXJuZXJTdGF0ZSB9OiB7IGxlYXJuZXJTdGF0ZTogTGVhcm5lclN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyByZXNwb25zZXMsIGxlYXJuZWRWYWx1ZSB9ID0gbGVhcm5lclN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhcm5lci1jb21wb25lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgIHJlc3BvbnNlczoge2xlYXJuZXJTdGF0ZS5yZXNwb25zZXN9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS10ZXh0XCI+XG4gICAgICAgIExWOiB7bGVhcm5lclN0YXRlLmxlYXJuZWRWYWx1ZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb21wb25lbnRQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5iZWdpbkRyYWZ0aW5nUHJvcG9zYWwodGhpcy5wcm9wcy5ub2RlU3RhdGUuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbm9kZVN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBpZCwgcHJvcG9zZXIsIHJlY2VpdmVyLCBsZWFybmVyIH0gPSBub2RlU3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLWNvbXBvbmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtbGFiZWxcIj5cbiAgICAgICAgICBOb2RlICN7aWR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvbGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxQcm9wb3NlckNvbXBvbmVudCBwcm9wb3NlclN0YXRlPXtwcm9wb3Nlcn0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZXItbGVhcm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxSZWNlaXZlckNvbXBvbmVudCByZWNlaXZlclN0YXRlPXtyZWNlaXZlcn0vPlxuICAgICAgICAgICAgPExlYXJuZXJDb21wb25lbnQgbGVhcm5lclN0YXRlPXtsZWFybmVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5pdGlhdGUtcGF4b3MtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLm5vZGVJZERyYWZ0aW5nUHJvcG9zYWwgIT09IC0xfVxuICAgICAgICA+XG4gICAgICAgICAgSW5pdGlhdGUgUGF4b3NcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnByb3BzLm5vZGVJZERyYWZ0aW5nUHJvcG9zYWwgPT09IG5vZGVTdGF0ZS5pZCAmJlxuICAgICAgICAgIDxQcm9wb3NhbE1vZGFsQ29tcG9uZW50XG4gICAgICAgICAgICBub2RlU3RhdGU9e3RoaXMucHJvcHMubm9kZVN0YXRlfVxuICAgICAgICAgICAgaW5pdGlhdGVQYXhvcz17dGhpcy5wcm9wcy5pbml0aWF0ZVBheG9zfVxuICAgICAgICAgICAgZW5kRHJhZnRpbmdQcm9wb3NhbD17dGhpcy5wcm9wcy5lbmREcmFmdGluZ1Byb3Bvc2FsfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBheG9zIGZyb20gJy4vbGliL3BheG9zJztcblxuaW1wb3J0IHsgTm9kZVN0YXRlIH0gZnJvbSAnLi9BcHBTdGF0ZSc7XG5pbXBvcnQgTWVzc2FnZXNDb21wb25lbnQgZnJvbSAnLi9NZXNzYWdlc0NvbXBvbmVudCc7XG5pbXBvcnQgTm9kZUNvbXBvbmVudCBmcm9tICcuL05vZGVDb21wb25lbnQnO1xuXG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIHBheG9zOiBQYXhvcztcbiAgbm9kZVN0YXRlOiBOb2RlU3RhdGU7XG4gIGluaXRpYXRlUGF4b3M6IChub2RlSWQ6IG51bWJlciwgcHJvcG9zZWRWYWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBkZWxpdmVyTWVzc2FnZTogKG1lc3NhZ2VJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBkcm9wTWVzc2FnZTogKG1lc3NhZ2VJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBiZWdpbkRyYWZ0aW5nUHJvcG9zYWw6IChub2RlSWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgZW5kRHJhZnRpbmdQcm9wb3NhbDogKCkgPT4gdm9pZDtcbiAgbm9kZUlkRHJhZnRpbmdQcm9wb3NhbDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlTWVzc2FnZXNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tcG9uZW50UHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5vZGVTdGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLW1lc3NhZ2VzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5vZGVDb21wb25lbnRcbiAgICAgICAgICAgIG5vZGVTdGF0ZT17bm9kZVN0YXRlfVxuICAgICAgICAgICAgaW5pdGlhdGVQYXhvcz17dGhpcy5wcm9wcy5pbml0aWF0ZVBheG9zfVxuICAgICAgICAgICAgYmVnaW5EcmFmdGluZ1Byb3Bvc2FsPXt0aGlzLnByb3BzLmJlZ2luRHJhZnRpbmdQcm9wb3NhbH1cbiAgICAgICAgICAgIGVuZERyYWZ0aW5nUHJvcG9zYWw9e3RoaXMucHJvcHMuZW5kRHJhZnRpbmdQcm9wb3NhbH1cbiAgICAgICAgICAgIG5vZGVJZERyYWZ0aW5nUHJvcG9zYWw9e3RoaXMucHJvcHMubm9kZUlkRHJhZnRpbmdQcm9wb3NhbH1cbiAgICAgICAgICAgIHBheG9zPXt0aGlzLnByb3BzLnBheG9zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVzc2FnZXNDb21wb25lbnRcbiAgICAgICAgICBub2RlSWQ9e25vZGVTdGF0ZS5pZH1cbiAgICAgICAgICBtZXNzYWdlU3RhdGVzPXtub2RlU3RhdGUubWVzc2FnZXN9XG4gICAgICAgICAgZGVsaXZlck1lc3NhZ2U9e3RoaXMucHJvcHMuZGVsaXZlck1lc3NhZ2V9XG4gICAgICAgICAgZHJvcE1lc3NhZ2U9e3RoaXMucHJvcHMuZHJvcE1lc3NhZ2V9XG4gICAgICAgICAgcGF4b3M9e3RoaXMucHJvcHMucGF4b3N9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5vZGVTdGF0ZSB9IGZyb20gJy4vQXBwU3RhdGUnO1xuXG5cbmludGVyZmFjZSBDb21wb25lbnRQcm9wcyB7XG4gIG5vZGVTdGF0ZTogTm9kZVN0YXRlO1xuICBpbml0aWF0ZVBheG9zOiAobm9kZUlkOiBudW1iZXIsIHByb3Bvc2VkVmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZW5kRHJhZnRpbmdQcm9wb3NhbDogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENvbXBvbmVudFN0YXRlIHtcbiAgdmFsdWVUb1Byb3Bvc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcG9zYWxNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWVUb1Byb3Bvc2U6ICcnIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZVRvUHJvcG9zZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXG4gIGhhbmRsZUNhbmNlbCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5lbmREcmFmdGluZ1Byb3Bvc2FsKCk7XG4gIH1cblxuICBoYW5kbGVQcm9wb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZVRvUHJvcG9zZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnByb3BzLmluaXRpYXRlUGF4b3ModGhpcy5wcm9wcy5ub2RlU3RhdGUuaWQsIHRoaXMuc3RhdGUudmFsdWVUb1Byb3Bvc2UpO1xuICAgICAgdGhpcy5wcm9wcy5lbmREcmFmdGluZ1Byb3Bvc2FsKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwcm9wb3NhbC1tb2RhbFwiPlxuICAgICAgICA8ZGl2PkVudGVyIGEgdmFsdWUgdG8gcHJvcG9zZTwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9wb3NhbC1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlVG9Qcm9wb3NlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wb3NhbC1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvcG9zZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVByb3Bvc2V9PlByb3Bvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhbmNlbC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwiaW1wb3J0IHtcbiAgUHJlcGFyZVJlcXVlc3QsXG4gIFByZXBhcmVSZXNwb25zZSxcbiAgQWNjZXB0UmVxdWVzdCxcbiAgQWNjZXB0UmVzcG9uc2UsXG4gIE1lc3NhZ2UsXG59IGZyb20gJy4vbWVzc2FnZV90eXBlcyc7XG5cbmltcG9ydCBQYXhvc1JvbGUgZnJvbSAnLi9wYXhvc19yb2xlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhcm5lciBleHRlbmRzIFBheG9zUm9sZSB7XG4gIHByaXZhdGUgaWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWNlaXZlck5vZGVJZHM6IEFycmF5PG51bWJlcj47XG5cbiAgcHJpdmF0ZSBwcm9wb3NhbE51bWJlcjogbnVtYmVyO1xuICBwcml2YXRlIHJlc3BvbnNlczogQXJyYXk8QWNjZXB0UmVzcG9uc2U+O1xuICBwcml2YXRlIGxlYXJuZWRWYWx1ZTogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5wcm9wb3NhbE51bWJlciA9IC0xO1xuICAgIHRoaXMucmVzcG9uc2VzID0gW107XG4gIH1cblxuICBpbml0aWFsaXplUmVjZWl2ZXJOb2RlSWRzKHJlY2VpdmVyTm9kZUlkczogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuICAgIHRoaXMucmVjZWl2ZXJOb2RlSWRzID0gcmVjZWl2ZXJOb2RlSWRzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlY2VpdmVQcmVwYXJlUmVxdWVzdChtZXNzYWdlOiBQcmVwYXJlUmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZVByZXBhcmVSZXNwb25zZShtZXNzYWdlOiBQcmVwYXJlUmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlY2VpdmVBY2NlcHRSZXF1ZXN0KG1lc3NhZ2U6IEFjY2VwdFJlcXVlc3QpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gVE9ETzogcmV0aGluayBob3cgdG8gaW1wbGVtZW50IHRoaXMgbWV0aG9kXG4gIHByb3RlY3RlZCByZWNlaXZlQWNjZXB0UmVzcG9uc2UobWVzc2FnZTogQWNjZXB0UmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBib2R5IH0gPSBtZXNzYWdlO1xuXG4gICAgaWYgKGhlYWRlcnMucHJvcG9zYWxOdW1iZXIgPCB0aGlzLnByb3Bvc2FsTnVtYmVyKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlcnMucHJvcG9zYWxOdW1iZXIgPiB0aGlzLnByb3Bvc2FsTnVtYmVyKSB7XG4gICAgICB0aGlzLnByb3Bvc2FsTnVtYmVyID0gaGVhZGVycy5wcm9wb3NhbE51bWJlcjtcbiAgICAgIHRoaXMucmVzcG9uc2VzID0gW107XG4gICAgICB0aGlzLmxlYXJuZWRWYWx1ZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoYm9keS5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID4gdGhpcy5wcm9wb3NhbE51bWJlcikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHRoaXMucmVzcG9uc2VzLnB1c2gobWVzc2FnZSk7XG4gICAgaWYgKHRoaXMucmVzcG9uc2VzLmxlbmd0aCA+IHRoaXMucmVjZWl2ZXJOb2RlSWRzLmxlbmd0aCAvIDIpIHtcbiAgICAgIHRoaXMubGVhcm5lZFZhbHVlID0gdGhpcy5yZXNwb25zZXNbMF0uYm9keS5hY2NlcHRlZFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldElkID0gKCkgPT4gdGhpcy5pZDtcbiAgZ2V0TnVtUmVzcG9uc2VzID0gKCkgPT4gdGhpcy5yZXNwb25zZXMubGVuZ3RoO1xuICBnZXRMZWFybmVkVmFsdWUgPSAoKSA9PiB0aGlzLmxlYXJuZWRWYWx1ZTtcbn1cbiIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VfdHlwZXMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSWRNZXNzYWdlUGFpciB7XG4gIGlkOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IE1lc3NhZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VQb29sIHtcbiAgcHVibGljIGlkTWVzc2FnZVBhaXJzOiBBcnJheTxJZE1lc3NhZ2VQYWlyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkTWVzc2FnZVBhaXJzID0gW107XG4gIH1cblxuICBfdW5pcXVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2lkXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gIH1cblxuICBhZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlSWQoKTtcbiAgICB0aGlzLmlkTWVzc2FnZVBhaXJzLnB1c2goe1xuICAgICAgaWQ6IGlkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICB9KTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICAvLyBUT0RPOiBtYWtlIHRoaXMgbW9yZSBlZmZpY2llbnRcbiAgcGVla01lc3NhZ2UoaWQ6IHN0cmluZyk6IE1lc3NhZ2UgfCBudWxsIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuaWRNZXNzYWdlUGFpcnNcbiAgICAgIC5maWx0ZXIoKHBhaXIpID0+IHBhaXIuaWQgPT09IGlkKVxuICAgICAgLm1hcCgocGFpcikgPT4gcGFpci5tZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZU1lc3NhZ2UoaWQ6IHN0cmluZyk6IE1lc3NhZ2UgfCBudWxsIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuaWRNZXNzYWdlUGFpcnNcbiAgICAgIC5maWx0ZXIoKHBhaXIpID0+IHBhaXIuaWQgPT09IGlkKVxuICAgICAgLm1hcCgocGFpcikgPT4gcGFpci5tZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pZE1lc3NhZ2VQYWlycyA9IHRoaXMuaWRNZXNzYWdlUGFpcnMuZmlsdGVyKChwYWlyKSA9PiBwYWlyLmlkICE9PSBpZCk7XG4gICAgICByZXR1cm4gbWVzc2FnZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5pZE1lc3NhZ2VQYWlycy5tYXAoKHBhaXIpID0+IHBhaXIubWVzc2FnZSk7XG4gIH1cblxuICBkcm9wTWVzc2FnZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pZE1lc3NhZ2VQYWlycyA9IHRoaXMuaWRNZXNzYWdlUGFpcnMuZmlsdGVyKChwYWlyKSA9PiBwYWlyLmlkICE9PSBpZCk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlkTWVzc2FnZVBhaXJzID0gW107XG4gIH1cblxuICBnZXRJZE1lc3NhZ2VQYWlyc1RvTm9kZUlkKG5vZGVJZDogbnVtYmVyKTogQXJyYXk8SWRNZXNzYWdlUGFpcj4ge1xuICAgIHJldHVybiB0aGlzLmlkTWVzc2FnZVBhaXJzLmZpbHRlcigocGFpcikgPT4gcGFpci5tZXNzYWdlLmhlYWRlcnMudG9Ob2RlSWQgPT09IG5vZGVJZCk7XG4gIH1cbn1cbiIsImltcG9ydCBNZXNzYWdlUG9vbCBmcm9tICcuL21lc3NhZ2VfcG9vbCc7XG5pbXBvcnQgUGF4b3NOb2RlIGZyb20gJy4vcGF4b3Nfbm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheG9zIHtcbiAgcHVibGljIG1lc3NhZ2VQb29sOiBNZXNzYWdlUG9vbDtcbiAgcHVibGljIG5vZGVzOiBBcnJheTxQYXhvc05vZGU+O1xuXG4gIGdldE5vZGVCeUlkKGlkOiBudW1iZXIpOiBQYXhvc05vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuZ2V0SWQoKSA9PT0gaWQpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tZXNzYWdlUG9vbCA9IG5ldyBNZXNzYWdlUG9vbCgpO1xuICAgIHRoaXMubm9kZXMgPSBuZXcgQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiBuZXcgUGF4b3NOb2RlKGluZGV4LCBzaXplKSk7XG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmluaXRpYWxpemVOb2RlSWRzKHRoaXMubm9kZXMubWFwKChub2RlKSA9PiBub2RlLmdldElkKCkpKVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBQcmVwYXJlUmVxdWVzdCxcbiAgUHJlcGFyZVJlc3BvbnNlLFxuICBBY2NlcHRSZXF1ZXN0LFxuICBBY2NlcHRSZXNwb25zZSxcbiAgTWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlX3R5cGVzJztcblxuaW1wb3J0IFByb3Bvc2VyIGZyb20gJy4vcHJvcG9zZXInO1xuaW1wb3J0IFJlY2VpdmVyIGZyb20gJy4vcmVjZWl2ZXInO1xuaW1wb3J0IExlYXJuZXIgZnJvbSAnLi9sZWFybmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF4b3NOb2RlIHtcbiAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuXG4gIHByaXZhdGUgcHJvcG9zZXI6IFByb3Bvc2VyO1xuICBwcml2YXRlIHJlY2VpdmVyOiBSZWNlaXZlcjtcbiAgcHJpdmF0ZSBsZWFybmVyOiBMZWFybmVyO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG51bU5vZGVzOiBudW1iZXIpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB0aGlzLnByb3Bvc2VyID0gbmV3IFByb3Bvc2VyKGlkKTtcbiAgICB0aGlzLnJlY2VpdmVyID0gbmV3IFJlY2VpdmVyKGlkKTtcbiAgICB0aGlzLmxlYXJuZXIgPSBuZXcgTGVhcm5lcihpZCk7XG4gIH1cblxuICBpbml0aWFsaXplTm9kZUlkcyhub2RlSWRzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wb3Nlci5pbml0aWFsaXplUmVjZWl2ZXJOb2RlSWRzKG5vZGVJZHMpO1xuICAgIHRoaXMubGVhcm5lci5pbml0aWFsaXplUmVjZWl2ZXJOb2RlSWRzKG5vZGVJZHMpO1xuICB9XG5cbiAgcmVjZWl2ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBjb25zdCBwcm9wb3Nlck1lc3NhZ2VzID0gdGhpcy5wcm9wb3Nlci5yZWNlaXZlTWVzc2FnZShtZXNzYWdlKTtcbiAgICBjb25zdCByZWNlaXZlck1lc3NhZ2VzID0gdGhpcy5yZWNlaXZlci5yZWNlaXZlTWVzc2FnZShtZXNzYWdlKTtcbiAgICBjb25zdCBsZWFybmVyTWVzc2FnZXMgPSB0aGlzLmxlYXJuZXIucmVjZWl2ZU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICBpZiAocHJvcG9zZXJNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBUaGUgcHJvcG9zZXIgaXMgaW5pdGlhdGluZyB0aGUgYWNjZXB0IHN0YWdlLlxuICAgICAgY29uc3QgYWNjZXB0UmVxdWVzdFRvU2VsZiA9IHByb3Bvc2VyTWVzc2FnZXMuZmluZCgocmVxdWVzdCkgPT4gcmVxdWVzdC5oZWFkZXJzLnRvTm9kZUlkID09PSB0aGlzLmlkKTtcbiAgICAgIGNvbnN0IGFjY2VwdFJlc3BvbnNlVG9TZWxmID0gdGhpcy5yZWNlaXZlci5yZWNlaXZlTWVzc2FnZShhY2NlcHRSZXF1ZXN0VG9TZWxmISlbMF07XG4gICAgICB0aGlzLmxlYXJuZXIucmVjZWl2ZU1lc3NhZ2UoYWNjZXB0UmVzcG9uc2VUb1NlbGYpO1xuXG4gICAgICByZXR1cm4gcHJvcG9zZXJNZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaGVhZGVycy50b05vZGVJZCAhPT0gdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKHJlY2VpdmVyTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHJlY2VpdmVyTWVzc2FnZXM7XG4gICAgfVxuXG4gICAgaWYgKGxlYXJuZXJNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbGVhcm5lck1lc3NhZ2VzO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdlbmVyYXRlUHJlcGFyZVJlcXVlc3RzKHZhbHVlVG9Qcm9wb3NlOiBzdHJpbmcpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgY29uc3QgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA9IHRoaXMucmVjZWl2ZXIuZ2V0SGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcigpO1xuICAgIGNvbnN0IHByZXBhcmVSZXF1ZXN0cyA9IHRoaXMucHJvcG9zZXIuZ2VuZXJhdGVQcmVwYXJlUmVxdWVzdHModmFsdWVUb1Byb3Bvc2UsIGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIpO1xuXG4gICAgY29uc3QgcHJlcGFyZVJlcXVlc3RUb1NlbGYgPSBwcmVwYXJlUmVxdWVzdHMuZmluZCgocmVxdWVzdCkgPT4gcmVxdWVzdC5oZWFkZXJzLnRvTm9kZUlkID09PSB0aGlzLmlkKTtcbiAgICBjb25zdCBwcmVwYXJlUmVzcG9uc2VUb1NlbGYgPSB0aGlzLnJlY2VpdmVyLnJlY2VpdmVNZXNzYWdlKHByZXBhcmVSZXF1ZXN0VG9TZWxmISlbMF07XG4gICAgdGhpcy5wcm9wb3Nlci5yZWNlaXZlTWVzc2FnZShwcmVwYXJlUmVzcG9uc2VUb1NlbGYpO1xuXG4gICAgcmV0dXJuIHByZXBhcmVSZXF1ZXN0cy5maWx0ZXIoKHJlcXVlc3Q6IFByZXBhcmVSZXF1ZXN0KSA9PiByZXF1ZXN0LmhlYWRlcnMudG9Ob2RlSWQgIT09IHRoaXMuaWQpXG4gIH1cblxuICAvLyBnZXR0ZXIgbWV0aG9kc1xuICBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG5cbiAgLy8gcHJvcG9zZXJcbiAgaXNQcm9wb3NpbmcgPSAoKSA9PiB0aGlzLnByb3Bvc2VyLmdldElzUHJvcG9zaW5nKCk7XG4gIGdldFByb3Bvc2FsTnVtYmVyID0gKCkgPT4gdGhpcy5wcm9wb3Nlci5nZXRQcm9wb3NhbE51bWJlcigpO1xuICBnZXRQcm9wb3NlZFZhbHVlID0gKCkgPT4gdGhpcy5wcm9wb3Nlci5nZXRQcm9wb3NlZFZhbHVlKCk7XG4gIGdldE51bVByb3Bvc2VyUmVzcG9uc2VzID0gKCkgPT4gdGhpcy5wcm9wb3Nlci5nZXROdW1SZXNwb25zZXMoKTtcbiAgZ2V0UHJvcG9zZXJQaGFzZSA9ICgpID0+IHRoaXMucHJvcG9zZXIuZ2V0UGhhc2UoKTtcblxuICAvLyByZWNlaXZlclxuICBnZXRIaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID0gKCkgPT4gdGhpcy5yZWNlaXZlci5nZXRIaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyKCk7XG4gIGdldEFjY2VwdGVkVmFsdWUgPSAoKSA9PiB0aGlzLnJlY2VpdmVyLmdldEFjY2VwdGVkVmFsdWUoKTtcblxuICAvLyBsZWFybmVyXG4gIGdldE51bUxlYXJuZXJSZXNwb25zZXMgPSAoKSA9PiB0aGlzLmxlYXJuZXIuZ2V0TnVtUmVzcG9uc2VzKCk7XG4gIGdldExlYXJuZWRWYWx1ZSA9ICgpID0+IHRoaXMubGVhcm5lci5nZXRMZWFybmVkVmFsdWUoKTtcbn1cbiIsImltcG9ydCB7XG4gIFByZXBhcmVSZXF1ZXN0LFxuICBQcmVwYXJlUmVzcG9uc2UsXG4gIEFjY2VwdFJlcXVlc3QsXG4gIEFjY2VwdFJlc3BvbnNlLFxuICBNZXNzYWdlLFxufSBmcm9tICcuL21lc3NhZ2VfdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQYXhvc1JvbGUge1xuICByZWNlaXZlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIHN3aXRjaChtZXNzYWdlLmtpbmQpIHtcbiAgICAgIGNhc2UgJ1ByZXBhcmVSZXF1ZXN0JzogcmV0dXJuIHRoaXMucmVjZWl2ZVByZXBhcmVSZXF1ZXN0KG1lc3NhZ2UpO1xuICAgICAgY2FzZSAnUHJlcGFyZVJlc3BvbnNlJzogcmV0dXJuIHRoaXMucmVjZWl2ZVByZXBhcmVSZXNwb25zZShtZXNzYWdlKTtcbiAgICAgIGNhc2UgJ0FjY2VwdFJlcXVlc3QnOiByZXR1cm4gdGhpcy5yZWNlaXZlQWNjZXB0UmVxdWVzdChtZXNzYWdlKTtcbiAgICAgIGNhc2UgJ0FjY2VwdFJlc3BvbnNlJzogcmV0dXJuIHRoaXMucmVjZWl2ZUFjY2VwdFJlc3BvbnNlKG1lc3NhZ2UpO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWNlaXZlUHJlcGFyZVJlcXVlc3QobWVzc2FnZTogUHJlcGFyZVJlcXVlc3QpOiBBcnJheTxNZXNzYWdlPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY2VpdmVQcmVwYXJlUmVzcG9uc2UobWVzc2FnZTogUHJlcGFyZVJlc3BvbnNlKTogQXJyYXk8TWVzc2FnZT47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWNlaXZlQWNjZXB0UmVxdWVzdChtZXNzYWdlOiBBY2NlcHRSZXF1ZXN0KTogQXJyYXk8TWVzc2FnZT47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWNlaXZlQWNjZXB0UmVzcG9uc2UobWVzc2FnZTogQWNjZXB0UmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPjtcbn1cbiIsImltcG9ydCB7XG4gIFByZXBhcmVSZXF1ZXN0LFxuICBQcmVwYXJlUmVzcG9uc2UsXG4gIEFjY2VwdFJlcXVlc3QsXG4gIEFjY2VwdFJlc3BvbnNlLFxuICBNZXNzYWdlLFxufSBmcm9tICcuL21lc3NhZ2VfdHlwZXMnO1xuXG5pbXBvcnQgUGF4b3NSb2xlIGZyb20gJy4vcGF4b3Nfcm9sZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3Bvc2VyIGV4dGVuZHMgUGF4b3NSb2xlIHtcbiAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuICBwcml2YXRlIHJlY2VpdmVyTm9kZUlkczogQXJyYXk8bnVtYmVyPjtcblxuICBwcml2YXRlIHByb3Bvc2FsTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgcHJvcG9zZWRWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHJlc3BvbnNlczogQXJyYXk8UHJlcGFyZVJlc3BvbnNlPjtcbiAgcHJpdmF0ZSBpc1Byb3Bvc2luZzogYm9vbGVhbjtcblxuICBwcml2YXRlIGluaXRpYXRlZEFjY2VwdFBoYXNlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBpbml0aWFsaXplUmVjZWl2ZXJOb2RlSWRzKHJlY2VpdmVyTm9kZUlkczogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuICAgIHRoaXMucmVjZWl2ZXJOb2RlSWRzID0gcmVjZWl2ZXJOb2RlSWRzO1xuICB9XG5cbiAgZ2VuZXJhdGVQcmVwYXJlUmVxdWVzdHModmFsdWU6IHN0cmluZywgcHJvcG9zYWxOdW1iZXJUb0JlYXQ6IG51bWJlcik6IEFycmF5PFByZXBhcmVSZXF1ZXN0PiB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMucHJvcG9zYWxOdW1iZXIgPSB0aGlzLmdldE5ld1Byb3Bvc2FsTnVtYmVyKHByb3Bvc2FsTnVtYmVyVG9CZWF0KTtcbiAgICB0aGlzLnByb3Bvc2VkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzUHJvcG9zaW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzLnJlY2VpdmVyTm9kZUlkc1xuICAgICAgLm1hcCgobm9kZUlkOiBudW1iZXIpOiBQcmVwYXJlUmVxdWVzdCA9PlxuICAgICAgICA8UHJlcGFyZVJlcXVlc3Q+e1xuICAgICAgICAgIGtpbmQ6ICdQcmVwYXJlUmVxdWVzdCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgdG9Ob2RlSWQ6IG5vZGVJZCxcbiAgICAgICAgICAgIGZyb21Ob2RlSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBwcm9wb3NhbE51bWJlcjogdGhpcy5wcm9wb3NhbE51bWJlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb3Bvc2FsTnVtYmVyID0gLTE7XG4gICAgdGhpcy5wcm9wb3NlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5yZXNwb25zZXMgPSBbXTtcbiAgICB0aGlzLmlzUHJvcG9zaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWF0ZWRBY2NlcHRQaGFzZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdQcm9wb3NhbE51bWJlcihwcm9wb3NhbE51bWJlclRvQmVhdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIXByb3Bvc2FsTnVtYmVyVG9CZWF0KSB7XG4gICAgICBwcm9wb3NhbE51bWJlclRvQmVhdCA9IDA7XG4gICAgfVxuICAgIGNvbnN0IG51bU5vZGVzID0gdGhpcy5yZWNlaXZlck5vZGVJZHMubGVuZ3RoO1xuICAgIHJldHVybiAoTWF0aC5mbG9vcihwcm9wb3NhbE51bWJlclRvQmVhdCAvIG51bU5vZGVzKSArIDEpICogbnVtTm9kZXMgKyB0aGlzLmlkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlY2VpdmVQcmVwYXJlUmVxdWVzdChtZXNzYWdlOiBQcmVwYXJlUmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBpZiAobWVzc2FnZS5oZWFkZXJzLnByb3Bvc2FsTnVtYmVyID4gdGhpcy5wcm9wb3NhbE51bWJlcikge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgcHJvdGVjdGVkIHJlY2VpdmVQcmVwYXJlUmVzcG9uc2UobWVzc2FnZTogUHJlcGFyZVJlc3BvbnNlKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIGNvbnN0IHsgaGVhZGVycywgYm9keSB9ID0gbWVzc2FnZTtcblxuICAgIGlmICghdGhpcy5pc1Byb3Bvc2luZyB8fFxuICAgICAgICB0aGlzLmluaXRpYXRlZEFjY2VwdFBoYXNlIHx8XG4gICAgICAgIGhlYWRlcnMucHJvcG9zYWxOdW1iZXIgIT09IHRoaXMucHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKGJvZHkuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA+IHRoaXMucHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc3BvbnNlcy5wdXNoKG1lc3NhZ2UpO1xuXG4gICAgLy8gSWYgdGhlIG1ham9yaXR5IG9mIHJlY2VpdmVyIG5vZGVzIGhhdmVuJ3QgYWNrbm93bGVkZ2VkIHRoZSBwcmVwYXJlIHJlcXVlc3QgeWV0LCB0aGVuIGRvIG5vdGhpbmcuXG4gICAgaWYgKHRoaXMucmVzcG9uc2VzLmxlbmd0aCA8PSB0aGlzLnJlY2VpdmVyTm9kZUlkcy5sZW5ndGggLyAyKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gTWFqb3JpdHkgb2YgcmVjZWl2ZXIgbm9kZXMgaGF2ZSBhY2tub3dsZWRnZWQgdGhlIHByZXBhcmUgcmVxdWVzdCFcbiAgICB0aGlzLmluaXRpYXRlZEFjY2VwdFBoYXNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1lc3NhZ2VXaXRoSGlnaGVzdFByb3Bvc2FsTnVtYmVyID0gdGhpcy5yZXNwb25zZXNcbiAgICAgIC5yZWR1Y2UoKHByZXZNZXNzYWdlLCBuZXh0TWVzc2FnZSkgPT5cbiAgICAgICAgcHJldk1lc3NhZ2UuYm9keS5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID4gbmV4dE1lc3NhZ2UuYm9keS5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyXG4gICAgICAgID8gcHJldk1lc3NhZ2UgOiBuZXh0TWVzc2FnZVxuICAgICAgKTtcbiAgICBjb25zdCB7IGhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIsIGFjY2VwdGVkVmFsdWUgfSA9IG1lc3NhZ2VXaXRoSGlnaGVzdFByb3Bvc2FsTnVtYmVyLmJvZHk7XG4gICAgaWYgKGFjY2VwdGVkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wb3NlZFZhbHVlID0gYWNjZXB0ZWRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVBY2NlcHRSZXF1ZXN0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFjY2VwdFJlcXVlc3RzKCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5yZWNlaXZlck5vZGVJZHMubWFwKChub2RlSWQ6IG51bWJlcik6IEFjY2VwdFJlcXVlc3QgPT5cbiAgICAgIDxBY2NlcHRSZXF1ZXN0PntcbiAgICAgICAga2luZDogJ0FjY2VwdFJlcXVlc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgdG9Ob2RlSWQ6IG5vZGVJZCxcbiAgICAgICAgICBmcm9tTm9kZUlkOiB0aGlzLmlkLFxuICAgICAgICAgIHByb3Bvc2FsTnVtYmVyOiB0aGlzLnByb3Bvc2FsTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgcHJvcG9zZWRWYWx1ZTogdGhpcy5wcm9wb3NlZFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZUFjY2VwdFJlcXVlc3QobWVzc2FnZTogQWNjZXB0UmVxdWVzdCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICBpZiAobWVzc2FnZS5oZWFkZXJzLnByb3Bvc2FsTnVtYmVyID4gdGhpcy5wcm9wb3NhbE51bWJlcikge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZUFjY2VwdFJlc3BvbnNlKG1lc3NhZ2U6IEFjY2VwdFJlc3BvbnNlKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIGlmIChtZXNzYWdlLmJvZHkuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA+IHRoaXMucHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xuICBnZXRJc1Byb3Bvc2luZyA9ICgpID0+IHRoaXMuaXNQcm9wb3Npbmc7XG4gIGdldFByb3Bvc2FsTnVtYmVyID0gKCkgPT4gdGhpcy5wcm9wb3NhbE51bWJlcjtcbiAgZ2V0UHJvcG9zZWRWYWx1ZSA9ICgpID0+IHRoaXMucHJvcG9zZWRWYWx1ZTtcbiAgZ2V0TnVtUmVzcG9uc2VzID0gKCkgPT4gdGhpcy5yZXNwb25zZXMubGVuZ3RoO1xuICBnZXRQaGFzZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuaXNQcm9wb3NpbmcpIHtcbiAgICAgIHJldHVybiAnTi9BJztcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmluaXRpYXRlZEFjY2VwdFBoYXNlKSB7XG4gICAgICByZXR1cm4gJ1ByZXBhcmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ0FjY2VwdCc7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgUHJlcGFyZVJlcXVlc3QsXG4gIFByZXBhcmVSZXNwb25zZSxcbiAgQWNjZXB0UmVxdWVzdCxcbiAgQWNjZXB0UmVzcG9uc2UsXG4gIE1lc3NhZ2UsXG59IGZyb20gJy4vbWVzc2FnZV90eXBlcyc7XG5cbmltcG9ydCBQYXhvc1JvbGUgZnJvbSAnLi9wYXhvc19yb2xlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjZWl2ZXIgZXh0ZW5kcyBQYXhvc1JvbGUge1xuICBwcml2YXRlIGlkOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgYWNjZXB0ZWRWYWx1ZTogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyID0gLTE7XG4gICAgdGhpcy5hY2NlcHRlZFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNlaXZlUHJlcGFyZVJlcXVlc3QobWVzc2FnZTogUHJlcGFyZVJlcXVlc3QpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgY29uc3QgeyBoZWFkZXJzIH0gPSBtZXNzYWdlO1xuXG4gICAgY29uc3QgaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA9IHRoaXMuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcjtcbiAgICBjb25zdCBhY2NlcHRlZFZhbHVlID0gdGhpcy5hY2NlcHRlZFZhbHVlO1xuXG4gICAgaWYgKGhlYWRlcnMucHJvcG9zYWxOdW1iZXIgPiB0aGlzLmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIpIHtcbiAgICAgIHRoaXMuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA9IGhlYWRlcnMucHJvcG9zYWxOdW1iZXI7XG4gICAgICB0aGlzLmFjY2VwdGVkVmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICA8UHJlcGFyZVJlc3BvbnNlPntcbiAgICAgICAga2luZDogJ1ByZXBhcmVSZXNwb25zZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICB0b05vZGVJZDogaGVhZGVycy5mcm9tTm9kZUlkLFxuICAgICAgICAgIGZyb21Ob2RlSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgcHJvcG9zYWxOdW1iZXI6IGhlYWRlcnMucHJvcG9zYWxOdW1iZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyOiBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyLFxuICAgICAgICAgIGFjY2VwdGVkVmFsdWU6IGFjY2VwdGVkVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgXTtcbiAgfTtcblxuICBwcm90ZWN0ZWQgcmVjZWl2ZVByZXBhcmVSZXNwb25zZShtZXNzYWdlOiBQcmVwYXJlUmVzcG9uc2UpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlY2VpdmVBY2NlcHRSZXF1ZXN0KG1lc3NhZ2U6IEFjY2VwdFJlcXVlc3QpOiBBcnJheTxNZXNzYWdlPiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBib2R5IH0gPSBtZXNzYWdlO1xuXG4gICAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG4gICAgaWYgKGhlYWRlcnMucHJvcG9zYWxOdW1iZXIgPj0gdGhpcy5oaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyKSB7XG4gICAgICB0aGlzLmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIgPSBoZWFkZXJzLnByb3Bvc2FsTnVtYmVyO1xuICAgICAgdGhpcy5hY2NlcHRlZFZhbHVlID0gYm9keS5wcm9wb3NlZFZhbHVlO1xuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgPEFjY2VwdFJlc3BvbnNlPntcbiAgICAgICAga2luZDogJ0FjY2VwdFJlc3BvbnNlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIHRvTm9kZUlkOiBoZWFkZXJzLmZyb21Ob2RlSWQsXG4gICAgICAgICAgZnJvbU5vZGVJZDogdGhpcy5pZCxcbiAgICAgICAgICBwcm9wb3NhbE51bWJlcjogaGVhZGVycy5wcm9wb3NhbE51bWJlcixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGFjY2VwdGVkOiBhY2NlcHRlZCxcbiAgICAgICAgICBoaWdoZXN0U2VlblByb3Bvc2FsTnVtYmVyOiB0aGlzLmhpZ2hlc3RTZWVuUHJvcG9zYWxOdW1iZXIsXG4gICAgICAgICAgYWNjZXB0ZWRWYWx1ZTogYWNjZXB0ZWQgPyB0aGlzLmFjY2VwdGVkVmFsdWUgOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjZWl2ZUFjY2VwdFJlc3BvbnNlKG1lc3NhZ2U6IEFjY2VwdFJlc3BvbnNlKTogQXJyYXk8TWVzc2FnZT4ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldElkID0gKCkgPT4gdGhpcy5pZDtcbiAgZ2V0QWNjZXB0ZWRWYWx1ZSA9ICgpID0+IHRoaXMuYWNjZXB0ZWRWYWx1ZTtcbiAgZ2V0SGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlciA9ICgpID0+IHRoaXMuaGlnaGVzdFNlZW5Qcm9wb3NhbE51bWJlcjtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FwcFN0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FwcFN0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9hcHBTdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9