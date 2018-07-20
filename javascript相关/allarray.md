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
