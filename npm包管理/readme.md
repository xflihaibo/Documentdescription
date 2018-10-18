## npm 上传自己的包

```json
npm install allblue   //检查npm 是否存在
```

-   如果没有 新建一个 allblue 的文件夹

```json
cd allblue
npm init  -y
```

-   进入 package.json 文件

```json
 "name": "allblue", //必填项目名称
 "version": "0.0.1" //必填版本信息
```

-   登录 npm

```json
 npm login //输入用户名、密码和邮箱
```

-   更新 npm 包 修改 package.json 文件夹中的 version 版本信息
    执行

```json
 npm publish
```

-   利用 npm 撤销发布包

```json
 npm unpublish 包名
```

[参考](https://www.cnblogs.com/penghuwan/p/6973702.html)
