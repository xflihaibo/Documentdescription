# chrome 相关

##### console.table

console.warn("凡人你居然敢窥视我"); //警告
console.error("天兵天将，把这个凡人给我打入地狱");//错误
console.clear()//清理控制台
console.time("神机妙算"); console.timeEnd("神机妙算"); //性能测试
console.log('%c 你%c 说%c 什么%c?', 'background: #000; color: #fff','color: blue','color: red; border-bottom: 1px solid red','background: blue; color: #fff; border-radius: 50%;');

> 这一个小技巧在  开发者中并没有多少人知道.如果你有一个数组(或者是类数组的对象，或者就是一个对象)，你可以使用 console.table 方法将它以一个漂亮的表格的形式打印出来

###### 异步 console

console.table(await navigator.getBattery())

#### 通过'h'来隐藏

> 你可以通过简单的按一下'h'来隐藏你在元素面板中选择的元素。再次按下'h'可以使它出现。这在某些的时候是很有用的，例如你想截图，

#### 使用 control!(按钮)

如果你只是想移动你当前选中的元素，在 DOM 结构中往上一点或者往下一点，而不是拖动和放置，你同样可以使用[ctrl] + [⬆] / [ctrl] + [⬇] ([⌘] + [⬆] /[⌘] + [⬇] on Mac).

#### 使用 Command (命令) 菜单

> 有一些 Chrome 调试工具的功能被深深的隐藏在特别的面板中，菜单中等等。并且有一些甚至隐藏在这些地方之下。这也是为什么 Command 菜单
> 在 Chrome 的调试打开的情况下 按下 [ Ctrl]+[Shift]+[P] (or [⌘]+[Shift]+[P] on Mac)

#### 截屏，大小通吃

> 如果你想对一个特别的 DOM 节点进行截图，选中那个节点，打开 Command 菜单并且寻找节点截图的命令。
> 更有用的是什么呢，你同样可以用这种方式全屏截图 - 使用 Capture full size screenshot

#### 快速切换主题

> 在 Commands 菜单中寻找与 theme 相关的选项，以实现在明亮&暗黑两种主题之间的切换。

#### 给 logs 加上时间戳

> 在 Commands 菜单中寻找 timestamps 开启 timestamps.你可以在设置(在调试工具中的
