let toggleSidebars = document.querySelector("#sidebar-bars")
let sidebar = document.querySelector(".sidebar")
let searchButton = document.querySelector("#search-button")
let headerTitle = document.querySelector(".header-title")
let searchBar = document.querySelector("#search")

let recentBox = document.querySelectorAll(".recent-box")
let recntPlayIcon = document.querySelectorAll(".recent-play-icon")
let recentPlusIcon = document.querySelectorAll(".recent-plus-icon")
let recentPlays = document.querySelector(".recent-plays-area")
let displayMain = document.querySelector("#my-music")
let displayRecents = document.querySelector("#recent-play")
let playlistBody = document.querySelector(".playlist-body")


let mainBody = document.querySelector(".main-body")

let playName = document.querySelector(".song-name")
let playArtist = document.querySelector(".song-artistss")
let masterPlay = document.querySelector("#master-play")
let index = 0
let songAudio = document.createElement("audio")
let timeGoing = document.querySelector(".time-going")
let timeRemaining = document.querySelector(".time-remaining")
let songInput = document.querySelector("#song-input")


let newRecentBox = document.createElement("div")
let newAreaText = document.createElement("div")
let newRecentName = document.createElement("div")
let newRecentAlbum = document.createElement("div")
let newRecentImg = document.createElement("img")
let newPlayIcon = document.createElement("div")
let newPlusIcon = document.createElement("div")





function displayPlaylistBody() {
    displayMain.style.display = 'none'
    displayRecents.style.display = "none"
    playlistBody.style.display = 'block'
    sidebar.style.display = "none"
}
function displayMainBody() {
    displayMain.style.display = 'block'

    displayRecents.style.display = "none"
    sidebar.style.display = "none"
}

function displayRecentBody() {
    displayMain.style.display = 'none'
    displayRecents.style.display = 'block'
    sidebar.style.display = "none"
    
}


function removeSidebar() {
    sidebar.style.display = "none"
}

function addSidebar() {
    sidebar.style.display = "block"    
}

function displaySearchBar() {
   searchBar.classList.toggle("active")
}

const recentObj = [
    {
        img: "holyground",
        audio: "holyground",
        name: "Holy Ground",
        artist: "Davido Album"
    },
    {
        img: "aladewura",
        audio: "aladewura",
        name: "Aladewura",
        artist: "Solomon Lounge Album"
    },
    {
        img: "faded",
        audio: "faded",
        name: "Faded",
        artist: "Allan Walker Album"
    },
    {
        img: "gentility",
        audio: "gentility",
        name: "Gentility Sped Up",
        artist: "Melvitto Album"
        
    },
    {
        img: "neverbealone",
        audio: "neverbealone",
        name: "Never Be Alone",
        artist: "Shawn Mendes Album"
    },
    {
        img: "champion",
        audio: "champion",
        name: "Champion",
        artist: "Fireboy Album"
    },
    {
        img: "promises",
        audio: "promises",
        name: "Promises",
        artist: "Maverick City Album"
    },
    {
        img: "xtracool",
        audio: "xtracool",
        name: "Xtra Cool",
        artist: "Young John Album"
  },
  {
    img: "oya",
    audio: "oya",
    name: "Oya",
    artist: "Frank Edwards"
},
 {
    img: "formyhands",
    audio: "formyhands",
    name: "For my Hands",
    artist: "Burna Boy ft Ed Sheeran",
},
 {
    img: "lordsendrevival",
    audio: "lordnotrevival",
    name: "Lord Send Revival",
    artist: "Elevation Church"
},
 {
    img: "testimonies",
    audio: "testimony",
    name: "Testimonies",
    artist: "Elevation Church Album"
},
 {
    img: "devildoesnotbargain",
    audio: "devildoesnotbargain",
    name: "Devil does not Bargain",
    artist: "Alec Benjamin Album"
},
 {
    img: "oceans",
    audio: "oceans",
    name: "Oceans",
    artist: "Hillsong Album"
 },
  {
    img: "marriedtomusic", 
    audio: "marriedtomusic",
    name: "Married to Music",
    artist: "Mistah Kye Album"
},
]
function forRecent() {
  recentObj.forEach(recentIndex => {
    let newRecentBox = document.createElement("div")
    let newAreaText = document.createElement("div")
    let newRecentName = document.createElement("div")
    let newRecentAlbum = document.createElement("div")
    let newRecentImg = document.createElement("img")
    let newPlayIcon = document.createElement("div")
    let newPlusIcon = document.createElement("div")

    recentPlays.append(newRecentBox)
    newRecentBox.append(newPlayIcon)
    newRecentBox.append(newRecentImg)
    newRecentBox.append(newAreaText)

    newAreaText.append(newRecentName)
    newAreaText.append(newRecentAlbum)
    newRecentBox.classList.add("recent-box")
    newAreaText.classList.add("area-text")
    newRecentImg.src = recentIndex.img + ".jpeg"
    newRecentName.innerHTML = recentIndex.name
    newRecentAlbum.innerHTML = recentIndex.artist

    newRecentBox.append(newPlusIcon)
    newPlayIcon.setAttribute("class", "fa fa-play")
    newPlusIcon.setAttribute("class", "fa fa-plus")

  
    let newAudio = document.createElement("audio")

    recentPlays.append(newAudio)

    newAudio.src = recentIndex.audio + ".mp3"
  

  
    newPlayIcon.addEventListener("click", () => {
      if (newAudio.paused) {
        newAudio.play()
        playName.innerHTML = recentIndex.name
        playArtist.innerHTML = recentIndex.artist
        newPlayIcon.setAttribute("class", "fa fa-pause")
        masterPlay.classList.add("fa-pause")
        masterPlay.classList.remove("fa-play")
      }
      else {
        newAudio.pause()
        newPlayIcon.setAttribute("class", "fa fa-play")
        masterPlay.classList.add("fa-play")
        masterPlay.classList.remove("fa-pause")
        
      }
    })
  })

}

