# babel

> -   Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。
> -   babel-polyfill 主要包含了 core-js 和 regenerator 两部分
> -   babel-polyfill：提供了如 ES5、ES6、ES7 等规范中 中新定义的各种对象、方法的模拟实现。
> -   regenerator：提供 generator 支持，如果应用代码中用到 generator、async 函数的话用到。

## babel 核心

> -   babel-core //babel-core 是作为 babel 的核心存在，babel 的核心 api 都在这个模块里面
> -   babel.transform：用于字符串转码得到 AST
> -   babel.transformFile ：异步的文件转码方式，回调函数中的 result 与 transform 返回的对象一至
> -   abel.transformFileSync： 同步的文件转码方式，返回结果与 transform 返回的对象一至
> -   babel.transformFromAst： 将 ast 进行转译

### babel 常用插件

> -   babel-plugin-import :按需加载插件。只需要引入模块即可，无需单独引入样式。
> -   transform-remove-console：使用这个插件，编译后的代码都会移除 console.\*
> -   transform-object-assign 我们在代码中使用 Object.assign 方法，
> -   babel-plugin-imports-transform : import 代码智能转换 Babel 插件，优化(webpack 等)打包构建体积
> -   babel-plugin-transform-decorators-legacy ： Decorators，装饰器
> -   babel-preset-react：react 是一个比较特别的官方推荐的 presets，大概是因为比较火吧。加入了 flow，jsx 等语法
> -   babel-preset-latest： latest 是一个特殊的 presets，包括了 es2015，es2016，es2017 的插件（目前为止，以后有 es2018 也会包括进去）
> -   babel-preset-env：Babel 的官网上在 9 月宣布 ES2015/ES2016/ES2017 等等 ES20xx 时代的 presets 通通被废弃（deprecated），取而代之的是 babel-preset-env，并且承诺它将成为“未来不会过时的（future-proof）”解决方案。
> -   babel-polyfill：polyfill 在代码中的作用主要是用已经存在的语法和 api 实现一些浏览器还没有实现的 api，，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。

> -   babel-preset-stage-0:为什么说“stage-0” 法力无边呢，因为它包含 stage-1, stage-2 以及 stage-3 的所有功能
> -   transform-do-expressions:这个插件是为了方便在 jsx 写 if/else 表达式而提出的.
> -   transform-function-bind:这个插件其实就是提供过 :: 这个操作符来方便快速切换上下文 this。
> -   babel-preset-stage-1:stage-1 除了包含 stage-2 和 stage-3，还包含了下面 4 个插件
> -   transform-class-constructor-call：这个模块已经废弃，不再使用了
> -   transform-class-properties
> -   transform-decorators
> -   transform-export-extensions
> -   babel-preset-stage-2 除了包含 stage-3，还包含了下面 2 个插件
> -   syntax-trailing-function-commas：支持函数的最后一个参数后面允许加逗号
> -   transform-object-reset-spread：这个插件支持解释扩展运算符
> -   babel-preset-stage-3
> -   transform-async-to-generator：插件用来支持 es7 中的 async 和 await，
> -   transform-exponentiation-operator：这个插件可以支持 \*\* 操作符进行幂操作

#### babel-runtime && babel-plugin-transform-runtime

> -   babel-runtime:transform-runtime 只会对 es6 的语法进行转换，而不会对新 api 进行转换
> -   babel-runtime 和 babel-plugin-transform-runtime 的区别是，相当一前者是手动挡而后者是自动挡，每当要转译一个 api 时都要手动加上 require('babel-runtime')，
> -   babel-plugin-transform-runtime 实际上是依赖 babel-runtime 因为 babel 编译 es6 到 es5 的过程中，babel-plugin-transform-runtime 这个插件会自动 polyfill es5 不支持的特性，这些 polyfill 包就是在 babel-runtime 这个包里

## Babel7

> -   Babel 团队会通过使用 “scoped” packages 的方式，来给自己的 babel package name 加上 @babel 命名空间（详情），这样以便于区分官方 package 以及 非官方 package，所以 babel-core 会变成 @babel/core
> -   移除（并且停止发布）所有与 yearly 有关的 presets（preset-es2015),@babel/preset-env 会取代这些 presets，这是因为 @babel/preset-env 囊括了所有 yearly presets 的功能，而且 @babel/preset-env 还具备了针对特定浏览器进行“因材施教”的能力
> -   放弃 Stage presets（@babel/preset-stage-0 等），选择支持单个 proposal。相似的地方还有，会默认移除 @babel/polyfill 对 proposals 支持
> -   有些 package 已经换名字：所有 TC39 proposal plugin 的名字都已经变成以 @babel/plugin-proposal 开头，替换之前的 @babel/plugin-transform（详情）。所以 @babel/plugin-transform-class-properties 变成 @babel/plugin-proposal-class-properties
> -   babel-upgrade，Babel 团队开发的新工具，旨在用来处理升级过程中的琐事（changes）：目前只是针对 package.json 的 dependencies 以及 .babelrc 配置。

### 新版本 stage 包含相应的插件

```code
{
  plugins: [
    // Stage 0
    "@babel/plugin-proposal-function-bind",

    // Stage 1
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { loose: false }],
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: false }],
    "@babel/plugin-proposal-do-expressions",

    // Stage 2
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-proposal-json-strings",
  ],
}
```
