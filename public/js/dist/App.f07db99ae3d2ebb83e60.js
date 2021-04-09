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

eval("const Question = {\n  coding3: [{\n    question: \"Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-place\",\n    qSubDomain: 'Coding',\n    subLanguageBoolean: false,\n    subLanguages: '',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: '',\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'Coding',\n      percentile: null\n    }]\n  }, {\n    question: \"You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.\",\n    qSubDomain: 'Coding',\n    subLanguageBoolean: false,\n    subLanguages: '',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: '',\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'Coding',\n      percentile: null\n    }]\n  }, {\n    question: \"Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.\",\n    qSubDomain: 'Coding',\n    subLanguageBoolean: false,\n    subLanguages: '',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: '',\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'Coding',\n      percentile: null\n    }]\n  }, {\n    question: \"Reverse the order of words in a given sentence (an array of characters).\",\n    qSubDomain: 'Coding',\n    subLanguageBoolean: false,\n    subLanguages: '',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: '',\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'Coding',\n      percentile: null\n    }]\n  }],\n  FETech3: [{\n    question: \"Create a pet store homepage with Sass.\",\n    qSubDomain: 'UI Design and Tools',\n    subLanguageBoolean: true,\n    subLanguages: 'React/Angular/Vue, HTML, CSS',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: \"How does the candidate create their UI? Tools used depend on your company and candidate's focus.\",\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'UI Tools',\n      percentile: null\n    }]\n  }, {\n    question: \"Create a navbar using React/Angular/Vue router.\",\n    qSubDomain: 'UI Design and Tools',\n    subLanguageBoolean: true,\n    subLanguages: 'React/Angular/Vue, HTML, CSS',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: \"How does the candidate create their UI? Tools used depend on your company and candidate's focus.\",\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'UI Tools',\n      percentile: null\n    }]\n  }, {\n    question: \"Make an API request from omdb.\",\n    qSubDomain: 'UI Design and Tools',\n    subLanguageBoolean: true,\n    subLanguages: 'React/Angular/Vue, HTML, CSS',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: \"How does the candidate create their UI? Tools used depend on your company and candidate's focus.\",\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'UI Tools',\n      percentile: null\n    }]\n  }, {\n    question: \"Use media queries in css to create a reactive webpage.\",\n    qSubDomain: 'UI Design and Tools',\n    subLanguageBoolean: true,\n    subLanguages: 'React/Angular/Vue, HTML, CSS',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: \"How does the candidate create their UI? Tools used depend on your company and candidate's focus.\",\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'UI Tools',\n      percentile: null\n    }]\n  }],\n  DS3: ['Distributed systems Level 3 (Question A).', 'Distributed systems Level 3 (Question B).'],\n  culture3: [{\n    question: \"Describe the personality of a manager who you\\u2019d never want to work for.\",\n    qSubDomain: 'Culture Add',\n    subLanguageBoolean: false,\n    subLanguages: '',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: 'This interview should look for candidate who will add to your culture rather than be a clone of your existing team. Start with the main question then ask them to talk through examples. Keep asking open ended who/what/when/where/how type questions about their working style, what they like to work on and what kind of managers they perform best with.',\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'UI Tools',\n      percentile: null\n    }]\n  }, {\n    question: \"How would your last manager describe you? What about your past colleagues?\",\n    qSubDomain: 'Culture Add',\n    subLanguageBoolean: false,\n    subLanguages: '',\n    interviewerName: '',\n    interviewerEmail: '',\n    lookFor: 'This interview should look for candidate who will add to your culture rather than be a clone of your existing team. Start with the main question then ask them to talk through examples. Keep asking open ended who/what/when/where/how type questions about their working style, what they like to work on and what kind of managers they perform best with.',\n    started: false,\n    completed: false,\n    rawCode: '',\n    notes: '',\n    summary: '',\n    scores: [{\n      scoreType: 'Works well in large, structured orgs.',\n      percentile: null\n    }, {\n      scoreType: 'Works well in small or ambiguous orgs.',\n      percentile: null\n    }, {\n      scoreType: 'Slow, through worker.',\n      percentile: null\n    }, {\n      scoreType: 'Moves fast, breaks things.',\n      percentile: null\n    }]\n  }],\n  coding4: [\"Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-placeA\", \"You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.\", \"Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.\", \"Reverse the order of words in a given sentence (an array of characters).\"],\n  FETech4: ['Create a pet store homepage with Sass.', 'Create a navbar using react router.', 'Make an API request from omdb.', 'Use media queries in css to create a reactive webpage.'],\n  DS4: ['Distributed systems Level 4 (Question A).', 'Distributed systems Level 4 (Question B).'],\n  culture4: [\"Describe the personality of a manager who you\\u2019d never want to work for.\", \"How would your last manager describe you? What about your past colleagues?\"],\n  coding5: [\"Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-placeA\", \"You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.\", \"Convert a binary tree to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.\", \"Reverse the order of words in a given sentence (an array of characters).\"],\n  FETech5: ['Create a pet store homepage with Sass.', 'Create a navbar using react router.', 'Make an API request from omdb.', 'Use media queries in css to create a reactive webpage.'],\n  DS5: ['Distributed systems Level 5 (Question A).', 'Distributed systems Level 5 (Question B).'],\n  SD5: ['System Design Level 5 (Question A).', 'System Design Level 5 (Question B).'],\n  culture5: [\"Describe the personality of a manager who you\\u2019d never want to work for.\", \"How would your last manager describe you? What about your past colleagues?\"]\n};\nmodule.exports = Question;\n\n//# sourceURL=webpack:///./models/questionModel.js?");

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

