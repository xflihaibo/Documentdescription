# CSS

#### box-sizing:border-box

##### 纵向 margin 重叠

这里提到 margin，就不得不提一下 margin 的这一特性——纵向重叠。如<p>的纵向 margin 是 16px，那么两个<p>之间纵向的距离是多少？—— 按常理来说应该是 16 + 16 = 32px，但是答案仍然是 16px。因为纵向的 margin 是会重叠的，如果两者不一样大的话，大的会把小的“吃掉”。
