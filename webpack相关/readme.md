# webpack 解析

![webpack](webpackimg/01.png)
![webpack](webpackimg/02.png)

> happypack:多核打包，加快 打包速度  
> 原理 nodejs 多线程模块 cluster

#### loader

webpack 的规则提供了多种配置形式

1.  { test: ... } 匹配特定条件
2.  { include: ... } 匹配特定路径
3.  { exclude: ... } 排除特定路径
4.  { and: [...] }必须匹配数组中所有条件
5.  { or: [...] } 匹配数组中任意一个条件
6.  { not: [...] } 排除匹配数组中所有条件

上述的所谓条件的值可以是

1.  字符串：必须以提供的字符串开始，所以是字符串的话，这里我们需要提供绝对路径
2.  正则表达式：调用正则的 test 方法来判断匹配
3.  函数：(path) => boolean，返回 true 表示匹配
4.  数组：至少包含一个条件的数组
5.  对象：匹配所有属性值的条件

###### module type

webpack 会有针对性地进行处理，现阶段实现了以下 5 种模块类型。

1.  javascript/auto：即 webpack 3 默认的类型，支持现有的各种 JS 代码模块类型 —— CommonJS、AMD、ESM
2.  javascript/esm：ECMAScript modules，其他模块系统，例如 CommonJS 或者 AMD 等不支持，是 .mjs 文件的默认类型
3.  javascript/dynamic：CommonJS 和 AMD，排除 ESM
4.  javascript/json：JSON 格式数据，require 或者 import 都可以引入，是 .json 文件的默认类型
5.  webassembly/experimental：WebAssembly modules，当前还处于试验阶段，是 .wasm 文件的默认类型

```code
{
  test: /\.js/,
  include: [
    path.resolve(__dirname, 'src'),
  ],
  type: 'javascript/esm', // 这里指定模块类型
}
```

use 字段可以是一个数组，也可以是一个字符串或者表示 loader 的对象。如果只需要一个 loader，也可以这样：use: { loader: 'babel-loader', options: { ... } }。

###### noParse

> 可以用于配置哪些模块文件的内容不需要进行解析。对于一些不需要解析依赖（即无依赖） 的第三方大型类库等，可以通过这个字段来配置，以提高整体的构建速度。

```code
module.exports = {
  // ...
  module: {
    noParse: /jquery|lodash/, // 正则表达式

    // 或者使用 function
    noParse(content) {
      return /jquery|lodash/.test(content)
    },
  }
}
```

## plugin

### optimization

```code
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    },
  },
}
```

"sideEffects": false,

#### resolve

1.  resolve.alias 配置某个模块的别名
2.  resolve.extensions 定义在进行模块路径解析时，webpack 会尝试帮你补全那些后缀名来进行查找
3.  resolve.modules 这样配置在某种程度上可以简化模块的查找，提升构建速度
4.  resolve.mainFields 有 package.json 文件则按照文件中 main 字段的文件名来查找文件
5.  resolve.mainFiles 当目录下没有 package.json 文件时，我们说会默认使用目录下的 index.js 这个文件，其实这个也是可以配置的，是的，使用 resolve.mainFiles 字段，
6.  resolve.resolveLoader 用于配置解析 loader 时的 resolve 配置，原本 resolve 的配置项在这个字段下基本都有

```code
resolve: {
	alias: {
  		utils$: path.resolve(__dirname, 'src/utils') // 只会匹配 import 'utils'
		},
   extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.css'],
  modules: [
    path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
    'node_modules', // 如果有一些类库是放在一些奇怪的地方的，你可以添加自定义的路径或者目录
  ],
    mainFields: ["module", "main"],
    mainFiles: ['index'], // 你可以添加其他默认使用的文件名
},
```

#### AST(静态语法分析树)

> uglify ,esprima,acorn(webpack), babel-types,aglify,shift,espres
> ![webpack](webpackimg/03.png)

##### 为什么 parcel 比 webpack 快？

> webpack 先解析成字符串 然后字符串解析成 AST(静态语法分析树) (acorn)
> parcel 直接解析 AST(静态语法分析树)

#### loader

> Loaders 是 webpack 提供的最激动人心的功能之一了。通过使用不同的 loader，webpack 有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换 scss 为 css，或者把下一代的 JS 文件（ES6，ES7)转换为现代浏览器兼容的 JS 文件，对 React 的开发而言，合适的 Loaders 可以把 React 的中用到的 JSX 文件转换为 JS 文件。

##### 实现机制

webpack 先解析成字符串 然后字符串解析成 AST(静态语法分析树) (acorn)

