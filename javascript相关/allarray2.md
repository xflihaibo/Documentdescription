# javascript 数组(array) 常用的方法集锦(下)

### map()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
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
-   返回值：返回删除的元素。

```javascript
```

### push()

> 向数组的末尾添加一个或多个元素，并返回新的长度。(此方法改变数组的长度！)

-   语法：arr.push(item1, item2, ..., itemX)
-   参数：
    -item1, item2, ..., itemX:必需。要添加到数组的元素。
-   返回值：数组新长度。

```javascript
```

### reduce()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### reduceRight()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### reverse()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### shift()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### slice()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### some()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### splice()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### toLocaleString()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### toString()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### unshift()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```

### sort()

> 它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

-   语法：arr.map(function(currentValue,index,arr), thisValue)
-   参数：
    -   currentValue: 必须。当前元素的值
    -   index: 可可选。当期元素的索引值
    -   arr: 可选。当期元素属于的数组对象
-   thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
-   返回值：返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```javascript
```
