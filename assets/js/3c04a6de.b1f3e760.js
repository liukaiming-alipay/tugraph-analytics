"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1845],{3023:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var l=t(4848),r=t(8453);const d={},a="DDL",s={id:"application-development/dsl/syntax/ddl",title:"DDL",description:"\u8868\u76f8\u5173DDL",source:"@site/docs/docs-cn/source/5.application-development/2.dsl/2.syntax/2.ddl.md",sourceDirName:"5.application-development/2.dsl/2.syntax",slug:"/application-development/dsl/syntax/ddl",permalink:"/tugraph-analytics/zh/application-development/dsl/syntax/ddl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DCL",permalink:"/tugraph-analytics/zh/application-development/dsl/syntax/dcl"},next:{title:"DML",permalink:"/tugraph-analytics/zh/application-development/dsl/syntax/dml"}},i={},c=[{value:"\u8868\u76f8\u5173DDL",id:"\u8868\u76f8\u5173ddl",level:2},{value:"Create Table",id:"create-table",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"Create View",id:"create-view",level:3},{value:"\u56fe\u76f8\u5173DDL",id:"\u56fe\u76f8\u5173ddl",level:2},{value:"Create Graph",id:"create-graph",level:3},{value:"\u56fe\u5b58\u50a8",id:"\u56fe\u5b58\u50a8",level:3},{value:"\u81ea\u5b9a\u4e49\u51fd\u6570",id:"\u81ea\u5b9a\u4e49\u51fd\u6570",level:2},{value:"Create Function",id:"create-function",level:3}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"ddl",children:"DDL"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8868\u76f8\u5173ddl",children:"\u8868\u76f8\u5173DDL"}),"\n",(0,l.jsx)(e.h3,{id:"create-table",children:"Create Table"}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u547d\u4ee4\u7528\u6765\u521b\u5efa\u4e00\u5f20\u8868\uff0cGeaFlow\u5c06\u5176\u8bc6\u522b\u4e3a\u5916\u90e8\u8868\u5e76\u5c06\u5143\u6570\u636e\u5b58\u50a8\u5728Catalog\u4e2d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"CREATE TABLE <table name> \n(\n\t<column name> <data type>\n\t[ { , <column name> <data type> } ... ]\n) WITH \uff08\n\ttype = <table type>\n\t[ { , <config key> = <config value> } ... ]\n);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"Create Table v_person_table (\n\tid bigint,\n\tname string,\n\tage int\n) WITH (\n\ttype='file',\n\tgeaflow.dsl.file.path = 'resource:///data/persons.txt'\n);\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u521b\u5efa\u4e86\u4e00\u5f20\u8868",(0,l.jsx)(e.strong,{children:"v_person_table"}),"\uff0c\u5305\u542bid, name, age\u4e09\u5217\uff0c\u8868\u7684\u5b58\u50a8\u7c7b\u578b\u4e3a\u6587\u4ef6\uff0c\u5e76\u901a\u8fc7",(0,l.jsx)(e.strong,{children:"geaflow.dsl.file.path"}),"\u53c2\u6570\u8bf4\u660e\u9700\u8981\u8bbf\u95ee\u7684\u6587\u4ef6\u5b58\u653e\u5728\u5f15\u64ce\u8d44\u6e90\u7684\u6307\u5b9a\u76ee\u5f55\u4e2d\u3002"]}),"\n",(0,l.jsx)(e.h4,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"BOOLEAN"}),(0,l.jsx)(e.td,{children:"\u5e03\u5c14\u7c7b\u578b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"SHORT"}),(0,l.jsx)(e.td,{children:"\u77ed\u6574\u5f62\u7c7b\u578b\uff0c\u8303\u56f4: -2^15 + 1 ~ 2^15-1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"INT"}),(0,l.jsx)(e.td,{children:"\u6574\u5f62\u7c7b\u578b\uff0c \u8303\u56f4: -2^31 + 1 ~ 2^31-1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"LONG"}),(0,l.jsx)(e.td,{children:"\u957f\u6574\u5f62\u7c7b\u578b\uff0c\u8303\u56f4: -2^63 + 1 ~ 2^63-1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"DOUBLE"}),(0,l.jsx)(e.td,{children:"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u7c7b\u578b\uff0c\u8303\u56f4: -2^1024 ~ +2^1024"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"VARCHAR"}),(0,l.jsx)(e.td,{children:"\u5b57\u7b26\u4e32\u7c7b\u578b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"TIMESTAMP"}),(0,l.jsx)(e.td,{children:"\u65f6\u95f4\u6233\u7c7b\u578b"})]})]})]}),"\n",(0,l.jsx)(e.h4,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u8868\u7684\u540c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528WITH\u6307\u5b9a\u8868\u7684\u53c2\u6570\u4fe1\u606f\uff0c\u5176\u4e2dtype\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u5916\u90e8\u8868\u7684\u5b58\u50a8\u7c7b\u578b\uff0c\u5176\u4ed6\u53c2\u6570\u4e3akv\u7c7b\u578b\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE person (\n\tid   VARCHAR,\n\tname VARCHAR,\n\tage INT\n) WITH (\n\ttype ='file',\n\tgeaflow.dsl.file.path = '/path/to/person/',\n\tgeaflow.dsl.column.separator = '|',\n\tgeaflow.dsl.window.size = 5000\n);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u7c7b\u578b\u7684\u8868\uff0c\u5e76\u6307\u5b9a\u8868\u53c2\u6570\u3002\u5176\u4e2dtype\u6307\u5b9a\u8868\u7c7b\u578b\u4e3a\u6587\u4ef6; geaflow.dsl.file.path\u6587\u4ef6\u8def\u5f84;geaflow.dsl.column.separator\u6307\u5b9a\u5b57\u6bb5\u5206\u9694\u5217; geaflow.dsl.window.size\u6307\u5b9a\u6bcf\u6279\u6b21\u8bfb\u53d6\u6587\u4ef6\u7684\u884c\u6570\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"create-view",children:"Create View"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"CREATE VIEW <table veiw name> \n(\n\t<column name>\n\t[ { , <column name>} ... ]\n) AS\n\t<table query>\n;\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE VIEW console_1 (a, b, c) AS\nSELECT id, name, age FROM v_person_table;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u56fe\u76f8\u5173ddl",children:"\u56fe\u76f8\u5173DDL"}),"\n",(0,l.jsx)(e.h3,{id:"create-graph",children:"Create Graph"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Syntax"}),"\n\u4e00\u4e2a\u56fe\u81f3\u5c11\u5305\u542b\u4e00\u5bf9\u70b9\u8fb9\uff0c\u70b9\u8868\u5fc5\u987b\u5305\u542b\u4e00\u4e2aid\u5b57\u6bb5\u4f5c\u4e3a\u4e3b\u952e\uff0c\u8fb9\u8868\u5fc5\u987b\u5305\u542bsrcId\u548ctargetId\u4f5c\u4e3a\u4e3b\u952e\uff0c\u8fb9\u8868\u8fd8\u53ef\u4ee5\u6709\u4e00\u4e2a\u65f6\u95f4\u6233\u5b57\u6bb5\u6807\u8bc6\u65f6\u95f4\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"CREATE GRAPH <graph name> \n(\n\t<graph vertex>\n\t[ { , <graph vertex> } ... ]\n\t, <graph edge>\n\t[ { , <graph edge> } ... ]\n) WITH \uff08\n\tstoreType = <graph store type>\n\t[ { , <config key> = <config value> } ... ]\n);\n\n<graph vertex>  ::=\nVERTEX <vertex name>\n(\n\t<column name> <data type> ID\n\t[ {, <column name> <data type> } ... ]\n)\n\n<graph edge>  ::=\nEdge <edge name>\n(\n\t<column name> <data type> SOURCE ID\n\t, <column name> <data type> DESTINATION ID\n\t[ , <column name> <data type> TIMESTAMP ]\n\t[ {, <column name> <data type> } ... ]\n)\n\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE GRAPH dy_modern (\n\tVertex person (\n\t\tid bigint ID,\n\t\tname varchar,\n\t\tage int\n\t),\n\tVertex software (\n\t\tid bigint ID,\n\t\tname varchar,\n\t\tlang varchar\n\t),\n\tEdge knows (\n\t\tsrcId bigint SOURCE ID,\n\t\ttargetId bigint DESTINATION ID,\n\t\tweight double\n\t),\n\tEdge created (\n\t\tsrcId bigint SOURCE ID,\n\t\ttargetId bigint DESTINATION ID,\n\t\tweight double\n\t)\n) WITH (\n\tstoreType = 'rocksdb',\n\tshardCount = 2\n);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u521b\u5efa\u4e86\u4e00\u5f20\u5305\u542b2\u4e2a\u70b92\u4e2a\u8fb9\u7684\u56fe\uff0c\u5b58\u50a8\u7c7b\u578b\u4e3arocksdb, \u5206\u7247\u65702\u4e2a\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u56fe\u5b58\u50a8",children:"\u56fe\u5b58\u50a8"}),"\n",(0,l.jsx)(e.p,{children:"\u56fe\u7684\u5b58\u50a8\u7c7b\u578b\u53ef\u4ee5\u5728WITH\u5173\u8054\u7684\u914d\u7f6e\u5217\u8868\u4e2d\u4f7f\u7528storeType\u914d\u7f6e\u9879\u6307\u5b9a\uff0c\u76ee\u524dGeaFlow\u652f\u6301Memory, RocksDB\u4f5c\u4e3a\u56fe\u5b58\u50a8\u683c\u5f0f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u56fe\u7684\u5b58\u50a8\u5206\u7247\u6570\u901a\u8fc7shardCount\u914d\u7f6e\u9879\u6307\u5b9a\uff0c\u56fe\u7684\u5b58\u50a8\u5206\u7247\u6570\u5f71\u54cd\u56fe\u8ba1\u7b97\u65f6\u7684\u5e76\u53d1\u6570\uff0c\u8bbe\u4e3a\u66f4\u5927\u7684\u503c\u53ef\u4ee5\u5229\u7528\u66f4\u591a\u673a\u5668\u5e76\u53d1\u8ba1\u7b97\uff0c\u4f46\u6240\u9700\u8d44\u6e90\u6570\u4e5f\u5c06\u589e\u957f\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u51fd\u6570",children:"\u81ea\u5b9a\u4e49\u51fd\u6570"}),"\n",(0,l.jsx)(e.h3,{id:"create-function",children:"Create Function"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u7528\u6765\u5f15\u5165\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"CREATE FUNCTION <function name> AS <implementation class>\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE FUNCTION mysssp AS 'com.antgroup.geaflow.dsl.udf.graph.SingleSourceShortestPath';\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>s});var l=t(6540);const r={},d=l.createContext(r);function a(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);