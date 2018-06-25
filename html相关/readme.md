## HTMl 相关

### doctype

定义文档解析类型;

### box-sizing

padding + border + width= 盒子的宽度
padding+ border + height = 盒子的高度

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

###移动端布局

> css grid layout flex

###css 格式化：

> reset.css normalize.css neat.css(推荐)
> 移动端：
> flex
> neat.css
> html{ box-sizing:border-box}
> \*,\_:after,\*:brfore{ box-sizing:inherit}
> css icon  
>  iconfont:http://www.iconfont.cn/
> cssicon:http://cssicon.space/#/

#### bfc ifc gfc ffc

```javascript
    bfc(block Formatting contexts)
         display:  inline-block,table-cell,table-caption,flex,inline-flex
         float:不为none;
         overflow:不为visible
         ifc display:inline;
         两个bfc之间是相互独立的
         overflow:hidden 生成bfc 浮动元素也参与bfc结算 父级浮动
         margin 之间会有重叠 加个父元素 设置overflow:hidden;
        高度由其包含行内元素中最高的的实际高度计算，不收 padding margin 影响
```

css 双飞翼布局

```javascript
```

#### css 分层理论

SMACSS 、ACSS

### cssnext

> cssnext 把 新 CSS 规范转换成兼容性更强的 CSS，
