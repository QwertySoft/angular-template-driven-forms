let express = require('express')
var bodyParser = require('body-parser');
var http = require('http');

// Main app
var app = express()

/** CORS domain protect */
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    next();
}
app.use(allowCrossDomain);

// logs every request
app.use(function(req, res, next){
	// output every request in the array
	console.log({method:req.method, url: req.url, device: req.device});

	// goes onto the next function in line
	next();
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/********************* START APP *************************************/

/** API Withdrawal Requests */
var withdrawalRequests = require('./routes/withdrawal-requests');
app.use('/api', withdrawalRequests);

/*********************************************/

// Server
var server = http.createServer(app);
server.listen(3000);

/******************************************************* */