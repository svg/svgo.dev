"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[2366],{6697:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(5893),i=s(1151);const o={title:"Cleanup IDs",svgo:{pluginId:"cleanupIds",parameters:{remove:{description:"<p>If to remove all unreferenced IDs.</p>",default:!0},minify:{description:"<p>If to minify referenced IDs.</p>",default:!0},preserve:{description:"<p>Elements with one of these IDs will be ignored.</p>",default:[]},preservePrefixes:{description:"<p>Elements with an ID that starts with one of these prefixes will be ignored.</p>",default:[]},force:{description:"<p>This plugin normally does nothing if a <code>&#x3C;script></code> or <code>&#x3C;style></code> element is found. Setting this to true will bypass that behaviour, which may result in destructive changes.</p>",default:!1}},defaultPlugin:!0}},r=void 0,l={id:"plugins/cleanup-ids",title:"Cleanup IDs",description:"Removes unused IDs, and minifys IDs that are referenced by other elements.",source:"@site/.svgo/docs/03-plugins/cleanup-ids.mdx",sourceDirName:"03-plugins",slug:"/plugins/cleanup-ids",permalink:"/docs/plugins/cleanup-ids",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/cleanup-ids.mdx",tags:[],version:"current",frontMatter:{title:"Cleanup IDs",svgo:{pluginId:"cleanupIds",parameters:{remove:{description:"<p>If to remove all unreferenced IDs.</p>",default:!0},minify:{description:"<p>If to minify referenced IDs.</p>",default:!0},preserve:{description:"<p>Elements with one of these IDs will be ignored.</p>",default:[]},preservePrefixes:{description:"<p>Elements with an ID that starts with one of these prefixes will be ignored.</p>",default:[]},force:{description:"<p>This plugin normally does nothing if a <code>&#x3C;script></code> or <code>&#x3C;style></code> element is found. Setting this to true will bypass that behaviour, which may result in destructive changes.</p>",default:!1}},defaultPlugin:!0}},sidebar:"docsSidebar",previous:{title:"Cleanup Enable Background",permalink:"/docs/plugins/cleanup-enable-background"},next:{title:"Cleanup List of Values",permalink:"/docs/plugins/cleanup-list-of-values"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{PluginDemo:s,PluginParams:o,PluginUsage:r}=n;return s||p("PluginDemo",!0),o||p("PluginParams",!0),r||p("PluginUsage",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Removes unused IDs, and minifys IDs that are referenced by other elements."}),"\n",(0,t.jsxs)(n.p,{children:["By default, we back off from removing and minifying IDs if a ",(0,t.jsx)(n.code,{children:"<script>"})," or ",(0,t.jsx)(n.code,{children:"<style>"})," element is present in the document. You can bypass this behavior by setting the ",(0,t.jsx)(n.code,{children:"force"})," parameter to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Between v2 and v3, the plugin ID was renamed from ",(0,t.jsx)(n.code,{children:"cleanupIDs"})," to ",(0,t.jsx)(n.code,{children:"cleanupIds"}),", if you've recently migrated and having issues, please double-check the capitalization!"]})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"This plugin has been known to cause problems when inlining multiple SVGs in the same parent document. Due to the predictable algorithm used to minify IDs, separate documents that are run though SVGO may end up with clashing IDs."}),(0,t.jsxs)(n.p,{children:["You can work around this by enabling the ",(0,t.jsx)(n.a,{href:"/docs/plugins/prefix-ids/",children:(0,t.jsx)(n.strong,{children:"Prefix IDs"})})," plugin. Alternatively, you can set the ",(0,t.jsx)(n.code,{children:"minify"})," parameter to ",(0,t.jsx)(n.code,{children:"false"}),", however this will not resolve the issue if your SVGs already had clashing IDs to start with."]}),(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/8297",children:"facebook/docusaurus#8297"})," for more context."]})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/svg/svgo/blob/main/plugins/cleanupIds.js",children:"https://github.com/svg/svgo/blob/main/plugins/cleanupIds.js"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(7294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);