## http 相关

#### HTTP协议   TCP三次握手四次挥手  http2.0  https
> HTTP协议（HyperText Transfer Protocol，超文本传输协议）是用于从WWW服务器传输超文本到本地浏览器的传送协议。它可以使浏览器更加高效，使网络传输减少。
> 它不仅保证计算机正确快速地传输超文本文档，还确定传输文档中的哪一部分，以及哪部分内容首先显示(如文本先于图形)等;Http协议是建立在TCP协议基础之上的应用层;当浏览器需要从服务器获取网页数据的时候，会发出一次Http请求。
> TCP协议对应于传输层，而HTTP协议对应于传输层协议, 通常用IP地址+端口号描述通信双方、server服务的提供方,client 服务的使用方;
> 超文本传输安全协议（英语：Hyper Text Transfer Protocol over Secure Socket Layer，缩写HTTPS。也被称为HTTP over TLS，HTTP over SSL或HTTP Secure）。 上面说到的加密协议叫SSL，应用层（安全层） 传输层 网络层 数据链路层

#### 输入网址浏览器做了哪些
>*    DNS解析
>*    浏览器向服务器发送http请求
>*    服务器向浏览器发送html响应
>*    浏览器接收html响应
>*    浏览器处理html相应
>*    继续处理其他请求

#### 浏览器做那些
>* HTML代码转化成DOM
>* CSS代码转化成CSSOM（CSS Object Model）
>* 结合DOM和CSSOM，生成一棵渲染树（包含每个节点的视觉信息）
>* 生成布局（layout），即将所有渲染树的所有节点进行平面合成
>* 将布局绘制（paint）在屏幕上

#### 影响http的因素：
>* 1.带宽
>* 2.延迟 浏览器阻塞 一个浏览器对于同一个域名只能有四个链接（不同的浏览器不一样），如果超过了会被阻塞
>* 3.dns 查询：浏览器建立链接是需要知道服务器IP地址的，DNS用来将域名解析为ip地址，可以通过刷新DNS缓存来加快速度
>* 4.建立链接：http协议是基于TCP的，即使网络，浏览器再快也得进行三次握手，在高延迟的网络环境下影响比较明显

#### http 缺陷
>* 1. 耗时：每次传输都要建立链接
>* 2.不安全：http是明文传输的，只要在路由器或者交换机上面截取，所有东西（账户，密码）都是可见的、采用wireshark抓包
>* 3.header内SPDY容太大：通常用户的请求header变化的概率很小，但是每次请求都要携带大量的header信息，导致传输成本增加
>* 4.keepalive压力太大：持久连接虽然有优点，但同时也会给服务器造成大量的性能压力，特别是传输图片的时候

#### SPDY
是Google开发的基于TCP的应用层协议，用以最小化网络延迟，提升网络速度，优化用户的网络使用体验。SPDY并不是一种用于替代HTTP的协议，而是对HTTP协议的增强。新协议的功能包括数据流的多路复用、请求优先级以及HTTP报头压缩。


#### SPDY：综合了HTTPS和HTTP两者优点
> 1.降低延迟：才用多路复用降低延迟
> 2.请求优先级：给request设置优先级，这样子重要的请求就会优先得到响应
> 3.头部压缩
> 4.服务端推送 ：比如我要请求一个style.css的文件，在客户端接收到这个数据的同时，服务器会把style.js文件推送给客户端，在客户端再来请求这个文件的时候，就可以直接从缓存中去取了

#### tcp请求的三次握手：
> 1.客户端向服务器发起SYN报文：嘿，哥们，在不，我要和你通信一下？
> 2.服务器接收到请求报文之后，回复SYN+ACK报文，并未这次连接分配资源：嘿，小弟弟，我收到你的请求了，我这边ok了，
> 3.客户端接收到服务器的确认报文之后再一次发送ACK报文给服务器：嘿哥们，我也准备好了；ok  这就是三次握手

#### tcp断开的四次挥手
> 1.客户端发起中断请求，发送FIN报文给服务器：”嘿，哥们，我客户端没有数据给你了，要断开哦“
> 2.服务器接收到客户端请求，立即发送ACK确认报文：“嘿，小弟弟，你的请求我收到了，但是我还没准备好，等我一下”
> 3.服务器确认数据发送完毕之后，再次发送FIN报文给客户端：“嘿，小弟弟，我这边数据发送完毕了，准备好关闭了哦”
> 4.客户端接收到服务器的关闭通知之后，发送ACK确认报文：“嘿，哥们，你关闭吧”
> 这样子之后，服务端收到确认报文，直接断开连接，客户端等待2ms之后依然没有收到回复，证明服务端已经关闭了，ok，这样子客户端也关闭了

#### http协议
*    网络超文本协议传输
*    由 请求和响应组成
*    一次http操作称为一个事务
*    pequest-uri
*    cookie 服务器响应http 设置的生成
*    cookie 浏览器通过js设置的

#### http2.0
*   使用二进制传输
*   报头压缩
*   多路复用 一个网络连接实现并行请求
*   服务器主动推送,减少请求延迟
*   流量控制 优先级设置



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
img ,script,iframe,link,jsonp 、Hash、 cors、  webSocket、  postMessage

#### 埋点
> navigator.sendBeacon('a.html')

## nginx 相关

#### 缓存
###### 强缓存
* 开启 expires
* expires 30d;
* add_header Cache-Control no-cache;
* Cache-Control

###### 协商缓存
* 开启 etag on
* last-modified

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









