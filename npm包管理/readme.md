## npm 上传自己的包

```json
npm install allblue   //检查npm 是否存在
```

-   如果没有 新建一个 allblue 的文件夹

```json
cd allblue
npm init  -y
```

-   进入 package.json 文件

```json
 "name": "allblue", //必填项目名称
 "version": "0.0.1" //必填版本信息
```

-   登录 npm

```json
 npm login //输入用户名、密码和邮箱
```

-   更新 npm 包 修改 package.json 文件夹中的 version 版本信息
    执行

```json
 npm publish
```

-   利用 npm 撤销发布包

```json
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

> -   RPM 软件包管理器
>     rpm －e xv
>     RPM 的常用参数还包括：
>     －vh：显示安装进度；
>     －U：升级软件包；
>     －qpl：列出 RPM 软件包内的文件信息；
>     －qpi：列出 RPM 软件包的描述信息；
>     －qf：查找指定文件属于哪个 RPM 软件包；
>     －Va：校验所有的 RPM 软件包，查找丢失的文件；
>     －qa: 查找相应文件，如 rpm -qa mysql
>     RPM 主要功能
>     安装、卸载、升级和管理软件
>     组件查询功能
>     验证功能
>     软件包 GPG 和 MD5 数字签名的导入、验证和发布
>     软件包依赖处理
>     选择安装
>     网络远程安装功能
>     rpm 命令：遵循 GPL 协议且功能强大的包管理，它可以建立、安装、请求、确认、和卸载软件包。间接的提升了 Linux 的易用性
>     -e 卸载 rpm 包
>     -q 查询已安装的软件信息
>     -i 安装 rpm 包
>     -u 升级 rpm 包
>     --replacepkgs 重新安装 rpm 包
>     --justdb 升级数据库，不修改文件系统
>     --percent 在软件包安装时输出百分比
>     --help 帮助
>     --version 显示版本信息
>     -c 显示所有配置文件
>     -d 显示所有文档文件
>     -h 显示安装进度
>     -l 列出软件包中的文件
>     -a 显示出文件状态
>     -p 查询/校验一个软件包文件
>     -v 显示详细的处理信息
>     --dump 显示基本文件信息
>     --nomd5 不验证文件的 md5 支持
>     --nofiles 不验证软件包中的文件
>     --nodeps 不验证软件包的依赖关系
>     --whatrequires 查询/验证需要一个依赖性的软件包
>     --whatprovides 查询/验证提供一个依赖性的软件包
>     范例 1：安装软件

```code
[root@hnlinux lx1 3 8.c o m]# rpm -hvi dejagnu-1.4.2-10.noarch.rpm
　　警告：dejagnu-1.4.2-10.noarch.rpm: V3 DSA 签名：NOKEY, key ID db42a60e
　　准备...
　　########################################### [100%]
　　范例 2： 显示软件安装信息
　　[root@hnlinux lx1 3 8.c o m]# rpm -qi dejagnu-1.4.2-10.noarch.rpm
```
