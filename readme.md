# VUE 源码分析

### MVVM

> MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。很早的时候微软就有了Silverlight ，MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开,它是将“数据模型数据双向绑定”的思想作为核心，因此在View和Model之间没有联系，通过ViewModel进行交互，而且Model和ViewModel之间的交互是双向的，因此视图的数据的变化会同时修改数据源，而数据源数据的变化也会立即反应到View上。
> 典型的应用有.NET的WPF，js框架VUE ,AngularJS,  Knockout等。
![mvvm](img/timg.jpg)

### MVVM 的出现，完美解决以下三个问题
>* 开发者在代码中大量调用相同的 DOM API, 处理繁琐 ，操作冗余，使得代码难以维护。
>* 大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
>* 当 Model 频繁发生变化，开发者需要主动更新到View ；当用户的操作导致 Model 发生变化，开发者同样需要将变化的数据同步到Model 中，这样的工作不仅繁琐，而且很难维护复杂多变的数据状态。

### 前端为什么要工程化
> 相对 HTML4 , HTML5 最大的亮点是它为移动设备提供了一些非常有用的功能，使得 HTML5 具备了开发App的能力, HTML5开发App 最大的好处就是跨平台、快速迭代和上线，节省人力成本和提高效率，因此很多企业开始对传统的App进行改造，逐渐用H5代替Native，到2015年的时候，市面上大多数App 或多或少嵌入都了H5 的页面,既然要用H5 来构建 App, 那View 层所做的事，就不仅仅是简单的数据展示了，它不仅要管理复杂的数据状态，还要处理移动设备上各种操作行为等等。因此，前端也需要工程化，也需要一个类似于MVC 的框架来管理这些复杂的逻辑，使开发更加高效

## VUE
> Vue 是采用 Object.defineProperty 的 getter 和 setter，并结合观察者模式来实现数据绑定的

> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
![brower](img/brower.png)
> 因此导致了VUE 不支持IE9 一下浏览器
### 双向数据绑定
>把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

![流程图](img/img1.png)

>* Observer 数据监听器，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者，内部采用Object.defineProperty的getter和setter来实现。
>* Compile 指令解析器，它的作用对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数。
>* Watcher 订阅者， 作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数。
>* Dep 消息订阅器，内部维护了一个数组，用来收集订阅者（Watcher），数据变动触发notify 函数，再调用订阅者的 update 方法。

> 从图中可以看出，当执行 new Vue() 时，Vue 就进入了初始化阶段，一方面Vue 会遍历 data 选项中的属性，并用 Object.defineProperty 将它们转为 getter/setter，实现数据变化监听功能；另一方面，Vue 的指令编译器Compile 对元素节点的指令进行扫描和解析，初始化视图，并订阅Watcher 来更新视图， 此时Wather 会将自己添加到消息订阅器中(Dep),初始化完毕
> 当数据发生变化时，Observer 中的 setter 方法被触发，setter 会立即调用Dep.notify()，Dep 开始遍历所有的订阅者，并调用订阅者的 update 方法，订阅者收到通知后对视图进行相应的更新。

### 目录结构
![目录](img/vuemulu.png)
![目录](img/vuemulu2.png)