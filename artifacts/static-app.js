(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "http://otmdispatch.com/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logo_Logo_Light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _images_logo_Logo_Light_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logo_Logo_Light_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo_Logo_Dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _images_logo_Logo_Dark_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_logo_Logo_Dark_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _images_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4__);




 // import axios from "axios";
// import Async from "react-async";
// const API_URL = "http://167.114.153.121:1337";
// const logoUrl = `${API_URL}/logos/5dff4f59a21c443501c3241a`;
// const careersUrl = `${API_URL}/pages/5dff3ba2aecfad34d76ee5a0`;
// const companyUrl = `${API_URL}/pages/5dff3787aecfad34d76ee579`;
// const contactUrl = `${API_URL}/pages/5dff3d19aecfad34d76ee5b6`;
// const solutionsUrl = `${API_URL}/pages/5dff3f78aecfad34d76ee5c5`;
// const helpUrl = `${API_URL}/pages/5dff3bdaaecfad34d76ee5a5`;

var NavBar = function NavBar(props) {
  // const [imageURL, setImageURL] = useState([]);
  // const [companyLinkText, setCompanyLinkText] = useState([]);
  // const [solutionsLinkText, setSolutionsLinkText] = useState([]);
  // const [helpLinkText, setHelpLinkText] = useState([]);
  // const [contactLinkText, setContactLinkText] = useState([]);
  // const [careersLinkText, setCareersLinkText] = useState([]);
  var mouseEnterHandler = function mouseEnterHandler() {
    document.getElementById("menuBackground").classList.add("show");
  };

  var mouseLeaveHandler = function mouseLeaveHandler(event) {
    document.getElementById("menuBackground").classList.remove("show");
    event.target.classList.remove("show");
    var element = document.body.querySelector("nav div.dropdown-menu.show");

    if (element) {
      element.classList.remove("show");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// axios.get(logoUrl).then((res) => {
    //   setImageURL(`${API_URL + res.data.navigation_bar_logo.url}`);
    // });
    // axios.get(careersUrl).then((res) => {
    //   setCareersLinkText(res.data.page_name);
    // });
    // axios.get(companyUrl).then((res) => {
    //   setCompanyLinkText(res.data.page_name);
    // });
    // axios.get(contactUrl).then((res) => {
    //   setContactLinkText(res.data.page_name);
    // });
    // axios.get(solutionsUrl).then((res) => {
    //   setSolutionsLinkText(res.data.page_name);
    // });
    // axios.get(helpUrl).then((res) => {
    //   setHelpLinkText(res.data.page_name);
    // });
  }, []);
  return (// <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <a className="navbar-brand" href="/">
    //     <img src={imageURL} width="125" height="30" />
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item dropdown">
    //         <a
    //           href="/company"
    //           className="nav-link dropdown-toggle"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           {companyLinkText}
    //         </a>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <Link to="/company#about" className="dropdown-item">
    //             About Us
    //           </Link>
    //           <Link to="/company#services" className="dropdown-item">
    //             Services
    //           </Link>
    //         </div>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <Link
    //           to="/solutions"
    //           className="nav-link dropdown-toggle"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           {solutionsLinkText}
    //         </Link>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <Link to="/solutions#carriers" className="dropdown-item">
    //             For Carriers
    //           </Link>
    //           <Link to="/solutions#shippers" className="dropdown-item">
    //             For Shippers
    //           </Link>
    //         </div>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <Link
    //           to="/help"
    //           className="nav-link dropdown-toggle"
    //           href="#"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           {helpLinkText}
    //         </Link>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <Link to="/help#faqs" className="dropdown-item">
    //             FAQs
    //           </Link>
    //           <Link to="/help#help" className="dropdown-item">
    //             Get Help
    //           </Link>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/contact" className="nav-link">
    //           {contactLinkText}
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/careers" className="nav-link">
    //           {careersLinkText}
    //         </Link>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link to="/login" className="nav-link disabled">
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "navbar navbar-expand-lg navbar-light otm-nav"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/",
      className: "navbar-brand"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: props.light ? _images_logo_Logo_Light_svg__WEBPACK_IMPORTED_MODULE_2___default.a : _images_logo_Logo_Dark_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "OTM Dispatch"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "navbar-toggler-icon"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarSupportedContent"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "navbar-nav ml-auto"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/",
      className: "nav-link"
    }, "Home ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "sr-only"
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item dropdown",
      onMouseEnter: mouseEnterHandler,
      onMouseLeave: mouseLeaveHandler
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "nav-link dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, "Company", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _images_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Dropdown",
      className: "dropdown-menu-icon"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "dropdown-menu",
      "aria-labelledby": "navbarDropdown"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/company",
      className: "dropdown-item"
    }, "Company"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/company",
      className: "dropdown-item"
    }, "About Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/services",
      className: "dropdown-item"
    }, "Services"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item dropdown",
      onMouseEnter: mouseEnterHandler,
      onMouseLeave: mouseLeaveHandler
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "nav-link dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, "Solutions", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _images_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Dropdown",
      className: "dropdown-menu-icon"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "dropdown-menu solutions-dropdown",
      "aria-labelledby": "navbarDropdown"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions",
      className: "dropdown-item"
    }, "Solutions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#professional-dispatching",
      className: "dropdown-item"
    }, "Professional Dispatching"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#otm-plans",
      className: "dropdown-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "DISPATCHING SERVICE PLANS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#truck-permits",
      className: "dropdown-item"
    }, "Truck Permits"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#tax-planning",
      className: "dropdown-item"
    }, "Tax Planning and Preparation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#accounting",
      className: "dropdown-item"
    }, "Accounting and Bookkeeping"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#consulting",
      className: "dropdown-item"
    }, "Business Consulting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/solutions#irs-tax",
      className: "dropdown-item"
    }, "IRS Tax Debt Resolution"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item dropdown",
      onMouseEnter: mouseEnterHandler,
      onMouseLeave: mouseLeaveHandler
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "nav-link dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, "Help", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _images_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Dropdown",
      className: "dropdown-menu-icon"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "dropdown-menu",
      "aria-labelledby": "navbarDropdown"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/help",
      className: "dropdown-item"
    }, "Help"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/help",
      className: "dropdown-item"
    }, "FAQs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/help#help",
      className: "dropdown-item"
    }, "Online Chat Support"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/contact",
      className: "nav-link"
    }, "Contact ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "sr-only"
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/partnership",
      className: "nav-link nav-cta"
    }, "Partner With Us")))))
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(63);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(65);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(66);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(20);

var _helpers = __webpack_require__(67);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37ddf9182795f695e4d11d0c5203bce4.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(64)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2c6c45f8fba4170a2ed7f0270c01ec02.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c82062c113a7bcdafb57478c2f367775.gif";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCAxMCA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZXNjPkNyZWF0ZWQgd2l0aCBMdW5hY3k8L2Rlc2M+CiAgPHBhdGggZD0iTTkuMTQ3OSAwLjE0NzgxN0M5LjA1NDAxIDAuMDUzMjEzMyA4LjkyNjIyIDAgOC43OTI5IDBDOC42NTk1OCAwIDguNTMxNzggMC4wNTMyMTMzIDguNDM3OSAwLjE0NzgxN0w0Ljk5NzkgMy41OTU5TDEuNTU3OSAwLjE1NzgxMkMxLjQ2NTc0IDAuMDYzNzk5NyAxLjMzOTU5IDAuMDEwODIxNyAxLjIwNzkgMC4wMTA4MjE3QzEuMDc2MjEgMC4wMTA4MjE3IDAuOTUwMDYzIDAuMDYzNzk5NyAwLjg1Nzg5OSAwLjE1NzgxMkwwLjE0Nzg5OSAwLjg2NzQxN0MwLjA1MzI0MjggMC45NjEyNDkgMCAxLjA4ODk4IDAgMS4yMjIyMkMwIDEuMzU1NDYgMC4wNTMyNDI4IDEuNDgzMTkgMC4xNDc4OTkgMS41NzcwMkw0LjI3NzkgNS43MTQ3M0M0LjQxOTYyIDUuODUzNTMgNC42MDk0OCA1LjkzMjMgNC44MDc5IDUuOTM0Nkw1LjE4NzkgNS45MzQ2QzUuMzg2NzQgNS45MzQ0MyA1LjU3NzM4IDUuODU1MzQgNS43MTc5IDUuNzE0NzNMOS44NDc5IDEuNTc3MDJDOS45NDI1NSAxLjQ4MzE5IDkuOTk1OCAxLjM1NTQ2IDkuOTk1OCAxLjIyMjIyQzkuOTk1OCAxLjA4ODk4IDkuOTQyNTUgMC45NjEyNDkgOS44NDc5IDAuODY3NDE3TDkuMTQ3OSAwLjE0NzgxN1oiIGlkPSJQYXRoIiBmaWxsPSIjMTkxNDREIiBzdHJva2U9Im5vbmUiIC8+Cjwvc3ZnPg=="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTQgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlc2M+Q3JlYXRlZCB3aXRoIEx1bmFjeTwvZGVzYz4KICA8ZyBpZD0idGFpbC1yaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICA8cGF0aCBkPSJNMCAwLjE0Mjg1N0wxMiAwLjE0Mjg1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzLjg1NzExNykiIGlkPSJQYXRoIiBmaWxsPSJub25lIiBzdHJva2U9IiMyQzJFMzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogICAgPHBhdGggZD0iTTAgMEw0IDRMMCA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDApIiBpZD0iUGF0aCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkMyRTMwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(1);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Router.js

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/images/logo/otm-trademark-light.svg
var otm_trademark_light = __webpack_require__(48);
var otm_trademark_light_default = /*#__PURE__*/__webpack_require__.n(otm_trademark_light);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Footer.js



/* harmony default export */ var Footer = (function () {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("section", {
    className: "home-cta"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col text-center"
  }, external_react_default.a.createElement("h4", null, "Clear, upfront pricing with unrivaled transparency and the ", external_react_default.a.createElement("br", null), "information you need every step of the journey."), external_react_default.a.createElement("a", {
    href: "/contact",
    className: "btn btn-cta-white"
  }, "SCHEDULE A CONSULTATION"))))), external_react_default.a.createElement("section", {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-12"
  }, external_react_default.a.createElement("h4", {
    className: "company"
  }, "OTM Dispatch"))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-xs-12 col-md-3 col-lg-3"
  }, external_react_default.a.createElement("ul", {
    className: "footer-menu"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/company"
  }, "Company")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions"
  }, "Solutions")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#otm-plans"
  }, "Dispatching Plans")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/partnership"
  }, "Partner with Us")))), external_react_default.a.createElement("div", {
    className: "col-xs-12 col-md-3 col-lg-3"
  }, external_react_default.a.createElement("ul", {
    className: "footer-menu"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/privacy"
  }, "Privacy")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/contact"
  }, "Contact Us")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/help"
  }, "FAQs")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/help#help"
  }, "Get Help")))), external_react_default.a.createElement("div", {
    className: "col-xs-12 col-md-6 col-lg-6 follow-menu"
  })), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-12 text-center footer-logo"
  }, external_react_default.a.createElement("img", {
    src: otm_trademark_light_default.a,
    alt: "OTM Dispatch"
  }))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-12"
  }, external_react_default.a.createElement("p", null, "\xA9 2019 OTM Dispatch. All Rights Reserved."))))));
});
// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/app.css
var app = __webpack_require__(76);

// EXTERNAL MODULE: external "scroll-into-view-if-needed"
var external_scroll_into_view_if_needed_ = __webpack_require__(80);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/App.js







var App_App = function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: null
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/contact"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/company"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/services"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/solutions"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/help"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/legal"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/privacy"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/partnership"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "/*"
  })), external_react_default.a.createElement(Footer, null), external_react_default.a.createElement("div", {
    className: "menu-background",
    id: "menuBackground"
  }))));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(12);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2ea7e9410916bafc88f20be78c85ab5.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7300ede3caeb105304fe42711ab5e5a0.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8886ae013d849e8c3ccfa6a37ea7636e.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1ef49a485095c0e2eb38904bc8db051f.png";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOC44IDQ4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOC44IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzI1NjM5Mjt9Cjwvc3R5bGU+Cjx0aXRsZT5CaXRtYXA8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9Ik1haW4tRGVzaWduIj4KCTxnIGlkPSJIb21lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk4LjAwMDAwMCwgLTc3Ny4wMDAwMDApIj4KCQk8ZyBpZD0iQ2Fyb3VzZWwtLS1Ub3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2NjEuMDAwMDAwKSI+CgkJCTxnIGlkPSJDYXJyaWVycy0tLVNsaWRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzUuMDAwMDAwLCAwLjAwMDAwMCkiPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxLjcsMTIzYzAuNy0wLjgsMS40LTEuNiwyLjEtMi4zYzAuMi0wLjMsMC40LTAuNCwwLjgtMC40YzUuMiwwLDEwLjQsMCwxNS43LDBjMC4zLDAsMC42LDAuMSwwLjgsMC40CgkJCQkJCWMwLjcsMC44LDEuMywxLjUsMi4xLDIuNGMwLTAuMywwLTAuNCwwLTAuNWMwLTAuOCwwLTEuNiwwLTIuNGMwLTAuMiwwLjEtMC41LDAuMy0wLjdjMC41LTAuNiwxLTEuMiwxLjUtMS44CgkJCQkJCWMwLjMtMC40LDAuNS0wLjQsMC44LTAuMmMwLjMsMC4yLDAuMywwLjUsMCwwLjljLTAuNCwwLjUtMC45LDEuMS0xLjMsMS42Yy0wLjEsMC4xLTAuMiwwLjMtMC4yLDAuNWMwLDIuOCwwLDUuNSwwLDguMwoJCQkJCQljMCwwLDAsMC4xLDAsMC4yYzAuNywwLDEuNCwwLDIuMSwwYzAuMywwLDAuNiwwLDAuOSwwYzAuMywwLDAuNSwwLjIsMC41LDAuNmMwLDAuMy0wLjIsMC41LTAuNiwwLjVjLTAuOSwwLTEuOCwwLTIuNywwCgkJCQkJCWMtMC4yLDAtMC40LDAtMC40LDAuM2MwLDIsMCw0LDAsNmMwLDAuMSwwLDAuMSwwLDAuMmMwLjIsMCwwLjMsMCwwLjUsMGMwLjUsMCwwLjcsMC4yLDAuNywwLjdjMCwwLjYsMCwxLjIsMCwxLjcKCQkJCQkJYzAsMS40LDAsMi45LDAsNC4zYzAsMC4yLDAsMC40LDAuMywwLjVjMC4xLDAsMC4yLDAuMiwwLjMsMC4yYzEuMSwxLjEsMi4yLDIuMiwzLjMsMy40YzAuMiwwLjIsMC4zLDAuNSwwLjMsMC44CgkJCQkJCWMwLDAuOSwwLDEuOSwwLDIuOGMwLDAuNi0wLjIsMC44LTAuOCwwLjhjMCwwLDAsMCwwLDBjLTEsMC0xLDAuMS0wLjgsMS4xYzAuNSwwLDEuMSwwLDEuNiwwYzAuNiwwLDAuOCwwLjIsMC44LDAuOAoJCQkJCQljMCwxLDAsMiwwLDIuOWMwLDAuNC0wLjEsMC42LTAuNSwwLjhjLTAuNiwwLjMtMS4xLDAuNi0xLjcsMC45Yy0wLjMsMC4xLTAuNCwwLjMtMC40LDAuNmMwLDAuOCwwLDEuNiwwLDIuNAoJCQkJCQljMCwxLTAuNywxLjYtMS42LDEuNmMtMC45LDAtMS44LDAtMi44LDBjLTAuOSwwLTEuNi0wLjYtMS42LTEuNWMwLTAuMywwLTAuNSwwLTAuOGMwLTAuNC0wLjEtMC42LTAuNS0wLjVjMCwwLDAsMCwwLDAKCQkJCQkJYy02LjEsMC0xMi4xLDAtMTguMiwwYy0wLjIsMC0wLjMsMC0wLjUsMGMwLDAuNCwwLDAuNywwLDFjMCwxLjItMC42LDEuOC0xLjgsMS44Yy0wLjgsMC0xLjcsMC0yLjUsMGMtMSwwLTEuNi0wLjYtMS42LTEuNgoJCQkJCQljMC0wLjgsMC0xLjYsMC0yLjNjMC0wLjMtMC4xLTAuNS0wLjQtMC43Yy0wLjYtMC4zLTEuMi0wLjYtMS44LTAuOWMtMC4zLTAuMS0wLjQtMC4zLTAuNC0wLjdjMC0xLDAtMi4xLDAtMy4xCgkJCQkJCWMwLTAuNSwwLjItMC43LDAuNy0wLjdjMC41LDAsMS4xLDAsMS42LDBjMC4yLDAsMC40LDAsMC40LTAuM2MwLTEsMC4xLTAuOC0wLjgtMC44Yy0wLjgsMC0wLjktMC4xLTAuOS0wLjljMC0wLjksMC0xLjgsMC0yLjcKCQkJCQkJYzAtMC4zLDAuMS0wLjYsMC4zLTAuOGMxLjEtMS4xLDIuMi0yLjIsMy4zLTMuM2MwLjEtMC4xLDAuMS0wLjEsMC4yLTAuMmMwLjUtMC4xLDAuNC0wLjYsMC40LTAuOWMwLTEuOSwwLTMuNywwLTUuNgoJCQkJCQljMC0wLjcsMC4xLTAuOCwwLjgtMC44YzAuNCwwLDAuNS0wLjEsMC41LTAuNWMwLTEuOSwwLTMuNywwLTUuNmMwLTAuNC0wLjEtMC41LTAuNS0wLjVjLTAuOCwwLTEuNiwwLTIuNCwwCgkJCQkJCWMtMC41LDAtMC44LTAuMi0wLjgtMC41YzAtMC40LDAuMy0wLjUsMC44LTAuNWMwLjgsMCwxLjYsMCwyLjQsMGMwLjQsMCwwLjUtMC4xLDAuNS0wLjVjMC0xLjMsMC0yLjYsMC0zLjljMC0xLjMsMC0yLjYsMC0zLjkKCQkJCQkJYzAtMC4zLTAuMS0wLjYtMC4zLTAuOGMtMC40LTAuNS0wLjgtMS0xLjItMS42Yy0wLjMtMC4zLTAuMy0wLjYsMC0wLjhjMC4zLTAuMiwwLjUtMC4yLDAuOCwwLjJjMC41LDAuNiwxLjEsMS4zLDEuNiwxLjkKCQkJCQkJYzAuMSwwLjEsMC4yLDAuNCwwLjIsMC41YzAsMC44LDAsMS43LDAsMi41QzcxLjYsMTIyLjcsNzEuNiwxMjIuOCw3MS43LDEyM0M3MS43LDEyMyw3MS43LDEyMyw3MS43LDEyM3ogTTczLjgsMTUyLjgKCQkJCQkJYzUuOCwwLDExLjUsMCwxNy4yLDBjMC0wLjIsMC0wLjMsMC0wLjRjMC00LjgsMC05LjYsMC0xNC40YzAtMC40LTAuMS0wLjUtMC41LTAuNWMtNS40LDAtMTAuOSwwLTE2LjMsMAoJCQkJCQljLTAuNCwwLTAuNSwwLjEtMC41LDAuNWMwLDQuNCwwLDguNywwLDEzLjFDNzMuOCwxNTEuNyw3My44LDE1Mi4yLDczLjgsMTUyLjh6IE02NS4xLDE1My45YzAsMC44LDAsMS41LDAsMi4yCgkJCQkJCWMwLDAuMiwwLjEsMC40LDAuMywwLjVjMS41LDAuNywzLDEuNSw0LjUsMi4yYzAuMiwwLjEsMC4zLDAuMSwwLjUsMC4xYzcuOSwwLDE1LjksMCwyMy44LDBjMC4yLDAsMC4zLDAsMC41LTAuMQoJCQkJCQljMS41LTAuOCwzLjEtMS41LDQuNi0yLjNjMC4xLDAsMC4yLTAuMiwwLjItMC4yYzAtMC44LDAtMS42LDAtMi40Qzg4LDE1My45LDc2LjYsMTUzLjksNjUuMSwxNTMuOXogTTkxLDEzMAoJCQkJCQljLTAuMSwwLTAuMiwwLTAuMywwYy01LjUsMC0xMSwwLTE2LjYsMGMtMC4zLDAtMC40LDAuMS0wLjQsMC40YzAsMS45LDAsMy43LDAsNS42YzAsMC41LDAsMC41LDAuNSwwLjVjNS40LDAsMTAuOCwwLDE2LjIsMAoJCQkJCQljMC4yLDAsMC4zLDAsMC41LDBDOTEsMTM0LjMsOTEsMTMyLjEsOTEsMTMweiBNOTAuOSwxMjYuNGMwLTAuMSwwLTAuMiwwLTAuMmMtMC4zLTEuNS0wLjYtMy0wLjgtNC41YzAtMC4yLTAuMi0wLjMtMC40LTAuMwoJCQkJCQljLTQuOCwwLTkuNywwLTE0LjUsMGMtMC4zLDAtMC40LDAuMS0wLjQsMC40Yy0wLjIsMC45LTAuMywxLjgtMC41LDIuOGMtMC4xLDAuNi0wLjIsMS4zLTAuNCwxLjkKCQkJCQkJQzc5LjYsMTI2LjQsODUuMiwxMjYuNCw5MC45LDEyNi40eiBNOTUuNCwxNTAuN2MxLDAsMiwwLDMsMGMwLjMsMCwwLjQtMC4xLDAuMy0wLjNjMC0wLjYsMC0xLjMsMC0xLjljMC0wLjItMC4xLTAuMy0wLjItMC40CgkJCQkJCWMtMS0xLTItMi0zLTNjLTAuMS0wLjEtMC4zLTAuMi0wLjUtMC4yYy0wLjgsMC0xLjcsMC0yLjUsMGMtMC4zLDAtMC40LDAuMS0wLjQsMC40YzAsMS43LDAsMy41LDAsNS4yYzAsMC4zLDAuMSwwLjQsMC40LDAuNAoJCQkJCQlDOTMuNCwxNTAuNiw5NC40LDE1MC43LDk1LjQsMTUwLjd6IE03Mi43LDE0NC43Yy0xLDAtMS45LDAtMi44LDBjLTAuMiwwLTAuNSwwLjEtMC42LDAuMmMtMSwwLjktMS45LDEuOS0yLjksMi45CgkJCQkJCWMtMC4xLDAuMi0wLjIsMC40LTAuMywwLjZjMCwwLjYsMCwxLjIsMCwxLjdjMCwwLjMsMC4xLDAuNCwwLjQsMC40YzEuOSwwLDMuOCwwLDUuOCwwYzAuMSwwLDAuMywwLDAuNCwwCgkJCQkJCUM3Mi43LDE0OC43LDcyLjcsMTQ2LjcsNzIuNywxNDQuN3ogTTczLjgsMTI4LjhjNS43LDAsMTEuNSwwLDE3LjIsMGMwLTAuNSwwLTAuOSwwLTEuNGMtMC4yLDAtMC4zLDAtMC41LDBjLTEuNiwwLTMuMywwLTQuOSwwCgkJCQkJCWMtMy42LDAtNy4xLDAtMTAuNywwQzczLjYsMTI3LjUsNzMuNiwxMjcuNSw3My44LDEyOC44eiBNNzAuNCwxMzcuNWMwLDIuMSwwLDQuMSwwLDYuMWMwLjgsMCwxLjUsMCwyLjMsMGMwLTIsMC00LjEsMC02LjEKCQkJCQkJQzcxLjksMTM3LjUsNzEuMiwxMzcuNSw3MC40LDEzNy41eiBNOTIuMSwxMzcuNWMwLDAuNiwwLDEuMSwwLDEuNmMwLDEuNCwwLDIuOCwwLDQuMmMwLDAuMSwwLjEsMC4zLDAuMiwwLjNjMC43LDAsMS40LDAsMi4xLDAKCQkJCQkJYzAtMC42LDAtMS4yLDAtMS44YzAtMS4zLDAtMi43LDAtNGMwLTAuMiwwLTAuNC0wLjItMC40QzkzLjUsMTM3LjUsOTIuOCwxMzcuNSw5Mi4xLDEzNy41eiBNOTMsMTYwYzAsMC41LDAsMSwwLDEuNAoJCQkJCQljMCwwLjMsMC4yLDAuNCwwLjUsMC40YzAuOSwwLDEuOSwwLDIuOCwwYzAuMiwwLDAuNS0wLjIsMC41LTAuNGMwLTAuOCwwLTEuNiwwLTIuNUM5NS42LDE1OS42LDk0LjUsMTYwLjQsOTMsMTYweiBNNjcuOCwxNTkKCQkJCQkJYzAsMC44LDAsMS42LDAsMi40YzAsMC4zLDAuMywwLjQsMC41LDAuNGMwLjcsMCwxLjQsMCwyLjEsMGMxLjIsMCwxLjIsMCwxLjItMS4yYzAtMC42LDAtMC42LTAuNS0wLjYKCQkJCQkJYy0wLjgsMC4xLTEuNi0wLjEtMi4zLTAuNkM2OC41LDE1OS4zLDY4LjIsMTU5LjIsNjcuOCwxNTl6IE05Mi4xLDEzMy4xYzAsMC45LDAsMS44LDAsMi43YzAsMC43LTAuMSwwLjYsMC42LDAuNgoJCQkJCQljMC40LDAsMC40LTAuMSwwLjQtMC40YzAtMS4xLDAtMi4yLDAtMy4yYzAtMC44LDAtMS42LDAtMi41YzAtMC4zLTAuMS0wLjQtMC40LTAuNGMtMC4xLDAtMC4yLDAtMC4zLDBjLTAuMywwLTAuNCwwLjEtMC40LDAuNAoJCQkJCQlDOTIuMSwxMzEuMyw5Mi4xLDEzMi4yLDkyLjEsMTMzLjF6IE03Mi43LDEyOS45Yy0wLjIsMC0wLjMsMC0wLjUsMGMtMC42LDAtMC42LDAtMC42LDAuNmMwLDEuNywwLDMuNCwwLDUuMQoJCQkJCQljMCwxLTAuMiwwLjksMC45LDAuOGMwLDAsMC4xLDAsMC4xLDBDNzIuNywxMzQuMyw3Mi43LDEzMi4xLDcyLjcsMTI5Ljl6IE03My40LDEyMi44Yy0wLjUsMC42LTEsMS4xLTEuNSwxLjcKCQkJCQkJYy0wLjEsMC4yLTAuMiwwLjQtMC4yLDAuNmMwLDEsMCwxLjksMCwyLjljMCwwLjksMCwwLjksMC45LDAuOWMwLDAsMCwwLDAuMS0wLjFDNzIuNSwxMjYuOCw3My4yLDEyNC44LDczLjQsMTIyLjh6CgkJCQkJCSBNOTEuNCwxMjIuOGMwLjIsMiwwLjksNCwwLjYsNi4xYzAuMywwLDAuNSwwLDAuNiwwYzAuMywwLDAuNS0wLjEsMC40LTAuNGMwLTEuMSwwLTIuMiwwLTMuNGMwLTAuMiwwLTAuNC0wLjEtMC41CgkJCQkJCUM5Mi41LDEyNCw5MiwxMjMuNCw5MS40LDEyMi44eiBNOTIuMSwxNTIuOWMwLjIsMCwwLjMsMCwwLjQsMGMxLjIsMCwyLjUsMCwzLjcsMGMwLjgsMCwwLjcsMC4yLDAuNy0wLjdjMC0wLjMtMC4xLTAuNC0wLjQtMC40CgkJCQkJCWMtMS4yLDAtMi40LDAtMy42LDBDOTIsMTUxLjcsOTIsMTUxLjcsOTIuMSwxNTIuOXogTTcyLjcsMTUyLjhjMC0wLjMsMC0wLjYsMC0wLjhjMC0wLjEtMC4yLTAuMy0wLjItMC4zYy0xLjUsMC0yLjksMC00LjQsMAoJCQkJCQljLTAuMSwwLTAuMiwwLjItMC4yLDAuMmMwLDAuMywwLDAuNSwwLDAuOEM2OS40LDE1Mi44LDcxLDE1Mi44LDcyLjcsMTUyLjh6Ii8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTk1LjcsMTMzLjJjMC0wLjcsMC0xLjQsMC0yLjFjMC0wLjQsMC4yLTAuNiwwLjYtMC42YzAuNywwLDEuNCwwLDIuMiwwYzAuNCwwLDAuNiwwLjIsMC42LDAuNgoJCQkJCQljMCwxLjQsMCwyLjgsMCw0LjNjMCwwLjQtMC4yLDAuNi0wLjcsMC42Yy0wLjcsMC0xLjQsMC0yLjEsMGMtMC40LDAtMC42LTAuMi0wLjYtMC42Qzk1LjcsMTM0LjcsOTUuNywxMzQsOTUuNywxMzMuMnoKCQkJCQkJIE05Ni44LDEzMS43YzAsMS4xLDAsMi4yLDAsMy4zYzAuMywwLDAuNiwwLDAuOSwwYzAuMywwLDAuMy0wLjEsMC4zLTAuM2MwLTAuNiwwLTEuMywwLTEuOUM5OCwxMzEuNiw5OCwxMzEuNiw5Ni44LDEzMS43eiIvPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02OS4xLDEzMy4zYzAsMC43LDAsMS4zLDAsMmMwLDAuNS0wLjIsMC43LTAuNywwLjdjLTAuNywwLTEuMywwLTIsMGMtMC41LDAtMC43LTAuMi0wLjctMC42CgkJCQkJCWMwLTEuNCwwLTIuOCwwLTQuMmMwLTAuNCwwLjItMC42LDAuNi0wLjZjMC43LDAsMS40LDAsMi4xLDBjMC41LDAsMC42LDAuMiwwLjYsMC42QzY5LjEsMTMxLjksNjkuMSwxMzIuNiw2OS4xLDEzMy4zegoJCQkJCQkgTTY4LDEzMS42Yy0wLjMsMC0wLjYsMC0wLjgsMGMtMC4zLDAtMC40LDAuMS0wLjQsMC40YzAsMC42LDAsMS4zLDAsMS45YzAsMS4xLDAsMS4xLDEuMSwxYzAsMCwwLDAsMC4xLDAKCQkJCQkJQzY4LDEzMy44LDY4LDEzMi44LDY4LDEzMS42eiIvPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Mi4xLDE0MS43Yy0yLjMsMC00LjUsMC02LjgsMGMtMC4yLDAtMC40LDAtMC41LTAuMWMtMC4xLTAuMS0wLjItMC4zLTAuMi0wLjVjMC0wLjIsMC4yLTAuMywwLjQtMC40CgkJCQkJCWMwLjEtMC4xLDAuMywwLDAuNSwwYzQuNSwwLDguOSwwLDEzLjQsMGMwLjEsMCwwLjIsMCwwLjIsMGMwLjQsMCwwLjYsMC4yLDAuNiwwLjZjMCwwLjMtMC4yLDAuNS0wLjYsMC41CgkJCQkJCUM4Ni44LDE0MS43LDg0LjUsMTQxLjcsODIuMSwxNDEuN3oiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODIuMiwxNTEuN2MtMi4zLDAtNC42LDAtNi44LDBjLTAuMiwwLTAuNS0wLjEtMC42LTAuMmMtMC4yLTAuMi0wLjEtMC43LDAuMy0wLjhjMC4yLDAsMC4zLTAuMSwwLjUtMC4xCgkJCQkJCWM0LjUsMCw4LjksMCwxMy40LDBjMC4xLDAsMC4yLDAsMC4yLDBjMC40LDAsMC42LDAuMiwwLjYsMC42YzAsMC4zLTAuMiwwLjUtMC42LDAuNUM4Ni44LDE1MS43LDg0LjUsMTUxLjcsODIuMiwxNTEuN3oiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODQuNywxNDYuMWMwLDEuMSwwLDIuMiwwLDMuM2MwLDAuNC0wLjIsMC42LTAuNSwwLjZjLTAuMywwLTAuNS0wLjItMC41LTAuNmMwLTAuMSwwLTAuMiwwLTAuMgoJCQkJCQljMC0yLjEsMC00LjIsMC02LjJjMC0wLjEsMC0wLjIsMC0wLjNjMC0wLjMsMC4yLTAuNSwwLjUtMC41YzAuMywwLDAuNSwwLjIsMC41LDAuNkM4NC43LDE0My45LDg0LjcsMTQ1LDg0LjcsMTQ2LjF6Ii8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc2LjUsMTQ2LjFjMCwxLjEsMCwyLjIsMCwzLjRjMCwwLjItMC4yLDAuNC0wLjMsMC41Yy0wLjEsMC4xLTAuNCwwLTAuNS0wLjFjLTAuMS0wLjEtMC4yLTAuMy0wLjItMC40CgkJCQkJCWMwLTIuMywwLTQuNSwwLTYuOGMwLTAuMywwLjItMC41LDAuNS0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC42Qzc2LjUsMTQzLjksNzYuNSwxNDUsNzYuNSwxNDYuMXoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAuNiwxNDYuMWMwLDEuMSwwLDIuMiwwLDMuM2MwLDAuNC0wLjMsMC44LTAuNywwLjZjLTAuMi0wLjEtMC40LTAuMy0wLjQtMC41YzAtMi4zLDAtNC41LDAtNi44CgkJCQkJCWMwLTAuMywwLjItMC41LDAuNS0wLjVjMC4zLDAsMC41LDAuMiwwLjUsMC42QzgwLjYsMTQzLjksODAuNiwxNDUsODAuNiwxNDYuMUM4MC42LDE0Ni4xLDgwLjYsMTQ2LjEsODAuNiwxNDYuMXoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODguOCwxNDYuMWMwLDEuMSwwLDIuMiwwLDMuMmMwLDAuNS0wLjIsMC43LTAuNSwwLjdjLTAuMywwLTAuNS0wLjItMC41LTAuN2MwLTIuMiwwLTQuMywwLTYuNQoJCQkJCQljMC0wLjQsMC4yLTAuNywwLjUtMC43YzAuMywwLDAuNSwwLjMsMC41LDAuN0M4OC44LDE0NCw4OC44LDE0NSw4OC44LDE0Ni4xeiIvPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Mi4yLDEzOC42YzAuNywwLDEuMywwLDIsMGMwLjQsMCwwLjYsMC4yLDAuNiwwLjVjMCwwLjMtMC4yLDAuNi0wLjYsMC42Yy0xLjQsMC0yLjcsMC00LjEsMAoJCQkJCQljLTAuNCwwLTAuNi0wLjItMC42LTAuNWMwLTAuMywwLjItMC41LDAuNi0wLjVDODAuOCwxMzguNiw4MS41LDEzOC42LDgyLjIsMTM4LjZ6Ii8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTgyLjIsMTU1LjRjLTAuNywwLTEuMywwLTIsMGMtMC40LDAtMC42LTAuMi0wLjYtMC41YzAtMC4zLDAuMi0wLjUsMC42LTAuNWMxLjQsMCwyLjcsMCw0LjEsMAoJCQkJCQljMC40LDAsMC42LDAuMiwwLjYsMC41YzAsMC4zLTAuMiwwLjUtMC42LDAuNUM4My41LDE1NS41LDgyLjksMTU1LjQsODIuMiwxNTUuNHoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODIuMiwxMjMuMmMtMC43LDAtMS4zLDAtMiwwYy0wLjMsMC0wLjYtMC4xLTAuNi0wLjVjMC0wLjMsMC4yLTAuNiwwLjYtMC42YzEuNCwwLDIuOCwwLDQuMSwwCgkJCQkJCWMwLjQsMCwwLjYsMC4yLDAuNiwwLjZjMCwwLjMtMC4yLDAuNS0wLjYsMC41QzgzLjUsMTIzLjIsODIuOCwxMjMuMiw4Mi4yLDEyMy4yeiIvPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NS42LDE0OC41YzAuNiwwLDEuMiwwLDEuOCwwYzAuNCwwLDAuNiwwLjIsMC42LDAuNWMwLDAuMy0wLjIsMC41LTAuNiwwLjVjLTEuMiwwLTIuNSwwLTMuNywwCgkJCQkJCWMtMC40LDAtMC42LTAuMi0wLjYtMC41YzAtMC40LDAuMi0wLjUsMC42LTAuNUM5NC40LDE0OC41LDk1LDE0OC41LDk1LjYsMTQ4LjV6Ii8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5LjIsMTQ4LjVjMC42LDAsMS4yLDAsMS45LDBjMC40LDAsMC42LDAuMiwwLjYsMC41YzAsMC4zLTAuMiwwLjUtMC42LDAuNWMtMS4yLDAtMi41LDAtMy43LDAKCQkJCQkJYy0wLjQsMC0wLjYtMC4yLTAuNi0wLjVjMC0wLjMsMC4yLTAuNSwwLjYtMC41QzY4LDE0OC41LDY4LjYsMTQ4LjUsNjkuMiwxNDguNXoiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/mnt/d/workspace/work/otm-dispatch/static-site",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static/lib/browser");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);


























