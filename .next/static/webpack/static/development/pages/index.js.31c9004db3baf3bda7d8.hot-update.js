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
/* harmony import */ var src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/location-types/unknown.png */ "./assets/images/location-types/unknown.png");
/* harmony import */ var src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/images/location-types/cluster.png */ "./assets/images/location-types/cluster.png");
/* harmony import */ var src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/images/location-types/dream.png */ "./assets/images/location-types/dream.png");
/* harmony import */ var src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/images/location-types/fantasy-town.png */ "./assets/images/location-types/fantasy-town.png");
/* harmony import */ var src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/assets/images/location-types/microverse.png */ "./assets/images/location-types/microverse.png");
/* harmony import */ var src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/assets/images/location-types/planet.png */ "./assets/images/location-types/planet.png");
/* harmony import */ var src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/assets/images/location-types/resort.png */ "./assets/images/location-types/resort.png");
/* harmony import */ var src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/assets/images/location-types/space-station.png */ "./assets/images/location-types/space-station.png");
/* harmony import */ var src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/assets/images/location-types/tv.png */ "./assets/images/location-types/tv.png");
/* harmony import */ var src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/utils/helpers */ "./utils/helpers.js");

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
var LOCATION_TYPES = {
  unknown: src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  cluster: src_assets_images_location_types_cluster_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  dream: src_assets_images_location_types_dream_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  fantasy_town: src_assets_images_location_types_fantasy_town_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  microverse: src_assets_images_location_types_microverse_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  planet: src_assets_images_location_types_planet_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  resort: src_assets_images_location_types_resort_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  space_station: src_assets_images_location_types_space_station_png__WEBPACK_IMPORTED_MODULE_12___default.a,
  tv: src_assets_images_location_types_tv_png__WEBPACK_IMPORTED_MODULE_13___default.a
};
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
      lineNumber: 56
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ItemImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("img", {
    src: LOCATION_TYPES[Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_14__["adjustType"])(type)] ? LOCATION_TYPES[Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_14__["adjustType"])(type)] : src_assets_images_location_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ItemInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, name), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, type), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LocationItemResidentsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, data && data.location.residents.slice(0, 3).map(function (resident) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, resident.image && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LocationItemResident"], {
      key: resident.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("img", {
      src: resident.image,
      alt: resident.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })));
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (LocationItem);

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: adjustType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustType", function() { return adjustType; });
var adjustType = function adjustType(str) {
  return str.replace(' ', '_').toLowerCase();
};

/***/ })

})
//# sourceMappingURL=index.js.31c9004db3baf3bda7d8.hot-update.js.map