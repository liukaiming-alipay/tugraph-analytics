"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6291],{7646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(4848),r=t(8453);const s={},o="Sink Introduction",l={id:"application-development/api/stream/sink",title:"Sink Introduction",description:"GeaFlow provides Sink API to the public, used to build Window Sink. Users can define specific output logic by implementing SinkFunction.",source:"@site/docs/docs-en/source/5.application-development/1.api/2.stream/3.sink.md",sourceDirName:"5.application-development/1.api/2.stream",slug:"/application-development/api/stream/sink",permalink:"/tugraph-analytics/en/application-development/api/stream/sink",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Process Introduction",permalink:"/tugraph-analytics/en/application-development/api/stream/process"},next:{title:"Graph Traversal Introduction",permalink:"/tugraph-analytics/en/application-development/api/graph/traversal"}},a={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",t:"t",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sink-introduction",children:"Sink Introduction"})}),"\n",(0,i.jsx)(n.p,{children:"GeaFlow provides Sink API to the public, used to build Window Sink. Users can define specific output logic by implementing SinkFunction."}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"API"}),(0,i.jsx)(n.th,{children:"Interface Description"}),(0,i.jsx)(n.th,{children:"Input Parameter Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["PStreamSink",(0,i.jsxs)(n.t,{children:[" sink(SinkFunction",(0,i.jsx)(n.t,{children:" sinkFunction)"})]})]}),(0,i.jsx)(n.td,{children:"Output the result"}),(0,i.jsx)(n.td,{children:"SinkFunction: Users can define their respective output semantics by implementing the SinkFunction interface. GeaFlow has integrated several sink functions internally, such as Console, File, etc."})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sink Usage"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\t// Print the results directly to the console.\n\tsource.sink(v -> {LOGGER.info("result: {}", v)});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class WindowStreamWordCount {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(WindowStreamWordCount.class);\n\n    public static void main(String[] args) {\n        Environment environment = EnvironmentFactory.onLocalEnvironment();\n        Pipeline pipeline = PipelineFactory.buildPipeline(environment);\n        pipeline.submit(new PipelineTask() {\n            @Override\n            public void execute(IPipelineTaskContext pipelineTaskCxt) {\n                Configuration config = pipelineTaskCxt.getConfig();\n                List<String> words = Lists.newArrayList("hello", "world", "hello", "word");\n                PWindowSource<String> source = pipelineTaskCxt.buildSource(new CollectionSource<String>(words) {\n                }, SizeTumblingWindow.of(100));\n                // Print the results directly to the console.\n                source.sink(v -> {\n                    LOGGER.info("result: {}", v);\n                });\n            }\n        });\n\n        IPipelineResult result = pipeline.execute();\n        result.get();\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);