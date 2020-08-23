var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var login = require("./login");
var events = require("events");
var eventEmitter = new events.EventEmitter();

USER = 0;
PASS = 1;
FIRST = 2;
LAST = 3;


http.createServer(function(request, response)
{
	var pathname = url.parse(request.url).pathname.substr(1);
	console.log("Request for " + pathname + " received.");
	fs.readFile(pathname, function(err, data)
	{
		if (err)
		{
			console.log(err);
			response.writeHead(404, {"Content-Type": "text/html"});
		}
		else
		{
			response.writeHead(200, {"Content-Type": "text/html"});
			if (request.method == "POST")
			{
				fs.readFile("input.html", function (err, data2)
				{
					if (err)
					{
						console.log(err);
						response.writeHead(404, {"Content-Type": "text/html"});
					}
					else
					{
						credentials = data2.toString();
						credentials = credentials.split(";");
						console.log(credentials);
						for (var i = 0; i < credentials.length; i++)
						{
							credentials[i] = credentials[i].split(":");
						}
						console.log(credentials);
						eventEmitter.emit("checkCred");
					}
				});
				eventEmitter.on("checkCred", function()
				{
					request.on("data", function(qstr)
					{
						var qobj = qs.parse(qstr.toString());
						if (qobj.login)
						{
							var responseObj = login.checkLogIn(qobj);				
						}
						if (qobj.registration)
						{
							var responseObj = login.register(qobj);
						}
						try
						{
							if (responseObj == "unameTaken")
							{
								data = fs.readFileSync("registration.html");
							}
						}
						catch(err);
						response.write(data.toString());
						response.write("<script>data = " + JSON.stringify(responseObj) + ";</script>\n")
						response.end()
					});
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