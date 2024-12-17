"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4870],{5809:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=s(4848),r=s(8453);const a={},l="DML",i={id:"application-development/dsl/syntax/dml",title:"DML",description:"Insert Table",source:"@site/docs/docs-en/source/5.application-development/2.dsl/2.syntax/3.dml.md",sourceDirName:"5.application-development/2.dsl/2.syntax",slug:"/application-development/dsl/syntax/dml",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dml",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DDL",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/ddl"},next:{title:"Match",permalink:"/tugraph-analytics/en/application-development/dsl/syntax/dql/match"}},d={},o=[{value:"Insert Table",id:"insert-table",level:2},{value:"Insert Graph",id:"insert-graph",level:2},{value:"Insert Vertex/Edge",id:"insert-vertexedge",level:2},{value:"Multi Table Insert",id:"multi-table-insert",level:2}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dml",children:"DML"})}),"\n",(0,t.jsx)(n.h2,{id:"insert-table",children:"Insert Table"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"INSERT INTO <table name> \n<table query>\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),"\nExample 1:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO test_table VALUES ('json', 111);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example inserts a row of data into the ",(0,t.jsx)(n.strong,{children:"test_table"})," table."]}),"\n",(0,t.jsx)(n.p,{children:"Example 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO user_table\nSELECT id, age FROM users\nWHERE age > 20;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example inserts a query result into the ",(0,t.jsx)(n.strong,{children:"user_table"})," table."]}),"\n",(0,t.jsx)(n.p,{children:"Example 3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tbl_result\nMATCH (a:person where a.id = 1) -[e:knows]->(b:person)\nRETURN a.id as a_id, e.weight as weight, b.id as b_id;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example inserts a result returned by a graph traversal query into the ",(0,t.jsx)(n.strong,{children:"tbl_result"})," table."]}),"\n",(0,t.jsx)(n.h2,{id:"insert-graph",children:"Insert Graph"}),"\n",(0,t.jsx)(n.p,{children:"Insert command can also insert data into the graph. Unlike tables, graphs use storage self-maintained by GeaFlow."}),"\n",(0,t.jsx)(n.h2,{id:"insert-vertexedge",children:"Insert Vertex/Edge"}),"\n",(0,t.jsxs)(n.p,{children:["When insert data into vertex or edge in the graph using the ",(0,t.jsx)(n.em,{children:"INSERT"})," command, the target node is represented by the graph name and vertex/edge name separated by a dot, and supports reordering of fields."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"INSERT INTO <graph name>.<vertex/edge name>\n[(<field name> [{, <field name>} ... ])]\n<table query>\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),"\nExample 1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO dy_modern.person\nSELECT cast(id as bigint), name, cast(other as int) as age\nFROM modern_vertex WHERE type = 'person'\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example inserts data from the source table ",(0,t.jsx)(n.strong,{children:"modern_vertex"})," into the vertex ",(0,t.jsx)(n.strong,{children:"person"})," in the graph ",(0,t.jsx)(n.strong,{children:"dy_modern"}),". The three fields in source table modern_vertex correspond to the fields in vertex person one-to-one."]}),"\n",(0,t.jsx)(n.p,{children:"Example 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO dy_modern.person(name, id, age)\nSELECT 'jim', 1,  20\nUNION ALL\nSELECT 'kate', 2, 22\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example inserts two rows of data into the vertex ",(0,t.jsx)(n.strong,{children:"person"})," in the graph ",(0,t.jsx)(n.strong,{children:"dy_modern"}),'. The fields in the data are arranged in the order of "name, id, age", corresponding to the same fields in the vertex table person. Assuming that person has other fields, those fields are automatically ',(0,t.jsx)(n.strong,{children:"filled with null"})," values."]}),"\n",(0,t.jsx)(n.p,{children:"Example 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO dy_modern.knows\nSELECT 1, 2, 0.2\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example inserts one row into the edge ",(0,t.jsx)(n.strong,{children:"knows"})," in the graph ",(0,t.jsx)(n.strong,{children:"dy_modern"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"multi-table-insert",children:"Multi Table Insert"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes the source table needs to be inserted into multiple nodes simultaneously, especially when the foreign key of the source table represents a relationship, which often needs to be transformed into a type of edge, and the foreign key value will also become the opposite endpoint of the edge. The INSERT statement also supports this type of insertion where a single source table has multiple target nodes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"INSERT INTO <graph name>\n(<vertex/edge name>.<field name> [{, <vertex/edge name>.<field name>} ... ])\n<table query>\n;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Unlike inserting data into nodes as a whole, this syntax puts the names of nodes in parentheses, and each field needs to specify the node to which it belongs. Similarly to the previous examples, any fields that are not specified will be automatically filled with null values. If any meta fields (id or timestamp) are not specified, a syntax check error will occur."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),"\nExample 1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO dy_graph(\n  Country.id, Country.name, Country.url, isPartOf.srcId, isPartOf.targetId\n)\nSELECT CAST(id as BIGINT), name, url,\nCAST(id as BIGINT), CAST(PartOfPlaceId as BIGINT)\nFROM tbl_vertex_place\nWhere type = 'Country';\n"})}),"\n",(0,t.jsxs)(n.p,{children:['This example inserts data into the node "',(0,t.jsx)(n.strong,{children:"Country"}),'" and the edge "',(0,t.jsx)(n.strong,{children:"isPartOf"}),'" in the graph "',(0,t.jsx)(n.strong,{children:"dy_graph"}),'" simultaneously. The foreign key "',(0,t.jsx)(n.strong,{children:"PartOfPlaceId"}),'" in the source table represents the continent to which the country belongs, and is transformed into an outgoing edge "isPartOf".']}),"\n",(0,t.jsx)(n.p,{children:"Example 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO dy_graph(\n  Tag.id, Tag.name, Tag.url, hasType.srcId, hasType.targetId, TagClass.id\n)\nSELECT CAST(id as BIGINT), name, url,\nCAST(id as BIGINT), CAST(TypeTagClassId as BIGINT),\nCAST(TypeTagClassId as BIGINT)\nFROM tbl_vertex_tag\nWhere length(url) > 3;\n"})}),"\n",(0,t.jsxs)(n.p,{children:['This example inserts data into the nodes "',(0,t.jsx)(n.strong,{children:"Tag"}),'" and "',(0,t.jsx)(n.strong,{children:"TagClass"}),'", and the edge "',(0,t.jsx)(n.strong,{children:"hasType"}),'" in the graph "',(0,t.jsx)(n.strong,{children:"dy_modern"}),'" simultaneously. The foreign key "',(0,t.jsx)(n.strong,{children:"TypeTagClassId"}),'" in the source table is transformed into the edge type of "hasType", and a new node "TagClass" is also inserted. Assuming that "TagClass" has other fields, those fields will be automatically filled with null values.']}),"\n",(0,t.jsx)(n.p,{children:"Even with this syntax, each record in the source table can only trigger one insertion in one type of node or edge. If multiple insertions are required, multiple INSERT statements should be written."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(6540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);