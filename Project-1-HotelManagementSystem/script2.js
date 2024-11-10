setInterval(()=>{
    document.querySelector(".scroll").classList.
    toggle("scroll1")
},500)

// facilities page
function facilityCard(image,title){
    let myCrad2=`<div class="subsection">
    <div class="imageSection">
       <img src="${image}" alt="">
       <div class="nam">
          <p>${title}</p>
       </div>
    </div>
 </div>`
 document.querySelector(".sub").innerHTML=document.querySelector(".sub").innerHTML+myCrad2;
 }
 
 facilityCard("images/gym.png","THE GYM");
 facilityCard("images/bar.png","POOLSIDE BAR");
 facilityCard("images/spy.png","THE SPA");
 facilityCard("images/pool.png","SWIMMING POOL");
 facilityCard("images/resturant.png","RESTAURANT");
 facilityCard("images/laundry.png","LAUNDRY");
 
 