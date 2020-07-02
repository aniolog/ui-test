module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app-container/index.ts":
/*!*******************************************!*\
  !*** ./components/app-container/index.ts ***!
  \*******************************************/
/*! exports provided: AppContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.ts");


const AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "app-container__AppContainer",
  componentId: "l6f89c-0"
})(["width:100vw;min-height:calc(100vh - 64px);overflow-y:'auto';background-color:", ";display:flex;justify-content:center;align-content:center;"], _styles_colors__WEBPACK_IMPORTED_MODULE_1__["Colors"].iceBlue);

/***/ }),

/***/ "./components/header/header.styled.ts":
/*!********************************************!*\
  !*** ./components/header/header.styled.ts ***!
  \********************************************/
/*! exports provided: HeaderContainer, HeaderContent, Links, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.ts");


const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyled__HeaderContainer",
  componentId: "hu7r29-0"
})(["width:100vw;height:64px;background-color:", ";display:flex;justify-content:center;align-items:center;"], _styles_colors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white);
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyled__HeaderContent",
  componentId: "hu7r29-1"
})(["width:1120px;display:flex;justify-content:space-between;align-items:center;"]);
const Links = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyled__Links",
  componentId: "hu7r29-2"
})(["display:flex;align-items:center;"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "headerstyled__Link",
  componentId: "hu7r29-3"
})(["display:flex;align-items:center;justify-content:center;font-family:'Roboto';font-weight:500;font-size:14px;color:", ";margin-right:40px;height:64px;border-top:", ";padding-top:", ";cursor:pointer;"], _styles_colors__WEBPACK_IMPORTED_MODULE_1__["Colors"].navyBlue, props => props.active ? `6px solid ${_styles_colors__WEBPACK_IMPORTED_MODULE_1__["Colors"].navyBlue}` : 'none', props => props.active ? `0` : '6px');

/***/ }),

/***/ "./components/header/index.tsx":
/*!*************************************!*\
  !*** ./components/header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styled */ "./components/header/header.styled.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_bellotero_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/bellotero.svg */ "./public/images/bellotero.svg");
/* harmony import */ var _public_images_bellotero_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_images_bellotero_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/anibal/Desktop/code/ui-test/components/header/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //@ts-ignore



