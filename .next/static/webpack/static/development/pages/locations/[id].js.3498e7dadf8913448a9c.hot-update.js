webpackHotUpdate("static/development/pages/locations/[id].js",{

/***/ "./pages/locations/[id].js":
/*!*********************************!*\
  !*** ./pages/locations/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_LocationDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/LocationDetails */ "./components/LocationDetails/index.js");
/* harmony import */ var src_components_Common_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Common/PageWrapper */ "./components/Common/PageWrapper/index.js");

var _jsxFileName = "/Users/alex/Desktop/rickandmorty/pages/locations/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Location = function Location(_ref) {
  var id = _ref.id;
  return __jsx(src_components_Common_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["PageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "R&M | Location")), __jsx(src_components_LocationDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Location.getInitialProps = function _callee(_ref2) {
  var query, id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          id = query.id;
          return _context.abrupt("return", {
            id: id
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ })

})
//# sourceMappingURL=[id].js.3498e7dadf8913448a9c.hot-update.js.map