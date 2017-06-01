import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import SearchInput from "../SearchInput/index";

//主页头部组件
export default class HomeHeader extends Component {
	render() {
		return (
			<div className="home-header back">
				
				<Link to="/city">
					<div className="city">
						{this.props.cityName}
						<i className="iconfont icon-xiangxia2"></i>
					</div>
				</Link>
				
				<div className="search">
					<i className="iconfont icon-sousuo-xianxing"></i>
					{/*此搜索框需要接受一个函数,当回车时,调用传递的参数,将值传递出来*/}
					<SearchInput value="" fn={this.toSearch.bind(this)}/>
				</div>
				
				
				<div className="profile">
					<Link to="/login">
						<i className="iconfont icon-yonghufill"></i>
					</Link>
				</div>
			
			</div>
		
		)
	}
	
	toSearch(value){
		//history默认不存在,需要通过父级传递
		this.props.history.push('/search/all/'+value);
	}
}