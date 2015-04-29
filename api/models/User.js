var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Create User Schema
var UserSchema = new mongoose.Schema({
	email: String,
	password: String
})

// Create user model
exports.model = mongoose.model('User', UserSchema);

UserSchema.pre('save', function(next){
	var user = this;
	// Check if password has been modified, if not, we dont need to hash it
	if(!user.isModified('password')) return next();
	
	bcrypt.genSalt(10, function(err, salt){
		if(err) return next(err);

		bcrypt.hash(user.password, salt, null, function(err, hash){
			if(err) return next(err);

			user.password = hash;
			next();
		})
	})
})