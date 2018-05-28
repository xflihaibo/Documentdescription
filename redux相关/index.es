import configureStore from './store/configureStore.es';
import App from './containers/App.es';
const Provider = ReactRedux.Provider;
const store = configureStore();
// 通过 store.getState() 可以获取 state
// 通过 store.dispatch(action) 来触发 state 更新
// 通过 store.subscribe(listener) 来注册 state 变化监听器
// 通过 createStore(reducer, [initialState]) 创建
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('JS-container')
)
