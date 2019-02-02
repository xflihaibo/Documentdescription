## 监控

1.性能监控
数据监控
异常监控

前端衡量性能的指标
Resource timing Preformance API
preformance.timing

-   上个页面的到这个页面的时长 fetchStartfet-navigationStart
-   重定向时常 ： redirectEnd-redirectStart
-   DNS 查询耗时 ：domainLookupEnd - domainLookupStart
-   TCP 链接耗时 ：connectEnd - connectStart
-   request 请求耗时 ：responseEnd - responseStart
-   解析 dom 树耗时 ： domComplete - domInteractive
-   白屏时间 ：responseStart - navigationStart
-   domready 时间(用户可操作时间节点) ：domContentLoadedEventEnd - navigationStart
-   onload 时间(总下载时间) ：loadEventEnd - navigationStart

sentry

前端静态资源监控

performance.getEntriesByType('resource')

```code
performance.js
//修改新数据
let processData = _ => {
 let newdata = {
   name: _.name,
   initiatorType: _.initiatorType,
   duration: _.duration
 };
 return newdata;
};

export default {
 init(cb) {
   // 获取资源相关的信息  可以收到一个发送一个
   if (window.PerformanceObserver) {
     // MutationObserver。ie9 不兼容
     let observer = new PerformanceObserver(list => {
       let data = list.getEntries(); //data是一个数组类型
       cb(processData(data[0]));
     });
     observer.observe({entryTypes: ['resource']});
   } else {
     window.onload = function() {
       let resourceData = performance.getEntriesByType('resource');
       let data = resourceData.map(_ => processData(_));
       cb(data);
     };
   }
 }
};

index.js

let fotmatObj = (data) =>{
  let arr = [];
  for(let key in data){
    arr.push(`${key}=${data[key]}`);
  }
  return arr.join('&'); //{a:1,b:2} =>a=1&b=2
}
performance.init((data)=>{ // 获取到页面性能相关的数据
  // 图片可能没大小 空的图片
   new Image().src = "/p.gif?" + fotmatObj(data);
   console.log(data);
});
```

ajax 请求监控

前端异常监控
window.onerror

#### 资源加载失败不能用冒泡得到错误,可以用捕获处理可以到的错误监听

> 捕获错误
> try ...catch
> window.onerror()

```code
export default {
  init(cb){
    // window.addEventListener('error',fn,true)
    window.addEventListener("error", function(evt){ //捕获文件加载错误
     console.log('hello error')
    })
    // promise失败了不能通过 onerror  .... 捕获promise错误
    window.onerror = function (message, source, lineno, colno, error) { //捕获行内js执行错误
      console.dir(error);
      let info = {
        message:error.message,
        name:error.name
      };
      let stack = error.stack;
      let matchUrl = stack.match(/http:\/\/[^\n]*/)[0];
      console.log(matchUrl)
      info.filename = matchUrl.match(/http:\/\/(?:\S*)\.js/)[0];
      this.console.log(info.filename)
      let [,row,colume] = matchUrl.match(/:(\d+):(\d+)/);
      info.row = row;
      info.colume = colume; // 上线的时候代码会压缩 source-map 找到对应的真实的报错
      cb(info);
    }
  }
}
```

### 错误上报

```javascript
new Image().src = 'http://www.baidu.com?sa=we';
navigator.sendBeacon('a.php'); //埋点
```
