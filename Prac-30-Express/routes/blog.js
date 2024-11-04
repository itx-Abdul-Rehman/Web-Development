import e from 'express'
const router=e.Router();

router.get('/',(req,res)=>{
    res.send('This is home page');
})

router.get('/about',(req,res)=>{
    res.send('This is about page');
})

router.get('/contact',(req,res)=>{
    res.send('This is contact page');
})

export const r=router;