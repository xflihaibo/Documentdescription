//得到嵌套函数的 递归
var arr = [1, [2, 3], [4, 5, [6, 7]]];
console.log(arr.toString());
console.log(arr + '');
var newArr = (arr + ' ').split(',');
console.log(newArr);
// 手机号处理
'12345678901'.replace(/(^\d{3}|\d{4}\B)/g, '$1-');
// "123-4567-8901"
//数组去重
//方法一
var arr = [1, 2, 3, 3, 4, 5, 5];
var set = new Set(arr);
var newArr = Array.from(set);
var tt = [...new Set([1, 2, 3, 4, 1, 3, 4, 6])];
var set1 = Array.from(new Set([1, 1, 2, 2, 33, '33', 44, '44']));
//方法二
// var arr = [1, 3, 5, 7, 10, 1];
// function chong(arr) {
// 	var newarr = new Array();
// 	if (! arr instanceof Array ) {
// 		return;
// 	}
// 	for (var i = 0; i < arr.length; i++) {
// 		for(var y=0; y<newarr.length; y++){
// 			if(newarr.[y]!=arr[i]){
// 				arr.push(newarr);
// 			}
// 		}
// 	}
//chong(arr)
//方法三
// var arr= [12,24,56,78,32,12,24];
// var obj={};
// var newArr=[];
// for(var i=0;i<arr.length;i++){
// 	if(!obj[arr[i]]){
// 		newArr.push(arr[i]);
// 		obj[arr[i]]=1;
// 	}
// }
// console.log(newArr)

//数组深拷贝
var array = [1, 2, 3, 4];
var testArray = Array.from(array);
testArray.push(5);
//方法二
var array = [1, 2, 3, 4];
var tasarr = JSON.parse(JSON.stringify(array));
tasarr.push(5);
console.log(tasarr);

// concat(): 合并数组
// copyWithin() es6 数组实例新增 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
// entries()  :方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
// every():返回一个boolean，判断每个元素是否符合func条件
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
// filter(): 返回一个符合func条件的元素数组
// find() :函数用来查找目标元素，找到就返回该元素，找不到返回undefined
// findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引
// forEach():没有返回值，只是针对每个元素调用func
// includes(): 函数判断是否包含某一元素，除了不能定位外，解决了indexOf的上述的两个问题。它直接返回true或者false表示是否包含元素，对NaN一样能有有效。
// indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
// join(): 拼接数组元素
// keys() :方法返回一个新的Array迭代器，它包含数组中每个索引的键
// lastIndexOf() :lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
// map() :返回一个新的Array，每个元素为调用func的结果
// pop() :尾部删除pop
// push(): 尾部添加
// reduce():返回一个计算后的值
// reduceRight():没有返回值，只是针对每个元素调用func
// reverse():颠倒数组元素
// shift():头部删除
// slice()  方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改 返回一个新数组
// some():返回一个boolean，判断是否有元素是否符合func条件
// splice():删除或插入元素
// toLocaleString():返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
// toString() ： 方法返回指定的布尔对象的字符串形式。
// unshift():头部添加
//  sort(): 排序 可传函数 返回 正负数 进行排序
