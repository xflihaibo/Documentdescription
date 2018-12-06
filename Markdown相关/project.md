# etrila

#### etrila简介

项目名称： eTrial 1期病房系统

简介：该项目为1期病房系统，为医院端开展新药临床试验提供一整套的互联网解决方案。

演示地址：http://loaclhost/trial/subjects/person

#### 项目安装 启动 调试 发布流程

```code
npm i -g nrm  安装nrm 管理镜像
nrm add tm http://192.168.1.185:7001/  安装太美镜像
nrm use tm   切换到太美镜像
进入到项目中下载依赖
npm inatall or yarn install

启动项目
npm start

打包发布📦📦📦📦
npm run prod-build

```



### 技术栈
开发中所用主要技术如下：

1. react:16.4.2 [参考文档](https://reactjs.org/)
2. antd:3.8.1 [参考文档](https://ant.design)
3. webpack:4.16.5 [参考文档](https://webpack.js.org/)
4. less:3.8.1 [参考文档](http://lesscss.org/)
5. es2015
6. babel:7.0.0 [参考文档](https://babeljs.io/)
8. redux:4.0.0 [参考文档](https://redux.js.org/)
9. eslint:5.9.0 [参考文档](https://eslint.org/)

### 相关规范

工具主要使用 [eslint](https://eslint.org/)js规范检查≈，希望编辑器安装有[prettier](https://prettier.io/)插件方便修复一些简单的规范 [postcss](https://postcss.org/)对css进行清洗去污 , [cssnano](https://cssnano.co/) , 推荐[oocss](http://oocss.org/) 作为css规范开发本项目，方便开发，防止样式错乱🤪🤪，✌️✌️✌️

文件夹命名使用统一小写，文件命名小写 js变量命名大驼峰写法，css 命名以文件名作为全局顶级变量，子元素命明方式 全局变量_模块名称方便改写





#### 文件结构
```
+-- build
|   +-- begin-with-the-crazy-ideas.textile
|   +-- on-simplicity-in-technology.markdown
+-- node_modules
|   +-- ...依赖
+-- src
|   +-- footer.html
|   +-- header.html
+-- template
|   +-- dev.html
|   +-- prod.html
+-- package.json
+-- README.md
+-- .babelrc
+-- .eslintrc.js
```
