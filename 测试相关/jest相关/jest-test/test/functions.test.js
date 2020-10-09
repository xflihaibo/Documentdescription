import functions from '../src/functions.js';

test('sum(2+2) 等于4', () => {
    expect(functions.sum(2, 2)).toBe(4);
});

test('sum(2+2) 等于NaN', () => {
    expect(functions.sum(2, 'bd')).toBe('2bd');
});

// not;
test('sum(2+4) 等于6', () => {
    expect(functions.sum(2, 4)).not.toBe(4);
});

test('sum(2+4) 等于6', () => {
    expect(functions.sum(2, 4)).not.toBe(8);
});

//.toEqual() //浅相等
console.log(functions.getAuthor());
test('getAuthor()返回的对象深度相等', () => {
    expect(functions.getAuthor()).toEqual(functions.getAuthor());
});

test('getAuthor()返回的对象内存地址不同', () => {
    expect(functions.getAuthor()).not.toBe(functions.getAuthor());
});

test('getAuthor()返回的对象深度相等', () => {
    expect({name: 'LITANGHUI', age: 24}).toEqual({name: 'LITANGHUI', age: 24});
});
test('getAuthor()返回的对象深度相等', () => {
    expect({name: 'LITANGHUI', age: 24}).not.toBe({name: 'LITANGHUI', age: 24});
});

test('getAuthor()返回的对象内存地址不同', () => {
    expect(functions.getAuthor()).toEqual({name: '李海波', age: 24});
});

//toHaveLength()
test('getIntArray(3)返回的数组长度应该为3', () => {
    expect(functions.getIntArray(3)).not.toHaveLength(10);
});

test('getIntArray(3.3)应该抛出错误', () => {
    function getIntArrayWrapFn() {
        functions.getIntArray(3.3);
    }
    expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
});

// toMatch
test('getAuthor().name应该包含"li"这个姓氏', () => {
    expect(functions.getAuthor().name).toMatch(/李/i);
});

// test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         console.log(data);
//         expect(data.username).toBe('Bret');
//     });
// });

// beforeAll(() => {
//     console.log('before all tests to excute !');
// });

// beforeEach(() => {
//     console.log('before each test !');
// });

// afterAll(() => {
//     console.log('after all tests to excute !');
// });

// afterEach(() => {
//     console.log('after each test !');
// });

// test(' async await', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toBe('Leanne Graham');
// });
