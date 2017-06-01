import React,{Component} from 'react';
import './index.less';

export default class ChooseCity extends Component{
    render(){
        return (
            <div className="city">
	            <h4>选择城市</h4>
	            <ul>
		            <li onClick={this.props.changeCity.bind(this,'北京')}>北京</li>
		            <li onClick={this.props.changeCity.bind(this,'上海')}>上海</li>
		            <li onClick={this.props.changeCity.bind(this,'广州')}>广州</li>
		            <li onClick={this.props.changeCity.bind(this,'杭州')}>杭州</li>
		            <li onClick={this.props.changeCity.bind(this,'河南')}>河南</li>
		            <li onClick={this.props.changeCity.bind(this,'黑龙江')}>黑龙江</li>
	            </ul>
            </div>
        )
    }
}