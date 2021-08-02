const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todo = new Schema({
	todoContent:{type:String,required:true}
}, {
	collection: 'todo'
});

var todoModel= mongoose.model('todoModel',todo);
module.exports=todoModel;
