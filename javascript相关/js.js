// var a = {
// 	name: 'a'
// };
// var b = a;
// a.x = a = { age: 2 };
// console.log(a.x);
// console.log(b.x);

// var a = 'csd';
// var b = a;
// console.log(a);
// console.log(b);

var arr = [1, 3, 5, 7, 10, 1];
function chong(arr) {
	var newarr = new Array();
	if (typeof arr != 'Array') {
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
