# nginx

/etc/nginx/modules nginx 第三方包
/etc/nginx/mime.tyoe nginx 第三方包
/etc/nginx/modules nginx 第三方包
/etc/nginx/modules nginx 第三方包

# 高并发系统架构

垂直扩展 - 提升硬件配置（cpu，内存，网卡，硬盘）
横向扩展 - 加服务器

nginx 10w
lvs: 10 ～ 50w
F5: 200 ~ 1000W F5 主机
核心：原本是请求 LVS 服务器的数据包 被 LVS 软件篡改了数据包目的地 将流量转移到了 nginx 所在的 IP 地址，重而实现负载均衡
