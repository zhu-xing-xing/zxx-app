import React from 'react';
import {render} from 'react-dom';
import './assets/index.less';

//App负责选择哪一个页面
import App from './containers/index';
import {Provider} from 'react-redux';
import {configureStore} from './store';

let store = configureStore();//5.生成store  可以在这里传入初始状态,但是一般不传

render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.getElementById('root')
);