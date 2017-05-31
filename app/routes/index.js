import React,{Component} from 'react';
//路由的两种类型  HashRouter(一般开发用)   BrowserRouter
//起别名router 每一条是route
import {
	HashRouter as Router,  //提供一个路由容器
	Route,//单条路由
	Switch  //路由只匹配一次
} from 'react-router-dom';

import Home from '../containers/Home';
import Detail from '../containers/Detail';

export default class RouterMap extends Component{
    render(){
        return (
            <div>
	            <Router>
		            <Switch>
			            {/*exact 只有路由为/的时候才匹配路由,以/开头不会匹配*/}
			            <Route exact path="/" component={Home}/>
			            <Route path="/detail/:id" component={Detail}/>
		            </Switch>
	            </Router>
            </div>
        )
    }
}