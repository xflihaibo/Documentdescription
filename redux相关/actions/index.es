//Action 定义用户要触发的行为，向store传递数据信息
// Action（普通Action、异步Action）
// 普通Action，本质是JS普通对象
// 异步Action，使用了 Thunk middleware 异步 action
import * as lights from '../constants/ActionTypes.es';

export function changegreen(){
  return {type:lights.CHANGE_GREEN}
}

export function changeyellow(){
  // return {type:lights.CHANGE_YELLOW}
  return (dispatch, getState) => {
        reqwest({
          url: 'data',
          type: 'json'
         })
         .then((resp)=> {
            console.log(resp);
            dispatch({type:lights.CHANGE_YELLOW,isLoading:true,text:resp});
         })
         .fail((err)=> {
            console.log("出错"+err);
            dispatch({type:lights.CHANGE_YELLOW,isLoading:true,text:"error"});
         });
   }
}

export function changered(){
    return {type:lights.CHANGE_RED}
}
