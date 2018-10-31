# nginx 相关

#### nginx 优势

> -   IO 多路复用 多个描述符的 IO 操作都能在一个线程里并发交替顺序完成，复用线程 select 线性遍历文件描述符列表 1. 效率低下 2.最多只能有 1024 epoll 每当 fd 就绪，采用系统回调函数将 fd 放入 1.效率高 2.没有 1024 限制
> -   CPU 亲和 一种把 CPU 核心和 Nginx 工作进程绑定方式，把每个 worker 进程固定在一个 CPU 上执行，减少切换 CPU 和提交缓存命中率,获得更好的性能。
> -   sendfile 零拷贝传输模式 ![usercore]

## unbuntu 下载 nginx

```code
    wget http://nginx.org/download/nginx-1.13.6.tar.gz
    tar -xvf  nginx //解压
-   进入 nginx
    sudo ./configure
    //报错的话执行
    sudo apt-get install libpcre3 libpcre3-dev
    sudo apt-get install openssl libssl-dev
    执行 install make
    进入安装后的文件夹
    进入 sbin
    启动 sudo ./nginx
```

## 常用的 nginx 命令

```code
centos  
systemctl start nginx   启动nginx
ps –ef | grep nginx 查看 nginx 进程
netstat -ntpl 80 查看端口号
nginx -v  //查看版本
nginx -t //测试配置是否正确
nginx -s stop  //停止nginx
nginx -s reload //重启nginx
```

#### 强缓存

> -   开启 expires
> -   expires 30d;
> -   add_header Cache-Control no-cache;
> -   Cache-Control

#### 协商缓存

-   开启 etag on
-   last-modified

#### 压缩

> -   gizp:on
> -   gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
> -   gzip_vary on;是否在 http header 中添加 Vary: Accept-Encoding，建议开启
> -   gzip_comp_level: 5(建议) gzip 压缩比，1 压缩比最小处理速度最快，9 压缩比最大但处理最慢（传输快但比较消耗 cpu）
> -   gzip_min_length: 默认值是 0，不管页面多大都压缩。 建议设置成大于 1k 的字节数，小于 1k 可能会越压越大
> -   gzip_http_version 版本信息

## 配置文件访问权限(防盗链)

```code
   location ～ .\.(jpg|png) $ {
        valid_referers none blocked 192.186.1.1;
        if ($invalid_referer) {
                return 403;
        }
        root /data/images
        }
```

-   valid_referers
    > -   none : 允许没有 http_refer 的请求访问资源；
    > -   blocked : 允许不是http://开头的，不带协议的请求访问资源；
    > -   119.28.190.215 : 只允许指定 ip 来的请求访问资源；

## 配置跨域

```code
location ~ .*\.json$ {
        add_header Access-Control-Allow-Origin http://localhost:3000;
        add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
        root /data/json;
    }
```

## 配置反向代理

```code
 upstream web_crm {
        server 127.0.0.1:8080;
}
   location /crm/ {
            proxy_pass http://web_crm/crm/;
            proxy_redirect  off;
            proxy_set_header Host $host;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection ‘upgrade’;
            proxy_cache_bypass $http_upgrade;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
```

## 配置负载均衡

```code
upstream web_mgrsys {
    server 127.0.0.1:8090 weight=10;
    server 127.0.0.1:3000 weight=3;
}
proxy_pass http://web_mgrsys;
```

#### 其他参数

-   1.backup ：备份机，所有服务器挂了之后才会生效
-   2.Weight：默认为 1.weight 越大，负载的权重就越大。
-   3.max_fails：允许请求失败的次数默认为 1.当超过最大次数时，返回 proxy_next_upstream 模块定义的错误
-   4.fail_timeout：max_fails 次失败后，暂停的时间。
-   5.max_conns：限制分配给某台 Server 处理的最大连接数量，超过这个数量，将不会分配新的连接给它。默认为 0，表示不限制。注意：1.5.9 之后的版本才有这个配置
-   6 ip_hash; 每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题
-   7 least_conn 最小连接数，哪个连接少就分给谁
-   8 url_hash（第三方) 按访问的 URL 地址来分配 请求，每个 URL 都定向到同一个后端 服务器上(缓存)
-   9 fair（第三方) 按后端服务器的响应时间来分配请求，响应时间短的优先分配。
