"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4762],{6993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=t(4848),s=t(8453);const r={},l="Use Graph",c={id:"application-development/dsl/reference/use",title:"Use Graph",description:"\u7528\u6237\u5728\u6267\u884cMatch\u8bed\u53e5\u4e4b\u524d\u9700\u8981\u901a\u8fc7Use Graph\u8bed\u53e5\u6307\u5b9a\u5f53\u524d\u67e5\u8be2\u7684\u56fe\u3002",source:"@site/docs/docs-cn/application-development/dsl/reference/use.md",sourceDirName:"application-development/dsl/reference",slug:"/application-development/dsl/reference/use",permalink:"/tugraph-analytics/zh/application-development/dsl/reference/use",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"With Syntax",permalink:"/tugraph-analytics/zh/application-development/dsl/reference/dql/with"},next:{title:"UDAF\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/dsl/udf/udaf"}},d={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Syntax",id:"syntax-1",level:2},{value:"Example",id:"example-1",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"use-graph",children:"Use Graph"})}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u6237\u5728\u6267\u884cMatch\u8bed\u53e5\u4e4b\u524d\u9700\u8981\u901a\u8fc7Use Graph\u8bed\u53e5\u6307\u5b9a\u5f53\u524d\u67e5\u8be2\u7684\u56fe\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"USE GRAPH Identifier\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Set current using graph.\nUSE GRAPH modern;\n\nINSERT INTO tbl_result\nSELECT\n\ta.id,\n\tb.id,\n\tc.id,\n\tc.kind,\n\td.id,\n\td.type\nFROM (\n  MATCH (a) -> (b) where b.id > 0 and a.lang is null\n  MATCH (a) <- (c) where label(c) = 'person'\n  Let c.kind = 'k' || cast(c.age / 10 as varchar)\n  MATCH (c) -> (d) where d != b\n  Let d.type = if (label(d) = 'person', 1, 0)\n  RETURN a, b, c, d\n)\n;\n"})}),"\n",(0,a.jsx)(n.h1,{id:"use-instance",children:"Use Instance"}),"\n",(0,a.jsxs)(n.p,{children:["Instance\u7c7b\u4f3c\u4e8eHive/Mysql\u4e2d\u7684Database\u7684\u6982\u5ff5\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(n.strong,{children:"Use Instance"}),"\u547d\u4ee4\u6307\u5b9a\u5f53\u524d\u8bed\u53e5\u7684\u5b9e\u4f8b\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax-1",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"USE INSTANCE Identifier\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Use instance geaflow;\nUSE GRAPH modern;\n\nINSERT INTO tbl_result\nSELECT\n\ta.id,\n\tb.id,\n\tc.id,\n\tc.kind,\n\td.id,\n\td.type\nFROM (\n  MATCH (a) -> (b) where b.id > 0 and a.lang is null\n  MATCH (a) <- (c) where label(c) = 'person'\n  Let c.kind = 'k' || cast(c.age / 10 as varchar)\n  MATCH (c) -> (d) where d != b\n  Let d.type = if (label(d) = 'person', 1, 0)\n  RETURN a, b, c, d\n);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var a=t(6540);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);