webpackHotUpdate("static/development/pages/residents/[id].js",{

/***/ "./components/ResidentDetails/index.js":
/*!*********************************************!*\
  !*** ./components/ResidentDetails/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/ResidentDetails/styles.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/ResidentDetails/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Character($id: ID!) {\n    character(id: $id) {\n      id\n      image\n      name\n      status\n      origin {\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var RESIDENT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var ResidentDetails = function ResidentDetails(_ref) {
  var id = _ref.id;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(RESIDENT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ResidentDetailsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(ResidentImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: data.character.image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResidentDetails);

/***/ }),

/***/ "./components/ResidentDetails/styles.js":
/*!**********************************************!*\
  !*** ./components/ResidentDetails/styles.js ***!
  \**********************************************/
/*! exports provided: ResidentDetailsContainer, ResidentImage, ResidentInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentDetailsContainer", function() { return ResidentDetailsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentImage", function() { return ResidentImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentInfo", function() { return ResidentInfo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ResidentDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ResidentDetailsContainer",
  componentId: "noty85-0"
})(["width:100%;display:flex;flex-direction:column;align-items:flex-start;"]);
var ResidentImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ResidentImage",
  componentId: "noty85-1"
})(["width:100%;height:414px;@media (min-width:768px){width:396px;margin:0 auto;}img{width:100%;height:100%;object-fit:cover;margin:0 auto;@media (min-width:768px){border-radius:10px;box-shadow:2px 2px 10px rgba(29,99,234,0.48);}}"]);
var ResidentInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ResidentInfo",
  componentId: "noty85-2"
})(["width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:5px;"]);


/***/ })

})
//# sourceMappingURL=[id].js.d0523c7355380587e5a3.hot-update.js.map