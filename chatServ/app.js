var io = require('socket.io').listen(8080);
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testDBQWERTY',
  database : "wipHack"
});
connection.connect();

//var websocketParser = require('./websocketParse');
var websocketParser = {
	parse: function (msg) {
	  var decoded = JSON.parse(msg);
	  return decoded;
	},
	encode: function (action, msg) {
	  return JSON.stringify(
	    {action: action, msgContents: JSON.stringify(msg)});
	}
};
var allSockets = {};
io.sockets.on('connection', function (socket) {
  allSockets[socket.id] = socket;

  socket.on('message', function (msg) {
	//socket.emit("message", "poop");
	var msgFromClient = websocketParser.parse(msg);
	console.log(msgFromClient);
	if (typeof ioActions[msgFromClient.action] === "function") {
	  ioActions[msgFromClient.action](socket, msgFromClient);
	}
	else {
	  console.log("routing action: " + msgFromClient.action);
	}
  });

  socket.on('disconnect', function () {
	allSockets[socket.id] = undefined;
  });

});
 



function getConversation(eventID, max, successCallback) {
  connection.query('SELECT * FROM chat_messages',
  	(function (successCallback) {
  		return function(err, rows, fields) {
		  if (err) throw err;
		  console.log(rows[0]);
		  successCallback(rows[0]);
		};
	}(successCallback))
	);
}

var ioActions = {
  viewAll: function (socket, msg) {
	/*{ eventID: 1 }*/
		getConversation(msg.eventID, 5, (function (socket) {
			return function (conversationData) {
			  //success callback
			  socket.emit("message", websocketParser.encode("viewAll",
				conversationData));
			};
		  }(socket))
		);
  },
  "new": function (socket, msg) {
	/*{
	  timestamp: 1231241241,
	  location: {lat: 12, lang: 13},
	  eventID: 1,
	  msgContents: "poops"
	}*/
	// INSERT INTO chat_messages (`Event_ID`, `User_ID`, `Message`) 
	//	VALUES ('1', '1', 'Fuck yo couch niggg');
	/*var successfullAdd = (function (msg) {
		return function () {
		  //sucess callback
		  var formattedMessage = websocketParser.encode(msg);
		  allSockets.forEach(function (key, socket) {
			if (socket) {
			  socket.emit(formattedMessage);
			}
		  });
		};
	  }(msg);
	db.addMessage(msg.eventID, msg.msgContents, msg.location, 
	  successfullAdd);*/
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