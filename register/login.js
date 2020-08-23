var fs = require("fs");

exports.checkLogIn = function(obj)
{
	console.log(credentials);
	for (var i = 0; i < credentials.length; i++)
	{
		if (obj.uname == credentials[i][USER] && obj.pword == credentials[i][PASS])
		{
			console.log("worked");
			obj.first = credentials[i][FIRST];
			obj.last = credentials[i][LAST];
			return obj;
		}
		else
		{
			if (i == credentials.length - 1)
				return null
		}
	}
}

exports.register = function(obj)
{
	if (require("./login").checkLogIn(obj) == null)
	{
		var registerInfo = obj.uname + ":" + obj.pword + ":" + obj.first + ":" + obj.last + ";";
		fs.appendFileSync("input.html", registerInfo);
		return null;
	}
	else
	{
		return null;
	}
}

exports.getCredentials = function()
{
	fs.readFile("input.html", function (err, data2)
	{
		if (err)
		{
			console.log(err);
			esponse.writeHead(404, {"Content-Type": "text/html"});
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
			return credentials;
		}
	});
}