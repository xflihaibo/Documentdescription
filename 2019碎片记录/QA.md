# QA

###变量和类型

> 1.JavaScript 规定了几种语言类型
> null 、undefined、boolean、 string、number、 array、object symbol(es6 新增)
> 2.JavaScript 对象的底层数据结构是什么
> 链表
> 3.Symbol 类型在实际开发中的应用、可手动实现一个简单的 Symbol
> Symbol 一种新的原始数据类型，表示独一无二的值
> Symbol 类型的 key 是不能通过 Object.keys()或者 for...in 来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义

```javascript
var s1 = Symbol('foo');
var s2 = Symbol('foo');
s1 === s2;

let obj = {
    [Symbol('name')]: '一斤代码',
    age: 18,
    title: 'Engineer'
};

Object.keys(obj); // ['age', 'title']

for (let p in obj) {
    console.log(p); // 分别会输出：'age' 和 'title'
}

Object.getOwnPropertyNames(obj); // ['age', 'title']
```

4.JavaScript 中的变量在内存中的具体存储形式

5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作

7.null 和 undefined 的区别

8.至少可以说出三种判断 JavaScript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

10.出现小数精度丢失的原因，JavaScript 可以存储的最大数字、最大安全数字，JavaScript 处理大数字的方法、避免精度丢失的方法
二进制。转换成整数计算 2 的 53 次方减一 1.展开运算符的原理 bignumber.js

```javascript
let baseArr = [1, 2, 3];

let arr = [0, ...baseArr, 4];
//transform
var arr = [0].concat(baseArr, [4])[0];
let baseObj = {name: 'a'};

let obj = {age: 1, ...baseObj, name: 'b'};
//transform
var obj = _extends({age: 1}, baseObj, {name: 'b'});
```

1.理解原型设计模式以及 JavaScript 中的原型规则

2.instanceof 的底层实现原理，手动实现一个 instanceof

4.实现继承的几种方式以及他们的优缺点

5.至少说出一种开源项目(如 Node)中应用原型继承的案例

6.可以描述 new 一个对象的详细过程，手动实现一个 new 操作符

7.理解 es6 class 构造以及继承的底层实现原理

手动实现 call、apply、bind
EventEmitter
防抖
节流
浅拷贝和深拷贝
数组去重、扁平、最值
数组乱序-洗牌算法
函数柯里化
手动实现 JSONP
模拟实现 promise
手动实现 ES5 继承
手动实现 instanceof
微前端
工程化
source-map 错误解析

roadog
umi
页面即路由
权限路由
layout 布局

webpack 5
打包速度快 体积小
chunk 置有改变
打包大小调节 写法改变
cache 缓存

