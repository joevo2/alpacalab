module.exports = function(app) {
	var bodyParser = require('body-parser')
	//PG stuff
	var pg = require('pg');
	var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

	
	// create application/x-www-form-urlencoded parser
	var urlencodedParser = bodyParser.urlencoded({ extended: false });

	//Post request
	app.post('/pusheen', urlencodedParser, function (req, res) {
		console.log('Email: ' + req.body.email);

		var results = [];

	    // Grab data from http request
	    var data = {text: req.body.email, complete: false};

	    // Get a Postgres client from the connection pool
	    pg.connect(connectionString, function(err, client, done) {
	        // SQL Query > Insert Data
	        client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);
	        // SQL Query > Select Data
	        var query = client.query("SELECT * FROM items ORDER BY id ASC");
	        // Stream results back one row at a time
	        query.on('row', function(row) {
	            results.push(row);
	        });
	        // After all data is returned, close connection and return results
	        query.on('end', function() {
	            client.end();
	            return res.json(results);
	        });
	        // Handle Errors
	        if(err) {
	          console.log(err);
	        }
	    });
	});
}