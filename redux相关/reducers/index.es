//用来执行根据指定 action 来更新 state 的逻辑 store.dispatch(action) 触发
import {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED} from '../constants/ActionTypes.es';

// 定义初始化状态，初始化状态是常量
// 初始状态是红灯
const initState = {
  color:'red',
  isLoading:false // 持续时间20ms
}

// 定义灯转换的reducer函数
function light(state=initState,action){
  switch(action.type){
    case CHANGE_GREEN:
      return {
        color:'green',
        isLoading:false
      }

    case CHANGE_YELLOW:
      return {
        color:'yellow',
        isLoading:action.isLoading,
        text:action.text
      }

    case CHANGE_RED:
      return Object.assign({},initState);

    default:
      return state
  }
}
const rootReducer = Redux.combineReducers({
  light
})

export default rootReducer;
