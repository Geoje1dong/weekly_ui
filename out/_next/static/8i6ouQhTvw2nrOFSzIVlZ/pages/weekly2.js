(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2L8t":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=a.a.createElement;function c(e,t){t.theme,t.shape,t.icon,t.onClick,t.margin;return i(a.a.Fragment,null,e.icon?i(s,{shape:e.shape,theme:e.theme,onClick:e.onClick,margin:e.margin,size:e.size},e.icon,e.children):i(l,{shape:e.shape,theme:e.theme,onClick:e.onClick,margin:e.margin,size:e.size},e.children))}var s=o.c.button.withConfig({displayName:"button__IconButton",componentId:"sc-1hieivr-0"})([""," "," "," margin:",";box-shadow:0 2px 0 rgba(0,0,0,0.045);text-shadow:0 -1px 0 rgba(0,0,0,0.12);transition:all .3s;cursor:pointer;font-weight:600;&:hover{outline:none;}"],function(e){switch(e.shape){case"circle":return"border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center;";case"round":return"border-radius:100px; min-width:220px; padding: 20px 24px 20px 60px;";case"square":return"border-radius:0; padding: 20px 24px 20px 60px;";default:return"border-radius:4px; padding: 20px 24px 20px 60px;"}},function(e){switch(e.theme){case"dark":return"background:#000; color:rgba(255,255,255, 0.8);";case"yellow":return"background:#F2B918; color:#322B1B; &:hover{background:#fdca39;} &:focus{background:#fdca39;}";case"ghost":return"background:none; color:#fff; border:1px solid #fff; &:hover{background:rgba(255,255,255, 0.9); color:#000;}";default:return"background:#1890ff; color:rgba(255,255,255,0.8);"}},function(e){switch(e.size){case"":default:return""}},function(e){return e.margin?e.margin:"0px"}),l=o.c.button.withConfig({displayName:"button__TextButton",componentId:"sc-1hieivr-1"})([""," "," "," margin:",";font-weight:600;box-shadow:0 2px 0 rgba(0,0,0,0.045);text-shadow:0 -1px 0 rgba(0,0,0,0.12);transition:all .3s;cursor:pointer;&:hover,&:focus{outline:none;}"],function(e){switch(e.shape){case"circle":return"border-radius:50%;";case"round":return"border-radius:100px; min-width:220px;";case"square":return"border-radius:0;";default:return"border-radius:4px;"}},function(e){switch(e.theme){case"dark":return"background:#000; color:rgba(255,255,255, 0.8);";case"yellow":return"background:#F2B918; color:#322B1B; &:hover{background:#fdca39;} &:focus{background:#fdca39;}";case"ghost":return"background:none; color:#fff; border:1px solid #fff; &:hover{background:rgba(255,255,255, 0.9); color:#000;}";default:return"background:#1890ff; color:rgba(255,255,255,0.8);"}},function(e){switch(e.size){case"xs":return"padding:4px 8px; font-size:0.6rem;";default:return"padding:20px; font-size:1rem;"}},function(e){return e.margin?e.margin:"0px"})},"AUl/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weekly2",function(){var e=n("sLwn");return{page:e.default||e}}])},doui:function(e,t,n){"use strict";var r=n("p0XB"),a=n.n(r);var o=n("XXOK"),i=n.n(o);function c(e,t){return function(e){if(a()(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,s=i()(e);!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return c})},hJm0:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=a.a.createElement;function c(e){return i(a.a.Fragment,null,e.icon?i(s,{margin:e.margin,theme:e.theme,size:e.size},i("input",{type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,onChange:e.onChange,onFocus:e.onFocus,pattern:e.pattern,maxLength:e.maxlength}),i("span",null,e.icon)):i(l,{margin:e.margin,theme:e.theme,size:e.size},i("label",null,e.label),i("input",{type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,onChange:e.onChange,onFocus:e.onFocus,pattern:e.pattern,maxLength:e.maxlength})))}var s=o.c.span.withConfig({displayName:"input__Icon",componentId:"sc-1k0ivxk-0"})(["width:100%;position:relative;display:table;margin:",";>span{position:absolute;top:17px;left:20px;>svg{transition:all .5s;}}>input{"," "," border-radius:4px;border:none;width:100%;transition:all 0.4s;box-sizing:border-box;font-weight:300;&:focus{outline:none;}&:focus,&:hover{+span > svg{}}}"],function(e){return e.margin?e.margin:"0"},function(e){switch(e.theme){case"dark":return"background:rgba(0,0,0,0.4); color:rgba(255,255,255,1); &::placeholder{color:rgba(255,255,255,0.5);};";default:return"background:rgba(255,255,255,1); color:#000; &::placeholder{color:rgba(0,0,0,0.5);};"}},function(e){return e.size,"padding:20px 24px 20px 60px; font-size:16px;"}),l=o.c.span.withConfig({displayName:"input__BasicInput",componentId:"sc-1k0ivxk-1"})(["width:100%;position:relative;display:table;margin:",";>label{padding-bottom:4px;font-size:0.9rem;}>input{"," "," border-radius:4px;border:none;width:100%;transition:all 0.4s;box-sizing:border-box;font-weight:300;&:focus{outline:none;}}"],function(e){return e.margin?e.margin:"0"},function(e){switch(e.theme){case"dark":return"background:rgba(0,0,0,0.4); color:rgba(255,255,255,1); &::placeholder{color:rgba(255,255,255,0.5);};";default:return"background:rgba(255,255,255,1); color:#000; &::placeholder{color:rgba(0,0,0,0.5);};"}},function(e){switch(e.size){case"s":return"padding: 16px 18px; font-size:14px;";default:return"padding:20px 24px; font-size:16px;"}})},qovO:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("17x9"),c=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.color,n=e.size,r=l(e,["color","size"]);return a.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),a.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))};p.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},p.defaultProps={color:"currentColor",size:"24"};var d=p,u=n("YFqc"),g=n.n(u);n.d(t,"a",function(){return h});var f=a.a.createElement;function h(e,t){t.prevId,t.nextId;return f(m,null,f(g.a,{href:"/weekly_ui"},f("a",{className:"close"},f(d,{color:"rgba(255,255,255,1)",size:48}))))}var m=o.c.div.withConfig({displayName:"contentLayout__ContentBox",componentId:"yleits-0"})(["background:rgba(0,0,0,0.8);position:fixed;top:0;left:0;bottom:0;right:0;z-index:3;.close{position:absolute;top:30px;right:30px;}.left,.right{position:absolute;top:50%;transform:tarnsitionY(-50%);}.left{left:2%;}.right{right:2%;}>button{cursor:pointer;&:focus{outline:none;}&:hover{>svg{stroke:#000;}outline:none;}}"])},sLwn:function(e,t,n){"use strict";n.r(t);var r=n("doui"),a=n("q1tI"),o=n.n(a),i=n("qovO"),c=n("vOnD"),s=n("17x9"),l=n.n(s);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=function(e){var t=e.color,n=e.size,r=d(e,["color","size"]);return o.a.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),o.a.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),o.a.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))};u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.defaultProps={color:"currentColor",size:"24"};var g=u,f=o.a.createElement;function h(e,t){for(;e.length<t;)e+="\u2022";return e}function m(e){var t=e.number,n=e.focus,a=e.name,i=e.cvc,c=e.expiry,s=e.password,l=e.cardCompany,p=function(e){for(var t=e;t.length<16;)t+="\u2022";for(var n=1;n<4;n++){var r=4*n+(n-1);t="".concat(t.slice(0,r)," ").concat(t.slice(r))}return t}(t),d=function(e){var t="",n="";if(e.includes("/")){var a=e.split("/"),o=Object(r.a)(a,2);t=o[0],n=o[1]}else e.length&&(t=e.substr(0,2),n=e.substr(2,6));for(;t.length<2;)t+="\u2022";for(;n.length<2;)n+="\u2022";return"".concat(t,"/").concat(n)}(c),u=h(i,3),g=h(s,2);return f(o.a.Fragment,null,f(F,{focus:n},f(N,{focus:n},f(b,{company:l}),f(y,{focus:n,company:l},l&&f("img",{src:"static/img/card/".concat(l,".png"),alt:"".concat(l," logo")})),f(x,null,f("img",{src:"static/img/thumb/npay.png",alt:"n pay logo"})),f(_,{focus:n},p),f(C,{focus:n},a||"Your Name Here"),f(v,{focus:n},d)),f(z,{focus:n},f(b,{company:l}),f(O,null),f(I,null),f(w,{focus:n},f("span",null,"cvc"),f("p",null,u)),f(k,{focus:n},f("span",null,"\uce74\ub4dc \ube44\ubc00\ubc88\ud638 \uc55e \ub450\uc790\ub9ac"),f("p",null,g,"\u2022\u2022")))))}var b=c.c.div.withConfig({displayName:"card__CardBackground",componentId:"pc0y81-0"})(["","   position:absolute;left:",";top:-60%;transform:rotate(25deg);transition:all 0.5s ease-out;height:200%;width:150%;"],function(e){switch(e.company){case"hyundai":return"background:linear-gradient(135deg, rgb(30, 136, 229) 0%, rgb(42, 159, 253) 43%, rgb(30, 136, 229) 100%);";case"kb":return"background:linear-gradient(to right,#FCDF00,#FBBA00);";case"bc":return"background:linear-gradient(to right,#ef4651,#e0367d);";case"samsung":return"background:linear-gradient(to right,#0080FF,#00C2FF);";case"lottecard":return"background:linear-gradient(to right,#6D45C2,#F134B7);";case"shinhan":return"background:linear-gradient(to right, #0096d6, #5b3eb3);";default:return""}},function(e){return e.company?"-22%":"-170%"}),x=c.c.div.withConfig({displayName:"card__Npay",componentId:"pc0y81-1"})(["position:absolute;top:10%;left:10%;filter:drop-shadow(rgba(0,0,0,0.23) 0.8px -0.7px 4px);transform:translateZ(30px);"]),v=c.c.div.withConfig({displayName:"card__Cardexpiry",componentId:"pc0y81-2"})(["opacity:",";position:absolute;right:10%;bottom:10%;transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;"],function(e){return"cardExpiry"===e.focus?"1":"0.5"}),y=c.c.div.withConfig({displayName:"card__CardCompany",componentId:"pc0y81-3"})(["transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;position:absolute;top:10%;right:",";filter:",";>img{height:34px;width:auto;}"],function(e){return"shinhan"===e.company?"5%":"10%"},function(e){return"kb"===e.company?"none":"drop-shadow(rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px)"}),w=c.c.div.withConfig({displayName:"card__Cardcvc",componentId:"pc0y81-4"})(["position:absolute;top:48%;left:70%;height:30px;opacity:",";transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;display:flex;align-items:center;>span{font-weight:200;font-size:11px;color:rgba(255,255,255,0.6);margin-right:4px;line-height:1em;}>p{margin:0;padding:0;line-height:1em;}"],function(e){return"cardCvc"===e.focus?"1":"0.5"}),k=c.c.div.withConfig({displayName:"card__CardPassword",componentId:"pc0y81-5"})(["opacity:",";transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;display:flex;align-items:center;position:absolute;top:67%;left:5%;>span{font-weight:200;font-size:11px;color:rgba(255,255,255,0.6);margin-right:4px;line-height:1em;}>p{margin:0;padding:0;line-height:1em;}"],function(e){return"cardPassword"===e.focus?"1":"0.5"}),C=c.c.div.withConfig({displayName:"card__CardName",componentId:"pc0y81-6"})(["opacity:",";position:absolute;bottom:10%;left:10%;transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;width:190px;text-overflow:ellipsis;overflow:hidden;"],function(e){return"cardName"===e.focus?"1":"0.5"}),_=c.c.div.withConfig({displayName:"card__CardNumber",componentId:"pc0y81-7"})(["transform:translateZ(40px);text-shadow:rgba(0,0,0,0.23) 0.8px -0.7px 4px;position:absolute;left:0;right:0;text-align:center;top:45%;letter-spacing:0.06em;text-size-adjust:100%;font-size:20px;opacity:",";"],function(e){return"cardNumber"===e.focus?"1":"0.5"}),N=c.c.div.withConfig({displayName:"card__CardFront",componentId:"pc0y81-8"})(["background:linear-gradient(301deg,#828282 0%,#cecccc 100%);position:absolute;width:100%;height:100%;z-index:1;backface-visibility:hidden;border-radius:24px;overflow:hidden;"]),z=c.c.div.withConfig({displayName:"card__CardBack",componentId:"pc0y81-9"})(["background:linear-gradient(301deg,#828282 0%,#cecccc 100%);position:absolute;width:100%;height:100%;transform:rotateY(180deg);border-radius:24px;overflow:hidden;"]),O=c.c.div.withConfig({displayName:"card__Magnetic",componentId:"pc0y81-10"})(["position:absolute;top:10%;width:100%;height:50px;background:rgba(0,0,0,0.8);"]),I=c.c.div.withConfig({displayName:"card__Bar",componentId:"pc0y81-11"})(["position:absolute;width:60%;height:30px;top:48%;background:rgba(255,255,255,0.8);left:5%;"]),F=c.c.div.withConfig({displayName:"card__CardStyle",componentId:"pc0y81-12"})(["font-family:Consolas,Courier,monospace;font-wegiht:bold;position:relative;font-size:16px;width:320px;height:200px;box-shadow:0px 4px 20px 0px rgba(0,0,0,0.2);margin:0 auto;border-radius:24px;box-sizing:border-box;color:#fff;transform-style:preserve-3d;perspective:1000;transition:all 0.4s linear;transform:",""],function(e){return"cardCvc"===e.focus||"cardPassword"===e.focus?"rotateY(180deg)":"rotateY(0deg);"}),j=n("hJm0"),B=n("2L8t");n.d(t,"default",function(){return S});var E=o.a.createElement;function P(e){return e.replace(/\D+/g,"")}function S(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),l=Object(r.a)(s,2),p=l[0],d=l[1],u=o.a.useState(""),f=Object(r.a)(u,2),h=f[0],b=f[1],x=o.a.useState(""),v=Object(r.a)(x,2),y=v[0],w=v[1],k=o.a.useState(""),C=Object(r.a)(k,2),_=C[0],N=C[1],z=o.a.useState(""),O=Object(r.a)(z,2),I=O[0],F=O[1],S=o.a.useState("Number Random"),X=Object(r.a)(S,2),J=X[0],M=X[1],R=function(e){var t=e.slice(0,2),n="";return"55"===t?n="hyundai":"64"===t?n="bc":"44"===t?n="shinhan":"35"===t?n="kb":"37"===t?n="lottecard":"94"===t&&(n="samsung"),n}(a),A=function(e){N(e.target.name)},U=function(e){if("cardNumber"===e.target.name){var t=P(e.target.value);c(t)}else if("cardName"===e.target.name)d(e.target.value.toUpperCase());else if("cardExpiry"===e.target.name){var n=P(e.target.value);n.length>=3&&(n="".concat(n.slice(0,2),"/").concat(n.slice(2,4))),w(n)}else if("cardCvc"===e.target.name){var r=P(e.target.value);b(r)}else if("cardPassword"===e.target.name){var a=P(e.target.value);F(a)}};return E(o.a.Fragment,null,E(i.a,{prefix:e.prefix}),E(Z,null,E(Y,null,E("div",null,E(g,{color:"#fff",size:28})),E("div",null,E(m,{number:a,name:p,cvc:h,expiry:y,focus:_,password:I,cardCompany:R}),E(T,null,E(D,null,E(q,null,E(B.a,{theme:"dark",size:"xs",onClick:function(e){if(e.preventDefault(),a)M("Number Random"),c("");else{M("Number Reset");var t=Math.floor(5*Math.random())+1;c(["5523123456780000","6451123456780000","4473123456780000","3569123456780000","3762123456780000","9410123456780000"][t])}}},J),E("em",null,"55., 44., 64., 35., 37., 94."),E(j.a,{theme:"dark",type:"tel",name:"cardNumber",value:a,placeholder:"Card Number",onChange:U,onFocus:A,maxlength:"16",label:"Card Number",margin:"0 0 24px 0"}),E(L,{company:R},R&&E("img",{src:"static/img/card/".concat(R,".png"),alt:"".concat(R," logo")}))),E(j.a,{theme:"dark",type:"text",name:"cardName",value:p,placeholder:"Card Name",onChange:U,onFocus:A,label:"Card Name",margin:"0 0 24px 0"})),E(D,null,E(j.a,{theme:"dark",type:"tel",name:"cardExpiry",value:y,placeholder:"Month/Year",onChange:U,onFocus:A,maxlength:"5",label:"Expiration (mm/yy)"}),E(j.a,{theme:"dark",type:"tel",name:"cardCvc",value:h,placeholder:"CVC",onChange:U,onFocus:A,maxlength:"3",label:"cvc"}),E(j.a,{theme:"dark",type:"tel",name:"cardPassword",value:I,placeholder:"\uc55e \ub450\uc790\ub9ac",onChange:U,onFocus:A,maxlength:"2",label:"\ud328\uc2a4\uc6cc\ub4dc"})))))))}var L=c.c.div.withConfig({displayName:"weekly2__CardCompany",componentId:"sc-3birfp-0"})(["position:absolute;bottom:35px;right:10px;>img{height:30px;}"]),q=c.c.span.withConfig({displayName:"weekly2__RandomBox",componentId:"sc-3birfp-1"})(["position:relative;width:100%;>button{position:absolute;right:10px;top:-4px;z-index:2;}>em{font-size:0.7em;position:absolute;right:106px;top:3px;opacity:0.8;}"]),D=c.c.div.withConfig({displayName:"weekly2__Grid3",componentId:"sc-3birfp-2"})(["display:flex;margin:0 -8px;>span{padding:0 8px;}"]),T=c.c.form.withConfig({displayName:"weekly2__Form",componentId:"sc-3birfp-3"})(["margin-top:70px;"]),Y=c.c.div.withConfig({displayName:"weekly2__Box",componentId:"sc-3birfp-4"})(["position:relative;display:flex;width:758px;height:586px;border-radius:24px;box-shadow:0 0 8px rgba(0,0,0,.6);overflow:hidden;>div:first-child{width:10%;display:flex;justify-content:center;background:#19212E;>svg{margin-top:40px;}}>div:last-child{width:90%;background:#fff;padding:40px;>div{margin-top:40px;}}"]),Z=c.c.div.withConfig({displayName:"weekly2__ContentBox",componentId:"sc-3birfp-5"})(["position:absolute;display:flex;width:84vw;height:100%;background:linear-gradient(301deg,#F6F6F6 0%,#FFFFFF 100%);z-index:3;top:0;left:8vw;right:8vw;bottom:0;box-shadow:0 10px 20px rgba(0,0,0,.3);align-items:center;justify-content:center;"])}},[["AUl/",1,0]]]);