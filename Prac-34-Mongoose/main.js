import express from 'express'
import mongoose from 'mongoose'
import {Todo} from './models/todo.js'

const app=express();
const port=3000;

let conn=await mongoose.connect("mongodb://localhost:27017/Todo")



app.get('/add',(req,res)=>{
    const todo=new Todo({
       name:'Assignment 4',
       desc:'Andriod Development',
       isDone:false
    });

    todo.save();
    res.send('Hello World! Todo List')
});

app.get('/find',async (req,res)=>{
    try{
         const todos=await Todo.find();
         const formattedData=todos.map(todo=>({
            name:todo.name,
            desc:todo.desc
         }))
         res.json(formattedData)
    }catch(error){
        console.log(error);
    }
});

app.listen(port,()=>{
   console.log('Welcome:)');
});