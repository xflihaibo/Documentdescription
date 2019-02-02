# Sinon

Sinon 具有独立的 spies, stub, mock 功能,Sinon 并不是独立的测试框架,它只是在测试中提供了上述的三种功能, 例如我们常用的测试框架 Mocha,Sinon 并不能完全替代 Mocha 的功能。

### Sinon 是怎么工作的

Sinon 通过允许我们简单的创建 test-doubles 从而帮助我们减少测试项编写的复杂度。正如它名字一样，Test-doubles 作用是在测试中替换某部分代码。上面提到的 ajax 的例子中，不需要创建服务端，我们可以使用 test-doubles 替换掉 Ajax 调用。在 timer 例子中，我们可以使用 test-doubles 来控制时间

听起来可能很复杂，但基本思想很简单。基于 javascript 的动态性，我们可以替换任何函数。Test-doubles 只是在这个思想的基础上走的更远了一些。使用 Sinon，我们可以使用 test-doubles 替换任何 javascript 函数，并提供很多方便测试的配置。

### Sinon 中 test-doubles 分三类

1.  Spies，提供了函数调用的信息，但不会改变其行为
2.  Stubs，类似 Spies，但是是完全替换目标函数。这可以让你随心所欲的控制函数–抛异常，返回指定结果等
3.  Mocks，提供了替换整个对象的能力此外，

> Sinon 还提供了其他的辅助功能，本文不包含下面的范围：

1.  Fake timers，用来控制时间，例如触发一个 setTimeout
2.  Fake XMLHttpResquest and server，可以用来伪造 Ajax 请求和响应

### 安装 Sinon

```bash
npm install sinon --save-dev
```

#### Spies

Spies 很简单，但其它很多功能依赖它。
spies 的主要用法是收集函数的调用信息。你可以用来验证一些事儿，例如函数是否被调用

```javascript
var spy = sinon.spy();

//我们可以像调用函数一样调用spy
spy('Hello', 'World');

//我们可以得到调用信息
console.log(spy.firstCall.args); //output: ['Hello', 'World']
```

> sinon.spy 函数返回一个 Spy 对象，该对象可以像函数一样被调用，它记录每次被调用信息。在上面的例子里，firstCall 属性包含了第一次调用的信息，例如 firstCall.args 表示调用时的参数列表。

虽然你可以像上面例子那样创建一个匿名 spies，但通常情况下你需要使用 spy 替换一个其它函数。

```javascript
var user = {
  ...
  setName: function(name){
    this.name = name;
  }
}

//为user.setName创建一个spy
var setNameSpy = sinon.spy(user, 'setName');

//现在，每次调用目标函数，spy都会记录相关信息
user.setName('Darth Vader');

//我们可以使用spy对象查看相关信息
console.log(setNameSpy.callCount); //output: 1

//非常重要的步骤--拆除spy
setNameSpy.restore();
```

> 上面例子展示了使用 spy 替换其它函数的写法，最重要的一点是：当你确定不再需要 spy 后，你记得恢复原始函数，参考例子中的最后一行。不然测试可能出现非预期行为。
> Spies 包含许多不同的属性，用来提供不同的信息。spy 文档列出了完整的属性列表。
> 在实际场景中，你可能不会经常使用 spies。你更多时候使用的是 stub，但是 spies 用来检测函数是否被调用非常方便：

https://juejin.im/post/5b32f45851882574e10e02eb