/***/ "./src/components/HmDashboard.js":
/*!***************************************!*\
  !*** ./src/components/HmDashboard.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return HmDashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/Table.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/TableBody.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/TableCell.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/TableHead.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/TableRow.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  }\n}));\nfunction HmDashboard(props) {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    maxWidth: \"lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    size: \"small\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Candidate\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Level\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Domain\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Main Language\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], null, props.slates.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    key: item.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: \"/\".concat(item._id)\n  }, item.candidateName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, item.level), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, item.domain), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, item.codingLanguage))))))));\n}\n\n//# sourceURL=webpack:///./src/components/HmDashboard.js?");

/***/ }),

/***/ "./src/components/InterviewEditComponent.js":
/*!**************************************************!*\
  !*** ./src/components/InterviewEditComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return InterviewEditComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Save */ \"./node_modules/@material-ui/icons/Save.js\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"./node_modules/@material-ui/icons/Delete.js\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/FormControl/FormControl.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/TextField.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slider */ \"./node_modules/@material-ui/core/esm/Slider/Slider.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"])(theme => ({\n  root: {\n    flexGrow: 1,\n    flexWrap: 'wrap'\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: '25ch'\n  }\n}));\n\nfunction valuetext(value) {\n  return \"\".concat(value, \"%\");\n}\n\nfunction InterviewEditComponent(_ref) {\n  let {\n    item,\n    onCancel,\n    onSave\n  } = _ref;\n  const classes = useStyles();\n  const [rawCode, setRawCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(item.rawCode);\n  const [notes, setNotes] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(item.notes);\n  const [summary, setSummary] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(item.summary);\n  const [scores, setScores] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(item.scores);\n  const handleSave = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    const updatedItem = _objectSpread(_objectSpread({}, item), {}, {\n      rawCode,\n      notes,\n      summary,\n      scores\n    });\n\n    onSave(updatedItem);\n  }, [rawCode, notes, summary, scores]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Conduct Interview\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Main Question: \", item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Interview type:\", item.qSubDomain, item.subLanguageBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \", \", item.subLanguages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"What to look for: \", item.lookFor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    id: \"outlined-full-width\",\n    label: \"Paste Candidate's Code\",\n    style: {\n      margin: 8\n    },\n    value: rawCode,\n    onChange: e => setRawCode(e.target.value),\n    helperText: \"\",\n    fullWidth: true,\n    margin: \"normal\",\n    InputLabelProps: {\n      shrink: true\n    },\n    variant: \"filled\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    id: \"outlined-full-width\",\n    label: \"Live Interview Notes\",\n    style: {\n      margin: 8\n    },\n    value: notes,\n    onChange: e => setNotes(e.target.value),\n    helperText: \"\",\n    fullWidth: true,\n    margin: \"normal\",\n    InputLabelProps: {\n      shrink: true\n    },\n    variant: \"filled\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    id: \"outlined-full-width\",\n    label: \"Post-interview Summary\",\n    style: {\n      margin: 8\n    },\n    value: summary,\n    onChange: e => setSummary(e.target.value),\n    helperText: \"\",\n    fullWidth: true,\n    margin: \"normal\",\n    InputLabelProps: {\n      shrink: true\n    },\n    variant: \"filled\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], {\n    id: \"discrete-slider\",\n    gutterBottom: true\n  }, \"Percentile relative to others at same level\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    defaultValue: item.scores.percentile,\n    getAriaValueText: valuetext,\n    \"aria-labelledby\": \"discrete-slider\",\n    valueLabelDisplay: \"auto\",\n    step: 10,\n    marks: true,\n    min: 0,\n    max: 90\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_2___default.a, null),\n    variant: \"outlined\",\n    size: \"small\",\n    onClick: handleSave\n  }, \"Save\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, null),\n    variant: \"outlined\",\n    size: \"small\",\n    onClick: () => onCancel(false)\n  }, \"Close\"));\n}\n\n//# sourceURL=webpack:///./src/components/InterviewEditComponent.js?");

