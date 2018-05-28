## http 相关

#### HTTP协议   TCP握手  http2.0  https
> HTTP协议（HyperText Transfer Protocol，超文本传输协议）是用于从WWW服务器传输超文本到本地浏览器的传送协议。它可以使浏览器更加高效，使网络传输减少。
> 它不仅保证计算机正确快速地传输超文本文档，还确定传输文档中的哪一部分，以及哪部分内容首先显示(如文本先于图形)等
> TCP协议对应于传输层，而HTTP协议对应于应用层
> Http协议是建立在TCP协议基础之上的，当浏览器需要从服务器获取网页数据的时候，会发出一次Http请求。
> 超文本传输安全协议（英语：Hyper Text Transfer Protocol over Secure Socket Layer，缩写HTTPS。也被称为HTTP over TLS，HTTP over SSL或HTTP Secure）。 上面说到的加密协议叫SSL，应用层（安全层） 传输层 网络层 数据链路层

#### 输入网址浏览器做了哪些
>*    DNS解析
>*    浏览器向服务器发送http请求
>*    服务器向浏览器发送html响应
>*    浏览器接收html响应
>*    浏览器处理html相应
>*    继续处理其他请求

#### 浏览器做了
>* HTML代码转化成DOM
>* CSS代码转化成CSSOM（CSS Object Model）
>* 结合DOM和CSSOM，生成一棵渲染树（包含每个节点的视觉信息）
>* 生成布局（layout），即将所有渲染树的所有节点进行平面合成
>* 将布局绘制（paint）在屏幕上

#### http协议
*    网络超文本协议传输
*    由 请求和响应组成
*    一次http操作称为一个事务
*    pequest-uri
*    cookie 服务器响应http 设置的生成
*    cookie 浏览器通过js设置的

#### http2
*   使用二进制传输
*   报头压缩
*   多路复用 一个网络连接实现并行请求
*   服务器主动推送,减少请求延迟

####   常见http状态码
``` javascript
     200 ok
     301 暂时本地重定向
     302 永久本地重定向
     304 本地缓存文件
     401 token 失效请求未经授权
     403  没有权限
     404  找不到文件
     405 请求方式错误 get post
     415 请求数据方式错误 json form
     500 server错误
     502 服务器挂了
     503 服务器不可用
     504 超时
```

#### 跨域
img ,script,iframe,link

#### 埋点
> navigator.sendBeacon('a.html')

## nginx 相关

###### 缓存
* 开启 etag on
* 开启 expires
* expires 30d;
* add_header Cache-Control no-cache;

###### 压缩
>* gizp:on
>* gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
>* gzip_vary on;是否在http header中添加Vary: Accept-Encoding，建议开启

###### nginx 负载均衡
>* Weight 默认为1,weight越大，负载的权重就越大

######  nginx 反向代理
```javacript
    upstream web_mgrsys {
        server 127.0.0.1:8090 weight=10;
        server 127.0.0.1:3000 weight=3;
    }
    proxy_pass http://web_mgrsys;
```

## chrome 相关
#### preformance.timing
![preformance](img/timing-overview.png)
初始化页面->重定向时间, 清除前一个页面 -> 缓存->DNS 解析->TCP  三次握手 四次挥手->向服务器发送请求->服务器响应返回请求->处理文件->加载

* navigationStart：当前浏览器窗口的前一个网页关闭，发生unload事件时的Unix毫秒时间戳。如果没有前一个网页，则等于fetchStart属性。
* unloadEventStart：如果前一个网页与当前网页属于同一个域名，则返回前一个网页的unload事件发生时的Unix毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为0。
* unloadEventEnd：如果前一个网页与当前网页属于同一个域名，则返回前一个网页unload事件的回调函数结束时的Unix毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为0。
* redirectStart：返回第一个HTTP跳转开始时的Unix毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为0。
* redirectEnd：返回最后一个HTTP跳转结束时（即跳转回应的最后一个字节接受完成时）的Unix毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为0。
* fetchStart：返回浏览器准备使用HTTP请求读取文档时的Unix毫秒时间戳。该事件在网页查询本地缓存之前发生。
* domainLookupStart：返回域名查询开始时的Unix毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于fetchStart属性的值。
* domainLookupEnd：返回域名查询结束时的Unix毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于fetchStart属性的值。
* connectStart：返回HTTP请求开始向服务器发送时的Unix毫秒时间戳。如果使用持久连接（persistent connection），则返回值等同于fetchStart属性的值。
* connectEnd：返回浏览器与服务器之间的连接建立时的Unix毫秒时间戳。如果建立的是持久连接，则返回值等同于fetchStart属性的值。连接建立指的是所有握手和认证过程全部结束。
* secureConnectionStart：返回浏览器与服务器开始安全链接的握手时的Unix毫秒时间戳。如果当前网页不要求安全连接，则返回0。
* requestStart：返回浏览器向服务器发出HTTP请求时（或开始读取本地缓存时）的Unix毫秒时间戳。
* responseStart：返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的Unix毫秒时间戳。
* responseEnd：返回浏览器从服务器收到（或从本地缓存读取）最后一个字节时（如果在此之前HTTP连接已经关闭，则返回关闭时）的Unix毫秒时间戳。
* domLoading：返回当前网页DOM结构开始解析时（即Document.readyState属性变为“loading”、相应的readystatechange事件触发时）的Unix毫秒时间戳。
* domInteractive：返回当前网页DOM结构结束解析、开始加载内嵌资源时（即Document.readyState属性变为“interactive”、相应的readystatechange事件触发时）的Unix毫秒时间戳。
* domContentLoadedEventStart：返回当前网页DOMContentLoaded事件发生时（即DOM结构解析完毕、所有脚本开始运行时）的Unix毫秒时间戳。
* domContentLoadedEventEnd：返回当前网页所有需要执行的脚本执行完成时的Unix毫秒时间戳。
* domComplete：返回当前网页DOM结构生成时（即Document.readyState属性变为“complete”，以及相应的readystatechange事件发生时）的Unix毫秒时间戳。
* loadEventStart：返回当前网页load事件的回调函数开始时的Unix毫秒时间戳。如果该事件还没有发生，返回0。
* loadEventEnd：返回当前网页load事件的回调函数运行结束时的Unix毫秒时间戳。如果该事件还没有发生，返回0。



#### Sumary chrome浏览器
>* 蓝色:网络通信 
>* 黄色:javascript执行
>* 紫色:样式计算 重排
>* 绿色:重绘

#### 浏览器性能优化工具
* page speed
* profiles
* Make the web faster
* 性能魔方(第三方网站)
* benchmark  js性能跑分

### 性能优化 小字为先
* 简化页面标签, 减少重排 重绘
* 精简css 
* 打包压缩合并 
* 开启cnd加速(最多5个)。节约cookie带宽  节约主域名的连接数，优化页面响应速度
* 开启懒加载
* 缓存静态资源文件
* 开启 etag expires









