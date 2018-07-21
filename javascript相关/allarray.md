# javascript 数组(array) 常用的方法集锦

由于三大框架的出现,对 DOM 的操作转成对数据的操作,二对数据的操作主要体现在数组和对象,今天就以数据为例,对数组的各种操作进行对比

### concat()

> 用于连接两个或多个数组，该方法不会改变现有的数组，而仅仅会返回被连接的新数组

-   语法：Arr.concat(arr1,arr2,……,arrn)
-   参数： arr1 该参数可以是具体的值，也可以是数组,对象,字符串,bool 值等。可以是任意多个
-   返回值：返回一个新的数组。该数组是通过把所有 arr1 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的每一个元素，而不是数组

```javascript
let arr = [1, 2];
let arr2 = [123, 456, 678];
let obj = { name: '王二', age: 123 };
let initbool = false;
let newarr = arr.concat([3, 4, 5], 7, 8, [9, 10]);
let newarr2 = arr.concat(3, 4, 5, arr2, obj, initbool);
console.log(arr); //[1, 2]
console.log(newarr); //[1, 2, 3, 4, 5, 7, 8, 9, 10]
console.log(newarr2); //[1, 2, 3, 4, 5, 123, 456, 678, {name: "王二", age: 123}, false]
```

### copyWithin()

> (ES6 新增) 将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

-   语法： Arr.copyWithin(target, start = 0, end = this.length)
-   参数：传入的值 默认为 number,传入其他类型值 (bool,string,array,object,undefined)会进行类型转化成 number 类型(参数为 NaN 的话为默认值)

*   target （必需）：从该位置开始替换数据。
*   start （可选）：从该位置开始读取数据，默认为 0 。如果为负值，表示倒数。
*   end （可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

-   返回值：返回当前数组。也就是说，使用这个方法，会修改当前数组

```javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5];
let arr6 = [1, 2, 3, 4, 5];
let arr7 = [1, 2, 3, 4, 5];
let arr8 = [1, 2, 3, 4, 5];
let arr9 = [1, 2, 3, 4, 5];
let arr10 = [1, 2, 3, 4, 5];
let newarr = arr.copyWithin(0, 3, 4);
arr1.copyWithin(0, 3);
arr2.copyWithin(2);
arr3.copyWithin(1, 2, 4);
arr4.copyWithin(false, 3);
arr5.copyWithin(true, 3);
arr6.copyWithin(2, NaN);
arr7.copyWithin(2);
arr8.copyWithin(2, -1);
arr9.copyWithin(2, -2);
arr10.copyWithin(2, -2, -1);
console.log(arr); //[4, 2, 3, 4, 5]
console.log(newarr); //[4, 2, 3, 4, 5]
console.log(arr1); //[4, 5, 3, 4, 5]
console.log(arr2); //[1, 2, 1, 2, 3]
console.log(arr3); //[1, 3, 4, 4, 5]
console.log(arr4); //[4, 5, 3, 4, 5]
console.log(arr5); //[1, 4, 5, 4, 5]
console.log(arr6); //[1, 2, 1, 2, 3]
console.log(arr7); //[1, 2, 1, 2, 3]
console.log(arr8); //[1, 2, 5, 4, 5]
console.log(arr9); //[1, 2, 4, 5, 5]
console.log(arr10); //[1, 2, 4, 4, 5]
```

### entries()

> (ES6 新增) 是对键值对的遍历 方法返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对,不会改变原数组

-   语法：Array.entries()
-   参数：
-   返回值：返回一个新的 Array Iterator 对象,该对象包含数组中每个索引的键/值对

```javascript
let arr = ['a', 'b', 'c'];
let iterator1 = arr.entries();
console.log(iterator1); //Iterator
console.log(iterator1.next()); //{value: Array(2), done: false}
console.log(iterator1.next().value); //[1, "b"]
console.log(iterator1.next().value); //[2, "c"]
console.log(iterator1.next().value); // undefined
console.log(arr); // ["a", "b", "c"]
```

### every()

> 用于检测数组所有元素是否都符合指定条件（通过函数提供）

-   语法：Arr.every(function(currentValue,index,arr), thisValue)
-   参数：

*   function(currentValue, index,arr) 必须。函数，数组中的每个元素都会执行这个函数
*          currentValue:必须。当前元素的值
*         index:可选。当前元素的索引值
*          arr:可选。当前元素属于的数组对象
*   thisValue:可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

-   返回值：布尔值。如果所有元素都通过检测返回 true，否则返回 false

```javascript
const isBigEnough = (element, index, array) => {
	return element >= 10;
};
let passed1 = [12, 5, 8, 130, 44].every(isBigEnough);
let passed2 = [12, 54, 18, 130, 44].every(isBigEnough);
console.log(passed1); // false
console.log(passed2); // true
```
