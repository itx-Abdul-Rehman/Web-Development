import e  from "express";
import fs from 'fs/promises'
import path from "path";
const app=e();
const port=3000;

await fs.writeFile('home.txt','This a a home file');
await fs.writeFile('About.txt','This a a about file');
await fs.writeFile('download.txt','This a a download file');
await fs.writeFile('index.txt','This a a index file');


// Example of serve static file from public directory
// app.use(e.static('public'));

//Example of serve static file from named public directory mount virtual directory named static 
// app.use('/static', e.static('public'))


// Example of request Urls using variables params and queries
// app.get('/blog/:slug',(req,res)=>{
//    res.send(`This is a ${req.params.slug} file`);
//    console.log(req.params.slug);
//    console.log(req.query);
// })




//Example of request Urls individual by file/directory names
// app.get('/home',(req,res)=>{
//     res.send('Welcome to Home');
// })

// app.get('/about',(req,res)=>{
//     res.send('Welcome to about page');
// })

// app.get('/download',(req,res)=>{
//     res.send('Welcome to download page');
// })


//this is use to listen/run the Urls at this port
app.listen(port,()=>{

})