const Header = () => {
  const links = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.app.menu.items);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(_header_styled__WEBPACK_IMPORTED_MODULE_1__["HeaderContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_header_styled__WEBPACK_IMPORTED_MODULE_1__["HeaderContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_images_bellotero_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx(_header_styled__WEBPACK_IMPORTED_MODULE_1__["Links"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_header_styled__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "Home"), links.map((link, index) => __jsx(_header_styled__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    key: `${link.route}${index}`,
    active: router.route === `/${link.route}`,
    onClick: () => router.push(`/${link.route}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, link.text)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ "./store/actions.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/global */ "./services/global.ts");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./components/header/index.tsx");
/* harmony import */ var _components_app_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/app-container */ "./components/app-container/index.ts");
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/fonts */ "./styles/fonts/index.tsx");
var _jsxFileName = "/Users/anibal/Desktop/code/ui-test/pages/_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












//@ts-ignore
function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4243733796",
    __self: this
  }, "body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmliYWwvRGVza3RvcC9jb2RlL3VpLXRlc3QvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUIyQixBQUd1QixVQUNELFNBRTZELHFJQUN4RSIsImZpbGUiOiIvVXNlcnMvYW5pYmFsL0Rlc2t0b3AvY29kZS91aS10ZXN0L3BhZ2VzL19hcHAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgQXBwUHJvcHMsIEFwcENvbnRleHQgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBBUFBfQUNUSU9OUyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsSW5mbyB9IGZyb20gJy4uL3NlcnZpY2VzL2dsb2JhbCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwcC1jb250YWluZXInO1xuaW1wb3J0IHsgR2xvYmFsRm9udHMgfSBmcm9tICcuLi9zdHlsZXMvZm9udHMnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XG5cblxuLy9AdHMtaWdub3JlXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcbiAgICAgICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxHbG9iYWxGb250cyAvPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9OiBBcHBDb250ZXh0KSAgPT4ge1xuICBjb25zdCBtZW51ID0gIGF3YWl0IGdldEdsb2JhbEluZm8oKTtcbiAgY3R4LnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogQVBQX0FDVElPTlMuTUVOVV9MT0FERUQsIG1lbnUgfSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoeyAuLi5jdHggfSkgOiB7fTtcbiAgcmV0dXJuIHsgIHBhZ2VQcm9wcyB9O1xufVxuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XG5cbi8vQHRzLWlnbm9yZVxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApOyJdfQ== */\n/*@ sourceURL=/Users/anibal/Desktop/code/ui-test/pages/_app.tsx */"), __jsx(_styles_fonts__WEBPACK_IMPORTED_MODULE_10__["GlobalFonts"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_components_app_container__WEBPACK_IMPORTED_MODULE_9__["AppContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(Component, _extends({}, pageProps, {
    className: "jsx-4243733796" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }))))));
}

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const menu = await Object(_services_global__WEBPACK_IMPORTED_MODULE_6__["getGlobalInfo"])();
  ctx.store.dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["APP_ACTIONS"].MENU_LOADED,
    menu
  }); // @ts-ignore

  const pageProps = Component.getInitialProps ? await Component.getInitialProps(_objectSpread({}, ctx)) : {};
  return {
    pageProps
  };
};

const makeStore = () => _store__WEBPACK_IMPORTED_MODULE_4__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(makeStore); //@ts-ignore

/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./public/images/bellotero.svg":
/*!*************************************!*\
  !*** ./public/images/bellotero.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzMiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAxMzMgMjYiPgogICAgPGcgZmlsbD0iIzA3MUVCMyIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik05LjYwMi40ODdjLjIxLS4wNTYuNDE4LS4xMDYuNjI0LS4xNUExMy4yOSAxMy4yOSAwIDAgMSAxMy41Ny4wNzRjLjQ2NS4wMjcuODg0LjA2NCAxLjI0LjEyOC4xODIuMDI3LjM0Ni4wNTQuNDkyLjA4Mi4xNDYuMDI3LjI4My4wNjQuNDEuMDgyLjExOS4wMjcuMjI4LjA1NS4zMi4wODIuMDkuMDI3LjE3Mi4wNDUuMjI3LjA2NGwuMTkyLjA1NFMxNi4zODguNTQ3IDE2LjI2LjUyYTIuMzc4IDIuMzc4IDAgMCAwLS4yMzctLjA1NWMtLjA5MS0uMDE4LS4yLS4wNDUtLjMxOS0uMDY0LS40ODMtLjEtMS4yMTItLjIxLTIuMTQyLS4yMzdhMTIuOSAxMi45IDAgMCAwLTMuMDY5LjI4NGMuNjYuMDM3IDEuNTIxLjIxMyAyLjQwMy43NTYuMTc0LjExOC4zMzguMjY0LjUyLjM3My40NjUuMjkyLjk1Ny41MjkgMS40NzcuNzIuNzMuMjY1IDEuNTA0LjQyIDIuMjc5LjQ2NS4yNjQuMDEuNTM4LjAxLjgwMiAwIC4yLS4wMDkuMzkyLS4wMTguNTkyLS4wNDUuMTM3LS4wMTkuMjY1LS4wNjQuNDAyLS4wODIuMzM3LS4wMjguNTgzLjEzNi42OTIuNDQ2IDAgMCAuMTEuMzAxLS4yLjYxMWwtLjE2NC4wOTFzLTEuNTIzLjU4NC0zLjM1NSAyLjI5N2MwIDAtMS4xMjEgMS4xNDktMS42NjggMS45ODggMCAwLTEuMDQgMS40NjctMS41NSAzLjEzNSAwIDAtMi41NSA3Ljc2IDQuMDY5IDEzLjc1OGExMi4zMTUgMTIuMzE1IDAgMCAwIDQuMDYzLTIuMDk4IDEyLjM4IDEyLjM4IDAgMCAwIDEuODk2LTEuODE1Yy4xMzYtLjE1NC4yNjQtLjMyOC40LS40OTJsLjEwMS0uMTI3LjA0Ni0uMDY0LjA0NS0uMDY0Yy4wNTUtLjA4Mi4xMTktLjE3My4xNzMtLjI1NS4yNDYtLjMyOC40MzgtLjY4NC42NDgtMS4wMjEuMzgyLS42OTMuNjgzLTEuMzg2LjkzLTIuMDYuMDU0LS4xNzQuMTA5LS4zMzguMTYzLS41MWwuMDgyLS4yNDdjLjAxOS0uMDgyLjA0Ni0uMTY0LjA2NC0uMjQ2LjA0Ni0uMTY0LjA4Mi0uMzI4LjExOS0uNDkyLjAyNy0uMTY0LjA2NC0uMzI5LjA5MS0uNDgzYTEyLjUzIDEyLjUzIDAgMCAwIC4xNDYtMy4zMjhjLS4wNzMtLjkyLS4yNDYtMS42NC0uMzU2LTIuMTI0LS4xNDYtLjUwMS0uMjE4LS43NTYtLjIxOC0uNzU2bC4yMzcuNzI5Yy4wMjcuMTE4LjA2My4yNTUuMS40MDEuMDM2LjE0Ni4wODIuMzEuMTE4LjQ5Mi4wMzcuMTczLjA3My4zNjUuMTEuNTc1LjAyNy4yMS4wNTQuNDI4LjA5LjY1Ni4xMDEuOTMuMTI4IDIuMDctLjA3MiAzLjM1NWwtLjA4Mi40OTItLjExLjUwMS0uMDU0LjI1NWMtLjAyOC4wODItLjA0Ni4xNzQtLjA3My4yNTYtLjA1NS4xNzMtLjEuMzQ2LS4xNTUuNTJhMTMuOTY2IDEzLjk2NiAwIDAgMS0uOTEyIDIuMTE0Yy0uMi4zNDYtLjQuNzExLS42NDcgMS4wNDgtLjA1NS4wOTItLjExOC4xNzQtLjE3My4yNjVsLS4wNDYuMDczLS4wNDUuMDYzLS4wOTEuMTI4Yy0uMTI4LjE2NC0uMjU2LjMzNy0uMzkyLjUwMWExMi45NCAxMi45NCAwIDAgMS0xLjkxNSAxLjg4NyAxMy4zOSAxMy4zOSAwIDAgMS0yLjM5NyAxLjUyMyAxMy4xMSAxMy4xMSAwIDAgMS01Ljg2MiAxLjI5NCAxMi45NzUgMTIuOTc1IDAgMCAxLTMuMTE3LS40MjhjLTEuMDMtLjI2NS0yLjAyNC0uNjg0LTIuOTcyLTEuMjA0LS4yMzctLjEyNy0uNDY1LS4yNzMtLjY5My0uNDEtLjExOC0uMDczLS4yMjgtLjE1NS0uMzM3LS4yMjgtLjExLS4wODItLjIxOS0uMTQ1LS4zMzctLjIzN2wtLjMyLS4yNDYtLjE1NC0uMTE4LS4xNTUtLjEyOC0uMzEtLjI2NC0uMzAxLS4yNzRhMTMuNTY0IDEzLjU2NCAwIDAgMS0xLjExMi0xLjE3NmMtLjMzNy0uNDE5LS42NjYtLjg0Ny0uOTQ4LTEuMzEyYTEyLjU0IDEyLjU0IDAgMCAxLS43NzUtMS40MTNsLS4xNjQtLjM2NWMtLjAyNy0uMDY0LS4wNTUtLjExOC0uMDgyLS4xODJsLS4wNzMtLjE4My0uMTQ2LS4zNzMtLjEyOC0uMzc0YTEyLjk4MyAxMi45ODMgMCAwIDEtLjYxLTMuMDljLS4wODItMS4wNC0uMDI4LTIuMDcuMTM2LTMuMDcyYTEyLjc3OCAxMi43NzggMCAwIDEgMi4xOTctNS4zMzMgMTMuMDkzIDEzLjA5MyAwIDAgMSAxLjc2OS0yLjAyNEExMi42NiAxMi42NiAwIDAgMSA2LjE3OCAxLjk2Yy42ODQtLjQyIDEuMzc3LS43NjYgMi4wNi0xLjAzLjI1LS4wOTcuNDk4LS4xODMuNzQyLS4yNjJsLjI4OC0uMTAzYy4xMDktLjAzNi4yMTctLjA2LjMzNC0uMDc4ek0zLjQxNiAyMS4wNDZjLjE3Mi4xOTguMzUuMzk1LjUzMy41ODYtLjc3NS04LjUxMSA1Ljg2Ni0xMi45NjIgNi4zNzQtMTMuMjktLjQ1Mi4yMi03Ljg0NCAzLjk2Ni02LjkwNyAxMi42OTd2LjAwN3pNMTEuMzMgNS45NDRhMS4yMTEgMS4yMTEgMCAwIDAtMi4wNTEtMS4yODYgMS4yMTEgMS4yMTEgMCAwIDAgMi4wNSAxLjI4NnoiLz4KICAgICAgICA8cGF0aCBkPSJNNDEuMzE0IDE5VjYuNGg0LjMwMmMzLjQ1NiAwIDQuMDUgMi4yNjggNC4wNSAzLjU4MiAwIDEuNzI4LTEuMTM0IDIuNDQ4LTEuOTk4IDIuNjQ2LjczOC4xOCAyLjEwNi44NjQgMi4xMDYgMi43MTggMCAxLjMxNC0uNTk0IDMuNjU0LTQuMDUgMy42NTRoLTQuNDF6bTQuNDI4LTUuNDU0aC0yLjM1OHYzLjZoMi4zNGMxLjY5MiAwIDEuOTgtMS4xNTIgMS45OC0xLjggMC0uNjMtLjM3OC0xLjgtMS45NjItMS44em0tMi4zNTgtMS44NTRoMi4yMzJjMS42OTIgMCAxLjk4LTEuMDk4IDEuOTgtMS43MSAwLS42My0uMjg4LTEuNzI4LTEuOTgtMS43MjhoLTIuMjMydjMuNDM4ek01OS40MjIgMTUuNGgtNS45NGMuMDE4IDEuMjA2LjYxMiAyLjE3OCAyLjE5NiAyLjE3OCAxLjExNiAwIDEuNTMtLjUwNCAxLjc4Mi0xLjA5OGgxLjk4Yy0uMjcgMS40NC0xLjYyIDIuNzM2LTMuNzYyIDIuNzM2LTIuODI2IDAtNC4xOTQtMi4xMjQtNC4xOTQtNC40MSAwLTIuNTIgMS40OTQtNC40MSA0LjE0LTQuNDEgMi4xNzggMCAzLjg4OCAxLjYzOCAzLjg4OCAzLjc4IDAgLjI4OCAwIC42ODQtLjA5IDEuMjI0em0tMy44NTItMy4zNjZjLTEuMTUyIDAtMi4wNy42NjYtMi4wNyAxLjkwOGg0LjEwNGMwLTEuMTctLjg0Ni0xLjkwOC0yLjAzNC0xLjkwOHpNNjEuNjM2IDE5aDEuOTYyVjYuNGgtMS45NjJWMTl6bTQuNTkgMGgxLjk2MlY2LjRoLTEuOTYyVjE5em04LjM3LjIxNmMtMi42NjQgMC00LjQxLTIuMDM0LTQuNDEtNC40MSAwLTIuMzc2IDEuNzQ2LTQuNDEgNC40MS00LjQxIDIuNyAwIDQuNDQ2IDIuMDM0IDQuNDQ2IDQuNDEgMCAyLjM3Ni0xLjc0NiA0LjQxLTQuNDQ2IDQuNDF6bTAtMS43NDZjMS41MTIgMCAyLjQ4NC0xLjIyNCAyLjQ4NC0yLjY2NCAwLTEuNDQtLjk3Mi0yLjY2NC0yLjQ4NC0yLjY2NC0xLjQ3NiAwLTIuNDQ4IDEuMjI0LTIuNDQ4IDIuNjY0IDAgMS40NC45NzIgMi42NjQgMi40NDggMi42NjR6bTExLjA4OC0uMTk4YTcuNDcgNy40NyAwIDAgMS0uOTkuMDcyYy0uNzc0IDAtMS4yMjQtLjE4LTEuMjI0LTEuNjM4VjEyLjI1aDEuOTI2di0xLjYzOEg4My40N1Y4LjA3NGgtMS45NjJ2Mi41MzhoLTEuNDIydjEuNjM4aDEuNDIydjMuOTA2YzAgMi44MjYgMS43NjQgMi45NTIgMi43MTggMi45NTJBOS40OSA5LjQ5IDAgMCAwIDg1LjY4NCAxOXYtMS43Mjh6bTkuMDE4LTEuODcyaC01Ljk0Yy4wMTggMS4yMDYuNjEyIDIuMTc4IDIuMTk2IDIuMTc4IDEuMTE2IDAgMS41My0uNTA0IDEuNzgyLTEuMDk4aDEuOThjLS4yNyAxLjQ0LTEuNjIgMi43MzYtMy43NjIgMi43MzYtMi44MjYgMC00LjE5NC0yLjEyNC00LjE5NC00LjQxIDAtMi41MiAxLjQ5NC00LjQxIDQuMTQtNC40MSAyLjE3OCAwIDMuODg4IDEuNjM4IDMuODg4IDMuNzggMCAuMjg4IDAgLjY4NC0uMDkgMS4yMjR6bS0zLjg1Mi0zLjM2NmMtMS4xNTIgMC0yLjA3LjY2Ni0yLjA3IDEuOTA4aDQuMTA0YzAtMS4xNy0uODQ2LTEuOTA4LTIuMDM0LTEuOTA4em0xMS4zOTQtMS40MDRjLS4yMTYtLjA5LS40NjgtLjEyNi0uNzc0LS4xMjYtMS4xMTYgMC0yLjIxNC42ODQtMi41OTIgMS40NTh2LTEuMzVoLTEuOTYyVjE5aDEuOTYydi0zLjYxOGMwLTIuMDg4LjkxOC0zLjA0MiAyLjU5Mi0zLjA0Mi4zMDYgMCAuNDY4LjAxOC43NzQuMDl2LTEuOHptNS4yNTYgOC41ODZjLTIuNjY0IDAtNC40MS0yLjAzNC00LjQxLTQuNDEgMC0yLjM3NiAxLjc0Ni00LjQxIDQuNDEtNC40MSAyLjcgMCA0LjQ0NiAyLjAzNCA0LjQ0NiA0LjQxIDAgMi4zNzYtMS43NDYgNC40MS00LjQ0NiA0LjQxem0wLTEuNzQ2YzEuNTEyIDAgMi40ODQtMS4yMjQgMi40ODQtMi42NjQgMC0xLjQ0LS45NzItMi42NjQtMi40ODQtMi42NjQtMS40NzYgMC0yLjQ0OCAxLjIyNC0yLjQ0OCAyLjY2NCAwIDEuNDQuOTcyIDIuNjY0IDIuNDQ4IDIuNjY0em02LjIxLjE5OGMwIC43OTIuNjQ4IDEuNDQgMS40NCAxLjQ0YTEuNDQ4IDEuNDQ4IDAgMSAwIDAtMi44OThjLS43OTIgMC0xLjQ0LjY0OC0xLjQ0IDEuNDU4ek0xMTkuMzk4IDE5aDEuOTYydi04LjM4OGgtMS45NjJWMTl6bS0uNDY4LTExLjQ0OGMwIC43OTIuNjQ4IDEuNDQgMS40NCAxLjQ0YTEuNDQ4IDEuNDQ4IDAgMSAwIDAtMi44OThjLS43OTIgMC0xLjQ0LjY0OC0xLjQ0IDEuNDU4em05LjIzNCAxMS42NjRjLTIuNjY0IDAtNC40MS0yLjAzNC00LjQxLTQuNDEgMC0yLjM3NiAxLjc0Ni00LjQxIDQuNDEtNC40MSAyLjcgMCA0LjQ0NiAyLjAzNCA0LjQ0NiA0LjQxIDAgMi4zNzYtMS43NDYgNC40MS00LjQ0NiA0LjQxem0wLTEuNzQ2YzEuNTEyIDAgMi40ODQtMS4yMjQgMi40ODQtMi42NjQgMC0xLjQ0LS45NzItMi42NjQtMi40ODQtMi42NjQtMS40NzYgMC0yLjQ0OCAxLjIyNC0yLjQ0OCAyLjY2NCAwIDEuNDQuOTcyIDIuNjY0IDIuNDQ4IDIuNjY0eiIvPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./services/global.ts":
/*!****************************!*\
  !*** ./services/global.ts ***!
  \****************************/
/*! exports provided: getGlobalInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalInfo", function() { return getGlobalInfo; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getGlobalInfo = async () => {
  const menu = await (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master"}/app.json`)).data.menu;
  return menu;
};

/***/ }),

/***/ "./store/actions.ts":
/*!**************************!*\
  !*** ./store/actions.ts ***!
  \**************************/
/*! exports provided: APP_ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ACTIONS", function() { return APP_ACTIONS; });
let APP_ACTIONS;

(function (APP_ACTIONS) {
  APP_ACTIONS["INIT"] = "APP.INIT";
  APP_ACTIONS["MENU_LOADED"] = "APP.MENU_LOADED";
  APP_ACTIONS["REVIEW_CHANGED"] = "APP.REVIEW_CHANGED";
  APP_ACTIONS["REVIEWS_LOADED"] = "APP.REVIEWS_LOADED";
  APP_ACTIONS["NEXT_HYDRATE"] = "__NEXT_REDUX_WRAPPER_HYDRATE__";
  APP_ACTIONS["CALCULATOR_INFO_LOADED"] = "APP.CALCULATOR_INFO_LOADED";
})(APP_ACTIONS || (APP_ACTIONS = {}));

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/reducer */ "./store/reducers/reducer.ts");





