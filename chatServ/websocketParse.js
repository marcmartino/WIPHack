exports = {
	parse: function (msg) {
	  var decoded = JSON.parse(msg);
	  return decoded;
	},
	encode: function (action, msg) {
	  return JSON.stringify(
	    {action: action, msgContents: JSON.stringify(msg)});
	}
};