let fs=require("fs/promises");
let path=require("path")

console.log(fs);
let b;
let myPath="D:\\Web Development\\Prac-28-JS-B-FS-and-Path-Module\\myNewFile.txt"
let desPath="D:\\Web Development\\Prac-2";

(async function(){
    console.log('Writing new data in file');
    let a=await fs.writeFile('myNewFile.txt','My name is Abdul rehman and i am a software engineer');
    console.log('Now reading data from file');
     b=await fs.readFile('myNewFile.txt');
    console.log('Reading data from file');
    console.log(b.toString());
    console.log('now adding some more text');
    await fs.appendFile('myNewFile.txt','\n My hobby is learning new coding concepts')
    console.log('added successfully');
    b=await fs.readFile('myNewFile.txt');
    console.log(b.toString());
    await fs.copyFile('myNewFile.txt','myFile.txt')
    console.log('Successfully copied')
    await fs.unlink('myNewFile.txt');
    console.log('File is deleted');
})();

// let myPath="D:\\Web Development\\Prac-28-JS-B-FS-and-Path-Module\\myNewFile.txt"
// console.log(path.basename(myPath));
// console.log(path.extname(myPath));
// console.log(path.dirname(myPath));
// console.log(path)
// console.log(path.isAbsolute(myPath))
// console.log(path.relative(myPath,myPath));
