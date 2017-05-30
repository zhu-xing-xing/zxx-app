//这里是合并所有reducer 导出去 让store使用
//4.最终会传进createstore app/index.js
import {combineReducers} from 'redux';

import {userInfo} from './userInfo'

export default combineReducers({
	userInfo
});