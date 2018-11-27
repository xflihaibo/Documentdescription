# 设计模式

## 面向对象

**面向对象编程语言** （比如 C++ 和 Java），都有“类”（class）这个概念。所谓“类”就是对象的模板，对象就是“类”的实例。但是，JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。

构造函数就是一个普通的函数，但是有自己的特征和用法

#### 继承

子类继承父类，继承可以把公共方法抽离出来，提高复用，减少冗余

#### 封装

-   把数据封装起来
-   减少耦合，不该外部访问的不要让外部访问
-   利于数据的接口权限管理
-   ES6 目前不支持，一般认为\_开头的都会私有的，不要使用

#### 多态

-   同一个接口可以不同实现
-   保持子类的开放性和灵活性
-   面向接口编程

## 设计模式

### 什么是设计？

是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结

#### 目的

为了代码可重用性、让代码更容易被他人理解、保证代码可靠性。 设计模式使代码编写真正工程化；设计模式是软件工程的基石脉络，如同大厦的结构一样

### 设计模式五大原则

-   单一职责原则
-   开放封闭原则
-   里氏替换原则
-   接口隔离原则
-   依赖反转原则

#### S 单一职责原则

-   Single responsibility principle
-   一个程序只做好一件事
-   如果功能特别复杂就进行拆分

#### O 开放封闭原则

-   Open Closed Principle
-   对扩展开放，对修改关闭
-   增加需求时，扩展新代码，而非修改已有代码
-   这是软件设计的终极目标

#### L 里氏替换原则

-   Liskov Substitution Principle
-   子类能覆盖父类
-   父类能出现的地方子类就能出现
-   JS 使用比较少

#### I 接口隔离原则

-   Interface Segregation Principle
-   保持接口的单一独立，避免出现胖接口
-   JS 中没有接口，使用较少
-   类似于单一职责原则，更关注接口

#### D 依赖倒置原则

-   Dependence Inversion Principle
-   面向接口编程，依赖于抽象而不依赖于具体实现
-   使用方只关注接口而不关注具体类的实现
-   JS 中使用较少（没有接口，弱类型）

## 常见的设计模式

### 工厂模式

-   核心的工厂类不再负责所有的产品的创建，而是将具体创建的工作交给子类去做

```code
class Plant {
    constructor(name) {
        this.name = name;
    }
    grow() {}
}
class Apple extends Plant {
    constructor(name, taste) {
        super(name);
        this.taste = taste;
    }
    grow() {}
}
class Orange extends Plant {
    constructor(name, taste) {
        super(name);
        this.taste = taste;
    }
    grow() {}
}

class Factory {
    create(type) {
        switch (type) {
            case 'apple':
                return new Apple('🍎', '甜甜的');
            case 'orange':
                return new Orange('🍊', '酸酸的');
            default:
                throw new Error('错误❌');
        }
    }
}
let factory = new Factory();
let apple = factory.create('apple');
let orange = factory.create('orange');
console.log(apple.taste);
console.log(orange.taste);
react:
class Vnode {
    constructor(tag, attrs, children) {
        this.tag = tag;
        this.attrs = attrs;
        this.children = children;
    }
}
React.createElement  = function(tag, attrs, children) {
    return new Vnode(tag, attr, children);
};
```

##### 工厂方法模式

-工厂方法模式 Factory Method，又称多态性工厂模式。 -在工厂方法模式中，核心的工厂类不再负责所有的产品的创建，而是将具体创建的工作交给子类去做。

```code
class Plant {
    constructor(name) {
        this.name = name;
    }
    grow() {
        console.log('growing~~~~~~');
    }
}
class Apple extends Plant {
    constructor(name) {
        super(name);
        this.taste = '甜';
    }
}
class Orange extends Plant {
    constructor(name) {
        super(name);
        this.taste = '酸';
    }
}
class AppleFactory {
    create() {
        return new Apple();
    }
}
class OrangeFactory {
    create() {
        return new Orange();
    }
}
const settings = {
    apple: AppleFactory,
    orange: OrangeFactory
};
let apple = new settings['apple']().create();
console.log(apple);
let orange = new settings['orange']().create();
console.log(orange);
```

##### 抽象工厂

```code
class Button {
    render() {}
}
class AppleButton {
    render() {
        console.log('苹果按钮');
    }
}
class WindowButton {
    render() {
        console.log('Windows按钮');
    }
}

class Icon {
    render() {}
}
class AppleIcon {
    render() {
        console.log('苹果图标');
    }
}
class WindowIcon {
    render() {
        console.log('Windows图标');
    }
}
class Factory {
    createButton() {}
    createIcon() {}
}
class AppleFactory {
    createButton() {
        return new AppleButton();
    }
    createIcon() {
        return new AppleButton();
    }
}
class WindowsFactory {
    createButton() {
        return new WindowButton();
    }
    createIcon() {
        return new WindowIcon();
    }
}
const settings = {
    apple: AppleFactory,
    windows: WindowsFactory
};
let appleFactory = new settings['apple']();
appleFactory.createButton().render();
appleFactory.createIcon().render();

let windowsFactory = new settings['windows']();
windowsFactory.createButton().render();
windowsFactory.createIcon().render();
```

### 单例模式

```code
code1:
function Window(name) {
    this.name = name;
}
Window.prototype.getName = function() {
    return this.name;
};
Window.getInstance = (function() {
    let instance;
    return function(name) {
        if (!instance) {
            instance = new Window(name);
        }
        return instance;
    };
})();
let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2);

code2:
let Window = (function() {
    let window;
    let Window = function(name) {
        if (window) {
            return window;
        } else {
            this.name = name;
            return (window = this);
        }
    };
    Window.prototype.getName = function() {
        console.log(this.name);
    };
    return Window;
})();

let window1 = new Window('666');
let window2 = new Window('666');
window1.getName();
console.log(window1 === window2);
```

##### 命名空间

```code
let a={
    name:'a'
}
let b={
    name:'b'
}
```
