webpackHotUpdate("static/development/pages/weekly4.js",{

/***/ "./pages/weekly4.js":
/*!**************************!*\
  !*** ./pages/weekly4.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weekly4; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contentLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contentLayout */ "./components/contentLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/home/weekly-ui/pages/weekly4.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var buttonsData = [{
  text: 'on',
  theme: 'gray',
  grid: '2',
  value: 'c'
}, {
  text: 'c',
  theme: 'gray',
  grid: '2',
  value: 'c'
}, {
  text: 'ce',
  theme: 'gray',
  grid: '1',
  value: 'ce'
}, // {
//   text : '%',
//   theme : 'gray',
//   grid : '1',
//   value: '%'
// },
{
  text: '×',
  theme: 'gray',
  grid: '1',
  value: '*'
}, {
  text: '7',
  theme: 'white',
  grid: '1',
  value: '7'
}, {
  text: '8',
  theme: 'white',
  grid: '1',
  value: '8'
}, {
  text: '9',
  theme: 'white',
  grid: '1',
  value: '9'
}, {
  text: '÷',
  theme: 'gray',
  grid: '1',
  value: '/'
}, {
  text: '4',
  theme: 'white',
  grid: '1',
  value: '4'
}, {
  text: '5',
  theme: 'white',
  grid: '1',
  value: '5'
}, {
  text: '6',
  theme: 'white',
  grid: '1',
  value: '6'
}, {
  text: '－',
  theme: 'gray',
  grid: '1',
  value: '-'
}, {
  text: '1',
  theme: 'white',
  grid: '1',
  value: '1'
}, {
  text: '2',
  theme: 'white',
  grid: '1',
  value: '2'
}, {
  text: '3',
  theme: 'white',
  grid: '1',
  value: '3'
}, {
  text: '＋',
  theme: 'gray',
  grid: '1',
  value: '+'
}, {
  text: '0',
  theme: 'white',
  grid: '1',
  value: '0'
}, {
  text: '.',
  theme: 'white',
  grid: '1',
  value: '.'
}, {
  text: '=',
  theme: 'orange',
  grid: '2',
  value: '='
}];
function Weekly4(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      number = _React$useState2[0],
      setNumber = _React$useState2[1];

  var handleClick = function handleClick(e) {
    var value = e.currentTarget.value;
    console.log(number);

    if (value === '=') {
      try {
        setNumber(eval(number));
      } catch (e) {
        setNumber('ERROR');
      }
    } else if (value === 'c') {
      setNumber('');
    } else if (value === 'ce') {
      var newNumber = number.slice(0, -1);
      setNumber(newNumber);
    } else if (value === '%') {
      var _newNumber = number.slice(0, 1);

      console.log(_newNumber);
    } else {
      setNumber(number + value);
    }
  };

  console.log(number);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_contentLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefix: props.prefix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx(ContentBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(Calculator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(Calc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(Screen, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, number)), __jsx(Calcbutton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, buttonsData.map(function (button, index) {
    return __jsx(ButtonStyle, {
      key: index,
      type: "button",
      value: button.value,
      theme: button.theme,
      grid: button.grid,
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, button.text));
  })))))));
}
var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "weekly4__ButtonStyle",
  componentId: "sc-1elaocm-0"
})(["margin:2px;width:", ";height:66px;", " >div{width:", ";height:60px;margin:3px;line-height:64px;border-radius:12px;font-weight:bold;font-size:30px;}"], function (props) {
  return props.grid === '2' ? '136px' : '66px';
}, function (props) {
  switch (props.theme) {
    case 'gray':
      return 'background:linear-gradient(90deg, #191B16 0%, #6B7069 100%); >div{background:linear-gradient(90deg, #777D73 0%, #3A3F38 100%); color:#D8DCE0;}';

    case 'orange':
      return 'background:linear-gradient(270deg, #E48F2D 0%, #884504 100%); >div{background:linear-gradient(270deg, #B54C0A 0%, #EA8C41 100%); color:#D8DCE0;}';

    default:
      return 'background:linear-gradient(270deg, #FFFFF5 0%, #CCC6B2 100%); >div{background: linear-gradient(270deg, #FFFFF5 0%, #C8C3AD 0.01%, #FFFEF7 100%); color:#5c5c5c;}';
  }
}, function (props) {
  return props.grid === '2' ? '130px' : '60px';
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly4__Logo",
  componentId: "sc-1elaocm-1"
})(["position:absolute;top:87px;right:0;color:#fff;font-size:0.8rem;"]);
var Calcbutton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly4__Calcbutton",
  componentId: "sc-1elaocm-2"
})(["position:absolute;top:100px;left:0;right:0;bottom:0;background:linear-gradient(304.68deg,#79796D 0%,#E4E6DA 100%);padding:10px;border-radius:8px;>div:first-child{background:#151314;}"]);
var Calc = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly4__Calc",
  componentId: "sc-1elaocm-3"
})(["width:100%;height:100%;position:relative;"]);
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly4__Screen",
  componentId: "sc-1elaocm-4"
})(["position:absolute;top:0;left:0;right:0;width:100%;height:80px;background:#050505;>p{margin:0 auto;width:288px;text-align:right;padding:0;color:#B85709;font-size:40px;line-height:80px;}"]);
var Calculator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly4__Calculator",
  componentId: "sc-1elaocm-5"
})(["width:300px;height:500px;background:linear-gradient(304.68deg,#BDBEAC 0%,#BEBFAD 100%);border-radius:12px;overflow:hidden;padding:20px;"]);
var ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly4__ContentBox",
  componentId: "sc-1elaocm-6"
})(["position:absolute;display:flex;width:84vw;height:100%;background:linear-gradient(301deg,#F6F6F6 0%,#FFFFFF 100%);z-index:3;top:0;left:8vw;right:8vw;bottom:0;box-shadow:0 10px 20px rgba(0,0,0,.3);align-items:center;justify-content:center;"]);

/***/ })

})
//# sourceMappingURL=weekly4.js.e7b31ec058cf9bec906f.hot-update.js.map