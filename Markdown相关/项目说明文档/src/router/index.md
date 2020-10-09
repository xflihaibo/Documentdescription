# router

全局路由参数配置，以及项目列表配置

## componentMap

> 路由权限控制 引用路由 暴露一个固定的变量名，在 opm 系统配置 ertial 的权限菜单。按固定配置就好了

```code
import HistoricalTrace from '../view/page/Config/Pages/Subjects/HistoricalTrace';
export const componentMap = {
    'trial-subjects-doctorOrder-historicaltrace': HistoricalTrace
};
```

## index

> 定义路由根目录

## routers

> 项目导航菜单配置参数
