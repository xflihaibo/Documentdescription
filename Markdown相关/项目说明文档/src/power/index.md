# 权限控制管理

在获取项目之后，获取相关的权限然后缓存到 sessionStorage,然后执行 initData() 方法

```code
src/view/app.jsx;

import {initData} from 'src/power/index.js';  //引用 权限文件
initData();//执行初始化
```

power/index.js 通过 函数式编程 中的 函数的柯里化的特特性 在初始化时传递一部分参数执行，让它返回一个函数去处理剩下的参数，防止每次权限都要初始化，FindObj 全局保存一个函数， 来执行剩下的参数

```code
src/power/index.js;

let FindObj;
const initLoadData = () => { //函数式编程
    const InitData = JSON.parse(sessionStorage.getItem('etiral_elementPower')) || null;
    let Temporary = {};
    InitData &&
        InitData.map(item => {
            Temporary[item.uniqueId] = item;
        });
    return name => {
        return Temporary[name];
    };
};

const initData = () => {
    FindObj = initLoadData(); //返回值复制给
};
```

传递剩下的参数执行

```code
const TransferTap = () => { //执行方法
    return FindObj('smaple_turn_over');
};

export { //暴露方法
    TransferTap
}

src/view/page/Config/Pages/Sample/SampleProcessing.js //文件下使用方法

import {TransferTap} from 'src/power/index.js';

{TransferTap() && (
    <TabPane tab="移交" key="SampleTurn">
        <SampleTurn  />
    </TabPane>
)}
```
