## HTMl 相关

#### 标准的 CSS 的盒子模型？与低版本 IE 的盒子模型有什么不同的

> -   标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
> -   低版本 IE 盒子模型：宽度=内容宽度（content+border+padding）+ margin

#### box-sizing 属性

> -   用来控制元素的盒子模型的解析模式，默认为 content-box
> -   context-box：W3C 的标准盒子模型，设置元素的 height/width 属性指的是 content 部分的高/宽
> -   border-box：IE 传统盒子模型。设置元素的 height/width 属性指的是 border + padding + content 部分的高/宽

#### 对 BFC 规范(块级格式化上下文：block formatting context)的理解

> -   内部的 Box 会在垂直方向上一个接一个放置。
> -   Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
> -   每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
> -   BFC 的区域不会与 float box 重叠。
> -   BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
> -   计算 BFC 的高度时，浮动元素也会参与计算。

##### 满足下列条件之一就可触发 BFC

> -   根元素，即 html
> -   float 的值不为 none（默认）
> -   overflow 的值不为 visible（默认）
> -   display 的值为 inline-block、table-cell、table-caption
> -   position 的值为 absolute 或 fixed

#### 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

> -   多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60＊1000ms ＝ 16.7ms。
> -   requestAnimationFrame

#### li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

> -   行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为 0，就没有空格了。
> -   可以将<li>代码全部写在一排
> -   浮动 li 中 float：left
> -   在 ul 中用 font-size：0（谷歌不支持）；可以使用 letter-space：-3px

#### 同源策略

> -   协议相同
> -   域名相同
> -   端口相同

#### 目的

> -   是为了保证用户信息的安全，防止恶意的网站窃取数据。

#### 跨域

img ,
script,
link,
jsonp ,
iframe,
postMessage,
webSocket、
http-proxy,
nginx,

```javascript
    A page
    let frame=document.getElementById('frame');
    frame.contentWindow.postMessage('hahha',"http://localhost:3000")
    B page
    window.onmessage=functiopn(e){
    consoel.log(e.data)
    e.source.postMessage('hehehh',e.origin)
    }
```

location.Hash、

```javascript
    c.html
    <script>
        console.log(location.hash)
        let iframe=docuemnt.createElement('iframe');
        ifrime.src="http://localhost:3000/b.html#hhehehe"
        document.body.appendChild('iframe')
    </script>
    b.html
     <script>
        window.parent.parent.location.hash=location.hash
     </script>

    A.html
    <iframe src="http://localhost:4000/c.html#hqhqh" id="iframe"></iframe>
    <script>
    let iframe =docuemnt.getElementById('iframe');
    window.onhashchange=function(){
        console.log.log(location.hash)
    }

    </script>
```

cors、

```javascript
setHeader('Access_Control_Allow-Origin', 'http://localhost:3000');
```

document.domain
//根域名相同

```javascript
a.html; //a.bb.com

    <script>
    document.domain=bb.com
        var a=109;
    </script>
b.html; b.bb.com
<
    <iframe src="http://a.bb.com/a.html" id="iframe" onload="load()"></iframe>
    <script>
    document.domain=bb.com
    function load(){
           let iframe =docuemnt.getElementById('iframe');
          iframe.contentWindow.a;
    }
    </script>
```

window.name

```javascript
    c.html
    <script>
        window.name="666";
    </script>
    A.html
    <iframe src="http://localhost:4000/c.html" id="iframe" onload="load()"></iframe>
    <script>
    function load(){
        let first =true;
           let iframe =docuemnt.getElementById('iframe');
        if(first){

             iframe.src='http:http://localhost:3000/b.html';
             first =false;
            }else{
                console.log(iframe.contentWindow.name)
            }
    }
    </script>
```

#### hover link active, visite 定义顺序

> -   lvha

### 重排 重绘

> -   重绘不一定重排, 重排一定引起重绘

### 那些能引起重排

宽高大小变化 显示隐藏

> -   width
> -   height
> -   padding
> -   margin
> -   display
> -   border-width
> -   border
> -   min-height
> -   top
> -   bottom
> -   left
> -   right
> -   position
> -   float
> -   clear
> -   text-align
> -   overflow-y
> -   font-weight
> -   overflow
> -   font-family
> -   line-height
> -   vertival-align
> -   white-space
> -   font-size

### 触发重绘的属性

> -   color
> -   border-style
> -   border-radius
> -   visibility
> -   text-decoration
> -   background
> -   background-image
> -   background-position
> -   background-repeat
> -   background-size
> -   outline-color
> -   outline
> -   outline-style
> -   outline-width
> -   box-shadow

### 优化

> -   分离读写操作
> -   样式集中改变
> -   元素批量修改
> -   开启 3D 优化

font-variant-caps: small-caps;
font-variant-numeric: lining-nums;
image-set() ：高倍图

### 移动端布局

> -   css grid layout flex

### css 格式化：

> -   reset.css normalize.css neat.css(推荐)
> -   移动端：
> -   flex
> -   neat.css
> -   html{ box-sizing:border-box}
> -   _,\_:after,_:brfore{ box-sizing:inherit}

css 双飞翼布局

```javascript
```

#### css 分层理论

> -   SMACSS
> -   ACSS

### cssnext

> cssnext 把 新 CSS 规范转换成兼容性更强的 CSS，

### iframe

#####优点 1.程序调入静态页面比较方便; 2.页面和程序分离; #####缺点：
1.iframe 有不好之处：样式/脚本需要额外链入，会增加请求。另外用 js 防盗链只防得了小偷，防不了大盗。
2.iframe 好在能够把原先的网页全部原封不动显示下来,但是如果用在首页,是搜索引擎最讨厌的.那么你的网站即使做的在好,也排不到好的名次! 如果是动态网页，用 include 还好点！但是必须要去除他的<html><head><title><body>标签！ 3.框架结构有时会让人感到迷惑，特别是在多个框架中都出现上下、左右滚动条的时候。这些滚动条除了
会挤占已经特别有限的页面空间外，还会分散访问者的留心力。访问者遇到这种站点往往会立刻转身离开
。他们会想，既然你的主页如此混乱，那么站点的其他部分也许更不值得阅读。 4.链接导航疑问。运用框架结构时，你必须保证正确配置所有的导航链接，如不然，会给访问者带来很大
的麻烦。比如被链接的页面出现在导航框架内，这种情况下访问者便被陷住了，因为此时他没有其他地点
可去。 5.调用外部页面,需要额外调用 css,给页面带来额外的请求次数;
