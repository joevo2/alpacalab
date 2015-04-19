module.exports = function(app) {
	app.get('/', function (req, res) {
		res.render('index',{title:"Alpaca Lab"});
	});

	app.get('/pusheen', function (req, res) {
		res.render('pusheen',{title:"Pusheen :3"});
	})

	app.get('/login', function (req, res) {
		res.render('login',{title:"Login"});
	})

	app.get('/admin', function (req, res) {
		res.render('admin',{title:"Admin Panel"});
	})
}