"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9609],{3854:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(4848),l=s(8453);const i={},r="\u6e90\u7801\u90e8\u7f72",o={id:"quick_start/quick_start",title:"\u6e90\u7801\u90e8\u7f72",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/../docs-cn/source/3.quick_start/1.quick_start.md",sourceDirName:"3.quick_start",slug:"/quick_start/quick_start",permalink:"/tugraph-analytics/zh/quick_start/quick_start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ea7\u54c1\u7b80\u4ecb",permalink:"/tugraph-analytics/zh/introduction"},next:{title:"\u767d\u5c4f\u90e8\u7f72",permalink:"/tugraph-analytics/zh/quick_start/quick_start_docker"}},a={},d=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u7f16\u8bd1 GeaFlow \u6e90\u7801",id:"\u7f16\u8bd1-geaflow-\u6e90\u7801",level:3},{value:"\u672c\u5730\u8fd0\u884c\u6d41\u56fe\u4f5c\u4e1a",id:"\u672c\u5730\u8fd0\u884c\u6d41\u56fe\u4f5c\u4e1a",level:2},{value:"Demo1 \u4ece\u672c\u5730\u6587\u4ef6\u8bfb\u53d6\u6570\u636e[1.quick_start_copy.md]",id:"demo1-\u4ece\u672c\u5730\u6587\u4ef6\u8bfb\u53d6\u6570\u636e1quick_start_copymd",level:3},{value:"Demo2 \u4ea4\u4e92\u5f0f\u4f7f\u7528 socket \u8bfb\u53d6\u6570\u636e",id:"demo2-\u4ea4\u4e92\u5f0f\u4f7f\u7528-socket-\u8bfb\u53d6\u6570\u636e",level:3},{value:"GeaFlow Console \u5feb\u901f\u4e0a\u624b",id:"geaflow-console-\u5feb\u901f\u4e0a\u624b",level:2},{value:"GeaFlow Kubernetes Operator \u5feb\u901f\u4e0a\u624b",id:"geaflow-kubernetes-operator-\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528 G6VP \u8fdb\u884c\u6d41\u56fe\u8ba1\u7b97\u4f5c\u4e1a\u53ef\u89c6\u5316",id:"\u4f7f\u7528-g6vp-\u8fdb\u884c\u6d41\u56fe\u8ba1\u7b97\u4f5c\u4e1a\u53ef\u89c6\u5316",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6e90\u7801\u90e8\u7f72",children:"\u6e90\u7801\u90e8\u7f72"})}),"\n",(0,t.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(n.h3,{id:"\u7f16\u8bd1-geaflow-\u6e90\u7801",children:"\u7f16\u8bd1 GeaFlow \u6e90\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u7f16\u8bd1 GeaFlow \u4f9d\u8d56\u4ee5\u4e0b\u73af\u5883\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JDK8"}),"\n",(0,t.jsx)(n.li,{children:"Maven(\u63a8\u8350 3.6.3 \u53ca\u4ee5\u4e0a\u7248\u672c)"}),"\n",(0,t.jsx)(n.li,{children:"Git"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u7f16\u8bd1 GeaFlow \u6e90\u7801\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/TuGraph-family/tugraph-analytics.git\ncd tugraph-analytics/\n./build.sh --module=geaflow --output=package\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u672c\u5730\u8fd0\u884c\u6d41\u56fe\u4f5c\u4e1a",children:"\u672c\u5730\u8fd0\u884c\u6d41\u56fe\u4f5c\u4e1a"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730\u73af\u5883\u8fd0\u884c\u4e00\u4e2a\u5b9e\u65f6\u73af\u8def\u67e5\u627e\u7684\u56fe\u8ba1\u7b97\u4f5c\u4e1a\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"demo1-\u4ece\u672c\u5730\u6587\u4ef6\u8bfb\u53d6\u6570\u636e1quick_start_copymd",children:"Demo1 \u4ece\u672c\u5730\u6587\u4ef6\u8bfb\u53d6\u6570\u636e[1.quick_start_copy.md]"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u76f4\u63a5\u8fd0\u884c\u811a\u672c\u5373\u53ef:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/gql_submit.sh --gql geaflow/geaflow-examples/gql/loop_detection_file_demo.sql\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d loop_detection_file_demo.sql \u662f\u4e00\u6bb5\u5b9e\u65f6\u67e5\u8be2\u56fe\u4e2d\u6240\u6709\u56db\u5ea6\u73af\u8def\u7684 DSL \u8ba1\u7b97\u4f5c\u4e1a\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"set geaflow.dsl.window.size = 1;\nset geaflow.dsl.ignore.exception = true;\n\nCREATE GRAPH IF NOT EXISTS dy_modern (\n  Vertex person (\n    id bigint ID,\n    name varchar\n  ),\n  Edge knows (\n    srcId bigint SOURCE ID,\n    targetId bigint DESTINATION ID,\n    weight double\n  )\n) WITH (\n  storeType='rocksdb',\n  shardCount = 1\n);\n\nCREATE TABLE IF NOT EXISTS tbl_source (\n  text varchar\n) WITH (\n  type='file',\n  `geaflow.dsl.file.path` = 'resource:///demo/demo_job_data.txt',\n  `geaflow.dsl.column.separator`='|'\n);\n\nCREATE TABLE IF NOT EXISTS tbl_result (\n  a_id bigint,\n  b_id bigint,\n  c_id bigint,\n  d_id bigint,\n  a1_id bigint\n) WITH (\n  type='file',\n  `geaflow.dsl.file.path` = '/tmp/geaflow/demo_job_result'\n);\n\nUSE GRAPH dy_modern;\n\nINSERT INTO dy_modern.person(id, name)\n  SELECT\n  cast(trim(split_ex(t1, ',', 0)) as bigint),\n  split_ex(trim(t1), ',', 1)\n  FROM (\n    Select trim(substr(text, 2)) as t1\n    FROM tbl_source\n    WHERE substr(text, 1, 1) = '.'\n  );\n\nINSERT INTO dy_modern.knows\n  SELECT\n  cast(split_ex(t1, ',', 0) as bigint),\n  cast(split_ex(t1, ',', 1) as bigint),\n  cast(split_ex(t1, ',', 2) as double)\n  FROM (\n    Select trim(substr(text, 2)) as t1\n    FROM tbl_source\n    WHERE substr(text, 1, 1) = '-'\n  );\n\nINSERT INTO tbl_result\n  SELECT DISTINCT\n  a_id,\n  b_id,\n  c_id,\n  d_id,\n  a1_id\n  FROM (\n  MATCH (a:person) -[:knows]->(b:person) -[:knows]-> (c:person)\n  -[:knows]-> (d:person) -> (a:person)\n  RETURN a.id as a_id, b.id as b_id, c.id as c_id, d.id as d_id, a.id as a1_id\n  );\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5 DSL \u4f1a\u4ece\u9879\u76ee\u4e2d\u7684 resource \u6587\u4ef6 ",(0,t.jsx)(n.strong,{children:"demo_job_data.txt"})," \u4e2d\u8bfb\u53d6\u70b9\u8fb9\u6570\u636e\uff0c\u8fdb\u884c\u6784\u56fe\uff0c\u7136\u540e\u8ba1\u7b97\u56fe\u4e2d\u6240\u6709\u7684 4 \u5ea6\u7684\u73af\u8def, \u5e76\u5c06\u73af\u8def\u4e0a\u7684\u70b9 id \u8f93\u51fa\u5230\n/tmp/geaflow/demo_job_result,\n\u7528\u6237\u4e5f\u53ef\u901a\u8fc7\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"geaflow.dsl.file.path"})," \u53c2\u6570\u81ea\u5b9a\u4e49\u8f93\u51fa\u8def\u5f84\u3002"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2,3,4,1,2\n4,1,2,3,4\n3,4,1,2,3\n1,2,3,4,1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"demo2-\u4ea4\u4e92\u5f0f\u4f7f\u7528-socket-\u8bfb\u53d6\u6570\u636e",children:"Demo2 \u4ea4\u4e92\u5f0f\u4f7f\u7528 socket \u8bfb\u53d6\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u4e5f\u53ef\u81ea\u5df1\u5728\u547d\u4ee4\u53f0\u8f93\u5165\u6570\u636e\uff0c\u5b9e\u65f6\u8fdb\u884c\u6784\u56fe\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u8fd0\u884c\u811a\u672c:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/gql_submit.sh --gql geaflow/geaflow-examples/gql/loop_detection_socket_demo.sql\n"})}),"\n",(0,t.jsx)(n.p,{children:"loop_detection_socket_demo.sql \u4e3b\u8981\u533a\u522b\u662f source \u8868\u662f\u901a\u8fc7 socket \u8fdb\u884c\u8bfb\u53d6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS tbl_source (\n  text varchar\n) WITH (\n  type='socket',\n  `geaflow.dsl.column.separator` = '#',\n  `geaflow.dsl.socket.host` = 'localhost',\n  `geaflow.dsl.socket.port` = 9003\n);\n\nCREATE TABLE IF NOT EXISTS tbl_result (\n  a_id bigint,\n  b_id bigint,\n  c_id bigint,\n  d_id bigint,\n  a1_id bigint\n) WITH (\n  type='socket',\n    `geaflow.dsl.column.separator` = ',',\n    `geaflow.dsl.socket.host` = 'localhost',\n    `geaflow.dsl.socket.port` = 9003\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5 DSL \u5b9e\u65f6\u8bfb\u53d6 socket \u670d\u52a1 9003 \u7aef\u53e3\u6570\u636e\uff0c\u5b9e\u65f6\u6784\u56fe\uff0c\u7136\u540e\u8ba1\u7b97\u56fe\u4e2d\u6240\u6709\u7684 4 \u5ea6\u7684\u73af\u8def, \u5e76\u5c06\u73af\u8def\u4e0a\u7684\u70b9 id \u8f93\u51fa\u5230 socket \u670d\u52a1 9003 \u7aef\u53e3\uff0c\u7136\u540e\u663e\u793a\u5728 socket \u63a7\u5236\u53f0\u3002"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u542f\u52a8 SocketServer"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8 socket server \u7a0b\u5e8f:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/socket.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"socket \u670d\u52a1\u542f\u52a8\u540e\uff0c\u63a7\u5236\u53f0\u663e\u793a\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"socket_start",src:s(4933).A+"",width:"924",height:"180"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u8f93\u5165\u6570\u636e"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'\u8f93\u5165\u6570\u636e\u5982\u4e0b\uff0c\u6570\u636e\u524d\u9762\u7684"."\u4ee3\u8868\u4e00\u6761\u70b9\u6570\u636e\uff0c"-"\u4ee3\u8868\u4e00\u6761\u8fb9\u6570\u636e(\u8d77\u70b9\u3001\u7ec8\u70b9\u548c\u6743\u91cd)\u3002'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:". 1,jim\n. 2,kate\n. 3,lily\n. 4,lucy\n. 5,brown\n. 6,jack\n. 7,jackson\n- 1,2,0.2\n- 2,3,0.3\n- 3,4,0.2\n- 4,1,0.1\n- 4,5,0.1\n- 5,1,0.2\n- 5,6,0.1\n- 6,7,0.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230 socket \u63a7\u5236\u53f0\u4e0a\u663e\u793a\u8ba1\u7b97\u51fa\u6765\u7684\u73af\u8def\u6570\u636e\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ide_socket_server",src:s(6673).A+"",width:"1096",height:"996"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u8f93\u5165\u65b0\u7684\u70b9\u8fb9\u6570\u636e\uff0c\u67e5\u770b\u6700\u65b0\u8ba1\u7b97\u7ed3\u679c\uff0c\u5982\u8f93\u5165\u4e00\u4e0b\u6570\u636e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"- 6,3,0.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u65b0\u7684\u73af\u8def 3-4-5-6-3 \u88ab\u68c0\u67e5\u51fa\u6765\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ide_socket_server_more",src:s(7281).A+"",width:"466",height:"270"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"\u8bbf\u95ee\u53ef\u89c6\u5316 dashboard \u9875\u9762"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u5730\u6a21\u5f0f\u7684\u8fdb\u7a0b\u4f1a\u5360\u7528\u672c\u5730\u7684 8090 \u548c 8088 \u7aef\u53e3\uff0c\u9644\u5e26\u4e00\u4e2a\u53ef\u89c6\u5316\u9875\u9762\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,t.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})," \u5373\u53ef\u8bbf\u95ee\u524d\u7aef\u9875\u9762\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dashboard_overview",src:s(5265).A+"",width:"1500",height:"757"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4e8e\u66f4\u591a dashboard \u76f8\u5173\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003\u6587\u6863\uff1a\n",(0,t.jsx)(n.a,{href:"/tugraph-analytics/zh/deploy/dashboard",children:"\u6587\u6863"})]}),"\n",(0,t.jsx)(n.h2,{id:"geaflow-console-\u5feb\u901f\u4e0a\u624b",children:"GeaFlow Console \u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsxs)(n.p,{children:["GeaFlow Console \u662f GeaFlow \u63d0\u4f9b\u7684\u56fe\u8ba1\u7b97\u7814\u53d1\u5e73\u53f0\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Docker \u5bb9\u5668\u91cc\u9762\u542f\u52a8 GeaFlow Console \u5e73\u53f0\uff0c\u63d0\u4ea4\u6d41\u56fe\u8ba1\u7b97\u4f5c\u4e1a\u3002\u6587\u6863\u5730\u5740\uff1a\n",(0,t.jsx)(n.a,{href:"/tugraph-analytics/zh/quick_start/quick_start_docker",children:"\u6587\u6863"})]}),"\n",(0,t.jsx)(n.h2,{id:"geaflow-kubernetes-operator-\u5feb\u901f\u4e0a\u624b",children:"GeaFlow Kubernetes Operator \u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsxs)(n.p,{children:["Geaflow Kubernetes Operator \u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u5c06 Geaflow \u5e94\u7528\u90e8\u7f72\u5230 kubernetes \u96c6\u7fa4\u4e2d\u7684\u90e8\u7f72\u5de5\u5177\u3002\n\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Helm \u5b89\u88c5 geaflow-kubernetes-operator\uff0c\u901a\u8fc7 yaml \u6587\u4ef6\u5feb\u901f\u63d0\u4ea4 geaflow \u4f5c\u4e1a\uff0c\n\u5e76\u8bbf\u95ee operator \u7684 dashboard \u9875\u9762\u67e5\u770b\u96c6\u7fa4\u4e0b\u7684\u4f5c\u4e1a\u72b6\u6001\u3002\u6587\u6863\u5730\u5740\uff1a\n",(0,t.jsx)(n.a,{href:"/tugraph-analytics/zh/deploy/quick_start_operator",children:"\u6587\u6863"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-g6vp-\u8fdb\u884c\u6d41\u56fe\u8ba1\u7b97\u4f5c\u4e1a\u53ef\u89c6\u5316",children:"\u4f7f\u7528 G6VP \u8fdb\u884c\u6d41\u56fe\u8ba1\u7b97\u4f5c\u4e1a\u53ef\u89c6\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["G6VP \u662f\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u56fe\u53ef\u89c6\u5206\u6790\u5e73\u53f0\uff0c\u5305\u62ec\u6570\u636e\u6e90\u7ba1\u7406\u3001\u6784\u56fe\u3001\u56fe\u5143\u7d20\u4e2a\u6027\u5316\u914d\u7f6e\u3001\u56fe\u53ef\u89c6\u5206\u6790\u7b49\u529f\u80fd\u6a21\u5757\u3002\u4f7f\u7528 G6VP \u80fd\u591f\u5f88\u65b9\u4fbf\u7684\u5bf9 Geaflow \u8ba1\u7b97\u7ed3\u679c\u8fdb\u884c\u53ef\u89c6\u5316\u5206\u6790\u3002\u6587\u6863\u5730\u5740\uff1a\n",(0,t.jsx)(n.a,{href:"/tugraph-analytics/zh/deploy/collaborate_with_g6vp",children:"\u6587\u6863"})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5265:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/dashboard_overview-b233698d6ed8bb4bfd2ff1653541f559.png"},6673:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ide_socket_server-014fb4801a4073956bdbf5f1a4c35707.png"},7281:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ide_socket_server_more-0be58700784f7c686ce8164e5b7e7bbf.png"},4933:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/socket_start-755ddcc99d290afc681d9cb75af799f0.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);