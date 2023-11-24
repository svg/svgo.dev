"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[6150],{5355:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(5893),n=t(1151);const s={title:"Convert Colors",svgo:{pluginId:"convertColors",defaultPlugin:!0,parameters:{currentColor:{description:'If to convert all instances of a color to <code>currentColor</code>. This means to inherit the active foreground color, for example in HTML5 this would be the <a href="https://developer.mozilla.org/docs/Web/CSS/color" target="_blank"><code>color</code></a> property in CSS.',default:!1},names2hex:{description:"If to convert color names to the hex equivalent.",default:!0},rgb2hex:{description:"If to convert RGB colors to the hex equivalent, does ignores RGBA.",default:!0},shorthex:{description:"If to convert 6 character hex colors to the 3 character equivalent where possible.",default:!0},shortname:{description:"If to convert hex colors to the color name, if the color name is shorter then the hex equivalent.",default:!0}}}},l=void 0,c={id:"plugins/convert-colors",title:"Convert Colors",description:"Converts color references to the shortest equivalent.",source:"@site/.svgo/docs/03-plugins/convert-colors.mdx",sourceDirName:"03-plugins",slug:"/plugins/convert-colors",permalink:"/docs/plugins/convert-colors",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/convert-colors.mdx",tags:[],version:"current",frontMatter:{title:"Convert Colors",svgo:{pluginId:"convertColors",defaultPlugin:!0,parameters:{currentColor:{description:'If to convert all instances of a color to <code>currentColor</code>. This means to inherit the active foreground color, for example in HTML5 this would be the <a href="https://developer.mozilla.org/docs/Web/CSS/color" target="_blank"><code>color</code></a> property in CSS.',default:!1},names2hex:{description:"If to convert color names to the hex equivalent.",default:!0},rgb2hex:{description:"If to convert RGB colors to the hex equivalent, does ignores RGBA.",default:!0},shorthex:{description:"If to convert 6 character hex colors to the 3 character equivalent where possible.",default:!0},shortname:{description:"If to convert hex colors to the color name, if the color name is shorter then the hex equivalent.",default:!0}}}},sidebar:"docsSidebar",previous:{title:"Collapse Groups",permalink:"/docs/plugins/collapse-groups"},next:{title:"Convert Ellipse to Circle",permalink:"/docs/plugins/convert-ellipse-to-circle"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{PluginDemo:t,PluginParams:s,PluginUsage:l}=o;return t||x("PluginDemo",!0),s||x("PluginParams",!0),l||x("PluginUsage",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Converts color references to the shortest equivalent."}),"\n",(0,r.jsx)(o.p,{children:"Colors can be represented in various notations, the following table showcases some equivalent colors:"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Name"}),(0,r.jsx)(o.th,{children:"rgb()"}),(0,r.jsx)(o.th,{children:"#rrggbb"}),(0,r.jsx)(o.th,{children:"#rgb"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"red"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"rgb(255, 0, 0)"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#ff0000"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#f00"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"orange"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"rgb(255, 165, 0)"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#ffa500"})}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"yellow"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"rgb(255, 255, 0)"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#ffff00"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#ff0"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"green"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"rgb(0, 128, 0)"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#008000"})}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"blue"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"rgb(0, 0, 255)"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#0000FF"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#00f"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"purple"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"rgb(128, 0, 128)"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"#800080"})}),(0,r.jsx)(o.td,{})]})]})]}),"\n",(0,r.jsx)(o.p,{children:"It makes no difference which format is received by a client, and each one has wide support across browsers and image viewing software."}),"\n",(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(o.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(o.h2,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(o.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/svg/svgo/blob/main/plugins/convertColors.js",children:"https://github.com/svg/svgo/blob/main/plugins/convertColors.js"})}),"\n"]})]})}function a(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function x(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>l});var r=t(7294);const n={},s=r.createContext(n);function l(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);