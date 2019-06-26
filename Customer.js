var express= require("express");
var app = express();

console.log("hello");


var CustController=function(req,res){
	
	var Customer= [
	{CustName:'Swati Kamble',AccountNo:'1234',ContactNo:"7218791408",Balance:'12000',Country:'India'},
	{CustName:'Shubham Gajbhiye',AccountNo:'0007',ContactNo:"8180820973",Balance:'50000',Country:'India'},
	{CustName:'Toshita Chake',AccountNo:'8426',ContactNo:"9730027655",Balance:'20000',Country:'India'},
	{CustName:'Aditya Gandhi',AccountNo:'2684',ContactNo:"9850941109",Balance:'15000',Country:'India'},
	{CustName:'Sanket Shah',AccountNo:'2486',ContactNo:"9795246565",Balance:'25000',Country:'India'}

	];
	
	res.send(Customer);
};

app.get('/customer',CustController);

var server=app.listen(7070,function(){
	var host=server.address().address
	var port=server.address().port
})

