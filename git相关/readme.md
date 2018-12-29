## Git 命令行

```bash
git push -u https://gitee.com/silenceLi/test.git master -f

强制push 一般会丢失远程代码
$ git status  查看状态
    Untracked  未被追踪
    Modified  修改未提交
git push https://gitee.com/silenceLi/test.git master 提交本地代码
git pull https://gitee.com/silenceLi/test.git master 拉取本地代码
--allow-unrelated-histories
git remote add qhht git@https://gitee.com/silenceLi/QHHT.git 取个别名方便拉取
git remote set-url origin <newurl>  更新远程仓库的 url
git remote  //查看关联的远程仓库的名称
git remote -v // 查看关联的远程仓库的详细信息
git remote remove <name> 删除远程仓库的关联
git remote set-url origin <newurl> 修改远程仓库的关联地址
ls –a 查看代码
git config --global user.email 1056497547@qq.com
git config --global user.name "name"
git config user.name  查看自己的用户名
git config user.email  查看自己的邮箱地址
git add .     暂存区
git commit -m '修改代码'  提交到代码区
git diff <file> # 比较当前文件和暂存区文件差异 git diff
git log -p <file> # 查看每次详细修改内容的diff
git log -p -2 # 查看最近两次详细修改内容的diff
git log --pretty=oneline 查看log信息列表
git reset --hard fdce8d 回到指定版本.
git reflog 查看提交历史log
git config –list 查看信息
git log –oneline 查看log信息
git commit –amend 覆盖上次提交的版本信息
按 shift+Z+Z保存编辑并退出
git checkout   取消本次修改在工作区内
git reset HEAD 取消本次修改在暂存区
git checkout dev 切换分支dev
git checkout -b dev 创建并切换分支dev
git branch  查看本地分支
git branch -a  查看本地 远程分支 remotes开头的代表是远程分支
git branch -r 查看远程分支
 git remote update origin --prune 刷新远程分支
git branch dev 创建dev分支
git branch -d dev  删除分支
git branch –m dev fix  修改分支名称
git remote update origin --prune 刷新获取远程分支
git checkout -b  D_1.3.0  origin/D_1.3.0 拉取远程分支到本地 <本地分支名称> <远程分支名称>
ssh-keygen -C 'email@maik.com' 生成 密钥 注 用ssh协议生成
git remote –v 查看仓库地址
git remote remove qhht 删除远程库名
git remote add qhht https://www.github.com/test.git 添加远程库名
git merge qhht 合并分支
git remote –v 查看项目
git remote add home git@github.com:Silence520/homework02.git  添加项目别名
$ ssh-keygen -t rsa -C 'xxx@qq.com' 配置密钥对 公钥在git上配置
```
