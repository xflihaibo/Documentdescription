//得到嵌套函数的 递归
var arr = [1,[2,3],[4,5,[6,7]]]
console.log(arr+'')
var newArr= (arr + ' ').split(',')
console.log(newArr)
// 手机号处理
"12345678901".replace(/(^\d{3}|\d{4}\B)/g,"$1-");
// "123-4567-8901"
//数组去重
//1
var arr = [1,2,3,3,4,5,5];
var set = new Set(arr);
var newArr = Array.from(set);
//2
var arr = [1, 3, 5, 7, 10, 1];
function chong(arr) {
	var newarr = new Array();
	if (! arr instanceof Array ) {
		return;
	}
	for (var i = 0; i < arr.length; i++) {
		for(var y=0; y<newarr.length; y++){
			if(newarr.[y]!=arr[i]){
				arr.push(newarr);
			}
		}
	}
}
chong(arr)
