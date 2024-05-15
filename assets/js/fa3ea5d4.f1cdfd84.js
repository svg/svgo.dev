"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[3774],{9327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const o={title:"cleanupIds",svgo:{pluginId:"cleanupIds",parameters:{remove:{description:"If to remove all unreferenced IDs.",default:!0},minify:{description:"If to minify referenced IDs.",default:!0},preserve:{description:"Elements with one of these IDs will be ignored.",default:[]},preservePrefixes:{description:"Elements with an ID that starts with one of these prefixes will be ignored.",default:[]},force:{description:"This plugin normally does nothing if a <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> element is found. Setting this to true will bypass that behaviour, which may result in destructive changes.",default:!1}},defaultPlugin:!0}},r=void 0,a={id:"plugins/cleanupIds",title:"cleanupIds",description:"Removes unused IDs, and minifys IDs that are referenced by other elements.",source:"@site/.svgo/docs/03-plugins/cleanupIds.mdx",sourceDirName:"03-plugins",slug:"/plugins/cleanupIds",permalink:"/docs/plugins/cleanupIds",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/cleanupIds.mdx",tags:[],version:"current",frontMatter:{title:"cleanupIds",svgo:{pluginId:"cleanupIds",parameters:{remove:{description:"If to remove all unreferenced IDs.",default:!0},minify:{description:"If to minify referenced IDs.",default:!0},preserve:{description:"Elements with one of these IDs will be ignored.",default:[]},preservePrefixes:{description:"Elements with an ID that starts with one of these prefixes will be ignored.",default:[]},force:{description:"This plugin normally does nothing if a <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> element is found. Setting this to true will bypass that behaviour, which may result in destructive changes.",default:!1}},defaultPlugin:!0}},sidebar:"docsSidebar",previous:{title:"cleanupEnableBackground",permalink:"/docs/plugins/cleanupEnableBackground"},next:{title:"cleanupListOfValues",permalink:"/docs/plugins/cleanupListOfValues"}},l={},d=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Removes unused IDs, and minifys IDs that are referenced by other elements."}),"\n",(0,s.jsxs)(t.p,{children:["By default, we back off from removing and minifying IDs if a ",(0,s.jsx)(t.code,{children:"<script>"})," or ",(0,s.jsx)(t.code,{children:"<style>"})," element is present in the document. You can bypass this behavior by setting the ",(0,s.jsx)(t.code,{children:"force"})," parameter to ",(0,s.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Between v2 and v3, the plugin ID was renamed from ",(0,s.jsx)(t.code,{children:"cleanupIDs"})," to ",(0,s.jsx)(t.code,{children:"cleanupIds"}),", if you've recently migrated and having issues, please double-check the capitalization!"]})}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"This plugin has been known to cause problems when inlining multiple SVGs in the same parent document. Due to the predictable algorithm used to minify IDs, separate documents that are run though SVGO may end up with clashing IDs."}),(0,s.jsxs)(t.p,{children:["You can work around this by enabling the ",(0,s.jsx)(t.a,{href:"/docs/plugins/prefixIds/",children:"prefixIds"})," plugin. Alternatively, you can set the ",(0,s.jsx)(t.code,{children:"minify"})," parameter to ",(0,s.jsx)(t.code,{children:"false"}),", however this will not resolve the issue if your SVGs already had clashing IDs to start with."]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/8297",children:"facebook/docusaurus#8297"})," for more context."]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);