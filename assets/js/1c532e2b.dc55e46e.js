"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4912],{4375:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var i=r(4848),c=r(8453);const t={},l="Framework\u539f\u7406\u4ecb\u7ecd",s={id:"concepts/framework_principle",title:"Framework\u539f\u7406\u4ecb\u7ecd",description:"\u67b6\u6784\u56fe",source:"@site/docs/docs-cn/source/4.concepts/3.framework_principle.md",sourceDirName:"4.concepts",slug:"/concepts/framework_principle",permalink:"/tugraph-analytics/zh/concepts/framework_principle",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DSL\u539f\u7406\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/concepts/dsl_principle"},next:{title:"State\u539f\u7406\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/concepts/state_principle"}},a={},o=[{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:2},{value:"\u8ba1\u7b97\u5f15\u64ce",id:"\u8ba1\u7b97\u5f15\u64ce",level:2},{value:"\u6267\u884c\u8ba1\u5212",id:"\u6267\u884c\u8ba1\u5212",level:3},{value:"\u8c03\u5ea6\u6a21\u578b",id:"\u8c03\u5ea6\u6a21\u578b",level:3},{value:"Runtime\u6267\u884c",id:"runtime\u6267\u884c",level:3},{value:"\u6574\u4f53\u4ecb\u7ecd",id:"\u6574\u4f53\u4ecb\u7ecd",level:4},{value:"Command Event",id:"command-event",level:4},{value:"\u5bb9\u9519\u548c\u5f02\u5e38\u6062\u590d",id:"\u5bb9\u9519\u548c\u5f02\u5e38\u6062\u590d",level:3},{value:"\u96c6\u7fa4\u7ec4\u4ef6\u5bb9\u9519",id:"\u96c6\u7fa4\u7ec4\u4ef6\u5bb9\u9519",level:4},{value:"\u4f5c\u4e1a\u5f02\u5e38\u6062\u590d",id:"\u4f5c\u4e1a\u5f02\u5e38\u6062\u590d",level:4}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"framework\u539f\u7406\u4ecb\u7ecd",children:"Framework\u539f\u7406\u4ecb\u7ecd"})}),"\n",(0,i.jsx)(n.h2,{id:"\u67b6\u6784\u56fe",children:"\u67b6\u6784\u56fe"}),"\n",(0,i.jsx)(n.p,{children:"GeaFlow Framework\u7684\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"framework_arch",src:r(6232).A+"",width:"2236",height:"674"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u9ad8\u9636API"}),"\uff1aGeaFlow\u901a\u8fc7Environment\u63a5\u53e3\u9002\u914d\u5f02\u6784\u7684\u5206\u5e03\u5f0f\u6267\u884c\u73af\u5883\uff08K8S\u3001Ray\u3001Local\uff09\uff0c\u4f7f\u7528Pipeline\u5c01\u88c5\u4e86\u7528\u6237\u7684\u6570\u636e\u5904\u7406\u6d41\u7a0b\uff0c\u4f7f\u7528Window\u62bd\u8c61\u7edf\u4e00\u4e86\u6d41\u5904\u7406\uff08\u65e0\u754cWindow\uff09\u548c\u6279\u5904\u7406\uff08\u6709\u754cWindow\uff09\u3002Graph\u63a5\u53e3\u63d0\u4f9b\u4e86\u9759\u6001\u56fe\u548c\u52a8\u6001\u56fe\uff08\u6d41\u56fe\uff09\u4e0a\u7684\u8ba1\u7b97API\uff0c\u5982append/snapshot/compute/traversal\u7b49\uff0cStream\u63a5\u53e3\u63d0\u4f9b\u4e86\u7edf\u4e00\u6d41\u6279\u5904\u7406API\uff0c\u5982map/reduce/join/keyBy\u7b49\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u903b\u8f91\u6267\u884c\u8ba1\u5212"}),"\uff1a\u903b\u8f91\u6267\u884c\u8ba1\u5212\u4fe1\u606f\u7edf\u4e00\u5c01\u88c5\u5728PipelineGraph\u5bf9\u8c61\u5185\uff0c\u5c06\u9ad8\u9636API\u5bf9\u5e94\u7684\u7b97\u5b50\uff08Operator\uff09\u7ec4\u7ec7\u5728DAG\u4e2d\uff0c\u7b97\u5b50\u4e00\u5171\u5206\u4e3a5\u5927\u7c7b\uff1aSourceOperator\u5bf9\u5e94\u6570\u636e\u6e90\u52a0\u8f7d\u3001OneInputOperator/TwoInputOperator\u5bf9\u5e94\u4f20\u7edf\u7684\u6570\u636e\u5904\u7406\u3001IteratorOperator\u5bf9\u5e94\u9759\u6001/\u52a8\u6001\u56fe\u8ba1\u7b97\u3002DAG\u4e2d\u7684\u70b9\uff08PipelineVertex\uff09\u8bb0\u5f55\u4e86\u7b97\u5b50\uff08Operator\uff09\u7684\u5173\u952e\u4fe1\u606f\uff0c\u5982\u7c7b\u578b\u3001\u5e76\u53d1\u5ea6\u3001\u7b97\u5b50\u51fd\u6570\u7b49\u4fe1\u606f\uff0c\u8fb9\uff08PipelineEdge\uff09\u5219\u8bb0\u5f55\u4e86\u6570\u636eshuffle\u7684\u5173\u952e\u4fe1\u606f\uff0c\u5982Partition\u89c4\u5219\uff08forward/broadcast/key\u7b49\uff09\u3001\u7f16\u89e3\u7801\u5668\u7b49\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7269\u7406\u6267\u884c\u8ba1\u5212"}),"\uff1a\u7269\u7406\u6267\u884c\u8ba1\u5212\u4fe1\u606f\u7edf\u4e00\u5c01\u88c5\u5728ExecutionGraph\u5bf9\u8c61\u5185\uff0c\u5e76\u652f\u6301\u4e8c\u7ea7\u5d4c\u5957\u7ed3\u6784\uff0c\u4ee5\u5c3d\u53ef\u80fd\u5c06\u53ef\u4ee5\u6d41\u6c34\u7ebf\u6267\u884c\u7684\u5b50\u56fe\uff08ExecutionVertexGroup\uff09\u7ed3\u6784\u7edf\u4e00\u8c03\u5ea6\u3002\u56fe\u4e2d\u793a\u4f8b\u7684\u7269\u7406\u6267\u884c\u8ba1\u5212DAG\u88ab\u5212\u5206\u4e3a\u4e09\u90e8\u5206\u5b50\u56fe\u7ed3\u6784\u5206\u522b\u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8c03\u5ea6\u5668"}),"\uff1aGeaFlow\u8bbe\u8ba1\u4e86\u57fa\u4e8eCycle\u7684\u8c03\u5ea6\u5668\uff08CycleScheduler\uff09\u5b9e\u73b0\u5bf9\u6d41\u3001\u6279\u3001\u56fe\u7684\u7edf\u4e00\u8c03\u5ea6\uff0c\u8c03\u5ea6\u8fc7\u7a0b\u901a\u8fc7\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u89e6\u53d1\u3002\u7269\u7406\u6267\u884c\u8ba1\u5212\u4e2d\u7684\u6bcf\u90e8\u5206\u5b50\u56fe\u90fd\u4f1a\u88ab\u8f6c\u6362\u4e3a\u4e00\u4e2aExecutionCycle\u5bf9\u8c61\uff0c\u8c03\u5ea6\u5668\u4f1a\u5411Cycle\u7684\u5934\u7ed3\u70b9\uff08Head\uff09\u53d1\u9001Event\uff0c\u5e76\u63a5\u6536Cycle\u5c3e\u7ed3\u70b9\uff08Tail\uff09\u7684\u53d1\u56de\u7684Event\uff0c\u5f62\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u8c03\u5ea6\u95ed\u73af\u3002\u5bf9\u4e8e\u6d41\u5904\u7406\uff0c\u6bcf\u4e00\u8f6eCycle\u8c03\u5ea6\u4f1a\u5b8c\u6210\u4e00\u4e2aWindow\u7684\u6570\u636e\u7684\u5904\u7406\uff0c\u5e76\u4f1a\u4e00\u76f4\u4e0d\u505c\u5730\u6267\u884c\u4e0b\u53bb\u3002\u5bf9\u4e8e\u6279\u5904\u7406\uff0c\u6574\u4e2aCycle\u8c03\u5ea6\u4ec5\u6267\u884c\u4e00\u8f6e\u3002\u5bf9\u4e8e\u56fe\u5904\u7406\uff0c\u6bcf\u4e00\u8f6eCycle\u8c03\u5ea6\u4f1a\u5b8c\u6210\u4e00\u6b21\u56fe\u8ba1\u7b97\u8fed\u4ee3\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u7ec4\u4ef6"}),"\uff1aGeaFlow\u8fd0\u884c\u65f6\u4f1a\u62c9\u8d77Client\u3001Master\u3001Driver\u3001Container\u7ec4\u4ef6\u3002\u5f53Client\u63d0\u4ea4Pipeline\u7ed9Driver\u540e\uff0c\u4f1a\u89e6\u53d1\u6267\u884c\u8ba1\u5212\u6784\u5efa\u3001\u5206\u914dTask\uff08ResourceManagement\u63d0\u4f9b\u8d44\u6e90\uff09\u548c\u8c03\u5ea6\u3002\u6bcf\u4e2aContainer\u5185\u53ef\u4ee5\u8fd0\u884c\u591a\u4e2aWorker\u7ec4\u4ef6\uff0c\u4e0d\u540cWorker\u7ec4\u4ef6\u4e4b\u95f4\u901a\u8fc7Shuffle\u6a21\u5757\u4ea4\u6362\u6570\u636e\uff0c\u6240\u6709\u7684Worker\u90fd\u9700\u8981\u5b9a\u671f\u5411Master\u4e0a\u62a5\u5fc3\u8df3\uff08HeartbeatManagement\uff09\uff0c\u5e76\u5411\u65f6\u5e8f\u6570\u636e\u5e93\u4e0a\u62a5\u8fd0\u884c\u65f6\u6307\u6807\u4fe1\u606f\u3002\u53e6\u5916GeaFlow\u8fd0\u884c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u6545\u969c\u5bb9\u5fcd\u673a\u5236\uff08FailOver\uff09\uff0c\u4ee5\u4fbf\u5728\u5f02\u5e38/\u4e2d\u65ad\u540e\u80fd\u7ee7\u7eed\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8ba1\u7b97\u5f15\u64ce",children:"\u8ba1\u7b97\u5f15\u64ce"}),"\n",(0,i.jsx)(n.p,{children:"GeaFlow\u8ba1\u7b97\u5f15\u64ce\u6838\u5fc3\u6a21\u5757\u4e3b\u8981\u5305\u62ec\u6267\u884c\u8ba1\u5212\u751f\u6210\u548c\u4f18\u5316\u3001\u7edf\u4e00Cycle\u8c03\u5ea6\u4ee5\u53caWorker\u8fd0\u884c\u65f6\u6267\u884c\u3002\u4e0b\u9762\u5c31\u8fd9\u51e0\u4e2a\u6838\u5fc3\u6a21\u5757\u8fdb\u884c\u4ecb\u7ecd\u8bf4\u660e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6267\u884c\u8ba1\u5212",children:"\u6267\u884c\u8ba1\u5212"}),"\n",(0,i.jsx)(n.p,{children:"\u9488\u5bf9\u6d41\u56fe\u573a\u666f\u63d0\u4ea4\u7684PipelineTask\uff0c\u6784\u5efa\u7edf\u4e00\u7684\u6267\u884c\u8ba1\u5212\u6a21\u578b\uff0c\u5e76\u901a\u8fc7\u5c06\u4e0d\u540c\u7684\u6267\u884c\u6a21\u5f0f\uff0c\u4ee5group\u65b9\u5f0f\u805a\u5408\u5230\u4e00\u8d77\uff0c\u4e3a\u8c03\u5ea6\u63d0\u4f9b\u7edf\u4e00\u6267\u884c\u5355\u5143\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"PipelineGraph\n\u5c06\u7528\u6237api\u63d0\u4ea4\u7684PipeleTask\u6784\u5efa\u51faPipelineGraph: \u5c06\u7528\u6237api\u8f6c\u6362\u4e3a\u7b97\u5b50\u540e\u5bf9\u5e94\u4e00\u4e2avertex\uff0cveretx\u4e4b\u95f4\u7684\u6570\u636e\u4f9d\u8d56\u4ee5edge\u8868\u793a\u3002PipelineGraph\u53ea\u662f\u5c06api\u6784\u5efa\u4e3a\u7ed3\u6784\u5316\u7684\u903b\u8f91\u6267\u884c\u8ba1\u5212\uff0c\u6ca1\u6709\u7269\u7406\u6267\u884c\u7684\u8bed\u4e49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ExecutionGraph\n\u5c06PipelineGraph\u57fa\u4e8e\u4e0d\u540c\u7684\u8ba1\u7b97\u6a21\u578b\uff0c\u5c06\u4e00\u7ec4\u53ef\u91cd\u590d\u6267\u884c\u7684vertex\u805a\u5408\u5230\u4e00\u8d77\uff0c\u6784\u5efa\u5bf9\u5e94\u7684ExecutionGroup\uff0c\u6bcf\u4e2agroup\u8868\u793a\u53ef\u4ee5\u72ec\u7acb\u8c03\u5ea6\u6267\u884c\u7684\u5355\u5143\uff0c\u4e00\u4e2agroup\u53ef\u4ee5\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2avertex\u6784\u5efa\uff0c\u53ef\u4ee5\u770b\u505a\u4e00\u4e2a\u5c0f\u7684\u6267\u884c\u8ba1\u5212\uff0cgroup\u5185\u90e8\u6570\u636e\u4ee5pipeline\u6a21\u5f0f\u4ea4\u6362\uff0cgroup\u4e4b\u95f4\u6570\u636e\u4ee5batch\u6a21\u5f0f\u4ea4\u6362\u3002group\u63cf\u8ff0\u4e86\u5177\u4f53\u7684\u6267\u884c\u6a21\u5f0f\uff0c\u652f\u6301\u5d4c\u5957\uff0c\u53ef\u4ee5\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u4e5f\u53ef\u53ea\u6267\u884c\u591a\u6b21\uff0c\u53ef\u4ee5\u4e00\u6b21\u6267\u884c\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7a97\u53e3\u7684\u6570\u636e\u3002group\u5982\u4e0b\u56fe\u6240\u793a\u3002\nExecutionGroup\u6700\u7ec8\u4f1a\u8f6c\u6362\u4e3a\u8c03\u5ea6\u6267\u884c\u7684\u57fa\u672c\u5355\u5143cycle\u3002\n",(0,i.jsx)(n.img,{alt:"group.jpg",src:r(2724).A+"",width:"531",height:"862"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8c03\u5ea6\u6a21\u578b",children:"\u8c03\u5ea6\u6a21\u578b"}),"\n",(0,i.jsx)(n.p,{children:"\u8c03\u5ea6\u5c06\u57fa\u4e8eExecutionGraph\u5b9a\u4e49\u7684ExecutionGroup\u751f\u6210\u8c03\u5ea6\u57fa\u672c\u5355\u5143cycle\u3002cycle\u63cf\u8ff0\u4e3a\u53ef\u5faa\u73af\u6267\u884c\u7684\u57fa\u672c\u5355\u5143\uff0c\u5305\u542b\u8f93\u5165\uff0c\u4e2d\u95f4\u8ba1\u7b97\u548c\u6570\u636e\u4ea4\u6362\uff0c\u8f93\u51fa\u7684\u63cf\u8ff0\u3002\u8c03\u5ea6\u6267\u884c\u8fc7\u7a0b\u4e3b\u8981\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u6267\u884c\u8ba1\u5212\u5212\u5206\u4e3a\u4e00\u7ec4cycle\uff0ccycle\u4e0ecycle\u4e4b\u95f4\u5982\u679c\u6ca1\u6709\u6570\u636e\u4f9d\u8d56\uff0c\u53ef\u4ee5\u4e32\u884c\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5e76\u884c\u6267\u884c\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4f9d\u636ecycle\u8c03\u5ea6\u6570\u636e\u7b56\u7565\uff0c\u4f9d\u6b21\u8c03\u5ea6\u6267\u884ccycle\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u76f4\u5230\u6240\u6709cycle\u6267\u884c\u7ed3\u675f\uff0c\u8fd4\u56de\u8c03\u5ea6\u6267\u884c\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6bcf\u4e2acycle\u5305\u542b\u4e00\u7ec4\u53ef\u88ab\u6267\u884c\u7684ExecutionTask\uff0c\u6bcf\u4e2atask\u53ef\u4ee5\u88ab\u5206\u53d1\u5230\u8fdc\u7a0b\u6267\u884c\u3002\u4e00\u4e2acycle\u5185\u7684\u6240\u6709execution task\u53ef\u4ee5\u5206\u4e3a\u5982\u4e0b\uff1a\nhead task: cycle\u6570\u636e\u6d41\u7684\u8d77\u70b9\uff0c\u8c03\u5ea6\u5411head task\u53d1\u9001\u4e00\u8f6e\u6267\u884c\u7684event\uff0c\u7136\u540e\u4ecesource\uff0c\u6216\u8005\u4e0a\u4e00\u4e2acycle\u8f93\u51fa\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5904\u7406\u540e\u53d1\u9001\u7ed9\u4e0b\u6e38\ntail task: cycle\u6570\u636e\u6d41\u7684\u7ed3\u5c3e\uff0c\u5904\u7406\u5b8c\u6570\u636e\u540e\uff0c\u5411\u8c03\u5ea6\u53d1\u9001event\uff0c\u8868\u793a\u5b8c\u6210\u4e00\u8f6e\u8ba1\u7b97\u3002\n\u5176\u4f59\u975ehead/tail task: \u4e2d\u95f4\u6267\u884ctask\uff0c\u63a5\u6536\u4e0a\u6e38\u8f93\u5165\u6570\u636e\uff0c\u5904\u7406\u540e\u76f4\u63a5\u53d1\u9001\u7ed9\u4e0b\u6e38\u6267\u884c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["cycle\u8c03\u5ea6\u6267\u884c\u7684\u8fc7\u7a0b\uff0c\u5c31\u662f\u4e0d\u65ad\u53d1\u9001event\u7ed9head\uff0c\u5e76\u4ecetail\u6536\u5230\u8fd4\u56deevent\u7684\u8fc7\u7a0b\uff0c\u6574\u4e2a\u8fc7\u7a0b\u7c7b\u4f3c\u4e00\u4e2a\u201c\u5faa\u73af\u201d\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\u8c03\u5ea6\u6839\u636e\u4e0d\u540c\u7684cycle\u7c7b\u578b\uff0c\u521d\u59cb\u5316\u8c03\u5ea6\u72b6\u6001\uff0c\u8c03\u5ea6\u7684\u8fc7\u7a0b\u4e5f\u662f\u72b6\u6001\u53d8\u8fc1\u7684\u8fc7\u7a0b\uff0c\u6839\u636e\u6536\u5230\u7684event\uff0c\u51b3\u5b9a\u4e0b\u4e00\u8f6e\u8981\u53d1\u9001\u7ed9head\u7684event\u7c7b\u578b\u3002\n",(0,i.jsx)(n.img,{alt:"scheduler.jpg",src:r(9139).A+"",width:"850",height:"906"})]}),"\n",(0,i.jsx)(n.h3,{id:"runtime\u6267\u884c",children:"Runtime\u6267\u884c"}),"\n",(0,i.jsx)(n.h4,{id:"\u6574\u4f53\u4ecb\u7ecd",children:"\u6574\u4f53\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.p,{children:"Runtime\u6a21\u5757\u8d1f\u8d23GeaFlow\u6240\u6709\u6a21\u5f0f\u4efb\u52a1\uff08\u5305\u62ec\u6d41\u6279\u3001\u9759\u6001/\u52a8\u6001\u56fe\uff09\u7684\u5177\u4f53\u8ba1\u7b97\u548c\u6267\u884c\u3002\u5176\u6574\u4e2aworker\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Scheduler\u8c03\u5ea6\u5668\u8d1f\u8d23\u5c06\u5404\u79cd\u7c7b\u578b\u7684Event\u53d1\u9001\u7ed9Container\u5904\u7406"}),"\n",(0,i.jsx)(n.li,{children:"Dispatcher(\u7ee7\u627f\u81f3AbstractTaskRunner)\u8d1f\u8d23\u63a5\u6536\u6765\u81eaScheduler\u53d1\u9001\u7684Event\uff0c\u7136\u540e\u5c06Event\u6309\u7167\u5176workerId\u5206\u53d1\u7ed9\u6307\u5b9a\u7684TaskRunner\u8fdb\u884c\u5904\u7406"}),"\n",(0,i.jsxs)(n.li,{children:["TaskRunner\uff08\u4e5f\u7ee7\u627f\u81f3AbstractTaskRunner\uff09\u8d1f\u8d23\u4ecetaskQueue\u4e2d\u83b7\u53d6TASK(Event)\uff0c\u5177\u4f53Event\u4e8b\u4ef6\u5c06\u4ea4\u7531Task\u8fdb\u884c\u5904\u7406\uff0c\u5176\u6574\u4e2a\u751f\u547d\u5468\u671f\u5305\u62ec\uff1a\u521b\u5efa\u3001\u5904\u7406\u53ca\u7ed3\u675f\uff0c\u5bf9\u4e8e\u5f02\u5e38\u7684Task\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e2d\u65ad\u3002\na. Task\u521b\u5efa\u548c\u521d\u59cb\u5316\u4f1a\u6839\u636eCreateTaskEvent\u4e8b\u4ef6\u6765\u5b8c\u6210\uff0cTask\u751f\u547d\u5468\u671f\u7ed3\u675f\u4f1a\u6839\u636eDestroyTaskEvent\u4e8b\u4ef6\u6765\u5b8c\u6210\u3002\nb. \u5176\u5b83\u7c7b\u578b\u7684Event\uff0c\u90fd\u5c06\u901a\u8fc7\u76f8\u5e94\u7684CommandEvent\u7684execute()\u6765\u5b8c\u6210\u5177\u4f53\u8ba1\u7b97\u8bed\u4e49\u5c42\u9762\u7684\u903b\u8f91\uff08\u4f8b\u5982\uff1a\u6839\u636eInitCycleEvent\u4e8b\u4ef6Worker\u5c06\u8fdb\u884c\u4e0a\u4e0b\u6e38\u4f9d\u8d56\u6784\u5efa\uff1b\u6839\u636eLaunchSourceEvent\u4e8b\u4ef6Worker\u5c06\u89e6\u53d1source\u5f00\u59cb\u8bfb\u6570\u636e\u7b49\uff09\n",(0,i.jsx)(n.img,{alt:"undefined",src:r(6772).A+"",width:"779",height:"772"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u524dTask\u4e2d\u7684TaskContext\u6838\u5fc3\u6570\u636e\u7ed3\u6784\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\u8d1f\u8d23\u6267\u884c\u8ba1\u7b97\u7684Worker\u3001\u8d1f\u8d23\u4e0b\u6e38\u8282\u70b9\u4ece\u4e0a\u6e38\u5f02\u6b65\u8bfb\u53d6\u6570\u636e\u7684FetchService\u4ee5\u53ca\u8d1f\u8d23\u5c06\u6267\u884cWorker\u4ea7\u751f\u7684\u6570\u636e\u5411\u4e0b\u6e38\u8f93\u51fa\u7684EmitterService\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Worker\uff1a\u5176\u4e3b\u8981\u8d1f\u8d23\u6d41\u56fe\u6570\u636e\u7684\u5bf9\u9f50\u5904\u7406\u4ee5\u53ca\u5c06\u6bcf\u6279\u5904\u7406\u7ed3\u675f\u540e\u76f8\u5e94\u7684DoneEvent callback\u56deScheduler\uff0cScheduler\u4f9d\u636e\u76f8\u5e94\u7684DoneEvent\u8fdb\u884c\u540e\u7eed\u7684\u8c03\u5ea6\u903b\u8f91\u3002"}),"\n",(0,i.jsx)(n.li,{children:"FetchService\uff1a\u8d1f\u8d23\u5f02\u6b65\u7684\u4ece\u4e0a\u6e38channel\u4e2dPull\u6570\u636e\uff0c\u5e76\u5c06\u5176\u901a\u8fc7worker\u6ce8\u518c\u7684Listener\uff0c\u5c06\u6570\u636e\u653e\u5165worker processing\u961f\u5217\u4e2d\u3002"}),"\n",(0,i.jsx)(n.li,{children:"EmitterService\uff1a\u8d1f\u8d23\u5c06Worker\u4ea7\u751f\u7684\u6570\u636e\u8fdb\u884cpartition\u5199\u5165\u5230\u5bf9\u5e94\u7684Channel\u4e2d\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"command-event",children:"Command Event"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Command Event\u5206\u4e3a\u4e24\u79cd\uff1a\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u666e\u901a\u7684Command Event\uff0c\u4e0d\u5e26\u5177\u4f53\u7684execute\u6267\u884c\u903b\u8f91\uff0c\u901a\u5e38\u7528\u4e8eTrigger Task\u6216Cycle\u8fdb\u884c\u751f\u547d\u5468\u671f\u7684\u5f00\u59cb\u548c\u7ed3\u675f\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u6267\u884c\u7684Command Event\uff0c\u81ea\u8eab\u5177\u5907execute\u6267\u884c\u903b\u8f91\uff0c\u4f8b\u5982\u7528\u4e8eCycle\u7684\u521d\u59cb\u5316\u3001Source\u8282\u70b9\u7684\u6570\u636e\u8bfb\u53d6\u3001\u5904\u7406\u8282\u70b9\u7684\u8ba1\u7b97\u3001Cycle\u7ed3\u675f\u540e\u7684\u6e05\u7406\u7b49\u7b49\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u8c03\u5ea6\u6a21\u5757\u4e2d\uff0c\u4f1a\u5c06\u5404\u79cd\u7c7b\u578b\u7684Event\u6784\u5efa\u6210\u4e00\u4e2aState Machine\uff0c\u7528\u4e8e\u6574\u4e2a\u8c03\u5ea6\u4efb\u52a1\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u8bbe\u8ba1\u9700\u8981\u6269\u5c55Event\u4ee5\u53ca\u5b9e\u73b0\u5bf9\u5e94\u7684execute\u8ba1\u7b97\u903b\u8f91\uff0c\u540c\u65f6\u52a0\u5165\u5230State Machine\u4e2d\uff0cScheduler\u5c31\u53ef\u4ee5\u81ea\u52a8\u5c06\u5176\u6309\u7167\u671f\u671b\u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u5ea6\u548c\u6267\u884c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5bb9\u9519\u548c\u5f02\u5e38\u6062\u590d",children:"\u5bb9\u9519\u548c\u5f02\u5e38\u6062\u590d"}),"\n",(0,i.jsx)(n.h4,{id:"\u96c6\u7fa4\u7ec4\u4ef6\u5bb9\u9519",children:"\u96c6\u7fa4\u7ec4\u4ef6\u5bb9\u9519"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u8fd0\u884c\u65f6\u7684\u6240\u6709\u7ec4\u4ef6\u8fdb\u7a0b\uff0c\u6bd4\u5982master/driver/container,\u90fd\u57fa\u4e8econtext\u521d\u59cb\u5316\u548c\u8fd0\u884c\u3002\u5728\u65b0\u521b\u5efa\u8fdb\u7a0b\u65f6\uff0c\u9996\u5148\u6784\u5efa\u8fdb\u7a0b\u9700\u8981\u7684context\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u5728\u521d\u59cb\u5316\u65f6\u5c06context\u505a\u6301\u4e45\u5316\u3002\u5f53\u8fdb\u7a0b\u5f02\u5e38\u91cd\u542f\u540e\uff0c\u9996\u5148\u6062\u590dcontext\uff0c\u7136\u540e\u57fa\u4e8econtext\u91cd\u65b0\u521d\u59cb\u5316\u8fdb\u7a0b\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4f5c\u4e1a\u5f02\u5e38\u6062\u590d",children:"\u4f5c\u4e1a\u5f02\u5e38\u6062\u590d"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"undefined",src:r(9614).A+"",width:"955",height:"817"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f5c\u4e1a\u5206\u5e03\u5f0f\u5feb\u7167\n\u8c03\u5ea6\u5668\u6839\u636e\u5f53\u524d\u81ea\u8eab\u8c03\u5ea6\u72b6\u6001\uff0c\u786e\u5b9a\u5bf9\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\u53d1\u9001\u65b0\u7684windowId\uff0c\u89e6\u53d1\u5bf9\u65b0\u7a97\u53e3\u7684\u8ba1\u7b97\u3002\u5f53\u6bcf\u4e2a\u7b97\u5b50\u5bf9\u5e94\u7a97\u53e3\u8ba1\u7b97\u7ed3\u675f\u540e\uff0c\u5982\u679c\u9700\u8981\u5bf9\u5f53\u524d\u7a97\u53e3\u4e0a\u4e0b\u6587\u505a\u5feb\u7167\uff0c\u5219\u5c06\u7b97\u5b50\u5185\u5bf9\u5e94\u72b6\u6001\u6301\u4e45\u5316\u5230\u5b58\u50a8\u4e2d\u3002\n\u6700\u7ec8\u8c03\u5ea6\u5668\u6536\u5230\u67d0\u4e2a\u7a97\u53e3\u7684\u6240\u6709\u4efb\u52a1\u6267\u884c\u7ed3\u675f\u7684\u6d88\u606f\u540e\uff0c\u4e5f\u4f1a\u6309\u9700\u8981\u5bf9\u8be5\u8c03\u5ea6\u5143\u4fe1\u606f\u505a\u4e00\u6b21\u5feb\u7167\u5e76\u6301\u4e45\u5316\uff0c\u624d\u6807\u5fd7\u8fd9\u4e2a\u7a97\u53e3\u7684\u5904\u7406\u6700\u7ec8\u6210\u3002\u5f53\u8c03\u5ea6\u548c\u7b97\u5b50\u6062\u590d\u5230\u8fd9\u4e2a\u7a97\u53e3\u4e0a\u4e0b\u6587\u65f6\uff0c\u5219\u53ef\u4ee5\u57fa\u4e8e\u8be5\u7a97\u53e3\u7ee7\u7eed\u6267\u884c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5feb\u7167\u6301\u4e45\u5316\n\u5728\u4e00\u4e2awindow\u8ba1\u7b97\u5b8c\u6210\u505a\u4e00\u6b21\u5feb\u7167\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u5feb\u7167\u5b58\u50a8\u7684\u65b9\u5f0f\u3002\u76ee\u524d\u53ef\u9009MEMORY\uff0cROCKSDB, JDBC\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u72b6\u6001\u6062\u590d\n\u5feb\u7167\u5b58\u50a8\u662f\u5206\u5e03\u5f0f\u7684\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\uff0c\u8c03\u5ea6\u548c\u7b97\u5b50\u4e4b\u95f4\u5404\u81ea\u5b58\u50a8\u5e76\u6301\u4e45\u5316\u3002\u5728\u6062\u590d\u65f6\uff0c\u9996\u5148\u8c03\u5ea6\u5148\u4ece\u5b58\u50a8\u4e2d\u6062\u590d\u4e0a\u4e00\u6b21\u5b8c\u6210\u6267\u884c\u7684windowId\uff0c\u5e76\u8c03\u5ea6\u7684\u4e0a\u4e0b\u6587\u6062\u590d\u5230\u5bf9\u5e94windowId\u5bf9\u5e94\u7684\u5feb\u7167\u3002\u7136\u540e\u5bf9\u6240\u6709worker\u53d1\u9001rollback\u6307\u4ee4\uff0c\u6bcf\u4e2aworker\u6062\u590d\u5230\u6307\u5b9a\u7a97\u53e3\u4e0a\u4e0b\u6587\u3002\u6700\u540e\u7531\u8c03\u5ea6\u5f00\u59cb\u7ee7\u7eed\u53d1\u9001\u6267\u884c\u4efb\u52a1\uff0c\u4ece\u6062\u590d\u72b6\u6001\u57fa\u7840\u4e0a\u7ee7\u7eed\u6267\u884c\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6232:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/framework_arch_new-b50a6933a6a3c01de60ba7cc4e848c9f.png"},9139:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/framework_cyle-39d7a5210e7f041319d7da93a263c84f.jpeg"},2724:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/framework_dag-79bc6c714140a269c92391ae58ab3c8e.jpeg"},9614:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/framework_failover-2d70f7410d0ce11cbd020578d308d037.jpeg"},6772:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/framework_scheduler-49a78ec34bdc932f5db2e0868a5a88a0.png"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(6540);const c={},t=i.createContext(c);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);