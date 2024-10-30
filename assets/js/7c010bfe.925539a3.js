"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8249],{6585:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=a(4848),r=a(8453);const t={},s="Match",i={id:"application-development/dsl/reference/dql/match",title:"Match",description:"* Match",source:"@site/docs/docs-en/application-development/dsl/reference/dql/match.md",sourceDirName:"application-development/dsl/reference/dql",slug:"/application-development/dsl/reference/dql/match",permalink:"/tugraph-analytics/en/application-development/dsl/reference/dql/match",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DML",permalink:"/tugraph-analytics/en/application-development/dsl/reference/dml"},next:{title:"SELECT",permalink:"/tugraph-analytics/en/application-development/dsl/reference/dql/select"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Node",id:"node",level:3},{value:"Edge",id:"edge",level:3},{value:"Edge Direction",id:"edge-direction",level:3},{value:"Example",id:"example",level:2},{value:"Syntax",id:"syntax-1",level:2},{value:"Example",id:"example-1",level:2},{value:"Syntax",id:"syntax-2",level:2},{value:"Example",id:"example-2",level:2},{value:"Syntax",id:"syntax-3",level:2},{value:"Example",id:"example-3",level:2},{value:"Syntax",id:"syntax-4",level:2},{value:"Scalar Query",id:"scalar-query",level:3},{value:"Exists Query",id:"exists-query",level:3},{value:"Example",id:"example-4",level:2},{value:"Scalar Query Example",id:"scalar-query-example",level:3},{value:"Exists Query Example",id:"exists-query-example",level:3},{value:"Syntax",id:"syntax-5",level:2},{value:"Example",id:"example-5",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"match",children:"Match"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Match",children:"Match"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Regex-Match",children:"Regex-Match"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Return",children:"Return"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Let",children:"Let"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#SubQuery",children:"SubQuery"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Continue-Match",children:"Continue-Match"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MatchStatement: MATCH PathPatthern (',' PathPatthern)* [WHERE boolExpr]\n\nPathPatthern: Node ([Edge] Node)*\nNode: '(' Identifier [ ':' StringLiteral ] [ WHERE boolExpr]\nEdge: '-' '[' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ']' '-'\n\t\t | '-' '[' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ']' '->'\n\t\t | '<-' '[' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ']' '-'\n"})}),"\n",(0,l.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,l.jsx)(n.p,{children:"Match a vertex in the graph."}),"\n",(0,l.jsx)(n.h3,{id:"edge",children:"Edge"}),"\n",(0,l.jsxs)(n.p,{children:["Match an edge in the graph. You can defined three kinds of edge direction: ",(0,l.jsx)(n.strong,{children:"In"}),", ",(0,l.jsx)(n.strong,{children:"Out"})," and ",(0,l.jsx)(n.strong,{children:"Both"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"edge-direction",children:"Edge Direction"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"In Edge"}),(0,l.jsx)(n.th,{children:"Out Edge"}),(0,l.jsx)(n.th,{children:"Both Edge"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"<-[edge]-"}),(0,l.jsx)(n.td,{children:"-[edge]->"}),(0,l.jsx)(n.td,{children:"-[edge]-"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Basic Mathch"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Match all node \nMATCH (a)\n\n-- Match all person node\nMATCH (a:person)\n\n-- Match node where id = 1\nMATCH (a:person where id = 1)\n\n-- One hop match\nMATCH (a:person where id = 1)-[e:knows where e.weight > 0.4]->(b:person)\n\n-- Tow hop match\nMATCH (a:person)-(b:person) <- (c)\n\n-- Match in-vertex for node a\nMATCH (a:person)<-[e:knows]-(b)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Match With Filter"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person)<-[e:knows]-(b) Where a.id = b.id\n\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Match Join\nMatch two path pattern and join them with the common label.\ne.g."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a) -> (b), (a) -> (c)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The output is ",(0,l.jsx)(n.strong,{children:"p1 = (a, b) join p2 = (a, c) on p1.a = p2.a"}),"."]}),"\n",(0,l.jsx)(n.h1,{id:"regex-match",children:"Regex-Match"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-1",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"PathPatthern: Node Edge '{' minHop ',' [ maxHop] '}' Node\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a) -[e]->{1,5} (b)\n\nMATCH (a) -[e]->{1,}  (b)\n"})}),"\n",(0,l.jsx)(n.h1,{id:"return",children:"Return"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-2",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"RETURN expr {',' expr}* \n[ GROUP BY expr {',' expr}* ] \n[ ORDER BY expr [ASC|DESC] {',' expr [ASC|DESC]} ]\n[ LIMIT number ]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a.name as name, b.id as b_id\n\nMATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a, b\n\n-- GROUP BY\nMATCH (a:person)-[e:knows where e.weight > 0.4]->(b:person)\nRETURN a.id, SUM(e.weight) * 10 as amt GROUP BY a.id\n\n-- ORDER BY\nMATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a, b order by a.age DESC, b.age ASC\n\n-- LIMIT\nMATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a, b order by a.age DESC, b.age ASC LIMIT 10\n"})}),"\n",(0,l.jsx)(n.h1,{id:"let",children:"Let"}),"\n",(0,l.jsx)(n.p,{children:"Let statement is used to modify the attribute for the vertex or edge on the path."}),"\n",(0,l.jsx)(n.h2,{id:"syntax-3",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"LET Identifier '.' Identifier = expr\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:" MATCH (a:person where a.id = 1) -[e:knows]->(b:person)\n LET a.weight = a.age / cast(100.0 as double),\n LET b.weight = b.age / cast(100.0 as double)\n\n\nMATCH (a:person where a.id = 1) -[e:knows]->(b:person)\nLET a.weight = a.age / cast(100.0 as double),\nLET a.weight = a.weight * 2,\nLET b.weight = 1.0,\nLET b.age = 20\n\n"})}),"\n",(0,l.jsx)(n.h1,{id:"subquery",children:"SubQuery"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-4",children:"Syntax"}),"\n",(0,l.jsx)(n.h3,{id:"scalar-query",children:"Scalar Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"AggregateFunction '(' PathPatthern '=>' expr ')'\n"})}),"\n",(0,l.jsx)(n.h3,{id:"exists-query",children:"Exists Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"EXISTS PathPatthern\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(n.h3,{id:"scalar-query-example",children:"Scalar Query Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person WHERE id = 1)-[e]->(b)\nWhere COUNT((b) ->(c) => c) >= 1\nRETURN a, e, b\n\nMATCH (a:person WHERE id = 1)-[e]->(b)\nLet b.out_cnt = COUNT((b) ->(c) => c),\nLet b.out_weight = SUM((b) -[e1]-> (c) => e1.weight)\nRETURN a, e, b\n"})}),"\n",(0,l.jsx)(n.h3,{id:"exists-query-example",children:"Exists Query Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person WHERE id = 1)-[e]->(b)\nWhere EXISTS (b) -> (c)\n      And SUM((b) -[e1]-> (c) => e1.weight) > 1\nRETURN a, e, b\n"})}),"\n",(0,l.jsx)(n.h1,{id:"continue-match",children:"Continue-Match"}),"\n",(0,l.jsx)(n.p,{children:"You can write a match follow another match. The return path will be the join of the two match."}),"\n",(0,l.jsx)(n.h2,{id:"syntax-5",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MatchStatement\nMatchStatement\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-5",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person where a.id = 1) -[e:knows]->(b:person)\nLET a.weight = a.age / cast(100.0 as double),\nLET a.weight = a.weight * 2\nMATCH(b) -[]->(c)\nRETURN a.id as a_id, a.weight as a_weight, b.id as b_id, c.id as c_id\n\n\nMATCH (a) -> (b) where b.id > 0 and a.lang is null\nMATCH (a) <- (c) where label(c) = 'person'\nLet c.kind = 'k' || cast(c.age / 10 as varchar)\nMATCH (c) -> (d) where d != b\nLet d.type = if (label(d) = 'person', 1, 0)\nRETURN a, b, c, d\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var l=a(6540);const r={},t=l.createContext(r);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);