Object(_mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404 */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404";
  }
}), universalOptions);
t_0.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js';
var t_1 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company";
  }
}), universalOptions);
t_1.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js';
var t_2 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact";
  }
}), universalOptions);
t_2.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js';
var t_3 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/diamond.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/diamond */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/diamond.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/diamond";
  }
}), universalOptions);
t_3.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/diamond.js';
var t_4 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/emerald.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/emerald */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/emerald.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/emerald";
  }
}), universalOptions);
t_4.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/emerald.js';
var t_5 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help";
  }
}), universalOptions);
t_5.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js';
var t_6 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index";
  }
}), universalOptions);
t_6.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js';
var t_7 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/partnership.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/partnership */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/partnership.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/partnership";
  }
}), universalOptions);
t_7.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/partnership.js';
var t_8 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/privacy.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/privacy */).then(__webpack_require__.bind(null, 41))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/privacy.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/privacy";
  }
}), universalOptions);
t_8.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/privacy.js';
var t_9 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/ruby.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/ruby */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/ruby.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/ruby";
  }
}), universalOptions);
t_9.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/ruby.js';
var t_10 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services";
  }
}), universalOptions);
t_10.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services.js';
var t_11 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions";
  }
}), universalOptions);
t_11.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js': t_0,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js': t_1,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js': t_2,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/diamond.js': t_3,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/emerald.js': t_4,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js': t_5,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js': t_6,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/partnership.js': t_7,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/privacy.js': t_8,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/ruby.js': t_9,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services.js': t_10,
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js': t_11
}); // Not Found Template

var notFoundTemplate = "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_about_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _images_about_img_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _images_about_img_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_about_img_right_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_about_img_right_mobile_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _images_about_img_right_mobile_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_about_img_right_mobile_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_logo_otm_trademark_white_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var _images_logo_otm_trademark_white_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_logo_otm_trademark_white_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_7__);
 // import Service from "../components/Service";
// import axios from "axios";







 // const API_URL = "http://167.114.153.121:1337";
// const url = `${API_URL}/pages/5dff3787aecfad34d76ee579`;

