## 碎片记录

es6
html dicument.querySelectAll('div') 得到的是一个类数组的对象 并非数组，可以通过 Array.from() 转换成数组操作
startswith('x') 开头是否含有'x'
endswith('x') 结尾是否含有'x'

Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被 reject 失败状态的值
Promse.race 就是赛跑的意思，意思就是说，Promise.race([p1, p2,
p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

http:
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
