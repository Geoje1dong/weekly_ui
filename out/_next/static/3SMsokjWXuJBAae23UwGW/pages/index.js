(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/MKj":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("17x9"),u=n.n(i),a=o.a.createContext(null);var c=function(e){e()},s=function(){return c},f=null,p={notify:function(){}};var d=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=p,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=s(),t=[],n=[];return{clear:function(){n=f,t=f},notify:function(){var r=t=n;e(function(){for(var e=0;e<r.length;e++)r[e]()})},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==f&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=p)},e}();function l(e){var t=e.store,n=e.context,i=e.children,u=Object(r.useMemo)(function(){var e=new d(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}},[t]),c=Object(r.useMemo)(function(){return t.getState()},[t]);Object(r.useEffect)(function(){var e=u.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}},[u,c]);var s=n||a;return o.a.createElement(s.Provider,{value:u},i)}l.propTypes={store:u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired}),context:u.a.object,children:u.a.any};var b=l;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var v=n("2mql"),m=n.n(v),g=n("QLaP"),w=n.n(g),x=n("0vxD"),O=[],P=[null,null];function j(e,t){var n=e[1];return[t.payload,n+1]}var S=function(){return[null,0]},C="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function E(e,t){void 0===t&&(t={});var n=t,i=n.getDisplayName,u=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,c=n.methodName,s=void 0===c?"connectAdvanced":c,f=n.renderCountProp,p=void 0===f?void 0:f,l=n.shouldHandleStateChanges,b=void 0===l||l,v=n.storeKey,g=void 0===v?"store":v,E=n.withRef,N=void 0!==E&&E,R=n.forwardRef,T=void 0!==R&&R,k=n.context,I=void 0===k?a:k,_=h(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);w()(void 0===p,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),w()(!N,"withRef is removed. To access the wrapped instance, use a ref on the connected component");w()("store"===g,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var M=I;return function(t){var n=t.displayName||t.name||"Component",i=u(n),a=y({},_,{getDisplayName:u,methodName:s,renderCountProp:p,shouldHandleStateChanges:b,storeKey:g,displayName:i,wrappedComponentName:n,WrappedComponent:t}),c=_.pure;var f=c?r.useMemo:function(e){return e()};function l(n){var u=Object(r.useMemo)(function(){var e=n.forwardedRef,t=h(n,["forwardedRef"]);return[n.context,e,t]},[n]),c=u[0],s=u[1],p=u[2],l=Object(r.useMemo)(function(){return c&&c.Consumer&&Object(x.isContextConsumer)(o.a.createElement(c.Consumer,null))?c:M},[c,M]),v=Object(r.useContext)(l),m=Boolean(n.store),g=Boolean(v)&&Boolean(v.store);w()(m||g,'Could not find "store" in the context of "'+i+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+i+" in connect options.");var E=n.store||v.store,N=Object(r.useMemo)(function(){return function(t){return e(t.dispatch,a)}(E)},[E]),R=Object(r.useMemo)(function(){if(!b)return P;var e=new d(E,m?null:v.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[E,m,v]),T=R[0],k=R[1],I=Object(r.useMemo)(function(){return m?v:y({},v,{subscription:T})},[m,v,T]),_=Object(r.useReducer)(j,O,S),D=_[0][0],$=_[1];if(D&&D.error)throw D.error;var z=Object(r.useRef)(),A=Object(r.useRef)(p),U=Object(r.useRef)(),L=Object(r.useRef)(!1),F=f(function(){return U.current&&p===A.current?U.current:N(E.getState(),p)},[E,D,p]);C(function(){A.current=p,z.current=F,L.current=!1,U.current&&(U.current=null,k())}),C(function(){if(b){var e=!1,t=null,n=function(){if(!e){var n,r,o=E.getState();try{n=N(o,A.current)}catch(i){r=i,t=i}r||(t=null),n===z.current?L.current||k():(z.current=n,U.current=n,L.current=!0,$({type:"STORE_UPDATED",payload:{latestStoreState:o,error:r}}))}};T.onStateChange=n,T.trySubscribe(),n();return function(){if(e=!0,T.tryUnsubscribe(),T.onStateChange=null,t)throw t}}},[E,T,N]);var q=Object(r.useMemo)(function(){return o.a.createElement(t,y({},F,{ref:s}))},[s,t,F]);return Object(r.useMemo)(function(){return b?o.a.createElement(l.Provider,{value:I},q):q},[l,q,I])}var v=c?o.a.memo(l):l;if(v.WrappedComponent=t,v.displayName=i,T){var E=o.a.forwardRef(function(e,t){return o.a.createElement(v,y({},e,{forwardedRef:t}))});return E.displayName=i,E.WrappedComponent=t,m()(E,t)}return m()(v,t)}}var N=Object.prototype.hasOwnProperty;function R(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function T(e,t){if(R(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!N.call(t,n[o])||!R(e[n[o]],t[n[o]]))return!1;return!0}var k=n("ANjH");function I(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function _(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function M(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=_(e);var o=r(t,n);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=_(o),o=r(t,n)),o},r}}var D=[function(e){return"function"===typeof e?M(e):void 0},function(e){return e?void 0:I(function(e){return{dispatch:e}})},function(e){return e&&"object"===typeof e?I(function(t){return Object(k.b)(e,t)}):void 0}];var $=[function(e){return"function"===typeof e?M(e):void 0},function(e){return e?void 0:I(function(){return{}})}];function z(e,t,n){return y({},n,{},e,{},t)}var A=[function(e){return"function"===typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,u=!1;return function(t,n,a){var c=e(t,n,a);return u?o&&i(c,r)||(r=c):(u=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return z}}];function U(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function L(e,t,n,r,o){var i,u,a,c,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;function b(o,l){var b=!p(l,u),y=!f(o,i);return i=o,u=l,b&&y?(a=e(i,u),t.dependsOnOwnProps&&(c=t(r,u)),s=n(a,c,u)):b?(e.dependsOnOwnProps&&(a=e(i,u)),t.dependsOnOwnProps&&(c=t(r,u)),s=n(a,c,u)):y?function(){var t=e(i,u),r=!d(t,a);return a=t,r&&(s=n(a,c,u)),s}():s}return function(o,f){return l?b(o,f):(a=e(i=o,u=f),c=t(r,u),s=n(a,c,u),l=!0,s)}}function F(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=h(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(e,i),a=r(e,i),c=o(e,i);return(i.pure?L:U)(u,a,c,e,i)}function q(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function W(e,t){return e===t}!function(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?E:n,o=t.mapStateToPropsFactories,i=void 0===o?$:o,u=t.mapDispatchToPropsFactories,a=void 0===u?D:u,c=t.mergePropsFactories,s=void 0===c?A:c,f=t.selectorFactory,p=void 0===f?F:f}();function B(){var e=Object(r.useContext)(a);return w()(e,"could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),e}function H(e){void 0===e&&(e=a);var t=e===a?B:function(){return Object(r.useContext)(e)};return function(){return t().store}}var K=H();!function(e){void 0===e&&(e=a);var t=e===a?K:H(e)}();var Y="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,X=function(e,t){return e===t};var V,J=function(e){void 0===e&&(e=a);var t=e===a?B:function(){return Object(r.useContext)(e)};return function(e,n){void 0===n&&(n=X),w()(e,"You must pass a selector to useSelectors");var o=t();return function(e,t,n,o){var i,u=Object(r.useReducer)(function(e){return e+1},0)[1],a=Object(r.useMemo)(function(){return new d(n,o)},[n,o]),c=Object(r.useRef)(),s=Object(r.useRef)(),f=Object(r.useRef)();try{i=e!==s.current||c.current?e(n.getState()):f.current}catch(l){var p="An error occured while selecting the store state: "+l.message+".";throw c.current&&(p+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\nOriginal stack trace:"),new Error(p)}return Y(function(){s.current=e,f.current=i,c.current=void 0}),Y(function(){function e(){try{var e=s.current(n.getState());if(t(e,f.current))return;f.current=e}catch(l){c.current=l}u({})}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}},[n,a]),i}(e,n,o.store,o.subscription)}}(),Q=n("i8i4");n.d(t,"a",function(){return b}),n.d(t,"b",function(){return J}),V=Q.unstable_batchedUpdates,c=V},"0vxD":function(e,t,n){"use strict";e.exports=n("DUzY")},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return r.isMemo(e)?u:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var s=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(b){var o=l(n);o&&o!==b&&e(t,o,r)}var u=f(n);p&&(u=u.concat(p(n)));for(var a=c(t),y=c(n),h=0;h<u.length;++h){var v=u[h];if(!i[v]&&(!r||!r[v])&&(!y||!y[v])&&(!a||!a[v])){var m=d(n,v);try{s(t,v,m)}catch(g){}}}return t}return t}},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},ANjH:function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return a});var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,f=[],p=f,d=!1;function l(){p===f&&(p=f.slice())}function b(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return l(),p.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,l();var n=p.indexOf(e);p.splice(n,1)}}}function h(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,e)}finally{d=!1}for(var t=f=p,n=0;n<t.length;n++){(0,t[n])()}return e}return h({type:i.INIT}),(o={dispatch:h,subscribe:y,getState:b,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,h({type:i.REPLACE})}})[r.a]=function(){var e,t=y;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var u,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(s){u=s}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<a.length;i++){var s=a[i],f=n[s],p=e[s],d=f(p,t);if("undefined"===typeof d){var l=c(s,t);throw new Error(l)}o[s]=d,r=r||d!==p}return r?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{dispatch:r=b.apply(void 0,i)(n.dispatch)})}}}},DUzY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,b=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case d:case u:case c:case a:case b:return e;default:switch(e=e&&e.$$typeof){case f:case l:case s:return e;default:return t}}case v:case h:case i:return t}}}function x(e){return w(e)===d}t.typeOf=w,t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=l,t.Fragment=u,t.Lazy=v,t.Memo=h,t.Portal=i,t.Profiler=c,t.StrictMode=a,t.Suspense=b,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===d||e===c||e===a||e===b||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===s||e.$$typeof===f||e.$$typeof===l||e.$$typeof===m||e.$$typeof===g)},t.isAsyncMode=function(e){return x(e)||w(e)===p},t.isConcurrentMode=x,t.isContextConsumer=function(e){return w(e)===f},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===l},t.isFragment=function(e){return w(e)===u},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===b}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,u,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,u,a],f=0;(c=new Error(t.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("vOnD"),u=n("/MKj"),a=n("YFqc"),c=n.n(a),s=n("17x9"),f=n.n(s);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=function(e){var t=e.color,n=e.size,r=d(e,["color","size"]);return o.a.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),o.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.a.createElement("polyline",{points:"12 5 19 12 12 19"}))};l.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},l.defaultProps={color:"currentColor",size:"24"};var b=l,y=o.a.createElement,h=i.c.div.withConfig({displayName:"pages__Label",componentId:"kvuy77-0"})(["padding:20px;position:absolute;bottom:20px;left:20px;background:rgba(0,0,0,0.6);border-radius:100px;box-shadow:0px 4px 20px 0px rgba(61,68,78,0.1);z-index:1;"]),v=i.c.div.withConfig({displayName:"pages__LinkArrow",componentId:"kvuy77-1"})(["position:absolute;top:20px;right:20px;width:40px;height:40px;display:flex;background:rgba(0,0,0,0.6);border-radius:50%;align-items:center;justify-content:center;box-shadow:0px 4px 20px 0px rgba(61,68,78,0.1);z-index:1;"]),m=i.c.p.withConfig({displayName:"pages__Intro",componentId:"kvuy77-2"})(["position:relative;font-size:14px;line-height:2.2em;margin-top:50px;color:rgba(255,255,255,0.8);>img{position:absolute;top:-200px;right:0;z-index:-1;width:400px;}"]),g=i.c.div.withConfig({displayName:"pages__ContentBox",componentId:"kvuy77-3"})(["z-index:1;box-sizing:border-box;padding:100px;width:100%;margin:0 auto;position:relative;ul{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:40px;}li{line-height:0;color:#fff;border-radius:10px;position:relative;overflow:hidden;box-shadow:0px 20px 25px rgba(0,0,0,0.1),0px 10px 10px rgba(0,0,0,0.04);display:grid;position:relative;img{transition:all .5s;width:100%;height:auto;transform:scale(1);}>p{color:#333;}&:hover{img{transform:scale(1.02);}}}"]),w=(i.c.input.withConfig({displayName:"pages__Input",componentId:"kvuy77-4"})(["background:rgba(255,255,255,0.8);box-shadow:0px 10px 16px rgba(0,0,0,0.1),0px 4px 6px rgba(0,0,0,0.06);border-radius:4px;border:none;width:100%;padding:14px 24px;font-size:16px;transition:all 0.4s;box-sizing:border-box;&:focus{outline:none;}"]),i.c.h1.withConfig({displayName:"pages__Logo",componentId:"kvuy77-5"})(["display:inline-block;color:rgba(255,255,255,1);font-size:66px;padding:0;margin:0;font-weight:300;>strong{font-weight:700;}"])),x=i.c.div.withConfig({displayName:"pages__HeaderContent",componentId:"kvuy77-6"})(["box-sizing:border-box;padding:100px;width:100%;margin:0 auto;position:relative;z-index:1;"]),O=i.c.div.withConfig({displayName:"pages__HeaderBox",componentId:"kvuy77-7"})(["box-sizing:border-box;position:relative;width:100%;height:420px;&:after{content:'';width:200vw;height:150vh;background:radial-gradient(50.15% 32.48% at 50% 59.49%,rgba(255,255,255,0.13) 0%,rgba(255,255,255,0) 100%),#297FFA;box-shadow:0px 4px 67px 20px rgba(61,68,78,0.57);border-radius:50%;position:absolute;left:50vw;top:-5vh;transform:translate(-50%,-50%);}"]);t.default=function(e){var t=Object(u.b)(function(e){return e.post}).mainPost;return y(o.a.Fragment,null,y(O,null,y(x,null,y(c.a,{href:"".concat("/weekly_ui")},y("a",null,y(w,null,y("strong",null,"Weekly UI"),y("br",null),"challenge,"))),y(m,null,"Weekly UI \ucc4c\ub9b0\uc9c0\ub97c \uc2dc\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4.",y("br",null),"\uadf8 \uc774\uc720\ub294 UI \ub514\uc790\uc778\uc744 \uc5f0\uc2b5\ud558\uace0 \uac1c\ubc1c\ud558\uba70 \uc2e4\ud5d8 \ubc0f \ub9ce\uc740 \uc2dc\ud589\ucc29\uc624\ub97c \ud1b5\ud574 \uacbd\ud5d8\uc744 \uc313\uae30 \uc704\ud574\uc11c\uc785\ub2c8\ub2e4.",y("br",null),"\uc800\ub294 \uae30\uc220\uc744 \ud5a5\uc0c1\ud558\ub294 \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc774 \ub9ce\uc740 \uac83\uc744 \ub9cc\ub4e4\uace0 \uacbd\ud5d8\ud574 \ubcf4\ub294 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.",y("br",null),"\uc774 \uc6b4\ub3d9\uc740 \uc800\uc758 \uc2dc\uac01\uc801\uc778 \ub514\uc790\uc778 \uae30\uc220 \ubc0f UI \uac1c\ubc1c\uc744 \ud5a5\uc0c1\ud558\uba70 \ud328\ud134\uc744 \ub9cc\ub4e4\uba70 \uc65c \uadf8\ub7f0 \ud328\ud134\uc774 \uc0ac\uc6a9\ub418\uace0 \uc788\ub294\uc9c0\ub97c \uc774\ud574\ud558\ub294 \uac83\uc5d0\ub3c4 \ub9ce\uc740 \ub3c4\uc6c0\uc744 \uc904 \uac83\uc774\ub77c\uace0 \ubbff\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),y(g,null,y("ul",null,t.map(function(e){return y("li",{key:e.id},y(c.a,{href:"".concat("/weekly_ui","/").concat(e.page)},y("a",null,y(v,null,y(b,{color:"#fff",size:26})),y(h,null,e.title),y("img",{src:e.coverImg,alt:e.title}))))}))))}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n("yLpj"),n("3UD+")(e))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);