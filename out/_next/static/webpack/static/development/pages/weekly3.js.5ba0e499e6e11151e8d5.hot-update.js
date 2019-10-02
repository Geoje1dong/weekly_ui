webpackHotUpdate("static/development/pages/weekly3.js",{

/***/ "./pages/weekly3.js":
/*!**************************!*\
  !*** ./pages/weekly3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weekly3; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contentLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/contentLayout */ "./components/contentLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_scaleSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scaleSlide */ "./components/scaleSlide.js");
var _jsxFileName = "/Users/home/weekly-ui/pages/weekly3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var mainSlidesData = [{
  first: 0,
  headline: 'LEGIT GOONS [ROCKSTAR GAMES]',
  description: '게임 속 가상현실, 모든 게 합법화 되는 곳, 동경의 Thug life',
  img: 'http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/193/351/81193351_1556072456234_1_600x600.JPG',
  shop: 'https://smartstore.naver.com/legitgoons/products/4518806026'
}, {
  headline: '최우수 랩&힙합 음반 뱃사공 [탕아]',
  description: '[탕아]는 그동안 뱃사공이 리짓군즈 안에서 보였던 매력과는 또 다른 매력을 한껏 느낄 수 있는 앨범이다. 그는 일상으로부터 온 가사를 그루브한 베이스라인과 락 적인 요소가 가미된 기타 리프 안에서 유려한 랩 실력으로 풀어냈다. 동시에 각 곡마다 확실한 개성을 부여하는데도 성공했다. ‘로데오’에서는 사이키델릭 사운드를, ‘외롭지만 괜찮아’에서는 진득한 기타 솔로와 코러스 라인으로, ‘우리집’에서는 밴드 사운드 위에 덤덤하지만, 애정이 느껴지는 ‘집’에 대한 이야기를 얹었다. 비슷한 스타일로 찍어 낸듯한 많은 힙합 앨범처럼 자극적이지는 않지만, 2018년 많은 이들에게 확실히 각인된 작품이다.',
  img: 'http://koreanmusicawards.com/2019/kma20198263/wp-content/uploads/2019/01/20190123_021824.jpg',
  shop: 'http://www.hiphopplayastore.com/shop/goods/goods_view.php?goodsno=64683&category=013001'
}, {
  headline: '2019 "BADTHANGS" 1st Collection',
  description: '리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
  img: 'https://static.wixstatic.com/media/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.webp',
  shop: 'https://smartstore.naver.com/legitgoons/products/4111853981'
}, {
  headline: '2019 "BADTHANGS" 1st Collection',
  description: '리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
  img: 'https://static.wixstatic.com/media/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.webp',
  shop: 'https://smartstore.naver.com/legitgoons/products/4112006476'
}, {
  headline: '2019 "BADTHANGS" 1st Collection',
  description: '리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
  img: 'https://static.wixstatic.com/media/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.webp',
  shop: 'https://smartstore.naver.com/legitgoons/products/4111811631'
}, {
  headline: '3집 Junk Drunk Love',
  description: '늦여름 다시 찾아온 리짓군즈의 세 번째 컴필레이션 [Junk, Drunk, Love]는 리짓군즈 크루의 단출한 일상과 언더그라운드 뮤지션들의 희망을 오롯이 담아낸 앨범이다.인스턴트 식품으로 끼니를 해결한지 오래, 무명 뮤지션의 삶은 자극적인 정크푸드와 다를 바 없는 삶이지만, 리짓군즈는 그런 삶에 대한 자긍심으로 뭉친 인간들이다.',
  img: 'https://i1.sndcdn.com/artworks-000278083472-4r9w62-t500x500.jpg',
  shop: 'https://www.legitgoons.com/music/'
}]; // const subSlidesData = [
//   {
//     headline:'2019 "BADTHANGS" 1st Collection',
//     description:'123213',
//     img:'https://static.wixstatic.com/media/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.webp',
//   },
//   {
//     headline:'2019 "BADTHANGS" 1st Collection',
//     description:'123213',
//     img:'https://static.wixstatic.com/media/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.webp',
//   },
//   {
//     headline:'3집 Junk Drunk Love',
//     description:'늦여름 다시 찾아온 리짓군즈의 세 번째 컴필레이션 [Junk, Drunk, Love]는 리짓군즈 크루의 단출한 일상과 언더그라운드 뮤지션들의 희망을 오롯이 담아낸 앨범이다.\n인스턴트 식품으로 끼니를 해결한지 오래, 무명 뮤지션의 삶은 자극적인 정크푸드와 다를 바 없는 삶이지만, 리짓군즈는 그런 삶에 대한 자긍심으로 뭉친 인간들이다. 2017년 여름, 이번 앨범 역시 치즈버거와 감자튀김을 먹으며 그렇게 출발했다. 건강을 갉아먹는 정크푸드(Junk)와 짓누르는 숙취(Drunk)로 얼룩진 일상, 하지만 그럼에도 별 볼 일없는 삶을 향해 보내는 끊임없는 찬가와 열정(Love)은 [Junk, Drunk, Love]를 관통하는 테마이자 리짓군즈가 삶을 관철하는 태도이다.\n냉혹한 인디펜던트 환경에선 매 순간 작품의 완성도만이 다음 작품을 이어갈 수 있는 유일한 원동력이듯이 [Junk, Drunk, Love] 역시 리짓군즈의 지난 작품들 위에 쌓아 올린 결과물이다. 15곡의 풀랭스로 채워진 이번 앨범은 프로듀싱과 아트워크, 뮤직비디오까지 앨범제작에 필요한 모든 리소스들을 자급자족했으며, 최소한의 제작비 또한 리짓군즈 자체 MD판매를 통한 수익금으로 조달했다. 우리는 앞으로 나올 리짓군즈의 모든 것들을 리짓군즈만의 독립적인 방식으로 이루어내는 걸 볼 수 있을 것이다.',
//     img:'https://i1.sndcdn.com/artworks-000278083472-4r9w62-t500x500.jpg',
//   },
//   {
//     headline:'최우수 랩&힙합 음반 뱃사공 [탕아]',
//     description:'[탕아]는 그동안 뱃사공이 리짓군즈 안에서 보였던 매력과는 또 다른 매력을 한껏 느낄 수 있는 앨범이다. 그는 일상으로부터 온 가사를 그루브한 베이스라인과 락 적인 요소가 가미된 기타 리프 안에서 유려한 랩 실력으로 풀어냈다. 동시에 각 곡마다 확실한 개성을 부여하는데도 성공했다. ‘로데오’에서는 사이키델릭 사운드를, ‘외롭지만 괜찮아’에서는 진득한 기타 솔로와 코러스 라인으로, ‘우리집’에서는 밴드 사운드 위에 덤덤하지만, 애정이 느껴지는 ‘집’에 대한 이야기를 얹었다. 비슷한 스타일로 찍어 낸듯한 많은 힙합 앨범처럼 자극적이지는 않지만, 2018년 많은 이들에게 확실히 각인된 작품이다.',
//     img:'http://koreanmusicawards.com/2019/kma20198263/wp-content/uploads/2019/01/20190123_021824.jpg',
//   },
//   {
//     headline:'2019 "BADTHANGS" 1st Collection',
//     description:'리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
//     img:'https://static.wixstatic.com/media/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.webp',
//   },
// ]