forRecent()



const songObj = [
    {
        img: "holyground",
        audio: "holyground",
        name: "Holy Ground",
        artist: "Davido ft Nicky Minaj"
    },
    {
        img: "aladewura",
        audio: "aladewura",
        name: "Aladewura",
        artist: "Solomon Lounge"
    },
    {
        img: "faded",
        audio: "faded",
        name: "Faded",
        artist: "Allan Walker"
    },
    {
        img: "gentility",
        audio: "gentility",
        name: "Gentility Sped Up",
        artist: "Melvitto"
        
    },
    {
        img: "neverbealone",
        audio: "neverbealone",
        name: "Never Be Alone",
        artist: "Shawn Mendes"
    },
    {
        img: "champion",
        audio: "champion",
        name: "Champion",
        artist: "Fireboy"
    },
    {
        img: "promises",
        audio: "promises",
        name: "Promises",
        artist: "Maverick City"
    },
    {
        img: "xtracool",
        audio: "xtracool",
        name: "Xtra Cool",
        artist: "Young John"
    },
     {
        img: "oya",
        audio: "oya",
        name: "Oya",
        artist: "Frank Edwards"
    },
     {
        img: "formyhands",
        audio: "formyhands",
        name: "For my Hands",
        artist: "Burna Boy ft Ed Sheeran",
    },
     {
        img: "lordsendrevival",
        audio: "lordnotrevival",
        name: "Lord Send Revival",
        artist: "Elevation Church"
    },
     {
        img: "testimonies",
        audio: "testimony",
        name: "Testimonies",
        artist: "Elevation Church"
    },
     {
        img: "devildoesnotbargain",
        audio: "devildoesnotbargain",
        name: "Devil does not Bargain",
        artist: "Alec Benjamin"
    },
     {
        img: "oceans",
        audio: "oceans",
        name: "Oceans",
        artist: "Hillsong"
     },
      {
        img: "marriedtomusic", 
        audio: "marriedtomusic",
        name: "Married to Music",
        artist: "Mistah Kye"
  },
  {
    img: "iliftmyvoice", 
    audio: "iliftmyvoice",
    name: "I Lift My Voice",
    artist: "Frank Edwards"
},
]



let randomPlay = Math.floor(Math.random() * songObj.length)
 
