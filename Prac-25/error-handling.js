
let a=10;
let b='haha';

if(isNaN(a)||isNaN(b)){
   
}else{
    let sum=parseInt(a)+parseInt(b);
    console.log(sum)
}
 

try {
    // if(isNaN(a)||isNaN(b)){
    //     throw new Error("Not a number")
    // }else{
      
    // }
    //   let sum=parseInt(a)+parseInt(b);
    // console.log(sum)
} catch (error) {
    console.log("Not divide by zero");
}

