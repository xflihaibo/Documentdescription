// vm vue实例
function Watcher(vm, node, name, type) {
    //target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
    console.log(node)
    Dep.target = this;
    this.name = name;
    this.node = node;
    this.vm = vm;
    this.type = type;
    console.log(this)
    this.update('Watcher');
    Dep.target = null;
}

Watcher.prototype = {
    update: function(va) {
        console.log(va)
        this.get();
        // var batcher = new Batcher();
        // batcher.push(this);
        console.log(this)
        // console.log(this.value)
        // this.node[this.type] = this.value; // 订阅者执行相应操作
        this.cb();
    },
    cb: function() {
        this.node[this.type] = this.value; // 订阅者执行相应操作
        console.log(this)
    },
    // 获取data的属性值
    get: function() {
        this.value = this.vm[this.name]; //触发相应属性的get
    }
}

