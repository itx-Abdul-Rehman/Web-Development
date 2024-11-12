
//fetch songs from album


let songNameArray=[];
let songUrl=[];
let audio=new Audio();


async function main (){
    
  let songs= await fetch("http://127.0.0.1:5500/Project-2-Spotify/songs/")
  let songsList=await songs.text();
  let div=document.createElement("div");
  div.innerHTML=songsList;
 let aTagList=div.getElementsByTagName("a");
 

 for (let index = 0; index < aTagList.length; index++) {
    const element = aTagList[index];
    
    if(element.href.endsWith(".mp3")){
     songUrl.push(element.href);
     songNameArray.push(element.href.split("/songs/_")[1].replaceAll("%20"," ").split(".mp3")[0])
    }
   
 }

 
  songNameArray.forEach((e)=>{
     let html=`<li>
     <div class="songCard displayFlex">
       <div class="name">${e}</div>
       <div class="plyStop"><button><img  src="play-stroke-rounded.svg" alt="" class="invertImg ply" ></button></div>
     </div>
   </li>`

   document.querySelector(".songList").innerHTML=document.querySelector(".songList").innerHTML+html;
  })

 
  let isRun=false;
  let cTime;
  let totalTime;
  let pTime;
  let ptTime;
  Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
        
        
        let cUrl=e.getElementsByClassName("name")[0].innerHTML;
        res= run(cUrl);
        
        if(res!=null){
            
           
            document.querySelector(".songTitle").innerHTML=cUrl;
            audio.src=res;
            if(!isRun){
                isRun=true;
                audio.play();
                console.log(audio.play.src)
                // play.src = "stop-stroke-rounded.svg"
                element.target.src="stop-stroke-rounded.svg"
                document.querySelector(".btn2").src="stop-stroke-rounded.svg";
            }else{
                isRun=false;
                element.target.src="play-stroke-rounded.svg"
                audio.pause();
                document.querySelector(".btn2").src="play-stroke-rounded.svg";
            }
            
        }
    })
})

audio.addEventListener("timeupdate",()=>{
    
    document.querySelector(".completeTime").innerHTML=secondsToMinutesSeconds(audio.duration);
    document.querySelector(".cuurentTime").innerHTML=secondsToMinutesSeconds(audio.currentTime);
    document.querySelector(".circle").style.left = (audio.currentTime / audio.duration) * 100 + "%";
    
})

document.querySelector(".playBar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    audio.currentTime = ((audio.duration) * percent) / 100
})


}

main();

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

function run(cUrl){
    for (let index = 0; index < songUrl.length; index++) {
        const element = songUrl[index];
    
        if(element.endsWith(cUrl.replaceAll(" ","%20")+".mp3")){
            
            return element;
            
        }
        
    }
    return null;
}


let car = document.querySelector(".card");
let cc = document.querySelector(".plybtn");

car.addEventListener("mouseover", () => {
    cc.classList.add("plybtn2");
    car.classList.add("card2");
});


car.addEventListener("mouseout", () => {
    cc.classList.remove("plybtn2");
    car.classList.remove("card2");
});


document.querySelector(".volumeImg").addEventListener("mouseover",()=>{
    document.querySelector(".volumeBar").classList.remove("displayVBar")
})

document.querySelector(".volumeBar").addEventListener("mouseout",()=>{
    document.querySelector(".volumeBar").classList.add("displayVBar")
})


