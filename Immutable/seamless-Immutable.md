# seamless-Immutable

-   seamless-Immutable 是一套轻量级的持久化数据结构库 , seamless-immutable 并没有实现完整的 Persistent Data Structure 而是使用 Object.defineProperty（因此只能在 IE9 及以上使用）扩展了 JavaScript 的 Array 和 Object 对象来实现，只支持 Array 和 Object 两种数据类型，API 基于与 Array 和 Object 操持不变。代码库非常小，压缩后下载只有 2K。相比 Immutable.js 压缩后下载有 16K 而言，小巧了很多, 而且 API 比较简洁，易懂

### seamless-Immutable API 汇总

##### from(type)

-   type：array | object

*   设置成 Immutable 对象

```code
let code1 = Immutable.from([1, 2, 3]);
let code2 = Immutable([1, 2, 3])); //同 from()
console.log(code1);//Immutable([1, 2, 3])
console.log(code2);//Immutable([1, 2, 3])
```

##### isImmutable(type)

-   type：array | object | immutable

*   判断是否是 Immutable 对象

```code
let code1=Immutable.from([1, 2, 3])
let code2= {a: 12};
console.log(Immutable.isImmutable(code1)); //true
console.log(Immutable.isImmutable(code2)); //false
```

-   注：参数如果是 int string bool,undefined,null 返回 true

##### asMutable(obj,type)

-   obj： immutable
-   type：默认是{deep:false}

*   返回数组的可变副本,对于深度可变的副本需设置 {deep:true}

```code
code1:
var array = Immutable(['hello', 'world']);
var mutableArray = Immutable.asMutable(array);
console.log(array); //Immutable(['hello', 'world'])
console.log(mutableArray); //['hello', 'world']
code2:
var code1 = Immutable(['hello', 'world', ['immutable', 'react']]);
var code2 = Immutable.asMutable(code1, {deep: true});
console.log(code1); //Immutable(['hello', 'world',['immutable', 'react']])
console.log(code2); //['hello', 'world',['immutable', 'react']]
```

##### merge (obj1,obj2,type)

-   obj1 immutable
-   obj2 : object| array
-   type: object 默认是{deep:false}

*   返回合并后的 Immutable,对于深度可变的副本需设置 {deep:true}

```code
code1:
var obj = Immutable({a: 'AA', b: 'BB', c: 'CC'});
let newobj = Immutable.merge(obj, {c: 'CC', d: 'DD'});
console.log(newobj); // Immutable({a: "AA", b: "BB", c: "CC", d: "DD"})
code2:
var obj = Immutable({status: 'ok', data: {a: 'AA', b: 'BB'}});
let newsobj = Immutable.merge(obj, [{status: 'error', data: {c: 'CC'}}, {data: {a: 'AAAA'}}], {deep: true});
console.log(newsobj); //Immutable({status: "error", {a: "AAAA", b: "BB", c: "CC"}})
code3:
var code1 = Immutable([1, 2, 3]); //Array无效
let code2 = Immutable.merge(code1, [4, 5, 6]);
console.log(code2); //Immutable([1,2,3])
```

##### replace(obj1,obj2,type)

-   obj1 immutable
-   obj2 : object
-   type: object 默认是{deep:false}

*   返回替换后的 Immutable,对于深度可变的副本需设置 {deep:true}

```code
var obj1 = Immutable({a: {b: 'test'}, c: 'test'});
var obj2 = Immutable.replace(obj1, {a: {b: 'test'}, d: 'ok'}, {deep: true});
console.log(obj2);//Immutable({a: {b: 'test'}, d: 'ok'})
console.log(obj1 === obj2); //  false
console.log(obj1.a === obj2.a); //  true
```

##### set(obj,key,value,type)

-   obj1 immutable
-   key : string
-   value : any
-   type: object 默认是{deep:false}

*   设置 immutable 对象制定的值

```code
var obj = Immutable({a: 'AA', b: 'BB', c: {d: 'DD'}});
let newobj = Immutable.set(obj, 'b', 'BBB');
console.log(obj); // Immutable({a: 'AA', b: 'BB', c: {d: 'DD'}})
console.log(newobj); // Immutable({a: 'AA', b: 'BBB', c: {d: 'DD'}})
```

