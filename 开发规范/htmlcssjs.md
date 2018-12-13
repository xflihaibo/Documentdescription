## Web 前端开发规范

- 文件夹命名使用统一小写，文件夹、文件命名统一小写， js 变量命名大驼峰写法，css 命名以文件名作为全局顶级变量，子元素命明方式 全局变量\_模块名称方便阅读，修改样式，避免样式发生错乱，和覆盖；

```code
index.html
    <div class="indexcontainer">
          <div className="indexcontainerr-navlist">
              ...
          </div>
   </div>
```

##目录规范

```code
+-- build // webpack 配置文件
|   +-- devServer.conf.js //本地服务器 配置代理地址
|   +-- getLocalIp.js //获取本地IP地址
|   +-- webpack.common.js
|   +-- webpack.dev.js
|   +-- webpack.prod.js //生产环境
+-- node_modules
|   +-- ...依赖包
+-- src
|   +-- actions //redux动作
|   +-- power  //权限控制
|   +-- assets //静态资源
|       +-- css
|       +-- font
|       +-- image
|   +-- config //全局配置参数
|   +-- model  //控制层
|   +-- router //路由
|   +-- store  //redux仓库
|   +-- view //页面
|       +-- component     //组件
|       +-- comcomponent //公共组件
|       +-- page   //页面
|       +-- app.jsx
|   +-- index.jsx //全局入口文件
+-- template //html模版
|   +-- dev.html
|   +-- prod.html
+-- tests  //单元测试
+-- package.json //依赖
+-- README.md  //说明文档
+-- .babelrc   //babel 配置
+-- .eslintrc.js //eslint 配置
```

## HTML

> 头部<!doctype html>
> 字符编码<meta charset=”utf-8”>
> 引入 css、js 文件 标明文件 type 类型， css 引入在文件头部 js 文件在最底部遵守**雅虎军规**
> 缩进使用 tab(4 个空格)
> 嵌套节点应该缩进
> 属性名称小写，自定义用中划线作为分割 如： data-id=”01”
> 属性上全使用双引号,不要使用单引号

```code
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company">

        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
```

> 自动闭合的单标签以斜线结尾 如：<img src=”../images/01.jpg” alt="xxx" />
> 属性之间必须有一个空格隔开 如：<img src=”../images/01.jpg” alt="xxx" />
> 标签内属性的排列顺序 class,id,name,data-\*, src |for|href|value|max-length, placeholder|title|alt,readonly|disabled 如：<img class="img" id="id" src="../images/img01.jpg" alt="xxx" />
> 尽量避免多余的父节点嵌套

##css

> 属性声明末尾必须以“;”结尾
> 缩进使用 tab(4 个空格)

```code
.element {
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    width: 50px;
    height: 50px;
}
```

#### 空格

> 以下几种情况不需要空格：

1.  属性名后
2.  多个规则的分隔符','前
3.  !important '!'后
4.  属性值中'('后和')'前
5.  行末不要有多余的空格

> 以下几种情况需要空格：

6.  属性值前
7.  选择器'>', '+', '~'前后
8.  '{'前
9.  !important '!'前
10. @else 前后
11. 属性值中的','后
12. 注释'/_'后和'_/'前

####空行

> 文件最后一行保留一个空行，

#### 换行

> '{'后和'}'前
> 每个属性独占一行
> 多个规则的分隔符','后

#### 注释

> 注释统一使用”/\*\*/”作为注释，缩进一代码保持一致，位于代码行的末尾一代码格一个空格，

#### 引号

1.  引号最外层统一使用双引号，
2.  url 引用必须是双引号,
3.  属性选择器也需使用双引号

> 属性的嵌套不能超过 4 层 如：ul li span a
> 颜色统一使用 16 进制或 16 进制简写方式
> 属性小写 属性值为 0 时不需加单位
> 尽量少用‘\_’选址器
> 不允许出现空的规则
> 同个属性不同前缀的写法保持垂直对齐，无前缀的属性应该写在有前缀属性的后面
> 同一个样式下不能出现相同的属性值
> 尽量使用常见的 css 属性样式避免兼容性问题
> 每个 class，id 命名为[oocss](http://oocss.org/) 写法如： product_box,
> 公共样式名称统一 common 开头 如：common_header

```code
.common-header {
    width: 100%;
    height:30px;
    background:#abcdef;
}

.nav>li>a{
    font-size:14px;
}
```

##Javascript

> 缩进使用 tab(4 个空格)

```code
let x = 1,
     y = 1;
```

> 不要超过 80，但如果编辑器开启 word wrap 可以不考虑单行长度。
> 分号 变量声明、表达式、return、throw、break、do-while、continue

```code
/* let declaration */
let x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);
```

#### 空格

> 不需要空格：

1.  对象的属性名后，
2.  前缀一元运算符后，
3.  后缀一元运算符前，
4.  函数调用括号前，
5.  无论是函数声明还是函数表达式，'('前不要空格，
6.  数组的'['后和']'前，
7.  对象的'{'后和'}'前，运算符'('后和')'前

> 需要空格：

8.  二元运算符前后，
9.  三元运算符前后“？”，“：”前后，
10. 代码块：“{”前，
11. 以下关键字前：else, while, catch, finally
12. 以下关键字后：if , else , for , while , do , switch , case , try , catch , finally , with , returen , typeof,
13. 单行注释‘//’后(若单行注释和代码同行，则：‘//’前也需要)，
14. 多行注释“\*”后，
15. 对象属性值前，
16. for 循环，分号后留一个空格，前置条件如果有多个、逗号后预留一个空格，
17. 无论是函数声明式还是函数表达式，
18. “{”前一定要有空格，函数的参数之间

##空行

1.  变量声明式后（当变量声明在代码块的最后一行，则无需空行），
2.  注释前（当变量声明在代码块的第一行，则无需空行），
3.  代码块后（在函数调用，数组，对象中则无需空行），
4.  文件最后保留一个空行

## 换行

> 以下不需要换行:

1.  eles, catch,finally,
2.  代码块“{”前，

> 以下几种情况需要换行：

1.代码块“{ }”内 前后都需要换行 2.变量赋值后

#### 单行注释

1.  双斜线后必须有一个空格，
2.  缩进与下一行代码保持一致，
3.  可位于代码行的末尾，与代码间隔一个空格

####多行注释

> 最少三行“\*”后跟一个空格，建议在以下情况使用：

1.  难于理解的代码块
2.  可能存在错误的代码段
3.  可能存在浏览器 HACK 的代码

4.  业务逻辑较强的代码

##引号

> 最外层统一使用单引号

#### 变量声明

> 一个函数作用域中所有的变量声明尽量提到函数首部，用一个 var 声明，不允许出现两个连续的 var 声明。

#### 函数

> 无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；

1.  函数调用括号前不需要空格；
2.  立即执行函数外必须包一层括号；
3.  不要给 inline function 命名；
4.  参数之间用', '分隔，注意逗号后有一个空格。

#### 数组、对象

> 对象属性名不需要加引号；
> 对象以缩进的形式书写，不要写在一行；
> 数组、对象最后不要有逗号。

以下关键字后面必须跟大括号：if , else , for , while , do , switch , try , catch , finally , with
Null
适用 初始化一个将来可能被赋值的对象的变量
适用 与已经初始化的变量作比较
适用 作为一个参数为对象的函数的调用传参
适用 做为一个返回对象的函数的返回值
不适用 不要用 null 来判断函数调用有无参数
不适用 不要与未初始化的变量作比较
Undefined 1.永远不要直接使用 undefined 进行变量比较，使用 typeof 和字符串‘undefined’进行比较
