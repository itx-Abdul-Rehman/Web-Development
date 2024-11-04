import e from 'express'
import fs from 'fs'
const router=e.Router();

router.use((req,res,next)=>{
 
    fs.appendFileSync('roterLevel.txt',`This is router leve middleware and method is ${req.method}\n`);
    next();
})

router.get('/home',(req,res)=>{
   res.send('This is a Home page')
});

router.get('/contact',(req,res)=>{
   res.send('This is contact page')
});

export const r=router;