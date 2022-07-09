var btn = document.querySelector("#lsme");
var clicked=false;
btn.addEventListener("click",()=>{
 
    btn.innerHTML="listening..."
    clicked=true
  
  getvoice()
})
var sqry;


function getvoice(){
  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
   
    
    setupnewsong(text)
  recognition.stop()
  btn.innerHTML="Listen me!"
  clicked=false
})
recognition.start()
  
}

function setupnewsong(songdata){
  var API="AIzaSyAp1r-Fl4b_wFmSGi0QjyL5uXq0J15AU_w";
var link="https://www.googleapis.com/youtube/v3/search?key=";
var eml="https://www.youtube.com/embed/";
var a=link+API+"&q="+songdata+"&maxResults=1"
if(songdata==""){
  return
}
fetch(a)
  .then(res => res.json())
  .then(data=> doit(data))
  function doit(data){
    var vd= (data.items[0].id).videoId
    
    var ifm= document.querySelector("iframe")
    ifm.src= eml+vd;
    ifm.addEventListener("load",()=>{
      
      ifm.style.border="10px solid red"
      
      
    })
    document.querySelector("#clr").addEventListener("click",()=>{
      ifm.src=""
    })
  } 

  
}
