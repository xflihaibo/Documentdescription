## LIUNX 预备知识

### liunx 命令

> -   netstat -ntpl 查看进程
> -   ss –an –p | grep 8080
> -   lsof -i:80
> -   cat /etc/passwd 查看用户列表
> -   kill -9 pid 强制杀死进程
> -   killall nginx 杀死 nginx 所有的进程
> -   nginx –t 查看是否生效
> -   nginx -s reload: 重新启动
> -   ssh 启动 sudo service ssh start
> -   tar -cvf vitest.zip vitest 压缩
> -   tar -xvf vitest.zip 解压缩
> -   systemctl start firewalld 开启防火墙
> -   systemctl stop firewalld 关闭防火墙
> -   systemctl status firewalld 查看防火墙状态
> -   firewall-cmd –list-all 查看所有的信息
> -   Chmod 600 ubuntu02_key 修改私钥权限
> -   ps -ef | grep nginx 查看 nginx 的进程
> -   sudo passwd 设置 root 用户密码
> -   su root 切换用户
> -   /etc/profile //环境变量配置文件
> -   ssh root@192.168.50.14 -P 8090
> -   复制文件：scp width.html roottest@192.168.50.141:home/newtest
> -   复制目录：scp -r filename roottest@192.168.50.141:home/newtest
> -   ssh roottest@192.168.50.141
> -   service jenkins restart 启动 jenkins 进程
> -   service nginx restar 启动 nginx 进程
> -   yum uninstall nginx 卸载
> -   curl 127.0.0.1; 访问网络
> -   Exit：退出
> -   hostname hb 更改主机用户名
> -   where is nginx 查找文件位置
> -   which nginx (别名)查找文件位置
> -   find /etc -name init.d 查找文件
> -   find /etc -name init.\* (多个)查找文件
> -   find /etc -name init.? （一个）查找文件
> -   find /etc -iname init.T 忽略大小写
> -   find /etc -atime 5 //文件访问时间
> -   find /etc -ctime 5 //改变文件属性
> -   find /etc -mtime 5 //修改时间
> -   find /etc -size -100k //文件小于 100k 的
> -   find /etc -size +100k //文件大于 100k 的
> -   find /etc -size 100k //文件等于 100k 的
> -   main ls 查看帮助

-   注如果 scp ssh 失败：
-   sudo ps -e |grep ssh“–>回车–>有 sshd,说明 ssh 服务已经启动，如果没有启动，输入”sudo service ssh start“–>回车–>ssh 服务就会启动 如果没有下载 apt-get install openssh-server 并且

### 生成密钥对

-   ssh-keygen –t rsa –C ‘sddr’ -f ‘wenjanjaim’
    > -   -t 选择加密方式量不用中文
    > -   -f 文件名
    > -   rsa 加密方式
    > -   “happy” 什么标识 尽
    > -   ubuntu02_key.pub >> authorized_keys 把公钥写入 authorized_keys
    > -   > 覆盖
    > -   > > 追加
    > -   Exit：退出
-   ssh 登录：ssh -i pri-key root@192.168.50.134

```bash
    known_hosts: 存放其他服务器生成的指纹
    config 配置
            Host evil-cloud
            User root
            Host yideng
            HostName 192.168.50.142
            port 22
            IdentityFile ~/.ssh/new
            IdentitiesOnly yes
            Protocol 2
            Compression yes
            ServerAliveInterval 60
            ServerAliveCountMax 20
            LogLevel INFO
    ssh yideng  可直接登录
```
