(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{536:function(s,n,a){"use strict";a.r(n);var e=a(16),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("blockquote",[a("p",[s._v("Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.")])]),s._v(" "),a("p",[a("a",{attrs:{href:"redis.io"}},[s._v("官网")])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[a("strong",[s._v("安装C语言环境")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试")]),s._v("\ngcc --verison\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("解压redis-6.2.1.tar.gz")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-6.2.1.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-6.2.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编译redis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若编译失败，执行make distclean，再进行make")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#跳过make test,执行make install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("默认安装目录")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试是否安装成功")]),s._v("\nredis-cli\n\nredis-benchmark:性能测试工具，可以在自己本子运行，看看自己本子性能如何\nredis-check-aof：修复有问题的AOF文件，rdb和aof后面讲\nredis-check-dump：修复有问题的dump.rdb文件\nredis-sentinel：Redis集群使用\nredis-server：Redis服务器启动命令\nredis-cli：客户端，操作入口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("p",[a("strong",[s._v("不推荐前台启动")])]),s._v(" "),a("blockquote",[a("p",[s._v("前台启动，命令行窗口不能关闭，否则服务器停止")])]),s._v(" "),a("p",[a("strong",[s._v("推荐后台启动")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份reids.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("  /opt/redis-6.2.1/redis.conf  /root/myredis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注释掉 bind 127.0.0.1 ::1 ，不然只能本机（linux）连接，不支持远程连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#protect-mode yes 改成 no，用于无密码登录，并允许连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#daemonize no 改成 yes，允许服务在后天运行")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis启动")]),s._v("\nredis-server /root/myredis/redis.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端访问")]),s._v("\nredis-cli\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis单实例关闭（无集群）")]),s._v("\nredis-cli "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者使用kill -9杀掉进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7420")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis多实例关闭（集群）使用端口号")]),s._v("\nredis-cli -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vikicoco.github.io/pages/368a0b/#%E5%AE%89%E8%A3%85redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker安装配置redis"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);