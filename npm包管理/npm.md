##相关的 npm 吗包

1.  eslint，可定制的 js 代码检查，1.1 中有详细的配置步骤；
2.  stylelint，可定制的样式文件检查，支持 css、less、scss；
3.  jsonlint，json 文件语法检查，踩过坑的同学会清楚，json 文件语法错误会知道导致各种失败；
4.  markdownlint-cli，Markdown 文件最佳实践检查，个人偏好；
5.  mocha，测试用例组织，测试用例运行和结果收集的框架；
6.  chai，测试断言库，必要的时候可以结合 sinon 使用； 7.测试覆盖率收集工具 nyc，是覆盖率收集工具 istanbul 的命令行版本，istanbul 支持生成各种格式的覆盖率报告，
7.  借助 scripty 我们可以将 npm script 剥离到单独的文件中，从而把复杂性隔到单独的模块里面，让代码整体看起来更加清晰。
8.  我们使用的代码检查工具 stylelint、eslint、jsonlint 不全支持 watch 模式，这里我们需要借助 onchange 工具包来实现，onchange 可以方便的让我们在文件被修改、添加、删除时运行需要的命令。 9.前端社区里有多种结合 npm script 和 git-hooks 的方案，比如 pre-commit、husky，相比较而言 husky 更好用，它支持更多的 Git Hooks 种类，再结合 lint-staged 试用就更溜。
