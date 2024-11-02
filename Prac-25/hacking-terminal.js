let line1=document.getElementById("line1");
let line2=document.getElementById("line2");
let line3=document.getElementById("line3");
let line4=document.getElementById("line4");
let line5=document.getElementById("line5");


let a=document.querySelector(".miniBox").children;


async function lineOne(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            line1.innerHTML="Initializing Hacking";
            resolve();
        },0)
    })
}


async function lineTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            line2.innerHTML="Reading your files";
            resolve();
        },2000)
    })
}

async function lineThree(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            line3.innerHTML="Password files Detected";
            resolve();
        },4000)
    })
}

async function lineFour(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            line4.innerHTML="Sending all passwords and personal files to server";
            resolve();
        },3500)
    })
}

async function lineFive(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            line5.innerHTML="Cleaning up";
            resolve();
        },5000)
    })
}



async function main(){
     animation();
    let p1=await lineOne();
    animation();
    let p2=await lineTwo();
    animation();
    let p3=await lineThree();
    let p4=await lineFour();
    let p5=await lineFive();
    
}

main();

 function animation(){
    setInterval(() => {
        let last=document.querySelectorAll(".miniBox").forEach(e=>{})
    if(last.innerHTML.endsWith("...")){
        last.innerHTML=last.innerHTML+"";
    }else{
        last.innerHTML=last.innerHTML+".";
    }
    }, 100);
    
}
