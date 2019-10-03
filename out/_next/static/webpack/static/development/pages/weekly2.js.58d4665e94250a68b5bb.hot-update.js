webpackHotUpdate("static/development/pages/weekly2.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/home/weekly-ui/components/card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function getPrintNumber(number) {
  var nextNumber = number;
  var maxLength = 16;

  while (nextNumber.length < maxLength) {
    nextNumber += '•';
  }

  for (var i = 1; i < maxLength / 4; i++) {
    var space_index = i * 4 + (i - 1);
    nextNumber = "".concat(nextNumber.slice(0, space_index), " ").concat(nextNumber.slice(space_index));
  }

  return nextNumber;
}

function getPrintExpiry(expiry) {
  var month = '';
  var year = '';

  if (expiry.includes('/')) {
    var _expiry$split = expiry.split('/');

    var _expiry$split2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_expiry$split, 2);

    month = _expiry$split2[0];
    year = _expiry$split2[1];
  } else if (expiry.length) {
    month = expiry.substr(0, 2);
    year = expiry.substr(2, 6);
  }

  while (month.length < 2) {
    month += '•';
  }

  while (year.length < 2) {
    year += '•';
  }

  return "".concat(month, "/").concat(year);
}

function getPrintSpace(value, lengthType) {
  while (value.length < lengthType) {
    value += '•';
  }

  return value;
}

