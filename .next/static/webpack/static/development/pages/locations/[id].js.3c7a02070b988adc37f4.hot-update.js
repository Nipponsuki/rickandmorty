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
/* harmony import */ var src_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Loader */ "./components/Loader/index.js");
/* harmony import */ var src_hooks_useInfinite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/hooks/useInfinite */ "./hooks/useInfinite.js");

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

  var _useInfinite = Object(src_hooks_useInfinite__WEBPACK_IMPORTED_MODULE_12__["useInfinite"])(data.location.residents.length),
      count = _useInfinite.count;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DetailsImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["getLocationImage"])(data.location.type),
    alt: data.location.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    margin: "45px 5px 5px 5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data.location.name), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    margin: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, data.location.type), __jsx(_LocationsContainer_LocationItem_styles__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    textAlign: "center",
    margin: "25px 0 0 0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Residents"), __jsx(_LocationsContainer_styles__WEBPACK_IMPORTED_MODULE_7__["StyledLocationsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, data && data.location.residents.slice(0, count).map(function (resident) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/residents/".concat(resident.id),
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_ResidentItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      resident: resident,
      locationType: data.location.type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })));
  }), loading && __jsx(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), data && data.location.residents.info.next && __jsx(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationDetails);

/***/ }),

/***/ "./hooks/useInfinite.js":
/*!******************************!*\
  !*** ./hooks/useInfinite.js ***!
  \******************************/
/*! exports provided: useInfinite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInfinite", function() { return useInfinite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/debounce */ "./utils/debounce.js");


var STORY_INCREMENT = 10;
var useInfinite = function useInfinite(max) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(STORY_INCREMENT),
      count = _useState2[0],
      setCount = _useState2[1];

  var handleScroll = Object(src_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return false;
    }

    setLoading(true);
  }, 500);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!loading) return;

    if (count + STORY_INCREMENT >= max) {
      setCount(max);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return {
    count: count
  };
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=[id].js.3c7a02070b988adc37f4.hot-update.js.map