const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	todoContent: String,
	isDone: Boolean
}, {
	collection: 'todo'
});

var todoModel = mongoose.model('todoModel', schema);

module.exports = todoModel;
