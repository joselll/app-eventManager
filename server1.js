var express=require('express');
var app=express();

var path = require('path');
app.use(express.static(__dirname+'/public'));


app.get('/',function(request,response){
	response.sendFile(path.join(__dirname+'/index.html'))
})
app.get('/login',function(request,response){
	response.sendFile(path.join(__dirname+'/login.html'))
})

app.get('/user',function(request,response){
response.send({username:'joselo',password:'joselo123'});
})

app.listen(9090,function(){

console.log('servidor corriendo en el puerto 9090')
});