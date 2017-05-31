import React,{Component} from 'react';
import './index.less';

export default class LoadMore extends Component{
    render(){
        return (
            <div className="has-more">
	            {
	            	this.props.hasMore?
		            <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>
		            :
		            <div>我是有底线的</div>
	            }
            </div>
        )
    }
    componentDidMount(){  //绑定滚动事件
	    this.fn = ()=>{
	    	clearTimeout(this.timer); //清除掉之前的计时器
	    	this.timer= setTimeout(()=>{  //一滚动会产生一个计时器
			    console.log('滚动');
			    //先判断是否正在加载
			    if(this.props.isLoading){  //如果正在加载,就不要再次获取
			    	return;
			    }
			
			    //判断按钮距离屏幕顶端的高度 和 可视窗口的高度
			    let screen = window.screen.height;
			    let top = this.refs.more.getBoundingClientRect().top; //获取当前元素到屏幕四个方向的距离  原生方法
			    if(top<screen){  //如果按钮进入可视窗口,则加载更多
			    	this.props.loadMore();
			    }
		    },50);
	    };
    	window.addEventListener('scroll',this.fn);
    }
    
    componentWillUnmount(){  //移除滚动事件
	    window.removeEventListener('scroll',this.fn);
    }
    
    loadMore(){  //调用父级传递过来的loadMore函数
	    if(this.props.isLoading){
	    	return;
	    }
    	this.props.loadMore();
    }
}