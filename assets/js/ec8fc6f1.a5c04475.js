"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9657],{6751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=n(4848),i=n(8453);const s={},r="WITH",d={id:"application-development/dsl/syntax/dql/with",title:"WITH",description:"The with clause is used to specified the request vertex id and paramters for the graph traversal.",source:"@site/docs/docs-en/source/5.application-development/2.dsl/2.syntax/4.dql/with.md",sourceDirName:"5.application-development/2.dsl/2.syntax/4.dql",slug:"/application-development/dsl/syntax/dql/with",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/with",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UNION",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/union"},next:{title:"Aggregate",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/aggregate"}},l={},o=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"with",children:"WITH"})}),"\n",(0,a.jsx)(t.p,{children:"The with clause is used to specified the request vertex id and paramters for the graph traversal."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"WITH Identifier AS '(' SubQuery ')'\n"})}),"\n",(0,a.jsx)(t.h1,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT\n\ta_id,\n\tb_id,\n\tweight\nFROM (\n  WITH p AS (\n    SELECT * FROM (VALUES(1, 0.4), (4, 0.5)) AS t(id, weight)\n  )\n  MATCH (a:person where a.id = p.id) -[e where weight > p.weight + 0.1]->(b)\n  RETURN a.id as a_id, e.weight as weight, b.id as b_id\n);\n\n\n"})}),"\n",(0,a.jsx)(t.p,{children:"The Match statement will be request by each rows in the with subquery. The result is equivalent to the result of each record firing the Match statement separately."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(6540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);