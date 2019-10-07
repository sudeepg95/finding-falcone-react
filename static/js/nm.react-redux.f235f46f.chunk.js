(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{12:function(e,n,t){"use strict";var r=t(0),o=t.n(r),u=t(2),i=t.n(u),a=o.a.createContext(null);var c=function(e){e()},s=function(){return c},p=null,d={notify:function(){}};var f=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=d,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=s(),n=[],t=[];return{clear:function(){t=p,n=p},notify:function(){var r=n=t;e((function(){for(var e=0;e<r.length;e++)r[e]()}))},get:function(){return t},subscribe:function(e){var r=!0;return t===n&&(t=n.slice()),t.push(e),function(){r&&n!==p&&(r=!1,t===n&&(t=n.slice()),t.splice(t.indexOf(e),1))}}}}())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=d)},e}();function l(e){var n=e.store,t=e.context,u=e.children,i=Object(r.useMemo)((function(){var e=new f(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),c=Object(r.useMemo)((function(){return n.getState()}),[n]);Object(r.useEffect)((function(){var e=i.subscription;return e.trySubscribe(),c!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,c]);var s=t||a;return o.a.createElement(s.Provider,{value:i},u)}l.propTypes={store:i.a.shape({subscribe:i.a.func.isRequired,dispatch:i.a.func.isRequired,getState:i.a.func.isRequired}),context:i.a.object,children:i.a.any};var v=l,b=t(3),h=t(8),m=t(16),O=t.n(m),y=t(11),P=t.n(y),w=t(20),g=[],S=[null,null];function C(e,n){var t=e[1];return[n.payload,t+1]}var j=function(){return[null,0]},E="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function x(e,n){void 0===n&&(n={});var t=n,u=t.getDisplayName,i=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,c=t.methodName,s=void 0===c?"connectAdvanced":c,p=t.renderCountProp,d=void 0===p?void 0:p,l=t.shouldHandleStateChanges,v=void 0===l||l,m=t.storeKey,y=void 0===m?"store":m,x=t.withRef,M=void 0!==x&&x,R=t.forwardRef,N=void 0!==R&&R,T=t.context,q=void 0===T?a:T,D=Object(h.a)(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);P()(void 0===d,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),P()(!M,"withRef is removed. To access the wrapped instance, use a ref on the connected component");P()("store"===y,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var W=q;return function(n){var t=n.displayName||n.name||"Component",u=i(t),a=Object(b.a)({},D,{getDisplayName:i,methodName:s,renderCountProp:d,shouldHandleStateChanges:v,storeKey:y,displayName:u,wrappedComponentName:t,WrappedComponent:n}),c=D.pure;var p=c?r.useMemo:function(e){return e()};function l(t){var i=Object(r.useMemo)((function(){var e=t.forwardedRef,n=Object(h.a)(t,["forwardedRef"]);return[t.context,e,n]}),[t]),c=i[0],s=i[1],d=i[2],l=Object(r.useMemo)((function(){return c&&c.Consumer&&Object(w.isContextConsumer)(o.a.createElement(c.Consumer,null))?c:W}),[c,W]),m=Object(r.useContext)(l),O=Boolean(t.store),y=Boolean(m)&&Boolean(m.store);P()(O||y,'Could not find "store" in the context of "'+u+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+u+" in connect options.");var x=t.store||m.store,M=Object(r.useMemo)((function(){return function(n){return e(n.dispatch,a)}(x)}),[x]),R=Object(r.useMemo)((function(){if(!v)return S;var e=new f(x,O?null:m.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[x,O,m]),N=R[0],T=R[1],q=Object(r.useMemo)((function(){return O?m:Object(b.a)({},m,{subscription:N})}),[O,m,N]),D=Object(r.useReducer)(C,g,j),B=D[0][0],k=D[1];if(B&&B.error)throw B.error;var H=Object(r.useRef)(),U=Object(r.useRef)(d),F=Object(r.useRef)(),K=Object(r.useRef)(!1),A=p((function(){return F.current&&d===U.current?F.current:M(x.getState(),d)}),[x,B,d]);E((function(){U.current=d,H.current=A,K.current=!1,F.current&&(F.current=null,T())})),E((function(){if(v){var e=!1,n=null,t=function(){if(!e){var t,r,o=x.getState();try{t=M(o,U.current)}catch(u){r=u,n=u}r||(n=null),t===H.current?K.current||T():(H.current=t,F.current=t,K.current=!0,k({type:"STORE_UPDATED",payload:{latestStoreState:o,error:r}}))}};N.onStateChange=t,N.trySubscribe(),t();return function(){if(e=!0,N.tryUnsubscribe(),N.onStateChange=null,n)throw n}}}),[x,N,M]);var J=Object(r.useMemo)((function(){return o.a.createElement(n,Object(b.a)({},A,{ref:s}))}),[s,n,A]);return Object(r.useMemo)((function(){return v?o.a.createElement(l.Provider,{value:q},J):J}),[l,J,q])}var m=c?o.a.memo(l):l;if(m.WrappedComponent=n,m.displayName=u,N){var x=o.a.forwardRef((function(e,n){return o.a.createElement(m,Object(b.a)({},e,{forwardedRef:n}))}));return x.displayName=u,x.WrappedComponent=n,O()(x,n)}return O()(m,n)}}var M=Object.prototype.hasOwnProperty;function R(e,n){return e===n?0!==e||0!==n||1/e===1/n:e!==e&&n!==n}function N(e,n){if(R(e,n))return!0;if("object"!==typeof e||null===e||"object"!==typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(var o=0;o<t.length;o++)if(!M.call(n,t[o])||!R(e[t[o]],n[t[o]]))return!1;return!0}var T=t(7);function q(e){return function(n,t){var r=e(n,t);function o(){return r}return o.dependsOnOwnProps=!1,o}}function D(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function W(e,n){return function(n,t){t.displayName;var r=function(e,n){return r.dependsOnOwnProps?r.mapToProps(e,n):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(n,t){r.mapToProps=e,r.dependsOnOwnProps=D(e);var o=r(n,t);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=D(o),o=r(n,t)),o},r}}var B=[function(e){return"function"===typeof e?W(e):void 0},function(e){return e?void 0:q((function(e){return{dispatch:e}}))},function(e){return e&&"object"===typeof e?q((function(n){return Object(T.b)(e,n)})):void 0}];var k=[function(e){return"function"===typeof e?W(e):void 0},function(e){return e?void 0:q((function(){return{}}))}];function H(e,n,t){return Object(b.a)({},t,{},e,{},n)}var U=[function(e){return"function"===typeof e?function(e){return function(n,t){t.displayName;var r,o=t.pure,u=t.areMergedPropsEqual,i=!1;return function(n,t,a){var c=e(n,t,a);return i?o&&u(c,r)||(r=c):(i=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return H}}];function F(e,n,t,r){return function(o,u){return t(e(o,u),n(r,u),u)}}function K(e,n,t,r,o){var u,i,a,c,s,p=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1;function v(o,l){var v=!d(l,i),b=!p(o,u);return u=o,i=l,v&&b?(a=e(u,i),n.dependsOnOwnProps&&(c=n(r,i)),s=t(a,c,i)):v?(e.dependsOnOwnProps&&(a=e(u,i)),n.dependsOnOwnProps&&(c=n(r,i)),s=t(a,c,i)):b?function(){var n=e(u,i),r=!f(n,a);return a=n,r&&(s=t(a,c,i)),s}():s}return function(o,p){return l?v(o,p):(a=e(u=o,i=p),c=n(r,i),s=t(a,c,i),l=!0,s)}}function A(e,n){var t=n.initMapStateToProps,r=n.initMapDispatchToProps,o=n.initMergeProps,u=Object(h.a)(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=t(e,u),a=r(e,u),c=o(e,u);return(u.pure?K:F)(i,a,c,e,u)}function J(e,n,t){for(var r=n.length-1;r>=0;r--){var o=n[r](e);if(o)return o}return function(n,r){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+r.wrappedComponentName+".")}}function L(e,n){return e===n}var _=function(e){var n=void 0===e?{}:e,t=n.connectHOC,r=void 0===t?x:t,o=n.mapStateToPropsFactories,u=void 0===o?k:o,i=n.mapDispatchToPropsFactories,a=void 0===i?B:i,c=n.mergePropsFactories,s=void 0===c?U:c,p=n.selectorFactory,d=void 0===p?A:p;return function(e,n,t,o){void 0===o&&(o={});var i=o,c=i.pure,p=void 0===c||c,f=i.areStatesEqual,l=void 0===f?L:f,v=i.areOwnPropsEqual,m=void 0===v?N:v,O=i.areStatePropsEqual,y=void 0===O?N:O,P=i.areMergedPropsEqual,w=void 0===P?N:P,g=Object(h.a)(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),S=J(e,u,"mapStateToProps"),C=J(n,a,"mapDispatchToProps"),j=J(t,s,"mergeProps");return r(d,Object(b.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:S,initMapDispatchToProps:C,initMergeProps:j,pure:p,areStatesEqual:l,areOwnPropsEqual:m,areStatePropsEqual:y,areMergedPropsEqual:w},g))}}();function I(){var e=Object(r.useContext)(a);return P()(e,"could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),e}function Y(e){void 0===e&&(e=a);var n=e===a?I:function(){return Object(r.useContext)(e)};return function(){return n().store}}var z=Y();!function(e){void 0===e&&(e=a);var n=e===a?z:Y(e)}();var G="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,Q=function(e,n){return e===n};!function(e){void 0===e&&(e=a);var n=e===a?I:function(){return Object(r.useContext)(e)}}();var V,X=t(14);t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return _})),V=X.unstable_batchedUpdates,c=V}}]);
//# sourceMappingURL=nm.react-redux.f235f46f.chunk.js.map