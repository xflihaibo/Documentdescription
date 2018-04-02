function observe(obj, vm) {
      Object.keys(obj).forEach(function(key) {
               defineReactive(vm, key, obj[key]);
      })
}

function defineReactive(vm, key, val) {
  var dep = new Dep();
  Object.defineProperty(vm, key, {
    get: function() {
      //添加订阅者watcher到主题对象Dep
      if (Dep.target) {
        // JS的浏览器单线程特性，保证这个全局变量在同一时间内，只会有同一个监听器使用
        dep.addSub(Dep.target);
      }
      return val;
    },
    set: function(newVal) {
      if (newVal === val) return;
      val = newVal;
      console.log(val);
      // 作为发布者发出通知
      dep.notify();
    }
  })
}