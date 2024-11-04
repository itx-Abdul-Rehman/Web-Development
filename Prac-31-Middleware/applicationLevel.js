import e from 'express'
import fs from 'fs'
import {r} from './routes/routerLevel.js'
import cookieParser from 'cookie-parser';


const app=e();

app.use('/blog',r)
app.use(cookieParser());

app.use((req,res,next)=>{
    console.log('middleware');
    
    if(req.method=='GET'){
        fs.appendFileSync('loginLogs.txt',` user login is ${req.method}\n`);
    }else{
        fs.appendFileSync('loginLogs.txt',` user signup is ${req.method}\n`);
    }
    next();
});

app.get('/login',(req,res)=>{

    console.log('Cookies: ', req.cookies)
    res.send('User login');
    console.log('Signed Cookies: ', req.signedCookies)
});


app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
  
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })


app.post('/signup',(req,res)=>{
   
   res.send('user sign up');
});



app.listen(3000,()=>{

});

