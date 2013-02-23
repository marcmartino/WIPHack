

/*var exampleSocket = 
	new WebSocket("ws://127.0.0.1/websock.php");

exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};

exampleSocket.onmessage = function (event) {
  console.log(event.data);
  exampleSocket.send("message received");
};

function decodeMessage(msg) {
	var decodedJson = JSON.decode(msg)
	
}*/
/*var wipScript = (function () {
	var _this,
		sock = new WebSocket("ws://127.0.0.1/websock.php"),
		decodeMessage = function (event) {
		  var msg = JSON.parse(event.data),
		  	time = new Date(msg.date),
		  	timeStr = time.toLocaleTimeString();
		  
		  _this.messageActions[event.type](msg, timeStr);
		};
	return {
		sockOnOpen: function (event) {
		  sock.send(
		  	"Here's some text that the server is urgently awaiting!");
		},
		sockOnMessage: function (event) {
		  console.log(event.data);
		  decodeMessage(event);
		  sock.send("message received");
		},
		start: function () {
			_this = this;
			sock.onopen = _this.sockOnOpen;
			sock.onmessage = _this.sockOnMessage;
		},
		messageActions: {
			new: function (data, timeStr) {

			},
			update: function (data, timeStr) {

			},
			delete: function (data, timeStr) {

			}
		}
	};
}());*/

