"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[816],{3905:(t,a,e)=>{e.d(a,{Zo:()=>h,kt:()=>g});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),i=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},h=function(t){var a=i(t.components);return n.createElement(m.Provider,{value:a},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),d=i(e),u=r,g=d["".concat(m,".").concat(u)]||d[u]||k[u]||l;return e?n.createElement(g,p(p({ref:a},h),{},{components:e})):n.createElement(g,p({ref:a},h))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=u;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=t,o[d]="string"==typeof t?t:r,p[1]=o;for(var i=2;i<l;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},1366:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=e(87462),r=(e(67294),e(3905));const l={sidebar_position:1,sidebar_label:"\u8d44\u6e90\u5e16",tags:["AIGC"]},p="AIGC \u8d44\u6e90\u5e16",o={unversionedId:"Inbox/AIGC/\u8d44\u6e90\u5e16",id:"Inbox/AIGC/\u8d44\u6e90\u5e16",title:"AIGC \u8d44\u6e90\u5e16",description:"\u4e00\u3001ChatGPT",source:"@site/docs/01-Inbox/03-AIGC/00-\u8d44\u6e90\u5e16.md",sourceDirName:"01-Inbox/03-AIGC",slug:"/Inbox/AIGC/\u8d44\u6e90\u5e16",permalink:"/notebook/docs/Inbox/AIGC/\u8d44\u6e90\u5e16",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/01-Inbox/03-AIGC/00-\u8d44\u6e90\u5e16.md",tags:[{label:"AIGC",permalink:"/notebook/docs/tags/aigc"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u8d44\u6e90\u5e16",tags:["AIGC"]},sidebar:"inboxSideBar",previous:{title:"AIGC",permalink:"/notebook/docs/category/aigc"},next:{title:"ChatGpt",permalink:"/notebook/docs/category/chatgpt"}},m={},i=[{value:"\u4e00\u3001ChatGPT",id:"\u4e00chatgpt",level:2},{value:"1.\u5728\u7ebf\u53ef\u7528ChatGPT",id:"1\u5728\u7ebf\u53ef\u7528chatgpt",level:3},{value:"2.ChatGPT \u63d0\u793a\u8bcd",id:"2chatgpt-\u63d0\u793a\u8bcd",level:3},{value:"3.ChatGPT SDK\u4e0e\u524d\u7aef",id:"3chatgpt-sdk\u4e0e\u524d\u7aef",level:3},{value:"4.\u5176\u4ed6\u5f00\u6e90\u9879\u76ee",id:"4\u5176\u4ed6\u5f00\u6e90\u9879\u76ee",level:3},{value:"\u4e8c\u3001AI\u5de5\u5177\u5bfc\u822a",id:"\u4e8cai\u5de5\u5177\u5bfc\u822a",level:2},{value:"\u4e09\u3001AI\u5e94\u7528\u5f00\u6e90\u9879\u76ee",id:"\u4e09ai\u5e94\u7528\u5f00\u6e90\u9879\u76ee",level:2}],h={toc:i},d="wrapper";function k(t){let{components:a,...e}=t;return(0,r.kt)(d,(0,n.Z)({},h,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aigc-\u8d44\u6e90\u5e16"},"AIGC \u8d44\u6e90\u5e16"),(0,r.kt)("h2",{id:"\u4e00chatgpt"},"\u4e00\u3001ChatGPT"),(0,r.kt)("h3",{id:"1\u5728\u7ebf\u53ef\u7528chatgpt"},"1.\u5728\u7ebf\u53ef\u7528ChatGPT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9879\u76ee")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://doc.wuguokai.cn/s/xPq1iNw_v"},"ChatGPT\u4f7f\u7528\u6307\u5357")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u514d\u8d39\u4f7f\u7528\u3011wuguokai chatgpt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pengzhile/pandora"},"pengzhile/pandora")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u5171\u4eab\u8d26\u53f7\u3011\u6f58\u591a\u62c9\uff0c\u4e00\u4e2a\u8ba9\u4f60\u547c\u5438\u987a\u7545\u7684ChatGPT\u3002\u5171\u4eab\u8d26\u53f7\uff0c\u5728\u7ebf\u53ef\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://chat.plexpt.com/"},"https://chat.plexpt.com")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u6536\u8d39\u4f1a\u5458\u3011\u667a\u9020\u55b5\uff0cPlexPt\u5199\u7684\u3002")))),(0,r.kt)("h3",{id:"2chatgpt-\u63d0\u793a\u8bcd"},"2.ChatGPT \u63d0\u793a\u8bcd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9879\u76ee")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/PlexPt/awesome-chatgpt-prompts-zh"},"PlexPt/awesome-chatgpt-prompts-zh")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u63d0\u793a\u8bcd\u3011ChatGPT \u4e2d\u6587\u8c03\u6559\u6307\u5357\u3002\u5404\u79cd\u573a\u666f\u4f7f\u7528\u6307\u5357\u3002\u5b66\u4e60\u600e\u4e48\u8ba9\u5b83\u542c\u4f60\u7684\u8bdd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/f/awesome-chatgpt-prompts"},"f/awesome-chatgpt-prompts")),(0,r.kt)("td",{parentName:"tr",align:null},"This repo includes ChatGPT prompt curation to use ChatGPT better.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wenhaomin/GPT-PromptGenius"},"wenhaomin/GPT-PromptGenius")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u63d0\u793a\u8bcd\u7f51\u7ad9\u3011\u5168\u9762\u3001\u6709\u6548\u7684\u63d0\u793a\u8bcd\u5927\u5168\u7f51\u7ad9\uff0c\u5e2e\u52a9\u63d0\u5347\u751f\u4ea7\u529b\u548c\u8d28\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.quanzhan.co/ai/chatgpt-prompts"},"chatgpt-prompts")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u793a\u8bcd\u7f51\u7ad9\u3001AI\u5de5\u5177\u7bb1\u5bfc\u822a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Nothing1024/chatgpt-prompt-collection"},"Nothing1024/chatgpt-prompt-collection")),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt\u6536\u96c6\u6574\u7406\uff0c\u7528\u4e8e\u540e\u671fAPI\u8c03\u8bd5\u548c",(0,r.kt)("a",{parentName:"td",href:"https://github.com/Chanzhaoyu/chatgpt-web"},"chatgpt-web"),"\u5bfc\u5165")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"3chatgpt-sdk\u4e0e\u524d\u7aef"},"3.ChatGPT SDK\u4e0e\u524d\u7aef"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9879\u76ee")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Grt1228/chatgpt-java"},"Grt1228/chatgpt-java")),(0,r.kt)("td",{parentName:"tr",align:null},"ChatGPT Java SDK\u652f\u6301\u6d41\u5f0f\u8f93\u51fa\u3002\u652f\u6301OpenAI\u5b98\u65b9\u6240\u6709\u63a5\u53e3\u3002ChatGPT\u7684Java\u5ba2\u6237\u7aef\u3002OpenAI GPT-3.5-Turb GPT-4 Api Client for Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/PlexPt/chatgpt-java"},"PlexPt/chatgpt-java")),(0,r.kt)("td",{parentName:"tr",align:null},"ChatGPT Java SDK\u3002\u652f\u6301 GPT3.5\u3001 GPT4 API\u3002\u5f00\u7bb1\u5373\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hncboy/chatgpt-web-java"},"hncboy/chatgpt-web-java")),(0,r.kt)("td",{parentName:"tr",align:null},"ChatGPT \u8bf4\u6587\u89e3\u5b57\u524d\u7aef\u7684 Java \u540e\u53f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/mjjh1717/chatgpt-shuowen"},"mjjh1717/chatgpt-shuowen")),(0,r.kt)("td",{parentName:"tr",align:null},"ChatGPT \u7528\u6237\u7aef-\u8bf4\u6587")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hncboy/chatgpt-jiezi"},"hncboy/chatgpt-jiezi")),(0,r.kt)("td",{parentName:"tr",align:null},"ChatGPT \u7ba1\u7406\u7aef-\u89e3\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Chanzhaoyu/chatgpt-web"},"Chanzhaoyu/chatgpt-web")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528 Express \u548c Vue3 \u642d\u5efa\u7684 ChatGPT \u6f14\u793a\u7f51\u9875")))),(0,r.kt)("h3",{id:"4\u5176\u4ed6\u5f00\u6e90\u9879\u76ee"},"4.\u5176\u4ed6\u5f00\u6e90\u9879\u76ee"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9879\u76ee")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lencx/ChatGPT"},"lencx/ChatGPT")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u5ba2\u6237\u7aef\u3011ChatGPT\u684c\u9762\u5e94\u7528(Mac, Windows and Linux)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AutumnWhj/ChatGPT-wechat-bot"},"AutumnWhj/ChatGPT-wechat-bot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u51e0\u6b65\u5373\u53ef\u83b7\u5f97\u4e00\u4e2a\u57fa\u4e8e ChatGPT \u7684\u5fae\u4fe1\u673a\u5668\u4eba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/mpociot/chatgpt-vscode"},"mpociot/chatgpt-vscode")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010VsCode\u63d2\u4ef6\u3011\u57fa\u4e8e ChatGPT \u7684VsCode\u63d2\u4ef6\uff0c\u5b83\u80fd\u5728\u7f16\u8f91\u5668\u5185\u76f4\u63a5\u751f\u6210\u4ee3\u7801\uff0c\u6216\u8005\u9009\u4e2d\u4ee3\u7801\uff0c\u8be2\u95ee\u95ee\u9898\uff0c\u5b83\u80fd\u76f4\u63a5\u5728vscode\u5185\u7ed9\u51fa\u7b54\u590d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wong2/chatgpt-google-extension"},"wong2/chatgpt-google-extension")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010\u6d4f\u89c8\u5668\u63d2\u4ef6\u3011\u4f7f\u7528ChatGPT\u589e\u5f3a\u641c\u7d22\u5f15\u64ce\u7684\u6d4f\u89c8\u5668\u63d2\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.aiprm.com/"},"AIPRM for ChatGPT")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3010Chrome\u63d2\u4ef6\u3011\u63d0\u793a\u8bcd\u795e\u5668")))),(0,r.kt)("h2",{id:"\u4e8cai\u5de5\u5177\u5bfc\u822a"},"\u4e8c\u3001AI\u5de5\u5177\u5bfc\u822a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9879\u76ee")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.quanzhan.co/ai/tools/"},"AI Toolbox Hub")),(0,r.kt)("td",{parentName:"tr",align:null},"AI\u5de5\u5177\u7bb1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ai-bot.cn/"},"AI\u5de5\u5177\u96c6")),(0,r.kt)("td",{parentName:"tr",align:null},"AI\u5de5\u5177\u96c6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://123.lingduquan.com/"},"AI\u7f51\u7ad9\u5bfc\u822a")),(0,r.kt)("td",{parentName:"tr",align:null},"AI\u7f51\u7ad9\u5bfc\u822a")))),(0,r.kt)("h2",{id:"\u4e09ai\u5e94\u7528\u5f00\u6e90\u9879\u76ee"},"\u4e09\u3001AI\u5e94\u7528\u5f00\u6e90\u9879\u76ee"),(0,r.kt)("p",null,"\u5173\u4e8eAI\u7684\u5e94\u7528\u573a\u666f\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://123.lingduquan.com/"},"AI\u7f51\u7ad9\u5bfc\u822a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9879\u76ee")),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b98\u7f51"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/guaguaguaxia/weekly_report"},"guaguaguaxia/weekly_report")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672cAI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5468\u62a5\u751f\u6210\u5668\uff1a\u7b80\u5355\u63cf\u8ff0\u5de5\u4f5c\u5185\u5bb9\uff0c\u5e2e\u4f60\u751f\u6210\u5b8c\u6574\u5468\u62a5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/guaguaguaxia/weekly_report"},"\u5b98\u7f51"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui"},"stable-diffusion-webui")),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247AI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u6587\u751f\u56fe\u3001\u56fe\u751f\u56fe"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/babysor/MockingBird"},"babysor/MockingBird")),(0,r.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891AI"),(0,r.kt)("td",{parentName:"tr",align:null},"AI\u62df\u58f0: 5\u79d2\u5185\u514b\u9686\u60a8\u7684\u58f0\u97f3\u5e76\u751f\u6210\u4efb\u610f\u8bed\u97f3\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kuangdd/ttskit"},"https://github.com/kuangdd/ttskit")),(0,r.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891AI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bed\u97f3\u5408\u6210\uff1a\u6587\u5b57\u8f6c\u8bed\u97f3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/PaddlePaddle/PaddleSpeech"},"PaddlePaddle/PaddleSpeech")),(0,r.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891AI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u6e90\u5de5\u5177\u5305\uff1a\u8bed\u97f3\u8bc6\u522b\u3001\u8bed\u97f3\u7ffb\u8bd1\u3001\u8bed\u97f3\u5408\u6210"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/l-O-O-l/TTS-action"},"l-O-O-l/TTS-action")),(0,r.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891AI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u8f6c\u8bed\u97f3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/QuintGao/GKDubbingDemo"},"QuintGao/GKDubbingDemo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891AI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u8f6c\u8bed\u97f3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/starhiking/delogo"},"starhiking/delogo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891AI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u53bb\u6c34\u5370"),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);