/***/ }),

/***/ "./src/components/InterviewShowComponent.js":
/*!**************************************************!*\
  !*** ./src/components/InterviewShowComponent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/InterviewShowComponent.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-expand-md navbar-light bg-light sticky-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container-fluid justify-content-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarResponsive\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarResponsive\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"navbar-nav ml-auto\"\n  }, props.routes.filter(item => !item.path.includes(':')).map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      className: \"nav-link\",\n      key: key,\n      to: path\n    }, key));\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/SlateCreator.js":
/*!****************************************!*\
  !*** ./src/components/SlateCreator.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return SlateCreator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_InterviewEditComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InterviewEditComponent */ \"./src/components/InterviewEditComponent.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/Button.js\");\n/* harmony import */ var _material_ui_icons_DeveloperModeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/DeveloperModeOutlined */ \"./node_modules/@material-ui/icons/DeveloperModeOutlined.js\");\n/* harmony import */ var _material_ui_icons_DeveloperModeOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeveloperModeOutlined__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _InterviewShowComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InterviewShowComponent */ \"./src/components/InterviewShowComponent.js\");\n/* harmony import */ var _InterviewShowComponent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_InterviewShowComponent__WEBPACK_IMPORTED_MODULE_5__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"])(theme => ({\n  root: {\n    flexGrow: 1,\n    flexWrap: 'wrap'\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: '25ch'\n  }\n}));\n\nfunction valuetext(value) {\n  return \"\".concat(value, \"%\");\n}\n\nfunction SlateCreator(props) {\n  const [slate, setSlate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.slate);\n  const classes = useStyles();\n  const [showScoreCard, setShowScoreCard] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const handleSave = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])((updatedItem, index) => {\n    const questions = [...slate.questions];\n    questions.splice(index, 1, updatedItem);\n\n    const updatedSlate = _objectSpread(_objectSpread({}, slate), {}, {\n      questions\n    });\n\n    setSlate(updatedSlate);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Candidate: \", slate.candidateName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Coding Language: \", slate.codingLanguage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Level: \", slate.level), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Domain: \", slate.domain), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://localhost:3000/\".concat(props.slate._id)\n  }, \"Share Link\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"justify-content-start\"\n  }, slate.questions.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      className: \"card padding\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeveloperModeOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, null),\n      variant: \"outlined\",\n      size: \"small\",\n      disabled: showScoreCard == item._id,\n      onClick: () => setShowScoreCard(item._id)\n    }, \"Conduct Interview\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Interviewer: \", item.interviewerName, \" | \", item.qSubDomain)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-body\"\n    }, showScoreCard !== item._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Main Question: \", item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Interview type:\", item.qSubDomain, item.subLanguageBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \", \", item.subLanguages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"What to look for: \", item.lookFor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Candidate's code: \", item.rawCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Interviewer code notes: \", item.notes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Post-interview summary: \", item.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Scores:\", ' ', item.scores.map((subItem, i) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: i\n      }, subItem.scoreType, \": \", subItem.percentile, \"%\");\n    })))), showScoreCard === item._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InterviewEditComponent__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      item: item,\n      onSave: updatedItem => handleSave(updatedItem, index),\n      onCancel: () => setShowScoreCard(0)\n    })));\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/SlateCreator.js?");

/***/ }),

