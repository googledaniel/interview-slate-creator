/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/questionModel.js":
/*!*********************************!*\
  !*** ./models/questionModel.js ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("const Question = {\n  coding3: [\"Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-placeA\", \"You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.\", \"Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.\", \"Reverse the order of words in a given sentence (an array of characters).\"],\n  FETech3: ['Create a pet store homepage with Sass.', 'Create a navbar using react router.', 'Make an API request from omdb.', 'Use media queries in css to create a reactive webpage.'],\n  DS3: ['Distributed systems Level 3 (Question A).', 'Distributed systems Level 3 (Question B).'],\n  culture3: [\"Describe the personality of a manager who you\\u2019d never want to work for.\", \"How would your last manager describe you? What about your past colleagues?\"],\n  coding4: [\"Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-placeA\", \"You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.\", \"Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.\", \"Reverse the order of words in a given sentence (an array of characters).\"],\n  FETech4: ['Create a pet store homepage with Sass.', 'Create a navbar using react router.', 'Make an API request from omdb.', 'Use media queries in css to create a reactive webpage.'],\n  DS4: ['Distributed systems Level 4 (Question A).', 'Distributed systems Level 4 (Question B).'],\n  culture4: [\"Describe the personality of a manager who you\\u2019d never want to work for.\", \"How would your last manager describe you? What about your past colleagues?\"],\n  coding5: [\"Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-placeA\", \"You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.\", \"Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.\", \"Reverse the order of words in a given sentence (an array of characters).\"],\n  FETech5: ['Create a pet store homepage with Sass.', 'Create a navbar using react router.', 'Make an API request from omdb.', 'Use media queries in css to create a reactive webpage.'],\n  DS5: ['Distributed systems Level 5 (Question A).', 'Distributed systems Level 5 (Question B).'],\n  SD5: ['System Design Level 5 (Question A).', 'System Design Level 5 (Question B).'],\n  culture5: [\"Describe the personality of a manager who you\\u2019d never want to work for.\", \"How would your last manager describe you? What about your past colleagues?\"]\n};\nmodule.exports = Question;\n\n//# sourceURL=webpack:///./models/questionModel.js?");

/***/ }),

/***/ "./models/rubricModel.js":
/*!*******************************!*\
  !*** ./models/rubricModel.js ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("const rubricModel = {\n  3: {\n    FE: ['coding3', 'coding3', 'FETech3', 'FETech3', 'culture3'],\n    BE: ['coding3', 'coding3', 'coding3', 'coding3', 'culture3'],\n    Infra: ['coding3', 'coding3', 'DS3', 'DS3', 'culture3']\n  },\n  4: {\n    FE: ['coding4', 'coding4', 'FETech4', 'FETech4', 'culture4'],\n    BE: ['coding4', 'coding4', 'coding4', 'coding4', 'culture4'],\n    Infra: ['coding4', 'coding4', 'DS4', 'DS4', 'culture4']\n  },\n  5: {\n    FE: ['coding5', 'SD5', 'FETech5', 'FETech5', 'culture5'],\n    BE: ['coding5', 'coding5', 'coding5', 'SD5', 'culture5'],\n    Infra: ['coding5', 'coding5', 'DS5', 'SD5', 'culture5']\n  }\n};\nmodule.exports = rubricModel;\n\n//# sourceURL=webpack:///./models/rubricModel.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlateCreator */ \"./src/components/SlateCreator.js\");\n\n\nfunction Form(_ref) {\n  let {\n    onFormSubmit = f => f\n  } = _ref;\n  const level = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const domain = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    className: \"form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Level: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: level\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form-label\"\n  }, \"Domain: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: domain\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: 'Make a Slate',\n    className: \"form-label\"\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/Form.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-expand-md navbar-light bg-light sticky-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container-fluid justify-content-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarResponsive\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarResponsive\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"navbar-nav ml-auto\"\n  }, props.routes.filter(item => !item.path.includes(':')).map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      className: \"nav-link\",\n      key: key,\n      to: path\n    }, key));\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/SlateCreator.js":
/*!****************************************!*\
  !*** ./src/components/SlateCreator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SlateCreator(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Candidate: \", props.slate.candidateName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Coding Language: \", props.slate.codingLanguage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Level: \", props.slate.level), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Domain: \", props.slate.domain), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"localhost3000/\".concat(props.slate._id)\n  }, \"Share Link\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"justify-content-start\"\n  }, props.slate.questions.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card padding\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"localhost3000/}\"\n    }, \"Interview \", index + 1), \"[Interviewer Name] | [Rubric Category]\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", {\n      className: \"card-text\"\n    }, item)));\n  })));\n} // \treturn (\n// \t\t<div>\n// \t\t\t<h3>Candidate: {props.slate.candidateName}</h3>\n// \t\t\t<p>Coding Language: {props.slate.codingLanguage}</p>\n// \t\t\t<p>Level: {props.slate.level}</p>\n// \t\t\t<p>Domain: {props.slate.domain}</p>\n// \t\t\t<p>\n// \t\t\t\t<a href={`https://interview-creator.herokuapp.com/${props.slate._id}`}>\n// \t\t\t\t\tShare Link\n// \t\t\t\t</a>\n// \t\t\t</p>\n//\n// \t\t\t<ul className=\"justify-content-start\">\n// \t\t\t\t{props.slate.questions.map((item, index) => {\n// \t\t\t\t\treturn (\n// \t\t\t\t\t\t<div className=\"card padding\">\n// \t\t\t\t\t\t\t<div className=\"card-header text-center\">\n// \t\t\t\t\t\t\t\tInterview {index + 1}\n// \t\t\t\t\t\t\t</div>\n// \t\t\t\t\t\t\t<div className=\"card-body\">\n// \t\t\t\t\t\t\t\t<blockquote className=\"card-text\">{item}</blockquote>\n// \t\t\t\t\t\t\t</div>\n// \t\t\t\t\t\t</div>\n// \t\t\t\t\t);\n// \t\t\t\t})}\n// \t\t\t</ul>\n// \t\t</div>\n// \t);\n// }\n\n//# sourceURL=webpack:///./src/components/SlateCreator.js?");

/***/ }),

