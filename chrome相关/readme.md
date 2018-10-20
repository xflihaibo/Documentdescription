## chrome 相关

#### preformance.timing

![preformance](../http相关/img/timing-overview.png)
初始化页面->重定向时间, 清除前一个页面 -> 缓存->DNS 解析->TCP 三次握手 四次挥手->向服务器发送请求->服务器响应返回请求->处理文件->加载

-   navigationStart：当前浏览器窗口的前一个网页关闭，发生 unload 事件时的 Unix 毫秒时间戳。如果没有前一个网页，则等于 fetchStart 属性。
-   unloadEventStart：如果前一个网页与当前网页属于同一个域名，则返回前一个网页的 unload 事件发生时的 Unix 毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为 0。
-   unloadEventEnd：如果前一个网页与当前网页属于同一个域名，则返回前一个网页 unload 事件的回调函数结束时的 Unix 毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为 0。
-   redirectStart：返回第一个 HTTP 跳转开始时的 Unix 毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为 0。
-   redirectEnd：返回最后一个 HTTP 跳转结束时（即跳转回应的最后一个字节接受完成时）的 Unix 毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为 0。
-   fetchStart：返回浏览器准备使用 HTTP 请求读取文档时的 Unix 毫秒时间戳。该事件在网页查询本地缓存之前发生。
-   domainLookupStart：返回域名查询开始时的 Unix 毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于 fetchStart 属性的值。
-   domainLookupEnd：返回域名查询结束时的 Unix 毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于 fetchStart 属性的值。
-   connectStart：返回 HTTP 请求开始向服务器发送时的 Unix 毫秒时间戳。如果使用持久连接（persistent connection），则返回值等同于 fetchStart 属性的值。
-   connectEnd：返回浏览器与服务器之间的连接建立时的 Unix 毫秒时间戳。如果建立的是持久连接，则返回值等同于 fetchStart 属性的值。连接建立指的是所有握手和认证过程全部结束。
-   secureConnectionStart：返回浏览器与服务器开始安全链接的握手时的 Unix 毫秒时间戳。如果当前网页不要求安全连接，则返回 0。
-   requestStart：返回浏览器向服务器发出 HTTP 请求时（或开始读取本地缓存时）的 Unix 毫秒时间戳。
-   responseStart：返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的 Unix 毫秒时间戳。
-   responseEnd：返回浏览器从服务器收到（或从本地缓存读取）最后一个字节时（如果在此之前 HTTP 连接已经关闭，则返回关闭时）的 Unix 毫秒时间戳。
-   domLoading：返回当前网页 DOM 结构开始解析时（即 Document.readyState 属性变为“loading”、相应的 readystatechange 事件触发时）的 Unix 毫秒时间戳。
-   domInteractive：返回当前网页 DOM 结构结束解析、开始加载内嵌资源时（即 Document.readyState 属性变为“interactive”、相应的 readystatechange 事件触发时）的 Unix 毫秒时间戳。
-   domContentLoadedEventStart：返回当前网页 DOMContentLoaded 事件发生时（即 DOM 结构解析完毕、所有脚本开始运行时）的 Unix 毫秒时间戳。
-   domContentLoadedEventEnd：返回当前网页所有需要执行的脚本执行完成时的 Unix 毫秒时间戳。
-   domComplete：返回当前网页 DOM 结构生成时（即 Document.readyState 属性变为“complete”，以及相应的 readystatechange 事件发生时）的 Unix 毫秒时间戳。
-   loadEventStart：返回当前网页 load 事件的回调函数开始时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。
-   loadEventEnd：返回当前网页 load 事件的回调函数运行结束时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。

#### Sumary chrome 浏览器

> -   蓝色:网络通信
> -   黄色:javascript 执行
> -   紫色:样式计算 重排
> -   绿色:重绘

#### 浏览器性能优化工具

-   pagespeed
-   profiles
-   Make the web faster
-   性能魔方(第三方网站)
-   benchmark js 性能跑分

### 性能优化 小字为先

> -   雅虎军规
> -   简化页面标签, 减少重排 重绘
> -   精简 css uncss( 去除无用的 css)
> -   精简 js 代码 巧用数据结构与算法
> -   打包压缩合并
> -   开启 cnd 加速(并行最多 5 个)。节约 cookie 带宽 节约主域名的连接数，优化页面响应速度
> -   开启懒加载
> -   缓存静态资源文件
> -   nginx 开启 gzip etag expires
> -   合理计算 qps
