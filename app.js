var io = require('socket.io').listen(8080);
var mysql - require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testDBQWERTY',
  database : "venuesDB"
});

io.sockets.on('connection', function (socket) {

  socket.on('message', function (msg) {
  	//socket.emit("message", "poop");
  	var msgFromClient = parseSocketMessage(msg);
  	console.log(msgFromClient);
  	ioActions[msgFromClient.action](socket, msgFromClient);
  });
  socket.on('disconnect', function () { });
});

var parseSocketMessage = function (msg) {
	var decoded = JSON.parse(msg);
	return decoded;
}
var encodeSocketMessage = function (action, msg) {
	return JSON.stringify(
		{action: action, msgContents: JSON.stringify(msg)});
}

var sendAllMessages = function (sock) {
	var allMessages
};

function getConversation(max) {
	connection.connect();

	connection.query('SELECT * FROM `` WHERE `EventID`=1;', 
		function(err, rows, fields) {
		  if (err) throw err;

		  console.log('The solution is: ', rows[0]);
		}
	);

	connection.end();
}

var ioActions = {
	viewAll: function (socket, msg) {
		/*{
			eventID: 1
		}*/
		var fullConversation = getConversation(5);
		socket.emit(encodeSocketMessage("viewAll"),
			fullConversation);
	},
	"new": function (socket, msg) {
		/*{
			timestamp: 1231241241,
			location: {lat: 12, lang: 13},
			eventID: 1,
			msgContents: "poops"
		}*/
	},
	update: function (socket, msg) {
		/*{
			postID: 12,
			timestamp: 123123124,
			msgContents: "fawefawe"
		}*/
	},
	delete: function (socket, msg) {
		/*{
			postID: 12,
			timestamp: 123124124,
		}*/
	}
}