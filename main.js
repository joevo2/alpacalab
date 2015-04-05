module.exports = function(app) {
	app.get('/', function (req, res) {
		res.render('index.html');
	});

	app.get('/pusheen', function (req, res) {
		res.render('pusheen.html');
	})
}