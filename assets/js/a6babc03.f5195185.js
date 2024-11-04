"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1535],{3012:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var l=s(4848),i=s(8453);const c={},t="\u5f00\u59cb\u4e0a\u624b(GeaFlow Console\u8fd0\u884c)",a={id:"quick_start_docker",title:"\u5f00\u59cb\u4e0a\u624b(GeaFlow Console\u8fd0\u884c)",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/docs-cn/quick_start_docker.md",sourceDirName:".",slug:"/quick_start_docker",permalink:"/tugraph-analytics/zh/quick_start_docker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b(\u672c\u5730\u8fd0\u884c)",permalink:"/tugraph-analytics/zh/quick_start"},next:{title:"\u540d\u79f0\u89e3\u91ca",permalink:"/tugraph-analytics/zh/concepts/glossary"}},r={},o=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"Docker\u5bb9\u5668\u8fd0\u884cGeaFlow\u4f5c\u4e1a",id:"docker\u5bb9\u5668\u8fd0\u884cgeaflow\u4f5c\u4e1a",level:2},{value:"K8S\u90e8\u7f72",id:"k8s\u90e8\u7f72",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u5f00\u59cb\u4e0a\u624bgeaflow-console\u8fd0\u884c",children:"\u5f00\u59cb\u4e0a\u624b(GeaFlow Console\u8fd0\u884c)"})}),"\n",(0,l.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u4e0b\u8f7d\u5b89\u88c5",(0,l.jsx)(e.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"}),"\uff0c\u8c03\u6574Docker\u670d\u52a1\u8d44\u6e90\u914d\u7f6e\uff08Dashboard-Settings-Resources\uff09\u540e\u542f\u52a8Docker\u670d\u52a1\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"docker_pref",src:s(5084).A+"",width:"2500",height:"1440"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u62c9\u53d6GeaFlow Console\u955c\u50cf"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u62c9\u53d6\u8fdc\u7a0bgeaflow console\u955c\u50cf:"}),"\n",(0,l.jsx)(e.p,{children:"x86\u67b6\u6784\u62c9\u53d6x86\u955c\u50cf\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"docker pull tugraph/geaflow-console:0.1\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u662farm\u67b6\u6784\uff0c\u62c9\u53d6arm\u955c\u50cf\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"docker pull tugraph/geaflow-console-arm:0.1\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u9047\u5230\u7f51\u7edc\u95ee\u9898\u5bfc\u81f4\u62c9\u53d6\u5931\u8d25\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u76f4\u63a5\u6784\u5efa\u955c\u50cf(\u6784\u5efa\u955c\u50cf\u4e4b\u524d\u9700\u8981\u5148\u542f\u52a8docker\u5bb9\u5668,\u6784\u5efa\u811a\u672c\u6839\u636e\u673a\u5668\u7c7b\u578bbuild\u5bf9\u5e94\u7c7b\u578b\u7684\u955c\u50cf):"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"git clone https://github.com/TuGraph-family/tugraph-analytics.git\ncd tugraph-analytics/\nbash ./build.sh --all\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6574\u4e2a\u7f16\u8bd1\u8fc7\u7a0b\u53ef\u80fd\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002\u955c\u50cf\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u955c\u50cf\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"docker images\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8fdc\u7a0b\u62c9\u53d6\u7684\u955c\u50cf\u540d\u79f0\u4e3a\uff1a",(0,l.jsx)(e.strong,{children:"tugraph/geaflow-console:0.1"}),"(x86\u67b6\u6784) \u6216\u8005",(0,l.jsx)(e.strong,{children:"tugraph/geaflow-console-arm:0.1"}),"(arm\u67b6\u6784)\n\u3002\u672c\u5730\u955c\u50cf\u540d\u79f0\u4e3a\uff1a",(0,l.jsx)(e.strong,{children:"geaflow-console:0.1"}),"\uff0c\u53ea\u9700\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u6784\u5efa\u955c\u50cf\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"docker\u5bb9\u5668\u8fd0\u884cgeaflow\u4f5c\u4e1a",children:"Docker\u5bb9\u5668\u8fd0\u884cGeaFlow\u4f5c\u4e1a"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0b\u9762\u4ecb\u7ecd\u5728docker\u5bb9\u5668\u91cc\u9762\u8fd0\u884c\u524d\u9762",(0,l.jsx)(e.a,{href:"/tugraph-analytics/zh/quick_start",children:"\u672c\u5730\u6a21\u5f0f\u8fd0\u884c"}),"\u4ecb\u7ecd\u7684\u6d41\u56fe\u4f5c\u4e1a\u3002"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u542f\u52a8GeaFlow Console\u5e73\u53f0\u670d\u52a1\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8fdc\u7a0b\u955c\u50cf\u542f\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"x86\u67b6\u6784"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"docker run -d --name geaflow-console -p 8888:8888 tugraph/geaflow-console:0.1\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"arm\u67b6\u6784"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"docker run -d --name geaflow-console -p 8888:8888 tugraph/geaflow-console-arm:0.1\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7",(0,l.jsx)(e.strong,{children:"uname -a"}),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u673a\u5668\u67b6\u6784\u7c7b\u578b."]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u672c\u5730\u955c\u50cf\u542f\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"docker run -d --name geaflow-console -p 8888:8888 geaflow-console:0.1\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"}),": \u8fdc\u7a0b\u62c9\u53d6\u955c\u50cf\u548c\u672c\u5730\u955c\u50cftag\u540d\u79f0\u4e0d\u540c\uff0c\u542f\u52a8\u547d\u4ee4\u6709\u6240\u533a\u522b\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8fdb\u5165\u5bb9\u5668\u7b49\u5f85Java\u8fdb\u7a0b\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee",(0,l.jsx)(e.a,{href:"http://localhost:8888",children:"localhost:8888"}),"\u8fdb\u5165GeaFlow Console\u5e73\u53f0\u9875\u9762\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"> docker exec -it geaflow-console tailf /tmp/logs/geaflow/app-default.log\n\n# wait the logs below and open url http://localhost:8888\nGeaflowApplication:61   - Started GeaflowApplication in 11.437 seconds (JVM running for 13.475)\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u6ce8\u518c\u7528\u6237"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u4f4d\u6ce8\u518c\u7528\u6237\u5c06\u9ed8\u8ba4\u88ab\u8bbe\u7f6e\u4e3a\u7ba1\u7406\u5458\uff0c\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u767b\u5f55\uff0c\u901a\u8fc7\u4e00\u952e\u5b89\u88c5\u529f\u80fd\u5f00\u59cb\u7cfb\u7edf\u521d\u59cb\u5316\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"install_welcome",src:s(40).A+"",width:"1548",height:"824"})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsx)(e.li,{children:"\u914d\u7f6e\u8fd0\u884c\u65f6\u73af\u5883"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"GeaFlow\u9996\u6b21\u8fd0\u884c\u9700\u8981\u914d\u7f6e\u8fd0\u884c\u65f6\u73af\u5883\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u5305\u62ec\u96c6\u7fa4\u914d\u7f6e\u3001\u8fd0\u884c\u65f6\u914d\u7f6e\u3001\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u4ee5\u53ca\u6587\u4ef6\u5b58\u50a8\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(e.p,{children:"3.1 \u96c6\u7fa4\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u9ed8\u8ba4Container\u6a21\u5f0f\uff0c\u5373\u672c\u5730\u5bb9\u5668\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"install_container",src:s(7753).A+"",width:"3582",height:"874"})}),"\n",(0,l.jsx)(e.p,{children:"3.2 \u8fd0\u884c\u65f6\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u5730\u8fd0\u884c\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u914d\u7f6e\uff0c\u4f7f\u7528\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e\uff0c\u76f4\u63a5\u70b9\u4e0b\u4e00\u6b65\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.img,{alt:"install_conainer_meta_config.png",src:s(6418).A+"",width:"3582",height:"1728"}),"\n3.3 \u6570\u636e\u5b58\u50a8\u914d\u7f6e"]}),"\n",(0,l.jsx)(e.p,{children:"\u9009\u62e9\u56fe\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e\uff0c\u672c\u5730\u6a21\u5f0f\u4e0b\u9009\u62e9LOCAL,\u586b\u5199\u4e00\u4e2a\u672c\u5730\u76ee\u5f55\u3002\u9ed8\u8ba4\u4e0d\u9700\u586b\u5199\uff0c\u76f4\u63a5\u70b9\u4e0b\u4e00\u6b65\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"install_storage_config",src:s(1246).A+"",width:"3582",height:"998"})}),"\n",(0,l.jsx)(e.p,{children:"3.4 \u6587\u4ef6\u5b58\u50a8\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u914d\u7f6e\u4e3aGeaFlow\u5f15\u64ceJAR\u3001\u7528\u6237JAR\u6587\u4ef6\u7684\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u6bd4\u5982HDFS\u7b49\u3002\u672c\u5730\u8fd0\u884c\u6a21\u5f0f\u4e0b\u548c\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u76f8\u540c\uff0c\u9009\u62e9LOCAL\u6a21\u5f0f\uff0c\u586b\u5199\u4e00\u4e2a\u672c\u5730\u76ee\u5f55\u3002\u9ed8\u8ba4\u4e0d\u9700\u586b\u5199\uff0c\u76f4\u63a5\u70b9\u4e0b\u4e00\u6b65\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.img,{alt:"install_jar_config",src:s(6802).A+"",width:"3570",height:"1002"}),"\n\u914d\u7f6e\u5b8c\u6210\u540e\u70b9\u51fb\u4e00\u952e\u5b89\u88c5\u6309\u94ae\uff0c\u5b89\u88c5\u6210\u529f\u540e\uff0c\u7ba1\u7406\u5458\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u4e2a\u4eba\u79df\u6237\u4e0b\u7684\u9ed8\u8ba4\u5b9e\u4f8b\uff0c\u5e76\u53ef\u4ee5\u76f4\u63a5\u521b\u5efa\u53d1\u5e03\u56fe\u8ba1\u7b97\u4efb\u52a1\u3002"]}),"\n",(0,l.jsxs)(e.ol,{start:"4",children:["\n",(0,l.jsx)(e.li,{children:"\u521b\u5efa\u56fe\u8ba1\u7b97\u4efb\u52a1"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8fdb\u5165\u56fe\u7814\u53d1\u9875\u9762\uff0c\u9009\u62e9\u5de6\u4fa7\u56fe\u4efb\u52a1Tab\u680f\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u65b0\u589e\u6309\u94ae\uff0c\u65b0\u5efa\u4e00\u4e2aDSL\u4f5c\u4e1a\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.img,{alt:"create_job",src:s(7946).A+"",width:"3580",height:"886"}),"\n\u5206\u522b\u586b\u5199\u4efb\u52a1\u540d\u79f0\u3001\u4efb\u52a1\u63cf\u8ff0\u548cDSL\u5185\u5bb9\u3002\u5176\u4e2dDSL\u5185\u5bb9\u548c\u524d\u9762\u672c\u5730\u8fd0\u884c\u4f5c\u4e1a\u4ecb\u7ecd\u7684\u4e00\u6837\uff0c\u53ea\u9700\u4fee\u6539DSL,",(0,l.jsx)(e.strong,{children:"\u5c06tbl_source\u548ctbl_result\u8868\u7684${your.host.ip}\u66ff\u6362\u6210\u672c\u673aip"}),"\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"set geaflow.dsl.window.size = 1;\nset geaflow.dsl.ignore.exception = true;\n\nCREATE GRAPH IF NOT EXISTS dy_modern (\n  Vertex person (\n    id bigint ID,\n    name varchar\n  ),\n  Edge knows (\n    srcId bigint SOURCE ID,\n    targetId bigint DESTINATION ID,\n    weight double\n  )\n) WITH (\n  storeType='rocksdb',\n  shardCount = 1\n);\n\nCREATE TABLE IF NOT EXISTS tbl_source (\n  text varchar\n) WITH (\n  type='socket',\n  `geaflow.dsl.column.separator` = '#',\n  `geaflow.dsl.socket.host` = '${your.host.ip}',\n  `geaflow.dsl.socket.port` = 9003\n);\n\nCREATE TABLE IF NOT EXISTS tbl_result (\n  a_id bigint,\n  b_id bigint,\n  c_id bigint,\n  d_id bigint,\n  a1_id bigint\n) WITH (\n  type='socket',\n    `geaflow.dsl.column.separator` = ',',\n    `geaflow.dsl.socket.host` = '${your.host.ip}',\n    `geaflow.dsl.socket.port` = 9003\n);\n\nUSE GRAPH dy_modern;\n\nINSERT INTO dy_modern.person(id, name)\nSELECT\ncast(split_ex(t1, ',', 0) as bigint),\nsplit_ex(t1, ',', 1)\nFROM (\n  Select trim(substr(text, 2)) as t1\n  FROM tbl_source\n  WHERE substr(text, 1, 1) = '.'\n);\n\nINSERT INTO dy_modern.knows\nSELECT\n cast(split_ex(t1, ',', 0) as bigint),\n cast(split_ex(t1, ',', 1) as bigint),\n cast(split_ex(t1, ',', 2) as double)\nFROM (\n  Select trim(substr(text, 2)) as t1\n  FROM tbl_source\n  WHERE substr(text, 1, 1) = '-'\n);\n\nINSERT INTO tbl_result\nSELECT DISTINCT\n  a_id,\n  b_id,\n  c_id,\n  d_id,\n  a1_id\nFROM (\n  MATCH (a:person) -[:knows]->(b:person) -[:knows]-> (c:person)\n   -[:knows]-> (d:person) -> (a:person)\n  RETURN a.id as a_id, b.id as b_id, c.id as c_id, d.id as d_id, a.id as a1_id\n);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u673aip\u83b7\u53d6\u65b9\u5f0f\u5982\u4e0b\uff0c\u6267\u884c\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ifconfig\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u627e\u5230eth0\u6216\u8005en0\u7684\u7f51\u5361\uff0c\u5176\u4e2dipv4\u7684\u5730\u5740\u5373\u4e3a\u4f60\u672c\u673a\u7684ip\u5730\u5740\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ip.png",src:s(7265).A+"",width:"1230",height:"374"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.img,{alt:"add_dsl_job",src:s(3429).A+"",width:"3580",height:"1194"}),"\n\u521b\u5efa\u5b8c\u6210\u4f5c\u4e1a\u540e\uff0c\u70b9\u51fb\u53d1\u5e03\u6309\u94ae\u53d1\u5e03\u4f5c\u4e1a\u3002"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"add_dsl_job",src:s(1882).A+"",width:"3582",height:"858"})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u540e\u8fdb\u5165\u4f5c\u4e1a\u7ba1\u7406\u9875\u9762\uff0c\u70b9\u51fb\u63d0\u4ea4\u6309\u94ae\u63d0\u4ea4\u4f5c\u4e1a\u6267\u884c\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"task_detail",src:s(7917).A+"",width:"3578",height:"1466"})}),"\n",(0,l.jsxs)(e.ol,{start:"5",children:["\n",(0,l.jsx)(e.li,{children:"\u542f\u52a8socket\u670d\u52a1\u8f93\u5165\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8fdb\u5165GeaFlow\u9879\u76ee\u8def\u5f84\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u542f\u52a8socket\u670d\u52a1(\u542f\u52a8socket\u670d\u52a1\u524d\u9700\u8981\u5148\u63d0\u524d\u7f16\u8bd1\u4e00\u6b21GeaFlow\u5de5\u7a0b\uff0c\u5982\u679c\u524d\u9762\u7f16\u8bd1\u8fc7\u5219\u5ffd\u7565)"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"bin/socket.sh\n"})}),"\n",(0,l.jsx)(e.p,{children:"socket\u670d\u52a1\u542f\u52a8\u540e\uff0c\u8f93\u5165\u70b9\u8fb9\u6570\u636e\uff0c\u8ba1\u7b97\u7ed3\u679c\u4f1a\u5b9e\u65f6\u663e\u793a\u5728\u5c4f\u5e55\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:". 1,jim\n. 2,kate\n. 3,lily\n. 4,lucy\n. 5,brown\n. 6,jack\n. 7,jackson\n- 1,2,0.2\n- 2,3,0.3\n- 3,4,0.2\n- 4,1,0.1\n- 4,5,0.1\n- 5,1,0.2\n- 5,6,0.1\n- 6,7,0.1\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ide_socket_server",src:s(1738).A+"",width:"1096",height:"996"})}),"\n",(0,l.jsx)(e.h2,{id:"k8s\u90e8\u7f72",children:"K8S\u90e8\u7f72"}),"\n",(0,l.jsxs)(e.p,{children:["GeaFlow\u652f\u6301K8S\u90e8\u7f72, \u90e8\u7f72\u8be6\u7ec6\u6587\u6863\u8bf7\u53c2\u8003\u6587\u6863\uff1a",(0,l.jsx)(e.a,{href:"/tugraph-analytics/zh/deploy/install_guide",children:"K8S\u90e8\u7f72"})]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},3429:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/add_dsl_job-f8e9b0e9c63da097fbdcb5cda8b5724e.png"},7946:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/create_job-5e4c6c0029a430885b93bd2f2a4cc67f.png"},5084:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/docker_pref-12f13cfa6094fbaa8703d45c18b249a7.png"},1738:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/ide_socket_server-014fb4801a4073956bdbf5f1a4c35707.png"},6418:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/install_conainer_meta_config-6defb8a41f641f85a4b2d47c3ce4278b.png"},7753:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/install_container-df1d7e03ff07c0434d9b5f60afba24f0.png"},6802:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/install_jar_config-59a78733dd0ecd117d3c5a11bf9e679d.png"},1246:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/install_storage_config-e214f9fcba3b9567ac15718676b7e74e.png"},40:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/install_welcome-f5a8979f783f3b1c8736be1acfba88f6.png"},7265:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/ip-fa01de8dc53f8d0cdc305a08ef5c47b5.png"},1882:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/job_list-8e8c288118c7bb3709e9541af166a61e.png"},7917:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/task_detail-3c3c81b678891ab5aeb830f25eefeba9.png"},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>a});var l=s(6540);const i={},c=l.createContext(i);function t(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);