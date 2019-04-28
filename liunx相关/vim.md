# VIM

### 常用命令

```shell
w/W //正向移动到下一个单词开头
b/B  //反向移动
e/E // 正向移动到下一个单词词尾
ge  //反向

## 跳转
ctrl - f/F  //下一页
ctrl - b/B  //上一页
ctrl - d/u  // 向下/向上翻半页
gg  //跳转到文件首行
number gg/G  //跳转到指定的行
G               //跳转到文件最后一行

## 缩进
》/ :>   //右缩进
m,n> / :m>(n-m+1)    //n-m 行缩进

## 删除复制 粘贴
d =delete =cut  //剪切
y =yank = copy  //类似复制
p/P =put = paste //粘贴到光标后/光标前
u =undo 撤销之前操作
ctrl-r =redo 重做/恢复之前的操作
yw 复制但前光标单词
y2w 复制正向两个单词
yy 复制当前光标之前

## 删除
x/X 删除光标下/前当个字符
dw 删除一个单词
d{hjkl} 删除到上下左右一个操作前的字符
ds=D 删除光标到行尾的字符
d^  删除光标到行首的字符

## 组合删除
dd 删除当前行
{n} dd 向下删除n行
5dw 删除正向单词5个
3w 正向移动单词三次
D3w 正向删除3w 动作
2d3w    正向删除3w 动作两次

## 插入
shift+i/A 插入模式并移动到行首/尾
a/i 光标后/前插入
[n]O/o 行前/后插入n 次
[n]+i 插入模式重复n次

##转换
～ 单个字符大小写转换
g ~ w 单词大小写转换
gU/uw 单词转换大/小写

## 查找
F/f{char}  //反向/正向查找单个字符
t{char} 查找字符前一个字符
dt{char}/df{space} 删除光标到查找字符间的字符
/{char} 命令行查找

## 替换
s/going/rolling/g 当前行所有的going 替换成 rolling
%s/going/roling/g 匹配所有范围
shift+r/R 替换模式
r。单个字符替换
cw  修改单个单词
c$ /C 修改光标之后的字符
```
