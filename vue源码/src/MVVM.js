// 创建vue类
function Vue(options) {
	//挂在属性data
	this.data = options.data;
	var data = this.data;
	console.log(this.data)
	//对数据进行get set
	observe(data, this);
	var id = options.el;
	//编译文本
	var dom = new Compile(document.getElementById(id), this);
	// 编译完成后，将dom返回到app中
	document.getElementById(id).appendChild(dom);
}
