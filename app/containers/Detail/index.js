import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Comment from "./subpage/Comment";
import Info from "./subpage/Info";

//通过路由渲染的组件都会在this.props上增加很多属性 history,match,location....
export default class Detail extends Component{
    render(){
        return (
            <div>
	            {/*头部*/}
	            <HeaderComponent title="商户详情" history={this.props.history}/>
	            
	            {/*商户信息*/}
	            <Info id={this.props.match.params.id}/>
	            
	            {/*购买和收藏*/}
	            
	            {/*评论*/}
	            <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}