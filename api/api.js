var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Create app
var app = express();

app.use(bodyParser.json());

// Set up CORS using middleware app.use
app.use(function(req,res,next){
	// Header which enable CORS
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

// Create user model
var User = mongoose.model('User', {
	email: String,
	password: String
})

mongoose.connect('mongodb://localhost/psjwt');

app.post('/register', function(req, res){
	// console.log(req.body);
	var user = req.body;
	var newUser = new User({
		email: user.email,
		password: user.password
	});

	newUser.save(function(err){
		res.status(200).json(newUser);
	})
})

// Express app listening
var server = app.listen(3000, function(){
	console.log('api listening on ', server.address().port);
})