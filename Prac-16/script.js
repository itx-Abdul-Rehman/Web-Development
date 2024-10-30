
// -------- Conditional Statement ----------

// ------------- Q1 ---------------

// let num=prompt("Enter a number");
// if(num>0){
//    alert( `${num} is postive`);
// }else if(num<0){
//     alert( `${num} is negative`);
// }else if(num==0){
//     alert( `${num} is zero`);
// }


// ----------- Q2 ----------------

// let userAge=prompt("Enter age");

// if(isNaN(userAge)){
//     alert("Invalid input: please enter a number")
// }

// if(userAge>=18){
//     alert("Eligible to vote")
// }else{
//     alert("Not eligible to vote")
// }

// ----------- Q3 -----------------

let myStirng=prompt("Enter a string");

function isHello(myStirng){
    if(myStirng.includes("hello")){
        return "Yes";
    }
    return "No";
}

alert(isHello(myStirng));

