# docker

-   Docker 是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署，包括 VMs（虚拟机）、bare metal、OpenStack 集群和其他的基础应用平台。

###Docker 通常用于如下场景：

1.  web 应用的自动化打包和发布；
2.  自动化测试和持续集成、发布；
3.  在服务型环境中部署和调整数据库或其他的后台应用；
4.  从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。

### 底层技术支持

1.Namespaces :做隔离 pid net ipc mnt uts
2.Control groups :做资源限制
3.Union file systems: Container 和 image 的分层

### centos 配置 docker

-   移除旧版文件

```code
sudo yum remove docker
sudo yum remove docker-commom
sudo yum remove docker-selinux
sudo yum remove docenginegine
```

-   安装依赖

```code
sudo yum  install -y device-mapper-persistent-data  lvm2  yum-utils
```

-   安装 docker 启动

```code
 sudo yum install -y docker
 systemctl start docker ||  service docker start //启动
 yum -y install docker-io

docker info //查看信息
docker version //查看版本

decker run --detach centos ping www.baidu.com  //后台运行doker容器

systemctl start docker #启动
systemctl restart docker #重启
systemctl stop docker #停止
systemctl status docker #查看状态
systemctl enable docker #自启动
systemctl disable docker #禁止自启动

http://dockone.io/article/104
```

## docker-Image

https://hub.docker.com/explore/

-   文件和 meta data 的集合
    分层的，并且每一层都可以添加改变，删除文件 成为一个新的 image
    不同的 image 可以共享相同的 layer
    Image 本身是 read-only

## Container

1 通过 Image 创建
2 在 Image layer 之上建立一个 container layer（可读写）
3 类比面向对象：类和实例
4Image 负责 app 的存储和分发 Container 负责运行 app

```code
docker container ls 列举本地运行的程序‘
docker container ls -a 列举本地所有的程序
docker run -it  hello-world 交互运行

docker  container cp cb4acb4acb4a:/u.txt u.txt 复制docker 文件到指定目录
```

## docker-machine

-   docker-machine 是 Docker 官方提供的一个工具，它可以帮助我们在远程的机器上安装 Docker，或者在虚拟机 host 上直接安装虚拟机并在虚拟机中安装 Docker。我们还可以通过 docker-machine 命令来管理这些虚拟机和 Docker。下面是来自 Docker Machine 官方文档的一张图，很形象哦！

-   Docker Machine 的目的是简化 Docker 的安装和远程管理。从本文的内容我们也可以看到，Docker Machine 确实为我们使用和管理 Docker 带来了很多的便利。至于有待提高的方面，现在 Docker Machine 会安装最新版本的 Docker，笔者觉得如果能够支持指定安装 Docker 的版本就好了！

*   安装 docker-machine

```code
https://github.com/docker/machine/releases
curl -L https://github.com/docker/machine/releases/download/v0.16.0/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine &&
    chmod +x /tmp/docker-machine &&
    sudo cp /tmp/docker-machine /usr/local/bin/docker-machine

docker-machine version //查看版本

http://m.elecfans.com/article/624284.html

docker-machine create [OPTIONS] [arg...] //创建虚拟机
docker-machine rm [OPTIONS] [arg...] //移除虚拟机
docker-machine ssh [arg...] //登录虚拟机
docker-machine env [OPTIONS] [arg...] //docker客户端配置环境变量
docker-machine inspect //检查机子信息
docker-machine ls [OPTIONS] [arg...]. //查看虚拟机列表
docker-machine status [arg...]  //一个虚拟机名称 //查看虚拟机状态
docker-machine start [arg...]  //一个或多个虚拟机名称.//启动虚拟机
docker-machine stop [arg...]  //一个或多个虚拟机名称 //停止虚拟机
docker-machine restart [arg...]  //一个或多个虚拟机名称 //重启虚拟机
```

## Docker Engine

-   人们提到 Docker，一般而言，大家说的是 Docker Engine

```code
Docker Engine 由三个部分组成：
Docker 进程（Docker Daemon）
REST API：指定了和进程交互的接口
CLI(command line interface)：通过 REST API 和 daemon 通信，诸如：docker run <image>, docker ps...


Docker Machine 是一种提供管理主机的 工具。常规，你会安装 Docker Machine 在你的本地机器上。
Docker Machine 有自己的命令client：docker-machine
Docker Engine 则有client：docker
```

Docker Machine 来安装 Docker Engine 在一个或者多个虚拟系统上，这些虚拟系统可以是本地的（比如 Virtualbox 里），也可以是远程的（云）
