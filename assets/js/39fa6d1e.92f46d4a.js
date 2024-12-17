"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1816],{7280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(4848),a=t(8453);const r={},i="UNION",l={id:"application-development/dsl/syntax/dql/union",title:"UNION",description:"",source:"@site/docs/docs-en/source/5.application-development/2.dsl/2.syntax/4.dql/union.md",sourceDirName:"5.application-development/2.dsl/2.syntax/4.dql",slug:"/application-development/dsl/syntax/dql/union",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/union",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SELECT",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/select"},next:{title:"WITH",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/with"}},o={},d=[];function c(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"union",children:"UNION"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select_statement\nUNION [ ALL ]\nselect_statement\n\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM (\n\tSELECT * FROM user WHERE id < 10\n\tUNION ALL\n\tSELECT * FROM user WHERE id > 15\n);\n\nSELECT * FROM (\n\tSELECT * FROM user WHERE id < 10\n\tUNION\n\tSELECT * FROM user WHERE id > 15\n);\n\nSELECT * FROM (\n\tSELECT * FROM user WHERE id % 3 = 0\n\tUNION ALL\n\tSELECT * FROM user WHERE id % 3 = 1\n\tUNION ALL\n\tSELECT * FROM user WHERE id % 3 = 2\n);\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);