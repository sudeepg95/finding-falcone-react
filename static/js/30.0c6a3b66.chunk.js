(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{83:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){var t=e.type,n=e.item,a=e.isSelected,l=e.selectItem;if("planets"===t)return c.a.createElement("div",{className:"item",role:"presentation",onClick:function(){return"function"===typeof l&&l()}},a&&c.a.createElement("div",{className:"item-overlay"},c.a.createElement("p",null,"Selected")),c.a.createElement("div",{className:"item-img"},c.a.createElement("img",{src:"".concat("/finding-falcone-react","/").concat(t,"/").concat(n.name,".png"),alt:n.name})),c.a.createElement("div",{className:"item-details"},c.a.createElement("h3",null,n.name),c.a.createElement("p",null,c.a.createElement("span",{className:"bolder"},"Distance \xa0-\xa0"),n.distance,c.a.createElement("span",{className:"normal"},"\xa0megamiles"))));if("vehicles"===t){var r=e.vehicles,i=e.selectedVehicles,s=i[n.name]?i[n.name].name:null,o=r.map((function(e,a){if(n.distance<=e.max_distance){var r=Object.values(i).map((function(e){return e.name})).filter((function(t){return t===e.name})).length,o=e.total_no-r,m=s&&s===e.name;return c.a.createElement("div",{className:"vehicle-details",key:"vehicle-".concat(a),role:"presentation",onClick:function(){return"function"===typeof l&&l(e)}},m&&c.a.createElement("div",{className:"vehicle-overlay"},c.a.createElement("p",null,"Selected")),0===o&&!m&&c.a.createElement("div",{className:"vehicle-overlay error"}),c.a.createElement("div",{className:"item-img"},c.a.createElement("img",{src:"".concat("/finding-falcone-react","/").concat(t,"/").concat(e.name,".png"),alt:e.name})),c.a.createElement("div",null,c.a.createElement("h3",null,e.name),c.a.createElement("p",null,c.a.createElement("span",{className:"bolder"},"Range \xa0-\xa0"),e.max_distance,c.a.createElement("span",{className:"normal"},"\xa0megamiles")),c.a.createElement("p",null,c.a.createElement("span",{className:"bolder"},"Available\xa0-\xa0"),o,c.a.createElement("span",{className:"normal"},"\xa0no's"))))}return null}));return c.a.createElement("div",{className:"vehicles-list"},o)}return null}},92:function(e,t,n){"use strict";n.r(t);var a=n(29),c=n(30),l=n(32),r=n(31),i=n(33),s=n(6),o=n(0),m=n.n(o),u=n(7),p=n(12),v=n(17),f=n(83),h=n(18);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){function t(e){var n;Object(a.a)(this,t),n=Object(l.a)(this,Object(r.a)(t).call(this,e));var c=e.actions,i=e.outcome.selectedPlanets,s=e.history;return 4!==i.length?s.push("/solve/select-planets"):c.fetchVehiclesData(),n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"selectVehicle",value:function(e,t){this.props.actions.selectVehicle(e,t)}},{key:"findFalcone",value:function(){var e=this.props,t=e.actions,n=e.history;t.fetchToken().then((function(){return t.findFalcone()})).then((function(){return n.push("/solve/outcome")}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.outcome,a=n.totalTime,c=n.selectedPlanets,l=n.selectedVehicles,r=n.error,i=t.vehicle,s=i.vehicles,o=i.error,u=c.map((function(t,n){return m.a.createElement("div",{className:"expedition",key:"expedition-".concat(n)},m.a.createElement(f.a,{type:"planets",item:t,key:"planet-".concat(n)}),m.a.createElement(f.a,{type:"vehicles",item:t,key:"vehicles-".concat(n),vehicles:s,selectedVehicles:l,selectItem:function(n){return e.selectVehicle(n,t)}}))}));return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"preface-text noselect"},m.a.createElement("h3",null,"Assign vehicles to the planets for the expeditions:"),m.a.createElement("p",null,"Total time to complete all expeditions: ",a)),m.a.createElement("div",{className:"items-box items-box-alt noselect"},c.length>0?u:"Could not load list of vehicles!"),4===Object.values(l).length&&m.a.createElement("div",{className:"buttons-box"},m.a.createElement("button",{type:"button",onClick:function(){return e.findFalcone()}},"Send expeditions!")),o.length>0&&m.a.createElement("div",{className:"error-box"},m.a.createElement("p",null,o)),r.length>0&&m.a.createElement("div",{className:"error-box"},m.a.createElement("p",null,r)))}}]),t}(m.a.Component);t.default=Object(v.f)(Object(p.c)((function(e){return{vehicle:e.vehicle,outcome:e.outcome}}),(function(e){return{actions:Object(u.b)(E({},h.c,{},h.a),e)}}))(b))}}]);
//# sourceMappingURL=30.0c6a3b66.chunk.js.map