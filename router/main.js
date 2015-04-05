module.exports = function(app) {
	app.get('/', function (req, res) {
		res.render('index',{title:"Alpaca Lab"});
	});

	app.get('/pusheen', function (req, res) {
		res.render('pusheen',{title:"Pusheen :3"});
	})
}