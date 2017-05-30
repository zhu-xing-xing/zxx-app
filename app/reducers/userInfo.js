import * as Types from '../action-types/userInfo';

//3.创建一个reducer,它接受一个旧的state和action,返回一个新的state
let initState = {};
export function userInfo(state=initState,action){
	switch(action.type){
		//将传入的state更新成最新的状态
		case Types.UPDATE_CITY:
			return action.data;
		default:
			return state;
	}
}