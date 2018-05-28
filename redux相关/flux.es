// 通过 store.getState() 可以获取 state
// 通过 store.dispatch(action) 来触发 state 更新
// 通过 store.subscribe(listener) 来注册 state 变化监听器
// 通过 createStore(reducer, [initialState]) 创建
"use strict";
class HelloRedux extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       loading: true
     };
  }
  render() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }else{
      return(
        <h1>Hello Redux</h1>
      );
    }
  }
}
ReactDOM.render(
  <HelloRedux/>,
  document.getElementById('JS-container')
);
