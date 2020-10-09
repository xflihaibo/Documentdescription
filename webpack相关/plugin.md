# 常用插件

html-webpack-plugin :将 HTML 引用路径和我们的构建结果关联起来
除了压缩 JS 代码的 uglifyjs-webpack-plugin，常用的还有定义环境变量的 DefinePlugin，生成 CSS 文件的 ExtractTextWebpackPlugi

css-loader 负责解析 CSS 代码，主要是为了处理 CSS 中的依赖，例如 @import 和 url() 等引用外部文件的声明；
style-loader 会将 css-loader 解析的结果转变成 JS 代码，运行时动态插入 style 标签来让 CSS 代码生效。
如果需要单独把 CSS 文件分离出来，我们需要使用 extract-text-webpack-plugin 插件

file-loader 可以用于处理很多类型的文件，它的主要作用是直接输出文件，把构建后的文件路径返回。配置很简单，在 rules 中添加一个字段，增加图片类型文件的解析配置：

copy-webpack-plugin 用来复制文件
extract-text-webpack-plugin 依赖的 CSS 分离出来成为单独的文件
ProvidePlugin 引用某些模块作为应用运行时的变量，从而不必每次都用 require 或者 import
IgnorePlugin 这个插件用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去。例如我们使用 moment.js
DefinePlugin 用于创建一些在编译时可以配置的全局常量

# plugin 相关

> - uncss 剔除 不支持 react
> - speed-measure-webpack-plugin 监控打包时间
> - webpack-build-notifier 监听错误
> - progress-bar-webpack-plugin webpackbar 打包进度条
> - nyan-progress-webpack-plugin 魔性打包进度彩虹条
> - webpack-dashboard 控制面板优化样式
> - webpack-dashboard 优化 打包面板
> - node-bash-title 修改 面板 bash bar title
> - title-notify 浏览器提示消息插件 https://wangchujiang.com/iNotify/。//一个js库消息提示
> - webpack-deep-scope-plugin 深度 tree shakeing
> - set-iterm2-badge 设置面板 title
> - iterm2-tab-set 设置面板 title
> - webpack-bundle-analyzer 分析打包 📦 结果
> - webpack-manifest-plugin 性能优化命脉 hot-reload
> - bundlesize
> - webpack-chart 图表分析打包
> - webpack-parallel-uglify-plugin js 压缩打包
> - webpack-internal-pugin-relation 分析 webpack hooks 钩子结构
> - purifycss-webpack 消除未使用的 css . 消除未使用的 css . purifycss-webpack 使用这个插件必须配合 extract-text-webpack-plugin 这个插
> - lodash-webpack-plugin babel-plugin-lodash 优化 lodash https://segmentfault.com/a/1190000010815848
> - commander https://blog.csdn.net/qq_40129176/article/details/80816853
> - webpack-cdn-upload-plugin 打包生成的静态资源上传到 CDN
> - babel-plugin-module-resolver 统一添加文件路径的别名类似@
> - new webpack.BannerPlugin('版权所有，翻版必究')
> - dll 开发优化第三方包不再每次都要打包加载 new.webpack.DllPlugin({name:'\_dll_name'})
> - new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn|en-gb)$/), //禁止 moment 多语言打入包内
> - new webpack.IgnorePlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn|en-gb)$/), //忽略打包文件
> - exclude include//忽略打包文件
> - HappyPack
> - code-metrics-loader 降低代码复杂度神器
> - hard-source-webpack-plugin 压缩性能
> - cache-loader，压缩性能
> - const CompressionWebpackPlugin = require('compression-webpack-plugin'); gzip 压缩

```code
webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
      algorithm: 'gzip',//算法
      test: new RegExp(
          '\\.(js|css)$'    //压缩 js 与 css
      ),
     threshold: 10240,//只处理比这个值大的资源。按字节计算
     minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
    })
)
```

> - Scope Hosting webapck

        cacheGroups：{
             common:{
                    chunks：‘initial’，
                    name：‘xxxx’，
                    minSize：0，//字节
                    minChunks：2
             }，
             vendor：{

             }
        }

> - html-withimg-loader : 解析 html 图片 loader
> - webpack-parallel-uglify-plugin : 解析 打包 js 压缩
> - fast-sass-loader 加快打包速度
> - add-asset-html-webpack-plugin 静态文件插入
> - cache-loader :编译缓存
> - browserslist :编译配置浏览器版本

```javascript
"browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
```

> - webpack-obfuscator:加密插件

<!-- webpack-bundle-analyser -->
