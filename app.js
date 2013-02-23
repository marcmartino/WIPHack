var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.on('message', function (msg) {
  	io.emit("message", "poop");

  	console.log("yay i got a message!");
  	console.log("it reads: " + msg);
  });
  socket.on('disconnect', function () { });
});