webpackHotUpdate("static/development/pages/locations/[id].js",{

/***/ "./assets/images/back-icon.svg":
/*!*************************************!*\
  !*** ./assets/images/back-icon.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1OCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjc2ODYgNDkuMzM5N0wyOS45NDQxIDUyLjAyNzlDMjguNzQ4MSA1My4xNjYyIDI2LjgxNDIgNTMuMTY2MiAyNS42MzA5IDUyLjAyNzlMMC44OTY5ODcgMjguNDk5NEMtMC4yOTg5OTUgMjcuMzYxMSAtMC4yOTg5OTUgMjUuNTIwNSAwLjg5Njk4NyAyNC4zOTQzTDI1LjYzMDkgMC44NTM3MTFDMjYuODI2OSAtMC4yODQ1NyAyOC43NjA4IC0wLjI4NDU3IDI5Ljk0NDEgMC44NTM3MTFMMzIuNzY4NiAzLjU0MTk5QzMzLjk3NzMgNC42OTIzOCAzMy45NTE5IDYuNTY5MzQgMzIuNzE3NyA3LjY5NTUxTDE3LjM4NjMgMjEuNTk3MUg1My45NTI4QzU1LjY0NSAyMS41OTcxIDU3LjAwNjQgMjIuODkyOCA1Ny4wMDY0IDI0LjUwMzNWMjguMzc4M0M1Ny4wMDY0IDI5Ljk4ODkgNTUuNjQ1IDMxLjI4NDYgNTMuOTUyOCAzMS4yODQ2SDE3LjM4NjNMMzIuNzE3NyA0NS4xODYxQzMzLjk2NDYgNDYuMzEyMyAzMy45OTAxIDQ4LjE4OTMgMzIuNzY4NiA0OS4zMzk3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./components/Common/BackButton/index.js":
/*!***********************************************!*\
  !*** ./components/Common/BackButton/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Common/BackButton/styles.js");
/* harmony import */ var src_assets_images_back_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/back-icon.svg */ "./assets/images/back-icon.svg");
/* harmony import */ var src_assets_images_back_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_back_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/Common/BackButton/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BackButton = function BackButton(_ref) {
  var link = _ref.link;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["BackButtonContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    src: src_assets_images_back_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "back to ".concat(link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./components/Common/BackButton/styles.js":
/*!************************************************!*\
  !*** ./components/Common/BackButton/styles.js ***!
  \************************************************/
/*! exports provided: BackButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonContainer", function() { return BackButtonContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BackButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__BackButtonContainer",
  componentId: "sc-10m97lt-0"
})(["width:57px;height:52px;position:absolute;top:0;left:0;img{width:100%;}a{text-decoration:none;color:inherit;}"]);


/***/ }),

/***/ "./components/LocationDetails/index.js":
/*!*********************************************!*\
  !*** ./components/LocationDetails/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/LocationDetails/styles.js");
/* harmony import */ var _LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LocationsContainer/LocationItem/styles */ "./components/LocationsContainer/LocationItem/styles.js");
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/helpers */ "./utils/helpers.js");
/* harmony import */ var src_hooks_useInfiniteScrollWithoutPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/hooks/useInfiniteScrollWithoutPagination */ "./hooks/useInfiniteScrollWithoutPagination.js");
/* harmony import */ var _ResidentItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ResidentItem */ "./components/LocationDetails/ResidentItem/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Loader */ "./components/Loader/index.js");
/* harmony import */ var _Common_BackButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Common/BackButton */ "./components/Common/BackButton/index.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/LocationDetails/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Location($id: ID!) {\n    location(id: $id) {\n      name\n      type\n      id\n      residents {\n        image\n        id\n        name\n        type\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var LOCATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var LocationDetails = function LocationDetails(_ref) {
  var id = _ref.id;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(LOCATION_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var _useInfiniteScroll = Object(src_hooks_useInfiniteScrollWithoutPagination__WEBPACK_IMPORTED_MODULE_8__["useInfiniteScroll"])(data && data.location.residents.length),
      count = _useInfiniteScroll.count;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading && __jsx(_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), data && __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LocationDetailsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DetailsImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["getLocationImage"])(data.location.type),
    alt: data.location.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_Common_BackButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    link: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    margin: "45px 5px 5px 5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, data.location.name), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    margin: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, data.location.type), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    textAlign: "center",
    margin: "25px 0 0 0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Residents"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ResidentsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, data && data.location.residents.slice(0, count).map(function (resident) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/residents/".concat(resident.id),
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(_ResidentItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      resident: resident,
      locationType: data.location.type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })));
  })), count !== data.location.residents.length && __jsx(_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationDetails);

/***/ })

})
//# sourceMappingURL=[id].js.119560996534d4aa3be6.hot-update.js.map