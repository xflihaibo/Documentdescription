#Docz  
Docz 的特色是零配置、简单、快速，它使用 Markdown 语法的扩展 MDX (在 Markdown 里引入 React 组件并渲染出组件)来书写文档，对于熟悉 Markdown 的开发者是可以直接上手的
[官网](https://www.docz.site/)

## 优点

1.  零配置、简单易用
2.  高效，支持热重载和自动代码分割
3.  易于定制
4.  基于 MDX
5.  支持插件
6.  支持 Typescript

### 安装 Docz

```code
yarn add docz  docz-theme-default --dev 或者 npm install docz  docz-theme-default  --save-dev
```

### 创建 .mdx 文件并输入

```code
---
name: Button
---

import { Playground, PropsTable } from 'docz'
import Button from './'

# Button

<PropsTable of={Button} />

## Basic usage

<Playground>
  <Button>Click me</Button>
  <Button kind="secondary">Click me</Button>
</Playground>
```

### 运行

```code
yarn docz dev
```

##配置
零配置方便是方便，但有时想界面个性化点还是很费事的(官方提供 Themes 支持，但现仅有一套官方的默认主题)，下面分享一个通过引入本地 CSS 的方式来改变默认主题的配置。

#### 创建配置文件 doczrc.js ，增加 htmlContext 内容。

```code
export default {
  htmlContext: {
    head: {
      links: [
        { rel: 'stylesheet', href: '/base.css' }
      ]
    }
  }
}
```
