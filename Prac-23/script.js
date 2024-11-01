let btn=document.getElementById("btn");
let isClick=false;
console.log("hello")
btn.addEventListener("click",()=>{
    if(!isClick){
        document.querySelectorAll(".container").forEach(e=>{
            e.innerHTML="Ja Ja Tur ja";
            isClick=true;
          })
    }else{
        document.querySelectorAll(".container").forEach(e=>{
            e.innerHTML="Welcome";
            isClick=false;
        })
    }
  
})


const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
  }


 

setInterval(()=>{
    console.log("#"+Math.ceil(getRandomNumber(1,999999)))
    document.querySelectorAll(".container").forEach(e=>{
        e.style.backgroundColor="#"+Math.ceil(getRandomNumber(1,999999))
    })

},500);

setTimeout(()=>{

 let btn2=document.getElementById("btn2");
 btn2.hidden=false;

},1000);


document.querySelector(".container").addEventListener("click",()=>{
    alert("Conatiner click")
})

document.querySelector(".mainContainer").addEventListener("click",()=>{
    alert("Main Conatiner click")
    stopPropdagation();
})







// btn.onclick=function(){
//     document.querySelector(".container").innerHTML=
//     "kya bat ha"
// }

// function hahha(){
//     document.querySelector(".container").innerHTML=
//     "kya bat ha"
// }


