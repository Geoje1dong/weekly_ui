(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"V6+/":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),r=n("qovO"),a=n("vOnD"),l=n("doui"),s=n("17x9"),c=n.n(s);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.color,n=e.size,i=u(e,["color","size"]);return o.a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.a.createElement("circle",{cx:"9",cy:"21",r:"1"}),o.a.createElement("circle",{cx:"20",cy:"21",r:"1"}),o.a.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))};p.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},p.defaultProps={color:"currentColor",size:"24"};var f=p,h=o.a.createElement;function m(e,t,n){var i;return"next"===e?i=t<n.length-1?t+1:0:"prev"===e&&(i=t>0?t-1:n.length-1),i}function g(e){var t=e.slideData,n=o.a.useState(0),i=Object(l.a)(n,2),r=i[0],a=i[1],s=o.a.useState(!1),c=Object(l.a)(s,2),d=c[0],u=c[1],p=o.a.useState(!1),g=Object(l.a)(p,2),x=g[0],b=g[1],v=function(e){var t=e[0],n=e;return n=(n=n.filter(function(e){return 0!==e.first})).concat(t)}(t),O=m("next",r,t),S=m("prev",r,t),C=function(){b(!x)},E=function(){u(!d)},I=o.a.useCallback(function(e){r<t.length-1?a(r+1):a(0)},[r]),N=o.a.useCallback(function(e){var n=e.wheelDelta/120;n<0?setTimeout(function(){r<t.length-1?a(r+1):a(0)},300):n>0&&setTimeout(function(){a(r>0?r-1:t.length-1)},300)},[r]);return o.a.useEffect(function(){return window.addEventListener("mousewheel",N),function(){window.removeEventListener("mousewheel",N)}}),h(o.a.Fragment,null,h("div",null,h("ul",null,t.map(function(e,t){return h(j,{key:t,current:r,index:t,next:O,prev:S,mouseOver:d},h("div",null,h("h3",null,e.headline),h("span",null,e.headline)))}))),h(z,{open:x},h("ul",null,t.map(function(e,t){return h(k,{background:e.img,key:t,current:r,index:t,next:O,prev:S,onMouseOver:E,onMouseOut:E,onClick:C},h("div",null,h("div",null)))}),h(y,{delay:"0.6s"})),h("ul",null,v.map(function(e,t){return h(k,{background:e.img,key:t,current:r,index:t,next:O,prev:S,onClick:I},h("div",null,h("div",null,e.id)))}),h(y,{delay:"1.3s",open:x},x&&h(w,{open:x},h("dl",null,h("dt",null,"headline"),h("dd",null,t[r].headline)),h("dl",null,h("dt",null,"description"),h("dd",null,t[r].description)),t[r].shop&&h("dl",null,h("dt",null,"shop"),h("dd",null,h(_,{target:"_blank",href:t[r].shop},h(f,{size:14,color:"#fff"}),"Add to Cart"))))))))}var x=Object(a.d)(["to{opacity:1;transform:translateY(0px);}"]),b=Object(a.d)(["to{top:-100%;}"]),v=Object(a.d)(["0%{transform:scale(1);}40%{transform:scale(1.3);}100%{transform:scale(1);}"]),_=a.c.a.withConfig({displayName:"scaleSlide__ALink",componentId:"nj3721-0"})(["background:none;color:#rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.6);box-shadow:0 2px 0 rgba(0,0,0,0.045);text-shadow:0 -1px 0 rgba(0,0,0,0.12);transition:all .3s;cursor:pointer;font-weight:inherit;display:inline-block;padding:4px 8px;font-size:inherit;border-radius:4px;>svg{margin-right:8px;}&:hover{outline:none;background:rgba(255,255,255,0.9);color:#000;>svg{stroke:rgba(0,0,0,0.9);}}"]),w=a.c.div.withConfig({displayName:"scaleSlide__OpenBox",componentId:"nj3721-1"})(["width:360px;position:absolute;bottom:0;left:0;>dl{margin-top:20px;opacity:0;transform:translateY(20px);animation:"," 0.4s cubic-bezier(0,0,0.2,1) forwards;animation-delay:0.7s;>dt{font-size:0.6rem;font-weight:200;color:rgba(255,255,255,0.2);padding:0;margin:0;}>dd{font-size:0.82rem;font-weight:400;padding-top:8px;margin:0;word-break:keep-all;}}"],x),y=a.c.div.withConfig({displayName:"scaleSlide__ShowBackground",componentId:"nj3721-2"})(["position:absolute;top:0;left:0;right:0;height:100%;background:#1a1a1a;z-index:3;animation:"," 0.5s cubic-bezier(0,0,0.2,1) forwards;animation-delay:",";"," transition:all 0.4s cubic-bezier(0,0,0.2,1);"],b,function(e){return e.delay},function(e){return e.open&&"transform:translateY(100%);"}),k=a.c.li.withConfig({displayName:"scaleSlide__SlideStyle",componentId:"nj3721-3"})(["position:absolute;top:0;left:0;right:0;bottom:0;height:100%;display:none;","  "," ","  z-index:3;overflow:hidden;>div{position:relative;height:inherit;","  ","  ","  transition:all 0.6s cubic-bezier(0,0,0.2,1);>div{background-image:url(",");background-size:cover;background-repeat:no-repeat;background-position:center;height:inherit;","}}"],function(e){return e.prev===e.index&&"z-index:0; display:block;"},function(e){return e.current===e.index&&"z-index:2; display:block;"},function(e){return e.next===e.index&&"z-index:3; display:block;"},function(e){return e.prev===e.index&&"transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;"},function(e){return e.current===e.index&&"transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;"},function(e){return e.next===e.index&&"transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;"},function(e){return e.background},function(e){if(e.current===e.index)return Object(a.b)(["animation:"," 0.6s cubic-bezier(0,0,0.2,1);"],v)}),z=a.c.div.withConfig({displayName:"scaleSlide__Slide",componentId:"nj3721-4"})(["margin:0 2rem;height:calc(100% - 120px);display:flex;overflow:hidden;position:relative;z-index:0;align-items:flex-end;>ul{height:500px;background:#000;position:relative;flex:0 0 55%;margin-right:4%;&:first-child{margin-left:12%;"," transition:height 0.5s cubic-bezier(0,0,0.2,1);transition-delay:0.4s;}&:last-child{>li>div>div{opacity:0.4 !important;}}}"],function(e){return e.open&&"height:600px; "}),j=a.c.li.withConfig({displayName:"scaleSlide__SlidetextStyle",componentId:"nj3721-5"})(["width:inherit;position:absolute;bottom:28%;left:2rem;z-index:4;overflow:hidden;display:none;","  "," ","  >div{position:relative;height:inherit;text-shadow:0px 4px 5px rgba(0,0,0,0.6);padding-right:10px;>h3,>span{font-size:2.4rem;font-weight:700;color:#fff;line-height:1em;padding:0;margin:0;transition:all 0.5s cubic-bezier(0,0,0.2,1);}>h3{clip-path:polygon(0 50%,100% 50%,100% 100%,0 100%);transform:translate(-100%,0%) matrix(1,0,0,1,0,0);","   ","  ","}>span{position:absolute;top:-1px;left:0;color:#fff;clip-path:polygon(0 0,100% 0,100% 50%,0 50%);transform:translate(100%,0%) matrix(1,0,0,1,0,0);"," ","  ","}}"],function(e){return e.prev===e.index&&"z-index:0; display:block;"},function(e){return e.current===e.index&&"z-index:2; display:block;"},function(e){return e.next===e.index&&"z-index:0; display:block;"},function(e){return e.prev===e.index&&"transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;"},function(e){return e.current===e.index&&"transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;"},function(e){return e.next===e.index&&"transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;"},function(e){return e.prev===e.index&&"transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0) !important; opacity:0;"},function(e){return e.current===e.index&&e.mouseOver?"transform:translate3d(0,0,0); opacity:1;":"transform:translate3d(3px,0,0); opacity:1;"},function(e){return e.next===e.index&&"transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0) !important; opacity:0;"});n.d(t,"default",function(){return C});var O=o.a.createElement,S=[{first:0,headline:"LEGIT GOONS [ROCKSTAR GAMES]",description:"\uac8c\uc784 \uc18d \uac00\uc0c1\ud604\uc2e4, \ubaa8\ub4e0 \uac8c \ud569\ubc95\ud654 \ub418\ub294 \uacf3, \ub3d9\uacbd\uc758 Thug life",img:"http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/193/351/81193351_1556072456234_1_600x600.JPG",shop:"https://smartstore.naver.com/legitgoons/products/4518806026"},{headline:"\ucd5c\uc6b0\uc218 \ub7a9&\ud799\ud569 \uc74c\ubc18 \ubc43\uc0ac\uacf5 [\ud0d5\uc544]",description:"[\ud0d5\uc544]\ub294 \uadf8\ub3d9\uc548 \ubc43\uc0ac\uacf5\uc774 \ub9ac\uc9d3\uad70\uc988 \uc548\uc5d0\uc11c \ubcf4\uc600\ub358 \ub9e4\ub825\uacfc\ub294 \ub610 \ub2e4\ub978 \ub9e4\ub825\uc744 \ud55c\uaecf \ub290\ub084 \uc218 \uc788\ub294 \uc568\ubc94\uc774\ub2e4. \uadf8\ub294 \uc77c\uc0c1\uc73c\ub85c\ubd80\ud130 \uc628 \uac00\uc0ac\ub97c \uadf8\ub8e8\ube0c\ud55c \ubca0\uc774\uc2a4\ub77c\uc778\uacfc \ub77d \uc801\uc778 \uc694\uc18c\uac00 \uac00\ubbf8\ub41c \uae30\ud0c0 \ub9ac\ud504 \uc548\uc5d0\uc11c \uc720\ub824\ud55c \ub7a9 \uc2e4\ub825\uc73c\ub85c \ud480\uc5b4\ub0c8\ub2e4. \ub3d9\uc2dc\uc5d0 \uac01 \uace1\ub9c8\ub2e4 \ud655\uc2e4\ud55c \uac1c\uc131\uc744 \ubd80\uc5ec\ud558\ub294\ub370\ub3c4 \uc131\uacf5\ud588\ub2e4. \u2018\ub85c\ub370\uc624\u2019\uc5d0\uc11c\ub294 \uc0ac\uc774\ud0a4\ub378\ub9ad \uc0ac\uc6b4\ub4dc\ub97c, \u2018\uc678\ub86d\uc9c0\ub9cc \uad1c\ucc2e\uc544\u2019\uc5d0\uc11c\ub294 \uc9c4\ub4dd\ud55c \uae30\ud0c0 \uc194\ub85c\uc640 \ucf54\ub7ec\uc2a4 \ub77c\uc778\uc73c\ub85c, \u2018\uc6b0\ub9ac\uc9d1\u2019\uc5d0\uc11c\ub294 \ubc34\ub4dc \uc0ac\uc6b4\ub4dc \uc704\uc5d0 \ub364\ub364\ud558\uc9c0\ub9cc, \uc560\uc815\uc774 \ub290\uaef4\uc9c0\ub294 \u2018\uc9d1\u2019\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\ub97c \uc5b9\uc5c8\ub2e4. \ube44\uc2b7\ud55c \uc2a4\ud0c0\uc77c\ub85c \ucc0d\uc5b4 \ub0b8\ub4ef\ud55c \ub9ce\uc740 \ud799\ud569 \uc568\ubc94\ucc98\ub7fc \uc790\uadf9\uc801\uc774\uc9c0\ub294 \uc54a\uc9c0\ub9cc, 2018\ub144 \ub9ce\uc740 \uc774\ub4e4\uc5d0\uac8c \ud655\uc2e4\ud788 \uac01\uc778\ub41c \uc791\ud488\uc774\ub2e4.",img:"http://koreanmusicawards.com/2019/kma20198263/wp-content/uploads/2019/01/20190123_021824.jpg",shop:"http://www.hiphopplayastore.com/shop/goods/goods_view.php?goodsno=64683&category=013001"},{headline:"\ubc43\uc0ac\uacf5 [\ucd9c\ud56d\uc0ac] \uc7ac\uc785\uace0",description:"[\ucd9c\ud56d\uc0ac] \uc568\ubc94\uc740 \ubc43\uc0ac\uacf5 \uc790\uc2e0\uc744 \uac00\uc7a5 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ub2f4\uace0 \uc788\ub294 \uc568\ubc94\uc774\uba70, \ucc28\ubd90\uacfc \ub525\ud50c\ub85c\uc6b0 \ub109\uc0b4 \uc678 \ub9ac\uc9d3\uad70\uc988 \uc5b4\uc13c\ud2f1, \ube14\ub7ad\ud0c0\uc784, \ucf54\ub4dc\ucfe4\uc2a4\ud2b8, \ube45\ub77c\uc774\ud2b8, \ud638\ub9bc. \uc544\ubc1c\ub780\ucc44 \ud06c\ub8e8\uc758 ARwwae\uac00 \ucc38\uc5ec\ud558\uc600\ub2e4.",img:"https://shop-phinf.pstatic.net/20190625_188/500274815_1561449021910gX1cH_JPEG/519784.jpg",shop:"https://smartstore.naver.com/legitgoons/products/4568951697"},{headline:'2019 "BADTHANGS" 1st Collection',description:"\ub9ac\uc9d3\uad70\uc988 3\uc9d1 [Junk, Drunk, Love] \uc218\ub85d\uace1 \u2018Bad thangs\u2019\ub97c \ud14c\ub9c8\ub85c \uc804\uac1c\ub418\ub294 \ub9ac\uc9d3\uad70\uc988\uc758 \uad7f\uc988 \ube0c\ub79c\ub4dc",img:"https://static.wixstatic.com/media/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.webp",shop:"https://smartstore.naver.com/legitgoons/products/4112006476"},{headline:'2019 "BADTHANGS" 1st Collection',description:"\ub9ac\uc9d3\uad70\uc988 3\uc9d1 [Junk, Drunk, Love] \uc218\ub85d\uace1 \u2018Bad thangs\u2019\ub97c \ud14c\ub9c8\ub85c \uc804\uac1c\ub418\ub294 \ub9ac\uc9d3\uad70\uc988\uc758 \uad7f\uc988 \ube0c\ub79c\ub4dc",img:"https://static.wixstatic.com/media/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.webp",shop:"https://smartstore.naver.com/legitgoons/products/4111853981"},{headline:'2019 "BADTHANGS" 1st Collection',description:"\ub9ac\uc9d3\uad70\uc988 3\uc9d1 [Junk, Drunk, Love] \uc218\ub85d\uace1 \u2018Bad thangs\u2019\ub97c \ud14c\ub9c8\ub85c \uc804\uac1c\ub418\ub294 \ub9ac\uc9d3\uad70\uc988\uc758 \uad7f\uc988 \ube0c\ub79c\ub4dc",img:"https://static.wixstatic.com/media/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.webp",shop:"https://smartstore.naver.com/legitgoons/products/4111811631"},{headline:"3\uc9d1 Junk Drunk Love",description:"\ub2a6\uc5ec\ub984 \ub2e4\uc2dc \ucc3e\uc544\uc628 \ub9ac\uc9d3\uad70\uc988\uc758 \uc138 \ubc88\uc9f8 \ucef4\ud544\ub808\uc774\uc158 [Junk, Drunk, Love]\ub294 \ub9ac\uc9d3\uad70\uc988 \ud06c\ub8e8\uc758 \ub2e8\ucd9c\ud55c \uc77c\uc0c1\uacfc \uc5b8\ub354\uadf8\ub77c\uc6b4\ub4dc \ubba4\uc9c0\uc158\ub4e4\uc758 \ud76c\ub9dd\uc744 \uc624\ub86f\uc774 \ub2f4\uc544\ub0b8 \uc568\ubc94\uc774\ub2e4.\uc778\uc2a4\ud134\ud2b8 \uc2dd\ud488\uc73c\ub85c \ub07c\ub2c8\ub97c \ud574\uacb0\ud55c\uc9c0 \uc624\ub798, \ubb34\uba85 \ubba4\uc9c0\uc158\uc758 \uc0b6\uc740 \uc790\uadf9\uc801\uc778 \uc815\ud06c\ud478\ub4dc\uc640 \ub2e4\ub97c \ubc14 \uc5c6\ub294 \uc0b6\uc774\uc9c0\ub9cc, \ub9ac\uc9d3\uad70\uc988\ub294 \uadf8\ub7f0 \uc0b6\uc5d0 \ub300\ud55c \uc790\uae0d\uc2ec\uc73c\ub85c \ubb49\uce5c \uc778\uac04\ub4e4\uc774\ub2e4.",img:"https://i1.sndcdn.com/artworks-000278083472-4r9w62-t500x500.jpg",shop:"https://www.legitgoons.com/music/"}];function C(e){return O(o.a.Fragment,null,O(r.a,{prefix:e.prefix}),O(A,null,O(B,null,O(I,null,O("img",{src:"".concat(e.prefix,"/static/img/landing/unnamed.jpg"),alt:"\ub9ac\uc9d3\uad70\uc988 \ub85c\uace0"})),O(g,{slideData:S}),O(N,null,O("iframe",{width:"100%",height:"20px",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328531073&auto_play=true&color=ff5500"}))),O(E,null)))}var E=a.c.div.withConfig({displayName:"weekly3__Background",componentId:"sc-1e81hl1-0"})(["background-image:url(/static/img/landing/unnamed.jpg);background-repeat:repeat;height:200%;width:200%;position:absolute;z-index:-1;transform:rotate(-35deg);"]),I=a.c.div.withConfig({displayName:"weekly3__Logo",componentId:"sc-1e81hl1-1"})(["position:absolute;top:2rem;left:2rem;display:flex;background:#fff;border-radius:12px;overflow:hidden;transform:rotate(45deg);width:50px;height:50px;justify-content:center;align-items:center;margin:5px auto 5px 5px;>img{height:50px;width:auto;transform:rotate(-45deg);}"]),N=a.c.div.withConfig({displayName:"weekly3__SoundBar",componentId:"sc-1e81hl1-2"})(["background:#000;position:absolute;bottom:2rem;left:2rem;right:2rem;padding:14px;font-size:0.7rem;font-weight:200;.sc-link-dark > span{color:#fff;}"]),B=a.c.div.withConfig({displayName:"weekly3__Box",componentId:"sc-1e81hl1-3"})(["width:1280px;height:720px;background:#1a1a1a;color:rgba(255,255,255,0.8);position:relative;"]),A=a.c.div.withConfig({displayName:"weekly3__ContentBox",componentId:"sc-1e81hl1-4"})(["position:absolute;display:flex;width:84vw;height:100%;background:linear-gradient(301deg,#F6F6F6 0%,#FFFFFF 100%);z-index:3;top:0;left:8vw;right:8vw;bottom:0;box-shadow:0 10px 20px rgba(0,0,0,.3);align-items:center;justify-content:center;overflow:hidden;"])},doui:function(e,t,n){"use strict";var i=n("p0XB"),o=n.n(i);var r=n("XXOK"),a=n.n(r);function l(e,t){return function(e){if(o()(e))return e}(e)||function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var l,s=a()(e);!(i=(l=s.next()).done)&&(n.push(l.value),!t||n.length!==t);i=!0);}catch(c){o=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return l})},qQRz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weekly3",function(){var e=n("V6+/");return{page:e.default||e}}])}},[["qQRz",1,0]]]);