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
import Login from '../containers/Login';
import User from '../containers/User';
import City from '../containers/City';

export default class RouterMap extends Component{
    render(){
        return (
            <div>
	            <Router>
		            <Switch>
			            {/*exact 只有路由为/的时候才匹配路由,以/开头不会匹配*/}
			            <Route exact path="/" component={Home}/>
			            <Route path="/detail/:id" component={Detail}/>
			            
			            {/*点击先跳转到登录页,登录后,再回到登录之前的页面,
			            在login路径后面可能需要保存上一次的点进loginin之前的路径;
			            如果登录过,点击后会跳转到用户页面
			            */}
			            <Route path="/login/:route?" component={Login} />
			            <Route path="/user" component={User} />
			            <Route path="/city" component={City} />
		            </Switch>
	            </Router>
            </div>
        )
    }
}