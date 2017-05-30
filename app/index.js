import React from 'react';
import {render} from 'react-dom';
import './assets/index.less';

//App负责选择哪一个页面
import App from './containers/index';

render(<App/>,document.getElementById('root'));