module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    root: true,
    rules: {
        //缩进4空格
        // indent: [ 'error' , 4 ] ,
        //强制单引号 可以使用es6模板语法
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        //强制分号
        semi: ['error', 'always'],
        //防止错误for循环
        'for-direction': 'error',
        //不许更改const定义过的变量
        'no-const-assign': 'error',
        //不许重赋值class
        'no-class-assign': 'error',
        //不许写多余无用的正则 就是说 正则要的写的精确简练
        'no-invalid-regexp': 'error',
        //不准比较自身
        'no-self-compare': 'error',
        // 变量声明了 必须使用
        'no-unused-vars': ['error', {vars: 'all', args: 'after-used'}],
        //禁止对参数重新赋值
        'no-param-reassign': 'error',
        //禁止使用var
        'no-var': 'error',
        //禁用未声明的变量
        'no-undef': 'error',
        //调用super之前 不许使用this和super
        'no-this-before-super': 'error',
        //不允许重复声明变量
        'no-redeclare': 'error',
        //不许在变量声明前使用
        'no-use-before-define': 'error',
        //箭头函数前后要有空格
        'arrow-spacing': ['error', {before: true, after: true}],
        //不许对象内有重复的key
        'no-dupe-keys': 'error',
        //强制jsx为双引号
        'jsx-quotes': 'error',
        //禁止类中成员重复出现
        'no-dupe-class-members': 'error',
        //react
        //禁止render 不返回jsx
        'react/require-render-return': 'error',
        //组件必须引用react
        'react/react-in-jsx-scope': 'error',
        //使用的组件必须引入
        'react/jsx-no-undef': 'error',
        //启动react 变量使用,
        'react/jsx-uses-react': 'error',
        //启动react 组件变量使用,
        'react/jsx-uses-vars': 'error',
        //标签必须对齐 或者 平行
        'react/jsx-closing-tag-location': 'error',
        //多行闭合标签 必须新起一行
        'react/jsx-closing-bracket-location': 'error',
        //无内容必须自闭合
        'react/self-closing-comp': 'error',
        //render方法 返回多行标签时 必须使用括号包围
        'react/jsx-wrap-multilines': 'error'
    },
    settings: {
        react: {
            pragma: 'React'
        }
    },
    globals: {
        //变量名:false
    }
};
