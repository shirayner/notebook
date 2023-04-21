"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[5599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=o,y=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},35130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_label:"\u8d44\u6e90\u5e16",tags:["InnoDB"]},l="InnoDB\u8d44\u6e90\u5e16",c={unversionedId:"Backend/DataBase/Mysql/InnoDB/\u8d44\u6e90\u5e16",id:"Backend/DataBase/Mysql/InnoDB/\u8d44\u6e90\u5e16",title:"InnoDB\u8d44\u6e90\u5e16",description:"[toc]",source:"@site/docs/03-Backend/02-DataBase/01-Mysql/02-InnoDB/00_\u8d44\u6e90\u5e16.md",sourceDirName:"03-Backend/02-DataBase/01-Mysql/02-InnoDB",slug:"/Backend/DataBase/Mysql/InnoDB/\u8d44\u6e90\u5e16",permalink:"/notebook/docs/Backend/DataBase/Mysql/InnoDB/\u8d44\u6e90\u5e16",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/02-DataBase/01-Mysql/02-InnoDB/00_\u8d44\u6e90\u5e16.md",tags:[{label:"InnoDB",permalink:"/notebook/docs/tags/inno-db"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"\u8d44\u6e90\u5e16",tags:["InnoDB"]},sidebar:"backendSideBar",previous:{title:"InnoDB",permalink:"/notebook/docs/category/innodb"},next:{title:"\u4f53\u7cfb\u67b6\u6784",permalink:"/notebook/docs/Backend/DataBase/Mysql/InnoDB/\u4f53\u7cfb\u67b6\u6784"}},i={},s=[{value:"\u4e00\u3001\u5b98\u65b9\u8d44\u6599",id:"\u4e00\u5b98\u65b9\u8d44\u6599",level:2},{value:"\u4e8c\u3001\u63a8\u8350\u4e66\u7c4d",id:"\u4e8c\u63a8\u8350\u4e66\u7c4d",level:2},{value:"\u4e09\u3001\u7cbe\u9009\u8d44\u6599",id:"\u4e09\u7cbe\u9009\u8d44\u6599",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"innodb\u8d44\u6e90\u5e16"},"InnoDB\u8d44\u6e90\u5e16"),(0,o.kt)("p",null,"[toc]"),(0,o.kt)("h2",{id:"\u4e00\u5b98\u65b9\u8d44\u6599"},"\u4e00\u3001\u5b98\u65b9\u8d44\u6599"),(0,o.kt)("h2",{id:"\u4e8c\u63a8\u8350\u4e66\u7c4d"},"\u4e8c\u3001\u63a8\u8350\u4e66\u7c4d"),(0,o.kt)("h2",{id:"\u4e09\u7cbe\u9009\u8d44\u6599"},"\u4e09\u3001\u7cbe\u9009\u8d44\u6599"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-overview.html"},"MySQL\u77e5\u8bc6\u4f53\u7cfb\u8be6\u89e3_Java\u5168\u6808\u77e5\u8bc6\u4f53\u7cfb")),(0,o.kt)("li",{parentName:"ul"}))))}d.isMDXComponent=!0}}]);