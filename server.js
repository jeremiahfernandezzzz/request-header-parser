var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/whoami', function(req, res) {
  
	var info = {
		"ip-address" : req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress.split(',')[0] || req.socket.remoteAddress.split(',')[0] || req.connection.socket.remoteAddress.split(',')[0],
		"language" : req.headers["accept-language"].split(',')[0],
		"software" : req.headers["user-agent"].split(') ')[0].split(' (')[1]
	}
		res.end(JSON.stringify(info));
  
});

app.get('/', function(req, res) {
  res.end("this is my 2nd fcc back end web dev basejump. go to aboard-share.glitch.me/whoami to test the app.")
})


app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
