
const { error } = require("console");
let fs=require("fs");
// console.log(fs);

console.log('Starting for Writing.....');
fs.writeFile("myFile.txt","What fuckkkkkkkk",()=>{
      console.log("Done");
      console.log('Now Reading the data');
      fs.readFile('myFile.txt',(error,data)=>{
        console.log(error,data.toString());
        console.log('Now some add new things in myFile ');
        fs.appendFile('myFile.txt','\nOh my god oh my god',()=>{
            console.log("Add new text in myFile successfully..");
        })
      })
});
console.log('Ending.............');




