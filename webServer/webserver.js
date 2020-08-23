var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var events = require("events");
UNAME = 0;
PWORD = 1;
var eventEmitter = new events.EventEmitter();


http.createServer(function(request, response)
{
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	fs.readFile(pathname.substr(1), function(err, data)
	{
		if (err)
		{
			console.log(err);
			response.writeHead(404, {"Content-Type": "text/html"});
		}
		else
		{
			response.writeHead(200, {"Content-Type": "text/html"});
			if (pathname == "/destination.html")
			{
				request.on("data", function(qstr)
				{
					nameObj = qs.parse(qstr.toString())
					fs.readFile('input.txt', function (err, data2)
					{	
						if (err)
							return console.error(err);
						var str = data2.toString();
						str = str.split(";");
						for (i = 0; i < str.length; i++)
						{
							str[i] = str[i].split(":");
						}
						
					});
					response.write("<script>data = " + JSON.stringify(nameObj) + ";</script>");
					response.write(data.toString());
					response.end();
				});
			}
			else
			{
				response.write(data.toString());
				response.end();
			}
		}
	});
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");