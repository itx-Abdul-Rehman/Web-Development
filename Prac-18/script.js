
let myArray=[5,2,76,54,32,78,33,90,95,67,54,76,101,90,88,66,43,2,5,7,13,14];
let myArray2=["Abdul","Ali","Haris"];

console.log(`Array Size: ${myArray.length}`);


let temp=0;

// for(let i=0;i<myArray.length;i++){
//     for(let j=i+1;j<myArray.length;j++){
//           if(myArray[i]>myArray[j]){
//               temp=myArray[i];
//               myArray[i]=myArray[j];
//               myArray[j]=temp;
//           }
//     }
// }

for(let i=0;i<myArray.length;i++){
    console.log(`Index[${i}]: ${myArray[i]}`);
}

console.log(myArray.toString());
console.log(myArray.join("-*-"))
console.log(`Pop Value: ${myArray.pop()}`);
console.log(`Push Value: ${myArray.push(104)}`);
console.log(`New Array: ${myArray}`);
console.log(myArray.shift());
console.log(`New Array: ${myArray}`);
console.log(myArray.unshift(2));
console.log(`New Array: ${myArray}`);
delete myArray[2];
console.log(`New Array: ${myArray}`);
console.log(`Concat Array: ${myArray.concat(myArray2)}`);
console.log(myArray.length);
console.log(`My Array: ${myArray}`);
console.log(`Sub Array: ${myArray.slice(12,22)}`);


//----------------------------------------------------
let number=[1,2,3];
console.log(number.splice(1,0,56,78,89));
console.log(number);
console.log(number.slice(2,4));
delete number[1];
console.log(number);
console.log(number.length);

//------------- Looping ----------------

 number.forEach(element => {
     console.log(element);
 });

 let newArray=number.map((value,index,number)=>{
      return value*value;
 });

console.log(newArray);
