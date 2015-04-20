//Monitoring
require('newrelic');

var express =  require('express');
var compression = require('compression')
var braintree = require("braintree");
var app = express();

require('./router/main')(app);
require('./controllers/form')(app);

// compress all requests
app.use(compression());

//This is required for deployment in Heroku
app.set('port', (process.env.PORT || 3000));

//For the directory structure
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Braintree SDK
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "3m85hfdt5bgbrwqz",
  publicKey: "3m85hfdt5bgbrwqz",
  privateKey: "6jzj2kjy7qspkjr7"
});

var server = app.listen(app.get('port'), function () {
	console.log('Express is running on port 3000');
})
