let number=[2,2,3,3,3,4,2,5,6,6,6];
let doneNumbers=[];
let i=-1;

let doubleTrouble=number.map((e)=>{
    i++;
    if(e===number[i-1]){
      doneNumbers.push(i);
    }else{
        return e*2;
    }
    

})

for(let i=0;i<doneNumbers.length;i++){
    let pos=doneNumbers[i];
    doubleTrouble[pos]=doubleTrouble[pos-1];
}

console.log(doubleTrouble);



