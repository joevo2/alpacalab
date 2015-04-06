var express =  require('express');
var app = express();

require('./router/main')(app);

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(app.get('port'), function () {
	console.log('Express is running on port 5000');
})