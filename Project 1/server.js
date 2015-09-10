// Base Setup for the server
var express		= require('express');
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');
var app			= express();
var port 		= 1337;

// mongoose 3.8.x
var mongoose = require('mongoose');
// mongodb-uri 0.9.x
var uriUtil = require('mongodb-uri');
 
/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
var mongodbUri = 'mongodb://stenkilde:202c5kxl@ds053972.mongolab.com:53972/alwaysfit';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
 
mongoose.connect(mongooseUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('./app/index.html');
});

var router 		= express.Router();
var Newsletter 	= require('./models/newsletter');
	
router.get('/', function(req, res) {
	res.json({ message: 'Get out of here!'});
});

router.route('/newsletter')
	.post(function(req, res) {
		var newsletter 		= new Newsletter();
		newsletter.name 	= req.body.name;
		newsletter.email 	= req.body.email;

		newsletter.save(function(err) {
			if(err)
				res.send(err)

			res.json({ message: 'Du er nu tilføjer til vores nyhedsbrev' });
		});
	});

// Start the server
app.use('/api', router);
app.listen(port);
console.log('We are up and running on the following port: ' + port);