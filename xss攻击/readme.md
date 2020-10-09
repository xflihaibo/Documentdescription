# XSS 攻击

#### web 安全

1.  xss 攻击
2.  csrf
3.  SQL 注入
4.  cookie 安全

[js-xss 过滤 ](https://jsxss.com/zh/index.html)

#### 常见的攻击

> Web 前端的黑客攻防技术是一门非常新颖且有趣的黑 客技术，主要包含 Web 前端安全的跨站脚本(XSS)、 跨站请求伪造(CSRF)、界面操作劫持、WebShell 这 几大类，涉及的知识点涵盖信任与非信任关系、Cookie 安全、Flash 安全、DOM 渲染、字符集、跨域、原生态 攻击、高级钓鱼、蠕虫思想

#### CSRF 跨站请求

##### 存在问题

> 被黑客抓包，捕获请求地址，直接修改参数。
> 加入验证码，判断 reffer。 这些参数前端都是可以穆 改的。

##### 解决方案

> 验证 Token 请求。每次动 强验证码+动态 Token 请求 态刷新。
> 强验证码+动态 Token 请求

#### 跨站脚本(XSS)

![node](img/xss.png)
payload
xsser

###### 跨站脚本(XSS)防患

![node](img/xssself.png)
: xss 攻击：http://jsxss.com/zh/index.html
