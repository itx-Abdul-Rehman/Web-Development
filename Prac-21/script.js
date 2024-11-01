
let bodyElements=document.body.children;

Array.from(bodyElements);
bodyElements[0].classList.add("h")
bodyElements[1].classList.add("main");
bodyElements[2].classList.add("footer");


let div1=document.createElement("nav");
div1.className="nav"
div1.innerHTML="Welcome"

document.body.firstElementChild.insertAdjacentElement("afterbegin",div1);

document.querySelector(".h").style.backgroundColor="pink";
document.querySelector(".nav").style.color="green";
document.querySelector(".nav").style.fontSize="22px";

document.querySelector(".nav").innerHTML="Welcome Back ahhaha lol";

let check=document.querySelector(".nav").textContent;
console.log(check);
let check2=document.querySelector(".nav").nodeName;
console.log(check2);

let div2=document.createElement("div");
div2.id="upper"
div2.innerHTML="Upper Main Section"

let mainElement=document.getElementById("ma");
mainElement.style.width="100vw";
mainElement.style.height="60vh";
mainElement.style.backgroundColor="gray";
mainElement.style.color="white";
mainElement.insertAdjacentElement("afterbegin",div2);

let c=document.getElementById("upper");