/***/ "./src/components/SlateCreatorForm.js":
/*!********************************************!*\
  !*** ./src/components/SlateCreatorForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlateCreator */ \"./src/components/SlateCreator.js\");\n/* harmony import */ var _models_rubricModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/rubricModel */ \"./models/rubricModel.js\");\n/* harmony import */ var _models_rubricModel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_rubricModel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/questionModel */ \"./models/questionModel.js\");\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_questionModel__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\nconst question = _models_questionModel__WEBPACK_IMPORTED_MODULE_3___default.a;\nfunction SlateCreatorForm(props) {\n  const [dash, setDash] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [slate, setSlate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const refCandidateName = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n  const refCodingLanguage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n  const refLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n  const refDomain = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])('');\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      const slateMap = _models_rubricModel__WEBPACK_IMPORTED_MODULE_2___default.a[refLevel.current.value][refDomain.current.value];\n      let num = 0;\n      const usedQuestion = [''];\n      const newSlate = slateMap.map(item => {\n        //This is a recursive callback to make sure each question is unique for this slate:\n        const getNum = () => {\n          num = Math.floor(Math.random() * question[item].length);\n          const uniqueItem = item + num;\n\n          if (usedQuestion.indexOf(uniqueItem) >= 0) {\n            getNum();\n          } else {\n            usedQuestion.push(uniqueItem);\n          }\n        };\n\n        getNum(); //!! in order to save which type of question is being asked, I need to refactor this part:\n\n        return question[item][num]; // return ({question[item][num], slateMap[item][num]});\n      });\n\n      try {\n        const response = yield fetch('/api/slates', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            candidateName: refCandidateName.current.value,\n            codingLanguage: refCodingLanguage.current.value,\n            domain: refDomain.current.value,\n            level: refLevel.current.value,\n            questions: newSlate,\n            active: true\n          })\n        });\n        const data = yield response.json();\n        yield setSlate(data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-control border-0\"\n  }, !slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Candidate Name \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: refCandidateName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Coding Language \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: refCodingLanguage\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Level\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"form-select\",\n    \"aria-label\": \"Default select example\",\n    ref: refLevel\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    defaultValue: true\n  }, \"Experience Level\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"3\"\n  }, \"Level 3 (Jr SWE)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"4\"\n  }, \"Level 4 (Mid SWE)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"5\"\n  }, \"Level 5 (Sr SWE)\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Domain\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"form-select\",\n    \"aria-label\": \"Default select example\",\n    ref: refDomain\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    defaultValue: true\n  }, \"SWE Domain\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"FE\"\n  }, \"Frontend\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"BE\"\n  }, \"Backend\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"Infra\"\n  }, \"Infra\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"btn btn-outline-dark\",\n    type: \"submit\",\n    value: 'Make a Slate'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlateCreator__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    slate: slate\n  }))));\n}\n\n//# sourceURL=webpack:///./src/components/SlateCreatorForm.js?");

/***/ }),

/***/ "./src/components/hmDashboard.js":
/*!***************************************!*\
  !*** ./src/components/hmDashboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/Table.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/TableBody.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/TableCell.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/TableHead.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/TableRow.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  }\n}));\nfunction HmDashboard(props) {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    maxWidth: \"lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    size: \"small\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Candidate\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Level\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Domain\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, \"Main Language\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], null, props.slates.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    key: item.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: \"/\".concat(item._id)\n  }, item.candidateName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, item.level), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, item.domain), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, item.codingLanguage))))))));\n}\n\n//# sourceURL=webpack:///./src/components/hmDashboard.js?");

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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SlateCreator */ \"./src/components/SlateCreator.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/context/index.js\");\n/* harmony import */ var _components_SlateCreatorForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SlateCreatorForm */ \"./src/components/SlateCreatorForm.js\");\n/* harmony import */ var _components_HmDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HmDashboard */ \"./src/components/HmDashboard.js\");\n/* harmony import */ var _models_rubricModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/rubricModel */ \"./models/rubricModel.js\");\n/* harmony import */ var _models_rubricModel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_rubricModel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/questionModel */ \"./models/questionModel.js\");\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_questionModel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/Grid.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/Paper.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n //import rubricModel from '../models/rubricModel';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n //Material UI style created in sandbox templates: https://codesandbox.io/s/1l8ej?file=/demo.js:27-382\n\nconst question = _models_questionModel__WEBPACK_IMPORTED_MODULE_6___default.a;\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"])(() => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    padding: '20px',\n    width: '-webkit-fill-available',\n    maxWidth: '900px',\n    alignItems: 'center',\n    '& > * + *': {\n      marginTop: '25px'\n    }\n  }\n}));\nfunction App(props) {\n  const classes = useStyles();\n  const [slate, setSlate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [slates, setSlates] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(); //UseEffect might solve the issue getting HmDashboard to load on start. Set slates on start\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('http://localhost:3000/api/dashboards');\n        const data = yield response.json();\n        setSlates(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    container: true,\n    spacing: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"], {\n    item: true,\n    xs: 9\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__[/* default */ \"a\"], {\n    className: classes.paper\n  }, slates && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HmDashboard__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    slates: slates\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

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

/***/ "./src/pages/DashShow.js":
/*!*******************************!*\
  !*** ./src/pages/DashShow.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return DashShow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SlateCreator */ \"./src/components/SlateCreator.js\");\n/* harmony import */ var _components_HmDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HmDashboard */ \"./src/components/HmDashboard.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction DashShow(props) {\n  const [slates, setSlates] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  console.log('HM Dash show - pre useEffect');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        // const response = await fetch(`/api/interview-app-test/${props.match.params.id}`);\n        const response = yield fetch(\"/api/dashboards\");\n        const data = yield response.json();\n        setSlates(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []); // {slates && <div> </>}\n  // {!slates && <div>Dashboard not found</div>}\n  //<HmDashboard slates={slates} />\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, slates && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HmDashboard__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    slates: slates\n  }), !slates && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Dashboard not found\"));\n}\n\n//# sourceURL=webpack:///./src/pages/DashShow.js?");

/***/ }),