var Company = function Company() {
  // const [data, setData] = useState([]);
  // const [aboutUsHeader, setAboutUsHeader] = useState([]);
  // const [aboutUsSubheader, setAboutUsSubheader] = useState([]);
  // const [aboutUsDescriptions, setAboutUsDescriptions] = useState([]);
  // const [servicesHeader, setServicesHeader] = useState([]);
  // const [servicesSubheader, setServicesSubheader] = useState([]);
  // const [servicesDescriptions, setServicesDescriptions] = useState([]);
  // const [aboutUsBannerImage, setAboutUsBannerImage] = useState([]);
  // const [servicesBannerImage, setServicesBannerImage] = useState([]);
  if (process.browser) {
    if (location.hash) {
      setTimeout(function () {
        document.getElementById(location.hash.replace('#', '')).scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // axios.get(url).then((res) => {
    //   setData(res.data);
    //   setAboutUsHeader(res.data.fields[0].header);
    //   setAboutUsSubheader(res.data.fields[0].subheader);
    //   setAboutUsBannerImage(`${API_URL + res.data.fields[0].background.url}`);
    //   setAboutUsDescriptions(res.data.fields[1].paragraph);
    //   setServicesHeader(res.data.fields[2].header);
    //   setServicesSubheader(res.data.fields[2].subheader);
    //   setServicesBannerImage(`${API_URL + res.data.fields[2].background.url}`);
    //   setServicesDescriptions(res.data.fields[3].paragraph);
    // });
    document.getElementById("menuBackground").classList.remove("show");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "about-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-title text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "OTM DISPATCH")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "About Us")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "about-us-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-main-left-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "OTM Dispatch provides clients (both intrastate and interstate) access to a network of freight shippers and brokers in hundreds of product categories with over 25 years of experience."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "Our professional dispatchers and administration staff possess the skills and experience that will help your organization meet challenges, improve efficiencies, and increase profitability."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "We provide affordable and competitively priced dispatch, tax, accounting, truck permits and consulting services to individuals as well as small and medium size businesses. OTM Dispatch prides itself on delivering the highest level of professional service to its clients. Our firm treats all clients with the utmost importance. Individuals and/or companies who choose our firm rely on our competent advice and quick accurate results."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/services",
    className: "btn btn-orange btn-shadow"
  }, "Our Services"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 about-main-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_about_img_right_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    className: "about-main-img-right"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_about_img_right_mobile_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    className: "about-main-img-right-mobile"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "dark-cta-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_otm_trademark_white_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "cta-wrapp-logo"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u201COTM Dispatch prides itself on delivering the highest level of professional service to its clients. Our firm treats all clients with the utmost importance.\u201D"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
var urlEscape = __webpack_require__(11);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(81));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(35));

// Module
exports.push([module.i, ".about-hero{\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.about-hero h2 {\n    text-align: center;\n}\n.about-hero h4 span {\n    text-transform: uppercase;\n}\n.about-hero .row{\n    height: 500px;\n    max-height: 100%;\n}\n.hero-title{\n    color: #ffffff;\n}\n.hero-title h2{\n    font-size: 80px;\n    margin-bottom: 10px;\n}\n.hero-title h4{\n    font-size: 40px;\n    margin-top: 0px;\n}\n.about-us-main{\n    padding-top: 50px;\n    padding-bottom: 50px;\n    position: relative;\n}\n.about-main-right {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n.section-title{\n    position: relative;\n    font-size: 40px;\n    font-weight: 600;\n    color: #004D86;\n    padding-bottom: 30px;\n    margin-bottom: 30px;\n}\n.section-title:after{\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100px;\n    height: 5px;\n    background-color: #D8D8D8;\n}\n.section-desc{\n    font-size: 22px;\n    color: #191919;\n    margin-bottom: 15px;\n}\n\n.btn-orange{\n    background-color: #F7941E;\n    color: #ffffff;\n    margin-top: 30px;\n    box-shadow: -7px 8px 0px 0px rgba(216,216,216,1);\n    border-radius: 0px;\n    font-size: 1rem;\n    text-transform: uppercase;\n    font-weight: 600;\n    padding: 10px 30px;\n}\n.dark-cta-wrapper{\nbackground-color: #22272A;\ncolor: #ffffff;\npadding-top: 60px;\npadding-bottom: 80px;\n}\n.cta-wrapp-logo{\n    max-width: 110px;\n    width: 100%;\n    margin-bottom: 40px;\n}\n.dark-cta-wrapper p{\n    font-size: 28px;\n    font-style: italic;\n}\n\n.about-service{\n    padding-top: 115px;\n    padding-bottom: 115px;\n    position: relative;\n}\n.about-service-right{\n    position: relative;\n}\n.service-img-logo{\n    position: absolute;\n    left: -10%;\n    width: 100%;\n    top: 110px;\n    max-width: 700px;\n}\n.about-main-img-right{\n    position: absolute;\n    right: 0px;\n    top: -44px;\n    z-index: 0;\n    bottom: 0px;\n    max-width: 500px;\n}\n.about-main-img-right-mobile {\n    display: none;\n}\n\n.about-main-left-inner ul{\n    list-style: none;\n    padding-left: 0px;\n    margin-bottom: 0px;\n}\n.about-main-left-inner ul li{\n    position: relative;\n    padding-left: 40px;\n    font-size: 1.3em;\n    color: #3A434A;\n    margin-bottom: 20px;\n}\n.about-main-left-inner ul li:after{\n    content: '';\n    width: 20px;\n    height: 14px;\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: absolute;\n    left: 0px;\n    top: 50%;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n}\n\n.solutionsLink {\n    color:#1a124d;\n}\n.solutionsLink:hover {\n    color:#606a71;\n    text-decoration: none;\n}\n\n@media only screen and (min-width: 1700px) {\n    .service-img-logo{\n        max-width: 700px;\n    }\n}\n\n@media only screen and (min-width: 1800px) {\n    .service-img-logo{\n        max-width: 750px;\n    }\n}\n\n@media only screen and (min-width: 1900px) {\n    .service-img-logo{\n        max-width: 800px;\n         top: 50px;\n    }\n}\n\n@media only screen and (min-width: 2500px) {\n    .service-img-logo{\n        max-width: 850px;\n         top: 30px;\n         left: 8%;\n    }\n}\n@media only screen and (max-width: 1200px){\n    .about-main-img-right{\n        max-width: 500px;\n    }\n}\n@media screen and (max-width: 1199px) and (min-width: 992px) {\n    .about-main-right {\n        right: 50px;\n        top: -45px;\n    }\n    .about-main-img-right {\n        right: 0px;\n        top: -44px;\n        z-index: 0;\n        position: relative;\n    }\n}\n@media only screen and (max-width: 991px){\n    .hero-title h2{\n        font-size: 60px;\n    }\n    .hero-title h4{\n        font-size: 30px;\n    }\n    .section-title{\n        font-size: 32px;\n    }\n    .section-desc{\n        font-size: 20px;\n    }\n    .dark-cta-wrapper p{\n        font-size: 24px;\n    }\n    .service-img-logo{\n        display: none;\n    }\n    .about-main-left-inner ul li{\n        font-size: 24px;\n    }\n    .about-main-img-right{\n     display: none;\n    }\n    .about-main-img-right-mobile {\n        display: block;\n        position: absolute;\n        width: 100%;\n        left: 0;\n        right: 0;\n    }\n}\n@media screen and (max-width: 900px) and (min-width: 600px) {\n    .about-us-main {\n        padding-top: 350px !important;\n        padding-bottom: 60px;\n        position: relative;\n    }\n}\n@media only screen and (max-width: 768px){\n    .hero-title h2{\n        font-size: 40px;\n    }\n    .hero-title h4{\n        font-size: 20px;\n    }\n    .section-title{\n        font-size: 28px;\n    }\n    .section-desc{\n        font-size: 18px;\n    }\n    .dark-cta-wrapper p{\n        font-size: 20px;\n    }\n    .service-img-logo{\n        display: none;\n    }\n    .about-main-left-inner ul li{\n        font-size: 20px;\n    }\n    .about-service{padding-top: 50px;padding-bottom: 50px;}\n    .about-us-main {\n        padding-top: 190px;\n        padding-bottom: 60px;\n        position: relative;\n    }\n}", ""]);



/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMjMgMTciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlc2M+Q3JlYXRlZCB3aXRoIEx1bmFjeTwvZGVzYz4KICA8cGF0aCBkPSJNMCA3LjUwMDE1TDAgNi40OTk4NUMwIDYuMjIzNjIgMC4yMjM4NTggNS45OTk3IDAuNSA1Ljk5OTdMMTYuNjcgNS45OTk3TDEyLjIyIDEuNTU4MzdDMTIuMTI1MyAxLjQ2NDQ2IDEyLjA3MjEgMS4zMzY2MiAxMi4wNzIxIDEuMjAzMjZDMTIuMDcyMSAxLjA2OTkgMTIuMTI1MyAwLjk0MjA2NSAxMi4yMiAwLjg0ODE1NEwxMi45MyAwLjE0Nzk0NEMxMy4wMjM5IDAuMDUzMjU4OCAxMy4xNTE3IDAgMTMuMjg1IDBDMTMuNDE4MyAwIDEzLjU0NjEgMC4wNTMyNTg4IDEzLjY0IDAuMTQ3OTQ0TDE5Ljc4IDYuMjc5NzhDMTkuOTIwNyA2LjQyMDM0IDE5Ljk5OTggNi42MTEwNCAyMCA2LjgwOTk0TDIwIDcuMTkwMDZDMTkuOTk3NyA3LjM4ODUzIDE5LjkxODkgNy41Nzg0NSAxOS43OCA3LjcyMDIyTDEzLjY0IDEzLjg1MjFDMTMuNTQ2MSAxMy45NDY3IDEzLjQxODMgMTQgMTMuMjg1IDE0QzEzLjE1MTcgMTQgMTMuMDIzOSAxMy45NDY3IDEyLjkzIDEzLjg1MjFMMTIuMjIgMTMuMTQxOEMxMi4xMjU5IDEzLjA0OTcgMTIuMDcyOSAxMi45MjM1IDEyLjA3MjkgMTIuNzkxN0MxMi4wNzI5IDEyLjY2IDEyLjEyNTkgMTIuNTMzOCAxMi4yMiAxMi40NDE2TDE2LjY3IDguMDAwM0wwLjUgOC4wMDAzQzAuMjIzODU4IDguMDAwMyAwIDcuNzc2MzggMCA3LjUwMDE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDEuNSkiIGlkPSJJY29uLWNvbG9yIiBmaWxsPSIjMDA0RDg2IiBzdHJva2U9IiMwMDRDODgiIHN0cm9rZS13aWR0aD0iMyIgLz4KPC9zdmc+"

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_get_help2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _images_get_help2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_get_help2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_loader_gif__WEBPACK_IMPORTED_MODULE_8__);









var API_URL = "http://167.114.153.121:1337";
var url = "".concat(API_URL, "/pages/5dff3d19aecfad34d76ee5b6");

var Contact = function Contact(props) {
  // const [contactHeader, setContactHeader] = useState([]);
  // const [contactSubheader, setContactSubheader] = useState([]);
  // const [imageURL, setImageURL] = useState([]);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      needs = _useState4[0],
      setNeeds = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      states = _useState6[0],
      setStates = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      sendingMail = _useState8[0],
      setSendingMail = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
      setData(res.data); //   setContactHeader(res.data.fields[0].header);
      //   setContactSubheader(res.data.fields[0].subheader);
      //   setImageURL(`${API_URL + res.data.fields[0].background.url}`);

      setNeeds(res.data.fields[1].option);
      setStates(res.data.fields[2].option);
    });
    if (process.browser) scrollTo(0, 0);
  }, []);

  var handleEmail = function handleEmail(e) {
    if (e) e.preventDefault();
    var firstName = e.target.name.value;
    var lastName = e.target.surname.value;
    var email = e.target.email.value;
    var reason = e.target.need.value;
    var message = e.target.message.value; // CheckColors(val){
    //  var element=document.getElementById('need');
    //  if (val=='pick a color'||val=='other')
    //    element.style.display='block';
    //  else  
    //    element.style.display='none';
    // }

    if (firstName) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(API_URL, "/contact-requests"), {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
        reason_for_inquiry: reason
      }).then(function (res) {
        var alert = document.getElementById("thank-you-alert");
        alert.style.display = "block";
        setTimeout(function () {
          alert.style.display = "none";
        }, 4000);
      });
    }
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var alert = document.getElementById("loader");
    alert.style.display = "block";
    setTimeout(function () {
      alert.style.display = "none";
    }, 4000);
    setSendingMail(true);
    var data = $(event.target).serializeArray();
    var body = 'Hi, You have received a new request for OTM Dispatch. Please see below for contact information:<br /><br />';
    data.map(function (field) {
      return body = body + field.name + ' : ' + field.value + '<br />';
    });
    Email.send({
      Host: "smtp.office365.com",
      Username: "leads@otmdispatch.com",
      Password: "Kok49018",
      To: 'leads@otmdispatch.com',
      From: "leads@otmdispatch.com",
      Subject: "OTM Dispatch - Contact Request",
      Body: body
    }).then(function (message) {
      setSendingMail(false);

      if (message === 'OK') {
        var _alert = document.getElementById("thank-you-alert"); //alert('We received your details. Thank you :)');


        _alert.style.display = "block";
        setTimeout(function () {
          _alert.style.display = "none";
        }, 4000);
        document.getElementById('contactForm').reset();
      } else {
        var _alert2 = document.getElementById("error-alert"); //alert('We received your details. Thank you :)');


        _alert2.style.display = "block";
        setTimeout(function () {
          _alert2.style.display = "none";
        }, 4000);
      }
    });
  };

  return (// <div>
    //   <div
    //     className="jumbotron jumbotron-fluid pb-4 text-light"
    //     style={{
    //       backgroundImage: `url(${imageURL})`,
    //       backgroundSize: `cover`
    //     }}
    //   >
    //     <div className="container">
    //       <div className="mx-auto text-center">
    //         <h1>{contactHeader}</h1>
    //         <p>{contactSubheader}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container">
    //     <div
    //       id="thank-you-alert"
    //       className="alert alert-success mb-5"
    //       role="alert"
    //       style={{ display: "none" }}
    //     >
    //       <h4 className="alert-heading">Thank you!</h4>
    //       <p>We will get back to you shortly.</p>
    //     </div>
    //     <form id="contact-form" role="form" onSubmit={handleEmail}>
    //       <div className="messages"></div>
    //       <div className="controls">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_name">First name *</label>
    //               <input
    //                 id="form_name"
    //                 type="text"
    //                 name="name"
    //                 className="form-control"
    //                 placeholder="Please enter your first name *"
    //                 required="required"
    //                 data-error="First name is required."
    //               />
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_lastname">Last name *</label>
    //               <input
    //                 id="form_lastname"
    //                 type="text"
    //                 name="surname"
    //                 className="form-control"
    //                 placeholder="Please enter your last name *"
    //                 required="required"
    //                 data-error="Last name is required."
    //               />
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_email">Email *</label>
    //               <input
    //                 id="form_email"
    //                 type="email"
    //                 name="email"
    //                 className="form-control"
    //                 placeholder="Please enter your email *"
    //                 required="required"
    //                 data-error="Valid email is required."
    //               />
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="form-group">
    //               <label htmlFor="form_need">Please specify your need *</label>
    //               <select
    //                 id="form_need"
    //                 name="need"
    //                 className="form-control"
    //                 required="required"
    //                 data-error="Please specify your need."
    //               >
    //                 {needs.map((need, index) => (
    //                   <option key={index} value={need.option}>
    //                     {need.option}
    //                   </option>
    //                 ))}
    //               </select>
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-md-12">
    //             <div className="form-group">
    //               <label htmlFor="form_message">Message *</label>
    //               <textarea
    //                 id="form_message"
    //                 name="message"
    //                 className="form-control"
    //                 placeholder="Message for us *"
    //                 rows="4"
    //                 required="required"
    //                 data-error="Please, leave us a message."
    //               ></textarea>
    //               <div className="help-block with-errors"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-12 pb-5">
    //             <input
    //               id="form-submit-btn"
    //               type="submit"
    //               className="btn btn-primary mb-5"
    //               value="Send message"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sticky-menu"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "otm-hero-light"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_NavBar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "otm-breadcrumb"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "otm-breadcrumb-inner"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      "aria-label": "breadcrumb"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
      className: "breadcrumb"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "breadcrumb-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/"
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "breadcrumb-item",
      "aria-current": "page"
    }, "Contact Us")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "contact-us-main"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-12 col-lg-6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "contact-form-title"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Contact Us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "contact-form-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      id: "contactForm",
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "form_need"
    }, "Please select request type *"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      id: "form_need",
      name: "Need",
      className: "form-control",
      required: "required",
      "data-error": "Please select request type."
    }, needs.map(function (need, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        key: index,
        value: need.option
      }, need.option);
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Your Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "form-control form-control-lg",
      placeholder: "Full Name",
      name: "Name",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Company (if applicable)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "form-control form-control-lg",
      placeholder: "Company Name",
      name: "Company Name"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "form-control form-control-lg",
      placeholder: "+1 (123) 555-5678",
      name: "Phone Number",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "email",
      className: "form-control form-control-lg",
      placeholder: "youremail@address.com",
      name: "Email",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Street Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "form-control form-control-lg",
      placeholder: "100 Street Address",
      name: "Street Address",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-5"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "City"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "form-control form-control-lg",
      placeholder: "Your City",
      name: "City",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "State"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      id: "form_state",
      name: "State",
      className: "form-control",
      required: "required",
      "data-error": "Please select your State."
    }, states.map(function (state, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        key: index,
        value: state.option
      }, state.option);
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Zip"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "form-control form-control-lg",
      placeholder: "12345",
      name: "Zip",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "thank-you-alert",
      className: "alert alert-success mb-5",
      role: "alert",
      style: {
        display: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "alert-heading"
    }, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We will get back to you shortly.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "error-alert",
      className: "alert alert-success mb-5",
      role: "alert",
      style: {
        display: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "alert-heading"
    }, "Hmmm!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Something went wrong. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://app.purechat.com/w/otmdispatch"
    }, "Contact Support"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group custom-form-group col-12 text-right"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "loader",
      role: "alert",
      style: {
        display: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_8___default.a,
      className: "loaderImage"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-lg otm-action-btn",
      disabled: sendingMail
    }, "Submit")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-12 col-lg-5 offset-lg-1"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "contact-form-title"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Contact Information")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "contact-details"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "chat-time"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Need to talk with an agent?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "8AM - 5PM Live Chat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://app.purechat.com/w/otmdispatch",
      target: "_app"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _images_get_help2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "help"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "contact-point"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Contact our Office"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Toll Free:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "tel:+18008429507"
    }, "(888) 842-9507 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Direct:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "tel:+3212843755"
    }, "(321) 284-3755"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Fax:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "tel:+4075746247"
    }, "(407) 574-6247")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Email Us:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "mailto:INFO@OTMDISPATCH.COM"
    }, "info@otmdispatch.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9500 Satellite Blvd Suite 170, Orlando, FL 32837"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "OTM Dispatch",
      className: "contact-info-logo"
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "gmap-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gmap-inner text-center"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.google.com/maps/dir/?api=1&destination=9500%20SATELLITE%20BLVD%20SUITE%20170%2C%20ORLANDO%2C%2032837",
      className: "btn btn-lg btn-otm-dark"
    }, "Locate Us"))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu plans-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-title text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Diamond Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "OTM DISPATCH")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "professional-dispatching"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "Diamond Plan")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "Diamond Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-text-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "What is included in this plan:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Search for the best paying loads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Negotiate the best rates and terms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " Complete Broker-Carrier Packets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Daily check of load status and updates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Detention time negotiation "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Handle Invoicing and all paperwork for each load"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Corporate & Individual Income Tax Preparation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Corporations, Partnerships and/or LLCs State\u2019s Annual Report Filing "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "FTA & IRP Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "UCR Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Form 2290 \u2013 Schedule 1 Renewal (mostly known as Road Taxes) "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "NY HUT & NM Weight Distance Permits Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IFTA Quarterly Report Filing "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "NY HUT, KY & NM Weight Distance Quarterly Report Filing  "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disclosure:"), " OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plans-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/partnership",
    className: "btn btn-orange btn-shadow"
  }, "Partner With Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/solutions#otm-plans",
    className: "btn btn-blue btn-shadow"
  }, "Go Back"))))));
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu plans-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-title text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Emerald Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "OTM DISPATCH")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "professional-dispatching"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "Emerald Plan")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "Emerald Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-text-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "What is included in this plan:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Search for the best paying loads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Negotiate the best rates and terms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Complete Broker-Carrier Packets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Daily check of load status and updates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Detention time negotiation"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disclosure:"), " OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plans-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/partnership",
    className: "btn btn-orange btn-shadow"
  }, "Partner With Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/solutions#otm-plans",
    className: "btn btn-blue btn-shadow"
  }, "Go Back"))))));
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_home_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _images_globe_sm_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var _images_globe_sm_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_globe_sm_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_truck_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90);
/* harmony import */ var _images_truck_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_truck_icon_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_logistics_platform_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _images_logistics_platform_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logistics_platform_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = (function () {
  var textAnimation = function textAnimation() {
    $('.text-wrapper .letters:not(.letters-1)').removeClass('d-none');
    $('.ml7 .letters').each(function () {
      $(this).html($(this).text().replace(/([^\x80-\xFF]|[À-ÖØ-öø-ÿ]|\w)/g, "<span class='letter letter-$&'>$&</span>"));
    });
    animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_8___default.a.timeline({
      loop: true
    }).add({
      targets: '.letters-1 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: function delay(el, i) {
        return 50 * i;
      }
    }).add({
      targets: '.letters-1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 800
    }).add({
      targets: '.letters-2 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: function delay(el, i) {
        return 50 * i;
      }
    }).add({
      targets: '.letters-2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 800
    }).add({
      targets: '.letters-3 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: function delay(el, i) {
        return 50 * i;
      }
    }).add({
      targets: '.letters-3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 800
    }).add({
      targets: '.letters-4 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: function delay(el, i) {
        return 50 * i;
      }
    }).add({
      targets: '.letters-4',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 800
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.getElementById("menuBackground").style.top = "120px";
    scrollTo(0, 0);
    $('.carousel').carousel({
      interval: 10000
    });
    textAnimation();
    return function () {
      document.getElementById("menuBackground").style.top = "98px";
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero homepage"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_NavBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    light: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center hero-text-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-text-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Powered By"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "ml7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-wrapper w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "letters letters-1"
  }, "Integrity."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "letters d-none letters-2"
  }, "Our Commitment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "letters d-none letters-3"
  }, "Innovation."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "letters d-none letters-4"
  }, "Your Future."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Professional Dispatching and Business Services "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Set out to deliver valuable and consistent experiences"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/solutions#otm-plans",
    className: "btn btn-otm-cta"
  }, "CARRIERS"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: "https://rdvine.com/otm/index.html",
    position: "absolute",
    width: "100%",
    id: "myId",
    className: "myClassname",
    height: "100%",
    scrolling: "no",
    styles: {
      height: "505px"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "smart-dispatch"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-background-top"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-background-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-background"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "smart-dispatch",
    className: "carousel slide carousel-fade",
    "data-ride": "carousel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "icon  icon--tall"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 53.29 66.43"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ".qndhcoflos-a{fill:none;stroke:#00548a;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.64px}"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    className: "qndhcoflos-a",
    points: "8.71 61.48 0.82 57.54 0.82 52.61 52.47 52.61 52.47 57.54 44.58 61.48 8.71 61.48"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "23.38",
    y1: "54.83",
    x2: "29.55",
    y2: "54.83"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "13.39 52.61 13.39 28.7 40.15 28.7 40.15 52.61"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "5.07",
    y1: "17.68",
    x2: "48.59",
    y2: "17.68"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "23.38",
    y1: "31.81",
    x2: "29.55",
    y2: "31.81"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "23.38",
    y1: "7.87",
    x2: "29.55",
    y2: "7.87"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "16.23",
    y1: "34.74",
    x2: "36.7",
    y2: "34.74"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "16.23",
    y1: "49.4",
    x2: "36.7",
    y2: "49.4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "7.82 0.82 10.32 3.89 10.32 28.7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "13.39 39.23 7.63 39.23 2.24 44.61 2.24 49.4 13.39 49.4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "4.69",
    y1: "46.2",
    x2: "10.32",
    y2: "46.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "40.15 39.23 45.91 39.23 51.3 44.61 51.3 49.4 40.15 49.4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "48.85",
    y1: "46.2",
    x2: "43.22",
    y2: "46.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "13.39 28.7 8.47 28.7 8.47 39.23"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    className: "qndhcoflos-a",
    x: "3.28",
    y: "20.14",
    width: "3.34",
    height: "6.37"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "45.72 0.82 43.22 3.89 43.22 28.7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "40.15 28.7 45.07 28.7 45.07 39.23"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    className: "qndhcoflos-a",
    x: "46.92",
    y: "20.14",
    width: "3.34",
    height: "6.37",
    transform: "translate(97.18 46.65) rotate(-180)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "13.39",
    y1: "28.7",
    x2: "13.39",
    y2: "14.08"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "32.7",
    y1: "14.11",
    x2: "13.39",
    y2: "14.11"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "40.15",
    y1: "14.11",
    x2: "32.7",
    y2: "14.11"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "4.69",
    y1: "49.4",
    x2: "4.69",
    y2: "52.61"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "48.85",
    y1: "49.4",
    x2: "48.85",
    y2: "52.61"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "qndhcoflos-a",
    d: "M11.85,61.48v2.66a1.48,1.48,0,0,1-1.47,1.48H6.16a1.48,1.48,0,0,1-1.47-1.48V59.47"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "qndhcoflos-a",
    d: "M41.49,61.48v2.66A1.48,1.48,0,0,0,43,65.62h4.22a1.48,1.48,0,0,0,1.47-1.48V59.47"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "40.15",
    y1: "14.08",
    x2: "40.15",
    y2: "28.7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "13.39",
    y1: "14.08",
    x2: "15.06",
    y2: "5.18"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    className: "qndhcoflos-a",
    points: "10.32 10.55 15.06 5.18 38.48 5.18 43.22 10.55"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "38.48",
    y1: "5.18",
    x2: "40.15",
    y2: "14.08"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "17.36",
    y1: "37.05",
    x2: "17.36",
    y2: "46.94"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "23.36",
    y1: "37.05",
    x2: "23.36",
    y2: "46.94"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "29.35",
    y1: "37.05",
    x2: "29.35",
    y2: "46.94"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "qndhcoflos-a",
    x1: "35.35",
    y1: "37.05",
    x2: "35.35",
    y2: "46.94"
  })))), "Smart Dispatching")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Book and retain more business. We partner with you to keep drivers on the road, eliminate manual check calls and increase customer satisfaction. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Our professional dispatchers keep you loaded with the best loads at the highest prices."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-stack__cta text-stack__cta--offset js-cta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-wrapper",
    "data-module": "circle-button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/contact",
    className: "button button--circle button--orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "button__content js-button-content"
  }, "Speak to a Representative"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "button__arrow js-button-arrow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 27 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 7.5h25.62M19.602 1l6.335 6.5-6.335 6.5"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button__outline js-button-outline"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "icon  icon--square"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 59.74 59.74"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ".dlqjspgcln-a{fill:none;stroke:#216294;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M23.15,46.09a87.53,87.53,0,0,1-1.41-16.22C21.74,13.93,25.38,1,29.87,1c2.29,0,4.37,3.39,5.85,8.82"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M36.59,13.64A87.65,87.65,0,0,1,38,29.87c0,16-3.64,28.87-8.13,28.87-2.3,0-4.37-3.38-5.85-8.83"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M13.64,36.59A88.91,88.91,0,0,1,24.12,24.12C35.4,12.85,47.11,6.28,50.29,9.46c1.62,1.62.69,5.48-2.11,10.37"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M46.1,23.15A87.56,87.56,0,0,1,35.62,35.62c-11.28,11.27-23,17.84-26.16,14.67-1.63-1.63-.7-5.49,2.1-10.38"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M13.65,23.15a87.61,87.61,0,0,1,16.22-1.41c16,0,28.87,3.64,28.87,8.13,0,2.29-3.39,4.37-8.82,5.85"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M46.1,36.59A87.65,87.65,0,0,1,29.87,38C13.93,38,1,34.36,1,29.87,1,27.57,4.38,25.5,9.83,24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M23.15,13.65A87.55,87.55,0,0,1,35.62,24.12c11.27,11.28,17.84,23,14.67,26.17-1.63,1.62-5.49.69-10.37-2.1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dlqjspgcln-a",
    d: "M36.59,46.1A87.56,87.56,0,0,1,24.12,35.62C12.85,24.34,6.28,12.63,9.46,9.46c1.62-1.63,5.48-.7,10.37,2.1"
  })))), "Business Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "OTM Dispatch provides affordable and competitively priced dispatch, tax, accounting, truck permits and consulting services to individuals as well as small and medium size businesses nationwide."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "OTM Dispatch is currently dispatching Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-stack__cta text-stack__cta--offset js-cta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-wrapper",
    "data-module": "circle-button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/contact",
    className: "button button--circle button--orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "button__content js-button-content"
  }, "Speak to a Representative"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "button__arrow js-button-arrow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 27 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 7.5h25.62M19.602 1l6.335 6.5-6.335 6.5"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button__outline js-button-outline"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-prev",
    href: "#smart-dispatch",
    role: "button",
    "data-slide": "prev"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow-left-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\r c-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\r c4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\r "
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-next",
    href: "#smart-dispatch",
    role: "button",
    "data-slide": "next"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow-right-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\r H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\r c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z"
  }))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container otm-home-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-md-12 col-lg-6 column2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-main-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Professional Dispatching"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "OTM Dispatch provides affordable and competitively priced dispatch, tax, accounting, truck permits and consulting services to individuals as well as small and medium size businesses nationwide. OTM Dispatch is currently dispatching Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our agents are here to be the most transparent they can. We are here to work side by side with brokers, shippers and drivers to help minimize costs while maximizing profits."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-orange btn-shadow",
    href: "/company"
  }, "Learn More"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-md-12 col-lg-6 column1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "OTM Dispatch. Professional Dispatching",
    className: "otm-main-logo"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "otm-carousel-team",
    className: "carousel slide carousel-fade",
    "data-ride": "carousel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-md-12 col-lg-6 team-img-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logistics_platform_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Platform",
    className: "img-fluid"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-md-12 col-lg-6 team-text-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-text-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Your business is our business"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We're building solutions to deliver peak efficiency and flexibility in your supply chain, backed by the highest level of Customer Service Agents."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-md-12 col-lg-6 team-img-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logistics_platform_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Platform",
    className: "img-fluid"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-md-12 col-lg-6 team-text-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-text-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Platform Designed for your Supply Chain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Technology embedded with deep transportation expertise to meet the unique needs of shippers, LSPs (Logistics Service Providers) and carriers worldwide.")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-prev",
    href: "#otm-carousel-team",
    role: "button",
    "data-slide": "prev"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow-left-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\r c-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\r c4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\r "
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-next",
    href: "#otm-carousel-team",
    role: "button",
    "data-slide": "next"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow-right-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\r H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\r c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z"
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-trucks"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "sliding-animation"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-background"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "slider-bottom"
  }))));
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_partnership_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _styles_partnership_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_partnership_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _images_get_help2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _images_get_help2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_get_help2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_partnership_process_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53);
/* harmony import */ var _images_partnership_process_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_partnership_process_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_loader_gif__WEBPACK_IMPORTED_MODULE_7__);

 // import axios from "axios";






 // const API_URL = "http://167.114.153.121:1337";
// const url = `${API_URL}/pages/5dff3ba2aecfad34d76ee5a0`;

