webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
var _jsxFileName = "/Users/home/weekly-ui/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Home = function Home(props) {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPost = _useSelector.mainPost;

  var homelink =  false ? undefined : '/';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(HeaderBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(HeaderContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: homelink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Weekly UI"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "challenge,"))), __jsx(Intro, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Weekly UI \uCC4C\uB9B0\uC9C0\uB97C \uC2DC\uC791\uD558\uC600\uC2B5\uB2C8\uB2E4.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), "\uADF8 \uC774\uC720\uB294 UI \uB514\uC790\uC778\uC744 \uC5F0\uC2B5\uD558\uACE0 \uAC1C\uBC1C\uD558\uBA70 \uC2E4\uD5D8 \uBC0F \uB9CE\uC740 \uC2DC\uD589\uCC29\uC624\uB97C \uD1B5\uD574 \uACBD\uD5D8\uC744 \uC313\uAE30 \uC704\uD574\uC11C\uC785\uB2C8\uB2E4.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "\uC800\uB294 \uAE30\uC220\uC744 \uD5A5\uC0C1\uD558\uB294 \uAC00\uC7A5 \uBE60\uB978 \uBC29\uBC95\uC774 \uB9CE\uC740 \uAC83\uC744 \uB9CC\uB4E4\uACE0 \uACBD\uD5D8\uD574 \uBCF4\uB294 \uAC83\uC774\uB77C\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), "\uC774 \uC6B4\uB3D9\uC740 \uC800\uC758 \uC2DC\uAC01\uC801\uC778 \uB514\uC790\uC778 \uAE30\uC220 \uBC0F UI \uAC1C\uBC1C\uC744 \uD5A5\uC0C1\uD558\uBA70 \uD328\uD134\uC744 \uB9CC\uB4E4\uBA70 \uC65C \uADF8\uB7F0 \uD328\uD134\uC774 \uC0AC\uC6A9\uB418\uACE0 \uC788\uB294\uC9C0\uB97C \uC774\uD574\uD558\uB294 \uAC83\uC5D0\uB3C4 \uB9CE\uC740 \uB3C4\uC6C0\uC744 \uC904 \uAC83\uC774\uB77C\uACE0 \uBBFF\uACE0 \uC788\uC2B5\uB2C8\uB2E4."))), __jsx(ContentBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, mainPost.map(function (abc) {
    return __jsx("li", {
      key: abc.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/".concat(abc.page),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(LinkArrow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["ArrowRight"], {
      color: "#fff",
      size: 26,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), __jsx(Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, abc.title), __jsx("img", {
      src: "".concat(props.prefix).concat(abc.coverImg),
      alt: abc.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))));
  }))));
};

var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Label",
  componentId: "kvuy77-0"
})(["padding:20px;position:absolute;bottom:20px;left:20px;background:rgba(0,0,0,0.6);border-radius:100px;box-shadow:0px 4px 20px 0px rgba(61,68,78,0.1);z-index:1;"]);
var LinkArrow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__LinkArrow",
  componentId: "kvuy77-1"
})(["position:absolute;top:20px;right:20px;width:40px;height:40px;display:flex;background:rgba(0,0,0,0.6);border-radius:50%;align-items:center;justify-content:center;box-shadow:0px 4px 20px 0px rgba(61,68,78,0.1);z-index:1;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "pages__Intro",
  componentId: "kvuy77-2"
})(["position:relative;font-size:14px;line-height:2.2em;margin-top:50px;color:rgba(255,255,255,0.8);>img{position:absolute;top:-200px;right:0;z-index:-1;width:400px;}"]);
var ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ContentBox",
  componentId: "kvuy77-3"
})(["z-index:1;box-sizing:border-box;padding:100px;width:100%;margin:0 auto;position:relative;ul{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:40px;}li{line-height:0;color:#fff;border-radius:10px;position:relative;overflow:hidden;box-shadow:0px 20px 25px rgba(0,0,0,0.1),0px 10px 10px rgba(0,0,0,0.04);display:grid;position:relative;img{transition:all .5s;width:100%;height:auto;transform:scale(1);}>p{color:#333;}&:hover{img{transform:scale(1.02);}}}"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "pages__Input",
  componentId: "kvuy77-4"
})(["background:rgba(255,255,255,0.8);box-shadow:0px 10px 16px rgba(0,0,0,0.1),0px 4px 6px rgba(0,0,0,0.06);border-radius:4px;border:none;width:100%;padding:14px 24px;font-size:16px;transition:all 0.4s;box-sizing:border-box;&:focus{outline:none;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__Logo",
  componentId: "kvuy77-5"
})(["display:inline-block;color:rgba(255,255,255,1);font-size:66px;padding:0;margin:0;font-weight:300;>strong{font-weight:700;}"]);
var HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeaderContent",
  componentId: "kvuy77-6"
})(["box-sizing:border-box;padding:100px;width:100%;margin:0 auto;position:relative;z-index:1;"]);
var HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeaderBox",
  componentId: "kvuy77-7"
})(["box-sizing:border-box;position:relative;width:100%;height:420px;&:after{content:'';width:200vw;height:150vh;background:radial-gradient(50.15% 32.48% at 50% 59.49%,rgba(255,255,255,0.13) 0%,rgba(255,255,255,0) 100%),#297FFA;box-shadow:0px 4px 67px 20px rgba(61,68,78,0.57);border-radius:50%;position:absolute;left:50vw;top:-5vh;transform:translate(-50%,-50%);}"]);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.582dac3105943391cda4.hot-update.js.map