"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[7918],{2247:(e,n,s)=>{s.d(n,{Z:()=>t});var r=s(6010);s(7294);const a={badge:"badge_vJP_"};var i=s(5893);function t(){return(0,i.jsx)("span",{className:(0,r.Z)(a.badge),title:"This plugin is enabled by default.",children:"Default"})}},1425:(e,n,s)=>{s.d(n,{Z:()=>o});var r=s(7294),a=s(8883),i=s(4866),t=s(5162),l=s(6010);const d={fixedHeight:"fixedHeight_R_Gw","code-markup":"code-markup_Hxn4",renderPreview:"renderPreview_qwRH",malformedWarning:"malformedWarning_V_zv"};var c=s(5893);function o(e){var n=(0,r.useState)(!1),s=n[0],o=n[1],u=e.svg;return(0,c.jsxs)(i.Z,{groupId:"preview-mode",children:[(0,c.jsx)(t.Z,{value:"svg",label:"Markup",children:(0,c.jsx)("div",{className:(0,l.Z)(d.fixedHeight),children:(0,c.jsx)(a.Z,{language:"svg",children:u})})}),(0,c.jsx)(t.Z,{value:"preview",label:"Render",children:(0,c.jsx)("div",{className:(0,l.Z)(d.renderPreview),children:s?(0,c.jsxs)("span",{className:(0,l.Z)(d.malformedWarning),children:["SVG can only be rendered inline, not standalone or in an ",(0,c.jsx)("code",{children:"<img>"})," element."]}):(0,c.jsx)("img",{src:"data:image/svg+xml;utf8,"+encodeURIComponent(u),alt:"Render of the optimized SVG.",onError:function(){o(!0)}})})})]})}},3273:(e,n,s)=>{s.r(n),s.d(n,{default:()=>_});s(7294);var r=s(1944),a=s(5130),i=s(1602),t=s(6010),l=s(2400),d=s(5281),c=s(6233),o=s(5893);function u(e){return(0,o.jsx)("div",{className:(0,t.Z)(d.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(c.Z,Object.assign({},e))})})}function g(){var e=(0,a.k)().metadata.tags,n=e.length>0;return n?(0,o.jsx)("footer",{className:(0,t.Z)(d.k.docs.docFooter,"docusaurus-mt-lg"),children:n&&(0,o.jsx)(u,{tags:e})}):null}var v=s(3616),h=s(2503),m=s(5042),x=s(2247);const j={header:"header_NT8n",badge:"badge_IsQY"};function f(e){var n,s=e.children,r=(0,a.k)(),i=r.metadata,l=r.frontMatter,c=function(e,n,s){return n.hide_title||void 0!==s?null:e.title}(i,l,r.contentTitle);return(0,o.jsxs)("div",{className:(0,t.Z)(d.k.docs.docMarkdown,"markdown"),children:[c&&(0,o.jsxs)("header",{className:(0,t.Z)(j.header),children:[(0,o.jsx)(h.Z,{as:"h1",children:c}),(null==(n=l.svgo)?void 0:n.defaultPlugin)&&(0,o.jsx)("div",{className:(0,t.Z)(j.badge),children:(0,o.jsx)(x.Z,{})})]}),(0,o.jsx)(m.Z,{children:s})]})}var p=s(1310);const Z={docItemContainer:"docItemContainer_c0TR",wrapper:"wrapper_xJ_b",docItemCol:"docItemCol_z5aJ",toc:"toc_ubMy"};function b(e){var n=e.children;return(0,o.jsxs)("div",{className:(0,t.Z)(Z.wrapper),children:[(0,o.jsx)("div",{className:(0,t.Z)("col",Z.docItemCol),children:(0,o.jsxs)("div",{className:Z.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(p.Z,{}),(0,o.jsx)(f,{children:n}),(0,o.jsx)(g,{})]}),(0,o.jsx)(l.Z,{})]})}),(0,o.jsx)("div",{className:(0,t.Z)(Z.toc),children:(0,o.jsx)(v.Z,{})})]})}function _(e){var n="docs-doc-id-"+e.content.metadata.unversionedId,s=e.content;return(0,o.jsx)(a.b,{content:e.content,children:(0,o.jsxs)(r.FG,{className:n,children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)(b,{children:(0,o.jsx)(s,{})})]})})}},2866:(e,n,s)=>{s.d(n,{Z:()=>m});var r=s(9124),a=s(4866),i=s(5162),t=s(2247),l=s(7294),d=s(5130),c=s(8883),o=s(5893);var u=s(6010);const g="leftMargin_Pe6_";function v(e){return(0,o.jsx)(c.Z,{language:"js",title:"svgo.config.js",children:'module.export = {\n  plugins: [\n    "'+e.pluginId+'"\n  ]\n}'})}var h=s(1425);const m=Object.assign({},r.Z,{Tabs:a.Z,TabItem:i.Z,DefaultBadge:t.Z,PluginDemo:function(){var e='const svg = `\n<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">\n  \x3c!-- Created with love! --\x3e\n  <defs>\n    <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/>\n  </defs>\n  <g>\n    <use href="#circle" transform="skewX(16)"/>\n    <rect id="useless" width="0" height="0" fill="#ff0000"/>\n  </g>\n</svg>\n`;\n\nconst svgoConfig = {\n  js2svg: { indent: 2, pretty: true },\n  plugins: [\n    "'+(0,d.k)().frontMatter.svgo.pluginId+'"\n  ]\n}\n\nrender(<SvgoPreview svg={svg} svgoConfig={svgoConfig}/>);\n';return(0,o.jsx)(c.Z,{language:"js",live:!0,noInline:!0,children:e})},PluginParams:function(){var e=(0,d.k)().frontMatter.svgo.parameters,n=Object.keys(e).filter((function(n){var s;return null==(s=e[n])?void 0:s.description})).map((function(n){return Object.assign({name:n},e[n])}));return(0,o.jsx)("dl",{children:n.map((function(e){return(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)("dt",{children:(0,o.jsx)("code",{children:e.name})}),(0,o.jsx)("dd",{className:(0,u.Z)(g),children:(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})]},e.name)}))})},PluginUsage:function(){var e=(0,d.k)().frontMatter.svgo,n=e.pluginId,s=e.parameters;if(!s)return(0,o.jsx)(v,{pluginId:n});var r=Object.keys(s).filter((function(e){return s[e]&&void 0!==s[e].default})).map((function(e){return"        "+e+": "+JSON.stringify(s[e].default)})).join(",\n");return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{value:"basic",label:"Basic",default:!0,children:(0,o.jsx)(v,{pluginId:n})}),s&&(0,o.jsx)(i.Z,{value:"params",label:"Parameters",children:(0,o.jsx)(c.Z,{language:"js",title:"svgo.config.js",children:'module.export = {\n  plugins: [\n    {\n      name: "'+n+'",\n      params: {\n'+r+"\n      }\n    }\n  ]\n}"})})]})},SvgPreview:h.Z})},4992:(e,n,s)=>{s.d(n,{Z:()=>c});s(7294);var r=s(6010),a=s(5259),i=s(1425);const t="profit_urLh",l="highlight_PYLI";var d=s(5893);const c={SvgoPreview:function(e){var n=e.svg,s=e.svgoConfig,c=(0,a.t)(n,s).data,o=n.length,u=c.length,g=100-100*u/o,v=Math.round(o/1024*1e3)/1e3+" KiB",h=Math.round(u/1024*1e3)/1e3+" KiB",m=g<0?"+":"-",x=Math.abs(Math.round(10*g)/10)+"%";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{svg:c}),(0,d.jsxs)("span",{className:(0,r.Z)(t),children:[v," ",m," ",(0,d.jsx)("span",{className:(0,r.Z)(l),children:x})," = ",h]})]})}}},4971:(e,n,s)=>{s.d(n,{Z:()=>v});var r=s(6010),a=s(7294),i=s(5130),t=s(5999);const l="rootToc_LhCa",d="onThisPage_PKNE",c="noSeperator_JdoM",o="editPage_IZFO";var u=s(5893);function g(e){var n=e.toc,s=e.className,a=e.linkClassName,v=e.isChild,h=(0,i.k)().metadata;if(!n.length)return null;var m=h.editUrl;return(0,u.jsxs)(u.Fragment,{children:[!v&&(0,u.jsx)("div",{className:(0,r.Z)(d),children:"On this page"}),(0,u.jsx)("ul",{className:(0,r.Z)(v?void 0:s,v?void 0:l,c),children:n.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:s,linkClassName:a})]},e.id)}))}),!v&&(0,u.jsx)("div",{className:(0,r.Z)(o),children:(0,u.jsx)("a",{href:m,target:"_blank",className:null!=a?a:void 0,children:(0,u.jsx)(t.Z,{children:"Edit this page on GitHub"})})})]})}const v=a.memo(g)}}]);