var Partnership = function Partnership() {
  // const [bannerHeader, setBannerHeader] = useState([]);
  // const [bannerSubheader, setBannerSubheader] = useState([]);
  // const [imageURL, setImageURL] = useState([]);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      sendingMail = _useState2[0],
      setSendingMail = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // axios.get(url).then((res) => {
    //   setBannerHeader(res.data.fields[0].header);
    //   setBannerSubheader(res.data.fields[0].subheader);
    //   setImageURL(`${API_URL + res.data.fields[0].background.url}`);
    // });
    if (process.browser) scrollTo(0, 0);
  }, []);

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var alert = document.getElementById("loader");
    alert.style.display = "block";
    setTimeout(function () {
      alert.style.display = "none";
    }, 4000);
    setSendingMail(true);
    var data = $(event.target).serializeArray();
    var body = "Hi, You have received a new partnership request for OTM Dispatch. Please see below for lead information: <br /><br />"; //let signature ='Thank you! <br />OTM Dispatch Lead Capture';

    data.map(function (field) {
      return body = body + field.name + " : " + field.value + "<br />";
    });
    Email.send({
      Host: "smtp.office365.com",
      Username: "leads@otmdispatch.com",
      Password: "Kok49018",
      To: "leads@otmdispatch.com",
      From: "leads@otmdispatch.com",
      Subject: "New Lead - OTM Dispatch",
      Body: body
    }).then(function (message) {
      setSendingMail(false);

      if (message === "OK") {
        var _alert = document.getElementById("thank-you-alert"); //alert('We received your details. Thank you :)');


        _alert.style.display = "block";
        setTimeout(function () {
          _alert.style.display = "none";
        }, 4000);
        document.getElementById("partnershipForm").reset();
      } else {
        var _alert2 = document.getElementById("error-alert"); //alert('We received your details. Thank you :)');


        _alert2.style.display = "block";
        setTimeout(function () {
          _alert2.style.display = "none";
        }, 4000);
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sticky-menu"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "otm-breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "Partner With Us")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "partner-main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row flex-row-reverse"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12 col-lg-7 offset-lg-1 partner-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "partner-form-inner"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "section-title"
  }, "Partner With Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    id: "partnershipForm",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "form-label"
  }, "Package Of Interest?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-check form-check-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "Package Name",
    id: "Ruby",
    defaultValue: "Ruby",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "Ruby"
  }, "Ruby")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-check form-check-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "Package Name",
    id: "Emerald",
    defaultValue: "Emerald"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "Emerald"
  }, "Emerald")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-check form-check-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "Package Name",
    id: "Diamond",
    defaultValue: "Diamond"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "Diamond"
  }, "Diamond"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "contactName"
  }, "1. What is your Name? Contact Person"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "contactName",
    className: "form-control otm-form-control",
    type: "text",
    placeholder: "Your Name",
    name: "Name",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "carrierName"
  }, "2. What is the Carrier Name?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "carrierName",
    className: "form-control otm-form-control",
    type: "text",
    placeholder: "Carrier Name",
    name: "Carrier Name",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "phoneNumber"
  }, "3. What is your Phone Number?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "phoneNumber",
    className: "form-control otm-form-control",
    type: "text",
    placeholder: "123-234-5678",
    name: "Phone Number",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "emailAddress"
  }, "4. What is your Email Address?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "emailAddress",
    className: "form-control otm-form-control",
    type: "email",
    placeholder: "email@emailaddress.com",
    name: "Email",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "physicalAddress"
  }, "5. What is the Physical Address?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "physicalAddress",
    className: "form-control otm-form-control",
    type: "text",
    placeholder: "123 Street Address City, State & Zip",
    name: "Physical Address",
    required: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "faxNumber"
  }, "6. Fax Number?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "faxNumber",
    className: "form-control otm-form-control",
    type: "text",
    placeholder: "123-456-7890",
    name: "Fax Number"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "dotNumber"
  }, "7. DOT #"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control otm-form-control",
    id: "dotNumber",
    placeholder: 12345,
    name: "DOT"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "MCNumber"
  }, "8. MC #"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-has-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control otm-form-control",
    id: "MCNumber",
    placeholder: 12345,
    name: "MC"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "thank-you-alert",
    className: "alert alert-success mb-5",
    role: "alert",
    style: {
      display: "none"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "alert-heading"
  }, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We will get back to you shortly.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "error-alert",
    className: "alert alert-success mb-5",
    role: "alert",
    style: {
      display: "none"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "alert-heading"
  }, "Hmmm!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Something went wrong.", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://app.purechat.com/w/otmdispatch"
  }, "Contact Support"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group text-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "loader",
    role: "alert",
    style: {
      display: "none"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "loaderImage"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-success partner-btn-submit",
    disabled: sendingMail
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Ok"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {
      enableBackground: "new 0 0 512 512"
    },
    xmlSpace: "preserve"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "form-footer"
  }, "OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12 col-lg-4 partner-process"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "partner-process-inner"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "process-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Partnership Process Explained")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_partnership_process_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "partnership-image",
    alt: "Partnership Process"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "steps-pills"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "step-li step-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "step-pill pill-green"
  }, "Fill out form")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "step-li step-two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "step-pill pill-light"
  }, "Wait for our call")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "step-li step-three"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "step-pill pill-blue"
  }, "Get Approved")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "step-li step-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "step-pill pill-green"
  }, "Get Top Loads")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "step-li step-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "step-pill pill-dark"
  }, "Maximize Profits"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "get-help-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Press below to get assistance from one of our representatives."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://app.purechat.com/w/otmdispatch",
    target: "_app"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_get_help2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "help"
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Partnership);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (process.browser) scrollTo(0, 0);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "Privacy")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mt-5",
    id: "Privacy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "Privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "OTM Dispatch requires Carrier to provide the following documentation to provide specified services, please see below:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Corporate & Individual Income Tax Preparation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Corporations, Partnerships and/or LLCs State\u2019s Annual Report Filing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IFTA & IRP Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "UCR Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Form 2290 - Road Taxes Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "NY HUT & NM Weight Distance Permits Renewal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IFTA Quarterly Report Filing "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "NY HUT, KY & NM Weight Distance Quarterly Report Filing ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1- Corporate & Individual Income Tax Preparation:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Carrier is responsible of providing all the necessary information and documentation in a timely manner to OTM Dispatch to prevent paying penalties and interests to the Internal Revenue Service and/or any State Department of Revenue for filing tax returns after the due date. Carrier will have to be under contract with OTM Dispatch for at least 9 months ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "a-"), " Corporate Tax Return \u2013 Carrier is responsible of providing the following information in detail and in an organized manner: the total amount of income for the year, total amount of expenses for the year per category or expense, example: Fuel-$_ _._ _, Tolls-$_ _._ _, etc. Carrier is also responsible for paying all the tax due amounts if any to the Internal Revenue Service and/or any State Department of Revenue  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "b-"), " Individual Income Tax Return - Carrier is responsible of providing the following information in detail and in an organized manner: Personal information such as name(s), social security number(s), date(s) of birth, phone number(s), email address(s), income, expenses and any other information needed to complete and file the income tax return to the Internal Revenue Service and/or any State Department of Revenue. Carrier is also responsible for paying all the tax due amounts if any to the Internal Revenue Service and/or any State Department of Revenue.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2- Corporations, Partnerships and/or LLCs State\u2019s Annual Report Filing:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Carrier is responsible of providing the State\u2019s name, document number, officer\u2019s name(s) and title, address, registered agent\u2019s name and address, and any information changes if applicable. Carrier is solely responsible for paying all the state related fees. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "3- IFTA & IRP Renewal: "), "\u2013 IFTA stands for International Fuel Tax Agreement. IFTA pertains to the cooperative agreement between 48 states in the U.S. and 10 provinces in Canada. It allows interjurisdictional carriers to report and pay taxes for the fuel their vehicles consume across states using a single fuel tax license. IRP stands for International Registration Plan. The International Registration Plan (IRP) is a reciprocal agreement that authorizes the proportional registration among the jurisdictions (states) of commercial motor vehicles and truckers. Carrier is responsible of providing the login information to OTM Dispatch to be able to renew the IFTA Decals and the IRP Tag/Registration every year. Carrier is solely responsible for paying all the state related fees.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "4- UCR Renewal: "), " - UCR stands for Unified Carrier Registration program. It is a federally-mandated system for registering operators of commercial vehicles who are involved in interstate and international travel. This annual registration must be renewed by December 31 each year. Carrier is solely responsible for paying all the state related fees. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "5- Form 2290: "), "- Schedule 1, Renewal (mostly known as Road Taxes) - Form 2290 - Schedule 1. Form 2290 - Schedule 1 is the proof of payment for the Heavy Vehicle Use Tax (HVUT) that Truckers pay to the Internal Revenue Service (IRS). An IRS stamped Schedule 1 is required for tags and vehicle registration at the Department of Motor Vehicle (DMV). Carrier is solely responsible for paying all the processing and filing fees to the IRS.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "6- NY HUT & NM Weight Distance Permits Renewal "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "a-"), " What is the New York HUT permit? The New York highway use tax (HUT) is imposed on motor carriers operating certain motor vehicles on New York State public highways. ... A HUT certificate of registration is required for any truck, tractor, or other self-propelled vehicle with a gross weight in excess of 18,000 pounds. Carrier is responsible for providing the Login information for the One Stop Credentialing and Registration (OSCAR) system. Five New York State agencies involved in regulating motor carrier activities have designed a one stop shopping Web site which allows the industry a single point of contact to apply, change, pay for, and receive the operating credentials for HUT. Carrier is solely responsible for paying all the state renewal fees for HUT for each vehicle before the current permit series is due for renewal.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "b-"), " New Mexico imposes a weight-distance tax on owners, operators, and registrants of intra and interstate commercial vehicles with a declared gross vehicle weight in excess of 26,000 pounds. Any motor carrier 26,001-80,000 pounds traveling on New Mexico highways is subject to this tax. Companies must register and apply each year for a New Mexico Weight Distance Tax Electronic Permit for each vehicle. Carrier is solely responsible for paying all the state renewal fees for the New Mexico Weight Distance Tax Electronic Permit for each vehicle.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "7- IFTA Quarterly Report Filing:"), " \u2013 Carrier is responsible for providing a list of all the states that the carrier traveled for any particular quarter of the year including the total amount of miles and gallons of fuel per each state traveled and such information must be furnished to OTM Dispatch on or before the 10th day of the month that the quarterly report is due to make sure the IFTA quarterly report is filed on-time and to avoid paying late penalty and interest fees. Carrier is also responsible for paying the amount due on the IFTA quarterly report.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "8-NY HUT, KY & NM Weight Distance Quarterly Report Filing:"), " \u2013 Carrier is responsible for providing the total amount of miles per vehicle traveled across the states of NY and NM and the total miles for all the vehicles traveled across the state of KY and such information must be furnished to OTM Dispatch on or before the 10th day of the month that the quarterly report is due to make sure the NY HUT, KY & NM Weight Distance Quarterly Reports are filed on-time and to avoid paying late penalty and interest fees. Carrier is also responsible for paying the amount due on the NY HUT, KY & NM Weight Distance Quarterly Reports.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "9- All quarterly reports are due as follows: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "a-"), " Q1 (January, February, March) is due on April 30th", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "b-"), " Q2 (April, May, June) is due on July 31st ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "c-"), " Q3 (July, August, September) is due on October 31", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "d-"), " Q4 (October, November, December) is due on January 31st ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Disclosure: OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))));
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu plans-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-title text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Ruby Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "OTM DISPATCH")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "professional-dispatching"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "Ruby Plan")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "Ruby Plan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-text-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "What is included in this plan:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Search for the best paying loads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Negotiate the best rates and terms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Complete Broker-Carrier Packets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Daily check of load status and updates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Detention time negotiation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Handle Invoicing and all paperwork for each load"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disclosure:"), " OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plans-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/partnership",
    className: "btn btn-orange btn-shadow"
  }, "Partner With Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/solutions#otm-plans",
    className: "btn btn-blue btn-shadow"
  }, "Go Back"))))));
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_solution_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _styles_solution_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_solution_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _images_globe3_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var _images_globe3_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_globe3_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_logistics_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);
/* harmony import */ var _images_logistics_icon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_logistics_icon_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_cta_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _images_cta_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_cta_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_truck_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _images_truck_icon_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_truck_icon_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_truck_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
/* harmony import */ var _images_truck_left_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_truck_left_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_truck_left_mobile_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var _images_truck_left_mobile_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_truck_left_mobile_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_otm_logo_lines_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58);
/* harmony import */ var _images_otm_logo_lines_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_otm_logo_lines_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_consulting_right_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59);
/* harmony import */ var _images_consulting_right_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_consulting_right_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_12__);
 // import Solution from "../components/Solution";
// import axios from "axios";










 // import SolutionTruck from "../images/solutions-trucks2.svg";


 // import SolutionsPathBG from "../images/solutions-path-bg.png";
// const API_URL = "http://167.114.153.121:1337";
// const solutionsPageUrl = `${API_URL}/pages/5dff3f78aecfad34d76ee5c5`;

var Solutions = function Solutions() {
  // const [data, setData] = useState([]);
  // const [banner, setBanner] = useState([]);
  // const [bannerImage, setBannerImage] = useState([]);
  // const [solutionsIntro, setSolutionsIntro] = useState([]);
  // const [solutionsIntroImage, setSolutionsIntroImage] = useState([]);
  // const [solutions, setSolutions] = useState([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // axios.get(solutionsPageUrl).then((res) => {
    //   setData(res.data);
    //   setBanner(res.data.fields[0]);
    //   setBannerImage(API_URL + res.data.fields[0].background.url);
    //   setSolutionsIntro(res.data.fields[1].content[0]);
    //   setSolutionsIntroImage(API_URL + res.data.fields[1].content[0].icon.url);
    //   setSolutions(res.data.fields[2].content);
    // });
    document.getElementById("menuBackground").classList.remove("show");
  }, []);

  if (process.browser) {
    if (location.hash) {
      setTimeout(function () {
        document.getElementById(location.hash.replace('#', '')).scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-hero-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-title text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Solutions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "OTM DISPATCH")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "professional-dispatching"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "Solutions")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solutions-main-left-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "Solutions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "OTM Dispatch provides professional dispatching and business Services. Our professional dispatchers keep you loaded with the best loads at the highest prices and will match a load with your best resource to deliver it. OTM Dispatch is currently dispatching Reefers, Dry Vans, Flatbeds, Car Haulers and Hotshots."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "We will ensure that the motor carrier is in compliance with all the FMCSA (Federal Motor Carrier Safety Administration) rules and regulations to keep the carrier on the road pulling loads and increasing profitability."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#hide1",
    className: "hide",
    id: "hide1"
  }, "Read More"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#show1",
    className: "show",
    id: "show1"
  }, "Read Less"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "Our dispatchers can help you plan for and deal with weather delays, traffic congestion and other issues that can cause delays while you are on the road."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "OTM Dispatch provides the highest level of customer service, support, business solutions, and help you manage relationships with shippers, address issues that arise, and set proper service expectations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "At OTM Dispatch, we also handle the paperwork associated with delivering and billing for the loads including all invoice submissions to the broker and/or shipper or a factoring company, collections follow-ups, and payment processing.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/partnership",
    className: "btn btn-blue btn-shadow"
  }, "Partner With Us"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "crop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_globe3_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    className: "solutions-main-img-right"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "otm-plans",
    id: "otm-plans"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-main-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "OTM Dispatch Handles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "All the paperwork so you, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " can focus on your business!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row otm-plans-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 otm-plans-diamond"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-icon-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logistics_icon_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "plan-name"
  }, "Diamond Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "plan-desc"
  }, "One Plan, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Solves Everything")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "plan-price"
  }, "10%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "price-small-desc"
  }, "of the load"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/diamond",
    className: "plan-cta"
  }, "Find out more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_cta_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "cta-arrow"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 otm-plans-emerald"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-icon-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_truck_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "plan-name"
  }, "Emerald Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "plan-desc"
  }, "Not just the Basics, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Top Loads")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "plan-price"
  }, "8%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "price-small-desc"
  }, "of the load"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/emerald",
    className: "plan-cta"
  }, "Find out more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_cta_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "cta-arrow"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 otm-plans-ruby"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plan-icon-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_truck_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "plan-name"
  }, "Ruby Plan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "plan-desc"
  }, "Simple and Efficient, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Easy to Manage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "plan-price"
  }, "9%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "price-small-desc"
  }, "of the load"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/ruby",
    className: "plan-cta"
  }, "Find out more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_cta_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "cta-arrow"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row plan-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More than a service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "You get the proper support that helps you ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " unlock your real business potential."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "truck-permit",
    id: "truck-permits"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-row-reverse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solutions-main-right-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "Truck Permits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "OTM Dispatch provides Business Consulting, Tax, and Accounting Services nationwide to businesses in the transportation industry such as Trucking and Motor Coach bus companies. We are offering fuel and mileage tax reporting to all states as well as permitting for all your requirements."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "WE SPECIALIZE IN:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pl-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "US DOT and MC Numbers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IRP (Apportioned Tag Registrations)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IFTA License and Decals"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2290 (Road Taxes)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Overweight, Oversize, Wide load & Super load Permits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Trip, Fuel & Mileage Permits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "USDOT Compliance Audits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IFTA Quarterly Fuel Tax Returns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Fuel Tax audits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "And much more")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "btn btn-orange btn-shadow"
  }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-4 solution-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_truck_left_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    className: "solution-truck"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_truck_left_mobile_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    className: "solution-truck-mobile"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-divider section-divider-top"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-divider section-divider-bottom"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solution-main",
    id: "tax-planning"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solutions-main-right-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "Tax Planning and Preparation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "We apply tax planning strategies for you to have more money to save and invest or more money to spend. By offering tax planning you could defer and flat out avoid taxes by taking advantage of beneficial tax-law provisions, increasing and accelerating tax deductions and tax credits. We help you make an informed decision that you will be comfortable with while keeping compliance as a critical component."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "You can be confident that our firm provides our individual and business clients with taxation expertise and knowledge that they deserve year round. It is our goal to build a long-term relationship that you can rely on when you need professional assistance with a timely and a personal approach."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "OUR TAX PLANNING & PREPARATION ROLES INCLUDE, BUT ARE NOT LIMITED TO:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pl-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Tax Consulting, providing answers and solutions to everyday business needs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Tax return preparation for Individuals, LLC\u2019s, Corporations, and Partnerships"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Multi-State Tax Return filings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Review of prior year\u2019s tax returns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "IRS problem resolution for potential abatements, settlements or payment options"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Secure electronic storage of your tax returns and supporting documents")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "btn btn-orange btn-shadow"
  }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_otm_logo_lines_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    className: "about-main-img-right-logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "accounting-otm",
    id: "accounting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-row-reverse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-main-left-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "Accounting and Bookkeeping"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "OTM Dispatch is dedicated to provide the highest quality accounting standards. We can prepare, examine, and analyze financial records and make sure that those records are accurate and that taxes are paid properly and on time. We provide advice and recommend financial actions to help businesses run efficiently."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "Bookkeeping, we can provide the recording of your financial transactions on a day to day basis by establishing a chart of accounts. Those transactions include sales, purchases receipts and payments by individuals or businesses along with reconciliation of bank and credit card statements."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "btn btn-orange btn-shadow"
  }, "Contact Us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clear"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solutions-truck-animation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solutions-slider-trucks"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solutions-sliding-animation"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solutions-slider-background"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solutions-slider-bottom"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bussiness-consulting",
    id: "consulting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-main-left-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "Business Consulting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "For more than 25 years, our team has provided quality tailored accounting and consulting services to meet the needs of each individual client."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "Our Business Consultants provide expert advice in management consulting to help organizations improve performance and efficiency. Our professionals analyze businesses, provide strategic planning and create solutions to help companies meet their goals and maximize growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "The success of our firm lies in the personal relationships we build with our clients which is our primary focus. We strive to offer the best services in tax, accounting and consulting for both individuals and businesses."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "btn btn-orange btn-shadow"
  }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_consulting_right_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    className: "consulting-right-img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "tax-debt-resolution",
    id: "irs-tax"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-row-reverse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-main-left-inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-title"
  }, "IRS Tax Debt Resolution"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "At OTM Dispatch we serve clients nationwide to help solve both federal and state tax problems."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "Your case will be efficiently reviewed in a timely manner by our tax professionals."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "We provide personalized attention to the details of each case, representing our clients in all negotiations with the IRS including responding to IRS communications and pursuing procedural and administrative remedies to attain the best outcome and relief for our clients."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "In most cases we are able to settle outstanding taxes, penalties and accumulated interest for a fraction of the amount due and no more threatening calls or letters giving you peace of mind, especially knowing that you have a company that cares about your present and future needs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-desc"
  }, "Our professionals will provide the solution to your IRS Tax Debt including Filing Missing Tax Returns, IRS Offer in Compromise, Payroll Tax Issues, Business Tax Resolution, Federal Tax Liens & Levies, and much more."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: "btn btn-orange btn-shadow"
  }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_otm_trademark_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    className: "solution-tax-logo"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Solutions);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(5);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Question.js

/* harmony default export */ var Question = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "panel panel-default"
  }, external_react_default.a.createElement("div", {
    className: "panel-heading p-3 mb-3",
    role: "tab",
    id: "heading" + props.id
  }, external_react_default.a.createElement("h5", {
    className: "panel-title"
  }, external_react_default.a.createElement("a", {
    className: "collapsed",
    role: "button",
    title: "",
    "data-toggle": "collapse",
    "data-parent": "#accordion",
    href: "#collapse" + props.id,
    "aria-expanded": "true",
    "aria-controls": "collapse" + props.id
  }, props.question))), external_react_default.a.createElement("div", {
    id: "collapse" + props.id,
    className: "panel-collapse collapse",
    role: "tabpanel",
    "aria-labelledby": "heading" + props.id
  }, external_react_default.a.createElement("div", {
    className: "panel-body px-3 mb-5"
  }, external_react_default.a.createElement("p", null, props.answer))));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-async"
var external_react_async_ = __webpack_require__(84);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/QuestionList.js





var API_URL = "http://167.114.153.121:1337";
var url = "".concat(API_URL, "/pages/5dff3bdaaecfad34d76ee5a5");
function QuestionList() {
  var _useState = Object(external_react_["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    external_axios_default.a.get(url).then(function (res) {
      return setData(res.data.fields[0].question);
    });
  }, []);
  return external_react_default.a.createElement("section", {
    className: "accordion-section clearfix mt-3",
    "aria-label": "Question Accordions"
  }, external_react_default.a.createElement("div", {
    className: "container text-muted"
  }, external_react_default.a.createElement("div", {
    className: "panel-group",
    id: "accordion",
    role: "tablist",
    "aria-multiselectable": "false"
  }, external_react_default.a.createElement("ul", {
    className: "pt-4"
  }, data.map(function (question, index) {
    return external_react_default.a.createElement("li", {
      key: index
    }, external_react_default.a.createElement(Question, {
      id: question._id,
      question: question.question,
      answer: question.answer
    }));
  })))));
}
// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/NavBar.js
var NavBar = __webpack_require__(4);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(1);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js




/* harmony default export */ var help = __webpack_exports__["default"] = (function () {
  if (process.browser) {
    if (location.hash) {
      setTimeout(function () {
        document.getElementById(location.hash.replace("#", "")).scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }

    document.getElementById("menuBackground").classList.remove("show");
  }

  return external_react_default.a.createElement("div", {
    className: "sticky-menu"
  }, external_react_default.a.createElement("section", {
    className: "otm-hero-light"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(NavBar["a" /* default */], null))), external_react_default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "about"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, external_react_default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, external_react_default.a.createElement("ol", {
    className: "breadcrumb"
  }, external_react_default.a.createElement("li", {
    className: "breadcrumb-item"
  }, external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "Home")), external_react_default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, "FAQs")))))), external_react_default.a.createElement("div", {
    className: "container mt-5",
    id: "faqs"
  }, external_react_default.a.createElement("h2", {
    className: "text-center"
  }, "Frequently Asked Questions:"), external_react_default.a.createElement(QuestionList, null)), external_react_default.a.createElement("br", null), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
    className: "container my-5 text-center",
    id: "help",
    style: {
      paddingTop: "100px"
    }
  }, external_react_default.a.createElement("h2", {
    className: "mb-5"
  }, "Have more questions?"), external_react_default.a.createElement("a", {
    href: "https://app.purechat.com/w/otmdispatch",
    target: "_app",
    className: "btn btn-primary btn-lg mb-5 questions-btn"
  }, "Online Chat Support")));
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(5);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Service.js

