# 奇技淫巧

##格式化金钱

```javascript
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const money = ThousandNum(19941112);
// money => "19,941,112"
```

## 取整：代替正数的 Math.floor()，代替负数的 Math.ceil()

```javascript
const num1 = ~~1.69;
const num2 = 1.69 | 0;
const num3 = 1.69 >> 0;
// num1 num2 num3 => 1 1 1
```

##补零

```javascript
const FillZero = (num, len) => num.toString().padStart(len, '0');
const num = FillZero(169, 5);
// num => "00169"
```

##时间戳

```javascript
const timestamp = +new Date('2019-03-31');
// timestamp => 1553990400000
```

##是否为空数组

```javascript
const arr = [];
const flag = Array.isArray(arr) && !arr.length;
// flag => true
//数组不为空时执行
const arr = [0, 1, 2];
arr.length && Func();
```

##是否为空对象

```javascript
const obj = {};
const flag = DataType(obj, 'object') && !Object.keys(obj).length;
// flag => true
//对象不为空时执行
const obj = {a: 0, b: 1, c: 2};
Object.keys(obj).length && Func();
```

## 数组克隆 合并 去重

```javascript
const _arr = [0, 1, 2];
const arr = [..._arr];

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];

const arr = [...new Set([0, 1, 1, null, null])];
```

## 交换赋值

```javascript
let a = 0;
let b = 1;
[a, b] = [b, a];
```

## 克隆对象 合并

```javascript
const _obj = {a: 0, b: 1, c: 2}; // 以下方法任选一种
const obj = {..._obj};
const obj = JSON.parse(JSON.stringify(_obj));

const obj1 = {a: 0, b: 1, c: 2};
const obj2 = {c: 3, d: 4, e: 5};
const obj = {...obj1, ...obj2};

const env = 'prod';
const link = {
    dev: 'Development Address',
    test: 'Testing Address',
    prod: 'Production Address'
}[env];

const obj = {a: 0, b: 1, c: 2}; // 只想拿b和c
const {a, ...rest} = obj;
// rest => { b: 1, c: 2 }

const obj = {a: 0, b: 1, c: 2};
const {a, b: d, c: e} = obj;
// a d e => 0 1 2
```
