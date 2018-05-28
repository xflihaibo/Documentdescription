// store 是一个单一对象：
//
// 管理应用的 state
// 通过 store.getState() 可以获取 state
// 通过 store.dispatch(action) 来触发 state 更新
// 通过 store.subscribe(listener) 来注册 state 变化监听器
// 通过 createStore(reducer, [initialState]) 创建
import rootReducer from '../reducers/index.es';
const thunkMiddleware = window.ReduxThunk.default;
export default function configureStore(initState){
  return Redux.createStore(rootReducer,initState,Redux.applyMiddleware(thunkMiddleware)); // 初始化创建
}
