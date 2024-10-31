
let boxes=document.getElementsByClassName("box");

const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
  }

for(let i=0;i<boxes.length;i++){
        let ran=getRandomNumber(1,999999);
        
        boxes[i].style.backgroundColor="#"+Math.floor(ran);
   
}






