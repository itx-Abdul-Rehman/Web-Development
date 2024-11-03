// commonJS Way  it is an default way

let {a,b}=require("./mymodule.js");
console.log(a(10,20),b(3,1));

// console.log(a.sub(8,4));
// console.log(a.sum(8,8));

// EcmaScript Module ES6 way it is an modern way
// named import:
// console.log('Named Imports');
// import {x,y,add} from "./mymodule.js"
// console.log(x);
// console.log(y);
// console.log(add(9,9));

// // default import
// console.log('Default Imports');
// import haha from "./mymodule.js"
// console.log(haha(4,5));