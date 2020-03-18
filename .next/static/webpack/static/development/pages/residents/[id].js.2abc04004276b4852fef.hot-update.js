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
/* harmony import */ var _LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LocationsContainer/LocationItem/styles */ "./components/LocationsContainer/LocationItem/styles.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/ResidentDetails/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Character($id: ID!) {\n    character(id: $id) {\n      id\n      image\n      name\n      status\n      type\n      origin {\n        name\n      }\n    }\n  }\n"]);

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
      lineNumber: 34
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ResidentImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: data.character.image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ResidentInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, data.character.name), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, data.character.name), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data.character.type), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    margin: "10px 0 0 0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Status:"), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, data.character.status), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Home Planet:"), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, data.character.origin.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResidentDetails);

/***/ })

})
//# sourceMappingURL=[id].js.2abc04004276b4852fef.hot-update.js.map