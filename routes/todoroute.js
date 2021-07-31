const express=require('express');
const todocontroller = require('./../controllers/todocontroller');
const todoController=require('./../controllers/todocontroller')
const router=express.Router();

//controller calling
router.get('/',todocontroller.todogetapi)

router.post('/',todoController.todopostapi)

module.exports=router;