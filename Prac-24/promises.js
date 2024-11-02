//------------Q1----------------
console.log("------------Q1----------------");

function greet(name){
    return new Promise((resolve, reject) => {
        resolve(name);
    })
}

let p1=greet("Abdul");
console.log(p1);
// p1.then(res=>{
//     console.log(res);
// })

//------------Q2----------------
console.log("------------Q2----------------");

function addNumber(num1,num2){
    return new Promise((resolve, reject) => {
        resolve(num1+num2);
    })
}

let p2=addNumber(2,5);
console.log(p2);
// p2.then(res=>{
//     console.log(res);
// })
//------------Q3----------------
console.log("------------Q3----------------");
function getUser() {
    let array=["A","B","C"];
    return new Promise((resolve, reject) => {
        resolve(array);
    })
}

let p3=getUser();
console.log(p3);

//-----------Q4--------------
console.log("------------Q4 ----------------");
function double(number){
    return new Promise((resolve, reject) => {
        resolve(number*2);
    })
}

let p4=double(5);
console.log(p4);

//-----------Q5--------------
console.log("------------Q5 ----------------");
function filter(array){
    return new Promise((resolve, reject) => {
        let filterArray=array.filter((i)=>{
            return i>=5;
        })
        resolve(filterArray);
    })
}

let p5=filter([3,4,5,6,7]);
console.log(p5);

//-----------Q6 --------------
console.log("------------Q6 ----------------");
function map(array){
    return new Promise((resolve, reject) => {
        let transformArray=array.map((i)=>{
            return i*i;
        })
        resolve(transformArray);
    })
}

let p6=map([3,4,5,6,7]);
console.log(p6);

//-----------Q7 --------------
console.log("------------Q7 ----------------");

async function addTwoNumbers(num1,num2){
    let sum;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            sum=num1+num2;
            resolve(sum);
        }, 2000);
         
    })
}

async function main(){
    let p7= await addTwoNumbers(5,5);
    console.log(p7);
}

main();
 console.log("Hello");
