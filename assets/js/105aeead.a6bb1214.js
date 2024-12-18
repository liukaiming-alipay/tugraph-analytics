"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6099],{3335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(4848),i=t(8453);const r={},s="UDF Introduction",o={id:"application-development/dsl/udf/udf",title:"UDF Introduction",description:"The UDF (User Defined Function) map scalar values to a scalar value.",source:"@site/../docs-en/source/5.application-development/2.dsl/4.udf/1.udf.md",sourceDirName:"5.application-development/2.dsl/4.udf",slug:"/application-development/dsl/udf/udf",permalink:"/tugraph-analytics/en/application-development/dsl/udf/udf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/table"},next:{title:"UDAF Introduction",permalink:"/tugraph-analytics/en/application-development/dsl/udf/udaf"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"udf-introduction",children:"UDF Introduction"})}),"\n",(0,a.jsx)(n.p,{children:"The UDF (User Defined Function) map scalar values to a scalar value."}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public abstract class UserDefinedFunction implements Serializable {\n\n    /**\n     * Init method for the user defined function.\n     */\n    public void open(FunctionContext context) {\n    }\n\n    /**\n     * Close method for the user defined function.\n     */\n    public void close() {\n    }\n}\n\npublic abstract class UDF extends UserDefinedFunction {\n\n}\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class ConcatWS extends UDF {\n\n    public String eval(String... args) {\n        String separator = args[0];\n        String[] words = new String[args.length - 1];\n        for (int index = 0; index < d.length; index++) {\n            words[index] = args[index + 1];\n        }\n        return StringUtils.join(words, separator);\n    }\n\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Create Function my_cancat as 'com.antgroup.geaflow.dsl.udf.table.string.ConcatWS'; \n\nselect my_cancat(',', '1', '2', '3');\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);