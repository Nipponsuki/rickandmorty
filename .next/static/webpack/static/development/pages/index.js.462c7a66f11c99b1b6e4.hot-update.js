webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LocationsContainer/LocationItem/index.js":
/*!*************************************************************!*\
  !*** ./components/LocationsContainer/LocationItem/index.js ***!
  \*************************************************************/
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/LocationsContainer/LocationItem/styles.js");
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/helpers */ "./utils/helpers.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/LocationsContainer/LocationItem/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Location($id: ID!) {\n    location(id: $id) {\n      residents {\n        image\n        id\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var LOCATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var LocationItem = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (_ref) {
  var _ref$location = _ref.location,
      id = _ref$location.id,
      name = _ref$location.name,
      type = _ref$location.type;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(LOCATION_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ItemContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ItemImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["getLocationImage"])(type),
    alt: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ItemInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, name), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, type), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LocationItemResidentsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data && data.location.residents.slice(0, 3).map(function (resident) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, resident.image && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LocationItemResident"], {
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("img", {
      src: resident.image,
      alt: resident.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (LocationItem);

/***/ })

})
//# sourceMappingURL=index.js.462c7a66f11c99b1b6e4.hot-update.js.map