/* harmony default export */ var Service = (function (props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h3", null, props.header), external_react_default.a.createElement("p", null, props.description));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(1);

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/styles/about.css
var about = __webpack_require__(34);

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/NavBar.js
var NavBar = __webpack_require__(4);

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/images/about-img-right.png
var about_img_right = __webpack_require__(21);

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/images/about-img-right-mobile.jpg
var about_img_right_mobile = __webpack_require__(22);

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/images/logo/otm-trademark-white.svg
var otm_trademark_white = __webpack_require__(23);

// EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/images/logo/otm-trademark.svg
var otm_trademark = __webpack_require__(8);
var otm_trademark_default = /*#__PURE__*/__webpack_require__.n(otm_trademark);

// CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/pages/services.js











var API_URL = "http://167.114.153.121:1337";
var url = "".concat(API_URL, "/pages/5dff3787aecfad34d76ee579");

var services_Company = function Company() {
  var _useState = Object(external_react_["useState"])([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // const [aboutUsHeader, setAboutUsHeader] = useState([]);
  // const [aboutUsSubheader, setAboutUsSubheader] = useState([]);
  // const [aboutUsDescriptions, setAboutUsDescriptions] = useState([]);


  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      servicesHeader = _useState4[0],
      setServicesHeader = _useState4[1];

  var _useState5 = Object(external_react_["useState"])([]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      servicesSubheader = _useState6[0],
      setServicesSubheader = _useState6[1];

  var _useState7 = Object(external_react_["useState"])([]),
      _useState8 = slicedToArray_default()(_useState7, 2),
      servicesDescriptions = _useState8[0],
      setServicesDescriptions = _useState8[1]; // const [aboutUsBannerImage, setAboutUsBannerImage] = useState([]);


  var _useState9 = Object(external_react_["useState"])([]),
      _useState10 = slicedToArray_default()(_useState9, 2),
      servicesBannerImage = _useState10[0],
      setServicesBannerImage = _useState10[1];

  if (process.browser) {
    if (location.hash) {
      setTimeout(function () {
        document.getElementById(location.hash.replace('#', '')).scrollIntoView(true);
      }, 150);
    } else {
      scrollTo(0, 0);
    }
  }

  Object(external_react_["useEffect"])(function () {
    external_axios_default.a.get(url).then(function (res) {
      setData(res.data); //   setAboutUsHeader(res.data.fields[0].header);
      //   setAboutUsSubheader(res.data.fields[0].subheader);
      //   setAboutUsBannerImage(`${API_URL + res.data.fields[0].background.url}`);
      //   setAboutUsDescriptions(res.data.fields[1].paragraph);

      setServicesHeader(res.data.fields[2].header);
      setServicesSubheader(res.data.fields[2].subheader);
      setServicesBannerImage("".concat(API_URL + res.data.fields[2].background.url));
      setServicesDescriptions(res.data.fields[3].paragraph);
    });
    document.getElementById("menuBackground").classList.remove("show");
  }, []);
  return external_react_default.a.createElement("div", {
    className: "sticky-menu"
  }, external_react_default.a.createElement("section", {
    className: "otm-hero-light"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(NavBar["a" /* default */], null))), external_react_default.a.createElement("section", {
    className: "about-hero",
    style: {
      backgroundImage: "url(".concat(servicesBannerImage, ")"),
      backgroundSize: "cover"
    }
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row align-items-center"
  }, external_react_default.a.createElement("div", {
    className: "col-12"
  }, external_react_default.a.createElement("div", {
    className: "hero-title text-center"
  }, external_react_default.a.createElement("h2", null, servicesHeader), external_react_default.a.createElement("h4", null, external_react_default.a.createElement("span", null, servicesSubheader))))))), external_react_default.a.createElement("div", {
    className: "otm-breadcrumb",
    id: "about"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "otm-breadcrumb-inner"
  }, external_react_default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, external_react_default.a.createElement("ol", {
    className: "breadcrumb"
  }, external_react_default.a.createElement("li", {
    className: "breadcrumb-item"
  }, external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "Home")), external_react_default.a.createElement("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, servicesHeader)))))), external_react_default.a.createElement("section", {
    className: "about-service",
    id: "services"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row flex-row-reverse"
  }, external_react_default.a.createElement("div", {
    className: "col-12 col-lg-7 about-main-left"
  }, external_react_default.a.createElement("div", {
    className: "about-main-left-inner"
  }, external_react_default.a.createElement("h2", {
    className: "section-title"
  }, "Services"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions",
    className: "solutionsLink"
  }, "Professional Dispatching")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#truck-permits",
    className: "solutionsLink"
  }, "Truck Permits")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#tax-planning",
    className: "solutionsLink"
  }, "Tax Planning and Preparation")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#accounting",
    className: "solutionsLink"
  }, "Accounting and Bookkeeping")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#consulting",
    className: "solutionsLink"
  }, "Business Consulting")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#irs-tax",
    className: "solutionsLink"
  }, "IRS Tax Debt Resolution"))), external_react_default.a.createElement(router_["Link"], {
    to: "/solutions#otm-plans",
    className: "btn btn-orange btn-shadow"
  }, "Our Packages"))))), external_react_default.a.createElement("img", {
    src: otm_trademark_default.a,
    alt: "",
    className: "service-img-logo"
  })));
};

/* harmony default export */ var services = __webpack_exports__["default"] = (services_Company);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "828a84df0925591eebdc8f93046cc019.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "03be059b61bc52fcca6593a9d448b8da.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c69f4d7da33bf729997141d3157dbe2.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("animejs/lib/anime.es.js");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjJweCIgaGVpZ2h0PSI1MDJweCIgdmlld0JveD0iMCAwIDYyIDUwMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkdyb3VwIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjkzLjg2NDA2MjUlIiB4Mj0iNTAlIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzdBOEY5RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzFEMzc5IiBvZmZzZXQ9IjE4LjQyMzQzNTQlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3MUNBRDMiIG9mZnNldD0iNDMuMjkzMzg2NiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSI2OC4wODg3NzA1JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzFEMzc5IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjUwJSIgeDI9IjAlIiB5Mj0iNTAlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMEYzRjUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzcxRDM3OSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJNYWluLURlc2lnbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlBhcnRuZXJzaGlwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjg3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ic2lkZWJhciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE2OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJzdGVwcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkuMDAwMDAwLCAxMjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuMDAwMTgwNiwzLjE5NzQ0MjMxZS0xNCBDNDYuNTY4NzIzMSwzLjI0ODM1NjQ0ZS0xNCA2MC4wMDAxODA2LDEzLjQzMTQ1NzUgNjAuMDAwMTgwNiwzMCBDNjAuMDAwMTgwNiw0NC44NjQ4NDg5IDQ5LjE4ODk0MDEsNTcuMjA0NTk3MyAzNS4wMDA1NjAxLDU5LjU4NTE0NDEgTDM1LjAwMDM3OTUsMTEwLjQxNDg1NiBDNDkuMTg4NzU5NSwxMTIuNzk1NDAzIDYwLDEyNS4xMzUxNTEgNjAsMTQwIEM2MCwxNTQuODY0ODQ5IDQ5LjE4ODc1OTUsMTY3LjIwNDU5NyAzNS4wMDAzNzk1LDE2OS41ODUxNDQgTDM1LjAwMDM3OTUsMjIwLjQxNDg1NiBDNDkuMTg4NzU5NSwyMjIuNzk1NDAzIDYwLDIzNS4xMzUxNTEgNjAsMjUwIEM2MCwyNjQuODY0ODQ5IDQ5LjE4ODc1OTUsMjc3LjIwNDU5NyAzNS4wMDAzNzk1LDI3OS41ODUxNDQgTDM1LjAwMDM3OTUsMzMwLjQxNDg1NiBDNDkuMTg4NzU5NSwzMzIuNzk1NDAzIDYwLDM0NS4xMzUxNTEgNjAsMzYwIEM2MCwzNzQuODY0ODQ5IDQ5LjE4ODc1OTUsMzg3LjIwNDU5NyAzNS4wMDAzNzk1LDM4OS41ODUxNDQgTDM1LjAwMDM3OTUsNDQwLjQxNDg1NiBDNDkuMTg4NzU5NSw0NDIuNzk1NDAzIDYwLDQ1NS4xMzUxNTEgNjAsNDcwIEM2MCw0ODYuNTY4NTQyIDQ2LjU2ODU0MjUsNTAwIDMwLDUwMCBDMTMuNDMxNDU3NSw1MDAgNS40OTE0Njg4MmUtMTMsNDg2LjU2ODU0MiA1LjU0MjIzNTUxZS0xMyw0NzAgQzUuNDkyMTU0OTdlLTEzLDQ1NS4xMzQ4MDIgMTAuODExNzQ5LDQ0Mi43OTQ4MjIgMjUuMDAwNjIxNCw0NDAuNDE0Njg4IEwyNS4wMDA2MjE0LDM4OS41ODUzMTIgQzEwLjgxMTc0OSwzODcuMjA1MTc4IDUuNzQxNzI1MjdlLTEzLDM3NC44NjUxOTggNS43NTUzOTYxNmUtMTMsMzYwIEM1LjczNzE5MjMxZS0xMywzNDUuMTM0ODAyIDEwLjgxMTc0OSwzMzIuNzk0ODIyIDI1LjAwMDYyMTQsMzMwLjQxNDY4OCBMMjUuMDAwNjIxNCwyNzkuNTg1MzEyIEMxMC44MTE3NDksMjc3LjIwNTE3OCAxLjIzMzQzMTUzZS0xMywyNjQuODY1MTk4IDEuMjc4OTc5MDllLTEzLDI1MCBDMS4yMjg4OTg1NmUtMTMsMjM1LjEzNDgwMiAxMC44MTE3NDksMjIyLjc5NDgyMiAyNS4wMDA2MjE0LDIyMC40MTQ2ODggTDI1LjAwMDYyMTQsMTY5LjU4NTMxMiBDMTAuODExNzQ5LDE2Ny4yMDUxNzggMS4yNjUzMDYwNGUtMTMsMTU0Ljg2NTE5OCAxLjI3ODk3NjkyZS0xMywxNDAgQzEuMjYwNzczMDdlLTEzLDEyNS4xMzQ4MDIgMTAuODExNzQ5LDExMi43OTQ4MjIgMjUuMDAwNjIxNCwxMTAuNDE0Njg4IEwyNS4wMDA2MjE0LDU5LjU4NTMxMiBDMTAuODExNzQ5LDU3LjIwNTE3NzYgMy42NDI5MDk1OWUtMTMsNDQuODY1MTk4NSAzLjYzMjg3MDkxZS0xMywzMCBDMy42MDM3Njk5N2UtMTMsMTMuNTk3MTQyOSAxMy4xNjQxNzE1LDAuMjY4OTQyODU5IDI5LjUwMzg5NTEsMC4wMDQwMTkxNDI4OCBMMzAuMDAwMTgwNiwzLjE5NzQ0MjMxZS0xNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHN0cm9rZT0iI0Q1RENFMSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNSIgc3Ryb2tlPSIjQzlENURDIiBmaWxsPSIjRkZGRkZGIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjM5IiByeD0iMTkuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IkFwcGxlU0RHb3RoaWNOZW8tQm9sZCwgQXBwbGUgU0QgR290aGljIE5lbyIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIwLjMzNzUiIGZpbGw9IiM3MUQzNzkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNi45NTYyNSIgeT0iMjciPjE8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDEyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNSIgc3Ryb2tlPSIjQzlENURDIiBmaWxsPSIjRkZGRkZGIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjM5IiByeD0iMTkuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IkFwcGxlU0RHb3RoaWNOZW8tQm9sZCwgQXBwbGUgU0QgR290aGljIE5lbyIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIwLjMzNzUiIGZpbGw9IiM0NjRDNEUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNS41MTYyNSIgeT0iMjciPjI8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDIzMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNSIgc3Ryb2tlPSIjQzlENURDIiBmaWxsPSIjRkZGRkZGIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjM5IiByeD0iMTkuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IkFwcGxlU0RHb3RoaWNOZW8tQm9sZCwgQXBwbGUgU0QgR290aGljIE5lbyIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIwLjMzNzUiIGZpbGw9IiM0NjRDNEUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNS41MDcyNSIgeT0iMjciPjM8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDM0MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNSIgc3Ryb2tlPSIjQzlENURDIiBmaWxsPSIjRkZGRkZGIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjM5IiByeD0iMTkuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IkFwcGxlU0RHb3RoaWNOZW8tQm9sZCwgQXBwbGUgU0QgR290aGljIE5lbyIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIwLjMzNzUiIGZpbGw9IiM0NjRDNEUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNS4wNDgyNSIgeT0iMjciPjQ8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDQ1MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNSIgc3Ryb2tlPSIjQzlENURDIiBmaWxsPSIjRkZGRkZGIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjM5IiByeD0iMTkuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IkFwcGxlU0RHb3RoaWNOZW8tQm9sZCwgQXBwbGUgU0QgR290aGljIE5lbyIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIwLjMzNzUiIGZpbGw9IiM0NjRDNEUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIxNS43MTQyNSIgeT0iMjciPjU8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d020dfd4acb2fe451e022f6b1495e48.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA1MC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OCA1MC4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MXtmaWxsOiMyNTYzOTI7fQo8L3N0eWxlPgo8dGl0bGU+Qml0bWFwPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJNYWluLURlc2lnbiI+Cgk8ZyBpZD0iSG9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS4wMDAwMDAsIC03NzUuMDAwMDAwKSI+CgkJPGcgaWQ9IkNhcm91c2VsLS0tVG9wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNjYxLjAwMDAwMCkiPgoJCQk8ZyBpZD0iQnVzaW5lc3MtLS1TbGlkZS1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzUuMDAwMDAwLCAwLjAwMDAwMCkiIGNsYXNzPSJzdDAiPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTY1LjEsMTIwLjljMi40LDAsNC4xLDAuOCw1LjksMS43YzAuNCwwLjIsMC44LDAuNCwxLjIsMC43YzAuNSwwLjMsMC42LDAuNiwwLjMsMQoJCQkJCQljLTAuMiwwLjQtMC41LDAuNS0xLjEsMC4zYy0wLjctMC4zLTEuNC0wLjctMi4xLTEuMWMtMS4yLTAuNi0yLjQtMS4xLTMuOC0xLjFjLTAuNCwwLTAuOCwwLTEuMiwwLjJjLTAuNSwwLjItMC44LDAuNi0wLjcsMS4xCgkJCQkJCWMwLDAuOCwwLjEsMS42LDAuMywyLjRjMC42LDIuMywxLjksNC4yLDMuMiw2LjJjMC4xLDAuMSwwLjMsMC4yLDAuNSwwLjJjMS43LTAuMiwzLjMtMC40LDUtMC43YzAuMiwwLDAuNC0wLjIsMC40LTAuNAoJCQkJCQljMC4zLTEuOSwwLjQtMy44LDAuOC01LjZjMC43LTMuMywxLjMtNi42LDMuNC05LjRjMC42LTAuOSwxLjQtMS41LDIuNi0xLjZjMC43LTAuMSwxLjIsMC4xLDEuOCwwLjVjMS4xLDAuNywxLjgsMS43LDIuMywyLjgKCQkJCQkJYzAuNiwxLjQsMS4xLDIuOCwxLjYsNC4yYzAuMiwwLjUsMCwwLjktMC41LDFjLTAuNSwwLjEtMC44LTAuMS0xLTAuNmMtMC40LTEuMi0wLjgtMi41LTEuNC0zLjdjLTAuNC0wLjgtMC45LTEuNS0xLjUtMi4yCgkJCQkJCWMtMC43LTAuOC0xLjYtMC44LTIuMywwYy0wLjUsMC42LTEsMS4zLTEuNCwxLjljLTEsMS45LTEuNSw0LTIsNi4xYy0wLjEsMC4zLDAsMC41LDAuMywwLjdjMS4zLDAuOSwyLjUsMS45LDMuOCwyLjkKCQkJCQkJYzAuMywwLjMsMC41LDAuMiwwLjgsMGMyLjMtMiw0LjgtMy43LDcuNS01LjJjMS43LTAuOSwzLjMtMS44LDUuMi0yLjJjMS0wLjIsMi0wLjMsMywwLjFjMSwwLjQsMS43LDEuNCwxLjgsMi40CgkJCQkJCWMwLjEsMS42LTAuMywzLjEtMSw0LjVjLTAuNCwwLjktMC45LDEuOC0xLjQsMi44Yy0wLjIsMC40LTAuNSwwLjYtMC45LDAuNWMtMC41LTAuMS0wLjctMC42LTAuNC0xLjJjMC40LTAuOCwwLjktMS42LDEuMi0yLjUKCQkJCQkJYzAuNS0xLjIsMS0yLjUsMC45LTMuOWMtMC4xLTAuOS0wLjUtMS40LTEuNC0xLjVjLTEuMi0wLjEtMi4zLDAuMi0zLjQsMC43Yy0xLjcsMC44LTMuMywxLjgtNSwyLjZjLTAuMywwLjEtMC4zLDAuMy0wLjMsMC42CgkJCQkJCWMwLjIsMS42LDAuNSwzLjIsMC42LDQuOGMwLDAuNCwwLjIsMC41LDAuNSwwLjVjMy4xLDAuMiw2LjIsMC44LDkuMiwxLjZjMiwwLjYsNC4xLDEuMiw1LjgsMi42YzAuOCwwLjYsMS41LDEuNCwxLjYsMi41CgkJCQkJCWMwLjEsMC43LTAuMSwxLjMtMC40LDEuOGMtMC43LDEuMS0xLjcsMS44LTIuOCwyLjNjLTEuNCwwLjYtMi44LDEuMS00LjMsMS42Yy0wLjUsMC4yLTAuOSwwLTEtMC40Yy0wLjEtMC41LDAuMS0wLjgsMC42LTEKCQkJCQkJYzEuMi0wLjQsMi41LTAuOCwzLjctMS4zYzAuNy0wLjMsMS40LTAuOCwyLjEtMS4zYzEuMS0wLjksMS0xLjktMC4yLTIuOGMtMS4yLTAuOS0yLjUtMS41LTMuOS0xLjljLTEuMi0wLjQtMi41LTAuNy0zLjgtMQoJCQkJCQljLTAuMy0wLjEtMC42LDAtMC44LDAuM2MtMC45LDEuMy0xLjksMi41LTIuOSwzLjdjLTAuMywwLjMtMC4zLDAuNSwwLDAuOGMxLjksMi4zLDMuNyw0LjYsNS4xLDcuMmMwLjgsMS42LDEuNiwzLjIsMi4yLDQuOAoJCQkJCQljMC41LDEuMiwwLjYsMi41LDAuMSwzLjdjLTAuNCwxLjEtMS4zLDEuNi0yLjQsMS43Yy0xLjUsMC4xLTIuOS0wLjItNC4zLTAuOGMtMS4xLTAuNC0yLjEtMS0zLjEtMS41Yy0wLjUtMC4zLTAuNi0wLjYtMC40LTEuMQoJCQkJCQljMC4yLTAuNCwwLjYtMC41LDEuMS0wLjNjMS4xLDAuNSwyLjIsMS4xLDMuMywxLjZjMSwwLjQsMiwwLjYsMy4xLDAuNmMwLjgtMC4xLDEuMy0wLjYsMS4zLTEuNGMwLjEtMS4yLTAuMi0yLjQtMC44LTMuNQoJCQkJCQljLTAuOC0xLjYtMS43LTMuMi0yLjYtNC44Yy0wLjItMC4zLTAuMy0wLjQtMC43LTAuM2MtMS42LDAuMi0zLjIsMC41LTQuOCwwLjZjLTAuNCwwLTAuNSwwLjItMC41LDAuNWMtMC4zLDMuNS0wLjksNy0yLDEwLjQKCQkJCQkJYy0wLjUsMS42LTEuMSwzLjEtMi4yLDQuNWMtMC42LDAuNy0xLjIsMS4zLTIuMiwxLjVjLTEuMSwwLjMtMi4xLTAuMS0yLjktMC45Yy0xLjItMS4xLTEuOC0yLjUtMi40LTMuOQoJCQkJCQljLTAuMy0wLjgtMC41LTEuNi0wLjgtMi40Yy0wLjItMC43LTAuMS0xLjEsMC40LTEuMmMwLjUtMC4yLDAuOSwwLjEsMS4xLDAuOGMwLjQsMS42LDEsMy4xLDEuOCw0LjVjMC4yLDAuMywwLjQsMC43LDAuNywwLjkKCQkJCQkJYzEsMS4yLDIuMSwxLjEsMy0wLjFjMC45LTEuMiwxLjUtMi41LDEuOS00YzAuNC0xLjIsMC43LTIuNCwxLTMuNmMwLjEtMC40LDAtMC42LTAuMy0wLjljLTEuMy0wLjktMi41LTEuOS0zLjctMi44CgkJCQkJCWMtMC4zLTAuMy0wLjUtMC4yLTAuOCwwYy0yLjMsMS45LTQuOCwzLjctNy40LDUuMmMtMS44LDEtMy42LDEuOS01LjUsMi4zYy0wLjgsMC4yLTEuNiwwLjItMi40LDBjLTEuMS0wLjItMi0xLjUtMi4xLTIuNwoJCQkJCQljLTAuMS0yLjIsMC44LTQuMiwxLjctNi4xYzAuMi0wLjQsMC40LTAuOCwwLjYtMS4xYzAuMy0wLjUsMC43LTAuNiwxLjEtMC40YzAuNCwwLjIsMC40LDAuNiwwLjIsMS4xYy0wLjUsMS4yLTEuMSwyLjMtMS42LDMuNQoJCQkJCQljLTAuNCwwLjktMC42LDEuOS0wLjUsMi45YzAsMC44LDAuNSwxLjMsMS4zLDEuNGMxLjQsMC4yLDIuNy0wLjMsMy45LTAuOWMxLjYtMC43LDMtMS42LDQuNS0yLjRjMC4zLTAuMiwwLjQtMC4zLDAuMy0wLjcKCQkJCQkJYy0wLjItMS42LTAuNS0zLjItMC42LTQuOGMwLTAuNC0wLjItMC41LTAuNS0wLjVjLTMuMS0wLjItNi4yLTAuOC05LjItMS42Yy0yLTAuNi00LjEtMS4yLTUuOC0yLjZjLTAuNy0wLjYtMS4zLTEuMy0xLjYtMi4yCgkJCQkJCWMtMC4yLTEuMSwwLjEtMi4xLDAuOS0yLjhjMC43LTAuNiwxLjQtMS4yLDIuMy0xLjZjMS40LTAuNiwyLjktMS4xLDQuNC0xLjZjMC42LTAuMiwxLjEsMC4zLDAuOSwwLjljLTAuMSwwLjItMC40LDAuNC0wLjYsMC41CgkJCQkJCWMtMS4yLDAuNS0yLjQsMC44LTMuNiwxLjRjLTAuOCwwLjQtMS42LDAuOS0yLjIsMS41Yy0wLjgsMC43LTAuOCwxLjYsMCwyLjNjMC42LDAuNiwxLjMsMSwyLjEsMS40YzEuOSwxLDMuOSwxLjQsNS45LDEuOQoJCQkJCQljMC4zLDAuMSwwLjYsMCwwLjgtMC4zYzAuOS0xLjIsMS44LTIuNSwyLjgtMy43YzAuMy0wLjQsMC4zLTAuNiwwLTFjLTItMi4zLTMuNy00LjgtNS4yLTcuNGMtMS0xLjctMS44LTMuNC0yLjItNS40CgkJCQkJCWMtMC4yLTEtMC4zLTIuMSwwLjMtM0M2My4xLDEyMS4zLDY0LDEyMC45LDY1LjEsMTIwLjl6IE04NS44LDEzOC44Qzg1LjgsMTM4LjgsODUuOCwxMzguOCw4NS44LDEzOC44YzAtMC43LDAtMS40LDAtMi4xCgkJCQkJCWMwLTAuMi0wLjEtMC41LTAuMy0wLjZjLTAuOS0xLTEuOS0xLjktMi45LTIuOGMtMC4yLTAuMi0wLjUtMC4zLTAuNy0wLjNjLTEuMywwLTIuNiwwLTMuOSwwYy0wLjIsMC0wLjUsMC4xLTAuNywwLjMKCQkJCQkJYy0xLDAuOS0xLjksMS44LTIuOCwyLjhjLTAuMiwwLjItMC4zLDAuNS0wLjMsMC43YzAsMS4zLDAsMi42LDAsMy45YzAsMC4yLDAuMSwwLjUsMC4zLDAuN2MwLjksMSwxLjksMS45LDIuOCwyLjgKCQkJCQkJYzAuMiwwLjEsMC40LDAuMiwwLjYsMC4zYzEuMywwLDIuNiwwLDQsMGMwLjIsMCwwLjUtMC4xLDAuNy0wLjNjMS0wLjksMS45LTEuOSwyLjktMi45YzAuMS0wLjEsMC4yLTAuNCwwLjItMC41CgkJCQkJCUM4NS44LDE0MC4xLDg1LjgsMTM5LjQsODUuOCwxMzguOHogTTg5LDEzOS45Yy0xLjUsMS4xLTIuMiwyLjQtMS43LDQuM2MxLjQtMC4yLDIuOS0wLjQsNC40LTAuNmMwLTAuMSwwLjEtMC4xLDAuMS0wLjIKCQkJCQkJQzkwLjgsMTQyLjMsODkuOSwxNDEuMSw4OSwxMzkuOXogTTc4LjgsMTQ3LjdjLTEuMS0xLjQtMi40LTIuMi00LjMtMS43YzAuMiwxLjUsMC40LDIuOSwwLjYsNC40YzAuMSwwLDAuMSwwLDAuMiwwCgkJCQkJCUM3Ni40LDE0OS41LDc3LjYsMTQ4LjYsNzguOCwxNDcuN3ogTTY4LjIsMTQzLjVjMCwwLjEsMC4xLDAuMSwwLjEsMC4yYzEuNSwwLjIsMywwLjQsNC41LDAuNmMtMC4xLTAuOC0wLjEtMS40LTAuMS0yCgkJCQkJCWMwLTAuMiwwLTAuNS0wLjEtMC42Yy0wLjUtMC42LTEtMS4xLTEuNi0xLjdDNzAuMSwxNDEuMSw2OS4yLDE0Mi4zLDY4LjIsMTQzLjV6IE04NS41LDEzMS41Yy0wLjItMS41LTAuNC0yLjktMC42LTQuNgoJCQkJCQljLTEuMywxLTIuNSwxLjktMy43LDIuOEM4Mi4zLDEzMS4xLDgzLjYsMTMxLjksODUuNSwxMzEuNXogTTkxLjcsMTMzLjljMC0wLjEtMC4xLTAuMS0wLjEtMC4yYy0xLjUtMC4yLTMtMC40LTQuNS0wLjYKCQkJCQkJYzAuMSwwLjgsMC4xLDEuNSwwLjIsMi4xYzAsMC4yLDAsMC40LDAuMSwwLjVjMC41LDAuNiwxLDEuMSwxLjYsMS43Qzg5LjksMTM2LjMsOTAuOCwxMzUuMSw5MS43LDEzMy45eiBNODEuMiwxNDcuNwoJCQkJCQljMS4yLDEsMi40LDEuOSwzLjcsMi45YzAuMi0xLjcsMC40LTMuMSwwLjYtNC43Yy0wLjcsMC0xLjQsMC4xLTIsMC4xYy0wLjIsMC0wLjUsMC0wLjYsMC4xQzgyLjMsMTQ2LjYsODEuOCwxNDcuMSw4MS4yLDE0Ny43egoJCQkJCQkgTTY4LjEsMTMzLjljMSwxLjMsMS45LDIuNSwyLjgsMy43YzEuNS0xLjEsMi4yLTIuNCwxLjctNC4zQzcxLjIsMTMzLjQsNjkuOCwxMzMuNiw2OC4xLDEzMy45eiBNNzguOCwxMjkuOAoJCQkJCQljLTEuMi0xLTIuNC0xLjktMy43LTIuOWMtMC4yLDEuNi0wLjQsMy4xLTAuNiw0LjdjMC43LDAsMS40LTAuMSwyLTAuMWMwLjIsMCwwLjUsMCwwLjYtMC4xQzc3LjcsMTMwLjksNzguMiwxMzAuNCw3OC44LDEyOS44egoJCQkJCQkgTTg3LjMsMTM5LjNjMC43LTAuNSwwLjctMC43LDAtMS4xQzg3LjMsMTM4LjUsODcuMywxMzguOSw4Ny4zLDEzOS4zeiBNNzkuNCwxNDZjMC42LDAuNywwLjgsMC43LDEuMSwwCgkJCQkJCUM4MC4yLDE0Niw3OS44LDE0Niw3OS40LDE0NnogTTcyLjYsMTM5LjNjMC0wLjQsMC0wLjgsMC0xLjFDNzIsMTM4LjYsNzIsMTM4LjgsNzIuNiwxMzkuM3ogTTc5LjQsMTMxLjRjMC40LDAsMC43LDAsMS4xLDAKCQkJCQkJQzgwLDEzMC44LDc5LjksMTMwLjgsNzkuNCwxMzEuNHogTTc0LjQsMTMzLjhjMC4zLTAuMiwwLjUtMC40LDAuOC0wLjdDNzQuNCwxMzMsNzQuMywxMzMuMSw3NC40LDEzMy44eiBNODQuNywxMzMuMQoJCQkJCQljMC4zLDAuMywwLjUsMC41LDAuOCwwLjhDODUuNywxMzMuMSw4NS42LDEzMyw4NC43LDEzMy4xeiBNNzQuNCwxNDMuNmMwLDAtMC4xLDAtMC4xLDBjMCwwLjIsMCwwLjUsMC4xLDAuNwoJCQkJCQljMC4xLDAuMSwwLjQsMC4xLDAuNywwLjFDNzQuOSwxNDQuMSw3NC43LDE0My44LDc0LjQsMTQzLjZ6IE04NC44LDE0NC4zYzAuOSwwLjEsMS0wLjEsMC44LTAuNwoJCQkJCQlDODUuMywxNDMuOCw4NS4xLDE0NCw4NC44LDE0NC4zeiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54bbefd5333bf2055b7b26ca79f1cee4.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e42541792e27edc303b4a60781b167d5.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "51aafd19c389b5f3a95a47fe77849051.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a3d695c3f5232550afa78084452207a.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(62);
module.exports = __webpack_require__(68);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(27)["default"];

