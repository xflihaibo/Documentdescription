# npm 私有镜像搭建

## verdaccio

> Verdaccio 是一个轻量级的私有 NPM 的 Registry（从 Sinopia fork 过来的，sinopia 最后一次更新是在几年前了）。最开始是打算使用 cnpmjs 这个来搭建私有的 npm 仓库但是搭建完成之后存在一些问题，所以使用了 Sinopia，本文记录下来搭建的过程。

```code
npm install verdaccio -g
```

安装完成之后直接执行命令即可完成启动：

```code
verdaccio
```

## Sinopia 方案篇

### 服务端部署

###### 安装

前置工作：配置 nodejs 及 npm 环境

```code
npm install -g sinopia
```

###### 启动

```code
sinopia
warn  --- config file - /home/map/.config/sinopia/config.yaml
warn  --- http address - http://localhost:4873/
```

此时访问 localhost:4873,可获取 html 文件并且服务端响应正常，表示安装成功。

```code
$ curl localhost:4873
```

###### 服务端响应

```code
$ sinopia
...
http  <-- 200, user: undefined, req: 'GET /', bytes: 0/10896
```

###### 配置

运行 sinopia，自动生成的工作目录如下(通过第一个 warn 可以看到具体路径)：

```code
$ tree /home/map/.config/sinopia/
/home/map/.config/sinopia/
|-- config.yaml //存放所有配置信息
|-- htpasswd        //存放所有账户信息
`-- storage         //存放私有npm包及缓存公有包
|-- npm_test
|   |-- npm_test-1.0.0.tgz
|   |-- npm_test-1.0.1.tgz
|   `-- package.json
`-- sinopia
       `-- package.json

3 directories, 6 files
```

###### config.yaml 默认配置

```code
# This is the default config file. It allows all users to do anything,
# so don't use it on production systems.
#
# Look here for more config file examples:
# https://github.com/rlidwka/sinopia/tree/master/conf

# path to a directory with all packages
storage: ./storage      //npm包存放的路径

auth:
 htpasswd:
file: ./htpasswd    //保存用户的账号密码等信息
# Maximum amount of users allowed to register, defaults to "+inf".
# You can set this to -1 to disable registration.
#max_users: 1000 //默认为1000，改为-1，禁止注册

# a list of other known repositories we can talk to
uplinks:
 npmjs:
url: https://registry.npmjs.org/
//拉取公共包的地址源，默认为npm的官网，可以使用淘宝的npm镜像地址

packages: //配置权限管理
'@*/*':
# scoped packages
   access: $all
publish: $authenticated
'*':

# allow all users (including non-authenticated users) to read and
# publish all packages
#
# you can specify usernames/groupnames (depending on your auth plugin)
# and three keywords: "$all", "$anonymous", "$authenticated"
   access: $all

# allow all known users to publish packages
# (anyone can register by default, remember?)
publish: $authenticated

# if package is not available locally, proxy requests to 'npmjs' registry
proxy: npmjs

# log settings
logs:
- {type: stdout, format: pretty, level: http}
#- {type: file, path: sinopia.log, level: info}
```

###### 外网访问配置

通过在 config.yaml 中修改服务默认的监听端口，从而可以通过外网访问 sinopia 仓库。

```code
listen: 0.0.0.0:4873
```

外网通过http://[IP | 域名]:[端口]的形式来访问。

###### 浏览器外网访

###### 账号配置

config.yaml 中 auth 部分对应账号的管理，默认可以通过客户端 npm adduser 添加账号。可以通过 max_users:-1 禁止客户端创建，而通过我们修改 htpasswd 文件来管理用户。

htpasswd 文件示例：

```cdoe
lisi:{SHA}????????????????=:autocreated 2016-02-05T15:39:19.960Z
wangwu:{SHA}????????????????=:autocreated 2016-02-05T17:59:05.041Z
```

密码是被加密过的，是简单的 SHA1 哈稀之后再转换成 Base64 。

#### 客户端配置

##### 配置 npm registry

建议客户端使用 nrm 进行 npm registry 地址管理和切换

###### 安装

```code
npm install -g nrm
```

###### 添加 sinopia 仓库地址

```code
nrm add sinopia http://192.168.xx.xx:4873
```

###### 切换私有仓库

```code
nrm use sinopia
```

###### 查看所有仓库地址(星标为当前仓库源)

```code
nrm ls
npm ---- https://registry.npmjs.org/
cnpm --- http://r.cnpmjs.org/
taobao - https://registry.npm.taobao.org/
nj ----- https://registry.nodejitsu.com/
rednpm - http://registry.mirror.cqupt.edu.cn/
npmMirror https://skimdb.npmjs.com/registry/
edunpm - http://registry.enpmjs.org/
* sinopia http://192.168.xx.xx:4873/
```

#### 发包

切换到私有仓库之后，发包的操作跟 npm 发包基本无差别。
登录账号之后：

```code
npm publish
+ npm_test@1.0.1
```
