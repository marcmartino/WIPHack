/*var mysql = require("db-mysql");
db = new mysql.Database({
    "hostname": "localhost",
    "user": "root",
    "password": "testDBQWERTY",
    "database": "venuesDB"
}).connect(function(error) {
    if (error) {
        return console.log("CONNECTION error: " + error);
    }

	this.query()
        .select(["user","venue", "latitude", "longitude", "event ID", "post ID", "message"])
        .from("venueTable")
        .where("venue = ?", [ in_venue ])
        .execute(function(error, rows, columns){
            if (error) {
                console.log('ERROR: ' + error);
                return;
            }
            // Do something with rows & columns
        });
});
exports.new = (function(db) {
    return function(user,venue,latitude,longitude,eventid,postid,message){

    	this.query()
        .insert(
          'venueTable',
          ['user','venue','latitude','longitude','eventID','postID', 'message'],
          [user,venue,latitude,longitude,eventid,postid,message],true)
        .execute( function(error,resutl){
        	if(error){
        		console.log('ERROR: ' + error);
        		return;
        	}
        	console.log('GENERATED id: ' + result.id);
        });
      };
  }(db));
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();