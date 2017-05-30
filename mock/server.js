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