"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6882],{9519:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=i(4848),t=i(8453);const a={},s="Graph View",c={id:"concepts/graph_view",title:"Graph View",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/../docs-cn/source/4.concepts/graph_view.md",sourceDirName:"4.concepts",slug:"/concepts/graph_view",permalink:"/tugraph-analytics/zh/concepts/graph_view",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},h={},p=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u529f\u80fd\u63cf\u8ff0",id:"\u529f\u80fd\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b\u4ecb\u7ecd",id:"\u793a\u4f8b\u4ecb\u7ecd",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"graph-view",children:"Graph View"})}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,r.jsx)(n.p,{children:"GraphView\u662fGeaflow\u4e2d\u6700\u6838\u5fc3\u7684\u6570\u636e\u62bd\u8c61\uff0c\u8868\u793a\u57fa\u4e8e\u56fe\u7ed3\u6784\u7684\u865a\u62df\u89c6\u56fe\u3002\u5b83\u662f\u56fe\u7269\u7406\u5b58\u50a8\u7684\u4e00\u79cd\u62bd\u8c61\uff0c\u53ef\u4ee5\u8868\u793a\u5b58\u50a8\u548c\u64cd\u4f5c\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u56fe\u6570\u636e\u3002\u5728 Geaflow\u4e2d\uff0cGraphView\u662f\u4e00\u7b49\u516c\u6c11\uff0c\u7528\u6237\u5bf9\u56fe\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8eGraphView\uff0c\u4f8b\u5982\u5c06\u5206\u5e03\u5f0f\u70b9\u3001\u8fb9\u6d41\u4f5c\u4e3a GraphView \u589e\u91cf\u7684\u70b9/\u8fb9\u6570\u636e\u96c6\uff0c\u5bf9\u5f53\u524d GraphView \u751f\u6210\u5feb\u7167\uff0c\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u5feb\u7167\u56fe\u6216\u8005\u52a8\u6001\u7684 GraphView \u89e6\u53d1\u8ba1\u7b97\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd\u63cf\u8ff0",children:"\u529f\u80fd\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"GraphView \u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56fe\u64cd\u4f5c\uff0cGraphView\u53ef\u4ee5\u6dfb\u52a0\u6216\u5220\u9664\u70b9\u548c\u8fb9\u6570\u636e\uff0c\u4ea6\u53ef\u4ee5\u8fdb\u884c\u67e5\u8be2\u548c\u5728\u57fa\u4e8e\u67d0\u4e2a\u65f6\u95f4\u70b9\u5207\u7247\u5feb\u7167\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u56fe\u4ecb\u8d28\uff0cGraphView\u53ef\u4ee5\u5b58\u50a8\u5230\u56fe\u6570\u636e\u5e93\u6216\u5176\u4ed6\u5b58\u50a8\u4ecb\u8d28(\u5982\u6587\u4ef6\u7cfb\u7edf\u3001KV\u5b58\u50a8\u3001\u5bbd\u8868\u5b58\u50a8\u3001native graph\u7b49)\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u56fe\u5207\u5206\uff0cGraphView\u8fd8\u652f\u6301\u4e0d\u540c\u56fe\u5207\u5206\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u56fe\u8ba1\u7b97\uff0cGraphView\u53ef\u4ee5\u8fdb\u884c\u56fe\u7684\u8fed\u4ee3\u904d\u5386\u6216\u8005\u8ba1\u7b97\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"graph_view|(4000x2500)",src:i(7468).A+"",width:"802",height:"497"})}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b\u4ecb\u7ecd",children:"\u793a\u4f8b\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u5b9a\u4e49\u4e00\u4e2a Social Network \u7684 GraphView, \u63cf\u8ff0\u4eba\u9645\u5173\u7cfb\u3002"}),"\n",(0,r.jsx)(n.p,{children:"DSL \u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE GRAPH social_network (\n\tVertex person (\n\t  id int ID,\n\t  name varchar\n\t),\n\tEdge knows (\n\t  person1 int SOURCE ID,\n\t  person2 int DESTINATION ID,\n\t  weight int\n\t)\n) WITH (\n\tstoreType='rocksdb',\n\tshardCount = 128\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"HLA \u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'//build graph view.\nfinal String graphName = "social_network";\nGraphViewDesc graphViewDesc = GraphViewBuilder\n\t.createGraphView(graphName)\n\t.withShardNum(128)\n\t.withBackend(BackendType.RocksDB)\n    .withSchema(new GraphMetaType(IntegerType.INSTANCE, ValueVertex.class,\n                String.class, ValueEdge.class, Integer.class))\n\t.build();\n\n// bind the graphview with pipeline1\npipeline.withView(graphName, graphViewDesc);\npipeline.submit(new PipelineTask());\n\n'})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7468:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/graph_view-c9544abc4cbfca2f78fe29f6c3d88084.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);