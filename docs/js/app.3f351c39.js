(function(e){function t(t){for(var n,a,u=t[0],l=t[1],c=t[2],s=0,m=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-3302e43a":"08751011"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"chunk-3302e43a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-3302e43a":"13378d60"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===o))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){c=m[u],s=c.getAttribute("data-href");if(s===n||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var m=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,r[1](m)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"85ec":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n=r("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("div",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("ul",[n("router-link",{attrs:{to:{name:"settings"}}},[e._v("Settings")])],1)],1)]),n("ul",[n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/about/foo"}},[e._v("foo")])],1),n("li",[n("router-link",{attrs:{to:"/about/bar"}},[e._v("bar")])],1),n("li",[n("router-link",{attrs:{to:"/about/baz"}},[e._v("baz")])],1),n("li",[n("router-link",{attrs:{to:"/about/1"}},[e._v("Other Feed 1")])],1),n("li",[n("router-link",{attrs:{to:"/about/2"}},[e._v("Other Feed 2")])],1),n("li",[n("router-link",{attrs:{to:"/about/3"}},[e._v("Other Feed 3")])],1)])],1)]),n("ul",[n("li",[n("router-link",{attrs:{to:"/parent"}},[e._v("Parent")])],1),n("li",[n("router-link",{attrs:{to:"/multi-parents"}},[e._v("Multi Parents")])],1)]),n("ul",[n("li",[n("router-link",{attrs:{to:"/dynamic-parent"}},[e._v("Dynamic Parent")])],1)])])]),n("main",[n("Breadcrumbs"),n("router-view")],1)])},o=[],i=(r("034f"),r("2877")),u={},l=Object(i["a"])(u,a,o,!1,null,null,null),c=l.exports,s=r("8c4f");n["a"].use(s["a"]);var m=[{path:"/",name:"Home",component:function(){return r.e("chunk-3302e43a").then(r.bind(null,"bb51"))},meta:{breadcrumb:"Home"},children:[{path:"settings",name:"settings",components:{content:{template:"<router-view/>"},sidebar:{template:"<div><h4>Settings:</h4><router-link :to=\"{name:'entities', params: {entityName:'entity1'}}\">entities 1</router-link> </br><router-link :to=\"{name:'entities', params: {entityName:'entity2'}}\">entities 2</router-link> </br><router-link :to=\"{name:'entities', params: {entityName:'entity3'}}\">entities 3</router-link></div>"}},meta:{breadcrumb:"Settings"},children:[{path:"entities/:entityName",name:"entities",component:{template:"<router-view/>"},redirect:{name:"entityView"},meta:{breadcrumb:function(e){return""+e.entityName}},children:[{path:"view",name:"entityView",component:{template:"<div><h3>View</h3><pre>{{ $route.params }}</pre></div>"},props:!0,meta:{breadcrumb:"View"}}]}]}]},{path:"/about",component:{template:"<router-view/>"},meta:{breadcrumb:"About"},children:[{path:"",name:"About",component:{template:"<h2>About</h2>"}},{path:"foo",component:{template:"<h2>Foo</h2>"},meta:{breadcrumb:function(){return"foo 2"}}},{path:"bar",component:{template:"<h2>Bar</h2>"},meta:{breadcrumb:"bar"}},{name:"baz",path:"baz",component:{template:"<h2>Baz</h2>"},meta:{breadcrumb:function(){var e=this.$route.name;return'name "'+e+'" of context route'}}},{path:":id",component:{template:"<router-view/>"},meta:{breadcrumb:function(e){return"Other Feed "+e.id}},redirect:{name:"view"},children:[{path:"view",name:"view",component:{template:"<div><h2>View</h2><pre>{{ $route.params }}</pre></div>"},meta:{breadcrumb:"View"}}]}]},{path:"/parent",name:"parent",component:{template:"<h2>Parent</h2>"},meta:{breadcrumb:{label:"Parent to settings",parent:"settings"}}},{path:"/multi-parents",component:{template:"<h2>Multi Parents</h2>"},meta:{breadcrumb:{label:"Multi Parents",parent:"parent"}}},{name:"dynamic-parent",path:"/dynamic-parent",component:{template:"<h2>Dynamic Parent</h2>"},meta:{breadcrumb:function(){var e=this.$route.name;return{label:e,parent:"settings"}}}}],p=new s["a"]({mode:"history",base:"/vue-2-breadcrumbs/",routes:m}),d=p,b=r("0f9e"),h=function(){function e(){}return e.prototype.install=function(e,t){void 0===t&&(t={}),t.template&&(t.render=void 0),Object.defineProperties(e.prototype,{$breadcrumbs:{get:function(){var e=this;function t(e,r){var n,a;void 0===r&&(r=[]);var o=this.$router.resolve({name:e}).route.matched[0];r.unshift(o);var i=null===(a=null===(n=o.meta)||void 0===n?void 0:n.breadcrumb)||void 0===a?void 0:a.parent;return i?t.call(this,o.meta.breadcrumb.parent,r):r}return this.$route.matched.flatMap((function(r){var n,a=[r],o=null===(n=r.meta)||void 0===n?void 0:n.breadcrumb;if("function"===typeof o&&(o=o.call(e,e.$route.params)),null===o||void 0===o?void 0:o.parent){var i=t.call(e,o.parent,[]);a=Object(b["b"])(i,a)}return a})).map((function(e){return 0===e.path.length?Object(b["a"])(Object(b["a"])({},e),{path:"/"}):e}))}}}),e.component("Breadcrumbs",e.extend(Object(b["a"])({methods:{getBreadcrumb:function(e){var t=e;return"function"===typeof t&&(t=t.call(this,this.$route.params)),"object"===typeof t&&(t=t.label),t},getPath:function(e){for(var t=e.path,r=0,n=Object.entries(this.$route.params);r<n.length;r++){var a=n[r],o=a[0],i=a[1];t=t.replace(":"+o,i)}return t}},render:function(e){var t=this;return this.$breadcrumbs.length?e("ol",{class:{breadcrumb:!0}},this.$breadcrumbs.map((function(r,n){var a;if(null===(a=null===r||void 0===r?void 0:r.meta)||void 0===a?void 0:a.breadcrumb){var o=t.getBreadcrumb(r.meta.breadcrumb);if((null===o||void 0===o?void 0:o.length)>0)return e("li",{class:{"breadcrumb-item":!0},props:{key:n}},[e("router-link",{props:{to:{path:t.getPath(r)},tag:n!==t.$breadcrumbs.length-1?"a":"span"}}," "+o)])}return e()}))):e()}},t)))},e}(),f=new h;"undefined"!==typeof window&&window.Vue&&window.Vue.use(new h),n["a"].config.productionTip=!1,n["a"].use(f),new n["a"]({router:d,render:function(e){return e(c)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3f351c39.js.map