/***/ "./src/context/index.js":
/*!******************************!*\
  !*** ./src/context/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OurContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n/* unused harmony default export */ var _unused_webpack_default_export = (OurContext);\n\n//# sourceURL=webpack:///./src/context/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n // import App from './components/App';\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SlateCreator */ \"./src/components/SlateCreator.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/context/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ \"./src/components/Form.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/Dashboard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _models_rubricModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/rubricModel */ \"./models/rubricModel.js\");\n/* harmony import */ var _models_rubricModel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_rubricModel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/questionModel */ \"./models/questionModel.js\");\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_questionModel__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // import SlateCreator from './SlateCreator';\n//import rubricModel from '../models/rubricModel';\n\n\n\n\n\n\n\nconst question = _models_questionModel__WEBPACK_IMPORTED_MODULE_6___default.a;\nfunction App(props) {\n  const [slate, setSlate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const refCandidateName = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n  const refCodingLanguage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n  const refLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n  const refDomain = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      const slateMap = _models_rubricModel__WEBPACK_IMPORTED_MODULE_5___default.a[refLevel.current.value][refDomain.current.value];\n      let num = 0;\n      const usedQuestion = [''];\n      const newSlate = slateMap.map(item => {\n        //This is a recursive callback to make sure each question is unique for this slate:\n        const getNum = () => {\n          num = Math.floor(Math.random() * question[item].length);\n          const uniqueItem = item + num;\n\n          if (usedQuestion.indexOf(uniqueItem) >= 0) {\n            getNum();\n          } else {\n            usedQuestion.push(uniqueItem);\n          }\n        };\n\n        getNum();\n        return question[item][num];\n      });\n\n      try {\n        const response = yield fetch('/api/slates', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            candidateName: refCandidateName.current.value,\n            codingLanguage: refCodingLanguage.current.value,\n            domain: refDomain.current.value,\n            level: refLevel.current.value,\n            questions: newSlate\n          })\n        });\n        const data = yield response.json();\n        yield setSlate(data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container-fluid \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"jumbotron\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"display-4\"\n  }, \"Interview Creator\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"lead\"\n  }, \"A software engineering slate creator for hiring managers.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-control border-0\"\n  }, !slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Candidate Name \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: refCandidateName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Coding Language \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: refCodingLanguage\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Level\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"form-select\",\n    \"aria-label\": \"Default select example\",\n    ref: refLevel\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    defaultValue: true\n  }, \"Experience Level\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"3\"\n  }, \"Level 3 (Jr SWE)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"4\"\n  }, \"Level 4 (Mid SWE)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"5\"\n  }, \"Level 5 (Sr SWE)\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Domain\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"form-select\",\n    \"aria-label\": \"Default select example\",\n    ref: refDomain\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    defaultValue: true\n  }, \"SWE Domain\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"FE\"\n  }, \"Frontend\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"BE\"\n  }, \"Backend\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"Infra\"\n  }, \"Infra\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"btn btn-outline-dark\",\n    type: \"submit\",\n    value: 'Make a Slate'\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/Dashboard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    slate: slate\n  }))));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Contact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Contact(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Contact\")));\n}\n\n//# sourceURL=webpack:///./src/pages/Contact.js?");

/***/ }),

/***/ "./src/pages/HowTo.js":
/*!****************************!*\
  !*** ./src/pages/HowTo.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return HowTo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction HowTo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"How-To Guide for Interviewing Engineers\")));\n}\n\n//# sourceURL=webpack:///./src/pages/HowTo.js?");

/***/ }),

/***/ "./src/pages/SlateShow.js":
/*!********************************!*\
  !*** ./src/pages/SlateShow.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return SlateShow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SlateCreator */ \"./src/components/SlateCreator.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/Dashboard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction SlateShow(props) {\n  const [slate, setSlate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  console.log('slate show - pre useEffect');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/slates/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setSlate(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/Dashboard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    slate: slate\n  }), !slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Slate not found\"));\n}\n\n//# sourceURL=webpack:///./src/pages/SlateShow.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst AppRouter = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props))\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_SlateShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/SlateShow */ \"./src/pages/SlateShow.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Contact */ \"./src/pages/Contact.js\");\n/* harmony import */ var _pages_HowTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/HowTo */ \"./src/pages/HowTo.js\");\n\n\n\n\n\nconst routes = [{\n  Component: _pages_SlateShow__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'SlateShow',\n  path: '/:id'\n}, {\n  Component: _pages_HowTo__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'HowTo',\n  path: '/howto'\n}, {\n  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Contact',\n  path: '/contact'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });