var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js');
var jwt = require('./services/jwt.js')
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


app.post('/register', function(req, res){
	// console.log(req.body);
	var user = req.body;
	var newUser = new User.model({
		email: user.email,
		password: user.password
	});
    
    var payload = {
        issure: req.hostname,
        subject: user._id
    }
    
    var token = jwt.encode(payload, "mesecretkey");

	newUser.save(function(err){
//         toJSON function is used to hide password in User.js
		res.status(200).send({
            user: newUser.toJSON(), 
            token: token
        });
	})
})

mongoose.connect('mongodb://localhost/psjwt');

//Testing jwt with test data
//console.log(jwt.encode('hi', 'mysecret'));


// Express app listening
var server = app.listen(3000, function(){
	console.log('api listening on ', server.address().port);
});