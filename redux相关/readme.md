## react && redux 浅析
* React 本身只涉及UI层 如果搭建大型应用，必须搭配一个前端框架
* Flux 是一种架构思想 ，专门解决软件结构的问题，它跟mvc架构是同一类东西，更加简单清晰
* 批处理：批处理就是对某对象进行批量的处理，通常被认为是一种简化的脚本语言
* 事务： 一个事务是一个不可分割的工作单位，事务中包括的诸操作要么都做，要么都不做 , react的setState同步线程执行

#### setState执行
![react](./img/React.png)


* Stack reconcile 会深度优先遍历所有的 Virtual DOM 节点，进行Diff。它一定要等整棵 Virtual DOM 计算完成之后，才将任务出栈释放主线程所以，在浏览器主线程被 React更新状态任务占据的时候，用户与浏览器进行任何的交互都不能得到反馈，只有等到任务结束，才能突然得到浏览器的响应。
* react16 :为解决setState 阻塞 而 React Fiber   ReactDOMFiber.render();
* Reactdomfiber.render(Fiberexample/>, document. getelementbyid('app-container')
* Reconciler就是我们所说的Virtul DOM,用于计算新老∨iew的差异。React16之前的 Reconciler叫叫 Stack reconciler。 Fiber是 React的新 reconciler。
* Renderer则是和平台相关的代码,负责将∨ew的变化渲染到不同的平台上 DOM、 Canvas、 Native、VR、 Webgl等等平台都有自己的 renderer。我们
可以看出 reconciler是Reac的核心代码,是各个平台共用的。因此这次 React的 reconciler更新到 Fiber架构是一次重量级的核心架构的更换

### 生命周期
![fllux](./img/life.jpg)

* getDefaultProps()  设置默认的props，也可以用dufaultProps设置组件的默认属性.
* getInitialState()  在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props.
* componentWillMount()  组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state.
* render()  react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了.
* componentDidMount()  组件渲染之后调用，只调用一次.
* componentWillReceiveProps()  组件初始化时不调用，组件接受新的props时调用.
* shouldComponentUpdate(nextProps, nextState)  react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候.
* componentWillUpdata(nextProps, nextState) 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state.
* render 组件渲染.
* componentDidUpdate() 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点.
* componentWillUnmount() 组件将要卸载时调用，一些事件监听和定时器需要在此时清除.

### Fiber
* Fiber 是一种轻量的执行线程，同线程一样共享定址空间，线程靠系统调度，并且是抢占式多任务处理，Fiber 则是自调用，协作式多任务处理。

#### Fiber Reconcile 与 Stack Reconcile 主要有两方面的不同。
* 首先，使用协作式多任务处理任务。将原来的整个 Virtual DOM 的更新任务拆分成一个个小的任务。每次做完一个小任务之后，放弃一下自己的执行将主线程空闲出来，看看有没有其他的任务。如果有的话，就暂停本次任务，执行其他的任务，如果没有的话，就继续下一个任务。

#### Fiber整个页面更新并重渲染过程分为两个阶段。
* 由 reconcile和 renderer两个概念引出的是 phase的概念。 Phase指的是Reac组件渲染时的阶段
>* Reconcile 阶段。此阶段中，依序遍历组件，通过diff 算法，判断组件是否需要更新，给需要更新的组件加上tag。遍历完之后，将所有带有tag的组件加到一个数组中。这个阶段的任务可以被打断。
>* Commit 阶段。根据在 Reconcile 阶段生成的数组，遍历更新DOM，这个阶段需要一次性执行完。如果是在其他的渲染环境 -- Native，硬件，就会更新对应的元素。

##  flux
* Web 应用是一个状态机，视图与状态是一一对应的。
*  所有的状态，保存在一个对象里面。

view :视图层
Action：动作
dispatcher：派发起
store：数据             


### 应用
* Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。

>* store.getState() 获取state
>* store.dispatch() 触发state
>* store.subscribe() 注册state变化监听
>*  createStore(reducer,[initialstate]) 创建
> Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。

![fllux](./img/flux.png)
![fllux](./img/flux2.png)

## Redux

![fllux](./img/redux.png)
![fllux](./img/redux2.png)
![fllux](./img/redux3.png)
![fllux](./img/redux4.png)


装饰器。mobx









