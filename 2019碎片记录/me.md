## 简述

[首页日历](../../assets/readme/calender.png)

日期展示切换组件

## 引用关联页面(组件)

1.  首页 src/view/home

## 组件项目结构

```
|   +-- calenderheader.js // 无状态组件 日历头部星期展示
|   +-- everyday.js // 实现日历每天的状态样式 以及点击事件处理
|   +-- index.js //日期组件
|   +-- index.less //样式
|   +-- readme.md// 组件描述文档
|   +-- switch.js //月周切换组件
|   +-- switch.less//样式
|   +-- until.js//日历组件的公共函数
```

## 实现方式

1.  index.js 主要是入口文件，负责展示日期，对外交互，和日期一些交互事件的处理(选中当天，上一周下一周 上一月下一月，回到今天所在的月（周），月周的切换)；日期的背景圆角样式是用 css 的 before(after)实现，
2.  calenderheader 主要是显示头部的周期标题；
3.  everday 拆分组件到每一天，接收父组件的参数（样式，状态，icon）向父组件传递点击事件；
4.  switch 是月与周的切换 ，向父组件传递切换后的状态；
5.  until 一些常用的工具函数、常量；
    1.  获得当前时间是年份和月份 ；
    2.  时间加(减)N 天；
    3.  获取指定日期是周期 ；
    4.  是否超出指定日期的范围；
    5.  获取一个月的开始与结束日期；
    6.  比较日期返回相应的值

## 用法

```javascript
import Calender from 'src/component/calender/index.js';
handelChange=(data)=>{

}
<Calender onHandelChange={this.handelChange} />;
```

## 对外依赖

依赖有静态资源 src/assets/less
