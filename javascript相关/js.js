//得到嵌套函数的
var arr = [1,[2,3],[4,5,[6,7]]]
console.log(arr+'')
var newArr= (arr + ' ').split(',')
console.log(newArr)

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