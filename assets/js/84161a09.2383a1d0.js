"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7697],{7196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(4848),i=t(8453);const a={},l="Compute API\u4ecb\u7ecd",o={id:"application-development/api/graph/compute",title:"Compute API\u4ecb\u7ecd",description:"GeaFlow\u5bf9\u5916\u63d0\u4f9b\u4e86\u5b9e\u73b0\u56fe\u8ba1\u7b97\u7b97\u6cd5\u7684\u63a5\u53e3\uff0c\u901a\u8fc7\u5b9e\u73b0\u76f8\u5e94\u63a5\u53e3\u53ef\u8fdb\u884c\u9759\u6001\u56fe\u8ba1\u7b97\u6216\u52a8\u6001\u56fe\u8ba1\u7b97\uff0c\u7528\u6237\u53ef\u5728compute\u7b97\u6cd5\u4e2d\u5b9a\u4e49\u5177\u4f53\u7684\u8ba1\u7b97\u903b\u8f91\u53ca\u8fed\u4ee3\u6700\u5927\u6b21\u6570\u3002",source:"@site/docs/docs-cn/source/5.application-development/1.api/3.graph/2.compute.md",sourceDirName:"5.application-development/1.api/3.graph",slug:"/application-development/api/graph/compute",permalink:"/tugraph-analytics/zh/application-development/api/graph/compute",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traversal API\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/api/graph/traversal"},next:{title:"\u7b80\u4ecb",permalink:"/tugraph-analytics/zh/application-development/dsl/overview"}},s={},d=[{value:"\u52a8\u6001\u56fe",id:"\u52a8\u6001\u56fe",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u9759\u6001\u56fe",id:"\u9759\u6001\u56fe",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"compute-api\u4ecb\u7ecd",children:"Compute API\u4ecb\u7ecd"})}),"\n",(0,r.jsx)(n.p,{children:"GeaFlow\u5bf9\u5916\u63d0\u4f9b\u4e86\u5b9e\u73b0\u56fe\u8ba1\u7b97\u7b97\u6cd5\u7684\u63a5\u53e3\uff0c\u901a\u8fc7\u5b9e\u73b0\u76f8\u5e94\u63a5\u53e3\u53ef\u8fdb\u884c\u9759\u6001\u56fe\u8ba1\u7b97\u6216\u52a8\u6001\u56fe\u8ba1\u7b97\uff0c\u7528\u6237\u53ef\u5728compute\u7b97\u6cd5\u4e2d\u5b9a\u4e49\u5177\u4f53\u7684\u8ba1\u7b97\u903b\u8f91\u53ca\u8fed\u4ee3\u6700\u5927\u6b21\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u52a8\u6001\u56fe",children:"\u52a8\u6001\u56fe"}),"\n",(0,r.jsx)(n.h3,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"API"}),(0,r.jsx)(n.th,{children:"\u63a5\u53e3\u8bf4\u660e"}),(0,r.jsx)(n.th,{children:"\u5165\u53c2\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void init(IncGraphComputeContext<K, VV, EV, M> incGraphContext)"}),(0,r.jsx)(n.td,{children:"\u56fe\u8ba1\u7b97\u521d\u59cb\u5316\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"incGraphContext\uff1a \u589e\u91cf\u52a8\u6001\u56fe\u8ba1\u7b97\u7684\u4e0a\u4e0b\u6587\uff0cK\u8868\u793avertex id\u7684\u7c7b\u578b\uff0cVV\u8868\u793avertex value\u7c7b\u578b\uff0cEV\u8868\u793aedge value\u7c7b\u578b\uff0cM\u8868\u793a\u53d1\u9001\u6d88\u606f\u7684\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void evolve(K vertexId, TemporaryGraph<K, VV, EV> temporaryGraph)"}),(0,r.jsx)(n.td,{children:"\u9996\u8f6e\u8fed\u4ee3\u5bf9\u589e\u91cf\u56fe\u5b9e\u73b0\u5904\u7406\u903b\u8f91"}),(0,r.jsxs)(n.td,{children:["vertexId\uff1a\u5f53\u524d\u8ba1\u7b97\u70b9\u7684id\uff0c\u5176\u4e2dK\u8868\u793avertex id\u7684\u7c7b\u578b\u3002",(0,r.jsx)(n.br,{}),"temporaryGraph\uff1a\u4e34\u65f6\u589e\u91cf\u56fe\uff0c\u5176\u4e2dK\u8868\u793avertexId\u7684\u7c7b\u578b\uff0cVV\u8868\u793avertex value\u7c7b\u578b\uff0cEV\u8868\u793aedge value\u7c7b\u578b\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void compute(K vertexId, Iterator messageIterator)"}),(0,r.jsx)(n.td,{children:"\u8fed\u4ee3\u8ba1\u7b97\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"vertexId\uff1a\u5f53\u524d\u8ba1\u7b97\u70b9\u7684id\uff0c\u5176\u4e2dK\u8868\u793avertex id\u7684\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void finish(K vertexId, MutableGraph<K, VV, EV> mutableGraph)"}),(0,r.jsx)(n.td,{children:"\u8fed\u4ee3\u8ba1\u7b97\u5b8c\u6210\u63a5\u53e3"}),(0,r.jsxs)(n.td,{children:["vertexId\uff1a\u5f53\u524d\u8ba1\u7b97\u70b9\u7684id\uff0c\u5176\u4e2dK\u8868\u793avertex id\u7684\u7c7b\u578b\u3002",(0,r.jsx)(n.br,{}),"mutableGraph\uff1a\u53ef\u53d8\u56fe\uff0c\u5176\u4e2dK\u8868\u793avertexId\u7684\u7c7b\u578b\uff0cVV\u8868\u793avertex value\u7c7b\u578b\uff0cEV\u8868\u793aedge value\u7c7b\u578b"]})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8be6\u7ec6\u63a5\u53e3"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface IncVertexCentricFunction<K, VV, EV, M> extends Function {\n\n   void evolve(K vertexId, TemporaryGraph<K, VV, EV> temporaryGraph);\n\n   void compute(K vertexId, Iterator<M> messageIterator);\n\n   void finish(K vertexId, MutableGraph<K, VV, EV> mutableGraph);\n\n   interface IncGraphContext<K, VV, EV, M> {\n       /** \u83b7\u53d6job id */\n       long getJobId();\n\n        /** \u83b7\u53d6\u5f53\u524d\u8fed\u4ee3 id */\n        long getIterationId();\n        \n        /** \u83b7\u53d6\u8fd0\u884c\u65f6\u4e0a\u4e0b\u6587 */\n        RuntimeContext getRuntimeContext();\n\n        /** \u83b7\u53d6\u53ef\u53d8\u56fe */\n        MutableGraph<K, VV, EV> getMutableGraph();\n\n    \t/** \u83b7\u53d6\u589e\u91cf\u56fe */\n        TemporaryGraph<K, VV, EV> getTemporaryGraph();\n\n        /** \u83b7\u53d6\u56fe\u5b58\u50a8\u4e0a\u7684\u5386\u53f2\u56fe */\n        HistoricalGraph<K, VV, EV> getHistoricalGraph();\n\n        /** \u7ed9\u6307\u5b9avertex\u53d1\u9001\u6d88\u606f */\n        void sendMessage(K vertexId, M message);\n\n        /** \u7ed9\u5f53\u524dvertex\u90bb\u5c45\u8282\u70b9\u53d1\u9001\u6d88\u606f */\n        void sendMessageToNeighbors(M message);\n\n   }\n\n   interface TemporaryGraph<K, VV, EV> {\n   /** \u4ece\u589e\u91cf\u56fe\u4e2d\u83b7\u53d6vertex */\n   IVertex<K, VV> getVertex();\n\n        /** \u4ece\u589e\u91cf\u56fe\u4e2d\u83b7\u53d6edges */\n        List<IEdge<K, EV>> getEdges();\n\n        /** \u66f4\u65b0vertex value */\n        void updateVertexValue(VV value);\n\n   }\n\n   interface HistoricalGraph<K, VV, EV> {\n   /** \u83b7\u53d6\u56fe\u6570\u636e\u6700\u65b0\u7248\u672cid */\n   Long getLatestVersionId();\n\n        /** \u83b7\u53d6\u56fe\u6570\u636e\u6240\u6709\u7248\u672c */\n        List<Long> getAllVersionIds();\n\n        /** \u83b7\u53d6\u56fe\u6570\u636e\u6240\u6709vertex */\n        Map<Long, IVertex<K, VV>> getAllVertex();\n\n        /** \u83b7\u53d6\u56fe\u6570\u636e\u6307\u5b9a\u7248\u672c\u7684vertex */\n        Map<Long, IVertex<K, VV>> getAllVertex(List<Long> versions);\n\n        /** \u83b7\u53d6\u56fe\u6570\u636e\u6307\u5b9a\u7248\u672c\u5e76\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684vertex */\n        Map<Long, IVertex<K, VV>> getAllVertex(List<Long> versions, IVertexFilter<K, VV> vertexFilter);\n\n        /** \u83b7\u53d6\u56fe\u6570\u636e\u6307\u5b9a\u7248\u672c\u7684\u5feb\u7167 */\n        GraphSnapShot<K, VV, EV> getSnapShot(long version);\n\n   }\n\n   interface GraphSnapShot<K, VV, EV> {\n   /** \u83b7\u53d6\u5f53\u524d\u7248\u672cid */\n   long getVersion();\n   /** \u83b7\u53d6vertex */\n   VertexQuery<K, VV> vertex();\n   /** \u83b7\u53d6edges */\n   EdgeQuery<K, EV> edges();\n\n   }\n\n   interface MutableGraph<K, VV, EV> {\n   /** \u5411\u56fe\u4e2d\u6dfb\u52a0vertex\uff0c\u5e76\u6307\u5b9a\u5176\u7248\u672cid */\n   void addVertex(long version, IVertex<K, VV> vertex);\n   /** \u5411\u56fe\u4e2d\u6dfb\u52a0edge\uff0c\u5e76\u6307\u5b9a\u5176\u7248\u672cid */\n   void addEdge(long version, IEdge<K, EV> edge);\n\n   }\n\n\n}\n\npublic interface IncVertexCentricComputeFunction<K, VV, EV, M> extends\n        IncVertexCentricFunction<K, VV, EV, M> {\n\n    void init(IncGraphComputeContext<K, VV, EV, M> incGraphContext);\n\n    interface IncGraphComputeContext<K, VV, EV, M> extends IncGraphContext<K, VV, EV, M> {\n        void collect(IVertex<K, VV> vertex);\n    }\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class IncrGraphCompute {\n\n   private static final Logger LOGGER = LoggerFactory.getLogger(IncrGraphCompute.class);\n\n   public static void main(String[] args) {\n      Environment environment = EnvironmentFactory.onLocalEnvironment();\n      IPipelineResult result = submit(environment);\n      result.get();\n      environment.shutdown();\n   }\n\n   public static IPipelineResult<?> submit(Environment environment) {\n      final Pipeline pipeline = PipelineFactory.buildPipeline(environment);\n      final String graphName = "graph_view_name";\n      GraphViewDesc graphViewDesc = GraphViewBuilder.createGraphView(graphName)\n              .withShardNum(4)\n              .withBackend(BackendType.RocksDB)\n              .withSchema(new GraphMetaType(IntegerType.INSTANCE, ValueVertex.class, Integer.class, ValueEdge.class, IntegerType.class))\n              .build();\n      pipeline.withView(graphName, graphViewDesc);\n      pipeline.submit(new PipelineTask() {\n         @Override\n         public void execute(IPipelineTaskContext pipelineTaskCxt) {\n            Configuration conf = pipelineTaskCxt.getConfig();\n            PWindowSource<IVertex<Integer, Integer>> vertices =\n                    // extract vertex from edge file\n                    pipelineTaskCxt.buildSource(new RecoverableFileSource<>("data/input/email_edge",\n                            line -> {\n                               String[] fields = line.split(",");\n                               IVertex<Integer, Integer> vertex1 = new ValueVertex<>(\n                                       Integer.valueOf(fields[0]), 1);\n                               IVertex<Integer, Integer> vertex2 = new ValueVertex<>(\n                                       Integer.valueOf(fields[1]), 1);\n                               return Arrays.asList(vertex1, vertex2);\n                            }), SizeTumblingWindow.of(10000));\n\n            PWindowSource<IEdge<Integer, Integer>> edges =\n                    pipelineTaskCxt.buildSource( new RecoverableFileSource<>("data/input/email_edge",\n                            line -> {\n                               String[] fields = line.split(",");\n                               IEdge<Integer, Integer> edge = new ValueEdge<>(Integer.valueOf(fields[0]),\n                                       Integer.valueOf(fields[1]), 1);\n                               return Collections.singletonList(edge);\n                            }), SizeTumblingWindow.of(5000));\n\n            PGraphView<Integer, Integer, Integer> fundGraphView = pipelineTaskCxt.getGraphView(graphName);\n\n            PIncGraphView<Integer, Integer, Integer> incGraphView = fundGraphView.appendGraph(vertices, edges);\n            incGraphView.incrementalCompute(new IncGraphAlgorithms(3))\n                    .getVertices()\n                    .map(v -> String.format("%s,%s", v.getId(), v.getValue()))\n                    .sink(v -> {\n                       LOGGER.info("result: {}", v);\n                    });\n         }\n      });\n      return pipeline.execute();\n   }\n\n\n   public static class IncGraphAlgorithms extends IncVertexCentricCompute<Integer, Integer, Integer, Integer> {\n      public IncGraphAlgorithms(long iterations) {\n         super(iterations);\n      }\n\n      @Override\n      public IncVertexCentricComputeFunction<Integer, Integer, Integer, Integer> getIncComputeFunction() {\n         return new IncVertexCentricComputeFunction<Integer, Integer, Integer, Integer>() {\n            private IncGraphComputeContext<Integer, Integer, Integer, Integer> graphContext;\n\n            @Override\n            public void init(IncGraphComputeContext<Integer, Integer, Integer, Integer> graphContext) {\n               this.graphContext = graphContext;\n            }\n            @Override\n            public void evolve(Integer vertexId,\n                               TemporaryGraph<Integer, Integer, Integer> temporaryGraph) {\n               IVertex<Integer, Integer> vertex = temporaryGraph.getVertex();\n               if (vertex != null) {\n                  if (temporaryGraph.getEdges() != null) {\n                     for (IEdge<Integer, Integer> edge : temporaryGraph.getEdges()) {\n                        graphContext.sendMessage(edge.getTargetId(), vertexId);\n                     }\n                  }\n               }\n            }\n\n            @Override\n            public void compute(Integer vertexId, Iterator<Integer> messageIterator) {\n               int max = 0;\n               while (messageIterator.hasNext()) {\n                  int value = messageIterator.next();\n                  max = Math.max(max, value);\n               }\n               graphContext.getTemporaryGraph().updateVertexValue(max);\n            }\n\n            @Override\n            public void finish(Integer vertexId, MutableGraph<Integer, Integer, Integer> mutableGraph) {\n               IVertex<Integer, Integer> vertex = graphContext.getTemporaryGraph().getVertex();\n               graphContext.collect(vertex);\n            }\n         };\n      }\n      @Override\n      public VertexCentricCombineFunction<Integer> getCombineFunction() {\n         return null;\n      }\n\n   }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u9759\u6001\u56fe",children:"\u9759\u6001\u56fe"}),"\n",(0,r.jsx)(n.h3,{id:"\u63a5\u53e3-1",children:"\u63a5\u53e3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"API"}),(0,r.jsx)(n.th,{children:"\u63a5\u53e3\u8bf4\u660e"}),(0,r.jsx)(n.th,{children:"\u5165\u53c2\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void init(VertexCentricComputeFuncContext<K, VV, EV, M> vertexCentricFuncContext)"}),(0,r.jsx)(n.td,{children:"\u8fed\u4ee3\u8ba1\u7b97\u521d\u59cb\u5316\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"vertexCentricFuncContext\uff1a\u9759\u6001\u56fe\u8ba1\u7b97\u7684\u4e0a\u4e0b\u6587\uff0cK\u8868\u793avertex id\u7684\u7c7b\u578b\uff0cVV\u8868\u793avertex value\u7c7b\u578b\uff0cEV\u8868\u793aedge value\u7c7b\u578b\uff0cM\u8868\u793a\u53d1\u9001\u6d88\u606f\u7684\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void compute(K vertexId, Iterator messageIterator)"}),(0,r.jsx)(n.td,{children:"\u8fed\u4ee3\u8ba1\u7b97\u63a5\u53e3"}),(0,r.jsxs)(n.td,{children:["vertexId\uff1a\u5f53\u524d\u8ba1\u7b97\u70b9\u7684id\uff0c\u5176\u4e2dK\u8868\u793avertex id\u7684\u7c7b\u578b\u3002",(0,r.jsx)(n.br,{}),"messageIterator\uff1a\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\u6240\u6709\u53d1\u9001\u7ed9\u5f53\u524dvertex\u7684\u6d88\u606f\uff0c\u5176\u4e2dM\u8868\u793a\u8fed\u4ee3\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u5b9a\u4e49\u7684\u53d1\u9001\u6d88\u606f\u7c7b\u578b\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"void finish()"}),(0,r.jsx)(n.td,{children:"\u8fed\u4ee3\u8ba1\u7b97\u5b8c\u6210\u63a5\u53e3"}),(0,r.jsx)(n.td,{children:"\u65e0"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8be6\u7ec6\u63a5\u53e3"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface VertexCentricComputeFunction<K, VV, EV, M> extends VertexCentricFunction<K, VV,\nEV, M> {\n\n    void init(VertexCentricComputeFuncContext<K, VV, EV, M> vertexCentricFuncContext);\n\n    void compute(K vertex, Iterator<M> messageIterator);\n\n    void finish();\n\n    interface VertexCentricComputeFuncContext<K, VV, EV, M> extends VertexCentricFuncContext<K, VV,\n        EV, M> {\n    \t/** \u8bbe\u7f6evertex value */\n        void setNewVertexValue(VV value);\n\n    }\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class StaticsGraphCompute {\n    \n    public static void main(String[] args) {\n      \tEnvironment environment = EnvironmentFactory.onLocalEnvironment();\n        IPipelineResult result = submit(environment);\n        result.get();\n        environment.shutdown();\n    }\n\n    public static IPipelineResult<?> submit(Environment environment) {\n        Pipeline pipeline = PipelineFactory.buildPipeline(environment);\n\n        pipeline.submit((PipelineTask) pipelineTaskCxt -> {\n            PWindowSource<IVertex<Integer, Integer>> prVertices =\n                pipelineTaskCxt.buildSource(new FileSource<>("data/input/email_vertex",\n                    line -> {\n                        String[] fields = line.split(",");\n                        IVertex<Integer, Integer> vertex = new ValueVertex<>(\n                            Integer.valueOf(fields[0]), Integer.valueOf(fields[1]));\n                        return Collections.singletonList(vertex);\n                    }), AllWindow.getInstance())\n                    .withParallelism(2);\n\n            PWindowSource<IEdge<Integer, Integer>> prEdges = pipelineTaskCxt.buildSource(new FileSource<>(\n                "data/input/email_edge", line -> {\n                String[] fields = line.split(",");\n                IEdge<Integer, Integer> edge = new ValueEdge<>(Integer.valueOf(fields[0]), Integer.valueOf(fields[1]), 1);\n                return Collections.singletonList(edge);\n            }), AllWindow.getInstance()).withParallelism(2);\n\n            GraphViewDesc graphViewDesc = GraphViewBuilder\n                .createGraphView(GraphViewBuilder.DEFAULT_GRAPH)\n                .withShardNum(2)\n                .withBackend(BackendType.Memory)\n                .build();\n            \n            PGraphWindow<Integer, Integer, Integer> graphWindow =\n                pipelineTaskCxt.buildWindowStreamGraph(prVertices, prEdges, graphViewDesc);\n            graphWindow.compute(new SSSPAlgorithm(1, 10))\n                .compute(2)\n                .getVertices()\n                .sink(v -> {});\n        });\n        return pipeline.execute();\n    }\n    \n    public static class SSSPAlgorithm extends VertexCentricCompute<Integer, Integer, Integer, Integer> {\n\n        private final int srcId;\n        public SSSPAlgorithm(int srcId, long iterations) {\n            super(iterations);\n            this.srcId = srcId;\n        }\n\n        @Override\n        public VertexCentricComputeFunction<Integer, Integer, Integer, Integer> getComputeFunction() {\n            return new VertexCentricComputeFunction<Integer, Integer, Integer, Integer>() {\n                \n                private VertexCentricComputeFuncContext<Integer, Integer, Integer, Integer> context;\n                @Override\n                public void init(VertexCentricComputeFuncContext<Integer, Integer, Integer, Integer> vertexCentricFuncContext) {\n                    this.context = vertexCentricFuncContext;\n                }\n\n                @Override\n                public void compute(Integer vertex, Iterator<Integer> messageIterator) {\n                    int minDistance = vertex == srcId ? 0 : Integer.MAX_VALUE;\n                    if (messageIterator != null) {\n                        while (messageIterator.hasNext()) {\n                            Integer value = messageIterator.next();\n                            minDistance = Math.min(minDistance, value);\n                        }\n                    }\n                    IVertex<Integer, Integer> iVertex = this.context.vertex().get();\n                    if (minDistance < iVertex.getValue()) {\n                        this.context.setNewVertexValue(minDistance);\n                        for (IEdge<Integer, Integer> edge : this.context.edges().getOutEdges()) {\n                            this.context.sendMessage(edge.getTargetId(), minDistance + edge.getValue());\n                        }\n                    }\n                }\n                @Override\n                public void finish() {\n                    \n                }\n            };\n        }\n        @Override\n        public VertexCentricCombineFunction<Integer> getCombineFunction() {\n            return null;\n        }\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const i={},a=r.createContext(i);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);