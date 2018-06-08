## HTMl 相关

#### 标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的
> 标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
> 低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin

#### box-sizing属性
> 用来控制元素的盒子模型的解析模式，默认为content-box
> context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽
> border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽


#### 对BFC规范(块级格式化上下文：block formatting context)的理解
> 内部的Box会在垂直方向上一个接一个放置。
> Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
> 每个元素的margin box 的左边，与包含块border box的左边相接触。
> BFC的区域不会与float box重叠。
> BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
> 计算BFC的高度时，浮动元素也会参与计算。
##### 满足下列条件之一就可触发BFC
> 根元素，即html
> float的值不为none（默认）
> overflow的值不为visible（默认）
> display的值为inline-block、table-cell、table-caption
> position的值为absolute或fixed



#### 如果需要手动写动画，你认为最小时间间隔是多久，为什么？
> 多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。
> requestAnimationFrame

#### li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
> 行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
> 可以将<li>代码全部写在一排
> 浮动li中float：left
>在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px


#### 同源策略
> 协议相同
> 域名相同
> 端口相同
#### 目的
> 是为了保证用户信息的安全，防止恶意的网站窃取数据。




WorkFlow
	
	 lvha
	 重绘不一定重排
	 重排一定引起重绘font-variant-caps: small-caps;
	font-variant-numeric: lining-nums;
	image-set() ：高倍图
	symbol
	a:love hate
	 css 分层理论： bem Acss
css 双飞翼布局  
移动端布局
 	css grid_layout   flex
box-sizing:border-box
css 格式化：
	reset.css  normalize.css  neat.css(推荐)
移动端：
	flex
	neat.css
	html{ box-sizing:border-box}
	*,*:after,*:brfore{ box-sizing:inherit}
css icon   
	iconfont:http://www.iconfont.cn/
	cssicon:http://cssicon.space/#/
设计的js 
 	underline.js
	responsify.js
	typedetail.com
	cssicon.space
	designresearch.space
#### bfc ifc gfc ffc
```javascript
	bfc 	
 		 block Formatting contexts
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
<style type="text/css">
    *{margin: 0;padding: 0;}
    body{min-width: 700px;}
    .header,
    .footer{ 
        border: 1px solid #333;
        background: #aaa;
        text-align: center;
    }
    .sub,
    .main,
    .extra{ 
        float: left;
        min-height: 130px;
    }
    .sub{
        margin-left: -100%;
        width: 200px;
        background: red;
    }
    .extra{
        margin-left: -220px;
        width: 220px;
        background: blue;
    }
    .main{ 
        width: 100%;
    }
    .main-inner{ 
        margin-left: 200px;
        margin-right: 220px;
        min-height: 130px;
        background: green;
        word-break: break-all;
    }
    .footer{ 
        clear: both;
    }
</style>
</head>
<body>
<div class="header">
    <h4>header</h4>
</div>
    <div class="main">
    <div class="main-inner">
        <h4>main</h4>
        <p>HHHHHHHHHHHHHHHHHHHHHH
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        HHHHHHHHHHHHHHHHHHHHHH
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </p>
        </div>
    </div> 
    <div class="sub">
    <h4>sub</h4>
        <p>oooooooooooooo
        0000000000000000
        00000000000000000
        ooooooooooooooo
        ooooooooooooooo
        000000000000000</p>
    </div>

      <div class="extra">
    <h4>extra</h4>
        <p>BBBBBBBBBBBBBB
        888888888888888888
        BBBBBBBBBBBBBBBBBB
        88888888888888888888</p>
    </div>
    <div class="footer">
        <h4>footer</h4>
    </div>
    ```
ocss


#### css 分层理论
SMACSS  、ACSS



cssnext




