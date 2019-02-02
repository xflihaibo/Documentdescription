#enzyme

> Enzyme 是由 AirBnb 团队发布和维护的测试实用程序库, 它提供了一个更好的、高级的 API 来处理测试中的 React 组件。Enzyme 的 API 和 jQuery 操作 DOM 一样灵活易用。（因为其使用的是 cheerio 库来解析虚拟 DOM，而 cheerio 的目标则是做服务器端的 jQuery）Enzyme 兼容大多数断言库和测试框架，如 chai、mocha、jasmine 等

shallow 方法并将结果存储在一个变量中。然后, 我们将为在其虚拟 dom 中渲染的不同的 React 元素 (HTML 或子组件) 查询 渲染的组件
render 方法将 React 组件渲染成静态的 HTML 字符串，然后分析这段 HTML 代码的结构，返回一个对象。它跟 shallow 方法非常像，主要的不同是采用了第三方 HTML 解析库 Cheerio，它返回的是一个 Cheerio 实例对象
mount 方法用于将 React 组件加载为真实 DOM 节点。

Shallow? Mount?
shallow() 渲染函数只渲染我们专门测试的组件, 它不会渲染子元素。相反, 我们将不得不 mount() 组件, 因为子组件 Header 不可用的 jsdom, 否则。

```code
.get(index)：返回指定位置的子组件的DOM节点
.at(index)：返回指定位置的子组件
.first()：返回第一个子组件
.last()：返回最后一个子组件
.type()：返回当前组件的类型np
.text()：返回当前组件的文本内容
.html()：返回当前组件的HTML代码形式
.props()：返回根组件的所有属性
.prop(key)：返回根组件的指定属性
.state([key])：返回根组件的状态
.setState(nextState)：设置根组件的状态
.setProps(nextProps)：设置根组件的属性
.simulate('click')；方法就在这个组件上触发某种行为
.simulate(event, mock)：用来模拟事件触发，event为事件名称，mock为一个event object
.instance()：返回测试组件的实例；
.find(selector) 查找选择器下的DOM 元素，返回一个数组。
.contains(node) 确定是否包含该节点或者一些节点 ，返回true 或者 false
.is(selector) 判断改节点是否能够匹配选择器的节点 ，返回true 或者 false
.hasClass(className) 判断是否包含这个类，返回true 或者 false
```

## 配置 react+jest+enzymeem 测试

```code
npm install babel-jest babel-core@^7.0.0-bridge.0  enzyme enzyme-adapter-react-16  jest jest-stare react-test-renderer --save-dev
```

jest jest-stare ：生成 测试 报表文档
react-test-renderer: 生成 react 快照

配置 jest.config.js

切记 .babelrc

```code
"@babel/env", node_models:不能为false
```

```code
const path = require('path');
console.log(path.resolve(__dirname));
module.exports = {
    rootDir: path.resolve(__dirname),
    collectCoverage: true, // 是否收集测试时的覆盖率信息
    //collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}'], // 哪些文件需要收集覆盖率信息
    // coverageDirectory: '<rootDir>/coverage', // 输出覆盖信息文件的目录
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>//build/', '<rootDir>/src/index.jsx'], // 统计覆盖信息时需要忽略的文件
    moduleNameMapper: {
        // 主要用于与webpack的resolve.alias匹配，注意正则写法
        '^src(.*)$': '<rootDir>/src$1'
    },
    setupFiles: ['<rootDir>/test/setup.js'], // 运行测试前可运行的脚本，比如注册enzyme的兼容
    testMatch: [
        // 匹配的测试文件
        '<rootDir>/test/**/?(*.)(spec|test).js'
    ],
    testURL: 'http://localhost/', // 运行环境下的URl
    transform: {
        //引用的文件配置
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(css|less|scss)$': '<rootDir>/test/cssTransform.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/fileTransform.js'
    },
    testPathIgnorePatterns: ['/node_modules/'],

    transformIgnorePatterns: [
        // 转换时需要忽略的文件
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'
    ]
};
```

> 设置 setup.js

```code
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
```

> css 引用报错 cssTransform.js

````code
module.exports = {
    process() {
        return 'module.exports = {};';
    },
    getCacheKey() {
        return 'cssTransform';
    }
};

>文件引用报错 fileTransform.js
```code
const path = require('path');
module.exports = {
    process(src, filename) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`;
    }
};
````

设置快捷方式 package.json

```code
   "test-reportone": "jest --testResultsProcessor=jest-stare ",
    "test": "jest"
```
