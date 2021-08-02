const express=require('express');
const mongoose=require('mongoose');
const todocontroller = require('./../controllers/todocontroller');
const todoController=require('./../controllers/todocontroller')
const router=express.Router();

//controller calling
router.get('/',todocontroller.todogetapi)

router.post('/',todoController.todopostapi)

router.get('/:id',todoController.tododelapi)

module.exports=router;