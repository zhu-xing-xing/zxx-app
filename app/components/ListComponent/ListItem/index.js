import React,{Component} from 'react';
import './index.less';
//Link组件主要用来跳转路径 必须要有to属性
import {Link} from 'react-router-dom';

export default class ListItem extends Component{
    render(){
    	let {img,title,subTitle,distance,price,number,id} = this.props.data;
        return (
        	<Link to={'/detail/' + id}>
            <div className="list-item">
	            <img src={img} alt=""/>
	            <div className="list-item-content">
		            <h4>{title}</h4>
		            <p>{subTitle}</p>
		            <div>
			            <strong>￥{price}</strong>
			            <span>已售出{number}</span>
		            </div>
		            <span className="distance">{distance}</span>
	            </div>
            </div>
	        </Link>
        )
    }
}