"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_label:"Git \u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",tags:["Git"]},a="Git \u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",c={unversionedId:"Backend/Git/Git\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",id:"Backend/Git/Git\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",title:"Git \u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",description:"\u63a8\u8350\u9605\u8bfb",source:"@site/docs/03-Backend/08-Git/907_Git\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf.md",sourceDirName:"03-Backend/08-Git",slug:"/Backend/Git/Git\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",permalink:"/notebook/docs/Backend/Git/Git\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/08-Git/907_Git\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf.md",tags:[{label:"Git",permalink:"/notebook/docs/tags/git"}],version:"current",sidebarPosition:907,frontMatter:{sidebar_label:"Git \u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf",tags:["Git"]},sidebar:"backendSideBar",previous:{title:"\u63d0\u4ea4\u81ea\u5df1\u7684\u4fee\u6539",permalink:"/notebook/docs/Backend/Git/\u63d0\u4ea4\u81ea\u5df1\u7684\u4fee\u6539"},next:{title:"\u4f7f\u7528Commitizen\u89c4\u8303Git\u7684CommitMessage",permalink:"/notebook/docs/Backend/Git/Git\u5f00\u53d1\u89c4\u7ea6/\u4f7f\u7528Commitizen\u89c4\u8303Git\u7684CommitMessage"}},l={},s=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-\u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf"},"Git \u4ed3\u5e93\u7a7a\u95f4\u7f29\u51cf"),(0,o.kt)("h2",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000043647307"},"\u88ab\u5410\u69fd GitHub\u4ed3 \u5e93\u592a\u5927\uff0c\u76f4\u63a5 600M \u7626\u8eab\u5230 6M\uff0c\u8fd9\u4e0b\u8212\u670d\u4e86")))))}d.isMDXComponent=!0}}]);