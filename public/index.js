var socket=io.connect("http://localhost:3000");

var msg = document.getElementById('msg');
var handle = document.getElementById('handle');
var btn = document.getElementById('btn');
var lines = document.querySelector('.msgLines');
var info = document.getElementById('info');
addEventListener('keypress',function(e){
  if (e.keyCode === 13 && msg.value.length!=0 && handle.value.length!=0) 
  {
    socket.emit('message', { msg: msg.value, handle: handle.value });
    msg.value ='';
  }
});

btn.addEventListener('click',function(){
    socket.emit('message', { msg: msg.value, handle: handle.value });
    msg.value ='';
});
socket.on('message' , function(data){
  var prevdata = lines.innerHTML;
	lines.innerHTML = prevdata+"<div class='msgLines'>"+data.handle+" : "+data.msg+"</div>";
  document.querySelector('.msgLines').style.backgroundColor="rgb(232, 237, 156)";
  document.querySelector('.msgLines').style.border = "rgba(255, 141, 0, 0.82)";
});