const mongoose=require('mongoose');
//const todoModel=mongoose.model("todoModel");
let todoModel=require('./../models/todo')
module.exports={
    todogetapi:async(req,res)=>{
        //res.send('Todo retrived!')
        try{
        let result= await todoModel.find({});
        res.render('index',{alltodo:result})
        console.log('Todo retrived!'+result)
        }catch (err) {
            console.log("Not Fetched!" + err);
        }
    },

    todopostapi:(req,res)=>{
        let Model =new todoModel({
            todoContent:req.body.todo
            });
        Model.save().then(()=>console.log('Todo Inserted!'))
        .catch((err)=>console.log(err));
        res.redirect('/');
    },
    tododelapi:(req,res)=>{
        let id=req.params.id;
        todoModel.findByIdAndDelete(id).then(()=>console.log('Todo Deleted!'))
        .catch((err)=>console.log(err));
        res.redirect('/');
    },

};