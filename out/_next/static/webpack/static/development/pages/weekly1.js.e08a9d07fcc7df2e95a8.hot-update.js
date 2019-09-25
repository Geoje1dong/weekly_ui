webpackHotUpdate("static/development/pages/weekly1.js",{

/***/ "./pages/weekly1.js":
/*!**************************!*\
  !*** ./pages/weekly1.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weekly1; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contentLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contentLayout */ "./components/contentLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/input */ "./components/ui/input.js");
/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/checkbox */ "./components/ui/checkbox.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/button */ "./components/ui/button.js");

var _jsxFileName = "/Users/home/weekly-ui/pages/weekly1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Weekly1(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      change = _React$useState2[0],
      setChange = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('ready'),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      animation = _React$useState4[0],
      setAnimation = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      dataWidth = _React$useState6[0],
      setDataWidth = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      infomationWidth = _React$useState8[0],
      setInfomationWidth = _React$useState8[1];

  var contentWidth = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var getChangeTimeout = function getChangeTimeout() {
    setTimeout(function () {
      setChange(function (prev) {
        return !prev;
      });
    }, 200);
  };

  var onChang = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    var contentWidth1 = contentWidth.current.clientWidth;
    var dataWidthSize = contentWidth1 * 66 / 100 - 1;
    var widthSize2 = contentWidth1 * 34 / 100;
    setDataWidth(dataWidthSize);
    setInfomationWidth(widthSize2);

    if (animation === 'ready') {
      setAnimation('in');
    } else if (animation === 'in') {
      setAnimation('out');
    } else if (animation === 'out') {
      setAnimation('in');
    }

    getChangeTimeout();
  }, [change, dataWidth, infomationWidth]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_contentLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefix: props.prefix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(ContentBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(SignUpBox, {
    ref: contentWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(DataBox, {
    animation: animation,
    change: change,
    infomationWidth: infomationWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, change ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Create Account"), __jsx(LoginIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Facebook"], {
      color: "#fff",
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    theme: "ghost",
    shape: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Linkedin"], {
      color: "#fff",
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }),
    theme: "ghost",
    shape: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["GitHub"], {
      color: "#fff",
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    theme: "ghost",
    shape: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "or use your email for create account"), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["User"], {
      color: "rgba(255,255,255,0.5)",
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }),
    placeholder: "Name",
    theme: "dark" // value="123"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Mail"], {
      color: "rgba(255,255,255,0.5)",
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }),
    placeholder: "Email",
    theme: "dark" // value="123"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "password",
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Lock"], {
      color: "rgba(255,255,255,0.5)",
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }),
    placeholder: "Password",
    theme: "dark" // value="123"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(TwoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Remember me",
    theme: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Forgot Password?")), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: "yellow",
    shape: "round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Sign In")) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Sign in to Account"), __jsx(LoginIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Facebook"], {
      color: "#fff",
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }),
    theme: "ghost",
    shape: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Linkedin"], {
      color: "#fff",
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }),
    theme: "ghost",
    shape: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["GitHub"], {
      color: "#fff",
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }),
    theme: "ghost",
    shape: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "or use your email account"), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Mail"], {
      color: "rgba(255,255,255,0.5)",
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }),
    placeholder: "Email",
    theme: "dark" // value="123"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "password",
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Lock"], {
      color: "rgba(255,255,255,0.5)",
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }),
    placeholder: "Password",
    theme: "dark" // value="123"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(TwoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Remember me",
    theme: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Forgot Password?")), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: "yellow",
    shape: "round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Sign In"))), __jsx(InfomationBox, {
    animation: animation,
    change: change,
    dataWidth: dataWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, change ? __jsx(InfomationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Hello, Drinkerz"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "if you already have an accountsign ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), "in We've missed you!"), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onChang,
    theme: "ghost",
    shape: "round",
    margin: "30px 0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Sign In")) : __jsx(InfomationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Hello, Drinkerz"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "fill up personal infomation and start", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), "beer tour with us"), __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onChang,
    theme: "ghost",
    shape: "round",
    margin: "30px 0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Sign Up"))), __jsx(BeerImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("img", {
    src: "https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))));
}
var InfomationContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__InfomationContent",
  componentId: "sc-8hj32m-0"
})(["position:relative;z-index:2;text-align:center;color:rgba(255,255,255,0.8);>h1{color:#fff;}>button{&:hover{background:#F2B918 !important;border-color:#F2B918 !important;}}"]);
var BeerImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__BeerImg",
  componentId: "sc-8hj32m-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:linear-gradient(0deg,rgba(33,33,33,0.25),rgba(33,33,33,0.25));overflow:hidden;background-size:cover;z-index:-1;>img{position:relative;}"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "weekly1__P",
  componentId: "sc-8hj32m-2"
})(["margin:30px 0 20px;"]);
var LoginIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__LoginIcon",
  componentId: "sc-8hj32m-3"
})(["display:flex;justify-content:center;>p{display:block;}>button{margin:0 10px;transition:all .3s;>svg{fill:#fff;}&:hover{>svg{fill:#1c1c1c;stroke:#1c1c1c;}}}"]);
var TwoBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__TwoBox",
  componentId: "sc-8hj32m-4"
})(["display:flex;margin:2rem 0;>p{margin:0 0 0 auto;}"]);
var fadeInOutRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{opacity:1;transform:translateX(0px);}50%{opacity:0;transform:translateX(100px);}100%{opacity:1;transform:translateX(0px);}"]);
var fadeInOutLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{opacity:1;transform:translateX(0px);}50%{opacity:0;transform:translateX(-100px);}100%{opacity:1;transform:translateX(0px);}"]); // ${props => props.animation &&`
//     animation: ${fadeInOut} 2s 1s infinite linear alternate;
//     `}

var DataBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__DataBox",
  componentId: "sc-8hj32m-5"
})(["", " transition:all 0.8s;width:66%;position:absolute;background:#3a3a3c;top:0;left:0;bottom:0;display:flex;align-items:center;justify-content:center;>div{transition:all 0.5s;color:#fff;text-align:center;width:50%;>span{margin-top:2rem;}}"], function (props) {
  if (props.animation === 'in') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["transform:translateX(", "px);>div{animation:", " 0.4s linear;}"], props.infomationWidth, fadeInOutLeft);
  } else if (props.animation === 'out') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["transform:translateX(0%);>div{animation:", " 0.4s linear;}"], fadeInOutRight);
  }
});
var InfomationBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__InfomationBox",
  componentId: "sc-8hj32m-6"
})(["", " display:flex;align-items:center;justify-content:center;transition:all 0.8s;background:rgba(28,28,28,0.7);width:34%;position:absolute;right:0;top:0;bottom:0;"], function (props) {
  if (props.animation === 'in') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["transform:translateX(-", "px);>div{animation:", " 0.4s linear;}"], props.dataWidth, fadeInOutRight);
  } else if (props.animation === 'out') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["transform:translateX(0%);>div{animation:", " 0.4s linear;}"], fadeInOutLeft);
  }
});
var SignUpBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__SignUpBox",
  componentId: "sc-8hj32m-7"
})(["transition:all 0.5s;width:80%;height:70%;border-radius:8px;display:block;position:relative;overflow:hidden;"]);
var ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly1__ContentBox",
  componentId: "sc-8hj32m-8"
})(["position:absolute;display:flex;width:84vw;height:100%;background:linear-gradient(180deg,#ffd04c 0%,#F29B18 100%),#F2B918;z-index:3;top:0;left:8vw;right:8vw;bottom:0;box-shadow:0 0 8px rgba(0,0,0,.6);align-items:center;justify-content:center;"]);

/***/ })

})
//# sourceMappingURL=weekly1.js.e08a9d07fcc7df2e95a8.hot-update.js.map