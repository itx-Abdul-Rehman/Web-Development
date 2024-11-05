import e from 'express'
const app=e();
const port=3000;

app.get('/wow',(req,res)=>{
   let name='Abdul-Rehman'
   let arr=['One','Two','Three'];
   res.render('index.ejs',{name:name,arr});
});

app.get('/yup',(req,res)=>{
  let name='Pubg Mobile'
  let arr=['Four','Five','Six'];
  res.render('index2.ejs',{name,arr})
});

app.listen(port,()=>{

});