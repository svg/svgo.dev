"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[2317],{2643:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=o(5893),n=o(1151);const s={title:"Convert Transform",svgo:{pluginId:"convertTransform",defaultPlugin:!0,parameters:{convertToShorts:{description:"<p>Convert transforms to their shorthand alternatives.</p>",default:!0},degPrecision:{description:"<p>Number of decimal places to round degrees values to, using conventional rounding rules. Used for <code>rotate</code> and <code>skew</code>.</p>"},floatPrecision:{description:"<p>Number of decimal places to round to, using conventional rounding rules.</p>",default:3},transformPrecision:{description:"<p>Number of decimal places to round to, using conventional rounding rules.</p>",default:5},matrixToTransform:{description:'<p>If decompose matrices into simple transforms. See <a href="https://frederic-wang.fr/decomposition-of-2d-transform-matrices.html" target="_blank">Decomposition of 2D-transform matrices</a> for more context.</p>',default:!0},shortTranslate:{description:"<p>If to shorten references to <code>translate</code> with redundant parameters to omit them. i.e. <code>translate(10 0)</code> \u2192 <code>translate(10)</code></p>",default:!0},shortScale:{description:"<p>If to shorten references to <code>scale</code> with redundant parameters to omit them. i.e. <code>scale(2 2)</code> \u2192 <code>scale(2)</code></p>",default:!0},shortRotate:{description:"<p>If to shorten references to <code>rotate</code> with redundant parameters to omit them. i.e. <code>translate(cx cy) rotate(a) translate(-cx -cy)</code> \u2192 <code>rotate(a cx cy)</code></p>",default:!0},removeUseless:{description:"<p>If to remove redundant transforms like <code>translate(0)</code>, <code>skewX(0)</code>, or <code>skewY(0)</code>.</p>",default:!0},collapseIntoOne:{description:"<p>If to multiply transforms into one.</p>",default:!0}}}},a=void 0,i={id:"plugins/convert-transform",title:"Convert Transform",description:"Collapse multiple transforms into one, convert matrices to the short aliases, and much more.",source:"@site/.svgo/docs/03-plugins/convert-transform.mdx",sourceDirName:"03-plugins",slug:"/plugins/convert-transform",permalink:"/docs/plugins/convert-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/convert-transform.mdx",tags:[],version:"current",frontMatter:{title:"Convert Transform",svgo:{pluginId:"convertTransform",defaultPlugin:!0,parameters:{convertToShorts:{description:"<p>Convert transforms to their shorthand alternatives.</p>",default:!0},degPrecision:{description:"<p>Number of decimal places to round degrees values to, using conventional rounding rules. Used for <code>rotate</code> and <code>skew</code>.</p>"},floatPrecision:{description:"<p>Number of decimal places to round to, using conventional rounding rules.</p>",default:3},transformPrecision:{description:"<p>Number of decimal places to round to, using conventional rounding rules.</p>",default:5},matrixToTransform:{description:'<p>If decompose matrices into simple transforms. See <a href="https://frederic-wang.fr/decomposition-of-2d-transform-matrices.html" target="_blank">Decomposition of 2D-transform matrices</a> for more context.</p>',default:!0},shortTranslate:{description:"<p>If to shorten references to <code>translate</code> with redundant parameters to omit them. i.e. <code>translate(10 0)</code> \u2192 <code>translate(10)</code></p>",default:!0},shortScale:{description:"<p>If to shorten references to <code>scale</code> with redundant parameters to omit them. i.e. <code>scale(2 2)</code> \u2192 <code>scale(2)</code></p>",default:!0},shortRotate:{description:"<p>If to shorten references to <code>rotate</code> with redundant parameters to omit them. i.e. <code>translate(cx cy) rotate(a) translate(-cx -cy)</code> \u2192 <code>rotate(a cx cy)</code></p>",default:!0},removeUseless:{description:"<p>If to remove redundant transforms like <code>translate(0)</code>, <code>skewX(0)</code>, or <code>skewY(0)</code>.</p>",default:!0},collapseIntoOne:{description:"<p>If to multiply transforms into one.</p>",default:!0}}}},sidebar:"docsSidebar",previous:{title:"Convert Style to Attributes",permalink:"/docs/plugins/convert-style-to-attrs"},next:{title:"Inline Styles",permalink:"/docs/plugins/inline-styles"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{PluginDemo:o,PluginParams:s,PluginUsage:a}=t;return o||p("PluginDemo",!0),s||p("PluginParams",!0),a||p("PluginUsage",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Collapse multiple transforms into one, convert matrices to the short aliases, and much more."}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/svg/svgo/blob/main/plugins/convertTransform.js",children:"https://github.com/svg/svgo/blob/main/plugins/convertTransform.js"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>a});var r=o(7294);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);