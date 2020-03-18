webpackHotUpdate("static/development/pages/locations/[id].js",{

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/LocationDetails/styles.js");
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/helpers */ "./utils/helpers.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/LocationDetails/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Location($id: ID!) {\n    location(id: $id) {\n      name\n      type\n      residents {\n        image\n        id\n        name\n      }\n    }\n  }\n"]);

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
      error = _useQuery.error,
      loading = _useQuery.loading,
      fetchMore = _useQuery.fetchMore;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["DetailsImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["getLocationImage"])(data.location.type),
    alt: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationDetails);

/***/ }),

/***/ "./components/LocationDetails/styles.js":
/*!**********************************************!*\
  !*** ./components/LocationDetails/styles.js ***!
  \**********************************************/
/*! exports provided: DetailsImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsImage", function() { return DetailsImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var DetailsImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__DetailsImage",
  componentId: "sc-1n3ebnd-0"
})(["width:95%;height:414px;@media (min-width:768px){width:396px;}img{width:100%;height:100%;object-fit:cover;}"]);


/***/ })

})
//# sourceMappingURL=[id].js.3e119b61df5ee2a6fdab.hot-update.js.map