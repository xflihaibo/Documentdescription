## Fildder

### mac 安装 fildder

##### Mono 安装

> Mono 是微软推出的跨平台.Net Core 方案，目前仅支持控制台程序，下载地址http://www.mono-project.com/download/#download-mac
> 下载安装后，在 Terminal 里执行以下命令：

```bush
 /Library/Frameworks/Mono.framework/Versions/<Mono Version>/bin/mozroots --import --sync
```

> 此步是从 Mozilla LXR 上下载所有受信任的 root 证书，存于 Mono 的证书库里。root 证书能用于请求 https 地址。
> 接下来把 Mono 加入到环境变量中。编辑.bash_profile 文件：

```bush
sudo vi ~/.bash_profile
```

> 加入文本：

```bush
export MONO_HOME=/Library/Frameworks/Mono.framework/Versions/5.0.1
export PATH=$PATH:$MONO_HOME/bin
```

> 保存后重新打开 Terminal
> 安装 Fiddler
> 从 Fiddler 官网https://www.telerik.com/download/fiddler下载fiddler-mac.zip的压缩包。解压到非中文字符的路径下。
> Fiddler 运行
> 打开 Terminal，进入到 Fiddle-mac 路径，执行命令运行：

```bush
sudo mono --arch=32 Fiddler.exe
```

> 若出现提示

```bush
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

> 重新安装 xcode command line 即可，命令：

```bush
xcode-select --install
```

> 若出现错误提示

```bush
Got a SIGSEGV while executing native code. This usually indicates
a fatal error in the mono runtime or one of the native libraries
used by your application.
```

> 需要在执行命令时添加--arch=32 参数指定 Mono 版本
> 无误后就可以打开 Fiddler 界面了。

### 代理模式

流模式 ：管道
缓冲模式 ：异步

### 面板功能

go: 调试
stream: 模式切换
Decode: 解压
keep All sessions :保存会话
any Process ：抓包
find :查找
TextWizaard :解码
tearoff : 浮窗面板

