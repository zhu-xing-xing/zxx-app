let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');  //广告的接口
app.get('/api/ad',(req,res)=>{
	res.send(ad);
});

//fetch(url,{
//  Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
//    console.log(data);
// })


//添加了一个接口
let list = require('./home/list');
//获取列表 需要传递城市,页码(必须有,但是可以任意)
app.get('/api/list/:city/:page',(req,res)=>{
	console.log(req.params.city);
	console.log(req.params.page);
	
	res.send(list);
});

//商户详情
let info = require('./detail/info');
//通过id获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
	console.log(req.params.id);
	res.send(info);
});

//评价列表 id 页码page
let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
	console.log(req.params.id);
	console.log(req.params.page);
	res.send(comment);
});

