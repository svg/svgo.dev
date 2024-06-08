"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[9626],{4048:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=s(5893),i=s(1151);const r={title:"Sort Defs Children",svgo:{pluginId:"sortDefsChildren",defaultPlugin:!0}},d=void 0,l={id:"plugins/sort-defs-children",title:"Sort Defs Children",description:"Sorts all children in the `` element. This does not reduce the size of the SVG, but may improve how compression algorithms perform on it.",source:"@site/.svgo/docs/03-plugins/sort-defs-children.mdx",sourceDirName:"03-plugins",slug:"/plugins/sort-defs-children",permalink:"/docs/plugins/sort-defs-children",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/sort-defs-children.mdx",tags:[],version:"current",frontMatter:{title:"Sort Defs Children",svgo:{pluginId:"sortDefsChildren",defaultPlugin:!0}},sidebar:"docsSidebar",previous:{title:"Sort Attributes",permalink:"/docs/plugins/sort-attrs"},next:{title:"Plugin Architecture",permalink:"/docs/plugins-api"}},o={},h=[{value:"Usage",id:"usage",level:2},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{PluginDemo:s,PluginUsage:r}=t;return s||u("PluginDemo",!0),r||u("PluginUsage",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Sorts all children in the ",(0,n.jsx)(t.code,{children:"<defs>"})," element. This does not reduce the size of the SVG, but ",(0,n.jsx)(t.em,{children:"may"})," improve how compression algorithms perform on it."]}),"\n",(0,n.jsx)(t.p,{children:"To group similar nodes together, elements are sorted by the following attributes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Frequency"}),"\n",(0,n.jsx)(t.li,{children:"Element name length"}),"\n",(0,n.jsx)(t.li,{children:"Element name"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Here is a demonstration of SVGs that have been gzipped by ",(0,n.jsx)(t.a,{href:"https://nginx.org/en/docs/http/ngx_http_gzip_module.html",children:"NGINX"})," using the default compression level of 1."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"SVG"}),(0,n.jsx)(t.th,{children:"Unsorted \xb9"}),(0,n.jsx)(t.th,{children:"Sorted \xb2"}),(0,n.jsx)(t.th,{children:"Reduced (%)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://archlinux.org/art/",children:"Arch Linux Logo"})}),(0,n.jsx)(t.td,{children:"2.61 kB"}),(0,n.jsx)(t.td,{children:"2.61 kB"}),(0,n.jsx)(t.td,{children:"0 kB (0%)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://gitlab.gnome.org/GNOME/gnome-backgrounds/-/blob/main/backgrounds/blobs-d.svg",children:"Blobs"})}),(0,n.jsx)(t.td,{children:"13.89 kB"}),(0,n.jsx)(t.td,{children:"13.88 kB"}),(0,n.jsx)(t.td,{children:"0.01 kB (0.1%)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://inkscape.org/~Denis_Kuznetsky/%E2%98%85isometric-madness",children:"Isometric Madness"})}),(0,n.jsx)(t.td,{children:"123.87 kB"}),(0,n.jsx)(t.td,{children:"120.09 kB"}),(0,n.jsx)(t.td,{children:"3.78 kB (3.1%)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/tldr-pages/tldr/blob/main/images/banner.svg",children:"tldr-pages Banner"})}),(0,n.jsx)(t.td,{children:"791 B"}),(0,n.jsx)(t.td,{children:"786 B"}),(0,n.jsx)(t.td,{children:"5 B (0.6%)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/File:Wikipedia-logo-v2.svg",children:"Wikipedia Logo"})}),(0,n.jsx)(t.td,{children:"53.96 kB"}),(0,n.jsx)(t.td,{children:"53.87 kB"}),(0,n.jsx)(t.td,{children:"0.09 kB (0.2%)"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["\xb9 Uses the default plugins preset excluding ",(0,n.jsx)(t.code,{children:"sortAttr"})," and ",(0,n.jsx)(t.code,{children:"sortDefsChildren"}),".",(0,n.jsx)(t.br,{}),"\n","\xb2 Uses the default plugins preset as-is."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{}),"\n",(0,n.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,n.jsx)(s,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/svg/svgo/blob/main/plugins/sortDefsChildren.js",children:"https://github.com/svg/svgo/blob/main/plugins/sortDefsChildren.js"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>d});var n=s(7294);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);