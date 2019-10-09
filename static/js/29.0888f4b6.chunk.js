(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{83:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.type,a=e.item,n=e.isSelected,c=e.selectItem;if("planets"===t)return l.a.createElement("div",{className:"item",role:"presentation",onClick:function(){return"function"===typeof c&&c()}},n&&l.a.createElement("div",{className:"item-overlay"},l.a.createElement("p",null,"Selected")),l.a.createElement("div",{className:"item-img"},l.a.createElement("img",{src:"".concat("","/").concat(t,"/").concat(a.name,".png"),alt:a.name})),l.a.createElement("div",{className:"item-details"},l.a.createElement("h3",null,a.name),l.a.createElement("p",null,l.a.createElement("span",{className:"bolder"},"Distance \xa0-\xa0"),a.distance,l.a.createElement("span",{className:"normal"},"\xa0megamiles"))));if("vehicles"===t){var r=e.vehicles,s=e.selectedVehicles,o=s[a.name]?s[a.name].name:null,i=r.map((function(e,n){if(a.distance<=e.max_distance){var r=Object.values(s).map((function(e){return e.name})).filter((function(t){return t===e.name})).length,i=e.total_no-r,m=o&&o===e.name;return l.a.createElement("div",{className:"vehicle-details",key:"vehicle-".concat(n),role:"presentation",onClick:function(){return"function"===typeof c&&c(e)}},m&&l.a.createElement("div",{className:"vehicle-overlay"},l.a.createElement("p",null,"Selected")),0===i&&!m&&l.a.createElement("div",{className:"vehicle-overlay error"}),l.a.createElement("div",{className:"item-img"},l.a.createElement("img",{src:"".concat("","/").concat(t,"/").concat(e.name,".png"),alt:e.name})),l.a.createElement("div",null,l.a.createElement("h3",null,e.name),l.a.createElement("p",null,l.a.createElement("span",{className:"bolder"},"Range \xa0-\xa0"),e.max_distance,l.a.createElement("span",{className:"normal"},"\xa0megamiles")),l.a.createElement("p",null,l.a.createElement("span",{className:"bolder"},"Available\xa0-\xa0"),i,l.a.createElement("span",{className:"normal"},"\xa0no's"))))}return null}));return l.a.createElement("div",{className:"vehicles-list"},i)}return null}},91:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(30),c=a(32),r=a(31),s=a(33),o=a(6),i=a(0),m=a.n(i),u=a(7),p=a(12),f=a(28),d=a(17),v=a(83),E=a(18);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(e){function t(e){var a;return Object(n.a)(this,t),a=Object(c.a)(this,Object(r.a)(t).call(this,e)),e.actions.fetchPlanetsData(),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"planetIndexIfExists",value:function(e){return this.props.outcome.selectedPlanets.findIndex((function(t){return t.name===e.name}))}},{key:"selectPlanet",value:function(e){this.props.actions.selectPlanet(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.planet,n=a.planets,l=a.error,c=t.outcome,r=c.selectedPlanets,s=c.error,o=n.map((function(t,a){return m.a.createElement(v.a,{type:"planets",item:t,key:a,isSelected:e.planetIndexIfExists(t)>-1,selectItem:function(){return e.selectPlanet(t)}})}));return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"preface-text noselect"},m.a.createElement("h3",null,"Select planets you want to search in:"),m.a.createElement("p",null,"You can only choose 4 planets")),m.a.createElement("div",{className:"items-box noselect"},n.length>0?o:"Could not load list of planets!"),4===r.length&&m.a.createElement("div",{className:"buttons-box"},m.a.createElement(f.a,{to:"/solve/select-vehicles"},"Select Vehicles to send to these planets")),l.length>0&&m.a.createElement("div",{className:"error-box"},m.a.createElement("p",null,l)),s.length>0&&m.a.createElement("div",{className:"error-box"},m.a.createElement("p",null,s)))}}]),t}(m.a.Component);t.default=Object(d.f)(Object(p.c)((function(e){return{planet:e.planet,outcome:e.outcome}}),(function(e){return{actions:Object(u.b)(h({},E.b,{},E.a),e)}}))(y))}}]);
//# sourceMappingURL=29.0888f4b6.chunk.js.map