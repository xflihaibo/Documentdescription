# 配置 ssh 登陆

### 生成密钥对

-   语法： ssh-keygen –t rsa –C ‘name’ -f 'xx_key’
-   参数：
    -   -t 选择加密算法 rsa
    -   -C 名字
    -   -f 生成密钥名字

```shell
ssh-keygen –t rsa –C test@email.com’ -f 'test_key’
ssh-keygen –t rsa –C test@email.com’  //不写默认public
```

配置公钥

```shell
ssh-keygen -t rsa -C 'xxx@qq.com'

touch ~/.ssh/config
```

### 配置数据 config

```shell
#github
Host github.com     //网址
HostName github.com   //网址
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github   //密钥地址
User zJiaJun //用户名

#taimei
Host 192.168.1.249
HostName 192.168.1.249
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_taimei
User jiajun.zhu
```

## 测试密钥

```shell
ssh  -T  git@github.com. 测试

ssh  -T  git@github.com.
ssh -Tv git@192.168.1.249  debue测试

git@gitee.com:silenceLi/Document.git
```

```bush
ssh-keygen -t rsa -C '1056497547@qq.com' -f 'mayun_key'

#gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/ mayun_key
User silenceLi

ssh-keygen -t rsa -C 'haibo.li@mobilemd.cn' -f 'taimei_key'

#Teimei
Host gitlab.taimei.com
HostName gitlab.taimei.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/taimei_key
User haibo.li

http://gitlab.taimei.com
```

git 其他

发布后分支锁死
多版本并存
