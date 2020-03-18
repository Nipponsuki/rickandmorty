webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: adjustType, getLocationImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustType", function() { return adjustType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationImage", function() { return getLocationImage; });
var adjustType = function adjustType(str) {
  return str.replace(' ', '_').toLowerCase();
};
var getLocationImage = function getLocationImage(type) {
  if (LOCATION_TYPES[adjustType(type)]) {
    return LOCATION_TYPES[adjustType(type)];
  }

  return unknownTypeImage;
};

/***/ })

})
//# sourceMappingURL=index.js.7ec7b03cd5bc0b3b110f.hot-update.js.map