"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9189],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||l;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={sidebar_label:"\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",tags:["ChatGpt","AIGC"]},i="\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",o={unversionedId:"Inbox/AIGC/ChatGpt/\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",id:"Inbox/AIGC/ChatGpt/\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",title:"\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",description:"\u63a8\u8350\u9605\u8bfb",source:"@site/docs/01-Inbox/03-AIGC/01-ChatGpt/09-\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui.md",sourceDirName:"01-Inbox/03-AIGC/01-ChatGpt",slug:"/Inbox/AIGC/ChatGpt/\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",permalink:"/notebook/docs/Inbox/AIGC/ChatGpt/\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/01-Inbox/03-AIGC/01-ChatGpt/09-\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui.md",tags:[{label:"ChatGpt",permalink:"/notebook/docs/tags/chat-gpt"},{label:"AIGC",permalink:"/notebook/docs/tags/aigc"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui",tags:["ChatGpt","AIGC"]},sidebar:"inboxSideBar",previous:{title:"OpenAI ChatGPT FineTuning\u6a21\u578b\u5fae\u8c03",permalink:"/notebook/docs/Inbox/AIGC/ChatGpt/OpenAI-ChatGPT-FineTuning\u6a21\u578b\u5fae\u8c03"},next:{title:"AI\u7ed8\u753b",permalink:"/notebook/docs/category/ai\u7ed8\u753b"}},p={},s=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"1.\u4e0b\u8f7d\u4ee3\u7801\u5e76\u5b89\u88c5\u4f9d\u8d56",id:"1\u4e0b\u8f7d\u4ee3\u7801\u5e76\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"2.\u9a8c\u8bc1pytorch\u662f\u5426\u4e3aGPU\u7248\u672c",id:"2\u9a8c\u8bc1pytorch\u662f\u5426\u4e3agpu\u7248\u672c",level:3},{value:"3.\u4e0b\u8f7d\u6a21\u578b",id:"3\u4e0b\u8f7d\u6a21\u578b",level:3},{value:"4.\u4fee\u6539\u914d\u7f6e",id:"4\u4fee\u6539\u914d\u7f6e",level:3},{value:"4.1 config.py",id:"41-configpy",level:4},{value:"4.2 app.py",id:"42-apppy",level:4},{value:"5.\u542f\u52a8\u9879\u76ee",id:"5\u542f\u52a8\u9879\u76ee",level:3}],c={toc:s},d="wrapper";function u(e){let{components:n,...l}=e;return(0,r.kt)(d,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u672c\u5730\u90e8\u7f72langchain-chatglm-webui"},"\u672c\u5730\u90e8\u7f72LangChain-ChatGLM-Webui"),(0,r.kt)("h2",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,r.kt)("p",null,"\u4ee3\u7801\u4ed3\u5e93\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/thomas-yanxin/LangChain-ChatGLM-Webui"},"thomas-yanxin/LangChain-ChatGLM-Webui"),"\uff1a\u57fa\u4e8eLangChain\u548cChatGLM-6B\u7b49\u7cfb\u5217LLM\u7684\u9488\u5bf9\u672c\u5730\u77e5\u8bc6\u5e93\u7684\u81ea\u52a8\u95ee\u7b54"))),(0,r.kt)("p",null,"\u63a8\u8350\u90e8\u7f72\u6587\u7ae0\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.datalearner.com/blog/1051680925189690"},"\u624b\u628a\u624b\u6559\u4f60\u672c\u5730\u90e8\u7f72\u6e05\u534e\u5927\u5b66\u7684ChatGLM-6B\u6a21\u578b\u2014\u2014Windows+6GB\u663e\u5361\u672c\u5730\u90e8\u7f72")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7219530344062582842"},"ChatGLM-6B (\u4ecb\u7ecd\u76f8\u5173\u6982\u5ff5\u3001\u57fa\u7840\u73af\u5883\u642d\u5efa\u53ca\u90e8\u7f72")))),(0,r.kt)("p",null,"\u4e91\u7aef\u90e8\u7f72\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1I84-fAAsb3_lRzQB-SDq9xit_0qWk2da"},"colab_PDF_Query_LLM.ipynb")),(0,r.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,r.kt)("h3",{id:"1\u4e0b\u8f7d\u4ee3\u7801\u5e76\u5b89\u88c5\u4f9d\u8d56"},"1.\u4e0b\u8f7d\u4ee3\u7801\u5e76\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n# \u521b\u5efa\u865a\u62df\u73af\u5883\nconda create -n langchain-chatglm python==3.10.11\nconda activate langchain-chatglm\n\n# \u514b\u9686\u4ee3\u7801\ngit clone https://github.com/thomas-yanxin/LangChain-ChatGLM-Webui.git\n# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd LangChain-ChatGLM-Webui\n\n# \u5b89\u88c5gradio\u7528\u4e8e\u542f\u52a8\u56fe\u5f62\u5316web\u754c\u9762\npip install gradio\n\n# \u5b89\u88c5\u4f9d\u8d56\npip install -r requirements.txt\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u51fa\u73b0\u5982\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("p",null,"\uff081\uff09  ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named 'torch' ")," \u7684\u62a5\u9519\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 torch \uff0c\u7136\u540e\u91cd\u8bd5\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install torchvision \n")),(0,r.kt)("p",null,"(2) UnicodeDecodeError: 'gbk' codec can't decode byte 0x80 in position 76: illegal multibyte sequence"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ERROR: Exception:\nTraceback (most recent call last):\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\cli\\base_command.py", line 169, in exc_logging_wrapper\n    status = run_func(*args)\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\cli\\req_command.py", line 248, in wrapper\n    return func(self, options, args)\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\commands\\install.py", line 342, in run\n    reqs = self.get_requirements(args, options, finder, session)\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\cli\\req_command.py", line 433, in get_requirements\n    for parsed_req in parse_requirements(\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\req\\req_file.py", line 148, in parse_requirements\n    for parsed_line in parser.parse(filename, constraint):\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\req\\req_file.py", line 335, in parse\n    yield from self._parse_and_recurse(filename, constraint)\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\req\\req_file.py", line 340, in _parse_and_recurse\n    for line in self._parse_file(filename, constraint):\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\req\\req_file.py", line 371, in _parse_file\n    _, content = get_file_content(filename, self._session)\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\req\\req_file.py", line 549, in get_file_content\n    content = auto_decode(f.read())\n  File "D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\pip\\_internal\\utils\\encoding.py", line 34, in auto_decode\n    return data.decode(\nUnicodeDecodeError: \'gbk\' codec can\'t decode byte 0x80 in position 76: illegal multibyte sequence\n')),(0,r.kt)("p",null,"\u6309\u63d0\u793a\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding.py")," \u4ee3\u7801"),(0,r.kt)("p",null,"\u5c06"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def auto_decode(data: bytes) -> str:\n    """Check a bytes string for a BOM to correctly detect the encoding\n\n    Fallback to locale.getpreferredencoding(False) like open() on Python3"""\n    for bom, encoding in BOMS:\n        if data.startswith(bom):\n            return data[len(bom) :].decode(encoding)\n    # Lets check the first two lines as in PEP263\n    for line in data.split(b"\\n")[:2]:\n        if line[0:1] == b"#" and ENCODING_RE.search(line):\n            result = ENCODING_RE.search(line)\n            assert result is not None\n            encoding = result.groups()[0].decode("ascii")\n            return data.decode(encoding)\n    return data.decode(locale.getpreferredencoding(False) or sys.getdefaultencoding(),)\n')),(0,r.kt)("p",null,"\u4fee\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\ndef auto_decode(data: bytes) -> str:\n    """Check a bytes string for a BOM to correctly detect the encoding\n\n    Fallback to locale.getpreferredencoding(False) like open() on Python3"""\n    for bom, encoding in BOMS:\n        if data.startswith(bom):\n            return data[len(bom) :].decode(encoding)\n    # Lets check the first two lines as in PEP263\n    for line in data.split(b"\\n")[:2]:\n        if line[0:1] == b"#" and ENCODING_RE.search(line):\n            result = ENCODING_RE.search(line)\n            assert result is not None\n            encoding = result.groups()[0].decode("ascii")\n            return data.decode(encoding)\n    return data.decode("utf-8")\n')),(0,r.kt)("p",null,"\uff083\uff09ERROR: Failed building wheel for detectron2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," running build_ext\n      D:\\Users\\r.shi\\dev-env\\python\\lib\\site-packages\\torch\\utils\\cpp_extension.py:359: UserWarning: Error checking compiler version for cl: [WinError 2] \u7cfb\u7edf\u627e\u4e0d\u5230\u6307\u5b9a\u7684\u6587\u4ef6\u3002\n        warnings.warn(f'Error checking compiler version for {compiler}: {error}')\n      building 'detectron2._C' extension\n      error: Microsoft Visual C++ 14.0 or greater is required. Get it with \"Microsoft C++ Build Tools\": https://visualstudio.microsoft.com/visual-cpp-build-tools/\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230606151145472",src:t(1728).Z,width:"1236",height:"623"})),(0,r.kt)("h3",{id:"2\u9a8c\u8bc1pytorch\u662f\u5426\u4e3agpu\u7248\u672c"},"2.\u9a8c\u8bc1pytorch\u662f\u5426\u4e3aGPU\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import torch\ntorch.cuda.is_available()  ## \u8f93\u51fa\u5e94\u8be5\u662fTrue\n")),(0,r.kt)("h3",{id:"3\u4e0b\u8f7d\u6a21\u578b"},"3.\u4e0b\u8f7d\u6a21\u578b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openi.pcl.ac.cn/Learning-Develop-Union/LangChain-ChatGLM-Webui/datasets"},"\u6a21\u578b\u56fd\u5185\u4e0b\u8f7d\u5730\u5740")),(0,r.kt)("p",null,"\u9700\u8981\u4e0b\u8f7d\u4e24\u4e2a\u6a21\u578b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"LLM\uff1achatglm-6b-int8.zip"),(0,r.kt)("li",{parentName:"ul"},"embedding\uff1atext2vec-base-chinese"))),(0,r.kt)("h3",{id:"4\u4fee\u6539\u914d\u7f6e"},"4.\u4fee\u6539\u914d\u7f6e"),(0,r.kt)("h4",{id:"41-configpy"},"4.1 config.py"),(0,r.kt)("p",null,"\u539f\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# model config\nembedding_model_dict = {\n  ...\n    "text2vec-base": "GanymedeNil/text2vec-base-chinese",\n  ...\n}\n\n\nllm_model_dict = {\n    "chatglm": {\n      ...\n        "ChatGLM-6B-int8": "THUDM/chatglm-6b-int8",\n      ...\n    },\n  ...\n}\n')),(0,r.kt)("p",null,"\u4fee\u6539\u4e24\u4e2a\u6a21\u578b\u7684\u8def\u5f84\uff0c\u6bd4\u5982\u6211\u5c06\u4e24\u4e2a\u6a21\u578b\u5206\u522b\u653e\u5230\u4e86\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"model/llm"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"model/embedding")," \u76ee\u5f55\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230606022651258",src:t(37221).Z,width:"662",height:"436"})),(0,r.kt)("p",null,"\u56e0\u6b64\u9700\u8981\u5c06\u8def\u5f84\u4fee\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n# model config\nembedding_model_dict = {\n  ...\n    "text2vec-base": "./model/embedding/text2vec-base-chinese",\n  ...\n}\n\n\nllm_model_dict = {\n    "chatglm": {\n      ...\n        "ChatGLM-6B-int8": "./model/llm/chatglm-6b-int8",\n      ...\n    },\n  ...\n}\n')),(0,r.kt)("h4",{id:"42-apppy"},"4.2 app.py"),(0,r.kt)("p",null,"\u5c06server_name\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," \u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")),(0,r.kt)("p",null,"\u539f\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    # threads to consume the request\n    demo.queue(concurrency_count=3) \\\n        .launch(server_name='0.0.0.0', # ip for listening, 0.0.0.0 for every inbound traffic, 127.0.0.1 for local inbound\n                server_port=7860, # the port for listening\n                show_api=False, # if display the api document\n                share=False, # if register a public url\n                inbrowser=False) # if browser would be open automatically\n\n")),(0,r.kt)("p",null,"\u4fee\u6539\u540e\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    # threads to consume the request\n    demo.queue(concurrency_count=3) \\\n        .launch(server_name='localhost', # ip for listening, localhost for every inbound traffic, 127.0.0.1 for local inbound\n                server_port=7860, # the port for listening\n                show_api=False, # if display the api document\n                share=False, # if register a public url\n                inbrowser=False) # if browser would be open automatically\n\n")),(0,r.kt)("h3",{id:"5\u542f\u52a8\u9879\u76ee"},"5.\u542f\u52a8\u9879\u76ee"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"python app.py"),"\u5373\u53ef\u8fd0\u884c\u9879\u76ee\uff0c\u542f\u52a8\u6210\u529f\u540e\uff0c\u4f1a\u5728\u63a7\u5236\u53f0\u6253\u5370\u524d\u7aef\u754c\u9762\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7860/"},"http://localhost:7860/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230606023444601",src:t(3187).Z,width:"697",height:"483"})),(0,r.kt)("p",null,"\u524d\u7aef\u754c\u9762\u5982\u4e0b\uff0c\u53ef\u4ee5\u4e0a\u4f20\u81ea\u5df1\u7684\u77e5\u8bc6\u5e93\u6587\u4ef6\uff0c\u652f\u6301txt\u3001docx\u3001md\u3001pdf\u7b49\u6587\u672c\u683c\u5f0f\u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230606024211329",src:t(21183).Z,width:"1606",height:"1394"})),(0,r.kt)("p",null,"\u5728\u771f\u6b63\u4f7f\u7528\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u9047\u5230\u5982\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("p",null,"(1) PDFInfoNotInstalledError"),(0,r.kt)("p",null,"\u5728\u4e0a\u4f20PDF\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5982\u4e0b PDFInfoNotInstalledError \u62a5\u9519\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pdf2image.exceptions.PDFInfoNotInstalledError: Unable to get page count. Is poppler installed and in PATH?\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6ca1\u6709\u5b89\u88c5 poppler \u4f9d\u8d56\u539f\u56e0\u5bfc\u81f4\u7684\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f9d\u8d56\uff0c\u95ee\u9898\u5f97\u5230\u89e3\u51b3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"conda install -c conda-forge poppler\n")),(0,r.kt)("p",null,"(2) ModuleNotFoundError: No module named 'nltk'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ModuleNotFoundError: No module named 'nltk'\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6ca1\u6709\u5b89\u88c5 nltk \u4f9d\u8d56\u5bfc\u81f4\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install nltk\n")),(0,r.kt)("p",null,"(3) ModuleNotFoundError: No module named 'sentence_transformers'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ModuleNotFoundError: No module named 'sentence_transformers'\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6ca1\u6709\u5b89\u88c5 sentence-transformers \u4f9d\u8d56\u5bfc\u81f4\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install sentence-transformers\n")),(0,r.kt)("p",null,"(4)ModuleNotFoundError: No module named 'duckduckgo_search'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ModuleNotFoundError: No module named 'duckduckgo_search'\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6ca1\u6709\u5b89\u88c5 duckduckgo_search \u4f9d\u8d56\u5bfc\u81f4\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," pip install duckduckgo\n")),(0,r.kt)("p",null,"(5) Could not find a version that satisfies the requirement duckduckgo_search==2.9.5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ERROR: Could not find a version that satisfies the requirement duckduckgo_search==2.9.5 (from versions: 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.9.5, 1.0, 1.1, 1.2, 1.3, 1.3.5, 1.4, 1.5, 1.5.1, 1.5.2, 1.6, 1.6.2, 1.7.1, 1.8, 1.8.1, 1.8.2, 2.0.2, 2.1.3, 2.2.0, 2.2.2, 2.3.0, 2.3.1, 2.4.0, 2.5.0, 2.6.0, 2.6.1, 2.7.0, 2.8.0, 2.8.1, 2.8.3, 2.8.4, 2.8.5, 2.8.6, 2.9.0, 2.9.1, 2.9.2, 2.9.3, 2.9.4)\nERROR: No matching distribution found for duckduckgo_search==2.9.5\n")),(0,r.kt)("p",null,"\u6ca1\u6709\u8fd9\u4e2a\u7248\u672c\u7684\u4f9d\u8d56\uff0c\u964d\u4f4e\u4f9d\u8d56\u5373\u53ef"),(0,r.kt)("p",null,"(3) \u5185\u5b58\u5360\u7528\u89e6\u53ca\u74f6\u9888\uff0c\u8fdb\u7a0b\u88ab\u7cfb\u7edf\u6740\u6389"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1685992422270",src:t(97631).Z,width:"718",height:"567"})),(0,r.kt)("p",null,"TODO\uff1a\u89e3\u51b3\u529e\u6cd5\u5f85\u7814\u7a76"))}u.isMDXComponent=!0},37221:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20230606022651258-868a271085aadf6fcd54070cf0b56ace.png"},3187:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20230606023444601-7470f545a4da272114b215aced030e5d.png"},21183:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20230606024211329-96dd1e4a4affd912c2cda5a14952ce69.png"},97631:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1685992422270-4b87d1e748f26b5155aea582c7ca88fd.png"},1728:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20230606151145472-63c14a6b125187a54e69d51facd3cf15.png"}}]);