"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4929],{1154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(4848),s=t(8453);const a={},i="Quick Start (Running in Local)",l={id:"quick_start/quick_start",title:"Quick Start (Running in Local)",description:"Prepare",source:"@site/../docs-en/source/3.quick_start/1.quick_start.md",sourceDirName:"3.quick_start",slug:"/quick_start/quick_start",permalink:"/tugraph-analytics/en/quick_start/quick_start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tugraph-analytics/en/introduction"},next:{title:"Quick Start(Running in GeaFlow Console)",permalink:"/tugraph-analytics/en/quick_start/quick_start_docker"}},r={},c=[{value:"Prepare",id:"prepare",level:2},{value:"Build Project",id:"build-project",level:3},{value:"Running Job In Local",id:"running-job-in-local",level:2},{value:"Demo1 Read data from local file",id:"demo1-read-data-from-local-file",level:3},{value:"Demo2 Read data from socket interactively",id:"demo2-read-data-from-socket-interactively",level:3},{value:"Running in GeaFlow Console",id:"running-in-geaflow-console",level:2},{value:"Running with GeaFlow Kubernetes Operator",id:"running-with-geaflow-kubernetes-operator",level:2},{value:"Visualization of flow graph computation jobs using G6VP",id:"visualization-of-flow-graph-computation-jobs-using-g6vp",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"quick-start-running-in-local",children:"Quick Start (Running in Local)"})}),"\n",(0,o.jsx)(n.h2,{id:"prepare",children:"Prepare"}),"\n",(0,o.jsx)(n.h3,{id:"build-project",children:"Build Project"}),"\n",(0,o.jsx)(n.p,{children:"To compile GeaFlow, the following environments are required:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"JDK8"}),"\n",(0,o.jsx)(n.li,{children:"Maven (recommended version 3.6.3 or higher)"}),"\n",(0,o.jsx)(n.li,{children:"Git"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Execute the following commands to compile the GeaFlow source code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/TuGraph-family/tugraph-analytics.git\ncd tugraph-analytics/\n./build.sh =gealfow --output=package\n"})}),"\n",(0,o.jsx)(n.h2,{id:"running-job-in-local",children:"Running Job In Local"}),"\n",(0,o.jsx)(n.p,{children:"Here's how to run a real-time loop detection graph computing job in a local environment:"}),"\n",(0,o.jsx)(n.h3,{id:"demo1-read-data-from-local-file",children:"Demo1 Read data from local file"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Directly execute the script:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"bin/gql_submit.sh --gql geaflow/geaflow-examples/gql/loop_detection_file_demo.sql\n"})}),"\n",(0,o.jsx)(n.p,{children:'"loop_detection.sql" is a DSL calculation job for real-time querying all four-degree loops in a graph. Its contents are as follows:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"set geaflow.dsl.window.size = 1;\nset geaflow.dsl.ignore.exception = true;\n\nCREATE GRAPH IF NOT EXISTS dy_modern (\n  Vertex person (\n    id bigint ID,\n    name varchar\n  ),\n  Edge knows (\n    srcId bigint SOURCE ID,\n    targetId bigint DESTINATION ID,\n    weight double\n  )\n) WITH (\n  storeType='rocksdb',\n  shardCount = 1\n);\n\nCREATE TABLE IF NOT EXISTS tbl_source (\n  text varchar\n) WITH (\n  type='file',\n  `geaflow.dsl.file.path` = 'resource:///demo/demo_job_data.txt',\n  `geaflow.dsl.column.separator`='|'\n);\n\nCREATE TABLE IF NOT EXISTS tbl_result (\n  a_id bigint,\n  b_id bigint,\n  c_id bigint,\n  d_id bigint,\n  a1_id bigint\n) WITH (\n  type='file',\n  `geaflow.dsl.file.path` = '/tmp/geaflow/demo_job_result'\n);\n\nUSE GRAPH dy_modern;\n\nINSERT INTO dy_modern.person(id, name)\n  SELECT\n  cast(trim(split_ex(t1, ',', 0)) as bigint),\n  split_ex(trim(t1), ',', 1)\n  FROM (\n    Select trim(substr(text, 2)) as t1\n    FROM tbl_source\n    WHERE substr(text, 1, 1) = '.'\n  );\n\nINSERT INTO dy_modern.knows\n  SELECT\n  cast(split_ex(t1, ',', 0) as bigint),\n  cast(split_ex(t1, ',', 1) as bigint),\n  cast(split_ex(t1, ',', 2) as double)\n  FROM (\n    Select trim(substr(text, 2)) as t1\n    FROM tbl_source\n    WHERE substr(text, 1, 1) = '-'\n  );\n\nINSERT INTO tbl_result\n  SELECT DISTINCT\n  a_id,\n  b_id,\n  c_id,\n  d_id,\n  a1_id\n  FROM (\n  MATCH (a:person) -[:knows]->(b:person) -[:knows]-> (c:person)\n  -[:knows]-> (d:person) -> (a:person)\n  RETURN a.id as a_id, b.id as b_id, c.id as c_id, d.id as d_id, a.id as a1_id\n  );\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This DSL reads real-time data from the ",(0,o.jsx)(n.strong,{children:"demo_job_data.txt"})," file in the project resources, constructs a graph, calculates all\n4-degree loops in the graph, outputs the IDs of the vertex on the loop to the ",(0,o.jsx)(n.code,{children:"/tmp/geaflow/demo_job_result"}),"\ndirectory. Users can also set the parameter ",(0,o.jsx)(n.code,{children:"geaflow.dsl.file.path"})," to modify the output path."]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"the output result is:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"2,3,4,1,2\n4,1,2,3,4\n3,4,1,2,3\n1,2,3,4,1\n"})}),"\n",(0,o.jsx)(n.h3,{id:"demo2-read-data-from-socket-interactively",children:"Demo2 Read data from socket interactively"}),"\n",(0,o.jsx)(n.p,{children:"Users can also input data on the command console and build graphs in real time."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Execute the script:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"bin/gql_submit.sh --gql geaflow/geaflow-examples/gql/loop_detection_socket_demo.sql\n"})}),"\n",(0,o.jsx)(n.p,{children:'The main difference of "loop_detection_socket_demo.sql" is that the source table is read from socket data:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS tbl_source (\n  text varchar\n) WITH (\n  type='socket',\n  `geaflow.dsl.column.separator` = '#',\n  `geaflow.dsl.socket.host` = 'localhost',\n  `geaflow.dsl.socket.port` = 9003\n);\n\nCREATE TABLE IF NOT EXISTS tbl_result (\n  a_id bigint,\n  b_id bigint,\n  c_id bigint,\n  d_id bigint,\n  a1_id bigint\n) WITH (\n  type='socket',\n    `geaflow.dsl.column.separator` = ',',\n    `geaflow.dsl.socket.host` = 'localhost',\n    `geaflow.dsl.socket.port` = 9003\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:"This DSL reads real-time data from the socket service on port 9003, constructs a graph in real-time, calculates all 4-degree loops in the graph, outputs the IDs of the vertex on the loop to the socket service on port 9003, and displays them on the socket console."}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Start SocketServer"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Run the following command to start the socket server program:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"bin/socket.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"After the socket service is started, the following information is displayed on the console:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"socket_start",src:t(4933).A+"",width:"924",height:"180"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Input data"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'The input data is as follows: the "." in front of the data represents a point data, and the "-" represents an edge data (start, end, and weight).'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:". 1,jim\n. 2,kate\n. 3,lily\n. 4,lucy\n. 5,brown\n. 6,jack\n. 7,jackson\n- 1,2,0.2\n- 2,3,0.3\n- 3,4,0.2\n- 4,1,0.1\n- 4,5,0.1\n- 5,1,0.2\n- 5,6,0.1\n- 6,7,0.1\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can see the calculated loop data displayed on the socket console:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ide_socket_server",src:t(6673).A+"",width:"1096",height:"996"})}),"\n",(0,o.jsx)(n.p,{children:"You can also continue to enter new point edge data to view the latest calculation results, such as entering the following data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"- 6,3,0.1\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can see that the new loop 3-4-5-6-3 is checked out:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ide_socket_server_more",src:t(7281).A+"",width:"466",height:"270"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Access the dashboard page"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The local mode will use the local 8090 and 8088 ports and comes with a dashboard page."}),"\n",(0,o.jsxs)(n.p,{children:["Visit ",(0,o.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})," in the browser to access the front-end page.\n",(0,o.jsx)(n.img,{alt:"dashboard_overview",src:t(5265).A+"",width:"1500",height:"757"})]}),"\n",(0,o.jsxs)(n.p,{children:["For more dashboard related content, please refer to the documentation:\n",(0,o.jsx)(n.a,{href:"/tugraph-analytics/en/deploy/dashboard",children:"Dashboard"})]}),"\n",(0,o.jsx)(n.h2,{id:"running-in-geaflow-console",children:"Running in GeaFlow Console"}),"\n",(0,o.jsxs)(n.p,{children:["GeaFlow Console is a graph computing research and development platform provided by GeaFlow. In this document, we will introduce how to launch the GeaFlow Console platform in a Docker container and submit graph computing jobs.\nDocument address: ",(0,o.jsx)(n.a,{href:"/tugraph-analytics/en/quick_start/quick_start_docker",children:"Running in Docker"})]}),"\n",(0,o.jsx)(n.h2,{id:"running-with-geaflow-kubernetes-operator",children:"Running with GeaFlow Kubernetes Operator"}),"\n",(0,o.jsxs)(n.p,{children:["Geaflow Kubernetes Operator is a deployment tool that can quickly deploy Geaflow applications to kubernetes clusters.\nWe will introduce how to install geaflow-kubernetes-operator through Helm and quickly submit\ngeaflow jobs through yaml files, and in addition, how to visit the operator's dashboard page to\nview the job details in the cluster.\nDocument address: ",(0,o.jsx)(n.a,{href:"/tugraph-analytics/en/deploy/quick_start_operator",children:"Running By kubernetes operator"})]}),"\n",(0,o.jsx)(n.h2,{id:"visualization-of-flow-graph-computation-jobs-using-g6vp",children:"Visualization of flow graph computation jobs using G6VP"}),"\n",(0,o.jsxs)(n.p,{children:["G6VP is an extensible visual analysis platform, including data source management, composition, personalized configuration of graphic elements, visual analysis and other functional modules. Using G6VP, it is easy to visualize the results of Geaflow calculations. Document address: ",(0,o.jsx)(n.a,{href:"/tugraph-analytics/en/deploy/collaborate_with_g6vp",children:"Document"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5265:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dashboard_overview-b233698d6ed8bb4bfd2ff1653541f559.png"},6673:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ide_socket_server-014fb4801a4073956bdbf5f1a4c35707.png"},7281:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ide_socket_server_more-0be58700784f7c686ce8164e5b7e7bbf.png"},4933:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/socket_start-755ddcc99d290afc681d9cb75af799f0.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);