```bash
moduel.exports=function(content,map,meta){
     console.log('得到的数据：‘， content);
     console.log('loader预选处理‘， this.data.value);
}

moduel.exports.pitch=function(r1,r2,data){
     data.value='hello moto';
}
```

#### Plugins

> 插件（Plugins）是用来拓展 Webpack 功能的，它们会在整个构建过程中生效，执行相关的任务
> Loaders 和 Plugins 常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders 是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。
> ![webpack](webpackimg/04.png)

```bash
	const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
	class ConsoleLogOnBuildWebpackPlugin {//
			apply(compiler) {
			// 在 compiler的hooks中注册⼀个⽅法，当执⾏到该阶段时会调⽤
			compiler.hooks.run.tap(pluginName, compilation => { //运行时
				console.log("The webpack build process is starting!!!");
			});
		}
	}


	plugins: [
		new ConsoleLogOnBuildWebpackPlugin()
	]
```

##### 实现机制

webpack 利用了 tapable 这个库（https://github.com/webpack/tapable）来协助实现对于整个
构建流程各个步骤的控制。 tapable 定义了主要构建流程后，使用 tapable 这个库添加了各种各样的
钩子方法来将 webpack 扩展至功能十分丰富,这就是 plugin 的机制。

### Webpack 整体运行流程

![webpack](webpackimg/09.png)
![webpack](webpackimg/10.png)
![webpack](webpackimg/11.png)
![webpack](webpackimg/08.png)
![webpack](webpackimg/05.png)
![webpack](webpackimg/06.png)
![webpack](webpackimg/07.png)

##### webpack5 废除 happypack

#### webpack 性能优化：

> 经历多个 web 项目实战之后，归纳 webpack 缺陷 1.代码全量构建速度过慢，即使是很小的改动，也要等待很长时间才能查看更新与编译之后的结果（引入 HMR 热更新之后有明显的改进） 2.随着项目业务的复杂度增加，工程模块的体积也会急剧增大，构建后的模块通常要以 M 为单位计算 3.多个项目之间公用基础资源存在重复打包，基础库代码复用率不算太高
> 4.node 的单进程实现在 CPU 计算型的 loader 中表现不佳

#### webpack 分析工具

webpack-bundle-analyzer：自动帮你计算出各个模块在你的项目中的依赖和分部情况

#### 优化建议：

> 1.利用 dllPlugin 和 dllReferencePlugin 预编译资源模块：因为 npm 包不会进行修改，所以构建的时候没必要每次都去解析 2.使用 happypack 加速代码构建--开启多线程：happypack 在编译过程中除了利用多进程的模式加速编译，还同时开启了 cache 计算，能充分利用缓存读取构建文件 3.增加 uglify，在构建的时候发现，webpack build 走到 80%左右的时候，会发生很长时间的停滞，经测试对比发现正是 uglifyJS 在对我们 output 中的 bundle 部门进行压缩导致耗时过长，针对这块儿可以使用 webpack-uglify-parallel 来提成压缩速度（才用多核并行压缩的方式） 4.配置 external +libraryTarget，把各种库的源码 external 一下，使用了之后，webpack 就不会去打包，加快速度 5.生成输出的文件要走 chunkhash 而不用 trunk 6.激活代码热更新功能 HMR

## 版本更新

#### webpack4

> 另一个大的改变是 webpack 需要设置 mode 属性，可以是 development 或 production。
> webpack4 受 Parcel 打包工具启发，尽可能的让开发者运行项目的成本变低。为了做到 0 配置，webpack4 不再强制需要 webpack.config.js 作为打包的入口配置文件了，它默认的入口为'./src/'和默认出口'./dist'，
> webpack4 删除了 CommonsChunkPlugin 插件，它使用内置 API optimization.splitChunks 和 ** optimization.runtimeChunk **
>
> -   这意味着 webpack 会默认为你生成共享的代码块。其它插件变化如下:
>     NoEmitOnErrorsPlugin 废弃，使用 optimization.noEmitOnErrors 替代，在生产环境中默认开启该插件。
>     ModuleConcatenationPlugin 废弃，使用 optimization.concatenateModules 替代，在生产环境默认开启该插件。
>     NamedModulesPlugin 废弃，使用 optimization.namedModules 替代，在生产环境默认开启。
>     uglifyjs-webpack-plugin 升级到了 v1.0 版本, 默认开启缓存和并行功能。

#### Webpack5 展望

> 已经有不少关于 webpack5 的计划正在进行中了，包括以下：
>
> -   对 WebAssembly 的支持更加稳定
> -   支持开发者自定义模块类型
> -   去除 ExtractTextWebpackPlugig 插件，支持开箱即用的 CSS 模块类型
> -   支持 Html 模块类型
> -   持久化缓存
