

// Function Declaration
console.log('Function Declaration')
function sumFunc(num1,num2){
  return num1+num2;
}

console.log(sumFunc(3,3));

function square(num){
  return num*num;
}

console.log(square(4));

// Function expression
console.log("Function Expression")
const summ=function(num1,num2){
   return num1+num2;
}

console.log(summ(4,4));

const squaree=function(num){
  return num*num;
}

console.log(squaree(5));

// Arrow Functions

console.log("Arrow Function")
const summm=(num1,num2)=> num1+num2;
const squareee=(num)=>num*num;
console.log(summm(6,6));
console.log(square(6));