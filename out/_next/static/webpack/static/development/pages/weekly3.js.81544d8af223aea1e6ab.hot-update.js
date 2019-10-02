webpackHotUpdate("static/development/pages/weekly3.js",{

/***/ "./components/ui/targetLink.js":
/*!*************************************!*\
  !*** ./components/ui/targetLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TargetLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/home/weekly-ui/components/ui/targetLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TargetLink(props, _ref) {
  var theme = _ref.theme,
      shape = _ref.shape,
      icon = _ref.icon,
      onClick = _ref.onClick,
      margin = _ref.margin;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.icon ? __jsx(IconButton, {
    href: props.to,
    shape: props.shape,
    target: props.target,
    theme: props.theme,
    margin: props.margin,
    size: props.size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.icon, props.children) : __jsx(TextButton, {
    href: props.to,
    shape: props.shape,
    target: props.target,
    theme: props.theme,
    margin: props.margin,
    size: props.size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children));
}
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "targetLink__IconButton",
  componentId: "sc-113wkn9-0"
})(["", " ", " ", " margin:", ";box-shadow:0 2px 0 rgba(0,0,0,0.045);text-shadow:0 -1px 0 rgba(0,0,0,0.12);transition:all .3s;cursor:pointer;font-weight:600;&:hover{outline:none;}"], function (props) {
  switch (props.shape) {
    case 'circle':
      return 'border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center;';

    case 'round':
      return 'border-radius:100px; min-width:220px; padding: 20px 24px 20px 60px;';

    case 'square':
      return 'border-radius:0; padding: 20px 24px 20px 60px;';

    default:
      return 'border-radius:4px; padding: 20px 24px 20px 60px;';
  }
}, function (props) {
  switch (props.theme) {
    case 'dark':
      return 'background:#000; color:rgba(255,255,255, 0.8);';

    case 'yellow':
      return 'background:#F2B918; color:#322B1B; &:hover{background:#fdca39;} &:focus{background:#fdca39;}';

    case 'ghost':
      return 'background:none; color:#fff; border:1px solid #fff; &:hover{background:rgba(255,255,255, 0.9); color:#000;}';

    default:
      return 'background:#1890ff; color:rgba(255,255,255,0.8);';
  }
}, function (props) {
  switch (props.size) {
    case '':
      return '';

    default:
      return '';
  }
}, function (props) {
  return props.margin ? props.margin : '0px';
});
var TextButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "targetLink__TextButton",
  componentId: "sc-113wkn9-1"
})(["", " ", " ", " margin:", ";font-weight:600;box-shadow:0 2px 0 rgba(0,0,0,0.045);text-shadow:0 -1px 0 rgba(0,0,0,0.12);transition:all .3s;cursor:pointer;&:hover,&:focus{outline:none;}"], function (props) {
  switch (props.shape) {
    case 'circle':
      return 'border-radius:50%;';

    case 'round':
      return 'border-radius:100px; min-width:220px;';

    case 'square':
      return 'border-radius:0;';

    default:
      return 'border-radius:4px;';
  }
}, function (props) {
  switch (props.theme) {
    case 'dark':
      return 'background:#000; color:rgba(255,255,255, 0.8);';

    case 'yellow':
      return 'background:#F2B918; color:#322B1B; &:hover{background:#fdca39;} &:focus{background:#fdca39;}';

    case 'ghost':
      return 'background:none; color:#fff; border:1px solid #fff; &:hover{background:rgba(255,255,255, 0.9); color:#000;}';

    default:
      return 'background:#1890ff; color:rgba(255,255,255,0.8);';
  }
}, function (props) {
  switch (props.size) {
    case 'xs':
      return 'padding:4px 8px; font-size:0.6rem;';

    default:
      return 'padding:20px; font-size:1rem;';
  }
}, function (props) {
  return props.margin ? props.margin : '0px';
});

/***/ })

})
//# sourceMappingURL=weekly3.js.81544d8af223aea1e6ab.hot-update.js.map