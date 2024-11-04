
import e from 'express'
import path from 'path';
import {fileURLToPath} from 'url'
import {r} from './routes/blog.js';
const app=e();
const port=3000;

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

app.use(e.static('public'));
app.use('/files',e.static('images'));
app.use('/blog',r);


app.get('/lol',(req,res)=>{
    res.send('Welcome to get Page');
})

app.get('/lol/:slug',(req,res)=>{

    res.send( `Welcome get file ${req.params.slug}`);
    console.log(req.query.name);
})


app.post('/p',(req,res)=>{
    console.log('This is a post request');
    res.send('Welcome to post page');
})

app.put('/put',(req,res)=>{
    res.send('Welcome to put page');
})

app.get('/api',(req,res)=>{
    console.log('hitt json');
    res.json({a:1,b:2,c:3});
})

app.get('/home',(req,res)=>{
    res.sendFile('templates/home.html',{root:__dirname});
})

app.listen(port,()=>{
    console.log('Welcome ')
})