/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/hash.js":
/*!*************************!*\
  !*** ./modules/hash.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HashMap)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./modules/node.js\");\n\r\n\r\nclass HashMap {\r\n    constructor() {\r\n       this.buckets = new Array(16)\r\n    }\r\n\r\n    hash(key) {\r\n        let hashCode = 0;\r\n      \r\n        const primeNumber = 31;\r\n        for (let i = 0; i < key.length; i++) {\r\n            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;\r\n        }\r\n\r\n        return hashCode;\r\n    }\r\n\r\n    set(key, value) {\r\n        let index = this.hash(key);\r\n\r\n        if (this.buckets[index] !== '' && this.buckets[index] === value) {\r\n            this.buckets[index] = value;\r\n        } else {\r\n            \r\n            this.buckets[index] = value;\r\n        }\r\n\r\n    }\r\n\r\n    value(index) {\r\n        console.log(this.buckets[index]);\r\n        console.log(this.buckets);\r\n    }\r\n}\n\n//# sourceURL=webpack://hash-map/./modules/hash.js?");

/***/ }),

/***/ "./modules/node.js":
/*!*************************!*\
  !*** ./modules/node.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\r\n    constructor(data = null, next = null, index) {\r\n        this.data = data;\r\n        this.next = next;\r\n        this.index = index;\r\n    }\r\n}\n\n//# sourceURL=webpack://hash-map/./modules/node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/hash */ \"./modules/hash.js\");\n\r\n\r\nlet hashMap = new _modules_hash__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconsole.log(hashMap.set('Car', 'fsdf'));\r\n\r\nhashMap.value(4);\r\n\r\nconsole.log(hashMap.set('Car', 'trtr'));\r\n\r\nhashMap.value(4);\r\n\r\nhashMap.set('Mano', 'Farci')\r\n\r\nhashMap.value(5)\r\n\r\nhashMap.set('Mano', 'tff')\r\n\r\nhashMap.value(5)\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://hash-map/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;