var _require = __webpack_require__(28),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/mnt/d/workspace/work/otm-dispatch/static-site/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(27)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(28),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(29),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/mnt/d/workspace/work/otm-dispatch/static-site/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(29),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 12,
	"./": 12,
	"./index": 12,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(69);

var _interopRequireDefault = __webpack_require__(70);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(71));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(72));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(73);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(74)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept("./App", function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(75)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
exports.i(__webpack_require__(77), "");

// Module
exports.push([module.i, "* {\r\n    scroll-behavior: smooth;\r\n}", ""]);



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
var urlEscape = __webpack_require__(11);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(78));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(79));

// Module
exports.push([module.i, "body {\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 16px;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-weight: 400;\r\n}\r\n\r\n.otm-nav {\r\n    padding-top: 20px;\r\n    z-index: 2;\r\n}\r\n\r\n.otm-hero-light .otm-nav {\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.otm-nav.navbar-expand-lg .navbar-nav .nav-link {\r\n    position: relative;\r\n    padding: 15px;\r\n    text-transform: uppercase;\r\n    font-size: 10px;\r\n}\r\n\r\n.otm-nav.navbar-expand-lg .navbar-nav .nav-item .nav-link:not(.nav-cta):before {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 50%;\r\n    max-width: 90%;\r\n    height: 7px;\r\n    background-color: #0476B8;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    opacity: 0;\r\n    width: 100%;\r\n}\r\n\r\n.otm-nav.navbar-expand-lg .navbar-nav .nav-item:hover .nav-link:not(.nav-cta):before {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 50%;\r\n    max-width: 60%;\r\n    height: 6px;\r\n    background-color: #0093e8;\r\n    -webkit-transform: translate(-50%, 0%);\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n    width: 100%;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n.otm-nav.navbar-light .navbar-nav .active>.nav-link,\r\n.otm-nav.navbar-light .navbar-nav .nav-link.active,\r\n.otm-nav.navbar-light .navbar-nav .nav-link.show,\r\n.otm-nav.navbar-light .navbar-nav .show>.nav-link,\r\n.otm-nav.navbar-light .navbar-nav .nav-link {\r\n    color: #ffffff;\r\n}\r\n\r\n.otm-nav.navbar-light .navbar-nav .nav-link {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 41.5px;\r\n    padding-bottom: 41.5px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 600;\r\n    letter-spacing: 0.83px;\r\n    font-size: 0.87em;\r\n}\r\n\r\n.otm-nav.navbar-light .navbar-nav .nav-link.nav-cta {\r\n    position: relative;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.otm-nav.navbar-light .navbar-nav .nav-link.nav-cta:after {\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #0476B8;\r\n    top: 0px;\r\n    left: 0px;\r\n    position: absolute;\r\n    -webkit-transform: skewX(-25deg);\r\n            transform: skewX(-25deg);\r\n}\r\n\r\n.btn-orange:hover {\r\n    color: #ffffff;\r\n    background-color: #d2790d;\r\n}\r\n\r\n.btn-otm-cta {\r\n    background-color: #F7941E;\r\n    color: #ffffff;\r\n    border-radius: 50px;\r\n    font-size: .75em;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 600;\r\n    letter-spacing: .5px;\r\n    padding: 12px 50px;\r\n}\r\n\r\n.btn-otm-cta:hover {\r\n    color: #ffffff;\r\n    background-color: #d2790d;\r\n}\r\n\r\n.btn-otm {\r\n    color: #ffffff;\r\n    padding: 10px 32px;\r\n    font-size: 10px;\r\n    margin-left: 15px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 500;\r\n    border-color: #429FEA;\r\n    border-radius: 50px;\r\n    border-width: 2px;\r\n}\r\n\r\n.btn-otm-dark {\r\n    background-color: #191919;\r\n    color: #ffffff;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.btn-otm-dark:hover,\r\n.btn-otm-dark:focus {\r\n    color: #ffffff;\r\n}\r\n\r\n.navbar-toggler {\r\n    border: none !important;\r\n}\r\n\r\n.navbar-light .navbar-toggler {\r\n    color: rgba(0, 0, 0, .5);\r\n    /* border-color: rgba(255, 255, 255, .9); */\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.otm-hero-light .navbar-light .navbar-toggler-icon {\r\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\r\n    ;\r\n}\r\n\r\n.otm-hero-light .navbar-light .navbar-toggler {\r\n    color: rgba(0, 0, 0, .5);\r\n    border-color: rgba(0, 0, 0, .9);\r\n}\r\n\r\n.home-cta {\r\n    background-color: #1D79B1;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    color: #ffffff;\r\n}\r\n\r\n.home-cta h4 {\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/* .btn-cta-white{\r\n    background-color: #ffffff;\r\n    color: #212121;\r\n    font-size: 14px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    border-radius: 50px;\r\n    margin-top: 25px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 500;\r\n} */\r\n\r\n.btn-cta-white {\r\n    background-color: #ffffff;\r\n    color: #212121;\r\n    /* font-size: 14px; */\r\n    /* Updated font size */\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n    letter-spacing: 0.75px;\r\n    line-height: 30px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    border-radius: 50px;\r\n    margin-top: 25px;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.btn-cta-white:hover {\r\n    background-color: #f7941d;\r\n    color: #ffffff;\r\n}\r\n\r\n.accordion-section .panel-heading {\r\n    clear: both;\r\n}\r\n\r\n.accordion-section p {\r\n    white-space: pre;\r\n}\r\n\r\n.questions-btn {\r\n    padding: 10px 55px;\r\n    text-transform: uppercase;\r\n    letter-spacing: .5px;\r\n    font-weight: 600;\r\n    font-size: 1em;\r\n    border-radius: .1rem;\r\n}\r\n\r\n.footer {\r\n    padding-top: 70px;\r\n    padding-bottom: 50px;\r\n    background-color: #212121;\r\n    color: #ffffff;\r\n}\r\n\r\n.follow-menu {\r\n    text-align: right;\r\n}\r\n\r\n.follow-menu ul {\r\n    list-style: none;\r\n    display: inline-block;\r\n    min-width: 90px;\r\n    padding-left: 0;\r\n    text-align: left;\r\n}\r\n\r\n.follow-menu ul li {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n.footer-logo img {\r\n    width: 60px;\r\n}\r\n\r\n.footer-menu {\r\n    list-style: none;\r\n    padding-left: 0px;\r\n}\r\n\r\n.footer-menu li a {\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    line-height: 33px;\r\n}\r\n\r\n.footer-menu li a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.footer h4.company {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.follow-menu h4 {\r\n    font-size: 20px;\r\n    font-family: 'Poppins', sans-serif;\r\n    color: #ffffff;\r\n}\r\n\r\n.footer-logo {\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    font-size: 12px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .nav-link {\r\n        display: inline-block;\r\n    }\r\n    .nav-item {\r\n        text-align: right;\r\n    }\r\n    .sticky-menu {\r\n        padding-top: 90px !important;\r\n    }\r\n    .solutions-dropdown {\r\n        -webkit-column-count: 1 !important;\r\n        -moz-column-count: 1 !important;\r\n        column-count: 1 !important;\r\n    }\r\n}\r\n\r\n.otm-hero-light .otm-nav.navbar-light .navbar-nav .active>.nav-link,\r\n.otm-hero-light .otm-nav.navbar-light .navbar-nav .nav-link.active,\r\n.otm-hero-light .otm-nav.navbar-light .navbar-nav .nav-link.show,\r\n.otm-hero-light .otm-nav.navbar-light .navbar-nav .show>.nav-link,\r\n.otm-hero-light .otm-nav.navbar-light .navbar-nav .nav-link {\r\n    color: #1B1550;\r\n}\r\n\r\n.sticky-menu {\r\n    padding-top: 98px;\r\n}\r\n\r\n.sticky-menu .otm-hero-light {\r\n    box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.5);\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 6;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.menu-background {\r\n    position: fixed;\r\n    top: 98px;\r\n    width: 100%;\r\n    height: 50vh;\r\n    background-color: rgba(255, 255, 255, 0.97);\r\n    box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n.menu-background.show {\r\n    opacity: 1;\r\n    display: block;\r\n}\r\n\r\n.dropdown:hover>.dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.otm-breadcrumb {\r\n    background: -webkit-gradient(linear, right top, left top, from(#ffffff), to(#F4F5F7));\r\n    background: linear-gradient(270deg, #ffffff, #F4F5F7);\r\n}\r\n\r\n.otm-breadcrumb .otm-breadcrumb-inner .breadcrumb {\r\n    background-color: transparent;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.otm-breadcrumb .otm-breadcrumb-inner .breadcrumb li a,\r\n.otm-breadcrumb .otm-breadcrumb-inner .breadcrumb li {\r\n    color: #8B8B8B;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 13px;\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: transparent;\r\n    border: 0px;\r\n}\r\n\r\n.solutions-dropdown {\r\n    -webkit-column-count: 2;\r\n       -moz-column-count: 2;\r\n            column-count: 2;\r\n}\r\n\r\n.dropdown-menu .dropdown-item:first-child {\r\n    font-size: 1.3em;\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n}\r\n\r\n.dropdown-menu .dropdown-item {\r\n    font-size: 1rem;\r\n}\r\n\r\n.dropdown-item:focus,\r\n.dropdown-item:hover {\r\n    background-color: transparent;\r\n}\r\n\r\n@media screen and (min-width: 1024px) and (max-width: 1279px) {\r\n    .otm-nav.navbar-light .navbar-nav .nav-link.nav-cta {\r\n        position: relative;\r\n        padding-left: 25px;\r\n        padding-right: 25px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .home-cta h4 {\r\n        font-size: 24px;\r\n    }\r\n    .otm-nav.navbar-light .navbar-nav .nav-link {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        padding-right: 0px;\r\n    }\r\n    .otm-hero-light .otm-nav {\r\n        padding-top: 21px;\r\n        padding-bottom: 21px;\r\n    }\r\n    .navbar-nav .dropdown-menu {\r\n        text-align: right;\r\n    }\r\n    .dropdown-menu .dropdown-item:first-child {\r\n        font-size: 18px;\r\n    }\r\n    .dropdown-menu .dropdown-item {\r\n        font-size: 16px;\r\n        padding-right: 0px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .follow-menu {\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 370px) {\r\n    .navbar-brand img {\r\n        width: 180px;\r\n    }\r\n    .sticky-menu {\r\n        padding-top: 90px !important;\r\n    }\r\n}", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIiBzdHlsZT0iJiMxMDsiPjxwYXRoIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIvPjwvc3ZnPg=="

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9J3JnYmEoMCwgMCwgMCwgMC41KScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz4="

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("scroll-into-view-if-needed");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa13f9ce54e83ed52326b91691b89f0a.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
var urlEscape = __webpack_require__(11);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(83));

// Module
exports.push([module.i, "#loader {\r\n    text-align: center;\r\n}\r\n#loader img {\r\n    width:35px;\r\n}\r\n.contact-us-main {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.custom-form-group {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.custom-form-group .form-control {\r\n    border: 1px solid #dbdbdb;\r\n}\r\n\r\n.otm-action-btn {\r\n    background-color: #19144D;\r\n    color: #ffffff;\r\n}\r\n\r\n.contact-form-title h3 {\r\n    color: #004D86;\r\n    font-weight: 600;\r\n    position: relative;\r\n    padding-bottom: 20px;\r\n    font-size: 40px;\r\n}\r\n\r\n.contact-form-title h3:after {\r\n    content: '';\r\n    width: 107px;\r\n    height: 5px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    background-color: #d8d8d8;\r\n}\r\n\r\n.contact-form-title {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.contact-info-logo {\r\n    width: 250px;\r\n    max-width: 100%;\r\n    margin-top: 30px;\r\n}\r\n\r\n.chat-time {\r\n    border-bottom: 1px solid #979797;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.chat-time img {\r\n    width: 150px;\r\n    float: right;\r\n    margin-top: -90px;\r\n}\r\n\r\n.chat-time p {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n\r\n.chat-time h4 {\r\n    font-size: 16px;\r\n    font-weight:bold;\r\n}\r\n\r\n.contact-point {\r\n    text-align: center;\r\n}\r\n\r\n.contact-point p {\r\n    text-align: left;\r\n}\r\n\r\n.contact-point p a {\r\n    color: #000000;\r\n}\r\n\r\n.contact-point p a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.gmap-wrapper {\r\n    padding-top: 226px;\r\n    padding-bottom: 226px;\r\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\r\n    background-size: contain;\r\n}\r\n\r\n.gmap-wrapper .btn-otm-dark {\r\n    min-width: 280px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.75px;\r\n    font-size: 1em;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .contact-form-title h3 {\r\n        font-size: 36px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .contact-form-title h3 {\r\n        font-size: 32px;\r\n    }\r\n    .contact-info-logo {\r\n        width: 250px;\r\n        max-width: 100%;\r\n        margin-top: 30px;\r\n        margin-left: 55px;\r\n        margin-bottom: 30px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    .contact-form-title h3 {\r\n        font-size: 32px;\r\n    }\r\n}", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "82d4d68e83cafeb3ae816db2ebd83b1f.png";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-async");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
var urlEscape = __webpack_require__(11);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(86));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(87));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(88));

