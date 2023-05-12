"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8396],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>c});var s=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,l=function(e,n){if(null==e)return{};var t,s,l={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=s.createContext({}),d=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},_=function(e){var n=d(e.components);return s.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},T=s.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,_=a(e,["components","mdxType","originalType","parentName"]),m=d(t),T=l,c=m["".concat(i,".").concat(T)]||m[T]||u[T]||r;return t?s.createElement(c,o(o({ref:n},_),{},{components:t})):s.createElement(c,o({ref:n},_))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=T;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[m]="string"==typeof e?e:l,o[1]=a;for(var d=2;d<r;d++)o[d]=t[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}T.displayName="MDXCreateElement"},75339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(87462),l=(t(67294),t(3905));const r={sidebar_label:"\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",tags:["Mysql\u57fa\u7840"]},o="\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",a={unversionedId:"Backend/DataBase/Mysql/Mysql\u57fa\u7840/\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",id:"Backend/DataBase/Mysql/Mysql\u57fa\u7840/\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",title:"\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",description:"[toc]",source:"@site/docs/03-Backend/02-DataBase/01-Mysql/01-Mysql\u57fa\u7840/09_\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e.md",sourceDirName:"03-Backend/02-DataBase/01-Mysql/01-Mysql\u57fa\u7840",slug:"/Backend/DataBase/Mysql/Mysql\u57fa\u7840/\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",permalink:"/notebook/docs/Backend/DataBase/Mysql/Mysql\u57fa\u7840/\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",draft:!1,editUrl:"https://github.com/shirayner/notebook/tree/master/docs/03-Backend/02-DataBase/01-Mysql/01-Mysql\u57fa\u7840/09_\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e.md",tags:[{label:"Mysql\u57fa\u7840",permalink:"/notebook/docs/tags/mysql\u57fa\u7840"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e",tags:["Mysql\u57fa\u7840"]},sidebar:"backendSideBar",previous:{title:"\u6570\u636e\u5e93\u7684\u5907\u4efd\u4e0e\u6062\u590d",permalink:"/notebook/docs/Backend/DataBase/Mysql/Mysql\u57fa\u7840/\u6570\u636e\u5e93\u7684\u5907\u4efd\u4e0e\u6062\u590d"},next:{title:"\u590d\u5236",permalink:"/notebook/docs/Backend/DataBase/Mysql/Mysql\u57fa\u7840/\u590d\u5236"}},i={},d=[{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:2},{value:"\u547d\u4ee4\u6e05\u5355",id:"\u547d\u4ee4\u6e05\u5355",level:2},{value:"1.\u6570\u636e\u51c6\u5907",id:"1\u6570\u636e\u51c6\u5907",level:2},{value:"1.1 \u5f00\u542fbinlog",id:"11-\u5f00\u542fbinlog",level:3},{value:"1.2 \u51c6\u5907\u6570\u636e\u5e93",id:"12-\u51c6\u5907\u6570\u636e\u5e93",level:3},{value:"2.\u6570\u636e\u8bef\u64cd\u4f5c",id:"2\u6570\u636e\u8bef\u64cd\u4f5c",level:2},{value:"2.1 \u65b0\u589e\u6570\u636e",id:"21-\u65b0\u589e\u6570\u636e",level:3},{value:"2.2 \u5220\u5e93",id:"22-\u5220\u5e93",level:3},{value:"3.\u6570\u636e\u5e93\u6062\u590d",id:"3\u6570\u636e\u5e93\u6062\u590d",level:2},{value:"3.1 \u5237\u65b0binlog",id:"31-\u5237\u65b0binlog",level:3},{value:"3.2 \u67e5\u770bbinlog\u65e5\u5fd7\u5185\u5bb9",id:"32-\u67e5\u770bbinlog\u65e5\u5fd7\u5185\u5bb9",level:3},{value:"3.2 \u5bfc\u5165\u5168\u91cf\u5907\u4efd\u6570\u636e",id:"32-\u5bfc\u5165\u5168\u91cf\u5907\u4efd\u6570\u636e",level:3},{value:"3.3 \u4ecebinlog\u6062\u590d\u589e\u91cf\u6570\u636e",id:"33-\u4ecebinlog\u6062\u590d\u589e\u91cf\u6570\u636e",level:3}],_={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,s.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e"},"\u4ecebinlog\u6062\u590d\u6570\u636e\u5e93\u6570\u636e"),(0,l.kt)("p",null,"[toc]"),(0,l.kt)("h2",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/aeroleo/article/details/77929917"},"\u4f7f\u7528mysql\u7684binlog\u6062\u590d\u8bef\u64cd\u4f5c(update|delete)\u7684\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/YCcc/p/10825870.html"},"Mysql \u901a\u8fc7binlog\u65e5\u5fd7\u6062\u590d\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learnku.com/articles/20702"},"MySQL \u901a\u8fc7 binlog \u6062\u590d\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"}))),(0,l.kt)("h2",{id:"\u547d\u4ee4\u6e05\u5355"},"\u547d\u4ee4\u6e05\u5355"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe  C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\\mysql-bin.000001\n\nC:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqldump.exe -uroot -proot ailanni >C:\\Users\\shira\\Desktop\\Mess\\ailanni.sql\n\n\nC:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysql -uroot -proot ailanni<C:\\Users\\shira\\Desktop\\Mess\\ailanni.sql\n\n\nC:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe  -help\n\nC:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe  C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\\mysql-bin.000005 >d:\\1.txt\n\n\nC:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe \xa0--start-date="2020-06-08 19:30:00" --stop-date="2020-06-08 22:00:00" C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\\mysql-bin.000006 |mysql -uroot -proot\n\n\nflush logs;\nshow master logs;\n\n\nC:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe --base64-output=decode-rows -v  C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\\mysql-bin.000003\n\n\n')),(0,l.kt)("h2",{id:"1\u6570\u636e\u51c6\u5907"},"1.\u6570\u636e\u51c6\u5907"),(0,l.kt)("h3",{id:"11-\u5f00\u542fbinlog"},"1.1 \u5f00\u542fbinlog"),(0,l.kt)("p",null,"\u67e5\u770b\u662f\u5426\u5f00\u59cbbinlog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql>  show variables like 'log_bin';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| log_bin       | ON    |\n+---------------+-------+\n1 row in set, 1 warning (0.00 sec)\n")),(0,l.kt)("p",null,"\u82e5\u6ca1\u6709\u5f00\u542f\uff0c\u5219\u9700\u8981\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"my.ini")," \uff0c\u5f00\u542fbinlog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"[mysql]\n# \u8bbe\u7f6emysql\u5ba2\u6237\u7aef\u9ed8\u8ba4\u5b57\u7b26\u96c6\ndefault-character-set=utf8\n[mysqld]\n# 1 \u8868\u793a\u5ffd\u7565\u5927\u5c0f\u5199\uff0c0\u8868\u793a\u89e3\u6790\u5927\u5c0f\u5199\nlower_case_table_names=1\n#\u8bbe\u7f6e3306\u7aef\u53e3\nport = 3306 \n# \u8bbe\u7f6emysql\u7684\u5b89\u88c5\u76ee\u5f55\nbasedir=C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\n# \u8bbe\u7f6emysql\u6570\u636e\u5e93\u7684\u6570\u636e\u7684\u5b58\u653e\u76ee\u5f55\ndatadir=C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\n# \u5141\u8bb8\u6700\u5927\u8fde\u63a5\u6570\nmax_connections=200\n# \u670d\u52a1\u7aef\u4f7f\u7528\u7684\u5b57\u7b26\u96c6\u9ed8\u8ba4\u4e3a8\u6bd4\u7279\u7f16\u7801\u7684latin1\u5b57\u7b26\u96c6\ncharacter-set-server=utf8\n# \u521b\u5efa\u65b0\u8868\u65f6\u5c06\u4f7f\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce\ndefault-storage-engine=INNODB\n# \u5f00\u542fbinlog\nlog-bin=mysql-bin\nbinlog-format=Row\nserver-id=1001\n")),(0,l.kt)("h3",{id:"12-\u51c6\u5907\u6570\u636e\u5e93"},"1.2 \u51c6\u5907\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\uff081\uff09\u51c6\u5907\u5982\u4e0b\u6570\u636e\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create database test_binlog;\nuse test_binlog;\n\n-- ----------------------------\n-- Structure of user\n-- ----------------------------\nDROP TABLE IF EXISTS `user`;\nCREATE TABLE `user`  (\n  `id` int(11) NOT NULL,\n  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,\n  PRIMARY KEY (`id`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;\n\n-- ----------------------------\n-- Records of user\n-- ----------------------------\nINSERT INTO `user` VALUES (1, 'tom1');\nINSERT INTO `user` VALUES (2, 'tom2');\nINSERT INTO `user` VALUES (3, 'tom3');\nINSERT INTO `user` VALUES (4, 'tom4');\n")),(0,l.kt)("p",null,"\uff082\uff09\u5168\u91cf\u5907\u4efd\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqldump -uroot -proot test_binlog > D:\\test_binlog.sql\n")),(0,l.kt)("h2",{id:"2\u6570\u636e\u8bef\u64cd\u4f5c"},"2.\u6570\u636e\u8bef\u64cd\u4f5c"),(0,l.kt)("h3",{id:"21-\u65b0\u589e\u6570\u636e"},"2.1 \u65b0\u589e\u6570\u636e"),(0,l.kt)("p",null,"\u4e0a\u6b21\u5907\u4efd\u6570\u636e\u5e93\u4e4b\u540e\uff0c\u53c8\u65b0\u589e\u4e863\u6761\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `user` VALUES (5, 'tom5');\nINSERT INTO `user` VALUES (6, 'tom6');\nINSERT INTO `user` VALUES (7, 'tom7');\n")),(0,l.kt)("h3",{id:"22-\u5220\u5e93"},"2.2 \u5220\u5e93"),(0,l.kt)("p",null,"\u5220\u9664\u6570\u636e\u5e93"),(0,l.kt)("h2",{id:"3\u6570\u636e\u5e93\u6062\u590d"},"3.\u6570\u636e\u5e93\u6062\u590d"),(0,l.kt)("p",null,"\u53d1\u73b0\u6570\u636e\u5f02\u5e38\u4e4b\u540e\uff0c\u9996\u5148\u505c\u6b62mysql\u5bf9\u5916\u670d\u52a1\uff0c\u7136\u540e\u5c3d\u5feb\u6062\u590d\u6570\u636e"),(0,l.kt)("h3",{id:"31-\u5237\u65b0binlog"},"3.1 \u5237\u65b0binlog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"flush logs;\n")),(0,l.kt)("h3",{id:"32-\u67e5\u770bbinlog\u65e5\u5fd7\u5185\u5bb9"},"3.2 \u67e5\u770bbinlog\u65e5\u5fd7\u5185\u5bb9"),(0,l.kt)("p",null,"\uff081\uff09\u786e\u5b9a\u65e5\u5fd7\u5237\u65b0\u5230\u4e86\u54ea\u4e2a\u65e5\u5fd7\u6587\u4ef6\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show master status;\n+------------------+----------+--------------+------------------+-------------------+\n| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |\n+------------------+----------+--------------+------------------+-------------------+\n| mysql-bin.000002 |      154 |              |                  |                   |\n+------------------+----------+--------------+------------------+-------------------+\n1 row in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u67e5\u51fa\u6765\u7684\u662f mysql-bin.000002 \uff0c\u4f46\u662f\u4e0a\u9762\u7684\u65b0\u589e\u6570\u636e\u7684\u65e5\u5fd7\u5374\u662f\u8bb0\u5728 mysql-bin.000001 \u4e2d"),(0,l.kt)("p",null,"\uff082\uff09\u67e5\u770b binlog \u65e5\u5fd7\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe --base64-output=decode-rows -v  C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\\mysql-bin.000001 >D:binlog.txt\n")),(0,l.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=1*/;\n/*!50003 SET @OLD_COMPLETION_TYPE=@@COMPLETION_TYPE,COMPLETION_TYPE=0*/;\nDELIMITER /*!*/;\n# at 4\n#200609  0:06:44 server id 1001  end_log_pos 123 CRC32 0x6455468b  Start: binlog v 4, server v 5.7.27-log created 200609  0:06:44\n# at 123\n#200609  0:06:44 server id 1001  end_log_pos 154 CRC32 0xec2b6a24  Previous-GTIDs\n# [empty]\n# at 154\n#200609  0:07:04 server id 1001  end_log_pos 219 CRC32 0xfcc4f5f3  Anonymous_GTID last_committed=0 sequence_number=1 rbr_only=no\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 219\n#200609  0:07:04 server id 1001  end_log_pos 360 CRC32 0x8e9bd5f5  Query thread_id=25 exec_time=0 error_code=0\nuse `test_binlog`/*!*/;\nSET TIMESTAMP=1591632424/*!*/;\nSET @@session.pseudo_thread_id=25/*!*/;\nSET @@session.foreign_key_checks=1, @@session.sql_auto_is_null=0, @@session.unique_checks=1, @@session.autocommit=1/*!*/;\nSET @@session.sql_mode=1436549152/*!*/;\nSET @@session.auto_increment_increment=1, @@session.auto_increment_offset=1/*!*/;\n/*!\\C utf8mb4 *//*!*/;\nSET @@session.character_set_client=45,@@session.collation_connection=45,@@session.collation_server=33/*!*/;\nSET @@session.lc_time_names=0/*!*/;\nSET @@session.collation_database=DEFAULT/*!*/;\nDROP TABLE IF EXISTS `user` /* generated by server */\n/*!*/;\n# at 360\n#200609  0:07:04 server id 1001  end_log_pos 425 CRC32 0x14bef1d3  Anonymous_GTID last_committed=1 sequence_number=2 rbr_only=no\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 425\n#200609  0:07:04 server id 1001  end_log_pos 774 CRC32 0xcb88a198  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632424/*!*/;\nCREATE TABLE `user`  (\n\n  `id` int(11) NOT NULL,\n\n  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,\n\n  PRIMARY KEY (`id`) USING BTREE\n\n) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic\n/*!*/;\n# at 774\n#200609  0:07:04 server id 1001  end_log_pos 839 CRC32 0x57325aad  Anonymous_GTID last_committed=2 sequence_number=3 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 839\n#200609  0:07:04 server id 1001  end_log_pos 918 CRC32 0x7588143b  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632424/*!*/;\nBEGIN\n/*!*/;\n# at 918\n#200609  0:07:04 server id 1001  end_log_pos 975 CRC32 0x5895b86f  Table_map: `test_binlog`.`user` mapped to number 125\n# at 975\n#200609  0:07:04 server id 1001  end_log_pos 1021 CRC32 0x6c81100d  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=1\n###   @2='tom1'\n# at 1021\n#200609  0:07:04 server id 1001  end_log_pos 1052 CRC32 0xeb25a146  Xid = 1358\nCOMMIT/*!*/;\n# at 1052\n#200609  0:07:04 server id 1001  end_log_pos 1117 CRC32 0x16e08c04  Anonymous_GTID last_committed=3 sequence_number=4 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 1117\n#200609  0:07:04 server id 1001  end_log_pos 1196 CRC32 0xcd874a31  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632424/*!*/;\nBEGIN\n/*!*/;\n# at 1196\n#200609  0:07:04 server id 1001  end_log_pos 1253 CRC32 0xa76f2efc  Table_map: `test_binlog`.`user` mapped to number 125\n# at 1253\n#200609  0:07:04 server id 1001  end_log_pos 1299 CRC32 0x698dbef3  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=2\n###   @2='tom2'\n# at 1299\n#200609  0:07:04 server id 1001  end_log_pos 1330 CRC32 0xfce65505  Xid = 1359\nCOMMIT/*!*/;\n# at 1330\n#200609  0:07:04 server id 1001  end_log_pos 1395 CRC32 0x2e69f767  Anonymous_GTID last_committed=4 sequence_number=5 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 1395\n#200609  0:07:04 server id 1001  end_log_pos 1474 CRC32 0x29dc80cb  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632424/*!*/;\nBEGIN\n/*!*/;\n# at 1474\n#200609  0:07:04 server id 1001  end_log_pos 1531 CRC32 0x320bc644  Table_map: `test_binlog`.`user` mapped to number 125\n# at 1531\n#200609  0:07:04 server id 1001  end_log_pos 1577 CRC32 0xcb6d04d8  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=3\n###   @2='tom3'\n# at 1577\n#200609  0:07:04 server id 1001  end_log_pos 1608 CRC32 0xdcef7392  Xid = 1360\nCOMMIT/*!*/;\n# at 1608\n#200609  0:07:04 server id 1001  end_log_pos 1673 CRC32 0xfb1b83be  Anonymous_GTID last_committed=5 sequence_number=6 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 1673\n#200609  0:07:04 server id 1001  end_log_pos 1752 CRC32 0x1224a7a3  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632424/*!*/;\nBEGIN\n/*!*/;\n# at 1752\n#200609  0:07:04 server id 1001  end_log_pos 1809 CRC32 0xcdaf7615  Table_map: `test_binlog`.`user` mapped to number 125\n# at 1809\n#200609  0:07:04 server id 1001  end_log_pos 1855 CRC32 0xa1c92a83  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=4\n###   @2='tom4'\n# at 1855\n#200609  0:07:04 server id 1001  end_log_pos 1886 CRC32 0x53a3dd53  Xid = 1361\nCOMMIT/*!*/;\n# at 1886\n#200609  0:07:23 server id 1001  end_log_pos 1951 CRC32 0xa01f8a88  Anonymous_GTID last_committed=6 sequence_number=7 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 1951\n#200609  0:07:23 server id 1001  end_log_pos 2030 CRC32 0x6206c951  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632443/*!*/;\nBEGIN\n/*!*/;\n# at 2030\n#200609  0:07:23 server id 1001  end_log_pos 2087 CRC32 0x76bdbb04  Table_map: `test_binlog`.`user` mapped to number 125\n# at 2087\n#200609  0:07:23 server id 1001  end_log_pos 2133 CRC32 0xd325ddfb  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=5\n###   @2='tom5'\n# at 2133\n#200609  0:07:23 server id 1001  end_log_pos 2164 CRC32 0xb3bc4e7b  Xid = 1392\nCOMMIT/*!*/;\n# at 2164\n#200609  0:07:23 server id 1001  end_log_pos 2229 CRC32 0x790753f8  Anonymous_GTID last_committed=7 sequence_number=8 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 2229\n#200609  0:07:23 server id 1001  end_log_pos 2308 CRC32 0x12642d91  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632443/*!*/;\nBEGIN\n/*!*/;\n# at 2308\n#200609  0:07:23 server id 1001  end_log_pos 2365 CRC32 0x33581063  Table_map: `test_binlog`.`user` mapped to number 125\n# at 2365\n#200609  0:07:23 server id 1001  end_log_pos 2411 CRC32 0xcf3b4e2a  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=6\n###   @2='tom6'\n# at 2411\n#200609  0:07:23 server id 1001  end_log_pos 2442 CRC32 0x00079e47  Xid = 1393\nCOMMIT/*!*/;\n# at 2442\n#200609  0:07:23 server id 1001  end_log_pos 2507 CRC32 0x33e375df  Anonymous_GTID last_committed=8 sequence_number=9 rbr_only=yes\n/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 2507\n#200609  0:07:23 server id 1001  end_log_pos 2586 CRC32 0x9c6081fa  Query thread_id=25 exec_time=0 error_code=0\nSET TIMESTAMP=1591632443/*!*/;\nBEGIN\n/*!*/;\n# at 2586\n#200609  0:07:23 server id 1001  end_log_pos 2643 CRC32 0x9808eeb0  Table_map: `test_binlog`.`user` mapped to number 125\n# at 2643\n#200609  0:07:23 server id 1001  end_log_pos 2689 CRC32 0x70c03a7d  Write_rows: table id 125 flags: STMT_END_F\n### INSERT INTO `test_binlog`.`user`\n### SET\n###   @1=7\n###   @2='tom7'\n# at 2689\n#200609  0:07:23 server id 1001  end_log_pos 2720 CRC32 0x2c115729  Xid = 1394\nCOMMIT/*!*/;\n# at 2720\n#200609  0:07:37 server id 1001  end_log_pos 2785 CRC32 0xc5d8a341  Anonymous_GTID last_committed=9 sequence_number=10 rbr_only=no\nSET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;\n# at 2785\n#200609  0:07:37 server id 1001  end_log_pos 2916 CRC32 0x6952c4bd  Query thread_id=32 exec_time=0 error_code=0\nSET TIMESTAMP=1591632457/*!*/;\nSET @@session.pseudo_thread_id=32/*!*/;\nDROP TABLE `user` /* generated by server */\n/*!*/;\n# at 2916\n#200609  0:07:51 server id 1001  end_log_pos 2963 CRC32 0x77e3f9cb  Rotate to mysql-bin.000002  pos: 4\nSET @@SESSION.GTID_NEXT= 'AUTOMATIC' /* added by mysqlbinlog */ /*!*/;\nDELIMITER ;\n# End of log file\n/*!50003 SET COMPLETION_TYPE=@OLD_COMPLETION_TYPE*/;\n/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=0*/;\n\n")),(0,l.kt)("h3",{id:"32-\u5bfc\u5165\u5168\u91cf\u5907\u4efd\u6570\u636e"},"3.2 \u5bfc\u5165\u5168\u91cf\u5907\u4efd\u6570\u636e"),(0,l.kt)("p",null,"\u5148\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u7136\u540e\u5bfc\u5165\u5168\u91cf\u5907\u4efd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -uroot -proot test_binlog < D:\\test_binlog.sql\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u67e5\u8be2\u6570\u636e\uff0c\u53d1\u73b0\u5168\u91cf\u5907\u4efd\u6570\u636e\u5df2\u7ecf\u5bfc\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from user;\n+----+------+\n| id | name |\n+----+------+\n|  1 | tom1 |\n|  2 | tom2 |\n|  3 | tom3 |\n|  4 | tom4 |\n+----+------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("h3",{id:"33-\u4ecebinlog\u6062\u590d\u589e\u91cf\u6570\u636e"},"3.3 \u4ecebinlog\u6062\u590d\u589e\u91cf\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\bin\\mysqlbinlog.exe \xa0--start-datetime="20-06-09  0:07:23" --stop-datetime="20-06-09  0:07:24"  --database=test_binlog  C:\\dev-env\\Mysql\\mysql-5.7.27-winx64\\data\\mysql-bin.000001 |mysql -uroot -proot\n')),(0,l.kt)("p",null,"\u6b64\u65f6\u67e5\u8be2\u6570\u636e\uff0c\u53d1\u73b0\u589e\u91cf\u6570\u636e\u5df2\u7ecf\u6062\u590d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from user;\n+----+------+\n| id | name |\n+----+------+\n|  1 | tom1 |\n|  2 | tom2 |\n|  3 | tom3 |\n|  4 | tom4 |\n|  5 | tom5 |\n|  6 | tom6 |\n|  7 | tom7 |\n+----+------+\n7 rows in set (0.00 sec)\n")))}u.isMDXComponent=!0}}]);