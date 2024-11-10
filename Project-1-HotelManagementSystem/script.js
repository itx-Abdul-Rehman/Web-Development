
setInterval(()=>{
    document.querySelector(".scroll").classList.
    toggle("scroll1")
},500)

// home page
function createCard(title,description,image){

    let myCard=`<div class="subSection">
    <div class="left">
       <div class="leftContent">
          <h1>${title}</h1>
          <p>${description}</p>
          <button>
             <a href="">EXPLORE</a>
          </button>
       </div>
    </div>
    <div class="rightContent">
       <img src="${image}" alt="">
    </div>
 </div>`
 
 document.querySelector(".jsSection").innerHTML=document.querySelector(".section2").innerHTML+myCard;
}

createCard("Luxury redefined",
    "Our rooms are designed to transport you into an environment made for leisure Take your mind off the day-to-day of home     life and find a private paradise for yourself.",
    "images/homePic2.png"
);

createCard("Leaving your worries in the sand",
    "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
    "images/homePic3.png"
);



