# store

redux 仓库，初始化数据，以及存放数据

```code
import {combineReducers} from 'redux';
let name = { //init
    projectId: '',
    projectName: '',
    trialTypeId: '',
    trialName: '',
    subjectsId: ''
};
let etiral_experimentObject = JSON.parse(sessionStorage.getItem('etiral_experimentObject'));  //防止刷新后数据丢失

if (etiral_experimentObject) {
    name = {...name, ...etiral_experimentObject};  //合并数据 返回新对象
}

const configureStore = (state = name, action) => { //函数式编程
    switch (action.type) {
        case 'CHANGE_PROJECT':
            return {
                ...state,
                ...action.payload
            };
        case 'CHANGE_SUBJECT':
            return {
                ...state,
                subjectsId: action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({ //合并store
    configureStore
});
```
