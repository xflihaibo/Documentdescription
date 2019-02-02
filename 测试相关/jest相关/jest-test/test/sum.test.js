import sum from '../src/sum.js';

test('add(2+2) 等于4', () => {
    expect(sum.add(2, 2)).toBe(4);
});

class Hook {
    constructor() {
        this.init();
    }

    init() {
        this.a = 1;
        this.b = 1;
    }

    sum() {
        return this.a + this.b;
    }
}

describe('hook', () => {
    const hook = new Hook();
    // 每个测试用例执行前都会还原数据，所以下面两个测试可以通过。
    beforeEach(() => {
        hook.init();
    });
    test('test hook 1', () => {
        console.log('okok');
        hook.a = 2;
        hook.b = 2;
        expect(hook.sum()).toBe(4);
    });
    test('test hook 2', () => {
        console.log('okok');
        expect(hook.sum()).toBe(2); // 测试通过
    });
});
