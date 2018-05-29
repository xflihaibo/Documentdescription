## HTMl 相关

box-sizing
padding + border + width= 盒子的宽度
padding+ border + height = 盒子的高度


css 分层理论
SMACSS  、ACSS


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
bfc ifc gfc ffc
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


css 分层理论



cssnext



bfc gfc ifc
