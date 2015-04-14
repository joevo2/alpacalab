module.exports = function(app) {
	var bodyParser = require('body-parser')
	
	// create application/x-www-form-urlencoded parser
	var urlencodedParser = bodyParser.urlencoded({ extended: false });

	//Post request
	app.post('/pusheen', urlencodedParser, function (req, res) {
		console.log('Email: ' + req.body.email);
	});
}