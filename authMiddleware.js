const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

//This code inspects HTTP requests sent to the RESTful web service
//and implements some basic security features. This is server-side
//code that is not directly related to Angular development,
//so don't worry if its purpose isn't immediately obvious.

//Don't use the code in Listing 7-3 other than for the SportsStore
//application. It contains weak passwords that are hardwired into
//the code. This is fine for the SportsStore project because
//the emphasis is on the development client side with Angular,
//but this is not suitable for real projects.

module.exports = function (req, res, next)
{
	if(req.url == "/login" && req.method == "POST")
	{
		if(req.body != null
			&& req.body.name == USERNAME
			&& req.body.password == PASSWORD)
		{
			let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
			res.json({success : true, token: token});
		}
		else
		{
			res.json({ success: false });
		}
		res.end();
		return;
	}
	else if((req.url.startsWith("/locations")
				&& req.method != "GET")
				|| (req.url.startsWith("/transfers")
				&& req.method != "POST"))
		{
			let token = req.headers["authorization"];
			if(token != null && token.startsWith("Bearer<"))
			{
				token = token = token.substring(7, token.length - 1);
				try {
					jwt.verify(token, APP_SECRET);
					next();
					return;
				} catch (err) {}
			}
			res.statusCode = 401;
			res.end();
			return;
		}
		next();
}
