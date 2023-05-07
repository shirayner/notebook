"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",tags:["JVM"]},l="JVM\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",p={unversionedId:"Backend/Java/Jvm/JVM\u751f\u4ea7\u6392\u969c/\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",id:"Backend/Java/Jvm/JVM\u751f\u4ea7\u6392\u969c/\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",title:"JVM\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",description:"\u63a8\u8350\u9605\u8bfb",source:"@site/docs/03-Backend/01-Java/04-Jvm/04-JVM\u751f\u4ea7\u6392\u969c/01_\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5.md",sourceDirName:"03-Backend/01-Java/04-Jvm/04-JVM\u751f\u4ea7\u6392\u969c",slug:"/Backend/Java/Jvm/JVM\u751f\u4ea7\u6392\u969c/\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",permalink:"/notebook/docs/Backend/Java/Jvm/JVM\u751f\u4ea7\u6392\u969c/\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/01-Java/04-Jvm/04-JVM\u751f\u4ea7\u6392\u969c/01_\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5.md",tags:[{label:"JVM",permalink:"/notebook/docs/tags/jvm"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5",tags:["JVM"]},sidebar:"backendSideBar",previous:{title:"\u8d44\u6e90\u5e16",permalink:"/notebook/docs/Backend/Java/Jvm/JVM\u751f\u4ea7\u6392\u969c/\u8d44\u6e90\u5e16"},next:{title:"\u7ebf\u4e0a\u6545\u969c\u6392\u67e5",permalink:"/notebook/docs/Backend/Java/Jvm/\u7ebf\u4e0a\u6545\u969c\u6392\u67e5"}},i={},c=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:2},{value:"\u4e00\u3001\u6392\u67e5\u8fc7\u7a0b",id:"\u4e00\u6392\u67e5\u8fc7\u7a0b",level:2},{value:"1. \u4e0b\u8f7ddump\u6587\u4ef6",id:"1-\u4e0b\u8f7ddump\u6587\u4ef6",level:3},{value:"2.\u4f7f\u7528MAT\u5206\u6790dump\u6587\u4ef6",id:"2\u4f7f\u7528mat\u5206\u6790dump\u6587\u4ef6",level:3}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jvm\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5"},"JVM\u5806\u5185\u5b58\u6ea2\u51fa\u751f\u4ea7\u6392\u67e5"),(0,a.kt)("h2",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6908665391136899079"},"JVM \u5185\u5b58\u5206\u6790\u5de5\u5177 MAT \u7684\u6df1\u5ea6\u8bb2\u89e3\u4e0e\u5b9e\u8df5\u2014\u2014\u5165\u95e8\u7bc7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracyliu1.github.io/gitbook/Performance/25.MAT%E4%BD%BF%E7%94%A8.html"},"1. MAT\u4ece\u5165\u95e8\u5230\u7cbe\u901a")))),(0,a.kt)("h2",{id:"\u4e00\u6392\u67e5\u8fc7\u7a0b"},"\u4e00\u3001\u6392\u67e5\u8fc7\u7a0b"),(0,a.kt)("h3",{id:"1-\u4e0b\u8f7ddump\u6587\u4ef6"},"1. \u4e0b\u8f7ddump\u6587\u4ef6"),(0,a.kt)("p",null,"\u8fd9\u4e00\u6b65\u53ef\u4ee5\u4f7f\u7528\u4f60\u4eec\u516c\u53f8\u63d0\u4f9b\u7684\u5e73\u53f0\u6216\u8005\u5de5\u5177\u76f4\u63a5\u4e0b\u8f7d\uff0c\u5c31\u4e0d\u7ec6\u8bf4\uff0c\u8fd9\u91cc\u6211\u4eec\u8bf4\u4e00\u4e0b\u767b\u5f55\u5230\u5bf9\u5e94\u7684\u673a\u5668\u4e0a\u53bb\u4e0b\u8f7d\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\uff081\uff09\u767b\u5f55\u673a\u5668\uff0c\u7136\u540e\u4f7f\u7528jps\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5217\u51fa\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684Java\u8fdb\u7a0b\u548c\u5b83\u4eec\u7684PID\uff08\u8fdb\u7a0b\u6807\u8bc6\u7b26\uff09\njps -l\n")),(0,a.kt)("p",null,"\uff082\uff09\u4f7f\u7528jmap\u547d\u4ee4\u751f\u6210dump\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jmap -dump:live,format=b,file=heapdump.bin <pid>\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86jmap\u547d\u4ee4\u6765\u751f\u6210\u5806\u8f6c\u50a8\u6587\u4ef6\uff08dump\u6587\u4ef6\uff09\u3002\u8fd9\u4e2a\u547d\u4ee4\u9700\u8981\u63d0\u4f9b\u8fdb\u7a0b\u7684PID\u3002\u751f\u6210\u7684\u6587\u4ef6\u4f1a\u4fdd\u5b58\u5728\u6307\u5b9a\u7684\u8def\u5f84\u4e0b\u3002"),(0,a.kt)("h3",{id:"2\u4f7f\u7528mat\u5206\u6790dump\u6587\u4ef6"},"2.\u4f7f\u7528MAT\u5206\u6790dump\u6587\u4ef6"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u53ca\u5b89\u88c5\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/zwh0910/p/15774590.html"},"MAT(Memory Analyzer Tool)\u4e0b\u8f7d\u548c\u5b89\u88c5")))),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528Eclipse Memory Analyzer Tool\uff08MAT\uff09\u8fd9\u6837\u7684\u5de5\u5177\u6765\u5206\u6790dump\u6587\u4ef6\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6253\u5f00MAT\u5de5\u5177\uff0c\u9009\u62e9Open Heap Dump\uff0c\u627e\u5230\u6211\u4eec\u751f\u6210\u7684dump\u6587\u4ef6\uff0c\u70b9\u51fbOpen\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7a0d\u7b49\u7247\u523b\uff0cMAT\u4f1a\u5206\u6790dump\u6587\u4ef6\uff0c\u5e76\u663e\u793a\u51fa\u4e00\u4e2a\u6982\u89c8\u7a97\u53e3\u3002\u5728\u8fd9\u4e2a\u7a97\u53e3\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6700\u5927\u7684\u5bf9\u8c61\u3001\u5783\u573e\u6536\u96c6\u5668\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("p",{parentName:"li"},"3.3 \u5728\u5de6\u4fa7\u680f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5404\u4e2aclass\u5b9e\u4f8b\u7684\u6570\u91cf\u3002\u5982\u679c\u67d0\u4e2aclass\u7684\u5b9e\u4f8b\u6570\u91cf\u8fc7\u591a\uff0c\u90a3\u4e48\u5b83\u53ef\u80fd\u662f\u9020\u6210\u5185\u5b58\u6ea2\u51fa\u7684\u539f\u56e0\u4e4b\u4e00\u3002"),(0,a.kt)("p",{parentName:"li"},"3.4 \u5728\u5de6\u4fa7\u680f\u4e2d\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u770b\u5230\u5185\u5b58\u6cc4\u6f0f\u62a5\u544a\u3002\u8fd9\u4e9b\u62a5\u544a\u4f1a\u544a\u8bc9\u6211\u4eec\u54ea\u4e9b\u5bf9\u8c61\u88ab\u4fdd\u7559\u4e86\u4e0b\u6765\uff0c\u5bfc\u81f4\u4e86\u5185\u5b58\u6cc4\u6f0f\u3002")))))}s.isMDXComponent=!0}}]);