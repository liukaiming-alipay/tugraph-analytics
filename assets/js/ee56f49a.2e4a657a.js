"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7704],{2663:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=e(4848),s=e(8453);const r={},l="UDTF Introduction",a={id:"application-development/dsl/udf/udtf",title:"UDTF Introduction",description:"The UDTF (User Defined Table Function) expand the input to multi-line rows.",source:"@site/docs/docs-en/application-development/dsl/udf/udtf.md",sourceDirName:"application-development/dsl/udf",slug:"/application-development/dsl/udf/udtf",permalink:"/tugraph-analytics/en/application-development/dsl/udf/udtf",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UDGA Introduction",permalink:"/tugraph-analytics/en/application-development/dsl/udf/udga"},next:{title:"Install Guide",permalink:"/tugraph-analytics/en/deploy/install_guide"}},o={},c=[];function d(n){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"udtf-introduction",children:"UDTF Introduction"})}),"\n",(0,i.jsx)(t.p,{children:"The UDTF (User Defined Table Function) expand the input to multi-line rows."}),"\n",(0,i.jsx)(t.h1,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public abstract class UserDefinedFunction implements Serializable {\n\n   /**\n     * Init method for the user defined function.\n     */\n    public void open(FunctionContext context) {\n    }\n\n    /**\n     * Close method for the user defined function.\n     */\n    public void close() {\n    }\n}\n\npublic abstract class UDTF extends UserDefinedFunction {\n\n    protected List<Object[]> collector;\n\n    public UDTF() {\n        this.collector = Lists.newArrayList();\n    }\n\t\n\t/**\n     * Collect the result.\n     */\n    protected void collect(Object[] output) {\n        \n    }\n\t\n\t/**\n     * Returns type output types for the function.\n     * @param paramTypes The parameter types of the function.\n     * @param outFieldNames The output fields of the function in the sql.\n     */\n    public abstract List<Class<?>> getReturnType(List<Class<?>> paramTypes, \n\t\t\t\t\t\t\t\t\t\t\t\t List<String> outFieldNames);\n}\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Each UDTF should have one or more ",(0,i.jsx)(t.strong,{children:"eval"})," method."]}),"\n",(0,i.jsx)(t.h1,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'public class Split extends UDTF {\n\n    private String splitChar = ",";\n\n    public void eval(String text) {\n        evalInternal(text);\n    }\n\n    public void eval(String text, String separator) {\n        evalInternal(text, separator);\n    }\n\n    private void evalInternal(String... args) {\n        if (args != null && (args.length == 1 || args.length == 2)) {\n            if (args.length == 2 && StringUtils.isNotEmpty(args[1])) {\n                splitChar = args[1];\n            }\n            String[] lines = StringUtils.split(args[0], splitChar);\n            for (String line : lines) {\n                collect(new Object[]{line});\n            }\n        }\n    }\n\n    @Override\n    public List<Class<?>> getReturnType(List<Class<?>> paramTypes, \n\t\t\t\t\t\t\t\t\t\tList<String> outputFields) {\n        return Collections.singletonList(String.class);\n    }\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE Function my_split AS 'com.antgroup.geaflow.dsl.udf.Split';\n\nSELECT t.id, u.name FROM users u, LATERAL table(my_split(u.ids)) as t(id);\n"})})]})}function u(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>l,x:()=>a});var i=e(6540);const s={},r=i.createContext(s);function l(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);