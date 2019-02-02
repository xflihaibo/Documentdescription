# Jest

jest是 Facebook 的一套开源的 JavaScript 测试框架， 它自动集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具，是一款几乎零配置的测试框架。并且它对同样是 Facebook 的开源前端框架 React 的测试十分友好。

[官方文档](https://jestjs.io/zh-Hans/)

单元测试特指被测试对象为程序中最小组成单元的测试。这里的最小组成单元可以是一个函数、一个类等等。
## 安装Jest

####2.1 初始化package.json
> 在commad中输入以下命令，初始化前端项目并生成package.json：
```code
npm init -y
```
#### 2.2 安装Jest及相关依赖
>在commad中中输入以下命令，安装测试所需要的依赖：

```code
cnpm  install  jest babel-jest @babel/core babel-core@^7.0.0-bridge.0  @babel/preset-env --save-dev
```
> babel-jest、@babel/core、 @babel/preset-env、这几个依赖是为了让我们可以使用ES6的语法特性进行单元测试，ES6提供的 import 来导入模块的方式，Jest本身是不支持的。

#### 2.3 添加.babelrc文件

> 在项目的根目录下添加.babelrc文件，并在文件复制如下内容:

```code
{
 "presets": ["@babel/preset-env"],
  "env": {
    "test": {
      "presets": [["@babel/env"]]
    }
  }
}
```
#### 2.4 修改package.json中的test脚本

>打开package.json文件，将script下的test的值修改为jest：

```code
"scripts": {
  "test": "jest"
}
```
#### 3. 编写你的第一个Jest测试
>创建src和test目录及相关文件

>在项目根目录下创建src目录，并在src目录下添加index.js文件
>在项目根目录下创建test目录，并在test目录下创建index.test.js文件
>Jest会自动找到项目中所有使用.spec.js或.test.js文件命名的测试文件并执行，通常我们在编写测试文件时遵循的命名规范：测试文件的文件名 = 被测试模块名 + .test.js，例如被测试模块为index.js，那么对应的测试文件命名为index.test.js。

>在src/index.js中创建被测试的模块

```code
export default {
  sum(a, b) {
    return a + b;
  }
}
```

>在test/index.test.js文件中创建测试用例

```code
import index  from '../src/index';

test('sum(2 + 2) 等于 4', () => {
  expect(index.sum(2, 2)).toBe(4);
})
```
>运行npm run test, Jest会在command中打印出以下消息：

```code
> jest

 PASS  test/index.test.js
  ✓ sum(2+2) 等于4 (5ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.357s
Ran all test suites.

```
####  jest.config.js
> 新建jest.config.js并添加配置项module.exports = { 配置项 }

#####配置项 
> testMatch:设置识别哪些文件是测试文件（glob形式），与testRegex互斥，不能同时写
```code
testMatch: ['\*\*/\_\_tests\_\_/\*\*/\*.js?(x)','\*\*/?(*.)(spec|test).js?(x)']
```

> testRegex:设置识别哪些文件是测试文件（正则形式），与testMatch互斥，不能同时写
```code
testRegex: '(/\_\_tests\_\_).*|(\\\\.|/)(test|spec))\\\\.jsx?$'
```

> testRnviroment:测试环境，默认值是：jsdom，可修改为node
```code
testEnvironment: 'jsdom'
```

> rootDir:默认值：当前目录，一般是package.json所在的目录
```code
rootDir: ' '
```

> moduleFileExtensions:测试文件的类型
```code
moduleFileExtensions: ['js','json','jsx','node']
```
>setupFiles：配置文件，在运行测试案例代码之前，Jest会先运行这里的配置文件来初始化指定的测试环境
>moduleFileExtensions：代表支持加载的文件名
>testPathIgnorePatterns：用正则来匹配不用测试的文件
>collectCoverage：是否生成测试覆盖报告，如果开启，会增加测试的时间
>collectCoverageFrom：生成测试覆盖报告是检测的覆盖文件
>moduleNameMapper：代表需要被Mock的资源名称
>transform：用babel-jest来编译文件，生成ES6/7的语法






>   配置
```code
module.exports = {
    testMatch: ['<rootDir>/test/\*\*/\*.js'],
    testEnvironment: 'jsdom',
    rootDir: '',
    moduleFileExtensions: ['js','json','jsx','node']
}

``


####常用的语法

>分组（Test Group）：descripe(描述语,function)
>测试用例（Test Case）：test(描述语,function)
>断言（Assert）：expect(运行需测试的方法并返回实际结果).toBe(预期结果)


> .expect() :期望
expect (2 + 2) 返回一个"期望"的对象
> .toBe(): 是匹配器
>.not修饰符允许你测试结果不等于某个值的情况
>.toEqual() 匹配器会递归的检查对象所有属性和属性值是否相等，所以如果要进行应用类型的比较时，请使用.toEqual匹配器而不是.toBe。
>.toHaveLength可以很方便的用来测试字符串和数组类型的长度是否满足预期。
>.toThorw可能够让我们测试被测试方法是否按照预期抛出异常，但是在使用时需要注意的是：我们必须使用一个函数将将被测试的函数做一个包装，正如上面getIntArrayWrapFn所做的那样，否则会因为函数抛出导致该断言失败。
>.toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。
>assertions（1）代表的是在当前的测试中至少有一个断言是被调用的，否则判定为失败

```code
expect({a:1}).toBe({a:1})//判断两个对象是否相等
expect(1).not.toBe(2)//判断不等
expect(n).toBeNull(); //判断是否为null
expect(n).toBeUndefined(); //判断是否为undefined
expect(n).toBeDefined(); //判断结果与toBeUndefined相反
expect(n).toBeTruthy(); //判断结果为true
expect(n).toBeFalsy(); //判断结果为false
expect(value).toBeGreaterThan(3); //大于3
expect(value).toBeGreaterThanOrEqual(3.5); //大于等于3.5
expect(value).toBeLessThan(5); //小于5
expect(value).toBeLessThanOrEqual(4.5); //小于等于4.5
expect(value).toBeCloseTo(0.3); // 浮点数判断相等
expect('Christoph').toMatch(/stop/); //正则表达式判断
expect(['one','two']).toContain('one'); //是否包含对应的值，括号里写上数组、字符串
expect(compileAndroidCode).toThrow(); //抛错误
toBeInstanceOf(class)：判断是不是class的实例
anything(value)：匹配除了null和undefined以外的所有值
toHaveBeenCalled()：用来判断mock function是否被调用过
toHaveBeenCalledTimes(number)：用来判断mock function被调用的次数
extend(matchers)：自定义一些断言
```

#### 主要的生命周期函数：
afterAll(fn, timeout): 当前文件中的所有测试执行完成后执行 fn, 如果 fn 是 promise，jest 会等待 timeout 毫秒，默认 5000
afterEach(fn, timeout): 每个 test 执行完后执行 fn，timeout 含义同上
beforeAll(fn, timeout): 同 afterAll，不同之处在于在所有测试开始前执行
beforeEach(fn, timeout): 同 afterEach，不同之处在于在每个测试开始前执行


#### jest对象

jest.fn(implementation)：返回一个全新没有使用过的mock function，这个function在被调用的时候会记录很多和函数调用有关的信息
jest.mock(moduleName, factory, options)：用来mock一些模块或者文件
jest.spyOn(object, methodName)：返回一个mock function，和jest.fn相似，但是能够追踪object[methodName]的调用信息，类似Sinon



#### 生成测试覆盖率报告
Jest 内置了测试覆盖率工具istanbul，要开启，可以直接在命令中添加 --coverage 参数，或者在 package.json 文件进行更详细的配置
```code
jest --coverage
```


#### 调试JEST测试
要调试(debug)一个Jest测试，比如说"index.test.js"，我们需要使用如下的node指令来实现：
```code
node debug --harmony .\node_modules\jest-cli\bin\jest.js --runInBand myView-test.js
```
"node debug"将会启动node自带的调试器。"debug"会调用一个V8引擎调试器的wrapper。这个wrapper提供了一系列的指令，用于在代码中跳进跳出和跟踪，而这些指令都不会出现在V8的"node -debug"中。（我承认它们看起来很相似，一个"-"符号之差）
"-harmony"标志是为了让Jest正确地运行。更多关于harmony的信息可以戳这里。
".\node_modules\jest-cli\bin\jest.js"就是Jest的入口。这个文件会在我调用"\node_modules.bin"里的"Jest"时被调用。
"-runInBand"告诉Jest在当前的进程中运行所有测试，而不是再启动一个进程。Jest默认就会启动多个进程并行的运行测试。如下为源码中关于这个选项的描述的片段（在.\node_modules\jest-cli\bin\jest.js中）
"index.test.js"就是我们想要debug的测试文件。像这样使用相对路径是没有问题的，因为Jest会把它转换为一段正则表达式。
```code
cont, c - 继续执行
next, n - 跳到下一步
step, s - 跳进
out, o - 跳出
pause - 暂停执行的代码 (就像开发工具中的暂停按钮)

setBreakpoint(), sb() - 在当前行设置断点
setBreakpoint(line), sb(line) - 特定行设置断点
setBreakpoint('fn()'), sb(...) - 在函数体内的第一段声明中设置断点
setBreakpoint('script.js', 1), sb(...) - 在script.js的第一行设置断点
clearBreakpoint, cb(...) - 清楚断点

backtrace, bt - 打印当前执行帧的回溯
list(5) - 列出脚本源代码的5行内容（前面和后面5行）
watch(expr) - 向观察列表中添加表达式
unwatch(expr) - 去掉观察列表中的表达式
watchers - 列出所有的watcher以及它们的值（在每段断点处自动列出）
repl - 在调试脚本的内容时打开调试器的repl用于评估

run - 运行脚本（在调试开始时自动运行）
restart - 重启脚本
kill - 结束脚本
```

