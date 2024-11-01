


let createCard=(channelName,title,views,duration
    ,monthsOld,thumbnail
)=>{

    let updateView;

if(views>999){
    Array.from(views);
    let size=views.length;
   if(size==4){
     updateView=views[0]+"K";
   }else if(size==5){
    updateView=views[0]+views[1]+"K";
   }else if(size==6){
    updateView=views[0]+views[1]+views[2]+"K";
   }
}

if(views>999999){
    console.log("helo");
    Array.from(views);
    let size=views.length;
    console.log(size);
    if(size==7){
        updateView=views[0]+"M";
      }else if(size==8){
       updateView=views[0]+views[1]+"M";
      }else if(size==9){
       updateView=views[0]+views[1]+views[2]+"M";
      }
}else{
    updateView=views;
}

    //------------
    
    let html=` <div class="myBox">
    <div class="imageBox">
      <div id="image">
       
      </div>
    </div>
    <div class="contentBox">
     <div class="title">
       <div id="cmpTitle">
         ${title}
       </div>
     </div>
     <div class="videoInfo">
       <div class="info">
           <div id="channelName">
             ${channelName}
           </div>
           <div class="dot">
            .
           </div>
           <div class="views">
            <div id="view">${updateView}</div> views
           </div>
           <div class="dot">
            .
           </div>
           <div class="days">
             <div id="no">${monthsOld}</div>
             <div class="ago">months ago</div>
           </div>
       </div>
       <div class="time">
           <div id="videoTime">
             ${duration}
           </div>
       </div>
     </div>

    </div>
 </div>`
document.querySelector(".container").innerHTML=html;

}


createCard("Abdul","Pubg mobile",12000,"12:54",3,
"https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ"
)

createCard("Abdul","Pubg e",12000,"12:54",3,
"https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ"
)

// function getInput(){
//     let channelName=prompt("Enter Channel name")
//     let title=prompt("Enter video title");
//     let views=prompt("How many Views");
//     let duration=prompt("How much video long?");
//     let monthsOld=prompt("Months Old");
//     let thumbnail=prompt("Enter tumbnail link");
    
//     createCard(channelName,title,views,duration,monthsOld,thumbnail);
// }

// getInput();

// getInput();

