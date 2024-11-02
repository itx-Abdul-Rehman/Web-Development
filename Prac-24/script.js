async function myFun(){
   return new Promise((resolve, reject) => {
      setTimeout(()=>{
           resolve(55);
      },6000)
   })
}


async function mai(){
   let a=await myFun();
   console.log(a);
   console.log("hello2")
}

mai();

console.log("hello")

