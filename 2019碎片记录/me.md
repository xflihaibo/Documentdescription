# eTrial

[TOC]

#### eTrial简介

项目名称： eTrial 1期病房系统

简介：该项目为1期病房系统，  主要为医院开展新药临床试验提供一整套的互联网解决方案，操作清晰，工作高效！

演示地址：http://loaclhost:3800/trial/home

#### 项目安装 启动 调试 发布流程

nrm 是一个 npm 源管理器，允许你快速地在 npm 源间切换；[参考地址](https://github.com/Pana/nrm)

```bush
npm i -g nrm  //安装nrm 管理镜像
nrm add tm http://npm.taimei.com  //安装太美镜像
nrm use tm   //切换到太美镜像
//进入到项目中下载依赖
npm inatall or yarn install

启动项目
npm start

打包发布📦📦📦📦
npm run prod-dev
npm run prod-build

```

### 技术栈
开发中所用主要技术如下：

1. react: [参考文档](https://reactjs.org/)
2. antd:[参考文档](https://ant.design)
3. webpack:[参考文档](https://webpack.js.org/)
4. less:[参考文档](http://lesscss.org/)
5. es6 [参考文档](http://es6.ruanyifeng.com/)
6. babel:[参考文档](https://babeljs.io/)
8. redux:[参考文档](https://redux.js.org/)
9. eslint:[参考文档](https://eslint.org/)
10. Markdown [参考文档](https://maxiang.io)
10. jest [参考文档](https://jestjs.io/zh-Hans)
11.  enzyme [参考文档](https://airbnb.io/enzyme)
12. iconfont [参考文档](https://www.iconfont.cn)  图标icon 

### 规范

* 工具主要使用 [eslint](https://eslint.org/)，js规范检查，希望编辑器安装有[prettier](https://prettier.io/)插件方便修复一些简单的空格、换行，单引号...，
* [postcss](https://postcss.org/), [cssnano](https://cssnano.co/) 对css进行清洗去污 , 使用[oocss](http://oocss.org/) 作为css规范开发本项目，防止样式错乱🤪🤪，✌️✌️✌️
* 文件夹、文件命名统一使用**全小写**，
* js变量命名小驼峰写法,**常量全大写**,名词之间加下划线，全局公共的js方法以`tms`开头，类命名首字母开头大写    
* 为了方便区分变量来源：

>- 接口字段以`api `开头例如（apiGetName） 
>-  redux 动作(actions) 统一以`action`开头 例如（actionChangeProject） ；
>-  权限控制文件(authconfig) 统一以`auth`开头 例如（authGetButton）；
>-  全局配置(globalconfig) 统一以`global`开头 例如（globalBaseName）；
>-  路由(router) 统一以`router`开头 例如（routerComponentMap）；
>- css变量命名**小写**，每个文件开头以文件名作为全局唯一的class名，子元素命明方式 全局_模块名称方便阅读，修改，避免样式发生错乱或覆盖其他页面的样式，全局公共的css以tms开头
>-  编写组件，要区分公共组件和业务组件，每个组件有完善的说明文档，无外边距

```html
experiment.js
    <div className="experiment-container">
          <div className="experiment-container-navlist">
              ...
          </div>
   </div>     
```

### 文件夹结构

```
+-- build // webpack 配置文件 
|   +-- devServer.conf.js //本地服务器 配置代理地址
|   +-- getLocalIp.js //获取本地IP地址
|   +-- webpack.build.js
|   +-- webpack.common.js
|   +-- webpack.dev.js
|   +-- webpack.prod.js //生产环境
|   +-- webpack.testing.js
+-- coverage 测试报告
+-- node_modules
|   +-- ...项目依赖包
+-- src
|   +-- actions // actions redux
|       +-- index.js
|   +-- assets // assets 静态资源文件
|       +-- css
|       +-- font
|       +-- image
|   +-- authconfig  //权限控制
|   +-- businesscomp //业务组件
|   +-- component //公共组件
|   +-- globalconfig //全局配置参数
|       +-- index.js
|   +-- router //路由
|       +-- routermap.js
|       +-- index.js
|   +-- store  //redux仓库
|       +-- index.js
|   +-- view //页面
|       +-- home 首页模块
|       +--subjectsmanage 受试者模块
|       +-- acrtion.js //api
|       +-- app.jsx 
|   +-- index.jsx //入口文件
+-- template //html模版文件
|   +-- dev.html
|   +-- prod.html
+-- test //项目测试用例
|   +-- src //同项目文件夹一致
|   +-- setup.js  //运行测试前可运行的脚本，比如注册enzyme的兼容
|   +-- cssTransform.js // 忽略css 引用的文件
|   +-- fileTransform.js // 忽略file、img 引用的文件
+-- package.json //依赖
+-- README.md  //说明文档
+-- .babelrc   //babel 配置
+-- .eslintrc.js //eslint 配置
+-- jsconfig.json //vscode配置
+-- jest.config..js //jset 配置
```

### 文件夹描述
- [build webpack打包配置](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/build)
- [actions redux动作](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/actions/index.md)
- [assets 静态资源文件](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/assets/index.md)
- [authconfig 权限](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/power/index.md)
- [businesscomp 业务组件](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/power/index.md)
- [component 组件](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/power/index.md)
- [globalconfig 配置](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/config/index.md)
- [router 路由](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/router/index.md)
- [store redux仓库](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/store/index.md)
- [view 页面](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/src/view/index.md)
- [test 测试](http://192.168.1.249/eTrial/eTrial/blob/D_1.6.0/trial-front/test)

