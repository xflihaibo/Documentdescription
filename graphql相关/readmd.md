# graphql

基本类型 ：String Int Float Boolean ID 都可以在 schema 声明
! 代表参数不能为空

```javascript
 input AccountInput { //自定义添加属性
        name:String
        sex:String
        age:Int
    }

    type Account {  //自定义查询属性
          name:String
        sex:String
        age:Int
    }

    type Mutation{. //增加 修改
        createAccout(input:AccountInput):Account
        updateAccount(id:ID! input:AccountInput):Account
    }

    type Query{ //查询
        account:[Account]
    }
```