##### setIn (obj,key,value,type)

-   obj1 immutable
-   key : string
-   value : any
-   type: object 默认是{deep:false}

*   深度设置 immutable 对象制定的值

```code
var obj = Immutable({a: 'AA', b: 'BB', c: {d: 'DD'}});
let newobj = Immutable.setIn(obj, ['c', 'd'], 'DDDD');
console.log(obj);//Immutable({a: 'AA', b: 'BB', c: {d: 'DD'})
console.log(newobj); //Immutable({a: 'AA', b: 'BB', c: {d: 'DDDD'})
```

##### getIn(ob,arr,default)

-   obj： immutable
-   key : array
-   default : 如果返回值为空则返回默认值

*   获取 immutable 对象指定的值

```code
var obj = Immutable({a: {b: 'BB', c: 'CC'}, d: 'DD'});
let code1 = Immutable.getIn(obj, ['a', 'b']);
let code2 = Immutable.getIn(obj, ['a', 'c'], 'EE');
console.log(code1); //BB
console.log(code2); //CC
```

##### update(obj,key,fun,parmas)

-   obj： immutable
-   key : string
-   fun : function
-   parmas：any，回调函数的参数

*   修改 immutable 对象的值

```code
code1:
let fun = x => x + x;
var obj = Immutable({a: 'AA'});
let newobj = Immutable.update(obj, 'a', fun);
console.log(obj); //Immutable({a: 'AA'})
console.log(newobj); // Immutable({a: 'AAAA'})
code 2 :
let add = (x, y) => x + ' ' + y;
var obj = Immutable({a: 'hello'});
var newobj = Immutable.update(obj, 'a', add, 'world');
console.log(obj); //Immutable({a: 'hello'})
console.log(newobj); //Immutable({a: 'hello world'})
```

##### updateIn(obj,key,fun,parmas)

-   obj： immutable
-   key : array
-   fun : function
-   parmas：any，回调函数的参数

*   深度修改 immutable 对象的值

```code
let add = (x, y) => x + y;
var obj = Immutable({a: {b: 1}});
let newobj = Immutable.updateIn(obj, ['a', 'b'], add, 10);
console.log(obj);//Immutable({foo: {bar: 1}})
console.log(newobj); //Immutable({foo: {bar: 11}})
```

##### without(obj,key)

-   obj： immutable
-   key : array | string |function

*   删除 immutable 对象的值

```code
code 1:
var obj = Immutable({a: 'AA', b: 'BB', c: 'CC'});
let obj1 = Immutable.without(obj, 'b');
console.log(obj1); // Immutable({a: 'AA', c: 'CC'})
code 2:
var obj = Immutable({a: 'AA', b: 'BB', c: 'CC'});
let obj2 = Immutable.without(obj, ['a', 'b']);
console.log(obj2); // Immutable({ c: 'CC'})
code 3:
var obj = Immutable({a: 'AA', b: 'BB', c: 'CC'});
let obj3 = Immutable.without(obj, 'a', 'b');
console.log(obj3); // Immutable({ c: 'CC'})
code 4:
var obj = Immutable({a: 'AA', b: 'BB', c: 'CC'});
let obj4 = Immutable.without(obj, (value, key) => key === 'a' || value === 'BB');
console.log(obj4); // Immutable({ c: 'CC'})
```

##### flatMap(obj,fun)

-   obj： immutable
-   fun : function

*   循环 immutable 对象， 返回 一个新的 immutable 对象

```code
var array = Immutable(['AA', 'BB', 'CC']);
let newarr = Immutable.flatMap(array, str => 'hello ' + str);
console.log(newarr); //Immutable(["hello AA", "hello BB", "hello CC"])
```

##### asObject(obj,fun)

-   obj： immutable
-   fun : function

*   迭代器函数将返回两个元素的数组 - 第一个表示键，另一个表示值。然后返回由这些键和值构成的不可变对象。

```code
var array = Immutable(['aa', 'bb']);
let newobj = Immutable.asObject(array, str => {
    return [str, str.toUpperCase()];
});
console.log(newobj); //Immutable({aa: "AA", bb: "BB"})
```
