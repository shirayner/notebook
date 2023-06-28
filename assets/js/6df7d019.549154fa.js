"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>N});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,N=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(N,r(r({ref:t},k),{},{components:n})):a.createElement(N,r({ref:t},k))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const l={sidebar_label:"Git\u5f00\u53d1\u89c4\u7ea6",tags:["Git"]},r="Git\u5f00\u53d1\u89c4\u7ea6",o={unversionedId:"Backend/Git/Git\u5f00\u53d1\u89c4\u7ea6",id:"Backend/Git/Git\u5f00\u53d1\u89c4\u7ea6",title:"Git\u5f00\u53d1\u89c4\u7ea6",description:"\u524d\u8a00",source:"@site/docs/03-Backend/08-Git/900_Git\u5f00\u53d1\u89c4\u7ea6.md",sourceDirName:"03-Backend/08-Git",slug:"/Backend/Git/Git\u5f00\u53d1\u89c4\u7ea6",permalink:"/notebook/docs/Backend/Git/Git\u5f00\u53d1\u89c4\u7ea6",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/08-Git/900_Git\u5f00\u53d1\u89c4\u7ea6.md",tags:[{label:"Git",permalink:"/notebook/docs/tags/git"}],version:"current",sidebarPosition:900,frontMatter:{sidebar_label:"Git\u5f00\u53d1\u89c4\u7ea6",tags:["Git"]},sidebar:"backendSideBar",previous:{title:"gitmoji\u7684\u4f7f\u7528",permalink:"/notebook/docs/Backend/Git/gitmoji\u7684\u4f7f\u7528"},next:{title:"git-commit \u63d0\u4ea4\u89c4\u8303",permalink:"/notebook/docs/Backend/Git/git-commit\u63d0\u4ea4\u89c4\u8303"}},p={},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:2},{value:"\u4e00\u3001\u5206\u652f\u7ba1\u7406\u89c4\u8303",id:"\u4e00\u5206\u652f\u7ba1\u7406\u89c4\u8303",level:2},{value:"GitFlow",id:"gitflow",level:3},{value:"GitHubFlow",id:"githubflow",level:3},{value:"GitLabFlow",id:"gitlabflow",level:3},{value:"Choerodon",id:"choerodon",level:3},{value:"\u5206\u652f\u547d\u540d\u89c4\u7ea6",id:"\u5206\u652f\u547d\u540d\u89c4\u7ea6",level:3},{value:"\u4e8c\u3001\u63d0\u4ea4\u547d\u540d\u89c4\u7ea6",id:"\u4e8c\u63d0\u4ea4\u547d\u540d\u89c4\u7ea6",level:2},{value:"\u4e09\u3001\u5de5\u5177\u7684\u4f7f\u7528",id:"\u4e09\u5de5\u5177\u7684\u4f7f\u7528",level:2}],k={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git\u5f00\u53d1\u89c4\u7ea6"},"Git\u5f00\u53d1\u89c4\u7ea6"),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("h2",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.gitee.com/2019/04/25/gitee-branch/"},"\u4e00\u4e2a Git \u5206\u652f\u534f\u4f5c\u6a21\u5f0f\u7684\u8fdb\u5316\u6545\u4e8b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/oschina/gitee_best_practices/blob/master/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/%E7%A0%81%E4%BA%91Git%20flow%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E5%AE%9E%E8%B7%B5.md"},"\u7801\u4e91Git flow\u7684\u6700\u4f73\u56e2\u961f\u534f\u4f5c\u5b9e\u8df5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.zhihu.com/question/21209619/answer/257574960"},"\u5982\u4f55\u5199\u597d Git commit log?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/34223150"},"\u4f18\u96c5\u7684\u63d0\u4ea4\u4f60\u7684 Git Commit Message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000009048911"},"git commit \u89c4\u8303\u6307\u5357")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/y491887095/article/details/80594043"},"\u4f60\u53ef\u80fd\u4f1a\u5ffd\u7565\u7684 Git \u63d0\u4ea4\u89c4\u8303")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/Jason847/article/details/78617067"},"Git\u63d0\u4ea4\u65e5\u5fd7\u683c\u5f0f\u89c4\u7ea6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://researchlab.github.io/2019/09/14/git-comment-specs/"},"Git \u63d0\u4ea4\u65e5\u5fd7\u683c\u5f0f\u89c4\u7ea6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://choerodon.io/zh/docs/practice-specification-reference/development/branch-management/"},"choerodon_\u63d0\u4ea4\u547d\u540d\u89c4\u7ea6")))),(0,i.kt)("h2",{id:"\u4e00\u5206\u652f\u7ba1\u7406\u89c4\u8303"},"\u4e00\u3001\u5206\u652f\u7ba1\u7406\u89c4\u8303"),(0,i.kt)("p",null,"\u76ee\u524d\u6bd4\u8f83\u6d41\u884c\u7684\u5206\u652f\u7ba1\u7406\u6a21\u578b\u6709\u4e09\u4e2a\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"p"},"GitFlow"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"GitLabFlow"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"GitHubFlow"),"\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd\u8fd9\u4e09\u79cd\u5206\u652f\u6a21\u578b\u7684\u539f\u7406\uff0c\u4f7f\u7528\u573a\u666f\u548c\u4f18\u7f3a\u70b9\u7b49\u3002"),(0,i.kt)("h3",{id:"gitflow"},"GitFlow"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GitFlow")," \u662f\u6700\u65e9\u8bde\u751f\u5e76\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\u7684\u4e00\u79cd\u5de5\u4f5c\u6d41\u7a0b\u3002"),(0,i.kt)("p",null,"\u8be5\u6a21\u578b\u4e2d\u5b58\u5728\u4e24\u79cd\u957f\u671f\u5206\u652f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"master")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\u4e2d\u5b58\u653e\u5bf9\u5916\u53d1\u5e03\u7684\u7248\u672c\uff0c\u53ea\u6709\u7a33\u5b9a\u7684\u53d1\u5e03\u7248\u672c\u624d\u4f1a\u5408\u5e76\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\u4e2d\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"\u7528\u4e8e\u65e5\u5e38\u5f00\u53d1\uff0c\u5b58\u653e\u6700\u65b0\u7684\u5f00\u53d1\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u4e5f\u5b58\u5728\u4e09\u79cd\u4e34\u65f6\u5206\u652f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"feature"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hotfix"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature"),"\u5206\u652f\u662f\u4e3a\u4e86\u5f00\u53d1\u67d0\u4e2a\u7279\u5b9a\u529f\u80fd\uff0c\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"\u5206\u652f\u4e2d\u5207\u51fa\uff0c\u5f00\u53d1\u5b8c\u6210\u540e\u5408\u5e76\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"\u5206\u652f\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotfix"),"\u5206\u652f\u662f\u4fee\u590d\u53d1\u5e03\u540e\u53d1\u73b0\u7684Bug\u7684\u5206\u652f\uff0c\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5206\u652f\u4e2d\u5207\u51fa\uff0c\u4fee\u8865\u5b8c\u6210\u540e\u518d\u5408\u5e76\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"\u5206\u652f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"release"),"\u5206\u652f\u6307\u53d1\u5e03\u7a33\u5b9a\u7248\u672c\u524d\u4f7f\u7528\u7684\u9884\u53d1\u5e03\u5206\u652f\uff0c\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"\u5206\u652f\u4e2d\u5207\u51fa\uff0c\u9884\u53d1\u5e03\u5b8c\u6210\u540e\uff0c\u5408\u5e76\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5206\u652f\u4e2d\u3002")),(0,i.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature")," \u5206\u652f\u4f7f\u5f00\u53d1\u4ee3\u7801\u9694\u79bb\uff0c\u53ef\u4ee5\u72ec\u7acb\u7684\u5b8c\u6210\u5f00\u53d1\u3001\u6784\u5efa\u3001\u6d4b\u8bd5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature")," \u5206\u652f\u5f00\u53d1\u5468\u671f\u957f\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"release"),"\u65f6\uff0c\u53ef\u907f\u514d\u672a\u5b8c\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"feature"),"\u8fdb\u5165\u751f\u4ea7\u73af\u5883")),(0,i.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u652f\u6301\u6301\u7eed\u53d1\u5e03\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fc7\u4e8e\u590d\u6742\u7684\u5206\u652f\u7ba1\u7406\uff0c\u52a0\u91cd\u4e86\u5f00\u53d1\u8005\u7684\u8d1f\u62c5\uff0c\u4f7f\u5f00\u53d1\u8005\u4e0d\u80fd\u4e13\u6ce8\u5f00\u53d1\u3002")),(0,i.kt)("h3",{id:"githubflow"},"GitHubFlow"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GitHubFlow"),"\u5206\u652f\u6a21\u578b\u53ea\u5b58\u5728\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\u4e3b\u5206\u652f\uff0c\u65e5\u5e38\u5f00\u53d1\u90fd\u5408\u5e76\u81f3",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\uff0c\u6c38\u8fdc\u4fdd\u6301\u5176\u4e3a\u6700\u65b0\u7684\u4ee3\u7801\u4e14\u968f\u65f6\u53ef\u53d1\u5e03\u7684\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u9700\u8981\u6dfb\u52a0\u6216\u4fee\u6539\u4ee3\u7801\u65f6\uff0c \u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u521b\u5efa\u5206\u652f\uff0c\u63d0\u4ea4\u4fee\u6539\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"li"},"Pull Request"),"\uff0c\u6240\u6709\u4eba\u8ba8\u8bba\u548c\u5ba1\u67e5\u4f60\u7684\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e2d\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f85\u9a8c\u8bc1\u901a\u8fc7\u540e\u5408\u5e76\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5206\u652f\u4e2d\u3002")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5206\u652f\u6a21\u578b\u7684\u4f18\u52bf\u5728\u4e8e\u7b80\u6d01\u6613\u7406\u89e3\uff0c\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\u4f5c\u4e3a\u6838\u5fc3\u7684\u5206\u652f\uff0c\u4ee3\u7801\u66f4\u65b0\u6301\u7eed\u96c6\u6210\u81f3",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\u4e0a\u3002\u6839\u636e\u76ee\u524d\u6536\u96c6\u5230\u7684\u53cd\u5e94\u6765\u770b\uff0c\u5f97\u5230\u4e86\u66f4\u591a\u7684\u597d\u8bc4\uff0c\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"GitHubFlow"),"\u5206\u652f\u6a21\u578b\u66f4\u52a0\u8f7b\u4fbf\u5feb\u6377\u3002"),(0,i.kt)("h3",{id:"gitlabflow"},"GitLabFlow"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GitLabFlow")," \u662f",(0,i.kt)("inlineCode",{parentName:"p"},"GitFlow"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"GitHubFlow"),"\u7684\u7ed3\u5408,\u5b83\u5438\u53d6\u4e86\u4e24\u8005\u7684\u4f18\u70b9\uff0c\u65e2\u6709\u9002\u5e94\u4e0d\u540c\u5f00\u53d1\u73af\u5883\u7684\u5f39\u6027\uff0c\u53c8\u6709\u5355\u4e00\u4e3b\u5206\u652f\u7684\u7b80\u5355\u548c\u4fbf\u5229\u3002"),(0,i.kt)("p",null,"\u8be5\u6a21\u578b\u91c7\u53d6\u4e0a\u6e38\u4f18\u5148\u7684\u539f\u5219\uff0c\u5373\u53ea\u5b58\u5728\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"\u4e3b\u5206\u652f\uff0c\u5b83\u662f\u6240\u4ee5\u5206\u652f\u7684\u4e0a\u6e38\u3002\u53ea\u6709\u4e0a\u6e38\u5206\u652f\u91c7\u7eb3\u7684\u53d8\u52a8\u624d\u80fd\u5e94\u7528\u5230\u5176\u4ed6\u5206\u652f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6301\u7eed\u53d1\u5e03\u7684\u9879\u76ee\uff0c\u5efa\u8bae\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u4e4b\u5916\u518d\u5efa\u7acb\u5bf9\u5e94\u7684\u73af\u5883\u5206\u652f\uff0c\u5982\u9884\u751f\u4ea7\u73af\u5883",(0,i.kt)("inlineCode",{parentName:"li"},"pre-production"),"\uff0c\u751f\u4ea7\u73af\u5883",(0,i.kt)("inlineCode",{parentName:"li"},"production"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7248\u672c\u53d1\u5e03\u7684\u9879\u76ee\uff0c\u5efa\u8bae\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u521b\u5efa\u7a33\u5b9a\u7248\u672c\u5bf9\u5e94\u7684\u5206\u652f\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"stable-1"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"stable-2"),"\u3002")),(0,i.kt)("h3",{id:"choerodon"},"Choerodon"),(0,i.kt)("p",null,"Choerodon\u4e2d\u91c7\u53d6\u4e86GitHubFlow\u7684\u6a21\u5f0f\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u5206\u652f\u7c7b\u578b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u9886\u5230\u65e5\u5e38\u5f00\u53d1\u4efb\u52a1\u65f6\uff0c\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"li"},"feature"),"\u7279\u6027\u5f00\u53d1\u5206\u652f\uff0c\u63d0\u4ea4\u4ee3\u7801\u540e\uff0c\u5408\u5e76\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5e76\u5220\u9664",(0,i.kt)("inlineCode",{parentName:"li"},"feature"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u9886\u5230\u4fee\u590d\u6545\u969c\u7684\u4efb\u52a1\u65f6\uff0c\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"li"},"bugfix"),"\u6545\u969c\u4fee\u8865\u5206\u652f\uff0c\u63d0\u4ea4\u4ee3\u7801\u540e\uff0c\u5408\u5e76\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5e76\u5220\u9664",(0,i.kt)("inlineCode",{parentName:"li"},"bugfix"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u53d1\u5e03\u65f6\uff0c\u540c\u6837\u9700\u8981\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"li"},"release"),"\uff0c\u751f\u6210\u7684\u5e94\u7528\u7248\u672c\u90e8\u7f72\u5728UAT\u6d4b\u8bd5\u73af\u5883\u8fdb\u884c\u6d4b\u8bd5\uff0c\u82e5\u9700\u8981\u4fee\u6539\u5219\u63d0\u4ea4\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"release"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u4e0a\u7ebf\u540e\u53d1\u73b0\u6545\u969c\u9700\u8981\u7d27\u6025\u8fdb\u884c\u70ed\u4fee\u590d\u65f6\uff0c\u5219\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"tag"),"\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix"),"\uff0c\u5c06\u4fee\u590d\u7684\u4ee3\u7801\u63d0\u4ea4\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix"),"\uff1b\u90e8\u7f72\u8be5\u5206\u652f\u4e0a\u7684\u7248\u672c\u901a\u8fc7\u9a8c\u6536\u540e\uff0c\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix"),"\u6253\u51fa\u70ed\u4fee\u7248\u672c\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"tag"),"\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"0.8.1"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u65b0\u7248\u672c\u7684\u8fed\u4ee3\u4e5f\u540c\u65f6\u8fdb\u884c\uff0c\u6240\u4ee5\u9700\u8981\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix"),"\u4e0a",(0,i.kt)("inlineCode",{parentName:"li"},"rebase master"),"\uff0c\u53d8\u57fa\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5206\u652f\u6700\u65b0\u7684\u63d0\u4ea4\uff0c\u518d\u5408\u5e76\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u5e76\u5220\u9664",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix"),"\uff0c\u5c31\u53ef\u4ee5\u5c06\u672c\u6b21\u4fee\u6539\u7684\u63d0\u4ea4\u5e94\u7528\u81f3",(0,i.kt)("inlineCode",{parentName:"li"},"master"),"\u4e0a\u3002")),(0,i.kt)("h3",{id:"\u5206\u652f\u547d\u540d\u89c4\u7ea6"},"\u5206\u652f\u547d\u540d\u89c4\u7ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u524d\u7f00"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u542b\u4e49"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"master"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u5206\u652f\uff0c\u53ef\u7528\u7684\u3001\u7a33\u5b9a\u7684\u3001\u53ef\u76f4\u63a5\u53d1\u5e03\u7684\u7248\u672c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"develop"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u53d1\u4e3b\u5206\u652f\uff0c\u6700\u65b0\u7684\u4ee3\u7801\u5206\u652f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"feature-**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u529f\u80fd\u5f00\u53d1\u5206\u652f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bugfix-**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u672a\u53d1\u5e03bug\u4fee\u590d\u5206\u652f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"release-**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9884\u53d1\u5e03\u5206\u652f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hotfix-**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u53d1\u5e03bug\u4fee\u590d\u5206\u652f")))),(0,i.kt)("h2",{id:"\u4e8c\u63d0\u4ea4\u547d\u540d\u89c4\u7ea6"},"\u4e8c\u3001\u63d0\u4ea4\u547d\u540d\u89c4\u7ea6"),(0,i.kt)("p",null,"\u9664\u4e86\u5206\u652f\u7684\u540d\u79f0\u9700\u8981\u89c4\u8303\uff0c\u63d0\u4ea4\u7684\u547d\u540d\u4e5f\u540c\u6837\u5982\u6b64\u3002\u732a\u9f7f\u9c7c\u5e76\u6ca1\u6709\u628a\u8fd9\u4e2a\u89c4\u5219\u56fa\u5316\u5230\u7cfb\u7edf\u4e2d\uff0c\u9700\u8981\u56e2\u961f\u5171\u540c\u9075\u5b88\u3002"),(0,i.kt)("p",null,"\u683c\u5f0f\u4e3a\uff1a","[\u64cd\u4f5c\u7c7b\u578b]","\u64cd\u4f5c\u5bf9\u8c61\u540d\u79f0\uff0c\u5982","[ADD]","readme\uff0c\u4ee3\u8868\u589e\u52a0\u4e86readme\u63cf\u8ff0\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u64cd\u4f5c\u7c7b\u578b\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[IMP]"," \u63d0\u5347\u6539\u5584\u6b63\u5728\u5f00\u53d1\u6216\u8005\u5df2\u7ecf\u5b9e\u73b0\u7684\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"[FIX]"," \u4fee\u6b63BUG"),(0,i.kt)("li",{parentName:"ul"},"[REF]"," \u91cd\u6784\u4e00\u4e2a\u529f\u80fd\uff0c\u5bf9\u529f\u80fd\u91cd\u5199"),(0,i.kt)("li",{parentName:"ul"},"[ADD]"," \u6dfb\u52a0\u5b9e\u73b0\u65b0\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"[REM]"," \u5220\u9664\u4e0d\u9700\u8981\u7684\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"[WIP]"," work in process"),(0,i.kt)("li",{parentName:"ul"},"[TEST]"," \u65b0\u589e\u6216\u4fee\u6539\u6d4b\u8bd5\u7528\u4f8b"),(0,i.kt)("li",{parentName:"ul"},"[STYLE]"," style \u4ee3\u7801\u683c\u5f0f\u5316\u6539\u52a8\uff0c\u7f3a\u5c11\u5206\u53f7\u7b49")),(0,i.kt)("h2",{id:"\u4e09\u5de5\u5177\u7684\u4f7f\u7528"},"\u4e09\u3001\u5de5\u5177\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"\u5de5\u5177\u5217\u8868\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//github.com/commitizen/cz-cli"},"commitizen/cz-cli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//github.com/commitizen/cz-conventional-changelog"},"commitizen/cz-conventional-changelog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//github.com/conventional-changelog/standard-version"},"conventional-changelog/standard-version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//github.com/marionebl/commitlint"},"marionebl/commitlint")))),(0,i.kt)("p",null,"\u4f7f\u7528\u6559\u7a0b\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/dc3581887cbb"},"Java\u9879\u76ee\u5982\u4f55\u4f7f\u7528commitizen\u63d2\u4ef6")))))}u.isMDXComponent=!0}}]);