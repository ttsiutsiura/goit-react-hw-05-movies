"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{727:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var r,a,c,u=e(439),i=e(791),s=e(406),o=e(689),p=e(168),f=e(934),l=f.Z.li(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 220px;\n  text-align: center;\n"]))),d=f.Z.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n"]))),h=f.Z.img(c||(c=(0,p.Z)(["\n  margin-bottom: 12px;\n  display: block;\n  border-radius: 4px;\n"]))),m=e(184);var x=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,o.UO)(null).movieId;return(0,i.useEffect)((function(){(0,s.xc)(a).then((function(t){return r(t.slice(0,5))}))}),[a]),0===e.length?(0,m.jsx)("p",{children:"There is no information."}):(0,m.jsx)(d,{children:e.map((function(t){return(0,m.jsxs)(l,{children:[(0,m.jsx)(h,{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:""}),(0,m.jsx)("b",{children:t.name}),(0,m.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}},406:function(t,n,e){e.d(n,{Hx:function(){return x},LI:function(){return l},Tg:function(){return s},Y5:function(){return p},xc:function(){return h}});var r=e(861),a=e(687),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=74b70279ba32fa3bffd48db3ec6e3fd8";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/week?".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(n,"&").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=727.e151283d.chunk.js.map