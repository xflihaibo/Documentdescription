# axios

## API

get
post
put
delete

```javascript
var data = {
    id: 12
};

//例如1
axios.post('/popst', data).then(res => {
    console.log(res);
});

//例如2
axios({
    method: 'post',
    url: '/popst',
    data: data
}).then(res => {
    console.log(res);
});
```

## 参数

```javascript
TMHTTP.setConfig({
    // 默认请求
    //method: 'get' ,
    // 是否过滤 null 值
    //isFilter: true ,
    // 是否缓存
    //isCache: false ,
    // 基础url
    // baseURL: '/' ,
    // 默认sessionkey
    //sessionKey: 'sso_loginInfo' ,
    // 是否携带cookie信息
    //withCredentials: true ,
    // 默认超时时间600秒
    timeout: 600000,
    // 响应格式
    // 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    //responseType: 'json' ,
    // 设置http响应内容的最大长度
    //maxContentLength: 1024 * 1024 * 1024,
    // 默认请求头
    headers: {
        Accept: 'application/json;version=3.0;compress=false',
        'Content-Type': 'application/json;charset=utf-8'
    }
});
```

params：url 拼接
data:请求体

### 并发请求

axios.all([]):并发请求
axios.spread()：相对应的返回数据

```javascript
//例如2
axios.all([axios.get('/data.json'), axios.get('/city.json')]).then(axios.spread(data1,data2)=>{
        console.log(data1,data2)
    });
```

## 拦截请求

```javascript
axios.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);
//取消拦截
axios.interceptors.response.eject();
```

## 取消请求

```javascript
axios.CancelToken.source();
axios.get('data.json', {cancelToken: source.Token}).then(res => {}, err => {});
source.cancel('cancel http');
```
