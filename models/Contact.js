const mongoose = require('mongoose');

const ResidenceSchema = mongoose.Schema({
	user        : {
		type : mongoose.Schema.Types.ObjectId,
		ref  : 'users'
	},

	title       : {
		type     : String,
		required : true,

		trim     : true
	},
	price       : {
		type     : String,
		required : true,
		trim     : true
	},
	bedrooms    : {
		type     : String,
		required : true,
		trim     : true
	},
	bathrooms   : {
		type     : String,
		required : true
	},
	sqft        : {
		type     : String,
		required : true,
		trim     : true
	},

	location    : {
		type     : String,
		required : true,
		trim     : true
	},
	type        : {
		type     : String,
		required : true,
		trim     : true
	},
	description : {
		type     : String,
		required : true,
		trim     : true
	},

	date        : {
		type    : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('residence', ResidenceSchema);
