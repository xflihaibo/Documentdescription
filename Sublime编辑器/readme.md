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

## 插件

### All Autocomplete

### AutoFileName

### Autoprefixer

### Babel

### Code Runner

### CSS3

### CSScomb

### DocBlockr

```json
{
    "jsdocs_extra_tags": ["@Author TaiMie", "@DateTime {{datetime}}", "@version  1.0"]
}
```

### Emmet

### ESLint-Formatter

<!-- https://www.zhoulujun.cn/html/tools/grunt/2016_0519_7832.html -->

### FileIcons

### HTML5

### JavaScript Completions

### JsPrettier

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

### Terminal

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

```javascritpt
{
    "api_key": "***********"
}
```