// Module
exports.push([module.i, ".otm-hero .dropdown-item {\r\n    color: #fff;\r\n}\r\n\r\n.otm-hero {\r\n    min-height: 110vh;\r\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: #ffffff;\r\n    position: relative;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n}\r\n.otm-hero Iframe {\r\n    position: absolute;\r\n    right: -240px;\r\n    top: 0px;\r\n    max-width: 1000px;\r\n    overflow: hidden;\r\n    border: none;\r\n    z-index: -1;\r\n}\r\n.homepage .hero-text-wrapper h1 {\r\n    text-align: left;\r\n}\r\n.otm-hero .container {\r\n    z-index: 2;\r\n}\r\n\r\n.globe {\r\n    position: absolute;\r\n    right: -110px;\r\n    top: 100px;\r\n    max-width: 100%;\r\n    -webkit-animation: spin 100s linear infinite;\r\n    animation: spin 100s linear infinite;\r\n    z-index: -1;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.hero-text-wrapper {\r\n    z-index: 100;\r\n}\r\n\r\n.hero-text-wrapper h1 {\r\n    font-weight: 300;\r\n    font-size: 80px;\r\n    margin: 0;\r\n    line-height: 70px;\r\n}\r\n\r\n.hero-text-wrapper h2 {\r\n    font-weight: 700;\r\n    font-size: 80px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.hero-text-wrapper h3 {\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n}\r\n\r\n.hero-text-wrapper p {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.hero-text-wrap {\r\n    min-height: calc(100vh - 113px);\r\n}\r\n\r\n#smart-dispatch {\r\n    position: relative;\r\n    z-index: 3;\r\n}\r\n\r\n.carousel-background {\r\n    height: 25.3em;\r\n    width: 100%;\r\n    z-index: 1;\r\n    position: absolute;\r\n    -webkit-transform: skewY(188deg);\r\n            transform: skewY(188deg);\r\n    background-repeat: repeat-x;\r\n    background-repeat: repeat-x;\r\n    background-image: -webkit-gradient(linear, right top, left top, color-stop(30%, #D9DFE3), to(#D9DFE3));\r\n    background-image: linear-gradient(-90deg, #D9DFE3 30%, #D9DFE3);\r\n}\r\n\r\n.carousel-background-top {\r\n    height: 7.3em;\r\n    width: 100%;\r\n    z-index: 2;\r\n    position: absolute;\r\n    -webkit-transform: skewY(0deg);\r\n            transform: skewY(0deg);\r\n    background-repeat: repeat-x;\r\n    background-repeat: repeat-x;\r\n    background-image: -webkit-gradient(linear, right top, left top, color-stop(30%, #D9DFE3), to(#D9DFE3));\r\n    background-image: linear-gradient(-90deg, #D9DFE3 30%, #D9DFE3);\r\n}\r\n\r\n.carousel-background-left {\r\n    height: 25.3em;\r\n    width: 100%;\r\n    z-index: 0;\r\n    position: absolute;\r\n    -webkit-transform: skewY(-188deg);\r\n            transform: skewY(-188deg);\r\n    background-repeat: repeat-x;\r\n    background-repeat: repeat-x;\r\n    background-image: -webkit-gradient(linear, right top, left top, color-stop(30%, #3EB1D9), to(#1475AF));\r\n    background-image: linear-gradient(-90deg, #3EB1D9 30%, #1475AF);\r\n}\r\n\r\n\r\n/*.smart-dispatch{\r\n    background-image: url(../images/slider-bg.png);\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}*/\r\n\r\n\r\n/* Update to SVG Icon */\r\n\r\n.carousel-icon svg {\r\n    width: 40px;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n\r\n.truck-icon figure {\r\n    margin: 0px;\r\n}\r\n\r\n.carousel-control-next span svg,\r\n.carousel-control-prev span svg {\r\n    width: 18px;\r\n    fill: #00adef;\r\n    margin-top: -4px;\r\n}\r\n\r\n.carousel-control-next,\r\n.carousel-control-prev {\r\n    opacity: 1;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.carousel-control-prev span,\r\n.carousel-control-next span {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    -webkit-transition: opacity .3s cubic-bezier(.19, 1, .22, 1), background-color .3s ease;\r\n    transition: opacity .3s cubic-bezier(.19, 1, .22, 1), background-color .3s ease;\r\n}\r\n\r\n.carousel-control-prev span:after,\r\n.carousel-control-next span:after {\r\n    content: \"\";\r\n    display: block;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    border: 1px solid #00aeef;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    will-change: transform;\r\n    -webkit-transition: -webkit-transform .3s cubic-bezier(.4, 0, 0, 1);\r\n    transition: -webkit-transform .3s cubic-bezier(.4, 0, 0, 1);\r\n    transition: transform .3s cubic-bezier(.4, 0, 0, 1);\r\n    transition: transform .3s cubic-bezier(.4, 0, 0, 1), -webkit-transform .3s cubic-bezier(.4, 0, 0, 1);\r\n}\r\n\r\n.carousel-control-prev:hover,\r\n.carousel-control-next:hover {\r\n    background-color: #00aeef;\r\n}\r\n\r\n.carousel-control-prev:hover span svg,\r\n.carousel-control-next:hover span svg {\r\n    fill: #ffffff;\r\n}\r\n\r\n.carousel-control-prev:hover span:after,\r\n.carousel-control-next:hover span:after {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n}\r\n\r\n.smart-dispatch .carousel-inner {\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);\r\n    padding: 100px 60px;\r\n    border-radius: 25px;\r\n    margin-bottom: 150px;\r\n    margin-top: -55px;\r\n    overflow: visible;\r\n}\r\n\r\n.carousel-item-title h3 {\r\n    font-size: 2.5em;\r\n    font-weight: 400;\r\n    color: #004D86;\r\n}\r\n\r\n.carousel-item-title h3 img {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.carousel-item-title {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.carousel-item-text p {\r\n    font-size: 1.3rem;\r\n    color: #191919;\r\n}\r\n\r\n#smart-dispatch .carousel-control-next,\r\n#smart-dispatch .carousel-control-prev {\r\n    top: 0;\r\n    bottom: auto;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n#smart-dispatch .carousel-control-next {\r\n    right: 40px;\r\n    top: 40px;\r\n}\r\n\r\n#smart-dispatch .carousel-control-prev {\r\n    left: auto;\r\n    right: 100px;\r\n    top: 40px;\r\n}\r\n\r\n.carousel-cta-orange {\r\n    font-size: 18px;\r\n    color: #ffffff;\r\n    height: 220px;\r\n    width: 220px;\r\n    display: inline-block;\r\n    background-color: #F7941E;\r\n    position: absolute;\r\n    bottom: -105px;\r\n    right: -80px;\r\n    border-radius: 100%;\r\n    z-index: 2;\r\n    text-align: center;\r\n    padding: 70px 50px;\r\n    -webkit-transition: cubic-bezier(0.6, -0.28, 0.735, 0.045) all 0.3s;\r\n    transition: cubic-bezier(0.6, -0.28, 0.735, 0.045) all 0.3s;\r\n}\r\n\r\n.text-stack__cta--offset {\r\n    position: relative;\r\n    -webkit-transform: translate(0%, -40px);\r\n            transform: translate(0%, -40px);\r\n    z-index: 2;\r\n}\r\n\r\n.text-stack__headline+.text-stack__cta--offset .button-wrapper,\r\n.text-stack__text+.text-stack__cta--offset .button-wrapper {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -5em;\r\n    -webkit-transform: translateY(50%);\r\n    transform: translateY(50%);\r\n}\r\n\r\n.button-wrapper {\r\n    position: absolute;\r\n    right: -140px;\r\n    top: 0px;\r\n}\r\n\r\n.button--circle {\r\n    --button-circle-size: 220px;\r\n    --circleY: 1.6288%;\r\n    width: var(--button-circle-size);\r\n    height: var(--button-circle-size);\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    padding: 0em;\r\n    -webkit-transform: translateY(var(--circleY));\r\n    transform: translateY(var(--circleY));\r\n}\r\n\r\n.button--orange {\r\n    color: #ffffff;\r\n}\r\n\r\n.button--circle .button__arrow,\r\n.button--circle .button__content {\r\n    position: relative;\r\n    z-index: 1;\r\n    max-width: 120px;\r\n}\r\n\r\n.button--circle .button__content+.button__arrow {\r\n    margin-top: .75em;\r\n}\r\n\r\n.button--circle .button__arrow svg {\r\n    width: 26px;\r\n    height: 13px;\r\n    -webkit-transform: translateX(-10%);\r\n    transform: translateX(-10%);\r\n    -webkit-transition: stroke .1s ease, -webkit-transform .3s cubic-bezier(.175, .885, .32, 1.275) .1s;\r\n    transition: stroke .1s ease, -webkit-transform .3s cubic-bezier(.175, .885, .32, 1.275) .1s;\r\n    transition: transform .3s cubic-bezier(.175, .885, .32, 1.275) .1s, stroke .1s ease;\r\n    transition: transform .3s cubic-bezier(.175, .885, .32, 1.275) .1s, stroke .1s ease, -webkit-transform .3s cubic-bezier(.175, .885, .32, 1.275) .1s;\r\n}\r\n\r\n.button--orange .button__arrow svg {\r\n    stroke: #ffffff;\r\n}\r\n\r\n.button--circle .button__outline {\r\n    border: 1px solid;\r\n    background-color: #F7941E;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: var(--button-circle-size);\r\n    height: var(--button-circle-size);\r\n    border-radius: 50%;\r\n    will-change: transform;\r\n    -webkit-transform: translateZ(0) scale(.8);\r\n    transform: translateZ(0) scale(.8);\r\n    -webkit-transition: background-color .1s ease, -webkit-transform .3s cubic-bezier(.175, .885, .32, 1.275);\r\n    transition: background-color .1s ease, -webkit-transform .3s cubic-bezier(.175, .885, .32, 1.275);\r\n    transition: transform .3s cubic-bezier(.175, .885, .32, 1.275), background-color .1s ease;\r\n    transition: transform .3s cubic-bezier(.175, .885, .32, 1.275), background-color .1s ease, -webkit-transform .3s cubic-bezier(.175, .885, .32, 1.275);\r\n}\r\n\r\n.button--orange .button__outline {\r\n    border-color: #ffcb05;\r\n}\r\n\r\n.button--orange:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.button--circle:hover .button__outline {\r\n    -webkit-transform: translateZ(0) scale(1);\r\n    transform: translateZ(0) scale(1);\r\n}\r\n\r\n.button--orange:hover .button__outline {\r\n    border-color: #f7941d;\r\n    background-color: #f7941d;\r\n}\r\n\r\n.button--orange:hover .button__arrow svg {\r\n    stroke: #fff;\r\n    -webkit-transform: translateX(20%);\r\n    transform: translateX(20%);\r\n}\r\n\r\n.carousel-cta-orange svg {\r\n    width: 20px;\r\n    fill: #ffffff;\r\n}\r\n\r\n.carousel-cta-orange:hover {\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n}\r\n\r\n.otm-main {\r\n    margin-top: 40px;\r\n}\r\n\r\n.otm-home-container {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.otm-main-inner h3 {\r\n    margin-top: 30px;\r\n    color: #004D86;\r\n    font-size: 2.3em;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.otm-main-inner p {\r\n    color: #191919;\r\n    line-height: 30px;\r\n    margin-bottom: 30px;\r\n    font-weight: 400;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.otm-main-logo {\r\n    width: 95%;\r\n}\r\n\r\n.letters {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    ;\r\n}\r\n\r\n.text-wrapper {\r\n    position: relative;\r\n    display: block;\r\n    padding-top: 60px;\r\n    overflow: hidden;\r\n}\r\n\r\n.team-text-inner {\r\n    padding: 20px 10px;\r\n}\r\n\r\n.team-text-inner h4 {\r\n    font-size: 2.3em;\r\n    color: #004D86;\r\n}\r\n\r\n.team-text-inner p {\r\n    font-size: 1.3rem;\r\n    color: #191919;\r\n    line-height: 37px;\r\n}\r\n\r\n#otm-carousel-team {\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n#otm-carousel-team .carousel-control-next,\r\n#otm-carousel-team .carousel-control-prev {\r\n    top: auto;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n#otm-carousel-team .carousel-control-next {\r\n    right: 40px;\r\n    bottom: 40px;\r\n}\r\n\r\n#otm-carousel-team .carousel-control-prev {\r\n    left: auto;\r\n    right: 100px;\r\n    bottom: 40px;\r\n}\r\n\r\n.slider-section {\r\n    position: relative;\r\n    bottom: 0;\r\n}\r\n\r\n.slider-trucks {\r\n    position: relative;\r\n    top: 120px;\r\n}\r\n\r\n.sliding-animation {\r\n    height: 120px;\r\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\r\n    background-position: 0 0;\r\n    background-size: auto 100%;\r\n    -webkit-animation: animatedBackground 500s linear infinite;\r\n            animation: animatedBackground 500s linear infinite;\r\n}\r\n\r\n.slider-bottom {\r\n    height: 120px;\r\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\r\n    background-position: 50%;\r\n    background-size: auto 100%;\r\n}\r\n\r\n@-webkit-keyframes animatedBackground {\r\n    from {\r\n        background-position: 0 0;\r\n    }\r\n    /*use negative width if you want it to flow right to left else and positive for left to right*/\r\n    to {\r\n        background-position: 10000px 0;\r\n    }\r\n}\r\n\r\n@keyframes animatedBackground {\r\n    from {\r\n        background-position: 0 0;\r\n    }\r\n    /*use negative width if you want it to flow right to left else and positive for left to right*/\r\n    to {\r\n        background-position: 10000px 0;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1400px) {\r\n    .smart-dispatch {\r\n        background-position: center -60px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1700px) {\r\n    .smart-dispatch {\r\n        background-position: center -120px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1800px) {\r\n    .smart-dispatch {\r\n        background-position: center -150px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1900px) {\r\n    .smart-dispatch {\r\n        background-position: center -200px;\r\n    }\r\n    .globe {\r\n        right: 90px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 2500px) {\r\n    .globe {\r\n        right: 390px;\r\n        top: 200px\r\n    }\r\n    .smart-dispatch {\r\n        background-position: center -400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1300px) {\r\n    .carousel-cta-orange {\r\n        right: -50px\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1280px) {\r\n    .button-wrapper {\r\n        right: 0px;\r\n        display: block;\r\n        width: 220px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .globe {\r\n        opacity: .5;\r\n        max-width: 600px;\r\n    }\r\n    .otm-hero Iframe {\r\n        opacity: .8;\r\n        max-width: 100%;\r\n        width: 600px;\r\n        left: 0;\r\n        right: 0;\r\n        top: 50px;\r\n    }\r\n    \r\n}\r\n@media only screen and (min-width: 768px) and (max-width: 1279px) {\r\n    .globe {\r\n        opacity: .5;\r\n        max-width: 100%;\r\n        width: 100%;\r\n        left: 0;\r\n        right: 0;\r\n        top: 200px;\r\n    }\r\n    .otm-hero Iframe {\r\n        opacity: .5;\r\n        max-width: 100%;\r\n        width: 100%;\r\n        left: 0;\r\n        right: 0;\r\n        top: 100px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .hero-text-wrapper h1,\r\n    .hero-text-wrapper h2 {\r\n        font-size: 60px;\r\n    }\r\n    .carousel-item-title h3,\r\n    .otm-main-inner h3,\r\n    .team-text-inner h4 {\r\n        font-size: 36px;\r\n    }\r\n    .carousel-cta-orange {\r\n        width: 180px;\r\n        height: 180px;\r\n        padding: 50px 20px;\r\n    }\r\n    .carousel-background-left {\r\n        height: 35em;\r\n    }\r\n    .carousel-background {\r\n        height: 35em;\r\n    }\r\n    .smart-dispatch {\r\n        background-position: center -30px;\r\n    }\r\n    #smart-dispatch .js-cta {\r\n        margin: 40px auto;\r\n        display: block;\r\n        width: 220px;\r\n    }\r\n    .otm-home-container .row .column1 {\r\n        order: 1;\r\n        text-align: center;\r\n        margin-bottom: 30px;\r\n    }\r\n    .otm-home-container .row .column2 {\r\n        order: 2;\r\n    }\r\n    .otm-main {\r\n        margin-top: 0px;\r\n    }\r\n    .otm-main-logo {\r\n        width: 70%;\r\n        margin-right: -55px;\r\n    }\r\n    .otm-main-inner p,\r\n    .team-text-inner p {\r\n        font-size: 24px;\r\n    }\r\n    #otm-carousel-team .carousel-control-next,\r\n    #otm-carousel-team .carousel-control-prev {\r\n        bottom: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .hero-text-wrapper h1,\r\n    .hero-text-wrapper h2 {\r\n        font-size: 40px;\r\n    }\r\n    .hero-text-wrapper h3 {\r\n        font-size: 24px;\r\n    }\r\n    .carousel-item-title h3,\r\n    .otm-main-inner h3,\r\n    .team-text-inner h4 {\r\n        font-size: 32px;\r\n    }\r\n    .otm-main-inner h3 img {\r\n        width: 36px;\r\n    }\r\n    .carousel-item-text p {\r\n        font-size: 22px;\r\n    }\r\n    .carousel-cta-orange {\r\n        width: 180px;\r\n        height: 180px;\r\n        padding: 50px 20px;\r\n    }\r\n    .smart-dispatch {\r\n        background-position: center -30px;\r\n    }\r\n    .otm-main-inner p,\r\n    .team-text-inner p {\r\n        font-size: 22px;\r\n    }\r\n    #otm-carousel-team .carousel-control-next,\r\n    #otm-carousel-team .carousel-control-prev {\r\n        bottom: 10px;\r\n    }\r\n    .home-cta h4 br {\r\n        display: none;\r\n    }\r\n    .ml7 .text-wrapper {\r\n        position: relative !important;\r\n        display: block !important;\r\n        padding-top: 60px !important;\r\n        overflow: hidden !important;\r\n        font-size: .7em !important;\r\n        height: 0px !important;\r\n    }\r\n    .homepage>h1, h2, h3, p {\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n    .carousel-cta-orange {\r\n        right: 10px\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .button-wrapper {\r\n        right: -50px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    .homepage .hero-text-wrapper {\r\n        text-align: center;\r\n    }\r\n    .hero-text-wrapper h1,\r\n    .hero-text-wrapper h2 {\r\n        font-size: 3em;\r\n    }\r\n    .hero-text-wrapper h3 {\r\n        font-size: 1.5em;\r\n    }\r\n    .carousel-item-title h3,\r\n    .otm-main-inner h3,\r\n    .team-text-inner h4 {\r\n        font-size: 1.6em;\r\n    }\r\n    .otm-main-inner h3 img {\r\n        width: 30px;\r\n    }\r\n    .carousel-item-text p {\r\n        font-size: 1em;\r\n    }\r\n    .carousel-item-title h3 img {\r\n        width: 36px;\r\n        margin-right: 10px;\r\n    }\r\n    .hero-text-wrapper p {\r\n        font-size: 1.26em;\r\n        font-style: italic;\r\n        margin-top: 25px;\r\n    }\r\n    .navbar-brand img {\r\n        width: 200px;\r\n    }\r\n    .smart-dispatch .carousel-inner {\r\n        padding: 100px 30px;\r\n    }\r\n    .button-wrapper {\r\n        right: 0px;\r\n    }\r\n}\r\n\r\n.ml7 {\r\n    position: relative;\r\n    font-weight: 900;\r\n    font-size: 3.7em;\r\n}\r\n\r\n.ml7 .text-wrapper {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-top: 0.2em;\r\n    padding-right: 0.05em;\r\n    padding-bottom: 0;\r\n    overflow: hidden;\r\n    height: 100px;\r\n}\r\n\r\n.ml7 .letter {\r\n    -webkit-transform-origin: 0 100%;\r\n            transform-origin: 0 100%;\r\n    display: inline-block;\r\n    line-height: 1em;\r\n}\r\n\r\n.letters .letter- {\r\n    width: 25px;\r\n}", ""]);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c4962524ce66cb75779f5cced5af011.svg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "19e0f389baa53cae313cb79fb09a5ae0.svg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e4d381b6f7d22a11f1195e8aa729d3a0.svg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "709b3115f53eed4206638058afdfecbf.png";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAwCAYAAABnjuimAAAABHNCSVQICAgIfAhkiAAADJBJREFUWIW1mFlsXOd1x393n7mzD4fiTomSaJqiZEuQFzmOvCRtCtst4iItUBdFgAJBgSLJQ9GHoo8F+lSgBQq0D0mAtoDRxK3Rum0cOEpjO5alWLZk0dotUQv3dTj73Llzt68PlxxpRFKiZPe8zZ3vO9//O99Z/udIQgjBPcR2PC5OL7OnJ0syaqDI0r2WP7SU601KdRtNlenJJJDuOka+nwLXD/jPU1f51YUpFks17n2thxPb9fhscokf/e84xZoNbDxEvZ8SRZbYP9jJGycuE9VV0mYE01CxXZ9AiM10bktkWUJTZBRZ4uZikbdPT6CrCh2JKLDx1e4LNKqr/O6RET69vsB7FybZN9CJHxjMrlYJArFB5Wa4N1ujKBLJqEFnyuTY+E0qVpM/fekw3Zn4pjjuC1SSJKK6xtce28X7F6ZYKte5NL3M3/73x6iKTFRrVyEAcQdcaQ3mnWC9IMDxfJ55tJ/vvfIks/kK+wZyDOaSW+K4L9B1UWSZasPh3K1F/u3EFSzH5c+/eYShrnQL4UqlzsR8kUKt0dqXiUcY7smyIx1rfWu6Pq+/f56fHL9EyjQo1GwGd6SQ7o6ghwEKsFiq8dapa9iOS182wYGdnezuzoQ4BczmK5y5vsBq1WoFnR8IfutQht3d6ZYezws4dTXLu+cnOX5pmtVqg9GB3D3PfiCgZatJVNfYN9hJKmqQiBio8u3EsSMV47WjY1hNt/Utamh0p2Nt6xRdpjsTJxOPcHCoi9d/dQHfD74coIEQDPdkeXH/To5fnmZPdwZdU8LIb4FS2dWV3nL/ndKRiNKRiPIbjw9xcXoFQ1PvmUC2DVQCUqZB1NCYzld4ariPmXyFlYq1YR1sFv0ChNRa0HA8hICFYo1c0kRT753Stw90zdFtx2O5VOf9C5OcvbnQ9qR3rru74K3/Wr9IodrAdj3mC7XW2nvVvC2B+kGA7frYjgdAveliNV1qtoPteAx1pYkZ2oZSt12JRzQKdZt8tUHT9anbLqW6jRACSZKIR3U05bYRtgTacDxuLZWZWikhI3FtbpXFYo3J5TK+EAz3dpA2DaT7FuHNpVizubZQZDZfIV+xiOgqZ64vEDU0FFni6Ud6ScciyGuW2BSoHwgqVpNfnrvJJ9fmMQ2N2dUKpXqT1ZpNreFwbPwGpv5ASaNNqrbDTL6CEIJqw6HScKhYTRRJAiQGc0lMXSOydoZ0N3sSAuZWK/zHR59zZTaPHwhefXqEpVKdk5/P8MSeHn74i3F+9N1XyCWjt5P0uppt+sJyqc4/v3eeRERnrlBluCfLU8O9vH9hktVqg3Qswre+8ijPjPQhSdJGiwoEyxWLjyfm0RWZ5bKF5bgkTZ1MLELKNDBUhb5sgq50DPkhaZ8iSWRjEUxDo1hvkE1E0DWFK7N59g3k+PDyDKMDHRx5pA9J2oLmOa5P3NB4dnSAHekYjuvjBwJZkgjEHUb7MqipdJsPeL6PEPDNp0dImQaeH7R4w5ahoKzRsLvTz7r8P9BSIDRCRFNR7jp3UxSyLLFatbk0k2e+UEWSpDVrCmQpdMcvakwBbSRk3apNz+eDi1PkW3xhi6iXCMtbbzbOzcUiKdMgGdUp1mxKdZtKw8HxfBaKNRzfR5akEPhdyO+Orbs7g6VSjWKtgecbNByXQq2BLGXZ05Xhs8kletJx+joSrIfAhqgHsJou0ysVKpZNICBfsXj7zARzq1VSZoRT1+Z47egY8ajWynPrVgq13alS2tT6xbrNZzcXkWUJxwtImjrP7Rvk6Nggnh+gyGGK6kzFNrcogGloPNrfAYSM6R9/dpqFQp293VmqtoMfBJQtGy/w74Ah8AOB6wdtBESWJNS1luNOqVoO9aaLoaoc2t3NxMIqp6/P8/vPjm7a3G0rY/tC8NhQJ99+4THmizUuTC3x/VeepDNpIsnrtT3koz8/e4PFUq21N5c0eenwHnbtaGdV84UqP/j5WTLxKN/5xkHePj3BpzcWNrCsBwKKAENViUU0TCOMSNNQURS53XqyhOv7ay4Qfnc9f8Pja4pMRFOJ6CqGppCI6EQ0NXSjLdLJQ9VAgaBsNfno6hylehMpvAv2GnWLRzTWo1WWZY5fmiZ6PTxKCOhMmgx2Jlv+vZ1U93BABdQaDqeuzjFfqGFGNGQpBOoHAl1VUBUZPwio2S6mrmJoKr4QlGo2YwM5UjHjgc7cPtC1/ClEWAx6swkO7+mhN1vj954dxdRVPru1xPjNRV46vJcdKZPZfIV/evccf/j8fkZ6O6jZDn/97yd49UhYedZvLYQgQDx8c+f6AcVqg2vzBWzX481fX6ZUt7GaLrIska9aFGsNTF0lFYvgeD7L5TqqIpOMGghC8iECQSpm4AcB1+cLeH6AqsjYjsf1xSI/Pn6Rc7eWmFut8vncKt2ZOIoit3n2lkBdL2CuUOEnH16mULPpSES5OlsgX7XwfNFa4641ZYok4ftBWJ+FQJbDSuYFgkCE/0tIWI5LsEaOAyGYW60yfmORphdg6Cr/+sFFsvEII305zDuI+RZ8NGCxVOO/Tl3j/OQSf/KNQ+zqSqGrCpemV/ibtz56oBK61RxOVWSeGenjtaNjmBGNpVKdn56e4AfHxvnuy4fZ25MlamhImwEVQKne5F/ePc/F6RW+85sHefHAztZT1BrOWovw4NU+tI7UKqeqIpOORRjuzZI0Dfb2ZNndneGv3viAv/ufj/ney09yaHcXiixvJCVBIPjhsXGmV8p8+8UDHBzqwvUDmq639qwPjO+2EbbY6wUCx/Px/ICUafBnv/M06ViENz68xNRyObzURmWCk5/PcHR0gIVijbdOfb5mPIm9PZlW7pOk24RDan0LrdVag9Rq1tr2rGWQdUZ2cWqZ6ZUyluMhhMAPAh7f1cWHl2dYKNbY3Z3Z3EetpoumyuQrFnOFauu7Kkt0Z+IEQhAEgnhEp6w1cT0fy3HRFJmooREI0epeo3pIXBqOh+sFdCSiqLJMEIScwPUClkp1Ls/kqdlO60JP7O1FkcN9m1oUwgitNhwe39XFnu5My3JRXWNquYzrBViORzYeRZElLk6voCoyZcthuDfLjcUii8U6VtPlyEgfy+U6pycWcD2fF/bvpGI1MQ0VPwhYKFQZG8jx1HAvXhCACLlFxWri+kHrNTbyUQlG+nO8e36Sdz69QcLUieph5ElSGGjVhsNSscYvz91ivlAN2bgUZot1Fwh5qmi1MLIcuoXr+8zkq7z69CM0XZ9fX51jdrWCqiiAwPMDFkt1DE1luCdLLhHdCNTxfOZXqzw/Nkg8onHyygzP7RukKx1rWXUmX+XNk1dYKtf56r6BtoHYdiVpGqxULFarDR7t6+D5/YMYqgKEY/K3Tl1lV1eao6MDuH6Yq9uIc6lu8w8/O8PkconVagPH80mZBomo0UpGJavJbL7CSH8HmqK0MQo38Gm6fttkTlVkdFUJ197xag3Ho1S3cTyfrnSsNRVxPJ+plTKZeOjL/R0J/uJbX2m3aL3pcm5yidH+HF87sAtdUze26SJkTxvqsoDVWoOTl2eorQUAQDyi8+RwL50pc6NpxXrvROvC6xRRliTO3lzg4vQKZavJhrm2AA7v7eb5sZ3EI/pG5VuIACbmC0wuldoqUVcmzrOj/Yz233tQu5lIEtxaKiOEaAcqSaDKMtfmChzY2YVpaOiqspWeDTK0I8X3f/vJVmoCiOgKKTOCqmx/SBUIQbFmM52v0PQ8ZFna6KNvnrzCmesLZOIRjoz0cXCoi55MHE1V2hq5rUQIcVdrxz3p2+19oX+uVhucn1rmk2tzTC6V2DfYyR9//fF2oK4fUKrZXJha5tj4TT67tchof46Xn9jLvoFcW0B82eIFAVPLZd45e4Pjl6YZG8jx8uG9HNi5g/5csv3pNUWmM2Xywv6d2K7HpzcWyFcb/P1PPyGXMFFVmSAQqIq8LSvdT4QI86YsS7heQLXRJB7RKdYafP3xIZ4bGyS5RrA3rUyyHLa4fR0J/uiFA6RNg6VynbM3FjlxeYY/ODpGNhH5wmCrVpMfH7/Eod3dHBzqYrAziaGp/OXr7xHV28c6WxJnQ1URAoq1BomI3sqlhqZweE83O9KxbfnsvSRfsXjn7A1kSSIWCTlC2bKxHQ9DU9omhVsC7cnG2dmZ4u3TE2TiUSRgqWxxaHc3Q11pElH9C1tUVxW+um+AU1fnyH9ioWsKTdcnaRoM5FJtmWLTkQ6EyX9ivsD4zUVcL6w0SdNgbCDH/p2dX4qPup7PStXixOUZyvUmQoRx0p9L8tRwD6lYpLX2/wCHEuPqfKYBpgAAAABJRU5ErkJggg=="

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
var urlEscape = __webpack_require__(11);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(92));

