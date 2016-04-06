var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MessageSchema = new Schema({
	email: String,
	content: String,
	created: Date
});

exports.Message = mongoose.model('Message', MessageSchema);