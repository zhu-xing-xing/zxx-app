import React,{Component} from 'react';
import './index.less';
import Star from "../Star/index";

export default class InfoComponent extends Component{
    render(){
	    let {img,star,desc,title,subTitle,price} = this.props.data;
	    return (
	    	<div>
			    
			    <div>
				    <img src={img} alt=""/>
				    <div>
					    <h4>{title}</h4>
					    <div>
						    {/*Star组件要接受一个点亮的星星数*/}
						    <Star count={star}/>
						    <span>￥{price}</span>
					    </div>
					    <p>{subTitle}</p>
				    </div>
			    </div>
			    
			    {/*将内容转化为html,插入到页面中*/}
			    <div dangerouslySetInnerHTML={{__html:desc}}></div>
		    </div>
        
        )
    }
}