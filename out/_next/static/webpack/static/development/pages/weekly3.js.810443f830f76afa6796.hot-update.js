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
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");

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
  var slideData = _ref.slideData;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      currentSlide = _React$useState2[0],
      setCurrentSlide = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      mouseOver = _React$useState4[0],
      setMouseOver = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      open = _React$useState6[0],
      setOpen = _React$useState6[1];

  var subSlideData = getSubslideData(slideData);
  var nextSlide = getNextPrev('next', currentSlide, slideData);
  var prevSlide = getNextPrev('prev', currentSlide, slideData);

  var handleClick = function handleClick() {
    setOpen(!open);
  };

  var handleMouseOver = function handleMouseOver() {
    setMouseOver(!mouseOver);
  };

  var nextSlideClick = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    if (currentSlide < slideData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }, [currentSlide]);
  var onWheel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    var delta = e.wheelDelta / 120;

    if (delta < 0) {
      setTimeout(function () {
        if (currentSlide < slideData.length - 1) {
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
          setCurrentSlide(slideData.length - 1);
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
      lineNumber: 90
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, slideData.map(function (slide, index) {
    return __jsx(SlidetextStyle, {
      key: index,
      current: currentSlide,
      index: index,
      next: nextSlide,
      prev: prevSlide,
      mouseOver: mouseOver,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, slide.headline), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, slide.headline)));
  }))), __jsx(Slide, {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
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
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOver,
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })));
  }), __jsx(ShowBackground, {
    delay: "0.6s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
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
      onClick: nextSlideClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, slide.id)));
  }), __jsx(ShowBackground, {
    delay: "1.3s",
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, open && __jsx(OpenBox, {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("dl", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "headline"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, slideData[currentSlide].headline)), __jsx("dl", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "description"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, slideData[currentSlide].description)), slideData[currentSlide].shop && __jsx("dl", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "shop"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(ALink, {
    target: "_blank",
    href: slideData[currentSlide].shop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"], {
    size: 14,
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), "Add to Cart"))))))));
}
var TextPadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["to{opacity:1;transform:translateY(0px);}"]);
var SlideOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["to{top:-100%;}"]);
var ScaleKeyprame = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{transform:scale(1);}40%{transform:scale(1.3);}100%{transform:scale(1);}"]);
var ALink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "scaleSlide__ALink",
  componentId: "nj3721-0"
})(["background:none;color:#rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.6);box-shadow:0 2px 0 rgba(0,0,0,0.045);text-shadow:0 -1px 0 rgba(0,0,0,0.12);transition:all .3s;cursor:pointer;font-weight:inherit;display:inline-block;padding:4px 8px;font-size:inherit;border-radius:4px;>svg{margin-right:8px;}&:hover{outline:none;background:rgba(255,255,255,0.9);color:#000;>svg{stroke:rgba(0,0,0,0.9);}}"]);
var OpenBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "scaleSlide__OpenBox",
  componentId: "nj3721-1"
})(["width:360px;position:absolute;bottom:0;left:0;>dl{margin-top:20px;opacity:0;transform:translateY(20px);animation:", " 0.4s cubic-bezier(0,0,0.2,1) forwards;animation-delay:0.4s;>dt{font-size:0.6rem;font-weight:200;color:rgba(255,255,255,0.2);padding:0;margin:0;}>dd{font-size:0.82rem;font-weight:400;padding-top:8px;margin:0;word-break:keep-all;}}"], TextPadeIn);
var ShowBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "scaleSlide__ShowBackground",
  componentId: "nj3721-2"
})(["position:absolute;top:0;left:0;right:0;height:100%;background:#1a1a1a;z-index:3;animation:", " 0.5s cubic-bezier(0,0,0.2,1) forwards;animation-delay:", ";", " transition:all 0.4s cubic-bezier(0,0,0.2,1);"], SlideOut, function (props) {
  return props.delay;
}, function (props) {
  return props.open && 'transform:translateY(100%);';
});
var SlideStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "scaleSlide__SlideStyle",
  componentId: "nj3721-3"
})(["position:absolute;top:0;left:0;right:0;bottom:0;height:100%;display:none;", "  ", " ", "  z-index:3;overflow:hidden;>div{position:relative;height:inherit;", "  ", "  ", "  transition:all 0.6s cubic-bezier(0,0,0.2,1);>div{background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;height:inherit;", "}}"], function (props) {
  return props.prev === props.index && 'z-index:0; display:block;';
}, function (props) {
  return props.current === props.index && 'z-index:2; display:block;';
}, function (props) {
  return props.next === props.index && 'z-index:3; display:block;';
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
  componentId: "nj3721-4"
})(["margin:0 2rem;height:calc(100% - 120px);display:flex;overflow:hidden;position:relative;z-index:0;align-items:flex-end;>ul{height:500px;background:#000;position:relative;flex:0 0 55%;margin-right:4%;&:first-child{margin-left:12%;", " transition:height 0.5s cubic-bezier(0,0,0.2,1);transition-delay:0.4s;}&:last-child{>li>div>div{opacity:0.4 !important;}}}"], function (props) {
  return props.open && 'height:600px; ';
});
var SlidetextStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "scaleSlide__SlidetextStyle",
  componentId: "nj3721-5"
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
  return props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0) !important; opacity:0;';
}, function (props) {
  return props.current === props.index && props.mouseOver ? 'transform:translate3d(0,0,0); opacity:1;' : 'transform:translate3d(3px,0,0); opacity:1;';
}, function (props) {
  return props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0) !important; opacity:0;';
});

/***/ })

})
//# sourceMappingURL=weekly3.js.810443f830f76afa6796.hot-update.js.map