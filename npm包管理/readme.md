## npm

-   NPM 的全称是 Node Package Manager，是随同 NodeJS 一起安装的包管理和分发工具，它很方便让 JavaScript 开发者下载、安装、上传以及管理已经安装的包

-   常用命令

可以用下面的命令去修改默认配置：

```code
npm config set init.author.email "wangshijun2010@gmail.com" //设置 package.js email
npm config set init.author.name "wangshijun"
npm config set init.author.url "http://github.com/wangshijun"
npm config set init.license "MIT"
npm config set init.version "0.1.0"
```

让多个 npm script 串行

```code
 "test": "npm run lint:js && npm run lint:css && npm run lint:json && npm run lint:markdown && mocha tests/"
```

从输出可以看到子命令的执行顺序是严格按照我们在 scripts 中声明的先后顺序来的 eslint ==> stylelint ==> jsonlint ==> markdownlint ==> mocha

多个 npm script 并行

```code
 "test": "npm run lint:js & npm run lint:css & npm run lint:json & npm run lint:markdown & mocha tests/"
```

npm run lint:js 的结果在进程退出之后才输出，如果你自己运行，不一定能稳定复现这个问题，但 npm 内置支持的多条命令并行跟 js 里面同时发起多个异步请求非常类似，它只负责触发多条命令，而不管结果的收集，如果并行的命令执行时间差异非常大，上面的问题就会稳定复现

```code
 npm run lint:js & npm run lint:css & npm run lint:json & npm run lint:markdown & mocha tests/ & wait
```

原生方式来运行多条命令很臃肿，幸运的是，我们可以使用 npm-run-all 实现更轻量和简洁的多命令运行

```code
npm i npm-run-all -D

"mocha": "mocha tests/",
"test": "npm-run-all lint:js lint:css lint:json lint:markdown mocha"

npm-run-all 还支持通配符匹配分组的 npm script
"test": "npm-run-all lint:* mocha"

多个 npm script 并行执行
"test": "npm-run-all --parallel lint:* mocha"
```

##### npm script 运行时日志

##### 显示尽可能少的有用信息

调用 npm script 的时候比较有用，需要使用 --loglevel silent，或者 --silent，或者更简单的 -s 来控制

##### 显示尽可能多的运行时状态

需要使用 --loglevel verbose，或者 --verbose，或者更简单的 -d 来控制

##### 代码检查自动化

我们使用的代码检查工具 stylelint、eslint、jsonlint 不全支持 watch 模式，这里我们需要借助 onchange 工具包来实现，onchange 可以方便的让我们在文件被修改、添加、删除时运行需要的命令。

```code
npm i onchange -D


 "watch": "npm-run-all --parallel watch:*",
 "watch:lint": "onchange -i \"**/*.js\" \"**/*.less\" -- npm run lint",
"watch:test": "npm t -- --watch",
```

watch:lint 里面的文件匹配模式可以使用通配符，但是模式两边使用了转义的双引号，这样是跨平台兼容的；
watch:lint 里面的 -i 参数是让 onchange 在启动时就运行一次 -- 之后的命令，即代码没变化的时候，变化前后的对比大多数时候还是有价值的；
watch 命令实际上是使用了 npm-run-all 来运行所有的 watch 子命令；

有没有好奇过 onchange 是怎么实现文件系统监听的？所有的魔法都藏在它的源代码里面，实际上它使用了跨平台的文件系统监听包 chokidar，基于它，你能做点什么有意思的事情呢？

```code
npm install 安装模块
npm uninstall 卸载模块
npm update 更新模块
npm outdated 检查模块是否已经过时
npm ls 查看安装的模块
npm init 在项目中引导创建一个package.json文件
npm help 查看某条命令的详细帮助
npm root 查看包的安装路径
npm config 管理npm的配置路径
npm cache 管理模块的缓存
npm start 启动模块
npm stop 停止模块
npm restart 重新启动模块
npm test 测试模块
npm version 查看模块版本
npm view 查看模块的注册信息
npm adduser  用户登录
npm publish 发布模块
npm access 在发布的包上设置访问级别
npm package.json的语法
```

## npm 上传自己的包

```code
npm install allblue   //检查npm 是否存在
```

-   如果没有 新建一个 allblue 的文件夹

```code
cd allblue
npm init  -y
```

-   进入 package.json 文件

```code
 "name": "allblue", //必填项目名称
 "version": "0.0.1" //必填版本信息
```

-   登录 npm

```code
 npm login //输入用户名、密码和邮箱
```

-   更新 npm 包 修改 package.json 文件夹中的 version 版本信息
    执行

