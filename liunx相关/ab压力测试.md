# ab 压力测试

## 描述

ab 是 apache 自带的压力测试工具。ab 非常实用，它不仅可以对 apache 服务器进行网站访问压力测试，也可以对或其它类型的服务器进行压力测试。比如 nginx、tomcat、IIS 等

## ab 的原理

> ab 的原理：ab 命令会创建多个并发访问线程，模拟多个访问者同时对某一 URL 地址进行访问。它的测试目标是基于 URL 的，因此，它既可以用来测试 apache 的负载压力，也可以测试 nginx、lighthttp、tomcat、IIS 等其它 Web 服务器的压力。
> ab 命令对发出负载的计算机要求很低，它既不会占用很高 CPU，也不会占用很多内存。但却会给目标服务器造成巨大的负载，其原理类似 CC 攻击。自己测试使用也需要注意，否则一次上太多的负载。可能造成目标服务器资源耗完，严重时甚至导致死机

## 安装

```shell
 yum -y install httpd-tools
 ab -V 查看版本
```

## 参数

-n 即 requests，用于指定压力测试总共的执行次数。
-c 即 concurrency，用于指定压力测试的并发数。
-t 即 timelimit，等待响应的最大时间(单位：秒)。
-b 即 windowsize，TCP 发送/接收的缓冲大小(单位：字节)。
-p 即 postfile，发送 POST 请求时需要上传的文件，此外还必须设置-T 参数。
-u 即 putfile，发送 PUT 请求时需要上传的文件，此外还必须设置-T 参数。
-T 即 content-type，用于设置 Content-Type 请求头信息，例如：application/x-www-form-urlencoded，默认值为 text/plain。
-v 即 verbosity，指定打印帮助信息的冗余级别。
-w 以 HTML 表格形式打印结果。
-i 使用 HEAD 请求代替 GET 请求。
-x 插入字符串作为 table 标签的属性。
-y 插入字符串作为 tr 标签的属性。
-z 插入字符串作为 td 标签的属性。
-C 添加 cookie 信息，例如："Apache=1234"(可以重复该参数选项以添加多个)。
-H 添加任意的请求头，例如："Accept-Encoding: gzip"，请求头将会添加在现有的多个请求头之后(可以重复该参数选项以添加多个)。
-A 添加一个基本的网络认证信息，用户名和密码之间用英文冒号隔开。
-P 添加一个基本的代理认证信息，用户名和密码之间用英文冒号隔开。
-X 指定使用的代理服务器和端口号，例如:"126.10.10.3:88"。
-V 打印版本号并退出。
-k 使用 HTTP 的 KeepAlive 特性。
-d 不显示百分比。
-S 不显示预估和警告信息。
-g 输出结果信息到 gnuplot 格式的文件中。
-e 输出结果信息到 CSV 格式的文件中。
-r 指定接收到错误信息时不退出程序。
-h 显示用法信息，其实就是 ab -help。

## 案例

```shell
//测试GET 接口，需要cookie
ab -n 5000 -c 500 -C uin=7000000；session=99999999 url

//测试POST接口，需要JSON格式请求体
ab -n 5000 -c 300 -p post.txt -T 'application/json' url
//其中，-p 表示需要携带的请求体，一般是.txt格式文件，文件内容如下：{"toBank":"123456"}; -T 表示请求体格式，一般为’application/json’
```
