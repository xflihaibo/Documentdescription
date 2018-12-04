## 项目搭建总结

#### 编辑器：sublime text3：

> -   字体设置:"font_face": "Comic Sans MS",
> -   A File Icon
> -   Seti_UI
> -   Emmet

### 版本控制工具：Git,Svn

> -   新建 项目 查看历史记录
> -   新建分支，合并分支
> -   解决项目冲突
> -   回滚指定版本

### 合理的文件夹划分：

> -   controllers
> -   views
> -   tests
> -   models
> -   configs
> -   middleweares
> -   widgets

### 规范

> -   css 样式主题样式字体统一
> -   图片大小规范
> -   css,js 命名规范化

### css

-   css 编译器：less,sass, styles, postcss(推荐 cssnext) autoplayflex cssnano
-   css 格式化：reset.css normalize.css neat.css(推荐)
-   css 分层理论：(oocss 方便后期维护) SMACSS，ACSS
-   css:圣杯布局，动画，3d,bfc,ifc,gfc,
-   css 重排重绘 ,开启 3D 硬件加速(transform: translate3d(0,0,0)开启 GPU 处理器之外,我们也需要使用 -webkit-backface-visibility: hidden; 和-webkit-perspective: 1000)
-   css 语法和风格的检查工具清理：csslint,autoprefixer,cssnano, posttcss, uncss

### js

> -   框架 react, vue ,angular,zepto X-tag.js,moon.js san.js，apm.js, elm.js regx.js ...
> -   函数式编程 underscore.js,lodash.js
> -   es6：解构赋值，箭头函数，字符串模板，new Set(),new Map()，proxy, Reflect,Promise,class ....
> -   巧用设计模式：命令模式、代理模式、单例模式、职责链模式、发布订阅者模式
> -   js 法和风格的检查工具：jshint jslint、prettier

### NODE 后台开发

-   node : express,koa2
-   Router : Koa-router, koa-simple-router....
-   容错处理 404，500
-   全局监测错误
-   配置前端模版: swig,jade...
-   文档生成器 wiki： jsdoc, yaml(hologram)
-   收集错误请求 log：log4.js

### 其他

-   图片： tiny 压缩， cssicon, 小图合并
-   编译工具：webpack ,gulp,rollup,grunt,parcel,fis (打包，压缩，合并，生成版本戳，cdn， babel 编译，深度 tree-shaking，开启多核 cpu 压缩处理)
-   chrome : chrome 调试 ，性能插件 PageSpeed Insights for Chrome, prformance 工具的使用,使用 window.performance 分析性能瓶颈[分析地址](http://www.alloyteam.com/2015/09/explore-performance/)，跨域插件 Allow-Control-Allow-Origin:/\* ,
-   Eruda:移动端调试插件
-   离线缓存： localStorage (2.5MB 以上会卡顿 最大 5mb),local 扩容(postmessage)，cross-storage :本地库的扩容, crm 库
-   web 安全 :   xss 攻击,csrf,SQL 注入,cookie 安全

### 测试：

-   TDD：测试驱动开发（Test-Driven Development）
-   BDD：行为驱动开发（Behavior Driven Development）
    > -   1，单元测试 (Mocha+chai) kaima+mocha,jest
    > -   2，e2e 测试 selenium webdirver ,rize,nightwatchjs,
    > -   3，API 测试 mocha+chai (supertest) ,rize
    > -   4，UI 还原性测试 backstop.js 、uirecorder、 phantomcss,F2etest
    > -   5，性能测试:jmeter, grunt-perfbudget

### 上线阶段

-   持续集成平台：Travis ci, jenkins
-   微服务 docker 容器技术
-   部署工具：rsync,shell.js,yargs
-   网站监测:pm2 塞满线程,进程守护
-   nginx: 负载均衡，反向代理，开启 gzip 压缩, etag，expire 缓存，
-   liunx: ssh 免密登陆,配置 node 服务

### 性能优化

-   code：
    > -   前端性能优化:小字为先，navigator.sendBeacon("a.php") 埋点测速， DNS prefetch
    > -   雅虎军规
    > -   简化页面标签, 减少重排 重绘
    > -   精简 css uncss( 去除无用的 css)
    > -   精简 js 代码 巧用数据结构与算法
    > -   打包压缩合并 tree-shaking
    > -   开启 cnd 加速(并行最多 5 个)。节约 cookie 带宽 节约主域名的连接数，优化页面响应速度
    > -   开启页面懒加载
    > -   缓存静态资源文件 localstrage
-   nginx：
    > -   nginx 开启 gzip 压缩 etag expires 缓存
    > -   nginx 开启 反向代理 负载均衡
-   node：
    > -   合理利用压力测试工具
    > -   缓存 队列 内存泄露 耗时较长的代码
    > -   node 优化：内存泄漏 闭包，数组无线的扩大,Jimb Esser ,Dave Pacheco, Danny Coates, Felix Geisendörfer, Joyent ,memwatch+heapdump
    > -   没经过压力测试的 Node 代码基本只完成 10%
    > -   合理计算 QPS 未雨绸缪
