var express = require("express");
var app = express();
var socket = require("socket.io");
app.use(express.static("public"));
var Port = 8080||process.env.port;
var server = app.listen(Port,()=>{
	console.log("app is using port " , Port); 
});
var io=socket(server);
io.on("connection",function(socket){
	console.log("client connected");
	socket.on("message",function(data){
		io.sockets.emit("message",data);
	});
    socket.on('start', function(data){
        socket.broadcast.emit('start', data);
    });
    socket.on('stop', function() {
        socket.broadcast.emit('stop');
    });
})