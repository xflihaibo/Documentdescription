# Sublime 编辑器常用设置

### 首选项设置参数

```json
{
    "color_scheme": "Packages/Color Scheme - Default/Mariana.sublime-color-scheme",
    "font_face": "Comic Sans MS", //设置字体
    "font_size": 14, //设置字体大小
    "ignored_packages": ["Vintage"],
    "spell_check": false,
    "tab_size": 4, //tab 4个空格
    "theme": "Adaptive.sublime-theme",
    "translate_tabs_to_spaces": true //空格代替tab缩近
}
```

### 设置 js 文件在 sublime 面板中执行

[请参考](https://blog.csdn.net/w13770269691/article/details/78390224)

-   选择菜单 Tools --> Build System --> new Build System
-   中文版的话是 工具 --> 编译系统 --> 新建编译系统
-   然后写入下面内容:

```json
{
    "cmd": ["node", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "working_dir": "${project_path:${folder}}",
    "selector": "source.js",
    "shell": true,
    "encoding": "utf-8",
    "windows": {
        "cmd": ["taskkill /F /IM node.exe >nul 2>nul & node", "$file"]
    },
    "linux": {
        "cmd": ["killall node; node", "$file"]
    },
    "osx": {
        "cmd": ["killall node >/dev/null 2>&1; node $file"]
    }
}
```

-   接着保存为 javascript.sublime-build，保存位置默认即可
-   Ctrl + B 或者 F7 运行

## 插件

### All Autocomplete

-   Sublime Text 默认的 Autocomplete 功能只考虑当前的文件，而 AllAutocomplete 插件会搜索所有打开的文件来寻找匹配的提示词。

### AutoFileName

-   快捷输入文件名

### Autoprefixer

-   CSS3 私有前缀自动补全插件，显然也很有用哇

### Babel

-   这个插件可以在你的 ES6/2015 和 React JSX 代码上添加语法高亮。安装插件之后，第一件要做的事就是把它设置为 .es6、 .jsx、 以及 .js 文件的默认语法。然而，如果你正在使用 ES3/5 工作，那你要注意最后一种文件，不要使用 Babel 编译你的代码。

### Bracket Highlighter

-   这个插件不仅提供高亮括号功能

### Can I Use

-   如果您想检查浏览器是否支持你包括在你的代码中的 CSS 和 HTML 元素，那么这是你需要的插件。所有您需要做的就是选择有疑问的元素，插件将为你做其余的事情。

### Console Warp

-   这个插件帮助您轻松地创建（注释、删除、显示所有）日志语句（控制台、日志、打印等）

### ChineseLocalizations

-   一种让 sublime 汉化的插件

### CSS3

-   CSS 3 的支持

### CSScomb

-   CssComb 是为 CSS 属性进行排序和格式化插件（需安装 Node.js 使用）

### DocBlockr

-   注释插件，生成幽美的注释。标准的注释，包括函数名、参数、返回值等，并以多行显示，省去手动编写。
-   自定义配置

```json
{
    "jsdocs_extra_tags": ["@Author TaiMie", "@DateTime {{datetime}}", "@version  1.0"]
}
```

### Emmet

-   一种快速编写 html/css 的方法

### ESLint-Formatter

<!-- https://www.zhoulujun.cn/html/tools/grunt/2016_0519_7832.html -->

### FileDiffs

-   文件对比工具

### FileIcons

-   文件图标

### GitGutter

-   指示代码中插入、修改、删除的地方

### html-css-js prettify

-   格式化压缩代码

### HTML5

### JavaScript Completions

-   js 最基本的 api 快查片段

### JsPrettier

-   JS 代码格式化插件
    ['配置文档'](https://prettier.io/docs/en/options.html)
    ['参考文档'](https://realroyhsu.github.io/2018/09/02/Sublime3%20React%E3%80%81JSX%20%E4%BB%A3%E7%A0%81%E7%BE%8E%E5%8C%96--[Prettier]/)

```json
{
    "e4x": false,
    "format_on_save": true,
    "auto_format_on_save": true,
    "auto_format_on_save_excludes": ["*/node_modules/*"],
    "custom_file_extensions": ["js", "jsx", "less", "css", "json"],
    "prettier_options": {
        "bracketSpacing": false,
        "arrowParens": "avoid",
        "semicolons": true,
        "semi": true,
        "singleQuote": true,
        "tabs": true,
        "requirePragma": false,
        "proseWrap": "preserve",
        "printWidth": 120,
        "tabWidth": 4,
        "tabs": true,
        "parser": "babylon",
        "trailingComma": "none",
        "jsxBracketSameLine": false
    }
}
```

### JSX

### LESS

-   LESS 高亮插件

### LiveStyle

-   LiveStyle 是 Chrome 中提高开发效率的一款 CSS 编辑器插件。利用 LiveStyle 和 Sublime Text3 编辑器结合可实现可视化开发，一次配置，简单易用！，并且最近支持 less,scss 你本地 css 文件可以和浏览器的 css 文件映射，同步到本地，但是必须在 chrome 上运行，chrome 必须安装相应的插件

### Terminal

-   在编辑的文件目录打开 cmd：ctrl+shift+t

```json
{
    "keys": ["ctrl+shift+t"],
    "command": "open_terminal_project_folder",
    "args": {
        "parameters": ["-T", "Working in directory %CWD%"]
    }
}
```

### WakeTime

-   统计编程的插件时间

```javascritpt
{
    "api_key": "***********"
}
```

### React ES6 snippets

-   同 sublime-react 一样，作为 react 语法提示，但是 sublime-react-es6 支持 es6 语法。
