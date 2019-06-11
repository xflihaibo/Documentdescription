## Git 命令行

```bash
git push -u https://gitee.com/silenceLi/test.git master -f

强制push 一般会丢失远程代码
$ git status  查看状态
    Untracked  未被追踪
    Modified  修改未提交
git push origin master 提交本地代码
git push origin --delete dev 删除远程仓库分支
git pull origin master 拉取本地代码

git push origin --delete ask 删除远程分支
--allow-unrelated-histories
git remote add qhht git@https://gitee.com/silenceLi/QHHT.git 取个别名方便拉取
git remote  //查看关联的远程仓库的名称
git remote -v // 查看关联的远程仓库的详细信息
git remote remove <name> 删除远程仓库的关联
git remote set-url origin <newurl> 修改远程仓库的关联地址
git remote update origin --prune 刷新获取远程分支
ls –a 查看代码
// config
git config –list 查看信息
git config --global user.email 1056497547@qq.com
git config --global user.name "name"
git config user.name  查看自己的用户名
git config user.email  查看自己的邮箱地址
git config --global alias.a add 添加别名 git add .
git add .     暂存区
git commit -m '修改代码'  提交到代码区
git diff <file> # 比较当前文件和暂存区文件差异 git diff
git diff HEAD -- <文件> 工作区和暂存区的比较

//log
git log –oneline 查看log信息
git log -p <file> # 查看每次详细修改内容的diff
git log -p -2 # 查看最近两次详细修改内容的diff
git log --pretty=oneline 查看log信息列表
git log -p --online 行内变化
git log --name-only 查看变化的文件
git log --name-status 查看文件变化
git blame style.less  查看文件的每行的变化信息
git log --pretty=oneline  显示所有提交记录，每条记录只显示一行
git whatchanged style.less  显示某个文件的每个版本提交信息：提交日期，提交人员，版本号，提交备注（没有修改细节）
git commit --amend 修改上次提交描述 本次提交并存到上次
git reset --hard fdce8d 回到指定版本
git reset HEAD a.txt 撤销暂存文件
git reset HEAD 取消本次修改在暂存区
git reflog 查看提交历史log
git commit –amend 覆盖上次提交的版本信息
按 shift+Z+Z保存编辑并退出

//stash
git stash 放到暂存区
git stash list
git stash apply 恢复暂存
git stash apply stash{0} 回复第一个
git stash pop 恢复并且删除暂存区
git stash drop stash{0} 删除暂存区

//branch
git branch  查看本地分支
git branch -a  查看本地 远程分支 remotes开头的代表是远程分支
git branch -r 查看远程分支
git branch dev 创建dev分支
git branch -d dev  删除分支
git branch -D test 删除没有合并的分支
git branch –m dev fix  修改分支名称
git branch --merged 查看已经合并的分支
git branch --no-merged 查看已经合并的分支
//checkout
git checkout --   取消本次修改在工作区内
git checkout dev 切换分支dev
git checkout -b dev 创建并切换分支dev
git checkout a.tex. 恢复上次版本
git checkout -b  D_1.3.0  origin/D_1.3.0 拉取远程分支到本地 <本地分支名称> <远程分支名称>
git checkout -b origin/ 在本地创建和远程分支对应的分支
ssh-keygen -C 'email@maik.com' 生成 密钥 注 用ssh协议生成

git rebase master (test 分支 向后移)
git merge test 合并分支
git reset --hard 【merge前的版本号】
git revert -m merge前的版本号  撤销合并当前merge
git remote –v 查看项目
git remote add home git@github.com:Silence520/homework02.git  添加项目别名
$ ssh-keygen -t rsa -C 'xxx@qq.com' 配置密钥对 公钥在git上配置
```
