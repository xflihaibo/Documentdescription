## docker

#### 安装

```code
yum -y install docker-io
```

#### 查看 docker 版本

```code
docker version
docker info
```

#### 启动

```code
 systemctl start docker
```

#### 配置 docker 国内代理

```code
mkdir -p /etc/docker
//写入 国内代理地址
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://fwvjnv59.mirror.aliyuncs.com"]
}
```

#### 重启程序 docker

```code
systemctl daemon-reload
systemctl restart docker
```

#### image 镜像

-   Docker 把应用程序及其依赖，打包在 image 文件里面。只有通过这个文件，才能生成 Docker 容器
-   image 文件可以看作是容器的模板
-   Docker 根据 image 文件生成容器的实例 container 容器
-   同一个 image 文件，可以生成多个同时运行的容器实例
-   一个 image 文件往往通过继承另一个 image 文件，加上一些个性化设置而生成

```code
docker search ubuntu //查找镜像
docker pull  docker.io/ubuntu //拉取镜像
docker rmi    docker.io/ubuntu //删除镜像
docker image ls //查看本地镜像mi
docker run hello-world //运行镜像实例
docker run ubuntu  /bin/echo "hello" 运行实例 并且打印 hello
```

### container 容器

image (镜像)生成的实例
一个容器实例暂用一个真实的 ip

```code
docker container ps //获取运行的容器
docker container ps -a //获取所有的容器
docker ps -l 最新
docker run  -it ubuntu /bin/bash  运行容器并且进入容器
docker run  --detach  centos ping www.baidu.com  运行容器并且进入容器
eixt 退出docker 容器
docker logs 2bbd6d7923ac6f0285065796f0abf80480174b7301b614281551e8ff79404615 查看日志
docker logs 2bbd6d7923ac6f0285065796f0abf80480174b7301b614281551e8ff79404615 -- follow 持续查看日志
docker stop  2bbd6d7923ac 停止容器运行
docker kill  2bbd6d7923ac 停止容器运行（暴力）
docker rm  2bbd6d7923ac 删除容器
docker start  2bbd6d7923ac 启动容器
docker ps -a | wc -l  查看数量
docker container exec -it 833523dc3af5 /bin/bash 进入运行中的容器
docker container cp 833523dc3af5:/u.txt u.txt  拷贝dockr 容器
docker run --rm ubuntu /bin/bash hello 运行并删除容器dock
 docker commit -m"add readme" -a"lihaibo" 843f41b41b9f lihaibo/hello:latest 创建新的docker image
```

#### 制作 Image 镜像

https://store.docker.com/ 仓库

```code
docker run -it  ubuntu /bin/bash //运行进入
touch README.md  //修改ubunt镜像文件
exit //退出
docker container ps -l //列出最新修改的
dockeixter commit -m"add readme" -a"lihaibo" 843f41b41b9f lihaibo/hello:latest // 打包自定义包名
docker image ls //查看镜像
docker login  登录docker
docker push lihaibo/hello  推送docker 远程仓库(开头用户和个人信息一致)
docker inspect lihaibo/hello  查看层级 镜像具有继承功能
docker tag 80ffb8c8925b lihaibo/express-app 修改镜像名称
```

## Dockerfile

```code
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash  //下周nvm
source  /root/.bashrc //执行
nvm install stable //下载node
node -v
npm i cnpm -g
npm i nrm -g

cnpm install express-generator -g
vi .dockerignore //创建忽略文件
```

#### Dockerfile

创建 Dockerfile 文件

```code
FROM node
COPY ./app /app
WORKDIR /app
RUN npm install
EXPROSE 3000
```

```code
docker build -t express-app .   //打包
docker image ls
docker run -it express-app /bin/bash

docker run -it -p 8081:3000 express-app /bin/bash

apt update
#ping
apt install inetutils-ping
#nslookup
apt install dnsutils
#ifconfig
apt install net-tools
#ip
apt install iproute2
#curl
apt install curl

ping 127.0.0.1:300
```
