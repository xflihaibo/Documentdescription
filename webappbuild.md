## 项目搭建总结
####  编辑器：sublime text3： 
>* 字体设置:"font_face": "Comic Sans MS",
>* A File Icon
>* Seti_UI
>* Emmet

###版本控制工具：Git,svn
 >* 新建 项目 查看历史记录
 >* 新建分支，合并分支
 >* 解决项目冲突
 >* 回滚指定版本

### 合理的文件夹划分：
>* controllers
>* views
>* assets
>* tests
>* models
>* configs
>* middleweares
>* widgets

### 规范
>* css 样式主题样式统一，间距统一
>* 图片大小规范

### css
* css编译器：less,sass, styles,  postcss(推荐cssnext)
* css 格式化：reset.css  normalize.css  neat.css(推荐)
* css 分层理论： SMACSS，ACSS
* css:圣杯布局，动画，3d,WorkFlow
* css语法和风格的检查工具：csslint
* css重排重绘 ,开启3D硬件加速(transform: translate3d(0,0,0)开启GPU处理器之外,我们也需要使用 -webkit-backface-visibility: hidden; 和-webkit-perspective: 1000)

### js
>* 框架   react, vue ,angular,zepto X-tag.js,moon.js san.js，apm.js, elm.js ...
>* 函数式编程 underscore.js,lodash.js
>* es6：解构赋值，箭头函数，字符串模板，new Set(),new Map()，proxy,Reflect,Promise...
>* 巧用设计模式：命令模式、代理模式、单例模式、职责链模式、发布订阅者模式
>* js法和风格的检查工具：jshint

### NODE 开发
* node  : express,koa2,egg
* Router : Koa-router, koa-simple-router....
* 容错处理 404，500
* 配置前端模版
* 文档生成器wiki： jsdoc, yaml(hologram)
* 收集错误请求log ：log4.js

### 其他
* 图片： tiny压缩， cssicon, 小图合并
* 编译工具：webpack ,gulp,rollup,grunt,parcel (打包，压缩，合并，生成版本戳，cnd， babel编译)
* chrome :  chrome调试 ，性能插件PageSpeed Insights for Chrome ，跨域插件Allow-Control-Allow-Origin:/* 
* Eruda:移动端调试插件
* 离线缓存： localStorage (2.5MB以上会卡顿 ),local扩容(postmessage)，cross-storage :本地库的扩容
* web安全 :   xss,csrf  SQL注入  cookie安全 

### 测试：
* TDD：测试驱动开发（Test-Driven Development）
* BDD：行为驱动开发（Behavior Driven Development）
>* 1，单元测试  (Mocha+chai)  kaima+mocha
>* 2，e2e测试 selenium webdirver  下载插件firefox    执行node  ./test/test.js   
>* 3，API测试  mocha+chai (supertest)  mocha  ./tests/test.js
>* 4，UI还原性测试   backstop.js 、uirecorder、nightwatchjs, phantomcss,F2etest
>* 5，性能测试:jmeter, grunt-perfbudget

### 上线阶段
* 持续集成平台：Travis ci, jenkins
* 微服务 docker
* 部署工具：rsync,shell.js,yargs
* nginx: 负载均衡，反向代理，开启gzip, etag，expire，
* liunx: 免密登陆,配置node 服务 

### 性能优化
* 前端性能优化:小字为先，navigator.sendBeacon("a.php") 埋点测速， 雅虎军规， DNS prefetch
* node优化：内存泄漏  闭包，数组无线的扩大,Jimb Esser ,Dave Pacheco, Danny Coates,  Felix Geisendörfer, Joyent ,memwatch+heapdump 
* 没经过压力测试的Node代码基本只完成10%
* 准确计算QPS 未雨绸缪
* 合理利用压力测试工具
* 缓存 队列 内存泄露 耗时较长的代码
* 准确计算QPS: wrk 
* pm2 性能监测