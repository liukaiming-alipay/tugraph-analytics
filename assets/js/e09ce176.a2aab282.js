"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2481],{3151:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(4848),s=i(8453);const t={},o="\u5b89\u88c5minikube",a={id:"deploy/install_minikube",title:"\u5b89\u88c5minikube",description:"\u8fd9\u91cc\u4ee5minikube\u4e3a\u4f8b\uff0c\u5355\u673a\u6a21\u62dfK8S\u96c6\u7fa4\u3002\u5982\u679c\u5df2\u6709K8S\u96c6\u7fa4\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u8df3\u8fc7\u8be5\u90e8\u5206\u3002",source:"@site/docs/docs-cn/deploy/install_minikube.md",sourceDirName:"deploy",slug:"/deploy/install_minikube",permalink:"/tugraph-analytics/zh/deploy/install_minikube",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},u={},c=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5b89\u88c5minikube",children:"\u5b89\u88c5minikube"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u4ee5minikube\u4e3a\u4f8b\uff0c\u5355\u673a\u6a21\u62dfK8S\u96c6\u7fa4\u3002\u5982\u679c\u5df2\u6709K8S\u96c6\u7fa4\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u8df3\u8fc7\u8be5\u90e8\u5206\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u8f7d\u5b89\u88c5minikube"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# arm\u67b6\u6784\ncurl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64\nsudo install minikube-darwin-arm64 /usr/local/bin/minikube\n\n# x86\u67b6\u6784\ncurl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64\nsudo install minikube-darwin-amd64 /usr/local/bin/minikube\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8minikube\u548cdashboard"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# \u4ee5docker\u4e3adriver\u542f\u52a8minikube\nminikube start --driver=docker --ports=32761:32761 \u2014image-mirror-country='cn'\n# \u542f\u52a8minikube dashboard\uff0c\u4f1a\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00dashboard\u9875\u9762\uff0c\u5982\u672a\u6253\u5f00\u590d\u5236\u7ec8\u7aef\u7ed9\u51fa\u7684dashboard\u5730\u5740\u5230\u6d4f\u89c8\u5668\u6253\u5f00\nminikube dashboard\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"}),"\n\u6ce8\u610f\u4e0d\u8981\u5173\u95eddashboard\u6240\u5c5e\u7684terminal\u8fdb\u7a0b\uff0c\u540e\u7eed\u64cd\u4f5c\u8bf7\u53e6\u8d77\u7ec8\u7aef\u8fdb\u884c\uff0c\u5426\u5219api server\u8fdb\u7a0b\u4f1a\u9000\u51fa"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u5e0c\u671b\u5728\u672c\u5730minikube\u73af\u5883\u4f7f\u7528GeaFlow\uff0c\u8bf7\u786e\u4fddminikube\u6b63\u5e38\u542f\u52a8\uff0cGeaFlow\u5f15\u64ce\u955c\u50cf\u4f1a\u81ea\u52a8\u6784\u5efa\u5230minikube\u73af\u5883\uff0c\u5426\u5219\u6784\u5efa\u5230\u672c\u5730Docker\u73af\u5883\uff0c\u9700\u8981\u624b\u5de5\u81ea\u884cpush\u5230\u955c\u50cf\u4ed3\u5e93\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# confirm host\u3001kubelet\u3001apiserver is running\nminikube status\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(6540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);