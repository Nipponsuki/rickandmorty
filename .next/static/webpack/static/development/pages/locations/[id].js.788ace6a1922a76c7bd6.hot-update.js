webpackHotUpdate("static/development/pages/locations/[id].js",{

/***/ "./hooks/useInfiniteScrollWithoutPagination.js":
/*!*****************************************************!*\
  !*** ./hooks/useInfiniteScrollWithoutPagination.js ***!
  \*****************************************************/
/*! exports provided: useInfiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInfiniteScroll", function() { return useInfiniteScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/debounce */ "./utils/debounce.js");


var STORY_INCREMENT = 10;
var useInfiniteScroll = function useInfiniteScroll(maxElements) {
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

    if (count + STORY_INCREMENT >= maxElements) {
      setCount(maxElements);
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
    count: count,
    loading: loading
  };
};

/***/ })

})
//# sourceMappingURL=[id].js.788ace6a1922a76c7bd6.hot-update.js.map