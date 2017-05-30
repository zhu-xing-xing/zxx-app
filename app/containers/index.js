import React, {Component} from 'react';
import RouterMap from '../routes/index'
import {connect} from 'react-redux';

//动作映射为属性
import {bindActionCreators} from 'redux'; //绑定ActionCreator组成的对象

import * as Actions from '../actions/userInfo'; //获取所有actionCreator组成的对象

class App extends Component {
	constructor() {
		super();
		this.state = {
			done: false
		}
	}
	
	render() {
		return (
			<div>
				{/*如果当前路径为/ RouterMap就会变成Home组件 */}
				{
					this.state.done ? <RouterMap/> : <div>正在加载</div>
				}
			</div>
		)
	}
	
	componentDidMount() {
		//先去本地查找是否存储过localstorage,名字叫cityName的
		//1.第一次没有,赋予一个默认值 杭州
		//2.将当前的城市存放到redux中
		
		this.setState({
			done: true
		});
		
		console.log(this.props.userActions);
	}
}

export default connect(
	state=>{  //mapStateToProps   获取state的属性
		return {}
	},
	dispatch=>{  //mapDispatchToProps  修改
		return {
			userActions:bindActionCreators(Actions,dispatch)
		}
	}
)(App);