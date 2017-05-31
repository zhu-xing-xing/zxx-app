import React,{Component} from 'react';

import './index.less';

export default class HeaderComponent extends Component{
	
    render(){
        return (
            <div className="back header-component">
	            <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
	            <span>
		            {this.props.title}
	            </span>
            </div>
        )
    }
    
    back(){
    	if(this.props.back){
		    this.props.history.push('/'); //手动跳转到想要返回的页面
	    }else{
		    this.props.history.go(-1); //返回上一个页面
	    }
    }
}