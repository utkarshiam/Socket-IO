var express = require('express');
var app= express();

var http=require('http');
var server = http.createServer(app).listen(3000);

var io=require('socket.io')(server);

app.use(express.static('./public'));

io.on('connection', function(socket){
	console.log("new connection")

	socket.on('chat', function(data){
		socket.broadcast.emit('broadcast', data)
	})
})
console.log('start socket server on 3000')