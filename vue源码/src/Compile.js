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
        // nodeType 判端节点类型
        if (node.nodeType === 1) {
            var attr = node.attributes;
            console.log(attr)
            // 解析属性
            for (var i = 0; i < attr.length; i++) {
                if (attr[i].nodeName == 'v-model') {
                    // 获取v-model绑定的属性名
                    var name = attr[i].nodeValue; 
                    node.addEventListener('input', function(e) {
                        // 监听给相应的data属性赋值，进而触发该属性的set方法
                        console.log('ol')
                        vm[name] = e.target.value;
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
                console.log(node)
                new Watcher(vm, node, name, 'nodeValue');
            }
        }
    },
}