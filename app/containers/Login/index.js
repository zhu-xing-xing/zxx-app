import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";

import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';//拿到所有actionCreater的对象
import {bindActionCreators} from 'redux';

import LoginComponent from "../../components/LoginComponent/index";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			login: false  //默认没有登录,写一个方法校验是否登陆,默认不显示登录组件
		}
	}
	
	render() {
		return (
			<div>
				<HeaderComponent title="登录" history={this.props.history}/>
				{/*如果登录过显示登陆组件,如果不显示直接跳转用户页面*/}
				{this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
			</div>
		)
	}
	
	//需要写一个方法,这个方法是登录的,将用户名存入到redux中
	login(username){
		let info = this.props.userInfo;
		info.username = username;
		this.props.userActions.update(info); //更新redux中的状态
		
		//如果是从购买进入的,需要跳回购买页
		if(this.props.match.params.route){  //routes里面设置的  如果指定调回某个页面,就跳
			this.props.history.push(this.props.match.params.route);
		}
		this.props.history.push('/user'); //登陆成功,如果没有指定跳回某个页面,就去用户页面
	}
	
	componentDidMount(){
		this.checkLogin(); //检查是否登录
	}
	
	checkLogin(){  //检查是否登录,在redux中state.userInfo 是否有username属性,如果有,就是登录过
		if(this.props.userInfo.username){
			this.props.history.push('/user');
		}
		this.setState({
			login:true //显示登录组件
		});
		
	}
	
}

export default connect(
	state=>{
		return {userInfo:state.userInfo}
	},
	dispatch=>{
		return {userActions:bindActionCreators(Actions,dispatch)}
	}
)(Login);