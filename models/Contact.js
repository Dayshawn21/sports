const mongoose = require('mongoose');

const ResidenceSchema = mongoose.Schema({
	user        : {
		type : mongoose.Schema.Types.ObjectId,
		ref  : 'users'
	},

	title       : {
		type     : String,
		required : true
	},
	price       : {
		type     : String,
		required : true
	},
	bedrooms    : {
		type     : String,
		required : true
	},
	bathrooms   : {
		type     : String,
		required : true
	},
	sqft        : {
		type     : String,
		required : true
	},

	location    : {
		type     : String,
		required : true
	},
	type        : {
		type     : String,
		required : true
	},
	description : {
		type     : String,
		required : true
	},

	date        : {
		type    : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('residence', ResidenceSchema);