function modifySong() {
  let songImg = document.createElement("img")

        let songBody = document.createElement("div")

        let textHolder = document.createElement("div")
        let songName = document.createElement("div")
        let songArtist = document.createElement("div")
        let songTime = document.createElement("div")
let songAudio = document.createElement("audio")

    songObj.forEach(songIndex => {
        let songImg = document.createElement("img")
        let songBody = document.createElement("div")
        let textHolder = document.createElement("div")
        let songName = document.createElement("div")
        let songArtist = document.createElement("div")
        let songTime = document.createElement("div")
        const {img, audio} = songObj
        mainBody.append(songBody)
        songImg.classList.add('images')
        songBody.append(songImg)
        songImg.src = songIndex.img + ".jpeg"
        songBody.classList.add("song-body") 

        songBody.append(textHolder)
        textHolder.append(songName)
        songBody.append(songTime)
        songTime.innerHTML = "0:00"
        songName.innerHTML = songIndex.name
        songArtist.innerHTML = songIndex.artist
     songTime.classList.add("song-time")
        textHolder.append(songArtist)
        songArtist.classList.add("song-artistss")
        textHolder.classList.add("song")
        songName.classList.add("song-name")


    let songAudio = document.createElement("audio")
       
        mainBody.append(songAudio)

      songAudio.src = songIndex.audio + ".mp3"
      
songAudio.setAttribute("mute", "true")

      songAudio.onloadedmetadata = () =>{
       
       
      let arr = songAudio.duration / 60
   
songTime.innerHTML = Math.floor(arr) + ":" + Math.round(arr) + Math.floor(arr)

 }
     
      
    })

  
  
let sB = document.querySelectorAll(".song-body")  


  function makePlayAll(){
    sB.forEach(el => {
      masterPlay.classList.add("fa-pause")
      masterPlay.classList.remove("fa-play")
     
  
    
    })
  }
 sB.forEach((el, i) => {
   el.addEventListener("click", (e) => {
     
   makePlayAll()
  
    songAudio.src = songObj[i].audio + ".mp3"
    songAudio.play()
   
  playName.innerHTML = songObj[i].name 
  playArtist.innerHTML = songObj[i].artist
  
  /*
if (songAudio.paused) {
  songAudio.play()
  el.classList.add("selected-song")
} else {
  songAudio.pause()
  el.classList.remove("selected-song")
}
  */
  
   songAudio.addEventListener("ended",()=>{
    masterPlay.classList.add("fa-pause")

     masterPlay.classList.remove("fa-play")
     
     songAudio.src = songObj[randomPlay] + ".mp3"
     playName.innerHTML = songObj[randomPlay].name
     playName.innerHTML = songObj[randomPlay].artist
   
   })

 })
 
 
   
 })
  
let songAudioRandom = Math.floor(Math.random () * parseInt(songObj.length) + 1)

  songAudio.src = songObj[songAudioRandom].audio + ".mp3"
 playName.innerHTML = songObj[songAudioRandom].name
 playArtist.innerHTML = songObj[songAudioRandom].artist
 
  songAudio.onloadedmetadata = () => {
      let s = songAudio.duration
      timeRemaining.innerHTML = Math.floor(songAudio.duration / 60) + ":" + Math.floor(Math.random() * songAudio.duration /60) +  Math.floor(Math.random() * songAudio.duration /60)
    
    
    setInterval(() => {
if(songAudio.currentTime > 0 && songAudio.currentTime < 10){
  timeGoing.innerText =   "0" + ":" + "0" + Math.floor(songAudio.currentTime)
}
else if(songAudio.currentTime > 10 && songAudio.currentTime < 60){
  timeGoing.innerText = "0" + ":" + Math.floor(songAudio.currentTime)
}

else if(songAudio.currentTime >= 60) { 
  let i = 0
  
  timeGoing.innerText = i + 1 + ":" + "0" + i
}
  
},1000)
   console.log(songAudio.currentTime = 0)

  }
  
 

 
 masterPlay.addEventListener("click", () =>{


        if(songAudio.paused){
      songAudio.play()
     masterPlay.classList.add("fa-pause")
          masterPlay.classList.remove('fa-play')
      

   }
   else{
     songAudio.pause()
     masterPlay.classList.add("fa-play")
     masterPlay.classList.remove("fa-pause")
   }

 })
 

  if (songAudio.play()) {
   
  setInterval(() => {
    songInput.value = songAudio.currentTime
  }, 500)


}

 
  songInput.onchange = () => {
    if (songAudio.play()) {
   
      setInterval(() => {
        songInput.value = songAudio.currentTime
      }, 100)
    
    
    }
    

masterPlay.classList.add("fa-pause")
masterPlay.classList.remove("fa-play")
songAudio.currentTime = songInput.value


}

let next = document.querySelector("#next")
let back = document.querySelector("#back")

next.onclick = () => {
  randomPlay++
  masterPlay.classList.add("fa-pause")
  masterPlay.classList.remove("fa-play")
  

 
songAudio.src = songObj[randomPlay].audio + ".mp3"
playName.innerHTML = songObj[randomPlay].name 
playlistBody.innerHTML = songObj[randomPlay].artist
songAudio.play()

  }
  
back.onclick = () => {
  randomPlay--
  masterPlay.classList.add("fa-pause")
  masterPlay.classList.remove("fa-play")
  

 
songAudio.src = songObj[randomPlay].audio + ".mp3"
playName.innerHTML = songObj[randomPlay].name 
playlistBody.innerHTML = songObj[randomPlay].artist
songAudio.play()

}

}
modifySong()



