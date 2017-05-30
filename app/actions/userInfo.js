import * as Types from '../action-types/userInfo';

// 2.actionCreator 是一个函数
export function update(data){  //update修改的动作,返回action
	return {
		type:Types.UPDATE_CITY,
		data
	}
}