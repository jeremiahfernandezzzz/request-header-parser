var http = require("http")
var nego = require("negotiator")
var network = require("network")
var os = require("os")

var serv = http.createServer(function(req, res){
	neg = new nego(req)
	
	var info = {
		"ip-address" : "",
		"language" : "",
		"software" : ""
	}
	
	network.get_public_ip(function(err, ip){
		if (err) console.log(err)
		info["ip-address"] = JSON.stringify(ip).replace(/\"/g,"")
		info["language"] = JSON.stringify(neg.language()).replace(/\"/g,"")
		info["software"] = os.type() + " " + os.release()
		res.end(JSON.stringify(info))
	})

	
})

serv.listen(process.env.PORT || 3000)
/*
*/