```code
 npm publish
```

-   利用 npm 撤销发布包

```code
 npm unpublish 包名
```

[参考](https://www.cnblogs.com/penghuwan/p/6973702.html)

## nvm nrm npx npm

## nvm

-   nvm 是一个可以让你在同一台机器上安装和切换不同版本 node 的工具

```code
npm  install   -g   nrm //安装
nvm install ## 安装指定版本，可模糊安装，如：安装v6.2.0，既可nvm install v6.2.0，又可nvm install 6.2
nvm uninstall ## 删除已安装的指定版本，语法与install类似
nvm use ## 切换使用指定的版本node
nvm ls ## 列出所有安装的版本
nvm ls-remote ## 列出所以远程服务器的版本（官方node version list）
nvm current ## 显示当前的版本
nvm alias ## 给不同的版本号添加别名
nvm unalias ## 删除已定义的别名
nvm reinstall-packages ## 在当前版本node环境下，重新全局安装指定版本号的npm包
```

-   nvm 不支持 Windows

## n

-   n 是一个可以让你在同一台机器上安装和切换不同版本 node 的工具

```code
npm install -g n
```

-这意味着，我们在使用 n 管理 node 版本前，首先需要一个 node 环境。我们或者用 Homebrew 来安装一个 node，或者从官网下载 pkg 来安装，总之我们得先自己装一个 node —— n 本身是没法给你装的。

## nrm 自由切换 npm 源

-   nrm(npm registry manager )是 npm 的镜像源管理工具

```code
nrm ls  列出可用的源
nrm use taobao 选择国内淘宝的源
nrm test npm 测试速度
nrm add taobao http://192.168.10.127:8081/repository/npm-public/  添加源
nrm del  taobao删除对应的源
```

## npx

-   npm v5.2.0 引入的一条命令（npx），npx 会帮你执行依赖包里的二进制文件。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验
-   全局安装 parcel，但有时不同项目使用不同版本，不允许使用全局包，只能考虑下面一些方法
    使用 npm scripts，在 package.json 加一个 script ,将 node_modules 的可执行目录加到 PATH 中.指定可执行命令路径
-   当我们执行 npx parcel index.html 时，会自动去./node_modules/.bin 目录下搜索。

```code
old:
npm install -g create-react-app
create-react-app my-app
new:
npx create-react-app my-app
```

## rpm

> RPM 软件包管理器

```code
 rpm －e xv
 RPM 的常用参数还包括：
 －vh：显示安装进度；
 －U：升级软件包；
 －qpl：列出 RPM 软件包内的文件信息；
 －qpi：列出 RPM 软件包的描述信息；
 －qf：查找指定文件属于哪个 RPM 软件包；
 －Va：校验所有的 RPM 软件包，查找丢失的文件；
 －qa: 查找相应文件，如 rpm -qa mysql
 RPM 主要功能
 安装、卸载、升级和管理软件
 组件查询功能
 验证功能
 软件包 GPG 和 MD5 数字签名的导入、验证和发布
 软件包依赖处理
 选择安装
 网络远程安装功能
 rpm 命令：遵循 GPL 协议且功能强大的包管理，它可以建立、安装、请求、确认、和卸载软件包。间接的提升了 Linux 的易用性
 -e 卸载 rpm 包
 -q 查询已安装的软件信息
 -i 安装 rpm 包
 -u 升级 rpm 包
 --replacepkgs 重新安装 rpm 包
 --justdb 升级数据库，不修改文件系统
 --percent 在软件包安装时输出百分比
 --help 帮助
 --version 显示版本信息
 -c 显示所有配置文件
 -d 显示所有文档文件
 -h 显示安装进度
 -l 列出软件包中的文件
 -a 显示出文件状态
 -p 查询/校验一个软件包文件
 -v 显示详细的处理信息
 --dump 显示基本文件信息
 --nomd5 不验证文件的 md5 支持
 --nofiles 不验证软件包中的文件
 --nodeps 不验证软件包的依赖关系
 --whatrequires 查询/验证需要一个依赖性的软件包
 --whatprovides 查询/验证提供一个依赖性的软件包
```

>     范例 1：安装软件

```code
[root@hnlinux lx1 3 8.c o m]# rpm -hvi dejagnu-1.4.2-10.noarch.rpm
　　警告：dejagnu-1.4.2-10.noarch.rpm: V3 DSA 签名：NOKEY, key ID db42a60e
　　准备...
　　########################################### [100%]
　　范例 2： 显示软件安装信息
　　[root@hnlinux lx1 3 8.c o m]# rpm -qi dejagnu-1.4.2-10.noarch.rpm
```
