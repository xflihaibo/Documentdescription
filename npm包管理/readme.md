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
nrm add registry http://192.168.10.127:8081/repository/npm-public/  添加源
nrm del  taobao删除对应的源
```

## npx

-   npm v5.2.0 引入的一条命令（npx），npx 会帮你执行依赖包里的二进制文件。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验
-   全局安装 parcel，但有时不同项目使用不同版本，不允许使用全局包，只能考虑下面一些方法
    使用 npm scripts，在 package.json 加一个 script ,将 node_modules 的可执行目录加到 PATH 中.指定可执行命令路径
-   当我们执行 npx parcel index.html 时，会自动去./node_modules/.bin 目录下搜索。