const initialState = {
  app: _reducers_reducer__WEBPACK_IMPORTED_MODULE_4__["initState"]
};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...[redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/reducers/index.ts":
/*!*********************************!*\
  !*** ./store/reducers/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./store/reducers/reducer.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./store/reducers/reducer.ts":
/*!***********************************!*\
  !*** ./store/reducers/reducer.ts ***!
  \***********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./store/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  calculatorDescription: '',
  calculatorTitle: '',
  menu: {
    items: []
  },
  reviews: [],
  selectedReviewIndex: 0,
  testimonialTitle: ''
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["APP_ACTIONS"].MENU_LOADED:
      return state = _objectSpread({}, state, {
        menu: action.menu
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["APP_ACTIONS"].REVIEW_CHANGED:
      return state = _objectSpread({}, state, {
        selectedReviewIndex: action.selectedReviewIndex
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["APP_ACTIONS"].REVIEWS_LOADED:
      return state = _objectSpread({}, state, {
        selectedReviewIndex: 0,
        testimonialTitle: action.testimonialTitle,
        reviews: action.reviews
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["APP_ACTIONS"].CALCULATOR_INFO_LOADED:
      return state = _objectSpread({}, state, {
        calculatorTitle: action.calculatorTitle,
        calculatorDescription: action.calculatorDescription
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["APP_ACTIONS"].NEXT_HYDRATE:
      return state = _objectSpread({}, state, {}, action.payload.app);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./styles/colors.ts":
/*!**************************!*\
  !*** ./styles/colors.ts ***!
  \**************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
let Colors;

(function (Colors) {
  Colors["navyBlue"] = "#071eb3";
  Colors["black"] = "#161616";
  Colors["greyish"] = "#a5a5a5";
  Colors["iceBlue"] = "#f9faff";
  Colors["white"] = "#fff";
})(Colors || (Colors = {}));

;

/***/ }),

