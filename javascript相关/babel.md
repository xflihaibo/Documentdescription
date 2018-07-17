## babel

## babel核心
>* babel-core  //babel-core是作为babel的核心存在，babel的核心api都在这个模块里面
>*   babel.transform：用于字符串转码得到AST
>*   babel.transformFile ：异步的文件转码方式，回调函数中的result与transform返回的对象一至
>*   abel.transformFileSync： 同步的文件转码方式，返回结果与transform返回的对象一至
>*   babel.transformFromAst： 将ast进行转译

### babel常用插件
>* babel-plugin-import  :按需加载插件。只需要引入模块即可，无需单独引入样式。
>* babel-plugin-imports-transform : import代码智能转换Babel插件，优化(webpack等)打包构建体积
>* babel-plugin-transform-decorators-legacy ： Decorators，装饰器
>* babel-preset-react：react是一个比较特别的官方推荐的presets，大概是因为比较火吧。加入了flow，jsx等语法
>* babel-preset-latest： latest是一个特殊的presets，包括了es2015，es2016，es2017的插件（目前为止，以后有es2018也会包括进去）
>* babel-preset-env：Babel的官网上在9月宣布ES2015/ES2016/ES2017等等ES20xx时代的presets通通被废弃（deprecated），取而代之的是babel-preset-env，并且承诺它将成为“未来不会过时的（future-proof）”解决方案。
>* babel-polyfill：polyfill在代码中的作用主要是用已经存在的语法和api实现一些浏览器还没有实现的api，，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。

>*  babel-preset-stage-0:为什么说“stage-0” 法力无边呢，因为它包含stage-1, stage-2以及stage-3的所有功能
>*      transform-do-expressions:这个插件是为了方便在 jsx写if/else表达式而提出的.
>*      transform-function-bind:这个插件其实就是提供过 :: 这个操作符来方便快速切换上下文this。
>*  babel-preset-stage-1:stage-1除了包含stage-2和stage-3，还包含了下面4个插件
>*     transform-class-constructor-call：这个模块已经废弃，不再使用了
>*     transform-class-properties
>*     transform-decorators
>*     transform-export-extensions
>*  babel-preset-stage-2除了包含stage-3，还包含了下面2个插件
>*     syntax-trailing-function-commas：支持函数的最后一个参数后面允许加逗号
>*     transform-object-reset-spread：这个插件支持解释扩展运算符
>*   babel-preset-stage-3
>*      transform-async-to-generator：插件用来支持es7中的async和await，
>*      transform-exponentiation-operator：这个插件可以支持 ** 操作符进行幂操作

#### babel-runtime && babel-plugin-transform-runtime
>* babel-runtime:transform-runtime只会对es6的语法进行转换，而不会对新api进行转换
>*     babel-runtime和 babel-plugin-transform-runtime的区别是，相当一前者是手动挡而后者是自动挡，每当要转译一个api时都要手动加上require('babel-runtime')，
>*     babel-plugin-transform-runtime 实际上是依赖babel-runtime因为babel编译es6到es5的过程中，babel-plugin-transform-runtime这个插件会自动polyfill es5不支持的特性，这些polyfill包就是在babel-runtime这个包里
