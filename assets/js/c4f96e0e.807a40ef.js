"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[131],{3514:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var t=a(4848),o=a(8453);const r={},c="Kafka Connector\u4ecb\u7ecd",s={id:"application-development/connector/kafka",title:"Kafka Connector\u4ecb\u7ecd",description:"GeaFlow \u652f\u6301\u4ece Kafka \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5411 Kafka \u5199\u5165\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684 Kafka \u7248\u672c\u4e3a 2.4.1\u3002",source:"@site/docs/docs-cn/source/5.application-development/3.connector/6.kafka.md",sourceDirName:"5.application-development/3.connector",slug:"/application-development/connector/kafka",permalink:"/tugraph-analytics/zh/application-development/connector/kafka",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hive Connector\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/connector/hive"},next:{title:"Hbase Connector\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/connector/hbase"}},l={},i=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"kafka-connector\u4ecb\u7ecd",children:"Kafka Connector\u4ecb\u7ecd"})}),"\n",(0,t.jsx)(e.p,{children:"GeaFlow \u652f\u6301\u4ece Kafka \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5411 Kafka \u5199\u5165\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684 Kafka \u7248\u672c\u4e3a 2.4.1\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE kafka_table (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='kafka',\n    geaflow.dsl.kafka.servers = 'localhost:9092',\n\tgeaflow.dsl.kafka.topic = 'test-topic'\n)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u540d"}),(0,t.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,t.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"geaflow.dsl.kafka.servers"}),(0,t.jsx)(e.td,{children:"\u662f"}),(0,t.jsx)(e.td,{children:"Kafka \u7684\u5f15\u5bfc\u670d\u52a1\u5668\uff08bootstrap\uff09\u5217\u8868"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"geaflow.dsl.kafka.topic"}),(0,t.jsx)(e.td,{children:"\u662f"}),(0,t.jsx)(e.td,{children:"Kafka topic"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"geaflow.dsl.kafka.group.id"}),(0,t.jsx)(e.td,{children:"\u5426"}),(0,t.jsx)(e.td,{children:"Kafka\u7ec4\uff08group id\uff09\uff0c\u9ed8\u8ba4\u662f'default-group-id'."})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE kafka_source (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='kafka',\n    geaflow.dsl.kafka.servers = 'localhost:9092',\n\tgeaflow.dsl.kafka.topic = 'read-topic'\n);\n\nCREATE TABLE kafka_sink (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='kafka',\n    geaflow.dsl.kafka.servers = 'localhost:9092',\n\tgeaflow.dsl.kafka.topic = 'write-topic'\n);\n\nINSERT INTO kafka_sink\nSELECT * FROM kafka_source;\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>c,x:()=>s});var t=a(6540);const o={},r=t.createContext(o);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);