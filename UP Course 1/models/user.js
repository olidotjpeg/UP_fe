var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var UserSchema	= new Schema({
	name: String,
	body: String,
});

module.exports = mongoose.model('User', UserSchema);
