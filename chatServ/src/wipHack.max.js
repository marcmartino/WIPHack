var socket = io.connect("ws://localhost:8080");
socket.on("news",
	function(e){
		console.log(e),
		socket.emit("my other event",{my:"data"})
	});