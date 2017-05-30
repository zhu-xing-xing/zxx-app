import React, {Component} from 'react';

import {getList} from '../../../fetch/home';
import ListComponent from "../../../components/ListComponent/index";
import './index.less';

export default class List extends Component {
	constructor() {
		super();
		this.state = {
			hasMore: true,
			data: []
		}
	}
	
	render() {
		return (
			<div className="list">
				<h3>附近美食</h3>
				{/*将数据传递给ListComponent组件,让其显示*/}
				{this.state.data.length ?
					<ListComponent data={this.state.data}/>
					:
					<div>正在加载</div>
				}
			</div>
		)
	}
	
	componentDidMount() {
		this.processData(getList(this.props.cityName, 0));//通过fetch/home/index.js中的getList,获取列表数据
	}
	
	//处理成功后的逻辑
	processData(result) {  //result(是promise对象,才可以用.then方法)=获取到的列表数据 result是一个对象
		//先把promise对象,转化为json对象 ,再解构赋值获得hasMore, data
		result.then(res => res.json()).then(({hasMore, data}) => {
			this.setState({
				hasMore,
				data
			})
		})
	}
	
}