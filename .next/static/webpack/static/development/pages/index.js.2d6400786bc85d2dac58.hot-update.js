webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: LOCATION_TYPES, getLocationImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_TYPES", function() { return LOCATION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationImage", function() { return getLocationImage; });
/* harmony import */ var src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/images/location-types/unknown.png */ "./assets/images/location-types/unknown.png");
/* harmony import */ var src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/images/location-types/cluster.png */ "./assets/images/location-types/cluster.png");
/* harmony import */ var src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/location-types/dream.png */ "./assets/images/location-types/dream.png");
/* harmony import */ var src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/location-types/fantasy-town.png */ "./assets/images/location-types/fantasy-town.png");
/* harmony import */ var src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/location-types/microverse.png */ "./assets/images/location-types/microverse.png");
/* harmony import */ var src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/location-types/planet.png */ "./assets/images/location-types/planet.png");
/* harmony import */ var src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/images/location-types/resort.png */ "./assets/images/location-types/resort.png");
/* harmony import */ var src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/images/location-types/space-station.png */ "./assets/images/location-types/space-station.png");
/* harmony import */ var src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/images/location-types/tv.png */ "./assets/images/location-types/tv.png");
/* harmony import */ var src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_8__);









var LOCATION_TYPES = {
  unknown: src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  cluster: src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  dream: src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  fantasy_town: src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  microverse: src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  planet: src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  resort: src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  space_station: src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  tv: src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_8___default.a
};

var adjustType = function adjustType(str) {
  return str.replace(' ', '_').toLowerCase();
};

var getLocationImage = function getLocationImage(type) {
  if (LOCATION_TYPES[adjustType(type)]) {
    return LOCATION_TYPES[adjustType(type)];
  }

  return src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_0___default.a;
};

/***/ })

})
//# sourceMappingURL=index.js.2d6400786bc85d2dac58.hot-update.js.map