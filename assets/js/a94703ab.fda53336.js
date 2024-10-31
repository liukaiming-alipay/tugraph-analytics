"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9048],{7815:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var n=a(6540),o=a(4164),s=a(5500),i=a(7559),r=a(6972),l=a(609),c=a(1312),d=a(3104),u=a(5062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=a(4848);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,o]=(0,n.useState)(!1),s=(0,n.useRef)(!1),{startScroll:i,cancelScroll:r}=(0,d.gk)();return(0,d.Mq)(((e,a)=>{let{scrollY:n}=e;const i=a?.scrollY;i&&(s.current?s.current=!1:n>=i?(r(),o(!1)):n<t?o(!1):n+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(s.current=!0,o(!1))})),{shown:a,scrollToTop:()=>i(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",i.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var b=a(3109),x=a(6347),v=a(4581),f=a(6342),g=a(3465);function T(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const A="collapseSidebarButton_PEFL",j="collapseSidebarButtonIcon_kv0_";function S(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",A),onClick:t,children:(0,m.jsx)(T,{className:j})})}var k=a(5041),C=a(9532);const y=Symbol("EmptyContext"),_=n.createContext(y);function w(e){let{children:t}=e;const[a,o]=(0,n.useState)(null),s=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:o})),[a]);return(0,m.jsx)(_.Provider,{value:s,children:t})}var B=a(1422),N=a(9169),L=a(8774),I=a(2303);function R(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function M(e){let{item:t,onItemClick:a,activePath:s,level:l,index:c,...d}=e;const{items:u,label:h,collapsible:p,className:b,href:x}=t,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,f.p)(),g=function(e){const t=(0,I.A)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.Nr)(e):void 0),[e,t])}(t),T=(0,r.w8)(t,s),A=(0,N.ys)(x,s),{collapsed:j,setCollapsed:S}=(0,B.u)({initialState:()=>!!p&&(!T&&t.collapsed)}),{expandedItem:k,setExpandedItem:w}=function(){const e=(0,n.useContext)(_);if(e===y)throw new C.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!j),w(e?null:c),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:o}=e;const s=(0,C.ZC)(t);(0,n.useEffect)((()=>{t&&!s&&a&&o(!1)}),[t,s,a,o])}({isActive:T,collapsed:j,updateCollapsed:M}),(0,n.useEffect)((()=>{p&&null!=k&&k!==c&&v&&S(!0)}),[p,k,c,S,v]),(0,m.jsxs)("li",{className:(0,o.A)(i.G.docs.docSidebarItemCategory,i.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":j},b),children:[(0,m.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,m.jsx)(L.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!x&&p,"menu__link--active":T}),onClick:p?e=>{a?.(t),x?M(!1):(e.preventDefault(),M())}:()=>{a?.(t)},"aria-current":A?"page":void 0,role:p&&!x?"button":void 0,"aria-expanded":p&&!x?!j:void 0,href:p?g??"#":g,...d,children:h}),x&&p&&(0,m.jsx)(R,{collapsed:j,categoryLabel:h,onClick:e=>{e.preventDefault(),M()}})]}),(0,m.jsx)(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:j,children:(0,m.jsx)(U,{items:u,tabIndex:j?-1:0,onItemClick:a,activePath:s,level:l+1})})]})}var E=a(6654),H=a(3186);const G="menuExternalLink_NmtK";function K(e){let{item:t,onItemClick:a,activePath:n,level:s,index:l,...c}=e;const{href:d,label:u,className:h,autoAddBaseUrl:p}=t,b=(0,r.w8)(t,n),x=(0,E.A)(d);return(0,m.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",h),children:(0,m.jsxs)(L.A,{className:(0,o.A)("menu__link",!x&&G,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:d,...x&&{onClick:a?()=>a(t):void 0},...c,children:[u,!x&&(0,m.jsx)(H.A,{})]})},u)}const W="menuHtmlItem_M9Kj";function D(e){let{item:t,level:a,index:n}=e;const{value:s,defaultStyle:r,className:l}=t;return(0,m.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(a),r&&[W,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:s}},n)}function P(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,m.jsx)(M,{item:t,...a});case"html":return(0,m.jsx)(D,{item:t,...a});default:return(0,m.jsx)(K,{item:t,...a})}}function F(e){let{items:t,...a}=e;const n=(0,r.Y)(t,a.activePath);return(0,m.jsx)(w,{children:n.map(((e,t)=>(0,m.jsx)(P,{item:e,index:t,...a},t)))})}const U=(0,n.memo)(F),z="menu_SIkG",V="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:a,className:s}=e;const r=function(){const{isActive:e}=(0,k.M)(),[t,a]=(0,n.useState)(e);return(0,d.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",z,r&&V,s),children:(0,m.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(U,{items:a,activePath:t,level:1})})})}const q="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",Z="sidebarLogo_isFc";function J(e){let{path:t,sidebar:a,onCollapse:n,isHidden:s}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:r}}}=(0,f.p)();return(0,m.jsxs)("div",{className:(0,o.A)(q,i&&O,s&&Q),children:[i&&(0,m.jsx)(g.A,{tabIndex:-1,className:Z}),(0,m.jsx)(Y,{path:t,sidebar:a}),r&&(0,m.jsx)(S,{onClick:n})]})}const X=n.memo(J);var $=a(5600),ee=a(2069);const te=e=>{let{sidebar:t,path:a}=e;const n=(0,ee.M)();return(0,m.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(U,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function ae(e){return(0,m.jsx)($.GX,{component:te,props:e})}const ne=n.memo(ae);function oe(e){const t=(0,v.l)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[a&&(0,m.jsx)(X,{...e}),n&&(0,m.jsx)(ne,{...e})]})}var se=a(3219);const ie={button:{buttonText:"Search",buttonAriaLabel:"Search"},modal:{searchBox:{resetButtonTitle:"Clear the query",resetButtonAriaLabel:"Clear the query",cancelButtonText:"Cancel",cancelButtonAriaLabel:"Cancel",searchInputLabel:"Search"},startScreen:{recentSearchesTitle:"Recent",noRecentSearchesText:"No recent searches",saveRecentSearchButtonTitle:"Save this search",removeRecentSearchButtonTitle:"Remove this search from history",favoriteSearchesTitle:"Favorite",removeFavoriteSearchButtonTitle:"Remove this search from favorites"},errorScreen:{titleText:"Unable to fetch results",helpText:"You might want to check your network connection."},footer:{selectText:"to select",selectKeyAriaLabel:"Enter key",navigateText:"to navigate",navigateUpKeyAriaLabel:"Arrow up",navigateDownKeyAriaLabel:"Arrow down",closeText:"to close",closeKeyAriaLabel:"Escape key",searchByText:"Search by"},noResultsScreen:{noResultsText:"No results for",suggestedQueryText:"Try searching for",reportMissingResultsText:"Believe this query should return results?",reportMissingResultsLinkText:"Let us know."}}},re={button:{buttonText:"\u641c\u7d22",buttonAriaLabel:"\u641c\u7d22"},modal:{searchBox:{resetButtonTitle:"\u76d2\u5b50",resetButtonAriaLabel:"\u6e05\u9664\u67e5\u8be2",cancelButtonText:"\u53d6\u6d88",cancelButtonAriaLabel:"\u53d6\u6d88",searchInputLabel:"\u641c\u7d22\u6587\u6863"},startScreen:{recentSearchesTitle:"\u6700\u8fd1\u7684",noRecentSearchesText:"\u6ca1\u6709\u6700\u8fd1\u641c\u7d22\u8bb0\u5f55",saveRecentSearchButtonTitle:"\u4fdd\u5b58\u6b64\u641c\u7d22",removeRecentSearchButtonTitle:"\u4ece\u5386\u53f2\u8bb0\u5f55\u4e2d\u5220\u9664\u6b64\u641c\u7d22",favoriteSearchesTitle:"\u6700\u559c\u6b22\u7684",removeFavoriteSearchButtonTitle:"\u4ece\u6536\u85cf\u5939\u4e2d\u5220\u9664\u6b64\u641c\u7d22"},errorScreen:{titleText:"\u65e0\u6cd5\u83b7\u53d6\u7ed3\u679c",helpText:"\u60a8\u53ef\u80fd\u60f3\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5."},footer:{selectText:"\u9009\u62e9",selectKeyAriaLabel:"\u8f93\u5165\u952e",navigateText:"\u5bfc\u822a",navigateUpKeyAriaLabel:"\u5411\u4e0a\u7bad\u5934",navigateDownKeyAriaLabel:"\u5411\u4e0b\u7bad\u5934",closeText:"\u5173\u95ed",closeKeyAriaLabel:"\u9000\u51fa\u952e",searchByText:"\u641c\u7d22\u63d0\u4f9b"},noResultsScreen:{noResultsText:"\u672a\u641c\u7d22\u5230",suggestedQueryText:"\u5c1d\u8bd5\u641c\u7d22",reportMissingResultsText:"\u76f8\u4fe1\u8fd9\u4e2a\u67e5\u8be2\u5e94\u8be5\u8fd4\u56de\u7ed3\u679c?",reportMissingResultsLinkText:"\u8ba9\u6211\u4eec\u77e5\u9053."}}};function le(e){const t=(0,x.zy)(),a=(0,x.W6)(),{pathname:o}=t,s=["en","zh"],i=()=>{const e=o.split("/");return s.find((t=>e.includes(t)))||"en"};(0,n.useEffect)((()=>{window.addEventListener("click",(()=>{const e=window.location.pathname;window.parent.postMessage({path:e},"*")})),window.addEventListener("hashchange",(()=>{const e=window.location.pathname,t=window.location.hash;window.parent.postMessage({path:e+t},"*")}))}),[]);const r=(0,n.useRef)({navigate(e){let{itemUrl:t}=e;a.push(t)}}).current,l=(0,n.useMemo)((()=>"zh"===i()?"tugraphAnalyticsZH":"tugraphAnalyticsEN"),[t.pathname]);return(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,m.jsx)("div",{style:{margin:"10px 4px 8px 8px"},children:(0,m.jsx)(se.VA,{apiKey:"3c4b435fb8814030c3a6672abc015ff2",indexName:l,appId:"HO4M21RAQI",hitComponent:e=>{let{hit:t,children:a}=e;return console.log(t,"hit"),(0,m.jsx)(L.A,{to:t.url,children:a})},transformItems:e=>e.map((e=>({...e,url:"/tugraph-analytics"+e?.url?.split("/tugraph-analytics")[1]??""}))),navigator:r,translations:(c=i(),"zh"===c?re:ie),placeholder:(e=>"zh"===e?"\u641c\u7d22\u6587\u6863":"Search docs")(i())})}),(0,m.jsx)(oe,{...e})]});var c}const ce={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function de(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:ce.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(T,{className:ce.expandButtonIcon})})}const ue={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function he(e){let{children:t}=e;const a=(0,l.t)();return(0,m.jsx)(n.Fragment,{children:t},a?.name??"noSidebar")}function me(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:s}=e;const{pathname:r}=(0,x.zy)(),[l,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{l&&c(!1),!l&&(0,b.O)()&&c(!0),s((e=>!e))}),[s,l]);return(0,m.jsx)("aside",{className:(0,o.A)(i.G.docs.docSidebarContainer,ue.docSidebarContainer,a&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&a&&c(!0)},children:(0,m.jsx)(he,{children:(0,m.jsxs)("div",{className:(0,o.A)(ue.sidebarViewport,l&&ue.sidebarViewportHidden),children:[(0,m.jsx)(le,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,m.jsx)(de,{toggleSidebar:d})]})})})}const pe={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function be(e){let{hiddenSidebarContainer:t,children:a}=e;const n=(0,l.t)();return(0,m.jsx)("main",{className:(0,o.A)(pe.docMainContainer,(t||!n)&&pe.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced),children:a})})}const xe={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ve(e){let{children:t}=e;const a=(0,l.t)(),[o,s]=(0,n.useState)(!1);return(0,m.jsxs)("div",{className:xe.docsWrapper,children:[(0,m.jsx)(p,{}),(0,m.jsxs)("div",{className:xe.docRoot,children:[a&&(0,m.jsx)(me,{sidebar:a.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:s}),(0,m.jsx)(be,{hiddenSidebarContainer:o,children:t})]})]})}var fe=a(3363);function ge(e){const t=(0,r.B5)(e);if(!t)return(0,m.jsx)(fe.A,{});const{docElement:a,sidebarName:n,sidebarItems:c}=t;return(0,m.jsx)(s.e3,{className:(0,o.A)(i.G.page.docsDocPage),children:(0,m.jsx)(l.V,{name:n,items:c,children:(0,m.jsx)(ve,{children:a})})})}},3363:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),o=a(1312),s=a(1107),i=a(4848);function r(e){let{className:t}=e;return(0,i.jsx)("main",{className:(0,n.A)("container margin-vert--xl",t),children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,i.jsx)(s.A,{as:"h1",className:"hero__title",children:(0,i.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);