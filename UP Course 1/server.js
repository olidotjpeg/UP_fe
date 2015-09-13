// Base Setup for the server
var express		= require('express');
var mongoose	= require('mongoose');
var bodyParser	= require('body-parser');
var app			= express();
var port 		= 1337;

mongoose.connect('mongodb://localhost/simple');

var User 		= require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('./app/index.html');
});

// Router setup
var router 		= express.Router();

router.use(function(res, req, next) {
	console.log('Its happening!')
	next();
})

router.route('/user')
	.post(function(req,res) {
		var user = new User()
		user.name = req.body.name;
		user.body = req.body.body;
		user.img  = req.body.img;

		user.save(function(err) {
			if(err)
				res.send(err)

			res.json({ message: 'User created!' });
		});
	})
	.get(function(req, res) {
		User.find(function(err, users) {
			if(err)
				res.send(err);

			res.json(users);
		});
	});

// Test route
router.get('/', function(req, res) {
	res.json({ message: 'Get out of here!'});
});


app.use('/api', router);


// Start the server
app.listen(port);
console.log('We are up and running!');
