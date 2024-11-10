setInterval(()=>{
    document.querySelector(".scroll").classList.
    toggle("scroll1")
},500)

function createCard(image,title,price){
    let myCard=`<div class="sub">
    <div class="subsection">
    <div class="imageSection">
        <img src="${image}" alt="">
        <div class="nam">
            <p>${title}</p>
        </div>
    </div>
    <div class="subBottom">
        <div class="plus">
            <button>+</button>
            <h1>VIEW ROOM DETAILS</h1>
        </div>
        <div class="price">
            <button>$${price} Avg/night</button>
        </div>
    </div>
</div>
</div>`

document.querySelector(".sub1").innerHTML=document.querySelector(".sub1").innerHTML+myCard;
}

createCard("images/singlebed.png","SINGLE ROOM","147")
createCard("images/doublebed.png","DOUBLE ROOM","155")
createCard("images/twinbed.png","TWIN ROOM","155")