function Weekly3(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_contentLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    prefix: props.prefix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(ContentBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/landing/unnamed.jpg",
    alt: "\uB9AC\uC9D3\uAD70\uC988 \uB85C\uACE0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx(_components_scaleSlide__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slideData: mainSlidesData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(SoundBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("iframe", {
    width: "100%",
    height: "20px",
    scrolling: "no",
    frameBorder: "no",
    allow: "autoplay",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328531073&auto_play=true&color=ff5500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))));
}
var TextSlideIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["to{>h3{transform:translate(-100%,0%) matrix(1,0,0,1,0,0);opacity:1;}>span{transform:translate(100%,0%) matrix(1,0,0,1,0,0);opacity:1;}}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "weekly3__Logo",
  componentId: "sc-1e81hl1-0"
})(["position:absolute;top:2rem;left:2rem;display:flex;background:#fff;border-radius:12px;overflow:hidden;transform:rotate(45deg);width:50px;height:50px;justify-content:center;align-items:center;margin:5px auto 5px 5px;>img{height:50px;width:auto;transform:rotate(-45deg);}"]);
var SoundBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "weekly3__SoundBar",
  componentId: "sc-1e81hl1-1"
})(["background:#000;position:absolute;bottom:2rem;left:2rem;right:2rem;padding:14px;font-size:0.7rem;font-weight:200;.sc-link-dark > span{color:#fff;}"]);
var HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "weekly3__HeaderBox",
  componentId: "sc-1e81hl1-2"
})(["font-size:3rem;color:rgba(255,255,255,1);padding:2rem;line-height:1em;display:flex;"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "weekly3__Box",
  componentId: "sc-1e81hl1-3"
})(["width:1280px;height:720px;background:rgba(0,0,0,0.9);color:rgba(255,255,255,0.8);position:relative;"]);
var ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "weekly3__ContentBox",
  componentId: "sc-1e81hl1-4"
})(["position:absolute;display:flex;width:84vw;height:100%;background:linear-gradient(301deg,#F6F6F6 0%,#FFFFFF 100%);z-index:3;top:0;left:8vw;right:8vw;bottom:0;box-shadow:0 10px 20px rgba(0,0,0,.3);align-items:center;justify-content:center;"]);

/***/ })

})
//# sourceMappingURL=weekly3.js.5ba0e499e6e11151e8d5.hot-update.js.map