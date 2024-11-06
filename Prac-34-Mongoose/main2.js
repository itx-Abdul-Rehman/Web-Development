import express from 'express'
import mongoose from 'mongoose'
import {Course} from './models/course.js'
import { Student } from './models/student.js';
import { Wow } from './models/wow.js';
const app=express();

let conn=await mongoose.connect("mongodb://localhost:27017/Course")

app.get('/courseadd', async (req,res)=>{
    
    const course=new Course({
        name:'Information Security',
        code:'SE4242'
    })
    
    await course.save();
    res.send('Hello world! Coursesssssss')
})

app.get('/studentadd', async (req,res)=>{
    
    const student=new Student({
        name:'Abdul',
        rollno:'L1F21BSSE0198'
    })
    
    await student.save();
    res.send('Hello world! studentssss')
})

app.get('/wowadd', async (req,res)=>{
    
    const wow=new Wow({
        name:'Ali',
        rollno:'L1F21BSSE0191'
    })
    
    await wow.save();
    res.send('Hello world! wowssss')
})

app.get('/coursefind',async (req,res)=>{
    const courses=await Course.find();
    const formattedCourses=courses.map(c=>({
        name:c.name,
        code:c.code
    }))
    res.json(formattedCourses);
})

app.get('/studentfind',async (req,res)=>{
    const students=await Student.find();
    const formattedCourses=students.map(c=>({
        name:c.name,
        rollno:c.rollno
    }))
    res.json(formattedCourses);
})

app.get('/studentDelete',async (req,res)=>{
    const students=await Student.deleteOne({name:'Abdul'})
    res.send('Student delete')
})


app.listen(3000,()=>{
    console.log('Welcome main 2:)');
})
