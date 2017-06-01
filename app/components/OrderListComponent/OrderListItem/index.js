import React,{Component} from 'react';
import './index.less';

export default class OrderListItem extends Component{
    render(){
    	let {id,img,title,commentState,count,price} = this.props.data;
        return (
            <div className="order-list-item">
	            <img src={img} alt=""/>
	            <div className="list-content">
		            <h4>商户:{title}</h4>
		            <span>数量:{count}</span>
		            <span>价格:{price}</span>
	            </div>
	            <div className="order-button">
		            <button >评价</button>
	            </div>
            </div>
        )
    }
}