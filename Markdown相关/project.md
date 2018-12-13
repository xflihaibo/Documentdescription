# 项目

#### 项目简介

项目名称： 项目系统

简介：XX提供一整套的互联网解决方案，操作清晰，工作高效！

演示地址：http://loaclhost:3800/trial/subjects/person

#### 项目安装 启动 调试 发布流程
nrm 是一个 npm 源管理器，允许你快速地在 npm 源间切换；[参考地址](https://github.com/Pana/nrm)
```code
npm i -g nrm  // 安装nrm 管理镜像
nrm add tm http://192.168.1.185:7001/  // 安装太美镜像
nrm use tm   // 切换到太美镜像
// 进入到项目中下载依赖
npm inatall or yarn install

//启动项目
npm start

// 打包发布📦📦📦📦
npm run prod-dev
npm run prod-build

```



### 技术栈
开发中所用主要技术如下：

1. react:16.4.2 [参考文档](https://reactjs.org/)
2. antd:3.8.1 [参考文档](https://ant.design)
3. webpack:4.16.5 [参考文档](https://webpack.js.org/)
4. less:3.8.1 [参考文档](http://lesscss.org/)
5. es2015,es2016... [参考文档](http://es6.ruanyifeng.com/)
6. babel:7.0.0 [参考文档](https://babeljs.io/)
8. redux:4.0.0 [参考文档](https://redux.js.org/)
9. eslint:5.9.0 [参考文档](https://eslint.org/)
10. Markdown [参考文档](https://maxiang.io)

### 相关规范

工具主要使用 [eslint](https://eslint.org/)，js规范检查，希望编辑器安装有[prettier](https://prettier.io/)插件方便修复一些简单的空格、换行，单引号...，
[postcss](https://postcss.org/), [cssnano](https://cssnano.co/) 对css进行清洗去污 , 推荐[oocss](http://oocss.org/) 作为css规范开发本项目，方便开发，防止样式错乱🤪🤪，✌️✌️✌️

文件夹、文件命名统一使用大驼峰写法， js变量命名大驼峰写法，css 命名以文件名作为全局顶级变量，子元素命明方式 全局变量_模块名称方便阅读，修改样式，避免样式发生错乱或覆盖其他页面的样式；

###### 例如：

```code
index.html
    <div class="indexcontainer">
          <div className="indexcontainerr-navlist">
              ...
          </div>
   </div>     
```

#### 文件结构
```
+-- build // webpack 配置文件
|   +-- devServer.conf.js //本地服务器 配置代理地址
|   +-- getLocalIp.js //获取本地IP地址
|   +-- webpack.build.js
|   +-- webpack.common.js
|   +-- webpack.dev.js
|   +-- webpack.prod.js //生产环境
|   +-- webpack.test.js
+-- node_modules
|   +-- ...依赖包
+-- src
|   +-- actions //redux动作
|       +-- index.js
|   +-- assets //静态资源
|       +-- css
|       +-- font
|       +-- image
|   +-- config //全局配置参数
|       +-- index.js
|   +-- model
|   +-- router //路由
|       +-- componentMap.js
|       +-- index.js
|       +-- routers.js
|   +-- store  //redux仓库
|       +-- index.js
|   +-- view //页面
|       +-- component //组件
|       +-- container 
|       +-- page   //页面
|       +-- power  //权限控制
|       +-- acrtion.js
|       +-- app.jsx
|   +-- index.jsx //全局入口文件
+-- template //html模版
|   +-- dev.html
|   +-- prod.html
+-- package.json //依赖
+-- README.md  //说明文档
+-- .babelrc   //babel 配置
+-- .eslintrc.js //eslint 配置
```
