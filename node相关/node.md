## Node

### fs

```code
fs.readFile //读取文件夹异步读取
fs.readFileSync(path[, options]) //同步读取
fs.writeFile //写入文件
fs.writeFileSync(file, data[, options])
fs.appendFile //追加文件
fs.mkdirSync('a') // 同步创建文件 要求父目录必须存在
fs.readdir(path[, options], callback) //读取目录下所有的文件
fs.stat(path, callback）//查看文件目录信息
    stat.isDirectory() //判断是否是文件夹
    stat.isFile() //判断是否是文件
fs.rename(oldPath, newPath, callback) // 移动文件或目录
fs.unlink(path, callback)// 删除文件
fs.unlinkSync(path, callback)// 删除文件  同步
fs.rmdir(path, callback) //删除文件夹
fs.rmdirSync(path, callback) //删除文件夹 同步
fs.accessSync('a') //查找文件是否存在
fs.ftruncate(fd[, len], callback)//截断文件
```

-   文件系统

### path

```code

```

-   路径

### vm

-   虚拟机 沙箱 不依赖外部环境变量

### util

-   实用工具

```code
promisify //promise
```

### event

-   事件触发器

```code
    on
    off
    emmit
    once
    newListener
```

### os

-   操作系统

```code
os.cpus()
os.homedir()
```

### crypto

-   加密

### http

### path

### zlib

### stream
