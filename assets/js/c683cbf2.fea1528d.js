"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9192],{8740:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=l(4848),r=l(8453);const i={},c="LLM\u672c\u5730\u90e8\u7f72",s={id:"deploy/install_llm",title:"LLM\u672c\u5730\u90e8\u7f72",description:"\u7528\u6237\u53ef\u4ee5\u5728\u672c\u5730\u5b8c\u6210\u5927\u6a21\u578b\u7684\u670d\u52a1\u5316\u90e8\u7f72\uff0c\u4ee5\u4e0b\u6b65\u9aa4\u63cf\u8ff0\u4e86\u4ece\u4e0b\u8f7d\u9884\u8bad\u7ec3\u6a21\u578b\uff0c\u670d\u52a1\u5316\u90e8\u7f72\u548c\u8c03\u8bd5\u7684\u6574\u4e2a\u8fc7\u7a0b\u3002\u7528\u6237\u673a\u5668\u786e\u4fdd\u5df2\u5b89\u88c5Docker\uff0c\u53ef\u8bbf\u95ee\u5927\u6a21\u578b\u5b58\u50a8\u5e93\u3002",source:"@site/docs/docs-cn/source/7.deploy/5.install_llm.md",sourceDirName:"7.deploy",slug:"/deploy/install_llm",permalink:"/tugraph-analytics/zh/deploy/install_llm",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf08 G6VP \u56fe\u53ef\u89c6\u5316",permalink:"/tugraph-analytics/zh/deploy/collaborate_with_g6vp"},next:{title:"\u5b89\u88c5minikube",permalink:"/tugraph-analytics/zh/deploy/install_minikube"}},d={},o=[{value:"\u6b65\u9aa41:\u4e0b\u8f7d\u5927\u6a21\u578b\u6587\u4ef6",id:"\u6b65\u9aa41\u4e0b\u8f7d\u5927\u6a21\u578b\u6587\u4ef6",level:2},{value:"\u6b65\u9aa42:\u51c6\u5907 Docker \u5bb9\u5668\u73af\u5883",id:"\u6b65\u9aa42\u51c6\u5907-docker-\u5bb9\u5668\u73af\u5883",level:2},{value:"\u6b65\u9aa43:\u6a21\u578b\u670d\u52a1\u5316\u90e8\u7f72",id:"\u6b65\u9aa43\u6a21\u578b\u670d\u52a1\u5316\u90e8\u7f72",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"llm\u672c\u5730\u90e8\u7f72",children:"LLM\u672c\u5730\u90e8\u7f72"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u5728\u672c\u5730\u5b8c\u6210\u5927\u6a21\u578b\u7684\u670d\u52a1\u5316\u90e8\u7f72\uff0c\u4ee5\u4e0b\u6b65\u9aa4\u63cf\u8ff0\u4e86\u4ece\u4e0b\u8f7d\u9884\u8bad\u7ec3\u6a21\u578b\uff0c\u670d\u52a1\u5316\u90e8\u7f72\u548c\u8c03\u8bd5\u7684\u6574\u4e2a\u8fc7\u7a0b\u3002\u7528\u6237\u673a\u5668\u786e\u4fdd\u5df2\u5b89\u88c5Docker\uff0c\u53ef\u8bbf\u95ee\u5927\u6a21\u578b\u5b58\u50a8\u5e93\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6b65\u9aa41\u4e0b\u8f7d\u5927\u6a21\u578b\u6587\u4ef6",children:"\u6b65\u9aa41:\u4e0b\u8f7d\u5927\u6a21\u578b\u6587\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5df2\u5c06\u9884\u8bad\u7ec3\u597d\u7684\u5927\u6a21\u578b\u6587\u4ef6\uff0c\u4e0a\u4f20\u81f3",(0,t.jsx)(n.a,{href:"https://huggingface.co/tugraph/CodeLlama-7b-GQL-hf",children:"Hugging Face\u4ed3\u5e93"}),"\uff0c\u4e0b\u8f7d\u6a21\u578b\u6587\u4ef6\u540e\u89e3\u538b\u5230\u672c\u5730\u3002\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u89e3\u538b\u6a21\u578b\u6587\u4ef6\u5230\u6307\u5b9a\u7684\u672c\u5730\u76ee\u5f55\uff0c\u5982 /home/huggingface\u3002\n",(0,t.jsx)(n.img,{alt:"hugging",src:l(2479).A+"",width:"3122",height:"1776"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6b65\u9aa42\u51c6\u5907-docker-\u5bb9\u5668\u73af\u5883",children:"\u6b65\u9aa42:\u51c6\u5907 Docker \u5bb9\u5668\u73af\u5883"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u7ec8\u7aef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u6a21\u578b\u670d\u52a1\u5316\u6240\u9700\u7684 Docker \u955c\u50cf\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker pull tugraph/llam_infer_service:0.0.1\n\n//\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u9a8c\u8bc1\u955c\u50cf\u662f\u5426\u6210\u529f\u4e0b\u8f7d\ndocker images\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8Docker\u5bb9\u5668\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -it  --name ${\u5bb9\u5668\u540d\u79f0} -v ${\u672c\u5730\u6a21\u578b\u8def\u5f84}:${\u5bb9\u5668\u6a21\u578b\u8def\u5f84} -p ${\u672c\u5730\u7aef\u53e3}:${\u5bb9\u5668\u670d\u52a1\u5316\u7aef\u53e3} -d ${\u955c\u50cf\u540d}  \n\n//\u4f8b\u5982\ndocker run -it --name my-model-container -v /home/huggingface:/opt/huggingface -p 8000:8000 -d llama_inference_server:v1\n\n// \u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5e38\u8fd0\u884c\ndocker ps \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u5bb9\u5668\u7684 8000 \u7aef\u53e3\u6620\u5c04\u5230\u672c\u5730\u673a\u5668\u7684 8000 \u7aef\u53e3\uff0c\u5c06\u672c\u5730\u6a21\u578b\uff08/home/huggingface\uff09\u6240\u5728\u76ee\u5f55\u6302\u8f7d\u5230\u5bb9\u5668\u7684\u8def\u5f84\uff08/opt/huggingface\uff09\uff0c\u5e76\u5c06\u5bb9\u5668\u540d\u79f0\u8bbe\u7f6e\u4e3a my-model-container\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6b65\u9aa43\u6a21\u578b\u670d\u52a1\u5316\u90e8\u7f72",children:"\u6b65\u9aa43:\u6a21\u578b\u670d\u52a1\u5316\u90e8\u7f72"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6a21\u578b\u8f6c\u6362"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"//\u8fdb\u5165\u4e0a\u8ff0\u521a\u521b\u5efa\u597d\u7684\u5bb9\u5668\ndocker exec -it ${container_id} bash\n\n//\u6267\u884c\u5982\u4e0b\u547d\u4ee4\ncd /opt/llama_cpp\npython3 ./convert.py ${\u5bb9\u5668\u6a21\u578b\u8def\u5f84}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c\u5b8c\u6210\u540e\uff0c \u4f1a\u5728\u5bb9\u5668\u6a21\u578b\u8def\u5f84\u4e0b\u751f\u6210\u524d\u7f00\u4e3aggml-model\u7684\u6587\u4ef6\n",(0,t.jsx)(n.img,{alt:"undefined",src:l(403).A+"",width:"1994",height:"184"})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u6a21\u578b\u91cf\u5316\uff08\u53ef\u9009\uff09\n\u4ee5llam2-7B\u6a21\u578b\u4e3a\u4f8b\uff1a\u901a\u8fc7convert.py\u9ed8\u8ba4\u8f6c\u6362\u540e\u7684\u6a21\u578b\u7cbe\u5ea6\u4e3aF16\uff0c\u6a21\u578b\u5927\u5c0f\u4e3a13.0GB\u3002\u5982\u679c\u5f53\u524d\u673a\u5668\u8d44\u6e90\u65e0\u6cd5\u6ee1\u8db3\u8fd9\u4e48\u5927\u7684\u6a21\u578b\u63a8\u7406\uff0c\u53ef\u901a\u8fc7./quantize\u5bf9\u8f6c\u6362\u540e\u7684\u6a21\u578b\u8fdb\u4e00\u6b65\u91cf\u5316\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// \u5982\u4e0b\u6240\u793a q4_0\u5373\u5c06\u539f\u59cb\u6a21\u578b\u91cf\u5316\u4e3aint4\uff0c\u6a21\u578b\u5927\u5c0f\u538b\u7f29\u81f33.5GB\uff1b\n// \u5176\u5b83\u53c2\u6570\u7c7b\u4f3c\ncd /opt/llama_cpp\n./quantize \u9ed8\u8ba4\u751f\u6210\u7684F16\u6a21\u578b\u8def\u5f84 \u91cf\u5316\u540e\u6a21\u578b\u8def\u5f84 q4_0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u91cf\u5316\u540e\u6a21\u578b\u7684\u5927\u5c0f\u548c\u63a8\u7406\u901f\u5ea6\u7b49\u53c2\u8003\u6307\u6807\uff1a\n",(0,t.jsx)(n.img,{alt:"undefined",src:l(8590).A+"",width:"1374",height:"850"})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u6a21\u578b\u670d\u52a1\u5316\n\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u4e0a\u8ff0\u751f\u6210\u7684\u6a21\u578b\u8fdb\u884c\u670d\u52a1\u5316\u7684\u90e8\u7f72\uff0c\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u670d\u52a1\u7ed1\u5b9a\u7684\u5730\u5740\u548c\u7aef\u53e3\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// ./server -h \u53ef\u67e5\u770b\u53c2\u6570\u8be6\u60c5\n// ${ggml-model...\u6587\u4ef6}\u4e3a\u751f\u6210\u7684ggml-model\u524d\u7f00\u7684\u6587\u4ef6\u540d\n\ncd /opt/llama_cpp\n./server --host ${ip} --port ${port} -m ${\u5bb9\u5668\u6a21\u578b\u8def\u5f84}/${ggml-model...\u6587\u4ef6} -c 4096\n\n//\u4f8b\u5982\n./server --host 0.0.0.0 --port 8000 -m  /opt/huggingface/ggml-model-f16.gguf -c 4096\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:'\u8c03\u8bd5\u670d\u52a1\n\u5411\u670d\u52a1\u5730\u5740\u53d1\u9001http\u8bf7\u6c42\uff0c\u5176\u4e2d"prompt"\u4e3a\u67e5\u8be2\u7684\u8bed\u53e5, \u5728\u8fd4\u56de\u7684"content"\u4e2d\u5219\u662f\u63a8\u7406\u7ed3\u679c\u3002'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl --request POST \\\n    --url http://127.0.0.1:8000/completion \\\n    --header "Content-Type: application/json" \\\n    --data \'{"prompt": "\u8bf7\u8fd4\u56de\u5c0f\u7ea2\u768410\u4e2a\u5e74\u9f84\u5927\u4e8e20\u7684\u670b\u53cb","n_predict": 128}\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u4e0b\u662f\u670d\u52a1\u5316\u90e8\u7f72\u540e\u7684\u6a21\u578b\u63a8\u7406\u7ed3\u679c\uff1a\n",(0,t.jsx)(n.img,{alt:"undefined",src:l(3088).A+"",width:"3452",height:"378"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3088:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/llm_chat_result-be8e98ff482447100ea379b3f32f625f.png"},403:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/llm_ggml_model-fdd30b6f6640c4def399eef562ac03ba.png"},2479:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/llm_hugging_face-cbdf155bf78c91051ef4b92c614e786f.png"},8590:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/llm_quantization_table-adc2d8cd29b0e371a75ccf6e3874053d.png"},8453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>s});var t=l(6540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);