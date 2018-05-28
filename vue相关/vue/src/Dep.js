//实现观察者模式
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    //向数组添加值  放入观察者
    addSub: function(sub) {
        this.subs.push(sub);
    },
    //更新数组值  发送通知
    notify: function() {
    	console.log(  this.subs)
        this.subs.forEach(function(sub) {
            sub.update("dep");
        })
    }
}