## HTMl 相关

#### 标准的 CSS 的盒子模型？与低版本 IE 的盒子模型有什么不同的
>* 标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
>* 低版本 IE 盒子模型：宽度=内容宽度（content+border+padding）+ margin

#### box-sizing 属性
>* 用来控制元素的盒子模型的解析模式，默认为 content-box
>* context-box：W3C 的标准盒子模型，设置元素的 height/width 属性指的是 content 部分的高/宽
>* border-box：IE 传统盒子模型。设置元素的 height/width 属性指的是 border + padding + content 部分的高/宽

#### 对 BFC 规范(块级格式化上下文：block formatting context)的理解

> 内部的 Box 会在垂直方向上一个接一个放置。
> Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
> 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
> BFC 的区域不会与 float box 重叠。
> BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
> 计算 BFC 的高度时，浮动元素也会参与计算。

##### 满足下列条件之一就可触发 BFC

> 根元素，即 html
> float 的值不为 none（默认）
> overflow 的值不为 visible（默认）
> display 的值为 inline-block、table-cell、table-caption
> position 的值为 absolute 或 fixed

#### 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

> 多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60＊1000ms ＝ 16.7ms。
> requestAnimationFrame

#### li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

> 行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为 0，就没有空格了。
> 可以将<li>代码全部写在一排
> 浮动 li 中 float：left
> 在 ul 中用 font-size：0（谷歌不支持）；可以使用 letter-space：-3px

#### 同源策略

> 协议相同
> 域名相同
> 端口相同

#### 目的

> 是为了保证用户信息的安全，防止恶意的网站窃取数据。

#### 跨域

> script , background、img、link ,iframe,

#### hover link active, visite 定义顺序

> lvha

### 重排 重绘

> 重绘不一定重排, 重排一定引起重绘

### 那些能引起重排

宽高大小变化 显示隐藏

> width
> height
> padding
> margin
> display
> border-width
> border
> min-height
> top
> bottom
> left
> right
> position
> float
> clear
> text-align
> overflow-y
> font-weight
> overflow
> font-family
> line-height
> vertival-align
> white-space
> font-size

### 触发重绘的属性

> color
> border-style
> border-radius
> visibility
> text-decoration
> background
> background-image
> background-position
> background-repeat
> background-size
> outline-color
> outline
> outline-style
> outline-width
> box-shadow

### 优化

> 分离读写操作
> 样式集中改变
> 元素批量修改
> 开启 3D 优化

font-variant-caps: small-caps;
font-variant-numeric: lining-nums;
image-set() ：高倍图

### 移动端布局

> css grid layout flex

### css 格式化：

> reset.css normalize.css neat.css(推荐)
> 移动端：
> flex
> neat.css
> html{ box-sizing:border-box}
> \*,\_:after,\*:brfore{ box-sizing:inherit}
> css icon  
>  iconfont:http://www.iconfont.cn/
> cssicon:http://cssicon.space/#/

css 双飞翼布局

```javascript
```

#### css 分层理论

>* SMACSS
>* ACSS

### cssnext
> cssnext 把 新 CSS 规范转换成兼容性更强的 CSS，
