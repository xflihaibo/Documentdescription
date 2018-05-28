// 创建vue类
function Vue(options) {
	//挂在属性data
	this.data = options.data;
	var data = this.data;
	//对数据进行get set
	
	observe(data, this);
	var id = options.el;
	//编译文本
	var dom = new Compile(document.getElementById(id), this);
	// 编译完成后，将dom返回到app中
	document.getElementById(id).appendChild(dom);
}


// 对数据进行get set;
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
            //判断修改的值与之前的值是否相同
            if (newVal === val) {
                return;
            } else {
                val = newVal;
                console.log(val);
                // 作为发布者发出通知
                dep.notify();
            }
        }
    })
}


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
        this.subs.forEach(function(sub) {
            sub.update();
        })
    }
}

// 编译    节点  vue 实例
//处理 文档片段 得到html
function Compile(node, vm) {
    if (node) {
        this.$frag = this.nodeToFragment(node, vm);
        return this.$frag;
    }
}
Compile.prototype = {
    nodeToFragment: function(node, vm) {
        var self = this;
        var frag = document.createDocumentFragment();
        var child;

        while (child = node.firstChild) {
            self.compileElement(child, vm);
             // 将所有子节点添加到fragment中
            frag.append(child);
        }
        return frag;
    },
    compileElement: function(node, vm) {
        var reg = /\{\{(.*)\}\}/;
        //节点类型为元素

        if (node.nodeType === 1) {
            var attr = node.attributes;
            // 解析属性
            for (var i = 0; i < attr.length; i++) {
                if (attr[i].nodeName == 'v-model') {
                    // 获取v-model绑定的属性名
                    var name = attr[i].nodeValue; 
                    node.addEventListener('input', function(e) {
                        // 给相应的data属性赋值，进而触发该属性的set方法
                        vm[name] = e.target.value;
                        console.log(vm[name])
                    });
                    // node.value = vm[name]; // 将data的值赋给该node
                    new Watcher(vm, node, name, 'value');
                }
            };
        }
        //节点类型为文本节点或span
        if (node.nodeType === 3) {
            if (reg.test(node.nodeValue)) {
                 // 获取匹配到的字符串
                var name = RegExp.$1;
                name = name.trim();
                // node.nodeValue = vm[name]; // 将data的值赋给该node
                new Watcher(vm, node, name, 'nodeValue');
            }
        }
    },
}


// vm vue实例
function Watcher(vm, node, name, type) {
    //target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
    Dep.target = this;
    // console.log(Dep)
    this.name = name;
    this.node = node;
    this.vm = vm;
    this.type = type;
    this.update();
    Dep.target = null;
}

Watcher.prototype = {
    update: function() {
        this.get();
        var batcher = new Batcher();
        batcher.push(this);
        // this.node[this.type] = this.value; // 订阅者执行相应操作
        // this.cb();
    },
    cb: function() {
        this.node[this.type] = this.value; // 订阅者执行相应操作
    },
    // 获取data的属性值
    get: function() {
        this.value = this.vm[this.name]; //触发相应属性的get
    }
}



/**
 * 批处理构造函数
 * @constructor
 */
function Batcher() {
    this.reset();
}

/**
 * 批处理重置
 */
Batcher.prototype.reset = function() {
    this.has = {};
    this.queue = [];
    this.waiting = false;
};

/**
 * 将事件添加到队列中
 * @param job {Watcher} watcher事件
 */
Batcher.prototype.push = function(job) {
    if (!this.has[job.name]) {
        this.queue.push(job);
        this.has[job.name] = job;
        if (!this.waiting) {
            this.waiting = true;
            setTimeout(() => {
                this.flush();
            });
        }
    }
};

/**
 * 执行并清空事件队列
 */
Batcher.prototype.flush = function() {
    this.queue.forEach((job) => {
        job.cb();
    });
    this.reset();
};