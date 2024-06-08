"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[6480],{8666:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=o(5893),n=o(1151);const s={title:"Remove ViewBox",svgo:{pluginId:"removeViewBox",defaultPlugin:!0}},r=void 0,l={id:"plugins/remove-viewbox",title:"Remove ViewBox",description:"Removes the viewBox attribute where it matches the documents width and height.",source:"@site/.svgo/docs/03-plugins/remove-viewbox.mdx",sourceDirName:"03-plugins",slug:"/plugins/remove-viewbox",permalink:"/docs/plugins/remove-viewbox",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/remove-viewbox.mdx",tags:[],version:"current",frontMatter:{title:"Remove ViewBox",svgo:{pluginId:"removeViewBox",defaultPlugin:!0}},sidebar:"docsSidebar",previous:{title:"Remove Useless Stroke and Fill",permalink:"/docs/plugins/remove-useless-stroke-and-fill"},next:{title:"Remove XLink",permalink:"/docs/plugins/remove-xlink"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{PluginDemo:o,PluginUsage:s}=t;return o||m("PluginDemo",!0),s||m("PluginUsage",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Removes the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/viewBox",children:(0,i.jsx)(t.code,{children:"viewBox"})})," attribute where it matches the documents width and height."]}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(t.p,{children:"This plugin prevents SVGs from scaling, so they will not fill their parent container, or may clip if the container is too small."}),(0,i.jsxs)(t.p,{children:["Some external tools that use SVGO have also been found to override the default preset to disable this plugin by default, including ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/blob/e17784effa2c370d81c7806c22ad19c6dce4a1cc/packages/docusaurus-utils/src/webpackUtils.ts#L127",children:"Docusaurus"})," and ",(0,i.jsx)(t.a,{href:"https://react-svgr.com/docs/migrate/#svgo",children:"SVGR"}),"."]}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://github.com/svg/svgo/issues/1128",children:"svg/svgo#1128"})," for more context."]})]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/svg/svgo/blob/main/plugins/removeViewBox.js",children:"https://github.com/svg/svgo/blob/main/plugins/removeViewBox.js"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>r});var i=o(7294);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);