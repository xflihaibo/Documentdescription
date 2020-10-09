## babel

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
> -          transform-do-expressions:这个插件是为了方便在 jsx写if/else表达式而提出的.
> -          transform-function-bind:这个插件其实就是提供过 :: 这个操作符来方便快速切换上下文this。
> -   babel-preset-stage-1:stage-1 除了包含 stage-2 和 stage-3，还包含了下面 4 个插件
> -         transform-class-constructor-call：这个模块已经废弃，不再使用了
> -         transform-class-properties
> -         transform-decorators
> -         transform-export-extensions
> -   babel-preset-stage-2 除了包含 stage-3，还包含了下面 2 个插件
> -         syntax-trailing-function-commas：支持函数的最后一个参数后面允许加逗号
> -         transform-object-reset-spread：这个插件支持解释扩展运算符
> -   babel-preset-stage-3
> -          transform-async-to-generator：插件用来支持es7中的async和await，
> -          transform-exponentiation-operator：这个插件可以支持 ** 操作符进行幂操作

#### babel-runtime && babel-plugin-transform-runtime

> -   babel-runtime:transform-runtime 只会对 es6 的语法进行转换，而不会对新 api 进行转换
> -         babel-runtime和 babel-plugin-transform-runtime的区别是，相当一前者是手动挡而后者是自动挡，每当要转译一个api时都要手动加上require('babel-runtime')，
> -         babel-plugin-transform-runtime 实际上是依赖babel-runtime因为babel编译es6到es5的过程中，babel-plugin-transform-runtime这个插件会自动polyfill es5不支持的特性，这些polyfill包就是在babel-runtime这个包里
