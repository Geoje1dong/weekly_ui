webpackHotUpdate("static/development/pages/weekly2.js",{

/***/ "./pages/weekly2.js":
/*!**************************!*\
  !*** ./pages/weekly2.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weekly2; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contentLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contentLayout */ "./components/contentLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/input */ "./components/ui/input.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/button */ "./components/ui/button.js");

var _jsxFileName = "/Users/home/weekly-ui/pages/weekly2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function clearNumber(value) {
  return value.replace(/\D+/g, "");
}

function getPrintCompany(number) {
  var companyNumber = number.slice(0, 2);
  var cardCompany = '';

  if (companyNumber === '55') {
    cardCompany = 'hyundai';
  } else if (companyNumber === '64') {
    cardCompany = 'bc';
  } else if (companyNumber === '44') {
    cardCompany = 'shinhan';
  } else if (companyNumber === '35') {
    cardCompany = 'kb';
  } else if (companyNumber === '37') {
    cardCompany = 'lottecard';
  } else if (companyNumber === '94') {
    cardCompany = 'samsung';
  }

  return cardCompany;
}

function Weekly2(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      cardNumber = _React$useState2[0],
      setCardNumber = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      cardName = _React$useState4[0],
      setCardName = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      cardCvc = _React$useState6[0],
      setCardCvc = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      cardExpiry = _React$useState8[0],
      setCardExpiry = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      cardFocus = _React$useState10[0],
      setCardFocus = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState11, 2),
      cardPassword = _React$useState12[0],
      setCardPassword = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('Number Random'),
      _React$useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState13, 2),
      buttonName = _React$useState14[0],
      setButtonName = _React$useState14[1];

  var cardCompany = getPrintCompany(cardNumber);

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (cardNumber) {
      setButtonName('Number Random');
      setCardNumber('');
    } else {
      setButtonName('Number Reset');
      var _cardNumber = ['5523123456780000', '6451123456780000', '4473123456780000', '3569123456780000', '3762123456780000', '9410123456780000'];
      var random = Math.floor(Math.random() * 5) + 1;
      setCardNumber(_cardNumber[random]);
    }
  };

  var handleInputFocus = function handleInputFocus(e) {
    setCardFocus(e.target.name);
  };

  var handleInputChange = function handleInputChange(e) {
    if (e.target.name === 'cardNumber') {
      var newValue = clearNumber(e.target.value);
      setCardNumber(newValue);
    } else if (e.target.name === 'cardName') {
      setCardName(e.target.value.toUpperCase());
    } else if (e.target.name === 'cardExpiry') {
      var _newValue = clearNumber(e.target.value);

      if (_newValue.length >= 3) {
        _newValue = "".concat(_newValue.slice(0, 2), "/").concat(_newValue.slice(2, 4));
      }

      setCardExpiry(_newValue);
    } else if (e.target.name === 'cardCvc') {
      var _newValue2 = clearNumber(e.target.value);

      setCardCvc(_newValue2);
    } else if (e.target.name === 'cardPassword') {
      var _newValue3 = clearNumber(e.target.value);

      setCardPassword(_newValue3);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_contentLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefix: props.prefix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(ContentBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["CreditCard"], {
    color: "#fff",
    size: 28,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    number: cardNumber,
    name: cardName,
    cvc: cardCvc,
    expiry: cardExpiry,
    focus: cardFocus,
    password: cardPassword,
    cardCompany: cardCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(Grid3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(RandomBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: "dark",
    size: "xs",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, buttonName), __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "55., 44., 64., 35., 37., 94."), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "tel",
    name: "cardNumber",
    value: cardNumber,
    placeholder: "Card Number",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    maxlength: "16",
    label: "Card Number",
    margin: "0 0 24px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(CardCompany, {
    company: cardCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, cardCompany && __jsx("img", {
    src: "static/img/card/".concat(cardCompany, ".png"),
    alt: "".concat(cardCompany, " logo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }))), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "text",
    name: "cardName",
    value: cardName,
    placeholder: "Card Name",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    label: "Card Name",
    margin: "0 0 24px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx(Grid3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "tel",
    name: "cardExpiry",
    value: cardExpiry,
    placeholder: "Month/Year",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    maxlength: "5",
    label: "Expiration (mm/yy)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "tel",
    name: "cardCvc",
    value: cardCvc,
    placeholder: "CVC",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    maxlength: "3",
    label: "cvc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "tel",
    name: "cardPassword",
    value: cardPassword,
    placeholder: "\uC55E \uB450\uC790\uB9AC",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    maxlength: "2",
    label: "\uD328\uC2A4\uC6CC\uB4DC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })))))));
}
var CardCompany = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly2__CardCompany",
  componentId: "sc-3birfp-0"
})(["position:absolute;bottom:35px;right:10px;>img{height:30px;}"]);
var RandomBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "weekly2__RandomBox",
  componentId: "sc-3birfp-1"
})(["position:relative;width:100%;>button{position:absolute;right:10px;top:-21px;z-index:2;}>em{font-size:0.7em;position:absolute;right:10px;top:0px;opacity:0.8;}"]);
var Grid3 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly2__Grid3",
  componentId: "sc-3birfp-2"
})(["display:flex;margin:0 -8px;>span{padding:0 8px;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "weekly2__Form",
  componentId: "sc-3birfp-3"
})(["margin-top:70px;"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly2__Box",
  componentId: "sc-3birfp-4"
})(["position:relative;display:flex;width:758px;height:586px;border-radius:24px;box-shadow:0 0 8px rgba(0,0,0,.6);overflow:hidden;>div:first-child{width:10%;display:flex;justify-content:center;background:#19212E;>svg{margin-top:40px;}}>div:last-child{width:90%;background:#fff;padding:40px;>div{margin-top:40px;}}"]);
var ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "weekly2__ContentBox",
  componentId: "sc-3birfp-5"
})(["position:absolute;display:flex;width:84vw;height:100%;background:linear-gradient(301deg,#F6F6F6 0%,#FFFFFF 100%);z-index:3;top:0;left:8vw;right:8vw;bottom:0;box-shadow:0 10px 20px rgba(0,0,0,.3);align-items:center;justify-content:center;"]);

/***/ })

})
//# sourceMappingURL=weekly2.js.8ad2e8caec42fda376fb.hot-update.js.map