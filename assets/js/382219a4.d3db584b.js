"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4527],{9694:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var r=l(4848),s=l(8453);const i={},a="Aggregate",t={id:"application-development/dsl/build-in/aggregate",title:"Aggregate",description:"GeaFlow support the following aggregate functions:",source:"@site/docs/docs-en/source/5.application-development/2.dsl/3.build-in/aggregate.md",sourceDirName:"5.application-development/2.dsl/3.build-in",slug:"/application-development/dsl/build-in/aggregate",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/aggregate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WITH",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/with"},next:{title:"Condition",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/condition"}},c={},o=[{value:"COUNT",id:"count",level:2},{value:"MAX",id:"max",level:2},{value:"MIN",id:"min",level:2},{value:"SUM",id:"sum",level:2},{value:"AVG",id:"avg",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aggregate",children:"Aggregate"})}),"\n",(0,r.jsx)(n.p,{children:"GeaFlow support the following aggregate functions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#COUNT",children:"COUNT"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#MAX",children:"MAX"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#MIN",children:"MIN"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#SUM",children:"SUM"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#AVG",children:"AVG"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"count",children:"COUNT"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"long count([DISTINCT] Expr)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),"\nReturn count value for the aggregate group. The initial value is 0."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select id, count(id) from user group by id;\nselect count(distinct id) from user;\nselect count(1) from user;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"max",children:"MAX"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"int max(int value)\nlong max(long value)\ndouble max(double value)\nvarchar max(varchar value)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),"\nReturn the maximum value for the aggregate group. The initial value is null."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select id, max(age) from user group by id;\nselect max(name) from user;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"min",children:"MIN"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"int min(int value)\nlong min(long value)\ndouble min(double value)\nvarchar min(varchar value)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),"\nReturn the minimum value for the aggregate group. The initial value is null."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select id, min(age) from user group by id;\nselect min(name) from user;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sum",children:"SUM"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"int sum([DISTINCT] int value)\nlong sum([DISTINCT] long value)\ndouble sum([DISTINCT] double value)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),"\nReturn the sum of the aggregate group. The initial value is 0(or 0.0 for double)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select id, sum(age) from user group by id;\nselect sum(DISTINCT age) from user;\nselect sum(1) from user;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"avg",children:"AVG"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"int avg([DISTINCT] int value)\nlong avg([DISTINCT] long value)\ndouble avg([DISTINCT] double value)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),"\nReturn the average value for the aggregate group. The initial value is null."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select id, avg(age) from user group by id;\nselect avg(DISTINCT age) from user;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>t});var r=l(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);