function getPrintCompany(comapny) {
  if (comapny === 'bc') {
    return __jsx("img", {
      src: "https://i.ibb.co/8g8cfNG/bc.png",
      alt: "bc",
      border: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    });
  } else if (comapny === 'hyundai') {
    return __jsx("img", {
      src: "https://i.ibb.co/XJS4PRS/hyundai.png",
      alt: "hyundai",
      border: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });
  } else if (comapny === 'kb') {
    return __jsx("img", {
      src: "https://i.ibb.co/KxTKkpZ/kb.png",
      alt: "kb",
      border: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  } else if (comapny === 'lottecard') {
    return __jsx("img", {
      src: "https://i.ibb.co/DL1SLPn/lottecard.png",
      alt: "lottecard",
      border: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
  } else if (comapny === 'samsung') {
    return __jsx("img", {
      src: "https://i.ibb.co/t3WhvdM/samsung.png",
      alt: "samsung",
      border: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    });
  } else if (comapny === 'shinhan') {
    return __jsx("img", {
      src: "https://i.ibb.co/PtyVMcS/shinhan.png",
      alt: "shinhan",
      border: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    });
  }
}

function Card(_ref) {
  var number = _ref.number,
      focus = _ref.focus,
      name = _ref.name,
      cvc = _ref.cvc,
      expiry = _ref.expiry,
      password = _ref.password,
      cardCompany = _ref.cardCompany;
  var cardNumber = getPrintNumber(number);
  var cardExpiry = getPrintExpiry(expiry);
  var cardCvc = getPrintSpace(cvc, 3);
  var cardPassword = getPrintSpace(password, 2);
  var Company = getPrintCompany(cardCompany);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(CardStyle, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(CardFront, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(CardBackground, {
    company: cardCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(CardCompany, {
    focus: focus,
    company: cardCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, Company), __jsx(Npay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("img", {
    src: "https://i.ibb.co/gTxQVLQ/npay.png",
    alt: "npay",
    border: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(CardNumber, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, cardNumber), __jsx(CardName, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, name ? name : 'Your Name Here'), __jsx(Cardexpiry, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, cardExpiry)), __jsx(CardBack, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(CardBackground, {
    company: cardCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(Magnetic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(Bar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(Cardcvc, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "cvc"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, cardCvc)), __jsx(CardPassword, {
    focus: focus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "\uCE74\uB4DC \uBE44\uBC00\uBC88\uD638 \uC55E \uB450\uC790\uB9AC"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, cardPassword, "\u2022\u2022")))));
}
var CardBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardBackground",
  componentId: "pc0y81-0"
})(["", "   position:absolute;left:", ";top:-60%;transform:rotate(25deg);transition:all 0.5s ease-out;height:200%;width:150%;"], function (props) {
  switch (props.company) {
    case 'hyundai':
      return 'background:linear-gradient(135deg, rgb(30, 136, 229) 0%, rgb(42, 159, 253) 43%, rgb(30, 136, 229) 100%);';

    case 'kb':
      return 'background:linear-gradient(to right,#FCDF00,#FBBA00);';

    case 'bc':
      return 'background:linear-gradient(to right,#ef4651,#e0367d);';

    case 'samsung':
      return 'background:linear-gradient(to right,#0080FF,#00C2FF);';

    case 'lottecard':
      return 'background:linear-gradient(to right,#6D45C2,#F134B7);';

    case 'shinhan':
      return 'background:linear-gradient(to right, #0096d6, #5b3eb3);';

    default:
      return '';
  }
}, function (props) {
  return props.company ? '-22%' : '-170%';
});
var Npay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__Npay",
  componentId: "pc0y81-1"
})(["position:absolute;top:10%;left:10%;filter:drop-shadow(rgba(0,0,0,0.23) 0.8px -0.7px 4px);transform:translateZ(30px);"]);
var Cardexpiry = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__Cardexpiry",
  componentId: "pc0y81-2"
})(["opacity:", ";position:absolute;right:10%;bottom:10%;transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;"], function (props) {
  return props.focus === 'cardExpiry' ? '1' : '0.5';
});
var CardCompany = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardCompany",
  componentId: "pc0y81-3"
})(["transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;position:absolute;top:10%;right:", ";filter:", ";>img{height:34px;width:auto;}"], function (props) {
  return props.company === 'shinhan' ? '5%' : '10%';
}, function (props) {
  return props.company === 'kb' ? 'none' : 'drop-shadow(rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px)';
});
var Cardcvc = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__Cardcvc",
  componentId: "pc0y81-4"
})(["position:absolute;top:48%;left:70%;height:30px;opacity:", ";transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;display:flex;align-items:center;>span{font-weight:200;font-size:11px;color:rgba(255,255,255,0.6);margin-right:4px;line-height:1em;}>p{margin:0;padding:0;line-height:1em;}"], function (props) {
  return props.focus === 'cardCvc' ? '1' : '0.5';
});
var CardPassword = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardPassword",
  componentId: "pc0y81-5"
})(["opacity:", ";transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;display:flex;align-items:center;position:absolute;top:67%;left:5%;>span{font-weight:200;font-size:11px;color:rgba(255,255,255,0.6);margin-right:4px;line-height:1em;}>p{margin:0;padding:0;line-height:1em;}"], function (props) {
  return props.focus === 'cardPassword' ? '1' : '0.5';
});
var CardName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardName",
  componentId: "pc0y81-6"
})(["opacity:", ";position:absolute;bottom:10%;left:10%;transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;width:190px;text-overflow:ellipsis;overflow:hidden;"], function (props) {
  return props.focus === 'cardName' ? '1' : '0.5';
});
var CardNumber = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardNumber",
  componentId: "pc0y81-7"
})(["transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;position:absolute;left:0;right:0;text-align:center;top:45%;letter-spacing:0.06em;text-size-adjust:100%;font-size:20px;opacity:", ";"], function (props) {
  return props.focus === 'cardNumber' ? '1' : '0.5';
});
var CardFront = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardFront",
  componentId: "pc0y81-8"
})(["background:linear-gradient(301deg,#828282 0%,#cecccc 100%);position:absolute;width:100%;height:100%;z-index:1;backface-visibility:hidden;border-radius:24px;overflow:hidden;"]);
var CardBack = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardBack",
  componentId: "pc0y81-9"
})(["background:linear-gradient(301deg,#828282 0%,#cecccc 100%);position:absolute;width:100%;height:100%;transform:rotateY(180deg);border-radius:24px;overflow:hidden;"]);
var Magnetic = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__Magnetic",
  componentId: "pc0y81-10"
})(["position:absolute;top:10%;width:100%;height:50px;background:rgba(0,0,0,0.8);"]);
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__Bar",
  componentId: "pc0y81-11"
})(["position:absolute;width:60%;height:30px;top:48%;background:rgba(255,255,255,0.8);left:5%;"]);
var CardStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "card__CardStyle",
  componentId: "pc0y81-12"
})(["font-family:Consolas,Courier,monospace;font-wegiht:bold;position:relative;font-size:16px;width:320px;height:200px;box-shadow:0px 4px 20px 0px rgba(0,0,0,0.2);margin:0 auto;border-radius:24px;box-sizing:border-box;color:#fff;transform-style:preserve-3d;perspective:1000;transition:all 0.4s linear;transform:", ""], function (props) {
  return props.focus === 'cardCvc' || props.focus === 'cardPassword' ? 'rotateY(180deg)' : 'rotateY(0deg);';
});

/***/ })

})
//# sourceMappingURL=weekly2.js.58d4665e94250a68b5bb.hot-update.js.map