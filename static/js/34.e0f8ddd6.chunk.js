(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{92:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(28),c=a(30),o=a(29),s=a(31),i=a(6),l=a(0),u=a.n(l),m=a(7),p=a(12),b=a(18),f=a(19);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(c.a)(this,Object(o.a)(t).call(this,e));var r=e.outcome,s=r.aftermath,i=r.totalTime,l=e.history;return s&&0!==i||l.push("/solve/select-planets"),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"startOver",value:function(){var e=this.props,t=e.actions,a=e.history;t.clearOutcome(),a.push("/")}},{key:"render",value:function(){var e=this,t=this.props.outcome,a=t.aftermath,n=a.status,r=a.planet_name,c=t.totalTime,o=t.error;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"image-box"},u.a.createElement("img",{src:"".concat("/finding-falcone-react","/space-badge.png"),alt:"space-badge"})),"success"===n&&u.a.createElement("div",{className:"text-box"},u.a.createElement("h3",null,"Congratulations!"),u.a.createElement("p",{className:"description"},"You were able to find Falcone. King Shan is mightily pleased."),u.a.createElement("p",{className:"description"},"Time taken: ",c),u.a.createElement("p",{className:"description"},"Planet found: ",r)),"success"!==n&&u.a.createElement("div",{className:"text-box"},u.a.createElement("h3",null,"You failed!"),u.a.createElement("p",{className:"description"},"You were not able to find Falcone. King Shan is going to execute you."),u.a.createElement("p",{className:"description"},"Time wasted: ",c)),u.a.createElement("div",{className:"buttons-box"},u.a.createElement("button",{type:"button",onClick:function(){return e.startOver()}},"Start over")),o.length>0&&u.a.createElement("div",{className:"error-box"},u.a.createElement("p",null,o)))}}]),t}(u.a.PureComponent);t.default=Object(b.f)(Object(p.c)((function(e){return{outcome:e.outcome}}),(function(e){return{actions:Object(m.b)(d({},f.a),e)}}))(h))}}]);
//# sourceMappingURL=34.e0f8ddd6.chunk.js.map