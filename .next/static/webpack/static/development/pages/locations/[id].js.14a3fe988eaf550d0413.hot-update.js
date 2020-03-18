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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/LocationDetails/styles.js");
/* harmony import */ var _LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LocationsContainer/LocationItem/styles */ "./components/LocationsContainer/LocationItem/styles.js");
/* harmony import */ var _LocationsContainer_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LocationsContainer/styles */ "./components/LocationsContainer/styles.js");
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _ResidentItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ResidentItem */ "./components/LocationDetails/ResidentItem/index.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/components/LocationDetails/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Location($id: ID!) {\n    location(id: $id) {\n      name\n      type\n      id\n      residents {\n        image\n        id\n        name\n      }\n    }\n  }\n"]);

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DetailsImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["getLocationImage"])(data.location.type),
    alt: data.location.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    margin: "45px 5px 5px 5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, data.location.name), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    margin: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, data.location.type), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    textAlign: "center",
    margin: "25px 0 0 0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Residents"), __jsx(_LocationsContainer_styles__WEBPACK_IMPORTED_MODULE_7__["StyledLocationsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data && data.location.residents.map(function (resident) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/residents/".concat(resident.id),
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_ResidentItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      resident: resident,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationDetails);

/***/ })

})
//# sourceMappingURL=[id].js.14a3fe988eaf550d0413.hot-update.js.map