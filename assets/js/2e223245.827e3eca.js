"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[8833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),v=o,d=u["".concat(a,".").concat(v)]||u[v]||m[v]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=v;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],c={title:"Convert Ellipse to Circle",svgo:{pluginId:"convertEllipseToCircle",defaultPlugin:!0}},a=void 0,p={unversionedId:"plugins/convert-ellipse-to-circle",id:"plugins/convert-ellipse-to-circle",title:"Convert Ellipse to Circle",description:"Convert non-eccentric ` elements to ` elements.",source:"@site/.svgo/docs/03-plugins/convert-ellipse-to-circle.mdx",sourceDirName:"03-plugins",slug:"/plugins/convert-ellipse-to-circle",permalink:"/docs/plugins/convert-ellipse-to-circle",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/convert-ellipse-to-circle.mdx",tags:[],version:"current",frontMatter:{title:"Convert Ellipse to Circle",svgo:{pluginId:"convertEllipseToCircle",defaultPlugin:!0}},sidebar:"docsSidebar",previous:{title:"Convert Colors",permalink:"/docs/plugins/convert-colors"},next:{title:"Convert One-Stop Gradients",permalink:"/docs/plugins/convert-one-stop-gradients"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},v=m("PluginUsage"),d=m("PluginDemo"),g={toc:u},f="wrapper";function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Convert non-eccentric ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/SVG/Element/ellipse"},(0,l.kt)("inlineCode",{parentName:"a"},"<ellipse>"))," elements to ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/SVG/Element/circle"},(0,l.kt)("inlineCode",{parentName:"a"},"<circle>"))," elements."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(v,{mdxType:"PluginUsage"}),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)(d,{mdxType:"PluginDemo"}),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/convertEllipseToCircle.js"},"https://github.com/svg/svgo/blob/main/plugins/convertEllipseToCircle.js"))))}b.isMDXComponent=!0}}]);