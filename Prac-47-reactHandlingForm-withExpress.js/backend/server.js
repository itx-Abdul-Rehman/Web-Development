import e from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import { User } from './models/user.js';
import session from 'express-session';
import bcrypt, { genSalt } from 'bcrypt'

const app=e();

const conn=await mongoose.connect("mongodb://localhost:27017/userdatabase")

app.use(cors())
app.use(bodyParser.json())
app.use(session({secret:'just like a wow'}))

app.get('/',(req,res)=>{
    res.send('Hello Backend Running....')
})
app.post('/register', async (req,res)=>{
    console.log(req.body)
    const newUsername=req.body.username
    const newEmail=req.body.email
    const newPassword=req.body.password
    
    const salt=await genSalt(12)
    const hashPassword=await bcrypt.hash(newPassword,salt)

    const newUser=new User({
        username:newUsername,
        email:newEmail,
        password:hashPassword
    })

    await newUser.save()
    req.session.user_id=newUser._id
    res.send('Data recived')
})

app.post('/login',async (req,res)=>{
    console.log(req.body)
    const email=req.body.email
    const password=req.body.password

    const result=await User.findOne({email:email})

    if(result!=null){
        const is_matched=await bcrypt.compare(password,result.password)
        if(is_matched){
            req.session.user_id=result._id
            console.log(result.username)
           return  res.send('Data found')
        }
        else{
            console.log('not match password')
           return  res.send('not match password')
        }
        
    } 
   
    res.send('not match email')
   
})


app.listen(3000);