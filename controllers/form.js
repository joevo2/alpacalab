module.exports = function(app) {
	var bodyParser = require('body-parser')
	//PG stuff
	var pg = require('pg');
	var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pusheen';

	
	// create application/x-www-form-urlencoded parser
	var urlencodedParser = bodyParser.urlencoded({ extended: false });

	//Post request
	app.post('/pusheen', urlencodedParser, function (req, res) {
		console.log("Name: "+req.body.name);
		console.log("Email: "+req.body.email);
		console.log("phone: "+req.body.phone);
		console.log("address: "+req.body.address);
		if (req.body.name != null && req.body.email != null && req.body.phone != null && req.body.address != null) {
			// Grab data from http request
		    var data = {name: req.body.name, email: req.body.email, phone: req.body.phone, address: req.body.address, paid: false};

		    // Get a Postgres client from the connection pool
		    pg.connect(connectionString, function(err, client, done) {
		        // SQL Query > Insert Data
		        client.query("INSERT INTO orders(name, email, phone, address, paid) values($1, $2, $3, $4, $5)", [data.name, data.email, data.phone, data.address, data.paid]);
		        if (err) { console.log(err); res.send("Error " + err); }
	            return res.render('pusheen',{title:"Pusheen :3"});
		    });
		};
	});
}