# javascript 数组(array) 常用的方法集锦(下)

### map()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
let arr1 = [1, 4, 9, 16];
const arr2 = arr1.map(x => x * 2);
console.log(arr1); //[1, 4, 9, 16]
console.log(arr2); //[2, 8, 18, 32]
```

### pop()

> 用于删除数组的最后一个元素并返回删除的元素。(此方法改变数组的长度！)

-   语法：arr.pop()
-   参数：
-   返回值：返回删除的元素。(改变了原数组长度)

```javascript
let plants = ['kale', 'tomato'];
console.log(plants.pop()); //tomato
console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]
console.log(plants.pop()); //kale
console.log(plants); //[]
console.log(plants.pop()); //undefined
```

### push()

> 向数组的末尾添加一个或多个元素，并返回新的长度。(此方法改变数组的长度！)

-   语法：arr.push(item1, item2, ..., itemX)
-   参数：
    -item1, item2, ..., itemX:必需。要添加到数组的元素。
-   返回值：数组新长度。

```javascript
let arr = ['pigs', 'goats', 'sheep'];
console.log(arr.push('cows')); //4
console.log(arr);
['pigs', 'goats', 'sheep', 'cows'];
console.log(arr.push(['hello', 'world'])); //5
console.log(arr); //["pigs", "goats", "sheep", "cows", ["hello", "world"]]
console.log(arr.push('hello', 'world')); //7
console.log(arr); //["pigs", "goats", "sheep", "cows", ["hello", "world"], "hello", "world"]
```

### reduce()

> 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值,可以作为一个高阶函数，用于函数的 compose;可以作为一个高阶函数，用于函数的 compose;reduce 对于空数组是不会执行回调函数的

-   语法：arr.reduce(function(total, currentValue, currentIndex, arr), initialValue)
-   参数：
    -   total: 必需。初始值, 或者计算结束后的返回值。
    -   currentValue: 必需。当前元素
    -   currentIndex: 可选。当前元素的索引
    -   arr: 可选。当前元素所属的数组对象。
-   initialValue 可选。传递给函数的初始值
-   返回值：返回计算结果

```javascript
let items = [10, 80, 100];
let add = (sumSoFar, item) => {
	return sumSoFar + item;
};
let total = items.reduce(add, 0);
let total1 = items.reduce(add, 10);
console.log(items); //[10, 80, 100]
console.log(total); //190
console.log(total1); //200
```

### reduceRight()

> reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。

-   语法：arr.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
-   参数：
    -   total: 必需。初始值, 或者计算结束后的返回值。
    -   currentValue: 必需。当前元素
    -   currentIndex: 可选。当前元素的索引
    -   arr: 可选。当前元素所属的数组对象。
-   initialValue 可选。传递给函数的初始值
-   返回值：返回计算结果

```javascript
let items = [10, 80, 100];
let add = (sumSoFar, item) => {
	return sumSoFar + item;
};
let total = items.reduceRight(add, 0);
let total1 = items.reduceRight(add, 10);
console.log(items); //[10, 80, 100]
console.log(total); //190
console.log(total1); //200
```

### reverse()

> 方法用于颠倒数组中元素的顺序

-   语法：arr.reverse()
-   参数：
-   返回值：颠倒顺序后的数组。(原数组也会改变)

```javascript
let arr1 = [0, 1, 5, 10, 15];
let arr2 = arr1.reverse();
console.log(arr1); //[15, 10, 5, 1, 0]
console.log(arr2); //[15, 10, 5, 1, 0]
```

### shift()

> 用于把数组的第一个元素从其中删除，并返回第一个元素的值。(此方法改变数组的长度！)

-   语法：arr.shift()
-   参数：

-   返回值：数组原来的第一个元素的值（移除的元素）

```javascript
var arr = [1, 2];
let arr1 = arr.shift();
console.log(arr); //[2]
console.log(arr1); //1
let arr2 = arr.shift();
console.log(arr2); //2
let arr3 = arr.shift();
console.log(arr3); //undefined
```

### slice()

> 可从已有的数组中返回选定的元素 并以新的字符串返回被提取的部分(改变原始数组)

-   语法：arr.slice(start, end)
-   参数：
    -   start: 可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推
    -   end: 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
-   返回值：返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

```javascript
let arr = [3, 5, 7, 9];
let arr1 = arr.splice(1, 2);
let arr2 = [3, 5, 7, 9];
let arr3 = arr2.splice(1);
console.log(arr); //[3, 9]
console.log(arr1); //[5, 7]
console.log(arr2); //[3]
console.log(arr3); //[5, 7, 9]
```

### some()

> 用于检测数组中的元素是否有满足指定的条件

-   语法：arr.some(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：布尔值。如果数组中有一个元素满足条件返回 true，否则返回 false。

```javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.some((elem, index, arr) => {
	return elem >= 4;
});
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr1); //true
```

### sort()

> 法用于对数组的元素进行排序 排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序。(改变了原数组)
> 当数字是按字母顺序排列时"40"将排在"5"前面。使用数字排序，你必须通过一个函数作为参数来调用。函数指定数字是按照升序还是降序排列。这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。这种方法会改变原始数组！

-   语法：arr.sort(sortfunction)
-   参数：
    -   sortfunction: 可选。规定排序顺序。必须是函数。
-   返回值：数组的引用。请注意，数组在原数组上进行排序，不生成副本

```javascript
let NumAscSort = (a, b) => {
	return a - b;
};
let NumDescSort = (a, b) => {
	return b - a;
};
var arr = [90, 88, 93, 106, 20, 10, 66];
let arr1 = arr.sort(NumDescSort);
console.log(arr); //[106, 93, 90, 88, 66, 20, 10]
console.log(arr1); //[106, 93, 90, 88, 66, 20, 10]
let arr2 = arr.sort(NumAscSort);
console.log(arr2); //[10, 20, 66, 88, 90, 93, 106]
```

### splice()

> 用于插入、删除或替换数组的元素

-   语法：array.splice(index,howmany,item1,.....,itemX)
-   参数：
    -   index: 必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
    -   howmany: 必需。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素
    -   item1, ..., itemX: 可选。要添加到数组的新元素
-   返回值：如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。

```javascript
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.splice(0, 1);
console.log(arr); // [2, 3, 4, 5]
console.log(arr2); // [1]
let arr3 = arr.splice(0, 1, 8, 9, 10);
console.log(arr); //[8, 9, 10, 3, 4, 5]
console.log(arr3); //[2]
```

### toLocaleString()

> (es6 新增)返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   locales: 可选。带有 BCP 47 语言标记的字符串或字符串数组，关于 locales 参数的形式与解释，请看 Intl 页面
    -   options: 可选。一个可配置属性的对象
-   返回值：表示数组元素的字符串

```javascript
let arr = ['￥7', 500, 8123, 12];
let arr1 = arr.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
console.log(arr); //["￥7", 500, 8123, 12]
console.log(arr1); //￥7,￥500,￥8,123,￥12"
```

### toString()

> 可把数组转换为字符串，并返回结果

-   语法：arr.toString()
-   参数：

-   返回值：可把数组转换为字符串，并返回结果

```javascript
let arr = [1, 'heoolo', false, { name: 'zs', age: 12 }];
let arr1 = arr.toString();
console.log(arr); //[1, 'heoolo', false, {name:'zs',age:12}];
console.log(arr1); //1,heoolo,false,[object Object]
```

### unshift()

> 可向数组的开头添加一个或更多元素，并返回新的长度。(改变数组的长度)

-   语法：arr.unshift(item1,item2, ..., itemX)
-   参数：
    -   item1,item2, ..., itemX: 可选。向数组起始位置添加一个或者多个元素。
-   返回值：返回一个新数组的长度.

```javascript
let arr = ['张三', '李四', '王五'];
let count = arr.unshift('赵六', '小明');
console.log(count); //5
console.log(arr); // ["赵六", "小明", "张三", "李四", "王五"]
```

### valueOf()

> 返回 Array 对象的原始值。

-   语法：arr.valueOf()
-   参数：
-   返回值：valueOf() 返回数组值(不改变原始数组)

```javascript
let arr = ['2', '4', '5', '8'];
let arr1 = arr.valueOf();
console.log(arr); //["2", "4", "5", "8"]
console.log(arr1); //["2", "4", "5", "8"]
```
