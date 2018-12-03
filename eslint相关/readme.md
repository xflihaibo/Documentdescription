## eslint

## eslit react 应用安装

```code
yarn add babel-eslint eslint-loader eslint eslint-plugin-react
```

### webpack

```code
  {
    test: /\.jsx?$/,
    loaders: ['babel-loader', 'eslint-loader'],
    include: [path.resolve('./src'), path.resolve('./node_modules/build-dev-server-client')]
 },
```
