# Electron

> 自动重启工具 nodemon supervisor

#### 主进程- Main Process

1.  可以使用和系统对接的 Electron API-创建菜单,上传文件等
2.  创建渲染进程- Renderer Process
3.  全面支持 Node. js
4.  只有一个,作为整个程序的入口点

#### 渲染进程- Renderer Process

1.  可以有多个,每个对应一个窗口
2.  每个都是一个单独的进程
3.  全面支持 Node. js 和 DOM API
4.  可以使用一部分 Electron 提供的 API

## 主进程(ipcMain)与渲染进程通信(ipcRenderer)

```javascript
//主进程
ipcMain.on('open-data', (event, path) => {
    console.log(path);
    event.sender.send('send-file');
});

//渲染进程
ipcRenderer.send('open-data');

ipcRenderer.on('send-file', (event, path) => {
    console.log(path);
});
```

## 主进程(ipcMain)与渲染进程(ipcRenderer) 模块

shell
screen
clipborad :剪切
crashReporter :崩溃报告
nativeImage: 图片

## 主进程(ipcMain)

app
BrowserWindow
webContents：控制渲染网页
ipcMain
dialog
Menu
MenuItem
net ：http
protocol：
session
Tray：通知栏区域图标
systemPerferences：获取偏好设置
globalhortcut：定义快捷键
contentTracing：收集跟踪性能瓶颈
powerSaveBlocker:阻止系统进入睡眠模式
powerMonitor：监听电源更改
autoUpdater：自动更新

## 渲染进程(ipcRenderer) 模块

ipcRenderer
desktopCapturer:捕获桌面声音视频
romote：获取主进程模块
webFrame:渲染网页

## 模块

electron-store:本地持久化
electron-updater （--save）自动更新检测
electron-builder 打包

文档配置

<!-- docsify :vue 文档 -->
<!-- gh-pages -->
<!-- doc-test -->
<!-- gatsby react 静态资源网 -->

//代码加密 防止代码被窃取

https://github.com/javascript-obfuscator/javascript-obfuscator
https://github.com/javascript-obfuscator/webpack-obfuscator

https://javascriptobfuscator.herokuapp.com
https://codecov.io/pricing //放置静态资源
//富文本编辑器
document.desigMode="on"

//Oclif

algolia
parser

syncthing： 同步数据


