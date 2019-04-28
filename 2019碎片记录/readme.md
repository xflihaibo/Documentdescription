## 碎片记录

es6
html dicument.querySelectAll('div') 得到的是一个类数组的对象 并非数组，可以通过 Array.from() 转换成数组操作
startswith('x') 开头是否含有'x'
endswith('x') 结尾是否含有'x'

Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被 reject 失败状态的值
Promse.race 就是赛跑的意思，意思就是说，Promise.race([p1, p2,
p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

http:

智能 DNS 解析  
APINC 生成 ip 库

Request For Comments（RFC），是一系列以编号排定的文件。文件收集了有关互联网相关信息，以及 UNIX 和互联网社区的软件文件。目前 RFC 文件是由 Internet Society（ISOC）赞助发行。基本的互联网通信协议都有在 RFC 文件内详细说明。RFC 文件还额外加入许多的论题在标准内，例如对于互联网新开发的协议及发展中所有的记录。因此几乎所有的互联网标准都有收录在 RFC 文件之中。

http header 大小限制在 32kb
http body 大小限制在 1g

http1.0 一次性链接
http1.1 持续链接 性能提升
http2.0 强制 https 自带双向通信 多路复用

osi 七层参考模型
1 物理层 通信 物理材料
2 链路层 内网寻址 （内网链接）arp smp(ping)
3 网络层 外网寻址 IP
4 传输层 通信的稳定性 数据 TCP
5 表现层 提供一个统一的结构.
6 会话层 无状态通信 服务器记录状态
7 应用层 应用细节。HTTP FTP SMTP POP3

无状态通信

TCP 传输控制协议 文件下载 聊天 1.丢失重传 到达 2.错误重发 质量 3 保证顺序 顺序
UDP 用户数据协议 直播 ip 电话
http 基于 TCP

uri
url 统一资源定位符
urn 永久统一资源定位符

## node 跨越

response.writeHead(200,{
'Access-Control-Allow-Origin':'\*',
'Access-Control-Allow-Header':'X-Test-Cors' //解决
'Access-Control-Allow-Methods':‘Post,Put,Delete’ //
'Access-Control-Max-Age':'1000',//请求时间
})

ALPN 兼容 http2 http1.1

cors 预请求

Cache-control ：public private
max-age
s-maxage :代理服务
max-stale :可以使用过期缓存  
mast-revalidate :
proxy-revalidate: 缓存服务器
no-store：
no-transfrom：压缩 格式转换
ß
content-type 返回的数据类型
content-encoding 压缩格式 gzip

## http csp 内容安全策略

Content-Security-Policy:'default-src http: https:' css js 只能是应用的方式
Content-Security-Policy:'default-src \'self\' form-action \'self\'‘ 只允许本域名下的资源加载 form 表单提交到本域名下
html

<meta http-equiv="Content-Security-Policy" content="script-src 'self' ">

nginx 变量
include servess/\*.conf 包含底线的 server
server_name. test.com
proxy_pass http:127.0.0.1:8888,
proxy_set_header Host $host

nginx 设置头部读取缓存方式
vary :'X-Test-Cache'

## nginx

rpm -ql nginx 查询 nginx 列表

## 伪静态配置

location ~_\.(gif|jpg|png|jpeg)${
root html
valid_referers none blocked _.nginx.cn;
if($invalid_referer){
rewrite ^/www.nginx.cn # return 404
}
}

nginx 设置 https
ssl on;
ssl_certificate_key certs/loaclhot-privkey.pem //https 证书
ssl_certificate certs/loaclhot.pem //https 证书

nginx http 转 https
server {
listen 80 default_server;
listen [::]:80 default_server;
server_name test.com
return 302 https://$server_name$request_uri;
}

# nginx 兼容 http2 http

listen 443 http2
server_name test.com
http2_push_preload on

ALPN ALPN (Application Layer Protocol Negotiation)是 TLS 的扩展，允许在安全连接的基础上进行应用层协议的协商

nginx 变量
arg_PARAMETER
http_HEADER
set_http_HEADER

<!-- nginx
shell
postcss
webpack plugin
基本规范
babel 插件
drag
rx.js
类型检测
jsdoc
存储
gitlab 搭建
npm 私有仓库
webpack+ loader+plugin
graphql
自动化测试发布环境
数据结构
监控 容错
设计模式

markdown
lint
jest+enzyme
正则
抓包
docker
typeScript -->


