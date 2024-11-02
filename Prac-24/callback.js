//------------ Q1 -------------

console.log("--------- Q1 -----------------");
function greet(name,callback){
    console.log("This is a greet function");
    callback(name);
}

function callBack(name){
    console.log(name);
}

greet("Abdul Rehman",callBack);

//--------- Q2 -----------------
console.log("--------- Q2 -----------------");
function addNumbers(a,b,result){
    console.log("Adding a and b..........")
    let sum=a+b;
    result(sum);
}

function resultPrint(res){
    console.log("Sum result is: ",res);
}

addNumbers(3,5,resultPrint);

//--------- Q3 -----------------
console.log("--------- Q3 -----------------");

function getUsers(callback){
    let user=["Abdul Rehman","Ali Hassan","Haris Ramay"];
    user.forEach(e=>{
        console.log(e);
    })
    callback(user);
}

function userLists(list){
    console.log("UserLists");
}

getUsers(userLists);

//--------- Q4 -----------------
console.log("--------- Q4 -----------------");

function doubleTheNumber(number,callback){
    console.log("Doubling the number........");
    let double=number*number;
    callback(double);
}

let displayResult=(res)=>{
    console.log(res);
}

doubleTheNumber(5,displayResult);

//--------- Q5 -----------------
console.log("--------- Q5 -----------------");
function filter(numbers,condition,callback){
    let filterArray=numbers.filter(condition);
    callback(filterArray);
}

function condition(i){
    return i<5;
}

function displayFilterArray(filterArray){
       console.log(filterArray);
}

filter([6,4,3,8,7,9,2,2],condition,displayFilterArray);

//--------- Q6 -----------------
console.log("--------- Q6 -----------------");

function map(array,transformation,callback){
    let tranformadArray=array.map(transformation);
    callback(tranformadArray);
}


function transformation(i){
    return i*i;
}

function displayTransformadArray(array){
    console.log(array);
}

map([2,3,4,5],transformation,displayTransformadArray);

//---------------Q7 -----------
console.log("--------- Q7 -----------------");

 function addTwoNumbers(num1,num2,callback){
    let sum;
       setTimeout(() => {
        sum=num1+num2;
        callback(sum);
       }, 2000);
}

function asyncAddDisplay(sum){
    console.log("Sum is: ",sum);
}

addTwoNumbers(4,5,asyncAddDisplay);

//---------------Q8 -----------
console.log("--------- Q8 -----------------");