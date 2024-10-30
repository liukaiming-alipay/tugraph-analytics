"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7318],{664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(4848),s=n(8453);const i={},a="GeaFlow Console Platform",o={id:"principle/console_principle",title:"GeaFlow Console Platform",description:"GeaFlow Console provides a unified platform for graph development and operations, as well as metadata (Catalog) services for the engine runtime.",source:"@site/docs/docs-en/principle/console_principle.md",sourceDirName:"principle",slug:"/principle/console_principle",permalink:"/tugraph-analytics/en/principle/console_principle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Platform Architecture",id:"platform-architecture",level:3},{value:"Deployment Architecture",id:"deployment-architecture",level:2}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"geaflow-console-platform",children:"GeaFlow Console Platform"})}),"\n",(0,r.jsx)(t.p,{children:"GeaFlow Console provides a unified platform for graph development and operations, as well as metadata (Catalog) services for the engine runtime."}),"\n",(0,r.jsx)(t.h3,{id:"platform-architecture",children:"Platform Architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"console_arch",src:n(3940).A+"",width:"1036",height:"1666"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RESTful API"}),": The platform provides standardized RESTful APIs and authentication mechanisms, supporting unified API services for web and application clients."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Job Development"}),': The platform supports graph data modeling based on the "Relationship-Entity-Attribute" paradigm. Based on field mapping configurations, users can define graph data integration (Import) and distribution (Export) tasks. Graph data processing tasks based on graph models support diverse computational scenarios, such as Traversal, Compute, Mining, etc. Graph data services based on data accelerators provide real-time analysis capabilities supporting multiple protocols and integration with BI and visualization analysis tools.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Build & Submit"}),": The platform separates the development state from the operational state through the independent abstraction of jobs and tasks. After development, jobs can be published, triggering the build pipeline (Release Builder) to generate a release version. The task submitter (Task Submitter) is responsible for submitting the contents of the release version to the execution environment to generate a computational task."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Task Operations"}),": Tasks are the runtime state of jobs. The platform provides operational capabilities for task manipulation (start/stop/reset), monitoring (metrics/alerts/auditing), optimization (diagnostics/scalability/tuning), and scheduling. Task runtime resources are allocated and managed by the resource pool."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Metadata Services"}),": The platform also hosts metadata services for the engine runtime, enabling automation for development and operations. Metadata is segregated based on instances, and development resources within an instance can be accessed directly by name, such as vertices, edges, graphs, tables, views, functions, etc."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"System Management"}),": The platform provides multi-tenant isolation, fine-grained user permission control, and system resource management capabilities."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"deployment-architecture",children:"Deployment Architecture"}),"\n",(0,r.jsx)(t.p,{children:"GeaFlow supports execution in various heterogeneous environments. Taking the common K8S deployment environment as an example, the physical deployment architecture of GeaFlow is as follows:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"deploy_arch",src:n(6692).A+"",width:"3546",height:"1522"})}),"\n",(0,r.jsx)(t.p,{children:"During the full lifecycle of a GeaFlow task, there are several key phases:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Development Phase"}),": The Console platform manages all development resources within an instance. Before creating a task, users can prepare the required development resource information in advance and store it in the Catalog."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Build Phase"}),": After the job is created, the build pipeline is triggered by the publish action. The user's JAR files, task's ZIP package, etc., are uploaded to the RemoteFileStore."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Submission Phase"}),": When a job is submitted, the Console creates a KubernetesJobClient based on the job's parameter configuration, runtime environment information, and remote file addresses. This client pod will bring up the master pod, container pods, and driver pod. After all pods are up and running, the client sends the pipeline to the driver for execution. The driver interacts with the containers through cycle scheduling events. When starting, each pod downloads the version JAR file, user JAR file, job ZIP package, etc., from the RemoteFileStore. When compiling DSL code, the driver also uses the Catalog API provided by the Console to operate on schema information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Runtime Phase"}),": During task execution, various components report different data and information. The master reports heartbeat summary information for the task, the driver reports pipeline/cycle metrics and error information, and the containers report offsets, metric definitions, and error information. The RuntimeMetaStore stores pipeline/cycle metrics, offsets, heartbeat summaries, errors, etc., for the task. The HAMetaStore stores address information for various runtime components. The DataStore stores state data and metadata required for task failover. The MetricStore stores runtime metric information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Monitoring Phase"}),": The Console primarily queries information stored in the RuntimeMetaStore and MetricStore for runtime monitoring of the task."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Cleanup Phase"}),": When a task is reset/deleted, the Console performs cleanup operations on the task's runtime metadata, HAMetaStore, and some data."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3940:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/console_arch-340a66480113508cbaec677d96e950d1.png"},6692:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/deploy_arch-6111c37880f9c8674ce2ef32b5a4a8ed.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);