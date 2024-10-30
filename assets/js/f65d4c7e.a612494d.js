"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1927],{8401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(4848),a=t(8453);const o={},s="UDGA\u4ecb\u7ecd",i={id:"application-development/dsl/udf/udga",title:"UDGA\u4ecb\u7ecd",description:"UDGA\uff08User Define Graph Algorithm\uff09\u5b9a\u4e49\u4e86\u4e00\u4e2a\u56fe\u7b97\u6cd5\uff0c\u4f8b\u5982SSSP\uff08\u5355\u6e90\u6700\u77ed\u8def\u5f84\uff09\u548cPageRank\u7b97\u6cd5\u3002",source:"@site/docs/docs-cn/application-development/dsl/udf/udga.md",sourceDirName:"application-development/dsl/udf",slug:"/application-development/dsl/udf/udga",permalink:"/tugraph-analytics/zh/application-development/dsl/udf/udga",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UDF\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/dsl/udf/"},next:{title:"UDTF\u4ecb\u7ecd",permalink:"/tugraph-analytics/zh/application-development/dsl/udf/udtf"}},u={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"udga\u4ecb\u7ecd",children:"UDGA\u4ecb\u7ecd"})}),"\n",(0,r.jsx)(n.p,{children:"UDGA\uff08User Define Graph Algorithm\uff09\u5b9a\u4e49\u4e86\u4e00\u4e2a\u56fe\u7b97\u6cd5\uff0c\u4f8b\u5982SSSP\uff08\u5355\u6e90\u6700\u77ed\u8def\u5f84\uff09\u548cPageRank\u7b97\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h1,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n * Interface for the User Defined Graph Algorithm.\n * @param <K> The id type for vertex.\n * @param <M> The message type for message send between vertices.\n */\npublic interface AlgorithmUserFunction<K, M> extends Serializable {\n\n    /**\n     * Init method for the function\n     * @param context The runtime context.\n     * @param params  The parameters for the function.\n     */\n    void init(AlgorithmRuntimeContext<K, M> context, Object[] params);\n\n    /**\n     * Processing method for each vertex and the messages it received.\n     */\n    void process(RowVertex vertex, Iterator<M> messages);\n\n    /**\n     * Returns the output type for the function.\n     */\n    StructType getOutputType();\n}\n\n"})}),"\n",(0,r.jsx)(n.h1,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class PageRank implements AlgorithmUserFunction {\n\n    private AlgorithmRuntimeContext context;\n    private double alpha = 0.85;\n    private double convergence = 0.01;\n    private int iteration = 20;\n\n    @Override\n    public void init(AlgorithmRuntimeContext context, Object[] parameters) {\n        this.context = context;\n        if (parameters.length > 3) {\n            throw new IllegalArgumentException(\n                "Only support zero or more arguments, false arguments "\n                    + "usage: func([alpha, [convergence, [max_iteration]]])");\n        }\n        if (parameters.length > 0) {\n            alpha = Double.parseDouble(String.valueOf(parameters[0]));\n        }\n        if (parameters.length > 1) {\n            convergence = Double.parseDouble(String.valueOf(parameters[1]));\n        }\n        if (parameters.length > 2) {\n            iteration = Integer.parseInt(String.valueOf(parameters[2]));\n        }\n    }\n\n    @Override\n    public void process(RowVertex vertex, Iterator messages) {\n        List<RowEdge> outEdges = new ArrayList<>(context.loadEdges(EdgeDirection.OUT));\n        outEdges.addAll(context.loadEdges(EdgeDirection.BOTH));\n        if (context.getCurrentIterationId() == 1L) {\n            double initValue = 1.0;\n            sendMessageToNeighbors(outEdges, 1.0 / outEdges.size());\n            sendMessageToNeighbors(outEdges, -1.0);\n            context.updateVertexValue(ObjectRow.create(initValue));\n        } else if (context.getCurrentIterationId() <= iteration) {\n            double sum = 0.0;\n            while (messages.hasNext()) {\n                double input = (double) messages.next();\n                input = input > 0 ? input : 0.0;\n                sum += input;\n            }\n            double pr = (1 - alpha) + (sum * alpha);\n            double currentPr = (double) vertex.getValue().getField(0, \n\t\t\t\t\t\t\t\tDoubleType.INSTANCE);\n            if (Math.abs(currentPr - pr) > convergence) {\n                sendMessageToNeighbors(outEdges, pr / outEdges.size());\n            }\n            sendMessageToNeighbors(outEdges, -1.0);\n            context.updateVertexValue(ObjectRow.create(pr));\n        } else {\n            double currentPr = (double) vertex.getValue().getField(0, \n\t\t\t\t\t\t\t\tDoubleType.INSTANCE);\n            context.take(ObjectRow.create(vertex.getId(), currentPr));\n            return;\n        }\n    }\n\n    @Override\n    public StructType getOutputType() {\n        return new StructType(\n            new TableField("id", LongType.INSTANCE, false),\n            new TableField("pr", DoubleType.INSTANCE, false)\n        );\n    }\n\n    private void sendMessageToNeighbors(List<RowEdge> outEdges, Object message) {\n        for (RowEdge rowEdge : outEdges) {\n            context.sendMessage(rowEdge.getTargetId(), message);\n        }\n    }\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE Function my_page_rank AS 'com.antgroup.geaflow.dsl.udf.graph.PageRank';\n\nINSERT INTO tbl_result\nCALL my_page_rank(1) YIELD (vid, prValue)\nRETURN vid, ROUND(prValue, 2)\n;\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);