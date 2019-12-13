(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
  }
})(global, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // object to store loaded chunks // "0" means "already loaded"
    /******/
    /******/ /******/ /******/ var installedChunks = {
      /******/ 0: 0
      /******/
    }; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // The chunk loading function for additional chunks // Since all referenced chunks are already included // in this file, this function is empty here.
    /******/
    /******/ /******/ /******/ /******/ __webpack_require__.e = function requireEnsure() {
      /******/ return Promise.resolve();
      /******/
    }; // expose the modules object (__webpack_modules__)
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = "/"; // uncaught error handler for webpack runtime
    /******/
    /******/ /******/ __webpack_require__.oe = function(err) {
      /******/ process.nextTick(function() {
        /******/ throw err; // catch this error by using import().catch()
        /******/
      });
      /******/
    }; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 35));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = require("react");

        /***/
      },
      /* 1 */
      /***/ function(module, exports) {
        module.exports = require("path");

        /***/
      },
      /* 2 */
      /***/ function(module, exports) {
        module.exports = require("babel-plugin-universal-import/universalImport");

        /***/
      },
      /* 3 */
      /***/ function(module, exports) {
        module.exports = require("@reach/router");

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function(module) {
          var _typeof = __webpack_require__(9);

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

          var _extends =
            Object.assign ||
            function(target) {
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

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _requireUniversalModule = __webpack_require__(38);

          Object.defineProperty(exports, "CHUNK_NAMES", {
            enumerable: true,
            get: function get() {
              return _requireUniversalModule.CHUNK_NAMES;
            }
          });
          Object.defineProperty(exports, "MODULE_IDS", {
            enumerable: true,
            get: function get() {
              return _requireUniversalModule.MODULE_IDS;
            }
          });

          var _reportChunks = __webpack_require__(40);

          Object.defineProperty(exports, "ReportChunks", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_reportChunks)["default"];
            }
          });
          exports["default"] = universal;

          var _react = __webpack_require__(0);

          var _react2 = _interopRequireDefault(_react);

          var _propTypes = __webpack_require__(11);

          var _propTypes2 = _interopRequireDefault(_propTypes);

          var _hoistNonReactStatics = __webpack_require__(16);

          var _hoistNonReactStatics2 = _interopRequireDefault(
            _hoistNonReactStatics
          );

          var _vm = __webpack_require__(41);

          var _requireUniversalModule2 = _interopRequireDefault(
            _requireUniversalModule
          );

          var _utils = __webpack_require__(10);

          var _helpers = __webpack_require__(42);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj
                };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }

            return call &&
              (_typeof(call) === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  _typeof(superClass)
              );
            }

            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
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
            return (
              // $FlowIgnore
              module.hot && false
            );
          };

          var setHasBabelPlugin = (exports.setHasBabelPlugin = function setHasBabelPlugin() {
            hasBabelPlugin = true;
          });

          function universal(asyncModule) {
            var _class, _temp;

            var opts =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

            var userRender = opts.render,
              _opts$loading = opts.loading,
              Loading =
                _opts$loading === undefined
                  ? _utils.DefaultLoading
                  : _opts$loading,
              _opts$error = opts.error,
              Err =
                _opts$error === undefined ? _utils.DefaultError : _opts$error,
              _opts$minDelay = opts.minDelay,
              minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
              _opts$alwaysDelay = opts.alwaysDelay,
              alwaysDelay =
                _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
              _opts$testBabelPlugin = opts.testBabelPlugin,
              testBabelPlugin =
                _opts$testBabelPlugin === undefined
                  ? false
                  : _opts$testBabelPlugin,
              _opts$loadingTransiti = opts.loadingTransition,
              loadingTransition =
                _opts$loadingTransiti === undefined
                  ? true
                  : _opts$loadingTransiti,
              options = _objectWithoutProperties(opts, [
                "render",
                "loading",
                "error",
                "minDelay",
                "alwaysDelay",
                "testBabelPlugin",
                "loadingTransition"
              ]);

            var renderFunc =
              userRender || (0, _utils.createDefaultRender)(Loading, Err);
            var isDynamic = hasBabelPlugin || testBabelPlugin;
            options.isDynamic = isDynamic;
            options.usesBabelPlugin = hasBabelPlugin;
            options.modCache = {};
            options.promCache = {};
            return (
              (_temp = _class = (function(_React$Component) {
                _inherits(UniversalComponent, _React$Component);

                _createClass(
                  UniversalComponent,
                  [
                    {
                      key: "requireAsyncInner",
                      value: function requireAsyncInner(
                        requireAsync,
                        props,
                        state,
                        context,
                        isMount
                      ) {
                        var _this2 = this;

                        if (!state.mod && loadingTransition) {
                          this.update({
                            mod: null,
                            props: props
                          }); // display `loading` during componentWillReceiveProps
                        }

                        var time = new Date();
                        requireAsync(props, context)
                          .then(function(mod) {
                            var state = {
                              mod: mod,
                              props: props,
                              context: context
                            };
                            var timeLapsed = new Date() - time;

                            if (timeLapsed < minDelay) {
                              var extraDelay = minDelay - timeLapsed;
                              return setTimeout(function() {
                                return _this2.update(state, isMount);
                              }, extraDelay);
                            }

                            _this2.update(state, isMount);
                          })
                          ["catch"](function(error) {
                            return _this2.update({
                              error: error,
                              props: props,
                              context: context
                            });
                          });
                      }
                    },
                    {
                      key: "handleBefore",
                      value: function handleBefore(isMount, isSync) {
                        var isServer =
                          arguments.length > 2 && arguments[2] !== undefined
                            ? arguments[2]
                            : false;

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
                    },
                    {
                      key: "handleAfter",
                      value: function handleAfter(
                        state,
                        isMount,
                        isSync,
                        isServer
                      ) {
                        var mod = state.mod,
                          error = state.error;

                        if (mod && !error) {
                          (0, _hoistNonReactStatics2["default"])(
                            UniversalComponent,
                            mod,
                            {
                              preload: true,
                              preloadWeak: true
                            }
                          );

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
                    },
                    {
                      key: "init",
                      value: function init(props, context) {
                        var _req = (0, _requireUniversalModule2["default"])(
                            asyncModule,
                            options,
                            props
                          ),
                          addModule = _req.addModule,
                          requireSync = _req.requireSync,
                          requireAsync = _req.requireAsync,
                          asyncOnly = _req.asyncOnly;

                        var mod = void 0;

                        try {
                          mod = requireSync(props, context);
                        } catch (error) {
                          return (0, _helpers.__update)(
                            props,
                            {
                              error: error,
                              props: props,
                              context: context
                            },
                            this._initialized
                          );
                        }

                        this._asyncOnly = asyncOnly;
                        var chunkName = addModule(props); // record the module for SSR flushing :)

                        if (context.report) {
                          context.report(chunkName);
                        }

                        if (mod || _utils.isServer) {
                          this.handleBefore(true, true, _utils.isServer);
                          return (0, _helpers.__update)(
                            props,
                            {
                              asyncOnly: asyncOnly,
                              props: props,
                              mod: mod,
                              context: context
                            },
                            this._initialized,
                            true,
                            true,
                            _utils.isServer
                          );
                        }

                        this.handleBefore(true, false);
                        this.requireAsyncInner(
                          requireAsync,
                          props,
                          {
                            props: props,
                            asyncOnly: asyncOnly,
                            mod: mod,
                            context: context
                          },
                          context,
                          true
                        );
                        return {
                          mod: mod,
                          asyncOnly: asyncOnly,
                          context: context,
                          props: props
                        };
                      }
                    }
                  ],
                  [
                    {
                      key: "preload",

                      /* eslint-enable react/sort-comp */
                      value: function preload(props) {
                        var context =
                          arguments.length > 1 && arguments[1] !== undefined
                            ? arguments[1]
                            : {};
                        props = props || {};

                        var _req2 = (0, _requireUniversalModule2["default"])(
                            asyncModule,
                            options,
                            props
                          ),
                          requireAsync = _req2.requireAsync,
                          requireSync = _req2.requireSync;

                        var mod = void 0;

                        try {
                          mod = requireSync(props, context);
                        } catch (error) {
                          return Promise.reject(error);
                        }

                        return Promise.resolve()
                          .then(function() {
                            if (mod) return mod;
                            return requireAsync(props, context);
                          })
                          .then(function(mod) {
                            (0,
                            _hoistNonReactStatics2[
                              "default"
                            ])(UniversalComponent, mod, {
                              preload: true,
                              preloadWeak: true
                            });
                            return mod;
                          });
                      }
                      /* eslint-disable react/sort-comp */
                    },
                    {
                      key: "preloadWeak",
                      value: function preloadWeak(props) {
                        var context =
                          arguments.length > 1 && arguments[1] !== undefined
                            ? arguments[1]
                            : {};
                        props = props || {};

                        var _req3 = (0, _requireUniversalModule2["default"])(
                            asyncModule,
                            options,
                            props
                          ),
                          requireSync = _req3.requireSync;

                        var mod = requireSync(props, context);

                        if (mod) {
                          (0, _hoistNonReactStatics2["default"])(
                            UniversalComponent,
                            mod,
                            {
                              preload: true,
                              preloadWeak: true
                            }
                          );
                        }

                        return mod;
                      }
                    }
                  ]
                );

                function UniversalComponent(props, context) {
                  _classCallCheck(this, UniversalComponent);

                  var _this = _possibleConstructorReturn(
                    this,
                    (
                      UniversalComponent.__proto__ ||
                      Object.getPrototypeOf(UniversalComponent)
                    ).call(this, props, context)
                  );

                  _this.update = function(state) {
                    var isMount =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : false;
                    var isSync =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : false;
                    var isServer =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : false;
                    if (!_this._initialized) return;
                    if (!state.error) state.error = null;

                    _this.handleAfter(state, isMount, isSync, isServer);
                  };

                  _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

                  _this.state.error = null;
                  return _this;
                }

                _createClass(
                  UniversalComponent,
                  [
                    {
                      key: "componentDidMount",
                      value: function componentDidMount() {
                        this._initialized = true;
                      }
                    },
                    {
                      key: "componentDidUpdate",
                      value: function componentDidUpdate(prevProps) {
                        var _this3 = this;

                        if (isDynamic || this._asyncOnly) {
                          var _req4 = (0, _requireUniversalModule2["default"])(
                              asyncModule,
                              options,
                              this.props,
                              prevProps
                            ),
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
                              return this.requireAsyncInner(
                                requireAsync,
                                this.props,
                                {
                                  mod: mod
                                }
                              );
                            }

                            var state = {
                              mod: mod
                            };

                            if (alwaysDelay) {
                              if (loadingTransition)
                                this.update({
                                  mod: null
                                }); // display `loading` during componentWillReceiveProps

                              setTimeout(function() {
                                return _this3.update(state, false, true);
                              }, minDelay);
                              return;
                            }

                            this.update(state, false, true);
                          }
                        }
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function componentWillUnmount() {
                        this._initialized = false;
                      }
                    },
                    {
                      key: "render",
                      value: function render() {
                        var _props = this.props,
                          isLoading = _props.isLoading,
                          userError = _props.error,
                          props = _objectWithoutProperties(_props, [
                            "isLoading",
                            "error"
                          ]);

                        var _state = this.state,
                          mod = _state.mod,
                          error = _state.error;
                        return renderFunc(
                          props,
                          mod,
                          isLoading,
                          userError || error
                        );
                      }
                    }
                  ],
                  [
                    {
                      key: "getDerivedStateFromProps",
                      value: function getDerivedStateFromProps(
                        nextProps,
                        currentState
                      ) {
                        var _req5 = (0, _requireUniversalModule2["default"])(
                            asyncModule,
                            options,
                            nextProps,
                            currentState.props
                          ),
                          requireSync = _req5.requireSync,
                          shouldUpdate = _req5.shouldUpdate;

                        if (
                          isHMR() &&
                          shouldUpdate(currentState.props, nextProps)
                        ) {
                          var mod = requireSync(
                            nextProps,
                            currentState.context
                          );
                          return _extends({}, currentState, {
                            mod: mod
                          });
                        }

                        return null;
                      }
                    }
                  ]
                );

                return UniversalComponent;
              })(_react2["default"].Component)),
              (_class.contextTypes = {
                store: _propTypes2["default"].object,
                report: _propTypes2["default"].func
              }),
              _temp
            );
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(8)(module)));

        /***/
      },
      /* 5 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _utils = __webpack_require__(10);

        var requireById = function requireById(id) {
          if (!(0, _utils.isWebpack)() && typeof id === "string") {
            return __webpack_require__(39)("" + id);
          }

          return __webpack_require__("" + id);
        };

        exports["default"] = requireById;

        /***/
      },
      /* 6 */
      /***/ function(module, exports) {
        module.exports = require("react-static");

        /***/
      },
      /* 7 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(0);
        var external_react_default = /*#__PURE__*/ __webpack_require__.n(
          external_react_
        );

        // EXTERNAL MODULE: external "react-static"
        var external_react_static_ = __webpack_require__(6);

        // EXTERNAL MODULE: external "@reach/router"
        var router_ = __webpack_require__(3);

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Router.js

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/NavBar.js

        /* harmony default export */ var NavBar = function() {
          return external_react_default.a.createElement(
            "nav",
            {
              className: "navbar navbar-expand-md navbar-dark bg-dark"
            },
            external_react_default.a.createElement(
              "a",
              {
                className: "navbar-brand",
                href: "/"
              },
              external_react_default.a.createElement("img", {
                src: "/placeholder-images/logo.jpg",
                width: "125",
                height: "30"
              })
            ),
            external_react_default.a.createElement(
              "button",
              {
                className: "navbar-toggler",
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              },
              external_react_default.a.createElement("span", {
                className: "navbar-toggler-icon"
              })
            ),
            external_react_default.a.createElement(
              "div",
              {
                className: "collapse navbar-collapse",
                id: "navbarSupportedContent"
              },
              external_react_default.a.createElement(
                "ul",
                {
                  className: "navbar-nav mr-auto"
                },
                external_react_default.a.createElement(
                  "li",
                  {
                    className: "nav-item dropdown"
                  },
                  external_react_default.a.createElement(
                    "a",
                    {
                      href: "/company",
                      className: "nav-link dropdown-toggle",
                      id: "navbarDropdown",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    },
                    "Company"
                  ),
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "dropdown-menu",
                      "aria-labelledby": "navbarDropdown"
                    },
                    external_react_default.a.createElement(
                      router_["Link"],
                      {
                        to: "/company#about",
                        className: "dropdown-item"
                      },
                      "About Us"
                    ),
                    external_react_default.a.createElement(
                      router_["Link"],
                      {
                        to: "/company#services",
                        className: "dropdown-item"
                      },
                      "Services"
                    )
                  )
                ),
                external_react_default.a.createElement(
                  "li",
                  {
                    className: "nav-item dropdown"
                  },
                  external_react_default.a.createElement(
                    router_["Link"],
                    {
                      to: "/solutions",
                      className: "nav-link dropdown-toggle",
                      id: "navbarDropdown",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    },
                    "Solutions"
                  ),
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "dropdown-menu",
                      "aria-labelledby": "navbarDropdown"
                    },
                    external_react_default.a.createElement(
                      router_["Link"],
                      {
                        to: "/solutions#shippers",
                        className: "dropdown-item"
                      },
                      "For Shippers"
                    ),
                    external_react_default.a.createElement(
                      router_["Link"],
                      {
                        to: "/solutions#carriers",
                        className: "dropdown-item"
                      },
                      "For Carriers"
                    )
                  )
                ),
                external_react_default.a.createElement(
                  "li",
                  {
                    className: "nav-item dropdown"
                  },
                  external_react_default.a.createElement(
                    router_["Link"],
                    {
                      to: "/help",
                      className: "nav-link dropdown-toggle",
                      href: "#",
                      id: "navbarDropdown",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    },
                    "Help"
                  ),
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "dropdown-menu",
                      "aria-labelledby": "navbarDropdown"
                    },
                    external_react_default.a.createElement(
                      router_["Link"],
                      {
                        to: "/help#faqs",
                        className: "dropdown-item"
                      },
                      "FAQs"
                    ),
                    external_react_default.a.createElement(
                      router_["Link"],
                      {
                        to: "/help#help",
                        className: "dropdown-item"
                      },
                      "Get Help"
                    )
                  )
                ),
                external_react_default.a.createElement(
                  "li",
                  {
                    className: "nav-item"
                  },
                  external_react_default.a.createElement(
                    router_["Link"],
                    {
                      to: "/contact",
                      className: "nav-link"
                    },
                    "Contact"
                  )
                ),
                external_react_default.a.createElement(
                  "li",
                  {
                    className: "nav-item"
                  },
                  external_react_default.a.createElement(
                    router_["Link"],
                    {
                      to: "/careers",
                      className: "nav-link"
                    },
                    "Careers"
                  )
                )
              ),
              external_react_default.a.createElement(
                "ul",
                {
                  className: "navbar-nav"
                },
                external_react_default.a.createElement(
                  "li",
                  {
                    className: "nav-item"
                  },
                  external_react_default.a.createElement(
                    router_["Link"],
                    {
                      to: "/login",
                      className: "nav-link disabled"
                    },
                    "Login"
                  )
                )
              )
            )
          );
        };
        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Footer.js

        /* harmony default export */ var Footer = function() {
          return external_react_default.a.createElement(
            "footer",
            {
              className:
                "fixed-bottom text-center bg-dark align-middle text-light"
            },
            external_react_default.a.createElement(
              "p",
              null,
              "Placeholder footer text"
            )
          );
        };
        // EXTERNAL MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/app.css
        var app = __webpack_require__(51);

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/App.js

        //

        var onDashPage = location.pathname.indexOf("dashboard") !== -1;
        console.log;

        function App() {
          return external_react_default.a.createElement(
            external_react_static_["Root"],
            null,
            !onDashPage && external_react_default.a.createElement(NavBar, null),
            external_react_default.a.createElement(
              "div",
              {
                className: "content"
              },
              external_react_default.a.createElement(
                external_react_default.a.Suspense,
                {
                  fallback: null
                },
                external_react_default.a.createElement(
                  router_["Router"],
                  null,
                  external_react_default.a.createElement(
                    external_react_static_["Routes"],
                    {
                      path: "*"
                    }
                  )
                )
              )
            ),
            !onDashPage && external_react_default.a.createElement(Footer, null)
          );
        }

        /* harmony default export */ var src_App = (__webpack_exports__[
          "a"
        ] = App);

        /***/
      },
      /* 8 */
      /***/ function(module, exports) {
        module.exports = function(module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function() {};

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

        /***/
      },
      /* 9 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/typeof");

        /***/
      },
      /* 10 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _typeof2 = __webpack_require__(9);

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

        var _extends =
          Object.assign ||
          function(target) {
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

        var _typeof =
          typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol"
            ? function(obj) {
                return _typeof2(obj);
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : _typeof2(obj);
              };

        var _react = __webpack_require__(0);

        var React = _interopRequireWildcard(_react);

        var _requireById = __webpack_require__(5);

        var _requireById2 = _interopRequireDefault(_requireById);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        }

        var isTest = (exports.isTest = "production" === "test");
        var isServer = (exports.isServer = !(
          typeof window !== "undefined" &&
          window.document &&
          window.document.createElement
        ));

        var isWebpack = (exports.isWebpack = function isWebpack() {
          return typeof __webpack_require__ !== "undefined";
        });

        var babelInterop = (exports.babelInterop = function babelInterop(mod) {
          return mod &&
            (typeof mod === "undefined" ? "undefined" : _typeof(mod)) ===
              "object" &&
            mod.__esModule
            ? mod["default"]
            : mod;
        });

        var DefaultLoading = (exports.DefaultLoading = function DefaultLoading() {
          return React.createElement("div", null, "Loading...");
        });

        var DefaultError = (exports.DefaultError = function DefaultError(_ref) {
          var error = _ref.error;
          return React.createElement(
            "div",
            null,
            "Error: ",
            error && error.message
          );
        });

        var tryRequire = (exports.tryRequire = function tryRequire(id) {
          try {
            return (0, _requireById2["default"])(id);
          } catch (err) {
            // warn if there was an error while requiring the chunk during development
            // this can sometimes lead the server to render the loading component.
            if (false) {
            }
          }

          return null;
        });

        var resolveExport = (exports.resolveExport = function resolveExport(
          mod,
          key,
          onLoad,
          chunkName,
          props,
          context,
          modCache
        ) {
          var isSync =
            arguments.length > 7 && arguments[7] !== undefined
              ? arguments[7]
              : false;
          var exp = findExport(mod, key);

          if (onLoad && mod) {
            var _isServer = typeof window === "undefined";

            var info = {
              isServer: _isServer,
              isSync: isSync
            };
            onLoad(mod, info, props, context);
          }

          if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
          return exp;
        });

        var findExport = (exports.findExport = function findExport(mod, key) {
          if (typeof key === "function") {
            return key(mod);
          } else if (key === null) {
            return mod;
          }

          return mod &&
            (typeof mod === "undefined" ? "undefined" : _typeof(mod)) ===
              "object" &&
            key
            ? mod[key]
            : babelInterop(mod);
        });

        var createElement = (exports.createElement = function createElement(
          Component,
          props
        ) {
          return React.isValidElement(Component)
            ? React.cloneElement(Component, props)
            : React.createElement(Component, props);
        });

        var createDefaultRender = (exports.createDefaultRender = function createDefaultRender(
          Loading,
          Err
        ) {
          return function(props, mod, isLoading, error) {
            if (isLoading) {
              return createElement(Loading, props);
            } else if (error) {
              return createElement(
                Err,
                _extends({}, props, {
                  error: error
                })
              );
            } else if (mod) {
              // primary usage (for async import loading + errors):
              return createElement(mod, props);
            }

            return createElement(Loading, props);
          };
        });

        var callForString = (exports.callForString = function callForString(
          strFun,
          props
        ) {
          return typeof strFun === "function" ? strFun(props) : strFun;
        });

        var loadFromCache = (exports.loadFromCache = function loadFromCache(
          chunkName,
          props,
          modCache
        ) {
          return !isServer && modCache[callForString(chunkName, props)];
        });

        var cacheExport = (exports.cacheExport = function cacheExport(
          exp,
          chunkName,
          props,
          modCache
        ) {
          return (modCache[callForString(chunkName, props)] = exp);
        });

        var loadFromPromiseCache = (exports.loadFromPromiseCache = function loadFromPromiseCache(
          chunkName,
          props,
          promisecache
        ) {
          return promisecache[callForString(chunkName, props)];
        });

        var cacheProm = (exports.cacheProm = function cacheProm(
          pr,
          chunkName,
          props,
          promisecache
        ) {
          return (promisecache[callForString(chunkName, props)] = pr);
        });

        /***/
      },
      /* 11 */
      /***/ function(module, exports) {
        module.exports = require("prop-types");

        /***/
      },
      /* 12 */
      /***/ function(module, exports) {
        module.exports = require("react-dom");

        /***/
      },
      /* 13 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          27
        );
        /* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports
        // Plugins

        var plugins = [
          {
            location:
              "/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static-plugin-source-filesystem",
            plugins: [],
            hooks: {}
          },
          {
            location:
              "/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static-plugin-reach-router",
            plugins: [],
            hooks: _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
              {}
            )
          },
          {
            location:
              "/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static-plugin-sitemap/dist",
            plugins: [],
            hooks: {}
          },
          {
            location: "/mnt/d/workspace/work/otm-dispatch/static-site",
            plugins: [],
            hooks: {}
          }
        ]; // Export em!

        /* harmony default export */ __webpack_exports__["default"] = plugins;

        /***/
      },
      /* 14 */
      /***/ function(module, exports) {
        module.exports = require("/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static/lib/browser");

        /***/
      },
      /* 15 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(__dirname) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "notFoundTemplate",
            function() {
              return notFoundTemplate;
            }
          );
          /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            1
          );
          /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            path__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            2
          );
          /* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            0
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            4
          );
          /* harmony import */ var _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__
          );

          Object(
            _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__[
              "setHasBabelPlugin"
            ]
          )();
          var universalOptions = {
            loading: function loading() {
              return null;
            },
            error: function error(props) {
              console.error(props.error);
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                "div",
                null,
                "An error occurred loading this page's template. More information is available in the console."
              );
            },
            ignoreBabelRename: true
          };
          var t_0 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404 */).then(
                      __webpack_require__.bind(null, 18)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 18;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404";
                }
              }
            ),
            universalOptions
          );
          t_0.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js";
          var t_1 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers */).then(
                      __webpack_require__.bind(null, 19)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 19;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers";
                }
              }
            ),
            universalOptions
          );
          t_1.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js";
          var t_2 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company */).then(
                      __webpack_require__.bind(null, 26)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 26;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company";
                }
              }
            ),
            universalOptions
          );
          t_2.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js";
          var t_3 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact */).then(
                      __webpack_require__.bind(null, 20)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 20;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact";
                }
              }
            ),
            universalOptions
          );
          t_3.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js";
          var t_4 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard */).then(
                      __webpack_require__.bind(null, 21)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 21;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard";
                }
              }
            ),
            universalOptions
          );
          t_4.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js";
          var t_5 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help */).then(
                      __webpack_require__.bind(null, 24)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 24;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help";
                }
              }
            ),
            universalOptions
          );
          t_5.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js";
          var t_6 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index */).then(
                      __webpack_require__.bind(null, 22)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 22;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index";
                }
              }
            ),
            universalOptions
          );
          t_6.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js";
          var t_7 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login */).then(
                      __webpack_require__.bind(null, 23)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 23;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login";
                }
              }
            ),
            universalOptions
          );
          t_7.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js";
          var t_8 = _mnt_d_workspace_work_otm_dispatch_static_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(
            babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                id:
                  "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js",
                load: function load() {
                  return Promise.all([
                    Promise.resolve(/* import() | mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions */).then(
                      __webpack_require__.bind(null, 25)
                    )
                  ]).then(function(proms) {
                    return proms[0];
                  });
                },
                path: function path() {
                  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                    __dirname,
                    "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js"
                  );
                },
                resolve: function resolve() {
                  return /*require.resolve*/ 25;
                },
                chunkName: function chunkName() {
                  return "mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions";
                }
              }
            ),
            universalOptions
          );
          t_8.template =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js"; // Template Map

          /* harmony default export */ __webpack_exports__["default"] = {
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js": t_0,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js": t_1,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js": t_2,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js": t_3,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js": t_4,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js": t_5,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js": t_6,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js": t_7,
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js": t_8
          }; // Not Found Template

          var notFoundTemplate =
            "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js";
          /* WEBPACK VAR INJECTION */
        }.call(this, "/"));

        /***/
      },
      /* 16 */
      /***/ function(module, exports) {
        module.exports = require("hoist-non-react-statics");

        /***/
      },
      /* 17 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader

        module.exports = function(useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return "@media " + item[2] + "{" + content + "}";
              } else {
                return content;
              }
            }).join("");
          }; // import a list of modules into the list

          list.i = function(modules, mediaQuery) {
            if (typeof modules === "string") {
              modules = [[null, modules, ""]];
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
                  item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }

                list.push(item);
              }
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || "";
          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === "function") {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        } // Adapted from convert-source-map (MIT)

        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(sourceMap)))
          );
          var data =
            "sourceMappingURL=data:application/json;charset=utf-8;base64," +
            base64;
          return "/*# " + data + " */";
        }

        /***/
      },
      /* 18 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          0
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h1",
              null,
              "404 - Oh no's! We couldn't find that page :("
            )
          );
        };

        /***/
      },
      /* 19 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          0
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "jumbotron jumbotron-fluid"
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "container"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "mx-auto text-center"
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    null,
                    "Looking for new opportunities?"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Fusce ut placerat orci nulla pellentesque dignissim. Morbi blandit cursus risus at ultrices. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Odio eu feugiat pretium nibh. Elit at imperdiet dui accumsan sit amet nulla. Aliquet nec ullamcorper sit amet risus nullam eget. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Iaculis urna id volutpat lacus."
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "container"
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                {
                  id: "contact-form",
                  method: "post",
                  action: "contact.php",
                  role: "form"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "messages"
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "controls"
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "row"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_name"
                          },
                          "First name *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            id: "form_name",
                            type: "text",
                            name: "name",
                            className: "form-control",
                            placeholder: "Please enter your first name *",
                            required: "required",
                            "data-error": "First name is required."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_lastname"
                          },
                          "Last name *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            id: "form_lastname",
                            type: "text",
                            name: "surname",
                            className: "form-control",
                            placeholder: "Please enter your last name *",
                            required: "required",
                            "data-error": "Last name is required."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "row"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_email"
                          },
                          "Email *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            id: "form_email",
                            type: "email",
                            name: "email",
                            className: "form-control",
                            placeholder: "Please enter your email *",
                            required: "required",
                            "data-error": "Valid email is required."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "row"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-12"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_message"
                          },
                          "Message *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "textarea",
                          {
                            id: "form_message",
                            name: "message",
                            className: "form-control",
                            placeholder: "Message for us *",
                            rows: "4",
                            required: "required",
                            "data-error": "Please, leave us a message."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-12"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "submit",
                          className: "btn btn-primary btn-send",
                          value: "Send message"
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        };

        /***/
      },
      /* 20 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          0
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "jumbotron jumbotron-fluid"
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "container"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "mx-auto text-center"
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h1",
                    null,
                    "Have some questions?"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Call us at 1-800-555-5555, or send us a message below!"
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                className: "container"
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                {
                  id: "contact-form",
                  method: "post",
                  action: "contact.php",
                  role: "form"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "messages"
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  {
                    className: "controls"
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "row"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_name"
                          },
                          "First name *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            id: "form_name",
                            type: "text",
                            name: "name",
                            className: "form-control",
                            placeholder: "Please enter your first name *",
                            required: "required",
                            "data-error": "First name is required."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_lastname"
                          },
                          "Last name *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            id: "form_lastname",
                            type: "text",
                            name: "surname",
                            className: "form-control",
                            placeholder: "Please enter your last name *",
                            required: "required",
                            "data-error": "Last name is required."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "row"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_email"
                          },
                          "Email *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "input",
                          {
                            id: "form_email",
                            type: "email",
                            name: "email",
                            className: "form-control",
                            placeholder: "Please enter your email *",
                            required: "required",
                            "data-error": "Valid email is required."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-6"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_need"
                          },
                          "Please specify your need *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "select",
                          {
                            id: "form_need",
                            name: "need",
                            className: "form-control",
                            required: "required",
                            "data-error": "Please specify your need."
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            {
                              value: ""
                            }
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            {
                              value: "General inquiry"
                            },
                            "General inquiry"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            {
                              value: "Request quote"
                            },
                            "Request quote"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            {
                              value: "Request copy of invoice"
                            },
                            "Request copy of an invoice"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            {
                              value: "Give feedback"
                            },
                            "Give feedback"
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            {
                              value: "Other"
                            },
                            "Other"
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "row"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-12"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                          className: "form-group"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "label",
                          {
                            htmlFor: "form_message"
                          },
                          "Message *"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "textarea",
                          {
                            id: "form_message",
                            name: "message",
                            className: "form-control",
                            placeholder: "Message for us *",
                            rows: "4",
                            required: "required",
                            "data-error": "Please, leave us a message."
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: "help-block with-errors"
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: "col-md-12"
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "input",
                        {
                          type: "submit",
                          className: "btn btn-primary btn-send",
                          value: "Send message"
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        };

        /***/
      },
      /* 21 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          0
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "p",
              null,
              "Dashboard Page"
            )
          );
        };

        /***/
      },
      /* 22 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          0
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              style: {
                textAlign: "center"
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h1",
              {
                className: "test"
              },
              "Get Started"
            )
          );
        };

        /***/
      },
      /* 23 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          0
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "p",
              null,
              "Login page"
            )
          );
        };

        /***/
      },
      /* 24 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(0);
        var external_react_default = /*#__PURE__*/ __webpack_require__.n(
          external_react_
        );

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Question.js

        /* harmony default export */ var Question = function(props) {
          return external_react_default.a.createElement(
            "div",
            {
              className: "panel panel-default"
            },
            external_react_default.a.createElement(
              "div",
              {
                className: "panel-heading p-3 mb-3",
                role: "tab",
                id: "heading" + props.id
              },
              external_react_default.a.createElement(
                "h5",
                {
                  className: "panel-title"
                },
                external_react_default.a.createElement(
                  "a",
                  {
                    className: "collapsed",
                    role: "button",
                    title: "",
                    "data-toggle": "collapse",
                    "data-parent": "#accordion",
                    href: "#collapse" + props.id,
                    "aria-expanded": "true",
                    "aria-controls": "collapse" + props.id
                  },
                  "What would a sample answer look like?"
                )
              )
            ),
            external_react_default.a.createElement(
              "div",
              {
                id: "collapse" + props.id,
                className: "panel-collapse collapse",
                role: "tabpanel",
                "aria-labelledby": "heading" + props.id
              },
              external_react_default.a.createElement(
                "div",
                {
                  className: "panel-body px-3 mb-4"
                },
                external_react_default.a.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et molestie. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis:"
                ),
                external_react_default.a.createElement(
                  "ul",
                  null,
                  external_react_default.a.createElement(
                    "li",
                    null,
                    "Ullamcorper malesuada proin libero nunc consequat interdum varius."
                  ),
                  external_react_default.a.createElement(
                    "li",
                    null,
                    "Fames ac turpis egestas maecenas. Pellentesque habitant morbi tristique senectus et netus et malesuada."
                  ),
                  external_react_default.a.createElement(
                    "li",
                    null,
                    "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et."
                  )
                )
              )
            )
          );
        };
        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/QuestionList.js

        /* harmony default export */ var QuestionList = function() {
          return external_react_default.a.createElement(
            "section",
            {
              className: "accordion-section clearfix mt-3",
              "aria-label": "Question Accordions"
            },
            external_react_default.a.createElement(
              "div",
              {
                className: "container text-muted"
              },
              external_react_default.a.createElement(
                "div",
                {
                  className: "panel-group",
                  id: "accordion",
                  role: "tablist",
                  "aria-multiselectable": "false"
                },
                external_react_default.a.createElement(
                  "ul",
                  {
                    className: "pt-4"
                  },
                  external_react_default.a.createElement(
                    "li",
                    null,
                    external_react_default.a.createElement(Question, {
                      id: "0"
                    })
                  ),
                  external_react_default.a.createElement(
                    "li",
                    null,
                    external_react_default.a.createElement(Question, {
                      id: "1"
                    })
                  ),
                  external_react_default.a.createElement(
                    "li",
                    null,
                    external_react_default.a.createElement(Question, {
                      id: "2"
                    })
                  ),
                  external_react_default.a.createElement(
                    "li",
                    null,
                    external_react_default.a.createElement(Question, {
                      id: "3"
                    })
                  )
                )
              )
            )
          );
        };
        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js

        /* harmony default export */ var help = (__webpack_exports__[
          "default"
        ] = function() {
          return external_react_default.a.createElement(
            "div",
            null,
            external_react_default.a.createElement(
              "div",
              {
                className: "container my-5",
                id: "faqs"
              },
              external_react_default.a.createElement(
                "h2",
                {
                  className: "text-center"
                },
                "Frequently Asked Questions:"
              ),
              external_react_default.a.createElement(QuestionList, null)
            ),
            external_react_default.a.createElement("br", null),
            external_react_default.a.createElement("hr", null),
            external_react_default.a.createElement(
              "div",
              {
                className: "container mt-5 text-center",
                id: "help"
              },
              external_react_default.a.createElement(
                "h2",
                {
                  className: "mb-5"
                },
                "Have more questions?"
              ),
              external_react_default.a.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary btn-lg"
                },
                "Get Help"
              )
            )
          );
        });

        /***/
      },
      /* 25 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(0);
        var external_react_default = /*#__PURE__*/ __webpack_require__.n(
          external_react_
        );

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Solution.js

        /* harmony default export */ var Solution = function() {
          return external_react_default.a.createElement(
            "div",
            {
              className: "col-sm"
            },
            external_react_default.a.createElement(
              "h4",
              null,
              "Solution Header"
            ),
            external_react_default.a.createElement(
              "p",
              null,
              "Odio eu feugiat pretium nibh. Elit at imperdiet dui accumsan sit amet nulla."
            )
          );
        };
        // EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
        var classCallCheck_ = __webpack_require__(29);
        var classCallCheck_default = /*#__PURE__*/ __webpack_require__.n(
          classCallCheck_
        );

        // EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
        var createClass_ = __webpack_require__(30);
        var createClass_default = /*#__PURE__*/ __webpack_require__.n(
          createClass_
        );

        // EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
        var possibleConstructorReturn_ = __webpack_require__(31);
        var possibleConstructorReturn_default = /*#__PURE__*/ __webpack_require__.n(
          possibleConstructorReturn_
        );

        // EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
        var getPrototypeOf_ = __webpack_require__(32);
        var getPrototypeOf_default = /*#__PURE__*/ __webpack_require__.n(
          getPrototypeOf_
        );

        // EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
        var inherits_ = __webpack_require__(33);
        var inherits_default = /*#__PURE__*/ __webpack_require__.n(inherits_);

        // EXTERNAL MODULE: external "prop-types"
        var external_prop_types_ = __webpack_require__(11);

        // EXTERNAL MODULE: external "scroll-into-view-if-needed"
        var external_scroll_into_view_if_needed_ = __webpack_require__(34);
        var external_scroll_into_view_if_needed_default = /*#__PURE__*/ __webpack_require__.n(
          external_scroll_into_view_if_needed_
        );

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/ScrollToHash.js

        /*
SCROLL INTO VIEW

Purpose:
  This modular component enables hash links
  eg. (www.xyz.com/somepage#someID)
  and plays nice with react router 4

Usage:
  Wrap this component around a single div with an ID

Example:
  <ScrollIntoView  id={this.props.location.hash}>
    <div id="someID">
      ... loads of content...
    </div>
  </ScrollIntoView>

  <a href="/somepage#someID"> IN-PAGE ANCHOR </a>

 */

        var ScrollToHash_ScrollIntoView =
          /*#__PURE__*/
          (function(_React$Component) {
            inherits_default()(ScrollIntoView, _React$Component);

            function ScrollIntoView() {
              classCallCheck_default()(this, ScrollIntoView);

              return possibleConstructorReturn_default()(
                this,
                getPrototypeOf_default()(ScrollIntoView).apply(this, arguments)
              );
            }

            createClass_default()(ScrollIntoView, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.scroll();
                }
              },
              {
                key: "componentDidUpdate",
                value: function componentDidUpdate() {
                  this.scroll();
                }
              },
              {
                key: "scroll",
                value: function scroll() {
                  var id = this.props.id; //console.log('ID is: '+id);

                  if (!id) {
                    return;
                  }

                  var element = document.querySelector(id);

                  if (element) {
                    // this just jumps to the element
                    // see support:
                    //element.scrollIntoView({block: "end", behavior: "smooth"});
                    //If Firefox...
                    if (navigator.userAgent.indexOf("Firefox") > 0) {
                      //...use native smooth scrolling.
                      element.scrollIntoView({
                        block: "end",
                        behavior: "smooth"
                      }); // If its any other browser, use custom polyfill...
                    } else {
                      //... luckily I have this handy polyfill...
                      external_scroll_into_view_if_needed_default()(
                        element,
                        false,
                        {
                          duration: 150
                        }
                      ); //  (⌐■_■
                    }
                  }
                }
              },
              {
                key: "render",
                value: function render() {
                  return this.props.children;
                }
              }
            ]);

            return ScrollIntoView;
          })(external_react_default.a.Component);

        /* harmony default export */ var ScrollToHash = ScrollToHash_ScrollIntoView;
        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js

        /* harmony default export */ var solutions = (__webpack_exports__[
          "default"
        ] = function() {
          return external_react_default.a.createElement(
            "div",
            null,
            external_react_default.a.createElement(
              ScrollToHash,
              {
                id: "shippers"
              },
              external_react_default.a.createElement(
                "div",
                {
                  id: "shippers"
                },
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "jumbotron jumbotron-fluid pb-4"
                  },
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "container"
                    },
                    external_react_default.a.createElement(
                      "div",
                      {
                        className: "mx-auto my-auto text-center"
                      },
                      external_react_default.a.createElement(
                        "h1",
                        null,
                        "For Shippers"
                      ),
                      external_react_default.a.createElement(
                        "p",
                        {
                          className: "mx-auto w-50"
                        },
                        "To learn more, please contact us via the contact page, or call us at 1-800-555-5555."
                      )
                    )
                  )
                ),
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "container"
                  },
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "row mt-5 mb-5"
                    },
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null)
                  ),
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "row mt-5 mb-5"
                    },
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null)
                  )
                )
              )
            ),
            external_react_default.a.createElement(
              ScrollToHash,
              {
                id: "carriers"
              },
              external_react_default.a.createElement(
                "div",
                {
                  id: "carriers"
                },
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "jumbotron jumbotron-fluid pb-4"
                  },
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "container"
                    },
                    external_react_default.a.createElement(
                      "div",
                      {
                        className: "mx-auto my-auto text-center"
                      },
                      external_react_default.a.createElement(
                        "h1",
                        null,
                        "For Carriers"
                      ),
                      external_react_default.a.createElement(
                        "p",
                        {
                          className: "mx-auto w-50"
                        },
                        "To learn more, please contact us via the contact page, or call us at 1-800-555-5555."
                      )
                    )
                  )
                ),
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "container"
                  },
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "row mt-5 mb-5"
                    },
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null)
                  ),
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "row mt-5 mb-5"
                    },
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null),
                    external_react_default.a.createElement(Solution, null)
                  )
                )
              )
            )
          );
        });

        /***/
      },
      /* 26 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(0);
        var external_react_default = /*#__PURE__*/ __webpack_require__.n(
          external_react_
        );

        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/components/Service.js

        /* harmony default export */ var Service = function() {
          return external_react_default.a.createElement(
            "div",
            {
              className: "col-md"
            },
            external_react_default.a.createElement(
              "h3",
              null,
              "Service Header"
            ),
            external_react_default.a.createElement(
              "p",
              null,
              "Sed turpis tincidunt id aliquet risus. Montes nascetur ridiculus mus mauris vitae ultricies leo. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Lectus vestibulum mattis ullamcorper velit. Proin libero nunc consequat interdum varius sit amet. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget."
            )
          );
        };
        // CONCATENATED MODULE: /mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js

        /* harmony default export */ var company = (__webpack_exports__[
          "default"
        ] = function() {
          return external_react_default.a.createElement(
            "div",
            null,
            external_react_default.a.createElement(
              "div",
              {
                id: "about"
              },
              external_react_default.a.createElement(
                "div",
                {
                  className: "jumbotron jumbotron-fluid pb-4"
                },
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "container"
                  },
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "mx-auto my-auto text-center"
                    },
                    external_react_default.a.createElement(
                      "h1",
                      null,
                      "About us"
                    ),
                    external_react_default.a.createElement(
                      "p",
                      {
                        className: "mx-auto w-50"
                      },
                      "Placeholder motto or phrase here."
                    )
                  )
                )
              ),
              external_react_default.a.createElement(
                "div",
                {
                  className: "container mt-5 mb-5"
                },
                external_react_default.a.createElement(
                  "h3",
                  null,
                  "Our Beginnings"
                ),
                external_react_default.a.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ),
                external_react_default.a.createElement("h3", null, "Our Team"),
                external_react_default.a.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ),
                external_react_default.a.createElement(
                  "h3",
                  null,
                  "Our Priorities"
                ),
                external_react_default.a.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              )
            ),
            external_react_default.a.createElement(
              "div",
              {
                id: "services"
              },
              external_react_default.a.createElement(
                "div",
                {
                  className: "jumbotron jumbotron-fluid pb-4"
                },
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "container"
                  },
                  external_react_default.a.createElement(
                    "div",
                    {
                      className: "mx-auto my-auto text-center"
                    },
                    external_react_default.a.createElement(
                      "h1",
                      null,
                      "Services"
                    ),
                    external_react_default.a.createElement(
                      "p",
                      {
                        className: "mx-auto w-50"
                      },
                      "Based out of Orlando, FL."
                    )
                  )
                )
              ),
              external_react_default.a.createElement(
                "div",
                {
                  className: "container"
                },
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "row mt-5 mb-5"
                  },
                  external_react_default.a.createElement(Service, null),
                  external_react_default.a.createElement(Service, null)
                ),
                external_react_default.a.createElement(
                  "div",
                  {
                    className: "row mt-5 mb-5"
                  },
                  external_react_default.a.createElement(Service, null),
                  external_react_default.a.createElement(Service, null)
                )
              )
            )
          );
        });

        /***/
      },
      /* 27 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _react = _interopRequireDefault(__webpack_require__(0));

        var _reactStatic = __webpack_require__(6);

        var _router = __webpack_require__(3);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
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
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
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
            userRouterProps =
              _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
          return {
            Root: function Root(PreviousRoot) {
              return function(_ref2) {
                var children = _ref2.children,
                  rest = _objectWithoutProperties(_ref2, ["children"]);

                var basepath = (0, _reactStatic.useBasepath)();
                var staticInfo = (0, _reactStatic.useStaticInfo)();

                var RouteHandler = function RouteHandler(props) {
                  return _react["default"].createElement(
                    PreviousRoot,
                    _extends({}, rest, props),
                    children
                  );
                };

                var renderedChildren = // Place a top-level router inside the root
                  // This will give proper context to Link and other reach components
                  _react["default"].createElement(
                    _router.Router,
                    _extends(
                      {},
                      basepath
                        ? {
                            basepath: basepath
                          }
                        : {},
                      userRouterProps
                    ),
                    _react["default"].createElement(RouteHandler, {
                      path: "/*"
                    })
                  ); // If we're in SSR, use a manual server location

                return typeof document === "undefined"
                  ? _react["default"].createElement(
                      _router.ServerLocation,
                      {
                        url: (0, _reactStatic.makePathAbsolute)(
                          "".concat(basepath, "/").concat(staticInfo.path)
                        )
                      },
                      renderedChildren
                    )
                  : renderedChildren;
              };
            },
            Routes: function Routes(PreviousRoutes) {
              return function(props) {
                return (
                  // Wrap Routes in location
                  _react["default"].createElement(
                    _router.Location,
                    null,
                    function(location) {
                      return _react["default"].createElement(
                        PreviousRoutes,
                        _extends(
                          {
                            path: "/*"
                          },
                          props,
                          {
                            location: location
                          }
                        )
                      );
                    }
                  )
                );
              };
            }
          };
        };

        exports["default"] = _default;

        /***/
      },
      /* 28 */
      /***/ function(module, exports) {
        module.exports = require("react-hot-loader");

        /***/
      },
      /* 29 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/classCallCheck");

        /***/
      },
      /* 30 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/createClass");

        /***/
      },
      /* 31 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

        /***/
      },
      /* 32 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/getPrototypeOf");

        /***/
      },
      /* 33 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/inherits");

        /***/
      },
      /* 34 */
      /***/ function(module, exports) {
        module.exports = require("scroll-into-view-if-needed");

        /***/
      },
      /* 35 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(36);
        __webpack_require__(37);
        module.exports = __webpack_require__(43);

        /***/
      },
      /* 36 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function(module) {
          /* eslint-disable import/no-dynamic-require */

          var plugins = __webpack_require__(13)["default"];

          var _require = __webpack_require__(14),
            registerPlugins = _require.registerPlugins;

          registerPlugins(plugins);

          if (typeof document !== "undefined" && module && module.hot) {
            module.hot.accept(
              "/mnt/d/workspace/work/otm-dispatch/static-site/artifacts/react-static-browser-plugins.js",
              function() {
                registerPlugins(__webpack_require__(13)["default"]);
              }
            );
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(8)(module)));

        /***/
      },
      /* 37 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function(module) {
          /* eslint-disable import/no-dynamic-require */

          var _require = __webpack_require__(14),
            registerTemplates = _require.registerTemplates;

          var _require2 = __webpack_require__(15),
            templates = _require2["default"],
            notFoundTemplate = _require2.notFoundTemplate;

          registerTemplates(templates, notFoundTemplate);

          if (typeof document !== "undefined" && module && module.hot) {
            module.hot.accept(
              "/mnt/d/workspace/work/otm-dispatch/static-site/artifacts/react-static-templates.js",
              function() {
                var _require3 = __webpack_require__(15),
                  templates = _require3["default"],
                  notFoundTemplate = _require3.notFoundTemplate;

                registerTemplates(templates, notFoundTemplate);
              }
            );
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(8)(module)));

        /***/
      },
      /* 38 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

        var _extends =
          Object.assign ||
          function(target) {
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

        var _utils = __webpack_require__(10);

        var CHUNK_NAMES = (exports.CHUNK_NAMES = new Set());
        var MODULE_IDS = (exports.MODULE_IDS = new Set());

        function requireUniversalModule(
          universalConfig,
          options,
          props,
          prevProps
        ) {
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
          var asyncOnly =
            (!path && !resolve) || typeof chunkName === "function";

          var requireSync = function requireSync(props, context) {
            var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

            if (!exp) {
              var mod = void 0;

              if (!(0, _utils.isWebpack)() && path) {
                var modulePath = (0, _utils.callForString)(path, props) || "";
                mod = (0, _utils.tryRequire)(modulePath);
              } else if ((0, _utils.isWebpack)() && resolve) {
                var weakId = (0, _utils.callForString)(resolve, props);

                if (__webpack_require__.m[weakId]) {
                  mod = (0, _utils.tryRequire)(weakId);
                }
              }

              if (mod) {
                exp = (0, _utils.resolveExport)(
                  mod,
                  key,
                  onLoad,
                  chunkName,
                  props,
                  context,
                  modCache,
                  true
                );
              }
            }

            return exp;
          };

          var requireAsync = function requireAsync(props, context) {
            var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
            if (exp) return Promise.resolve(exp);
            var cachedPromise = (0, _utils.loadFromPromiseCache)(
              chunkName,
              props,
              promCache
            );
            if (cachedPromise) return cachedPromise;
            var prom = new Promise(function(res, rej) {
              var reject = function reject(error) {
                error = error || new Error("timeout exceeded");
                clearTimeout(timer);

                if (onError) {
                  var _isServer = typeof window === "undefined";

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
                var exp = (0, _utils.resolveExport)(
                  mod,
                  key,
                  onLoad,
                  chunkName,
                  props,
                  context,
                  modCache
                );
                if (exp) return res(exp);
                reject(new Error("export not found"));
              };

              var request = load(props, {
                resolve: resolve,
                reject: reject
              }); // if load doesn't return a promise, it must call resolveImport
              // itself. Most common is the promise implementation below.

              if (!request || typeof request.then !== "function") return;
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
                    name = name.replace(/\//g, "-");
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
            var prevCacheKey = (0, _utils.callForString)(
              config.chunkName,
              prev
            );
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

        var flushChunkNames = (exports.flushChunkNames = function flushChunkNames() {
          var chunks = Array.from(CHUNK_NAMES);
          CHUNK_NAMES.clear();
          return chunks;
        });

        var flushModuleIds = (exports.flushModuleIds = function flushModuleIds() {
          var ids = Array.from(MODULE_IDS);
          MODULE_IDS.clear();
          return ids;
        });

        var clearChunks = (exports.clearChunks = function clearChunks() {
          CHUNK_NAMES.clear();
          MODULE_IDS.clear();
        });

        var getConfig = function getConfig(
          isDynamic,
          universalConfig,
          options,
          props
        ) {
          if (isDynamic) {
            var resultingConfig =
              typeof universalConfig === "function"
                ? universalConfig(props)
                : universalConfig;

            if (options) {
              resultingConfig = _extends({}, resultingConfig, options);
            }

            return resultingConfig;
          }

          var load =
            typeof universalConfig === "function"
              ? universalConfig // $FlowIssue
              : function() {
                  return universalConfig;
                };
          return {
            file: "default",
            id: options.id || "default",
            chunkName: options.chunkName || "default",
            resolve: options.resolve || "",
            path: options.path || "",
            load: load,
            ignoreBabelRename: true
          };
        };

        /***/
      },
      /* 39 */
      /***/ function(module, exports, __webpack_require__) {
        var map = {
          ".": 5,
          "./": 5,
          "./index": 5,
          "./index.js": 5
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 39;

        /***/
      },
      /* 40 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _typeof = __webpack_require__(9);

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(11);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }

          return call &&
            (_typeof(call) === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                _typeof(superClass)
            );
          }

          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var ReportChunks = (function(_React$Component) {
          _inherits(ReportChunks, _React$Component);

          function ReportChunks() {
            _classCallCheck(this, ReportChunks);

            return _possibleConstructorReturn(
              this,
              (
                ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)
              ).apply(this, arguments)
            );
          }

          _createClass(ReportChunks, [
            {
              key: "getChildContext",
              value: function getChildContext() {
                return {
                  report: this.props.report
                };
              }
            },
            {
              key: "render",
              value: function render() {
                return _react2["default"].Children.only(this.props.children);
              }
            }
          ]);

          return ReportChunks;
        })(_react2["default"].Component);

        ReportChunks.propTypes = {
          report: _propTypes2["default"].func.isRequired
        };
        ReportChunks.childContextTypes = {
          report: _propTypes2["default"].func.isRequired
        };
        exports["default"] = ReportChunks;

        /***/
      },
      /* 41 */
      /***/ function(module, exports) {
        module.exports = require("vm");

        /***/
      },
      /* 42 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.__handleAfter = exports.__update = undefined;

        var _hoistNonReactStatics = __webpack_require__(16);

        var _hoistNonReactStatics2 = _interopRequireDefault(
          _hoistNonReactStatics
        );

        var _index = __webpack_require__(4);

        var _index2 = _interopRequireDefault(_index);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        var __update = (exports.__update = function __update(
          props,
          state,
          isInitialized
        ) {
          var isMount =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : false;
          var isSync =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : false;
          var isServer =
            arguments.length > 5 && arguments[5] !== undefined
              ? arguments[5]
              : false;
          if (!isInitialized) return state;

          if (!state.error) {
            state.error = null;
          }

          return __handleAfter(props, state, isMount, isSync, isServer);
        });
        /* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */

        var __handleAfter = (exports.__handleAfter = function __handleAfter(
          props,
          state,
          isMount,
          isSync,
          isServer
        ) {
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
        });

        /***/
      },
      /* 43 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(44);

        var _interopRequireDefault = __webpack_require__(45);

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(__webpack_require__(46));

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(47)
        );

        var React = _interopRequireWildcard(__webpack_require__(0));

        var _useStaticInfo = __webpack_require__(48);
        /* eslint-disable import/no-dynamic-require */

        var OriginalSuspense = React.Suspense;

        function Suspense(_ref) {
          var key = _ref.key,
            children = _ref.children,
            rest = (0, _objectWithoutProperties2["default"])(_ref, [
              "key",
              "children"
            ]);
          return typeof document !== "undefined"
            ? React.createElement(
                OriginalSuspense,
                (0, _extends2["default"])(
                  {
                    key: key
                  },
                  rest
                ),
                children
              )
            : React.createElement(
                React.Fragment,
                {
                  key: key
                },
                children
              );
        } // Override the suspense module to be our own

        React.Suspense = Suspense;
        React["default"].Suspense = Suspense;

        var App = __webpack_require__(49)["default"];

        var _default = function _default(staticInfo) {
          return function(props) {
            return React.createElement(
              _useStaticInfo.staticInfoContext.Provider,
              {
                value: staticInfo
              },
              React.createElement(App, props)
            );
          };
        };

        exports["default"] = _default;

        /***/
      },
      /* 44 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

        /***/
      },
      /* 45 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/interopRequireDefault");

        /***/
      },
      /* 46 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/extends");

        /***/
      },
      /* 47 */
      /***/ function(module, exports) {
        module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

        /***/
      },
      /* 48 */
      /***/ function(module, exports) {
        module.exports = require("/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

        /***/
      },
      /* 49 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(module) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            0
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            12
          );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react_dom__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            28
          );
          /* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react_hot_loader__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            7
          );

          // Your top level component

          // Export your top level component as JSX (for static rendering)

          /* harmony default export */ __webpack_exports__["default"] =
            _App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]; // Render your app

          if (typeof document !== "undefined") {
            var target = document.getElementById("root");
            var renderMethod = target.hasChildNodes()
              ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate
              : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

            var render = function render(Comp) {
              renderMethod(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    Comp,
                    null
                  )
                ),
                target
              );
            }; // Render!

            render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

            if (module && module.hot) {
              module.hot.accept("./App", function() {
                render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
              });
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(50)(module)));

        /***/
      },
      /* 50 */
      /***/ function(module, exports) {
        module.exports = function(originalModule) {
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

        /***/
      },
      /* 51 */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(17)(false);
        // Imports
        exports.i(__webpack_require__(52), "");

        // Module
        exports.push([
          module.i,
          '* {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",\r\n    Helvetica, Arial, "Lucida Grande", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n',
          ""
        ]);

        /***/
      },
      /* 52 */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(17)(false);
        // Module
        exports.push([
          module.i,
          ".test {\r\n  background-color: cyan;\r\n}\r\n",
          ""
        ]);

        /***/
      }
      /******/
    ]
  );
});
