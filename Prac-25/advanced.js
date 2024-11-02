//-------- IIFE--------------
console.log("Hacking Initializing....");

let array=["read password files...","file send to server...","Successfully Accessed..."]
async function funOne(i){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(array[i]);
        },2000)
    })
}

let i=0;
(async function main(){
  
  let res=await funOne(i);
  console.log(res);
 let res2= await funOne(i+1);
 console.log(res2);
  let res3=await funOne(i+2);
  console.log(res3);
})();

console.log('------------------------------');

// ---------------- Destructuting--------------
let [a,b,...c]=[1,2,3,4,5,6,7];
console.log(a);
console.log(b);
console.log(c);

let obj={
    "name":"AbdulRehman",
    "age":22,
    "gender":"Male"
}

let {name,age,gender}=obj;
console.log(name);
console.log(age);
console.log(gender);

//----------Spread Syntax---------------

let arr=[2,3,5];

function sum(a,b){
   return a+b;
}

console.log(sum(...arr));

let objj={
    ...arr
}
console.log(objj)




