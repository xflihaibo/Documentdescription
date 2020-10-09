# webpack 配置

这里主要是 webpack 打包配置的地方

#### devServer.conf.js

本地开发起服务设置请求代理

```code
const path = require('path');
const host = require('./getLocalIp.js')();
module.exports = {
    contentBase: [path.resolve('./src')],
    port: '3800',  //端口号
    historyApiFallback: {
        rewrites: [{from: /^\/trial/, to: '/trial/dev.html'}]
    },
    compress: true,
    host,  //IP地址
    hot: true,
    open: true,
    inline: true,
    noInfo: false,
    quiet: false,
    clientLogLevel: 'none',
    overlay: {
        warnings: true,
        errors: true
    },
    proxy: [  //配置代理
        {
            context: ['!/trial/**'],  //正则除去‘/trial/’ 开头统一走 开发环境
            target: 'https://platform-dev.mobilemd.cn',
            changeOrigin: true,
            pathRewrite: {
                '^/$': ''
            },
            cookieDomainRewrite: host
        }
    ]
};
```

##### getLocalIp.js 主要依赖 os 模块获取本地 IP 地址

##### webpack.build.js 生产环境基本配置

##### webpack.dev.js 开发环境基本配置

##### webpack.prod.js 生产打包环境 压缩后不适合调试， 打包小

##### webpack.test.js 测试打包环境 压缩适合调试，打包稍大
