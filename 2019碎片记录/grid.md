# grid

1.  place-content :是新出的属于 justfify-content 和 aling-content 的缩写
2.  “fr”单位允许您将轨道大小设置为网格容器自由空间的一部分

当为 grid 布局后; clear 、float、vertical-align 、column 无效样式

### css 属性

#### Grid Container 的全部属性

display
grid-template-columns 列布局
grid-template-rows 行布局
grid-template-areas 指定的网格区域的名称来定义网格模板
grid-template
grid-column-gap 列间隙 1 个值
grid-row-gap 行间隙 1 个值
grid-gap 间隙
justify-items 行轴对齐网格内的内容（start | end | center | stretch）
align-items 列轴对齐（start | end | center | stretch）
justify-content（align-content） 网格的总大小可能小于其网格容器的大小
start - 网格与网格容器的左边对齐
end - 网格与网格容器的右边对齐
center - 网格与网格容器的中间对齐
stretch - 调整 g rid item 的大小，让宽度填充整个网格容器
space-around - 在 grid item 之间设置均等宽度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半
space-between - 在 grid item 之间设置均等宽度空白间隙，其外边缘无间隙
space-evenly - 在每个 grid item 之间设置均等宽度的空白间隙，包括外边缘

grid-auto-columns
grid-auto-rows
grid-auto-flow
grid

#### Grid Items 的全部属性

grid-column-start 列开始
grid-column-end 列结束
grid-row-start 行开始
grid-row-end 行结束
grid-column
grid-row
grid-area
justify-self 行轴对齐 方式
align-self 列轴对齐方式
