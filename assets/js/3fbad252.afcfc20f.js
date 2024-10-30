"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8372],{18:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var l=t(4848),r=t(8453);const i={},a=void 0,s={id:"application-development/dsl/build-in/logical",title:"logical",description:"Geaflow supports the following logical operations.",source:"@site/docs/docs-en/application-development/dsl/build-in/logical.md",sourceDirName:"application-development/dsl/build-in",slug:"/application-development/dsl/build-in/logical",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/logical",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"date",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/date"},next:{title:"math",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/math"}},d={},u=[];function o(e){const n={p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Geaflow supports the following logical operations."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Operation"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"boolean1 OR boolean2"}),(0,l.jsx)(n.td,{children:"Return true if boolean1 is true or boolean2 is true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"boolean1 AND boolean2"}),(0,l.jsx)(n.td,{children:"Return true only if boolean1 is true and boolean2 is true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"NOT boolean"}),(0,l.jsx)(n.td,{children:"Return the result of a NOT operation for given boolean variable."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"boolean IS FALSE"}),(0,l.jsx)(n.td,{children:"Return true if boolean variable is false. If boolean variable is UNKNOWN, return false."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"boolean IS NOT FALSE"}),(0,l.jsx)(n.td,{children:"Return true if boolean variable is true. If boolean variable is UNKNOWN, return true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"boolean IS TRUE"}),(0,l.jsx)(n.td,{children:"Return true if boolean variable is true. If boolean variable is UNKNOWN, return false."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"boolean IS NOT TRUE"}),(0,l.jsx)(n.td,{children:"Return true if boolean variable is false. If boolean variable is UNKNOWN, return true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 =  value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is equal to value2."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 <> value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is not equal to value2."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 >  value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is greater than value2."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 >= value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is greater than or equal to value2."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 <  value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is smaller than value2."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 <= value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is smaller than or equal to value2."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value IS NULL"}),(0,l.jsx)(n.td,{children:"Return true if value is null."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value IS NOT NULL"}),(0,l.jsx)(n.td,{children:"Return true if value is not null."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 IS DISTINCT FROM value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is distinct from value2. If both value1 and value2 are null, they are considered equal."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 IS NOT DISTINCT FROM value2"}),(0,l.jsx)(n.td,{children:"Return true if value1 is equal to value2. If both value1 and value2 are null, they are considered equal."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 BETWEEN value2 AND value3"}),(0,l.jsx)(n.td,{children:"Return true if value1 is greater than or equal to value2 and smaller than value3."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value1 NOT BETWEEN value2 AND value3"}),(0,l.jsx)(n.td,{children:"Return true if value1 is smaller than value2 and greater than or equal to value3."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"string1 LIKE string2 [ ESCAPE string3 ]"}),(0,l.jsx)(n.td,{children:"Perform fuzzy matching on the string string1, return true if it matches to pattern string2, and false if it doesn't match."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"string1 NOT LIKE string2 [ ESCAPE string3 ]"}),(0,l.jsx)(n.td,{children:"Perform fuzzy matching on the string string1, return false if it matches to pattern string2, and true if it doesn't match."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value IN (value [, value]* )"}),(0,l.jsx)(n.td,{children:"Return true if value is equal to any value in the list."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value NOT IN (value [, value]* )"}),(0,l.jsx)(n.td,{children:"Return true if value is not equal to every value in the list."})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var l=t(6540);const r={},i=l.createContext(r);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);