/***/ "./src/pages/HowTo.js":
/*!****************************!*\
  !*** ./src/pages/HowTo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction HowTo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"How-To Guide for Interviewing Engineers\")));\n}\n\n//# sourceURL=webpack:///./src/pages/HowTo.js?");

/***/ }),

/***/ "./src/pages/InterviewShow.js":
/*!************************************!*\
  !*** ./src/pages/InterviewShow.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return InterviewShow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SlateCreator */ \"./src/components/SlateCreator.js\");\n/* harmony import */ var _components_hmDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hmDashboard */ \"./src/components/hmDashboard.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction InterviewShow(props) {\n  // const [slate, setSlate] = useState();\n  console.log('slate show - pre useEffect'); // useEffect(() => {\n  // \t(async () => {\n  // \t\ttry {\n  // \t\t\tconst response = await fetch(`/api/slates/${props.match.params.id}/`);\n  // \t\t\tconst data = await response.json();\n  // \t\t\tsetSlate(data);\n  // \t\t} catch (error) {\n  // \t\t\tconsole.error(error);\n  // \t\t}\n  // \t})();\n  // }, []);\n  // I think this doesn't need a page but rather a component which is shown in the SlateShow page.\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"No slates working\"));\n}\n\n//# sourceURL=webpack:///./src/pages/InterviewShow.js?");

/***/ }),

/***/ "./src/pages/SlateShow.js":
/*!********************************!*\
  !*** ./src/pages/SlateShow.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return SlateShow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SlateCreator */ \"./src/components/SlateCreator.js\");\n/* harmony import */ var _components_hmDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hmDashboard */ \"./src/components/hmDashboard.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nfunction SlateShow(props) {\n  const [slate, setSlate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  console.log('slate show - pre useEffect');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/slates/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setSlate(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []); //can I use react switch or something similar here or in slate creator to show each interview?\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SlateCreator__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    slate: slate\n  }), !slate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Slate not found\"));\n}\n\n//# sourceURL=webpack:///./src/pages/SlateShow.js?");

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
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_SlateShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/SlateShow */ \"./src/pages/SlateShow.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Contact */ \"./src/pages/Contact.js\");\n/* harmony import */ var _pages_HowTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/HowTo */ \"./src/pages/HowTo.js\");\n/* harmony import */ var _pages_DashShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/DashShow */ \"./src/pages/DashShow.js\");\n/* harmony import */ var _pages_InterviewShow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/InterviewShow */ \"./src/pages/InterviewShow.js\");\n\n\n\n\n\n\n\nconst routes = [{\n  Component: _pages_DashShow__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n  key: 'Dashboard',\n  path: '/dashboard'\n}, {\n  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Contact',\n  path: '/contact'\n}, {\n  Component: _pages_SlateShow__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'SlateShow',\n  path: '/:id'\n}, {\n  Component: _pages_InterviewShow__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"],\n  key: 'InterviewShow',\n  path: '/:id/:id2'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });