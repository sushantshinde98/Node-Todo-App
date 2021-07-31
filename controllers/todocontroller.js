const todoModel=require('./../models/todo');
module.exports={
    todogetapi:(req,res)=>{
        //res.send('Todo retrived!')
        res.render('index')
        console.log('Todo retrived!')
    },

    todopostapi:(req,res)=>{
        console.log('Todo Inserted!')
        res.send('Todo inserted!')
    },

};