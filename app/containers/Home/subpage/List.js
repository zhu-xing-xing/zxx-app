import React, {Component} from 'react';

import {getList} from '../../../fetch/home';

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
			<div>
				List
			</div>
		)
	}
	
	componentDidMount() {
		this.processData(getList(this.props.cityName, 0));
	}
	//处理成功后的逻辑
	processData(result){
		result.then(res=>res.json()).then(data=>{
			console.log(data);
		})
	}
}