// Module
exports.push([module.i, ".section-title {\n    position: relative;\n    font-size: 40px;\n    font-weight: 600;\n    color: #004D86;\n    padding-bottom: 30px;\n    margin-bottom: 30px;\n}\n\n.section-title:after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100px;\n    height: 5px;\n    background-color: #D8D8D8;\n}\n\n.partnership-image {\n    position: absolute;\n    top: 127px;\n    left: 24px;\n    z-index: 1;\n}\n\n.steps-pills {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0px;\n    position: relative;\n}\n\n.steps-pills:after {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 100%;\n    top: 0px;\n    left: 25px;\n    background: -webkit-gradient(linear, left top, left bottom, from(#F0F3F5), to(#71D379));\n    background: linear-gradient(180deg, #F0F3F5, #71D379);\n}\n\n.steps-pills li {\n    margin-bottom: 70px;\n    padding-left: 80px;\n    position: relative;\n}\n\n.steps-pills li:last-child {\n    margin-bottom: 30px;\n}\n\n.partner-process {\n    border-right: 1px solid #DAE2ED;\n}\n\n.partner-process-inner {\n    padding-top: 70px;\n    padding-left: 10px;\n}\n\n.partner-form-inner {\n    padding-top: 70px;\n}\n\n.partner-form-inner .form-group label {\n    font-size: 24px;\n}\n\n.partner-form-inner .form-group {\n    margin-bottom: 40px;\n}\n\n.get-help-wrap img {\n    width:150px;\n}\n.step-pill {\n    width: 155px;\n    height: 40px;\n    position: relative;\n    font-size: 18px;\n    padding-left: 20px;\n    padding-top: 5px;\n    color: #ffffff;\n    font-weight: 500;\n}\n\n.step-pill:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 20px 0 20px 20px;\n}\n\n.step-pill.pill-green {\n    background-color: #71d379;\n}\n\n.step-pill.pill-green:after {\n    border-color: transparent transparent transparent #71d379;\n}\n\n.step-pill.pill-light {\n    background-color: #EEF3EE;\n    color: #464C4E;\n}\n\n.step-pill.pill-light:after {\n    border-color: transparent transparent transparent #EEF3EE;\n}\n\n.step-pill.pill-blue {\n    background-color: #71CAD3;\n}\n\n.step-pill.pill-blue:after {\n    border-color: transparent transparent transparent #71CAD3;\n}\n\n.step-pill.pill-dark {\n    background-color: #7A8F9D;\n}\n\n.step-pill.pill-dark:after {\n    border-color: transparent transparent transparent #7A8F9D;\n}\n\n.step-li:after {\n    content: '';\n    width: 60px;\n    height: 60px;\n    border: 1px solid #D5DCE1;\n    position: absolute;\n    left: 0px;\n    top: -10px;\n    border-radius: 100%;\n}\n\n.step-li:before {\n    content: '';\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 10px;\n    top: 0px;\n    border-radius: 100%;\n    background-color: #ffffff;\n    z-index: 1;\n    padding: 6px;\n    font-size: 18px;\n    text-align: center;\n}\n\n.process-title {\n    margin-bottom: 40px;\n}\n\n.step-li.step-one:after {\n    background: -webkit-gradient(linear, left bottom, left top, from(#F0F3F5), to(#71D379));\n    background: linear-gradient(0deg, #F0F3F5, #71D379);\n}\n\n.step-li.step-one:before {\n    content: '1';\n}\n\n.step-li.step-two:before {\n    content: '2';\n}\n\n.step-li.step-three:before {\n    content: '3';\n}\n\n.step-li.step-four:before {\n    content: '4';\n}\n\n.step-li.step-five:before {\n    content: '5';\n}\n\n.step-li.step-two:after {\n    background: -webkit-gradient(linear, left bottom, left top, from(#F0F3F5), to(#71D379));\n    background: linear-gradient(0deg, #F0F3F5, #71D379);\n}\n\n.step-li.step-three:after {\n    background: -webkit-gradient(linear, left bottom, left top, from(#F0F3F5), to(#71D379));\n    background: linear-gradient(0deg, #F0F3F5, #71D379);\n}\n\n.step-li.step-four:after {\n    background: -webkit-gradient(linear, left bottom, left top, from(#F0F3F5), to(#71D379));\n    background: linear-gradient(0deg, #F0F3F5, #71D379);\n}\n\n.step-li.step-five:after {\n    background: -webkit-gradient(linear, left bottom, left top, from(#F0F3F5), to(#71D379));\n    background: linear-gradient(0deg, #F0F3F5, #71D379);\n}\n\n.get-help-wrap {\n    text-align: center;\n    padding-top: 30px;\n    border-top: 1px solid #DAE2ED;\n}\n\n.get-help-wrap p {\n    margin-bottom: 40px;\n}\n\n.partner-form {\n    padding-left: 30px;\n}\n\n.partner-btn-submit {\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-top: 50px;\n}\n\n.partner-btn-submit svg {\n    fill: #ffffff;\n}\n\n.partner-btn-submit svg,\n.partner-btn-submit span {\n    display: inline-block;\n    width: 20px;\n    margin-left: 10px;\n}\n\n.form-control.otm-form-control {\n    border-top: 0px;\n    border-right: 0px;\n    border-left: 0px;\n    border-radius: 0px;\n    position: relative;\n    padding-left: 20px;\n}\n\n.input-has-icon {\n    position: relative;\n}\n\n.input-has-icon:after {\n    content: '';\n    width: 15px;\n    height: 15px;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: absolute;\n    left: 0px;\n    top: 50%;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n}\n\n@media only screen and (max-width: 991px) {\n    .get-help-wrap {\n        margin-bottom: 30px;\n    }\n    .partner-process {\n        border-right: 0px;\n    }\n    .section-title {\n        font-size: 32px;\n    }\n}\n\n@media only screen and (max-width: 768px) {\n    .section-title {\n        font-size: 28px;\n    }\n    .partner-form-inner .form-group label {\n        font-size: 18px;\n    }\n}", ""]);



/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjY4LjgzMiAyNjguODMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNjguODMyIDI2OC44MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxwYXRoIGQ9Ik0yNjUuMTcxLDEyNS41NzdsLTgwLTgwYy00Ljg4MS00Ljg4MS0xMi43OTctNC44ODEtMTcuNjc4LDBjLTQuODgyLDQuODgyLTQuODgyLDEyLjc5NiwwLDE3LjY3OGw1OC42NjEsNTguNjYxSDEyLjUKCQljLTYuOTAzLDAtMTIuNSw1LjU5Ny0xMi41LDEyLjVjMCw2LjkwMiw1LjU5NywxMi41LDEyLjUsMTIuNWgyMTMuNjU0bC01OC42NTksNTguNjYxYy00Ljg4Miw0Ljg4Mi00Ljg4MiwxMi43OTYsMCwxNy42NzgKCQljMi40NCwyLjQzOSw1LjY0LDMuNjYxLDguODM5LDMuNjYxczYuMzk4LTEuMjIyLDguODM5LTMuNjYxbDc5Ljk5OC04MEMyNzAuMDUzLDEzOC4zNzMsMjcwLjA1MywxMzAuNDU5LDI2NS4xNzEsMTI1LjU3N3oiLz4KPC9zdmc+"

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Imports
var urlEscape = __webpack_require__(11);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(94));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(35));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(95));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(96));

// Module
exports.push([module.i, ".solution-hero{\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.solution-hero h2 {\n    text-align: center;\n}\n.plan-price {\n    text-align: center;\n}\n.solution-hero .row{\n    height: 500px;\n    max-height: 100%;\n}\n.hero-title{\n    color: #ffffff;\n}\n.hero-title h2{\n    font-size: 80px;\n    margin-bottom: 10px;\n}\n.hero-title h4{\n    font-size: 40px;\n    margin-top: 0px;\n}\n.solution-main{\n    padding-top: 50px;\n    padding-bottom: 50px;\n    position: relative;\n    overflow: hidden;\n}\n.section-title{\n    position: relative;\n    font-size: 40px;\n    font-weight: 600;\n    color: #004D86;\n    padding-bottom: 30px;\n    margin-bottom: 30px;\n}\n.section-title:after{\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100px;\n    height: 5px;\n    background-color: #D8D8D8;\n}\n.section-desc{\n    font-size: 1.2rem;\n    color: #191919;\n    margin-bottom: 15px;\n}\n.crop {\n    max-width: 700px;\n    overflow: hidden;\n    position: absolute;\n    right: -90px;\n    top: 40px;\n    z-index: -1;\n}\n.crop img {\n    max-width: initial;\n    width: 100%;\n}\n\n.clear{\n    clear: both;\n}\n.solutions-main-left-inner .list {\n    display:none; \n    height:auto;\n    margin:0;\n    float: left;\n}\n\n.solutions-main-left-inner .show {\n    display: none; \n}\n.solutions-main-left-inner .hide:target + .show {\n    display: inline; \n}\n.solutions-main-left-inner .hide:target {\n    display: none; \n}\n.solutions-main-left-inner .hide:target ~ .list {\n    display:inline; \n}\n\n/*style the (+) and (-) */\n.solutions-main-left-inner .hide,\n.show {\n    margin-right: 0;\n    float: left;\n    /* margin-bottom: 25px; */\n}\n\n.solutions-main-left-inner .hide:hover,\n.show:hover {\n    text-decoration: none;\n    opacity: 1;\n    /* margin-bottom: 25px; */\n}\n\n.solutions-main-left-inner .list p{\n    height:auto;\n    margin:0;\n    margin-bottom: 15px;\n}\n/*.about-main-img-right{\n    position: absolute;\n    right: 0px;\n    top: 50px;\n    bottom: 0px;\n    max-width: 650px;\n}*/\n\n.about-main-img-right-logo{\n    position: absolute;\n    right: 0px;\n    top: 50px;\n    bottom: 0px;\n    max-width: 510px;\n}\n\n.btn-blue{\n    background-color: #023B7D;\n    color: #ffffff;\n    margin-top: 30px;\n    text-transform: uppercase;\n    box-shadow: -7px 8px 0px 0px rgba(216,216,216,1);\n    border-radius: 0px;\n    font-size: 1em;\n    font-weight: 600;\n    padding: 10px 35px;\n}\n.btn-blue:hover {\n    color: #ffffff;\n    background-color: #1256a3;\n}\n\n.otm-plans{\n    background-image: url(/static/solutions-path-bg.87c3bb36.png);\n    background-position: bottom;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-color: #F6F8F9;\n    padding-top: 100px;\n    padding-bottom: 100px;\n}\n.otm-plans-wrapper {\n    position: relative;\n    min-height: 500px;\n}\n.otm-plans-diamond {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    height: 100%;\n    margin-top: -20px;\n    z-index: 1;\n}\n.otm-plans-diamond .plan-inner {\n    background-color: #f8f8f8;\n    min-height: 515px;\n}\n.otm-plans-diamond .plan-icon-wrapper {\n    background-color: #ffffff;\n    border: 3px solid #e5e5e5;\n}\n.otm-plans-emerald {\n    position: absolute;\n    left: 40px;\n}\n.otm-plans-ruby {\n    position: absolute;\n    right: 40px;\n}\n.plan-main-title{\n    text-align: center;\n    margin-bottom: 50px;\n}\n.plan-main-title small{\n    font-size: 1.2em;\n    text-transform: uppercase;\n    color: #7E8085;\n    margin-bottom: 10px;\n    display: inline-block;\n}\n.plan-main-title h4{\n    font-size: 34px;\n    color: #2C2E30;\n    line-height: 46px;\n}\n.plan-inner{\n    background-color: #ffffff;\n    text-align: center;\n    padding-top: 55px;\n    padding-bottom: 55px;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\n.plan-icon-wrapper{\n    width: 108px;\n    height: 108px;\n    border-radius: 50%;\n    margin: 0 auto;\n    background-color: #F4F4F4;\n    border: 3px solid #e5e5e5;\n    align-items: center;\n    display: flex;\n    margin-bottom: 10px;\n}\n.plan-icon-wrapper img{\n    margin: 0 auto;\n    max-width: 55px;\n}\n.plan-name{\n    text-transform: uppercase;\n    font-size: 15px;\n    font-weight: 600;\n    color: #302F2C;\n    margin-bottom: 15px;\n    margin-top: 15px;\n}\n.plan-desc{\n    font-size: 24px;\n    color: #2C2E30;\n    margin-bottom: 20px;\n}\n.plan-desc span{\n    color: #2F5BEA;\n}\n.plan-price{\n    font-size: 40px;\n    line-height: 34px;\n    color: #2C2E30;\n}\n.price-small-desc{\n    display: inline-block;\n    width: 100%;\n    font-size: 13px;\n    color: #91959E;\n}\n.plan-cta{\n    display: inline-block;\n    margin-top: 40px;\n    font-size: 18px;\n    color: #2C2E30;\n    position: relative;\n}\n.plan-cta img{\n    margin-left: 10px;\n}\n.plan-cta:after{\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: #2F5BEA;\n    position: absolute;\n    bottom: -5px;\n    left: 0px;\n    opacity: 0;\n}\n.plan-cta:hover:after{\n    opacity: 1;\n}\n.plan-cta:hover{text-decoration: none;color: #2C2E30;}\n.plan-footer{text-align: center;margin-top: 40px;}\n.plan-footer p{\n    color: #7E8085;\n    font-size: 1em;\n    margin-bottom: 0px;\n    text-transform: uppercase;\n    text-align: center;\n}\n.plan-footer h4{\n    font-size: 34px;\n    color: #2C2E30;\n    line-height: 46px;\n    margin-top: 0px;\n}\n.plans-hero .solution-main {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.plans-buttons btn {\n    margin-left: 50px;\n}\n.plan-text-header {\n    margin-left: 20px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n}\n.truck-permit{\n    padding-top: 100px;\n    padding-bottom: 100px;\n    position: relative;\n    background-color: rgb(246, 247, 247);\n}\n.solution-main-left {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 0px;\n}\n.solution-truck{\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 45px;\n    max-width: 530px;\n}\n.solution-truck-mobile {\n    display: none;\n}\n.section-divider{\n    position: absolute;\n    top: 0;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n}\n.section-divider-top{\n    left: 0px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 100px 0 100px 50vw;\n    border-color: transparent transparent transparent #007CC7;\n}\n.section-divider-bottom{\n    width: 0;\n    height: 0;\n    right: 0px;\n    border-style: solid;\n    border-width: 100px 50vw 100px 0;\n    border-color: transparent #007CC7 transparent transparent;\n}\n.solution-accounting{\n    position: absolute;\n    left: 0px;\n    top: 100px;\n    bottom: 0px;\n    max-width: 575px;\n}\n.accounting-otm{\n    position: relative;\n    padding-top: 100px;\n    padding-bottom: 100px;\n    background-color: #f7f7f7;\n}\n.accounting-otm .section-desc{font-size: 20px;}\n.accounting-otm .btn-blue{margin-top: 10px;}\n.bussiness-consulting{\n    position: relative;\n    padding-bottom: 30px;\n    padding-top: 100px;\n}\n.consulting-right-img{\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: 100%;\n    max-width: 600px;\n}\n.tax-debt-resolution{\n    position: relative;\n    padding-top: 100px;\n    padding-bottom: 50px;\n}\n\n.solution-tax-logo{\n    position: absolute;\n    top: 100px;\n    left: 20px;\n    right: 0;\n    max-width: 520px;\n    z-index: 1;\n    display: block !important;\n}\n\n.solutions-main-right-inner ul{\n    list-style: none;\n    padding-left: 0px;\n    margin-bottom: 0px;\n}\n.solutions-main-right-inner ul li{\n    position: relative;\n    padding-left: 40px;\n    font-size: 1.2rem;\n    color: #3A434A;\n    margin-bottom: 10px;\n}\n.solutions-main-right-inner ul li:after{\n    content: '';\n    width: 20px;\n    height: 14px;\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: absolute;\n    left: 0px;\n    top: 50%;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n}\n\n\n.solutions-truck-animation {\n    bottom: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    max-width: 600px;\n}\n.solutions-slider-trucks {\n    top: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100px;\n    position: relative;\n    z-index: 2;\n}\n\n.solutions-sliding-animation {\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n    background-position: 0 0;\n    background-size: auto 150%;\n    -webkit-animation: run 10s linear infinite;\n    animation: run 100s linear infinite;\n    z-index: 2;\n    background-repeat-x: no-repeat;\n}\n\n@-webkit-keyframes run {\n    from {\n        background-position: 0 0;\n    }\n    /*use negative width if you want it to flow right to left else and positive for left to right*/\n    to {\n        background-position: left 0px bottom -10000px;\n    }\n}\n\n@keyframes run {\n    from {\n        background-position: 0 0;\n    }\n    /*use negative width if you want it to flow right to left else and positive for left to right*/\n    to {\n        background-position: left 0px bottom -10000px;\n    }\n}\n\n.solutions-slider-background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    max-width: 600px;\n    height: 100%;\n    z-index: 0;\n}\n\n.solutions-slider-bottom {\n    height: 100%;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n    background-position: 0 0;\n    background-size: auto 100%;\n    background-repeat: no-repeat;\n}\n\n\n@media only screen and (min-width: 1700px){\n    .solution-accounting{\n        max-width: 675px;\n    }\n    \n}\n@media only screen and (min-width: 1900px){\n    .consulting-right-img{\n        width: 100%;\n        max-width: 650px;\n    }\n    .solution-tax-logo{\n        max-width: 625px;\n    }\n    .solution-truck{\n        max-width: 600px;\n    }\n}\n@media only screen and (min-width: 1201px) and (max-width: 1350px) {\n    .solution-main-left {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        top: -10px;\n    }\n}\n\n@media only screen and (min-width: 2500px){\n    .consulting-right-img{\n        top: 0px;\n        max-width: 750px;\n    }\n    .solution-tax-logo{\n        left: 250px;\n        max-width: 700px;\n    }\n    .solution-accounting {\n        max-width: 875px;\n    }\n    .solution-truck {\n        max-width: 650px;\n    }\n}\n@media only screen and (max-width: 1200px){\n    .about-main-img-right{\n        top: auto;\n        max-width: 550px;\n    }\n    .solution-truck{\n        max-width: 440px;\n        top: 40px;\n    }\n    .about-main-img-right-logo{\n        max-width: 450px;\n    }\n    .solution-accounting{\n        max-width: 530px;\n    }\n    .consulting-right-img{\n        max-width: 500px;\n        top: 0px;\n    }\n    .solution-tax-logo {\n        position: absolute;\n        top: 85px;\n        left: 55%;\n        width: 55%;\n        max-width: 520px;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        z-index: 1;\n        display: block !important;\n    }\n\n}\n@media only screen and (max-width: 991px){\n    .about-main-img-right,.solution-truck,.about-main-img-right-logo,.solution-accounting,.consulting-right-img,.solution-tax-logo{\n        display: none;\n    }\n    .solution-truck-mobile {\n        width: 100%;\n        left: 0;\n        right: 0;\n        position: absolute;\n        display: block;\n    }\n    .solutions-main-right-inner {\n        margin-top: 150px;\n    }\n    #tax-planning .about-main-img-right-logo {\n        width: 40%;\n        left: 50%;\n        right: 50%;\n        top: 100px;\n        position: absolute;\n        display: block;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n    }\n    #consulting .about-main-left {\n        margin-top: 200px;\n    }\n    .consulting-right-img {\n        width: 75%;\n        right: 0;\n        top: 0;\n        position: absolute;\n        display: block;\n    }\n    .solutions-tax-logo {\n        width: 40%;\n        left: 50%;\n        right: 50%;\n        top: 100px;\n        position: absolute;\n        display: block;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n    }\n    #irs-tax .about-main-left {\n        margin-top:100px;\n    }\n    .hero-title h2 {\n        font-size: 60px;\n    }\n    .hero-title h4 {\n        font-size: 30px;\n    }\n    .section-title {\n        font-size: 32px;\n    }\n    .plan-footer h4{\n        font-size: 30px;\n    }\n    .section-desc {\n        font-size: 20px;\n    }\n    .plan-main-title h4{\n        font-size: 30px;\n    }\n    .otm-plans-wrapper {\n        margin: 0 auto;\n        width: 100%;\n    }\n    .otm-plans-diamond {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: none;\n        transform: none;\n        height: 100%;\n        margin-top: 0px;\n        z-index: 1;\n    }\n    .otm-plans-emerald {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: none;\n        transform: none;\n        height: 100%;\n        margin-top: 0px;\n        z-index: 1;\n    }\n    .otm-plans-ruby {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: none;\n        transform: none;\n        height: 100%;\n        margin-top: 0px;\n        z-index: 1;         \n    }\n    .solutions-truck-animation {\n        margin: 0 auto;\n        height: 400px;\n        border-bottom: 1px solid #ddd;\n    }\n    #accounting .about-main-left {\n        margin: 165px auto;\n        top: 200px;\n    }\n}\n@media screen and (min-width: 1024px) and (max-width: 1279px) {\n    .crop {\n        right: -200px;\n    }\n    .accounting-otm {\n        padding-top: 50px;\n        padding-bottom: 50px;\n    }\n    .solution-tax-logo {\n        position: absolute;\n        max-width: 620px;\n        top: 280px;\n        left: 130px;\n        width: 100%;\n        right: 0;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        z-index: 1;\n        display: block !important;\n    }\n\n}\n@media screen and (max-width: 900px) and (min-width: 600px) {\n    .crop {\n        left: 0px !important;\n        right: 0px !important;\n        top: 40px;\n        z-index: -1;\n        margin: 0 auto;\n    }\n    .solutions-main-right-inner {\n        margin-top: 400px;\n    }\n    #tax-planning .about-main-img-right-logo {\n        top:200px;\n    }\n    .consulting-right-img {\n        width: 48%;\n    }\n    .solution-tax-logo {\n        top: 70px;\n        left: 53%;\n        right: 50%;\n        width: 30%;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n    }\n    .otm-plans-wrapper {\n        min-height: 1580px;\n    }\n    .otm-plans-diamond {\n        position: relative;\n        top: 250px !important;\n        left: 50% !important;\n        right: 50% !important;\n        -webkit-transform: translate(-50%, -50%) !important;\n                transform: translate(-50%, -50%) !important;\n        width: 100% !important;\n        max-width: 50% !important;\n        display: block !important;\n        margin-top: 0px !important;\n        z-index: 1 !important;\n    }\n    .otm-plans-emerald {\n        position: relative;\n        top: 800px !important;\n        -webkit-transform: translate(-50%, -50%) !important;\n                transform: translate(-50%, -50%) !important;\n        width: 100% !important;\n        max-width: 50% !important;\n        display: block !important;\n        margin-top: 0px !important;\n        z-index: 1 !important;\n    }\n    .otm-plans-ruby {\n        position: relative;\n        top: 520px !important;\n        left: 50% !important;\n        right: 50% !important;\n        -webkit-transform: translate(-50%, -50%) !important;\n                transform: translate(-50%, -50%) !important;\n        width: 100% !important;\n        max-width: 50% !important;\n        display: block !important;\n        margin-top: 0px !important;\n        z-index: 1 !important;\n    }\n}\n@media only screen and (max-width: 768px){\n    .hero-title h2 {\n        font-size: 40px;\n    }\n    .hero-title h4 {\n        font-size: 20px;\n    }\n    .section-title {\n        font-size: 28px;\n    }\n    .section-desc {\n        font-size: 18px;\n    }\n    .section-divider-top{\n        border-width: 70px 0 70px 50vw;\n    }\n    .section-divider-bottom{\n        border-width: 70px 50vw 70px 0;\n    }\n    .plan-inner{\n        margin-bottom: 20px;\n    }\n    .plan-footer h4{\n        font-size: 24px;\n        line-height: 1.4;\n    }\n    .plan-main-title h4{\n        font-size: 24px;\n        line-height: 1.4;\n        margin-bottom: 30px;\n    }\n    .solutions-main-left-inner {\n        margin-top: 380px;\n    }\n    .crop {\n        max-width: 420px;\n        overflow: hidden;\n        position: absolute;\n        right: -90px;\n        top: 40px;\n        z-index: -1;\n    }\n\n    .otm-plans-wrapper {\n        margin: 0 auto;\n        width: 100%;\n    }\n    .otm-plans-diamond {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: none;\n        transform: none;\n        height: 100%;\n        margin-top: 0px;\n        z-index: 1;\n    }\n    .otm-plans-emerald {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: none;\n        transform: none;\n        height: 100%;\n        margin-top: 0px;\n        z-index: 1;\n    }\n    .otm-plans-ruby {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: none;\n        transform: none;\n        height: 100%;\n        margin-top: 0px;\n        z-index: 1;         \n    }\n}\n@media only screen and (max-width: 475px){\n    .plan-footer h4{\n        font-size: 1.1em;\n        font-weight: 600;\n    }\n    .plan-main-title h4{\n        font-size: 1.5em;\n    }\n}\n@media only screen and (max-width: 375px){\n    .section-title{\n        font-size: 24px;\n    }\n}", ""]);



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b245268e774883ddfeb68ccad8fe739a.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa793a1aa2bb32a79ccd0c8dc84d0e7d.svg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44b01352bd30460effcb0513aeb3ba4d.svg";

/***/ })
/******/ ]);
});