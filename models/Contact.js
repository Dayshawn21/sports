const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	user     : {
		type : mongoose.Schema.Types.ObjectId,
		ref  : 'users'
	},

	title    : {
		type     : String,
		required : true
	},
	price    : {
		type     : String,
		required : true
	},
	rooms    : {
		type     : String,
		required : true
	},

	location : {
		type     : String,
		required : true
	},
	type     : {
		type     : String,
		required : true
	},

	date     : {
		type    : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('contact', ContactSchema);
