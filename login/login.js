var fs = require("fs");

exports.checkLogIn = function(obj)
{
	for (var i = 0; i < credentials.length; i++)
	{
		if (obj.uname == credentials[i][USER] && obj.pword == credentials[i][PASS])
		{
			obj.first = credentials[i][FIRST];
			obj.last = credentials[i][LAST];
			return obj;
		}
		else
		{
			if (i == credentials.length - 1)
				return null;
		}
	}
}

exports.register = function(obj)
{
	if (require("./login").checkLogIn(obj) == null)
	{
		var register = obj.uname + ":" + obj.pword + ":" + obj.first + ":" + obj.last + ";";
		fs.appendFileSync("input.html", register);
		return obj;
	}
	else
		return "unameTaken";

}