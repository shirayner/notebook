"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={tags:["Mysql\u57fa\u7840"]},l="\u8d44\u6e90\u5e16",i={unversionedId:"Backend/Java/\u5b9e\u7528\u7c7b\u5e93/\u8d44\u6e90\u5e16",id:"Backend/Java/\u5b9e\u7528\u7c7b\u5e93/\u8d44\u6e90\u5e16",title:"\u8d44\u6e90\u5e16",description:"\u4e00\u3001\u5b98\u65b9\u8d44\u6599",source:"@site/docs/03-Backend/01-Java/02-\u5b9e\u7528\u7c7b\u5e93/00_\u8d44\u6e90\u5e16.md",sourceDirName:"03-Backend/01-Java/02-\u5b9e\u7528\u7c7b\u5e93",slug:"/Backend/Java/\u5b9e\u7528\u7c7b\u5e93/\u8d44\u6e90\u5e16",permalink:"/notebook/docs/Backend/Java/\u5b9e\u7528\u7c7b\u5e93/\u8d44\u6e90\u5e16",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/01-Java/02-\u5b9e\u7528\u7c7b\u5e93/00_\u8d44\u6e90\u5e16.md",tags:[{label:"Mysql\u57fa\u7840",permalink:"/notebook/docs/tags/mysql\u57fa\u7840"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Mysql\u57fa\u7840"]},sidebar:"backendSideBar",previous:{title:"Java\u5b9e\u7528\u7c7b\u5e93",permalink:"/notebook/docs/category/java\u5b9e\u7528\u7c7b\u5e93"},next:{title:"Java\u5e76\u53d1",permalink:"/notebook/docs/category/java\u5e76\u53d1"}},c={},p=[{value:"\u4e00\u3001\u5b98\u65b9\u8d44\u6599",id:"\u4e00\u5b98\u65b9\u8d44\u6599",level:2},{value:"\u4e8c\u3001\u7cbe\u9009\u8d44\u6599",id:"\u4e8c\u7cbe\u9009\u8d44\u6599",level:2},{value:"\u4e09\u3001\u53c2\u8003\u8d44\u6599",id:"\u4e09\u53c2\u8003\u8d44\u6599",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8d44\u6e90\u5e16"},"\u8d44\u6e90\u5e16"),(0,a.kt)("h2",{id:"\u4e00\u5b98\u65b9\u8d44\u6599"},"\u4e00\u3001\u5b98\u65b9\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/"},"dev.mysql.com"))),(0,a.kt)("h2",{id:"\u4e8c\u7cbe\u9009\u8d44\u6599"},"\u4e8c\u3001\u7cbe\u9009\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.runoob.com/mysql/mysql-tutorial.html"},"MySQL \u6559\u7a0b--\u83dc\u9e1f\u6559\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_35246620/article/details/70823903"},"\u53f2\u4e0a\u6700\u7b80\u5355\u7684 MySQL \u6559\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ntu.edu.sg/home/ehchua/programming/sql/mysql_beginner.html"},"MySQL by Examples for Beginners")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.javatpoint.com/mysql-tutorial"},"https://www.javatpoint.com/mysql-tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wizardforcel.gitbooks.io/w3school-db/content/"},"W3School \u6570\u636e\u5e93\u6559\u7a0b\u5408\u96c6"))),(0,a.kt)("h2",{id:"\u4e09\u53c2\u8003\u8d44\u6599"},"\u4e09\u3001\u53c2\u8003\u8d44\u6599"))}m.isMDXComponent=!0}}]);