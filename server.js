var http = require("http")

var serv = http.createServer(function(req, res){
	
	//var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  //var language = req.headers["accept-language"].split(',')[0];
  //var software = req.headers["user-agent"].split(') ')[0].split(' (')[1]
  
	var info = {
		"ip-address" : req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress.split(',')[0] || req.socket.remoteAddress.split(',')[0] || req.connection.socket.remoteAddress.split(',')[0],
		"language" : req.headers["accept-language"].split(',')[0],
		"software" : req.headers["user-agent"].split(') ')[0].split(' (')[1]
	}
		res.end(JSON.stringify(info))
  
	//var neg = new nego(req)
	/*
	network.get_gateway_ip(function(err, ip){
		if (err) console.log(err)
		info["ip-address"] = JSON.stringify(ip).replace(/\"/g,"")
		info["language"] = JSON.stringify(neg.language()).replace(/\"/g,"")
		info["software"] = os.type() + " " + os.release()
		res.end(JSON.stringify(info))
	})
  */
})

serv.listen(process.env.PORT || 8080)
/*
*/
