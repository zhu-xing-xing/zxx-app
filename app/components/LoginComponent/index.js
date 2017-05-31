import React, {Component} from 'react';
export default class LoginComponent extends Component {
	constructor() {
		super();
		this.state = {
			val: ''
		}
	}
	
	render() {
		return (
			<div>
				{/*获取输入框的值 ref 非受控 ;
				 受控onchange+state   事件源*/}
				<input type="text" value={this.state.val}
				       onChange={this.changeValue.bind(this)}
				       placeholder="请输入用户名"
				/>
				<button onClick={this.login.bind(this)}>登录</button>
			</div>
		)
	}
	
	changeValue(e) {
		this.setState({
			val: e.target.value
		});
	}
	
	login() {
		alert(this.state.val);
	}
	
}