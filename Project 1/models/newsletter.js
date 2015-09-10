var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var NewsSchema	= new Schema({
	name: String,
	email: String
});

module.exports = mongoose.model('Newsletter', NewsSchema);