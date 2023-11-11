"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[9514,4972],{6952:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var n=a(7294),l=a(6010),r=a(1944),o=a(5281),i=a(3320),c=a(3438),s=n.createContext(null);function d(e){var t=e.children,a=e.version;return n.createElement(s.Provider,{value:a},t)}var m=a(1116),u=a(3435),b=a(5999),p=a(2466),h=a(5936);const v={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),l=a[0],r=a[1],o=(0,n.useRef)(!1),i=(0,p.Ct)(),c=i.startScroll,s=i.cancelScroll;return(0,p.RF)((function(e,a){var n=e.scrollY,l=null==a?void 0:a.scrollY;l&&(o.current?o.current=!1:n>=l?(s(),r(!1)):n<t?r(!1):n+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,h.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:l,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,v.backToTopButton,t&&v.backToTopButtonShow),type:"button",onClick:a})}var f=a(1442),g=a(6550),k=a(7524),C=a(6668),_=a(7462),I=a(3366),N=a(9960),S=a(4996),Z=a(2263),x=a(941),T=["imageClassName","titleClassName"];function w(e){var t=e.logo,a=e.alt,l=e.imageClassName,r={light:(0,S.Z)(t.src),dark:(0,S.Z)(t.srcDark||t.src)},o=n.createElement(x.Z,{className:t.className,sources:r,height:t.height,width:t.width,alt:a,style:t.style});return l?n.createElement("div",{className:l},o):o}function y(e){var t,a=(0,Z.Z)().siteConfig.title,l=(0,C.L)().navbar,r=l.title,o=l.logo,i=e.imageClassName,c=e.titleClassName,s=(0,I.Z)(e,T),d=(0,S.Z)((null==o?void 0:o.href)||"/"),m=r?"":a,u=null!=(t=null==o?void 0:o.alt)?t:m;return n.createElement(N.Z,(0,_.Z)({to:d},s,(null==o?void 0:o.target)&&{target:o.target}),o&&n.createElement(w,{logo:o,alt:u,imageClassName:i}),null!=r&&n.createElement("b",{className:c},r))}function B(e){return n.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const L={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function A(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",L.collapseSidebarButton),onClick:t},n.createElement(B,{className:L.collapseSidebarButtonIcon}))}var M=a(9689),H=a(9688),P=Symbol("EmptyContext"),F=n.createContext(P);function W(e){var t=e.children,a=(0,n.useState)(null),l=a[0],r=a[1],o=(0,n.useMemo)((function(){return{expandedItem:l,setExpandedItem:r}}),[l]);return n.createElement(F.Provider,{value:o},t)}var V=a(6043),R=a(8596),D=a(2389),U=["item","onItemClick","activePath","level","index"];function j(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function z(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=e.level,s=e.index,d=(0,I.Z)(e,U),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,C.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,D.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),f=(0,c._F)(t,r),g=(0,R.Mg)(h,r),k=(0,V.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),S=k.collapsed,Z=k.setCollapsed,x=function(){var e=(0,n.useContext)(F);if(e===P)throw new H.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=x.expandedItem,w=x.setExpandedItem,y=function(e){void 0===e&&(e=!S),w(e?null:s),Z(e)};return function(e){var t=e.isActive,a=e.collapsed,l=e.updateCollapsed,r=(0,H.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:f,collapsed:S,updateCollapsed:y}),(0,n.useEffect)((function(){b&&null!=T&&T!==s&&v&&Z(!0)}),[b,T,s,Z,v]),n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":S},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(N.Z,(0,_.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==a||a(t),h?y(!1):(e.preventDefault(),y())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=E?E:"#":E},d),u),h&&b&&n.createElement(j,{categoryLabel:u,onClick:function(e){e.preventDefault(),y()}})),n.createElement(V.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},n.createElement(ae,{items:m,tabIndex:S?-1:0,onItemClick:a,activePath:r,level:i+1})))}var K=a(3919),Y=a(9471);const G={menuExternalLink:"menuExternalLink_NmtK"};var O=["item","onItemClick","activePath","level","index"];function q(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=e.level,s=(e.index,(0,I.Z)(e,O)),d=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,r),h=(0,K.Z)(d);return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},n.createElement(N.Z,(0,_.Z)({className:(0,l.Z)("menu__link",!h&&G.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},h&&{onClick:a?function(){return a(t)}:void 0},s),m,!h&&n.createElement(Y.Z,null)))}const J={menuHtmlItem:"menuHtmlItem_M9Kj"};function Q(e){var t=e.item,a=e.level,r=e.index,i=t.value,c=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[J.menuHtmlItem,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}var X=["item"];function $(e){var t=e.item,a=(0,I.Z)(e,X);switch(t.type){case"category":return n.createElement(z,(0,_.Z)({item:t},a));case"html":return n.createElement(Q,(0,_.Z)({item:t},a));default:return n.createElement(q,(0,_.Z)({item:t},a))}}var ee=["items"];function te(e){var t=e.items,a=(0,I.Z)(e,ee);return n.createElement(W,null,t.map((function(e,t){return n.createElement($,(0,_.Z)({key:t,item:e,index:t},a))})))}const ae=(0,n.memo)(te),ne={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function le(e){var t=e.path,a=e.sidebar,r=e.className,i=function(){var e=(0,M.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,p.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{"aria-label":(0,b.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",ne.menu,i&&ne.menuWithAnnouncementBar,r)},n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(ae,{items:a,activePath:t,level:1})))}const re="sidebar_njMd",oe="sidebarWithHideableNavbar_wUlq",ie="sidebarHidden_VK0M",ce="sidebarLogo_isFc";function se(e){var t=e.path,a=e.sidebar,r=e.onCollapse,o=e.isHidden,i=(0,C.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,l.Z)(re,c&&oe,o&&ie)},c&&n.createElement(y,{tabIndex:-1,className:ce}),n.createElement(le,{path:t,sidebar:a}),s&&n.createElement(A,{onClick:r}))}const de=n.memo(se);var me=a(3102),ue=a(3163),be=function(e){var t=e.sidebar,a=e.path,r=(0,ue.e)();return n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(ae,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function pe(e){return n.createElement(me.Zo,{component:be,props:e})}const he=n.memo(pe);function ve(e){var t=(0,k.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(de,e),l&&n.createElement(he,e))}const Ee={expandButton:"expandButton_pI3x",expandButtonIcon:"expandButtonIcon_Vtwu"};function fe(e){var t=e.toggleSidebar;return n.createElement("div",{className:Ee.expandButton,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(B,{className:Ee.expandButtonIcon}))}const ge={docSidebarContainer:"docSidebarContainer_rpaz",docSidebarContainerHidden:"docSidebarContainerHidden_wC1p",sidebarViewport:"sidebarViewport_YVHi"};function ke(e){var t,a=e.children,l=(0,m.V)();return n.createElement(n.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},a)}function Ce(e){var t=e.sidebar,a=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,i=(0,g.TH)().pathname,c=(0,n.useState)(!1),s=c[0],d=c[1],m=(0,n.useCallback)((function(){s&&d(!1),!s&&(0,f.n)()&&d(!0),r((function(e){return!e}))}),[r,s]);return n.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,ge.docSidebarContainer,a&&ge.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(ge.docSidebarContainer)&&a&&d(!0)}},n.createElement(ke,null,n.createElement("div",{className:(0,l.Z)(ge.sidebarViewport,s&&ge.sidebarViewportHidden)},n.createElement(ve,{sidebar:t,path:i,onCollapse:m,isHidden:s}),s&&n.createElement(fe,{toggleSidebar:m}))))}const _e={docMainContainer:"docMainContainer_RiV8",docMainContainerEnhanced:"docMainContainerEnhanced_u7bj",docItemWrapperEnhanced:"docItemWrapperEnhanced_mUgT"};function Ie(e){var t=e.hiddenSidebarContainer,a=e.children,r=(0,m.V)();return n.createElement("main",{className:(0,l.Z)(_e.docMainContainer,(t||!r)&&_e.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",_e.docItemWrapper,t&&_e.docItemWrapperEnhanced)},a))}const Ne={docPage:"docPage_qMb8",docsWrapper:"docsWrapper_W2AM","themedComponent--light":"themedComponent--light_lO3j"};function Se(e){var t=e.children,a=(0,m.V)(),l=(0,n.useState)(!1),r=l[0],o=l[1];return n.createElement(u.Z,{wrapperClassName:Ne.docsWrapper},n.createElement(E,null),n.createElement("div",{className:Ne.docPage},n.createElement(Ce,{sidebar:a.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),n.createElement(Ie,{hiddenSidebarContainer:r},t)))}var Ze=a(4972),xe=a(197);function Te(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(xe.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(r.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function we(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(Ze.default,null);var i=a.docElement,s=a.sidebarName,u=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Te,e),n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d,{version:t},n.createElement(m.b,{name:s,items:u},n.createElement(Se,null,i)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(5999),r=a(1944),o=a(3435);function i(){return n.createElement(n.Fragment,null,n.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);