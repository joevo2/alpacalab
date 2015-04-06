var express =  require('express');
var app = express();

require('./router/main')(app);

//This is required for deployment in Heroku
app.set('port', (process.env.PORT || 5000));

//For the directory structure
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(app.get('port'), function () {
	console.log('Express is running on port 5000');
})