/***/ "./styles/fonts/font-faces.tsx":
/*!*************************************!*\
  !*** ./styles/fonts/font-faces.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RobotoFontFaces = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@font-face{font-family:'Roboto';src:url('/fonts/Roboto-Regular.ttf') format('truetype');font-weight:normal;font-style:normal;font-display:swap;}@font-face{font-family:'Roboto';src:url('/fonts/Roboto-Medium.ttf') format('truetype');font-weight:500;font-style:normal;font-display:swap;}@font-face{font-family:'Roboto';src:url('/fonts/Roboto-Black.ttf') format('truetype');font-weight:bold;font-style:normal;font-display:swap;}@font-face{font-family:'Roboto';src:url('/fonts/Roboto-Bold.ttf') format('truetype');font-weight:Bolder;font-style:normal;font-display:swap;}@font-face{font-family:'CormorantGaramond';src:url('/fonts/CormorantGaramond-SemiBoldItalic.ttf') format('truetype');font-style:italic;font-display:swap;}"]);
/* harmony default export */ __webpack_exports__["default"] = (RobotoFontFaces);

/***/ }),

/***/ "./styles/fonts/index.tsx":
/*!********************************!*\
  !*** ./styles/fonts/index.tsx ***!
  \********************************/
/*! exports provided: GlobalFonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFonts", function() { return GlobalFonts; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _font_faces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-faces */ "./styles/fonts/font-faces.tsx");


const GlobalFonts = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${_font_faces__WEBPACK_IMPORTED_MODULE_1__["default"]}
`;

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map