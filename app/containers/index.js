import React, {Component} from 'react';
import RouterMap from '../routes/index'

export default class App extends Component {
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
		this.setState({
			done: true
		})
	}
}