//---------- Q1 ---------------
console.log('-------------Q1----------------');

let names=['AbdulRehman','Ali','Hassan','Haris Ramay','Ch Haris','M Hamza','Mohammad Abdullah'];

let houses=[];

for (const name of names) {
    if(name.length<6){
        houses.push('Gryffindor');
    }
    else if(name.length<8){
        houses.push('Hufflepuff');
    }
    else if(name.length<12){
       houses.push('Ravenclaw');
    }
    else{
      houses.push('Slytherin');
    }
}

for (let index = 0; index < names.length; index++) {
    console.log(`${names[index]}-->${houses[index]}`);
    
}

