# actions

redux 触发行为 主要对 初始选择项目周期，配置页面 面包屑的上的 切换项目周期记录；受试者病历表，受试者痕迹 面包屑的上的 切换受试者；

```code
export const changeProject = val => {  //切换 项目周期
    return {
        type: 'CHANGE_PROJECT',
        payload: val
    };
};

export const changeSubject = val => { //切换 受试者
    return {
        type: 'CHANGE_SUBJECT',
        payload: val
    };
};
```
