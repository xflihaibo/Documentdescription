## Immutable

-Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构）。
![Immutable](./img/img.gif)

### API

#### Map

```javascript
isMap   判断是否是Map
clear   清空值
set 设置值
delete  删除值
update  更新值
merge   合并值
setIn   设置值
deleteIn    删除值
updateIn    更新值
mergeIn 合并值
get 获取值
getIn   获取值
keys    key的数组
values  value的数组
entries entry的数组
toJS    转成普通JS对象
toObject    转成普通对象
toJSON  转成JSON对象
toArray 转成数组
```

#### List

```javascript
isList  判断是否是List
size    统计个数
push    添加  
pop 弹出最后一个  
update  更新  
delete  删除指定元素的数组   delete(2)
insert  插入指定元素的数组   insert(2)
clear   清空数组    clear()
concat  合并  
map 映射  
filter  过滤  
get 获取  
find    查找  
includes    判断包含
last    最后一个
reduce  计算总和
count   统计个数
```

### 优点

1.  Immutable 降低了 Mutable 带来的复杂度
2.  节省内存
3.  Undo/Redo，Copy/Paste，甚至时间旅行这些功能做起来小菜一碟
4.  并发安全
5.  拥抱函数式编程

### 缺点

1.  需要学习新的 API
2.  增加了资源文件大小
3.  容易与原生对象混淆

#### fromJS()

> 完全地将一个 JS 对象转或数组转换为不可变的 Maps 或 Lists。

#### is()

> 和 Object.is 类似的相等比较方法，比较两个 Collection 是否有相同的值。

#### hash()

> hash()方法是 Immutable 确认两个值是否相等和决定这些值如何存储的重要依据。传入任何数据，它将返回一个 31 位的整形。

#### isImmutable()

> 返回 True 表示这是一个不可变数据（Collection 或 Record）。

#### isCollection()

返回 True 表示这是一个集合（Collection）或集合的子类。

#### isKeyed()

返回 True 表示这是 Collection.key 或其子类。

#### isIndexed()

返回 True 表示这是 Collection.isIndexed 或其子类。

#### isAssociative()

返回 True 表示这是 Keyed 或者 Indexed Collection。

#### isOrdered()

返回 True 表示这是一个 Collection 同时迭代索引设置正确。Collection.indexed、OrderedMap 和 OrderedSet 会返回 True。

#### isValueObject()

返回 True 表示这是个 JS 对象并且同时拥有 equals()和 hashCode()方法。

#### ValueObject

List
List 是有序的密集型集合，类似于 JS 的数组（Array）。

#### Map

不可变 Map 是无序的可持久化的 Collection.Keyed(key, value)键值对，存取复杂度为 O(log32 N)。

#### OrderedMap

一种能够保证迭代顺序为元素进入顺序的 Map。

#### Set

一种存取复杂度为 O(log32 N)的无重复值的集合。

#### OrderedSet

一种能够保证迭代顺序为元素添加(add)顺序的 Set。

#### Stack

Stack（栈）是一种支持复杂度为 O(1)的高效添加和删除数据的集合，在栈顶添加和删除数据使用 unshift(v)和 shift()。

#### Range()

返回由 Seq.Indexed 指明的从 start 到 end 由 step 指定增量的数值（包含 start，不包含 end），默认值 start 为 0，step 为 1，end 为无穷大。当 start 与 end 相等时，返回一个空范围。

#### Repeat()

返回右 Seq.Indexed 指明的重复 times 次数的 value，当 times 未定义时，返回值为无穷 Seq 的 value。

#### Record

建立一个继承自 Record 的新类型。它类似于 JS 的对象，但需要明确指定可设置的键及其对应的值。

#### Seq

相当于一系列值，但不能具体表现为某种数据结构。

#### Collection

Collection 是一组可迭代的键值对集合，它也是所有 immutable 的基类，确保它们能使用集合的方法（如 map，filter）。
