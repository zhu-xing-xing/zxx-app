import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";

import {connect} from 'react-redux';

class Home extends Component{
    render(){
        return (
            <div>
	            <HomeHeader cityName={this.props.userInfo.cityName}/>
	            <Slider />
	            <Ad/>
            </div>
        )
    }
}

//取出redux中的城市,传递给HomeHeader组件
export default connect (
	state=>{
		return {
			userInfo:state.userInfo   //取出redux state中的userInfo的数值,赋予给变量userInfo
		}
	}
	
)(Home);
