webpackHotUpdate("static/development/pages/weekly3.js",{

/***/ "./components/scaleSlide.js":
/*!**********************************!*\
  !*** ./components/scaleSlide.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScaleSlide; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/home/weekly-ui/components/scaleSlide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function getSubslideData(slideData) {
  var firstData = slideData[0];
  var subSlidesData = slideData;
  subSlidesData = subSlidesData.filter(function (data) {
    return data.first !== 0;
  });
  subSlidesData = subSlidesData.concat(firstData);
  return subSlidesData;
}

function getNextPrev(type, currentSlide, slideData) {
  var number;

  if (type === 'next') {
    if (currentSlide < slideData.length - 1) {
      number = currentSlide + 1;
    } else {
      number = 0;
    }
  } else if (type === 'prev') {
    if (currentSlide > 0) {
      number = currentSlide - 1;
    } else {
      number = slideData.length - 1;
    }
  }

  return number;
}

function ScaleSlide(_ref) {
  var slideData = _ref.slideData,
      current = _ref.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      currentSlide = _React$useState2[0],
      setCurrentSlide = _React$useState2[1];

  var subSlideData = getSubslideData(slideData);
  var nextSlide = getNextPrev('next', current);
  var prevSlide = getNextPrev('prev', current);
  var onWheel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    var delta = e.wheelDelta / 120;

    if (delta < 0) {
      setTimeout(function () {
        if (currentSlide < mainSlidesData.length - 1) {
          setCurrentSlide(currentSlide + 1);
        } else {
          setCurrentSlide(0);
        }
      }, 300);
    } else if (delta > 0) {
      setTimeout(function () {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        } else {
          setCurrentSlide(mainSlidesData.length - 1);
        }
      }, 300);
    }
  }, [currentSlide]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    window.addEventListener('mousewheel', onWheel);
    return function () {
      window.removeEventListener('mousewheel', onWheel);
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, slideData.map(function (slide, index) {
    return __jsx(SlidetextStyle, {
      key: index,
      current: currentSlide,
      index: index,
      next: nextSlide,
      prev: prevSlide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, slide.headline), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, slide.headline)));
  }))), __jsx(Slide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, slideData.map(function (slide, index) {
    return __jsx(SlideStyle, {
      background: slide.img,
      key: index,
      current: currentSlide,
      index: index,
      next: nextSlide,
      prev: prevSlide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })));
  }), __jsx(ShowBackground, {
    delay: "0.6s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, subSlideData.map(function (slide, index) {
    return __jsx(SlideStyle, {
      background: slide.img,
      key: index,
      current: currentSlide,
      index: index,
      next: nextSlide,
      prev: prevSlide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, slide.id)));
  }), __jsx(ShowBackground, {
    delay: "1.3s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))));
}
var SlideOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["to{top:-100%;}"]);
var ScaleKeyprame = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{transform:scale(1);}40%{transform:scale(1.2);}100%{transform:scale(1);}"]);
var ShowBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "scaleSlide__ShowBackground",
  componentId: "nj3721-0"
})(["position:absolute;top:0;left:0;right:0;height:100%;background:#1a1a1a;z-index:3;animation:", " 0.5s cubic-bezier(0,0,0.2,1) forwards;animation-delay:", ";"], SlideOut, function (props) {
  return props.delay;
});
var SlideStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "scaleSlide__SlideStyle",
  componentId: "nj3721-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;height:100%;display:none;", "  ", " ", "  z-index:3;overflow:hidden;>div{position:relative;height:inherit;", "  ", "  ", "  transition:all 0.5s cubic-bezier(0,0,0.2,1);>div{background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;height:inherit;", " transition:all 0.5s cubic-bezier(0,0,0.2,1);}}"], function (props) {
  return props.prev === props.index && 'z-index:0; display:block;';
}, function (props) {
  return props.current === props.index && 'z-index:2; display:block;';
}, function (props) {
  return props.next === props.index && 'z-index:0; display:block;';
}, function (props) {
  return props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;';
}, function (props) {
  return props.current === props.index && 'transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;';
}, function (props) {
  return props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;';
}, function (props) {
  return props.background;
}, function (props) {
  if (props.current === props.index) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["animation:", " 0.6s cubic-bezier(0,0,0.2,1);"], ScaleKeyprame);
  }
});
var Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "scaleSlide__Slide",
  componentId: "nj3721-2"
})(["margin:0 2rem;height:67%;display:flex;overflow:hidden;position:relative;z-index:0;>ul{height:100%;background:#000;position:relative;flex:0 0 60%;margin-right:6%;height:100%;&:first-child{margin-left:12%;}&:last-child{>li>div>div{opacity:0.4 !important;}}}"]);
var SlidetextStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "scaleSlide__SlidetextStyle",
  componentId: "nj3721-3"
})(["width:inherit;position:absolute;bottom:28%;left:2rem;z-index:4;overflow:hidden;display:none;", "  ", " ", "  >div{position:relative;height:inherit;text-shadow:0px 4px 5px rgba(0,0,0,0.6);padding-right:10px;>h3,>span{font-size:2.4rem;font-weight:700;color:#fff;line-height:1em;padding:0;margin:0;transition:all 0.5s cubic-bezier(0,0,0.2,1);}>h3{clip-path:polygon(0 50%,100% 50%,100% 100%,0 100%);transform:translate(-100%,0%) matrix(1,0,0,1,0,0);", "   ", "  ", "}>span{position:absolute;top:-1px;left:0;color:#fff;clip-path:polygon(0 0,100% 0,100% 50%,0 50%);transform:translate(100%,0%) matrix(1,0,0,1,0,0);", " ", "  ", "}}"], function (props) {
  return props.prev === props.index && 'z-index:0; display:block;';
}, function (props) {
  return props.current === props.index && 'z-index:2; display:block;';
}, function (props) {
  return props.next === props.index && 'z-index:0; display:block;';
}, function (props) {
  return props.prev === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;';
}, function (props) {
  return props.current === props.index && 'transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;';
}, function (props) {
  return props.next === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;';
}, function (props) {
  return props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;';
}, function (props) {
  return props.current === props.index && 'transform:translate3d(3px,0,0); opacity:1;';
}, function (props) {
  return props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;';
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=weekly3.js.0d9443e3013f2af5d402.hot-update.js.map