import React, {Component} from 'react';
import './index.less';

export default class LoginComponent extends Component {
	constructor() {
		super();
		this.state = {
			val: ''
		}
	}
	
	render() {
		return (
			<div className="login-component">
				{/*获取输入框的值 ref 非受控 ;
				 受控onchange+state   事件源*/}
				<input type="text" value={this.state.val}
				       onChange={this.changeValue.bind(this)}
				       placeholder="请输入用户名"
				/>
				<button className="back" onClick={this.login.bind(this)}>登录</button>
			</div>
		)
	}
	
	changeValue(e) {
		this.setState({
			val: e.target.value
		});
	}
	
	login() {
		this.props.login(this.state.val);//调用登录方法
	}
	
}