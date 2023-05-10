"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[927],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(r),s=a,d=m["".concat(c,".").concat(s)]||m[s]||k[s]||i;return r?n.createElement(d,l(l({ref:e},u),{},{components:r})):n.createElement(d,l({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[m]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63057:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"\u8d44\u6e90\u5e16",tags:["Git"]},l="Git \u8d44\u6e90\u5e16",o={unversionedId:"Backend/Git/\u8d44\u6e90\u5e16",id:"Backend/Git/\u8d44\u6e90\u5e16",title:"Git \u8d44\u6e90\u5e16",description:"\u4e00\u3001\u5b98\u65b9\u8d44\u6599",source:"@site/docs/03-Backend/08-Git/00_\u8d44\u6e90\u5e16.md",sourceDirName:"03-Backend/08-Git",slug:"/Backend/Git/\u8d44\u6e90\u5e16",permalink:"/notebook/docs/Backend/Git/\u8d44\u6e90\u5e16",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/08-Git/00_\u8d44\u6e90\u5e16.md",tags:[{label:"Git",permalink:"/notebook/docs/tags/git"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"\u8d44\u6e90\u5e16",tags:["Git"]},sidebar:"backendSideBar",previous:{title:"Git",permalink:"/notebook/docs/category/git"},next:{title:"\u5b89\u88c5\u53ca\u914d\u7f6e",permalink:"/notebook/docs/Backend/Git/\u5b89\u88c5\u53ca\u914d\u7f6e"}},c={},p=[{value:"\u4e00\u3001\u5b98\u65b9\u8d44\u6599",id:"\u4e00\u5b98\u65b9\u8d44\u6599",level:2},{value:"\u4e8c\u3001\u7cbe\u9009\u8d44\u6599",id:"\u4e8c\u7cbe\u9009\u8d44\u6599",level:2},{value:"1.\u5ed6\u96ea\u5cf0",id:"1\u5ed6\u96ea\u5cf0",level:3},{value:"2.\u962e\u4e00\u5cf0",id:"2\u962e\u4e00\u5cf0",level:3},{value:"3.Git\u7b80\u660e\u6559\u7a0b",id:"3git\u7b80\u660e\u6559\u7a0b",level:3},{value:"\u4e09\u3001\u5176\u4ed6\u8d44\u6599",id:"\u4e09\u5176\u4ed6\u8d44\u6599",level:2}],u={toc:p},m="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-\u8d44\u6e90\u5e16"},"Git \u8d44\u6e90\u5e16"),(0,a.kt)("h2",{id:"\u4e00\u5b98\u65b9\u8d44\u6599"},"\u4e00\u3001\u5b98\u65b9\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.git-scm.com/doc"},"git-scm.com/doc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://gitbook.liuhui998.com/index.html"},"Git Community Book \u4e2d\u6587\u7248"))),(0,a.kt)("h2",{id:"\u4e8c\u7cbe\u9009\u8d44\u6599"},"\u4e8c\u3001\u7cbe\u9009\u8d44\u6599"),(0,a.kt)("h3",{id:"1\u5ed6\u96ea\u5cf0"},"1.\u5ed6\u96ea\u5cf0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000"},"Git\u6559\u7a0b\u2014\u2014\u5ed6\u96ea\u5cf0"))),(0,a.kt)("h3",{id:"2\u962e\u4e00\u5cf0"},"2.\u962e\u4e00\u5cf0"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2012/07/git.html"},"Git\u5206\u652f\u7ba1\u7406\u7b56\u7565")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html"},"Git\u8fdc\u7a0b\u64cd\u4f5c\u8be6\u89e3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html"},"Git \u4f7f\u7528\u89c4\u8303\u6d41\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/09/git-bitmap.html"},"Github \u7684\u6e05\u70b9\u5bf9\u8c61\u7b97\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"},"\u5e38\u7528 Git \u547d\u4ee4\u6e05\u5355")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/12/git-workflow.html"},"Git \u5de5\u4f5c\u6d41\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2018/10/git-internals.html"},"Git \u539f\u7406\u5165\u95e8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2018/12/git-bisect.html"},"git bisect \u547d\u4ee4\u6559\u7a0b")))),(0,a.kt)("h3",{id:"3git\u7b80\u660e\u6559\u7a0b"},"3.Git\u7b80\u660e\u6559\u7a0b"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rdc.hand-china.com/gitlab/HAP/hap-developer-guide/blob/master/git-guide.md"},"Git\u7b80\u660e\u6559\u7a0b-HAP")))),(0,a.kt)("h2",{id:"\u4e09\u5176\u4ed6\u8d44\u6599"},"\u4e09\u3001\u5176\u4ed6\u8d44\u6599"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://blog.163.com/wujiaxing009@126/blog/static/7198839920176275715927/"},"gitlab\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learngitbranching.js.org/"},"git\u5b66\u4e60\u2014\u2014\u95ef\u5173")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000043647307"},"\u88ab\u5410\u69fd GitHub\u4ed3 \u5e93\u592a\u5927\uff0c\u76f4\u63a5 600M \u7626\u8eab\u5230 6M\uff0c\u8fd9\u4e0b\u8212\u670d\u4e86"))))}k.isMDXComponent=!0}}]);