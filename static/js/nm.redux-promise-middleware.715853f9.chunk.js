(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{21:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e){return null!==e&&"object"===("undefined"===typeof e?"undefined":o(e))&&(e&&"function"===typeof e.then)}},49:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return a}));var o=t(21),n=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],o=!0,n=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(o=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);o=!0);}catch(c){n=!0,i=c}finally{try{!o&&a.return&&a.return()}finally{if(n)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function a(){var r=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).dispatch;return"function"===typeof r?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=[u.Pending,u.Fulfilled,u.Rejected],t=e.promiseTypeSuffixes||r,a=e.promiseTypeDelimiter||"_";return function(e){var r=e.dispatch;return function(e){return function(u){var c=void 0,p=void 0;if(!u.payload)return e(u);var d=u.payload;if(Object(o.a)(d))c=d;else if(Object(o.a)(d.promise))c=d.promise,p=d.data;else{if("function"!==typeof d&&"function"!==typeof d.promise)return e(u);if(c=d.promise?d.promise():d(),p=d.promise?d.data:void 0,!Object(o.a)(c))return e(i({},u,{payload:c}))}var f=u.type,l=u.meta,s=n(t,3),m=s[0],y=s[1],h=s[2],v=function(e,r){return i({type:[f,r?h:y].join(a)},null===e||"undefined"===typeof e?{}:{payload:e},void 0!==l?{meta:l}:{},r?{error:!0}:{})};return e(i({type:[f,m].join(a)},void 0!==p?{payload:p}:{},void 0!==l?{meta:l}:{})),c.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=v(e,!1);return r(t),{value:e,action:t}}),(function(e){var t=v(e,!0);throw r(t),e}))}}}}()({dispatch:r}):(e&&Object({NODE_ENV:"production",PUBLIC_URL:"/finding-falcone-react",PROJECT_VERSION:"0.0.1",REACT_APP_ENV:"Productiom",REACT_APP_API_BASE_URL:"https://\ufb01ndfalcone.herokuapp.com"})&&console.warn("Redux Promise Middleware: As of version 6.0.0, the middleware library supports both preconfigured and custom configured middleware. To use a custom configuration, use the \"createPromise\" export and call this function with your configuration property. To use a preconfiguration, use the default export. For more help, check the upgrading guide: https://docs.psb.design/redux-promise-middleware/upgrade-guides/v6\n\nFor custom configuration:\nimport { createPromise } from 'redux-promise-middleware';\nconst promise = createPromise({ types: { fulfilled: 'success' } });\napplyMiddleware(promise);\n\nFor preconfiguration:\nimport promise from 'redux-promise-middleware';\napplyMiddleware(promise);\n    "),null)}}).call(this,t(37))}}]);
//# sourceMappingURL=nm.redux-promise-middleware.715853f9.chunk.js.map