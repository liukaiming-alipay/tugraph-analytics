"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2712],{8179:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(4848),c=t(8453);const r={},l="Connector\u57fa\u7840\u4ecb\u7ecd",s={id:"application-development/dsl/connector/common",title:"Connector\u57fa\u7840\u4ecb\u7ecd",description:"GeaFlow \u652f\u6301\u4ece\u5404\u7c7bconnector\u4e2d\u8bfb\u5199\u6570\u636e\uff0cGeaFlow\u5c06\u5b83\u4eec\u90fd\u8bc6\u522b\u4e3a\u5916\u90e8\u8868\uff0c\u5e76\u5c06\u5143\u6570\u636e\u5b58\u50a8\u5728Catalog\u4e2d\u3002",source:"@site/docs/docs-cn/application-development/dsl/connector/common.md",sourceDirName:"application-development/dsl/connector",slug:"/application-development/dsl/connector/common",permalink:"/tugraph-analytics/zh/application-development/dsl/connector/common",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"table",permalink:"/tugraph-analytics/zh/application-development/dsl/build-in/table"},next:{title:"File Connector\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/dsl/connector/file"}},i={},d=[];function a(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"connector\u57fa\u7840\u4ecb\u7ecd",children:"Connector\u57fa\u7840\u4ecb\u7ecd"})}),"\n",(0,o.jsx)(e.p,{children:"GeaFlow \u652f\u6301\u4ece\u5404\u7c7bconnector\u4e2d\u8bfb\u5199\u6570\u636e\uff0cGeaFlow\u5c06\u5b83\u4eec\u90fd\u8bc6\u522b\u4e3a\u5916\u90e8\u8868\uff0c\u5e76\u5c06\u5143\u6570\u636e\u5b58\u50a8\u5728Catalog\u4e2d\u3002"}),"\n",(0,o.jsx)(e.h1,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE [TEMPORARY] TABLE [IF NOT EXISTS] table (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='file',\n    geaflow.dsl.file.path = '/path/to/file',\n    geaflow.dsl.window.size = 1000\n)\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u58f0\u660e\u4e00\u5f20\u8868\u6765\u4f7f\u7528Connector\uff0c\u5177\u4f53\u4f7f\u7528Source/Sink\u7531\u8bfb\u5199\u884c\u4e3a\u51b3\u5b9a\u3002"}),"\n",(0,o.jsx)(e.p,{children:"TEMPORARY \u7528\u4e8e\u521b\u5efa\u4e34\u65f6\u8868\uff0c\u4e34\u65f6\u8868\u4e0d\u5199\u5165Catalog\u3002\u5982\u679c\u4e0d\u6307\u5b9a IF NOT EXISTS \u5219\u4f1a\u5728\u5b58\u5728\u540c\u540d\u8868\u65f6\u62a5\u9519\u3002"}),"\n",(0,o.jsx)(e.p,{children:"WITH\u5b50\u53e5\u7528\u4e8e\u6307\u5b9aConnector\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5176\u4e2d\u7684type\u5b57\u6bb5\u5fc5\u987b\uff0c\u7528\u6765\u6307\u5b9a\u4f7f\u7528Connector\u7c7b\u578b\uff0c\u4f8b\u5982file\u8868\u793a\u4f7f\u7528\u6587\u4ef6\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u5728WITH\u4e2d\u6dfb\u52a0\u8868\u7684\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u8986\u76d6\u6389\u5916\u90e8(SQL\u6587\u4ef6\u4e2d\u3001\u4f5c\u4e1a\u53c2\u6570\u4e2d)\u7684\u914d\u7f6e\u9879\uff0c\u5177\u6709\u6700\u9ad8\u4f18\u5148\u7ea7\u3002"}),"\n",(0,o.jsx)(e.h1,{id:"\u4e3b\u8981\u53c2\u6570",children:"\u4e3b\u8981\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"\u53c2\u6570\u540d"}),(0,o.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,o.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"type"}),(0,o.jsx)(e.td,{children:"\u662f"}),(0,o.jsx)(e.td,{children:"\u6307\u5b9a\u4f7f\u7528\u7684Connector\u7c7b\u578b"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"geaflow.dsl.window.size"}),(0,o.jsx)(e.td,{children:"\u5426"}),(0,o.jsx)(e.td,{children:"\u91cd\u8981\uff0c-1\u8868\u793a\u8bfb\u53d6\u6240\u6709\u6570\u636e\u4e3a\u4e00\u4e2a\u7a97\u53e3\uff0c\u5c5e\u4e8e\u6279\u5f0f\u5904\u7406\u3002\u6b63\u6570\u8868\u793a\u82e5\u5e72\u6761\u6570\u636e\u4e3a\u4e00\u4e2a\u7a97\u53e3\uff0c\u4e3a\u6d41\u5f0f\u5904\u7406\u3002"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"geaflow.dsl.partitions.per.source.parallelism"}),(0,o.jsx)(e.td,{children:"\u5426"}),(0,o.jsx)(e.td,{children:"\u5c06Source\u7684\u5206\u7247\u82e5\u5e72\u4e2a\u7f16\u4e3a\u4e00\u7ec4\uff0c\u51cf\u5c11\u5e76\u53d1\u6570\u5173\u8054\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u3002"})]})]})]}),"\n",(0,o.jsx)(e.h1,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE console_sink (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='console'\n);\n\n-- Write one row to the log\nINSERT INTO console_sink\nSELECT 1, 'a', 2;\n"})})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var o=t(6540);const c={},r=o.createContext(c);function l(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);