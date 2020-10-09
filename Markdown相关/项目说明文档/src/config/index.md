# config

全局配置参数，方便统一维护

```code
项目全局配置三剑客：
const baseURL = '/trial-web'; //请求UIR地址
const appId = 'trial'; //ertial项目id
const basename = '/trial'; //url根路径


//公共配置 请求MDM库配置信息

const typeOid = {
    sex: 'CL_SEX', //性别
    nation: 'CL_NATIONAL', //民族
    race: 'CL_RACE', //种族
    marriage: 'CL_MARRIAGE', //婚姻
    yesno: 'CL_YN', //是否备份
    Takemedicine: 'AD_FREQUENCY', //给药频次
    Aditem: 'AD_ITEM', //医嘱内容
    Drugdelivery: 'AD_METHOD' //给药方式 //CL_ADMIN_METHOD
};

//固定的请求参数
const options = {
    option: 'option',
    unit: 'unit',
    advice: 'advice'
};
```
