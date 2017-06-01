import React,{Component} from 'react';
import './index.less'

export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
	            <span className="iconfont icon-yonghufill">:{this.props.userInfo.username}</span>
	            <span className="iconfont icon-yonghufill">{this.props.userInfo.cityName}</span>
            </div>
        )
    }
    
    //检查是否登录,如果没登陆过,不能进来,会直接去登录页面
	
}
