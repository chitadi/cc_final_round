let pausePlayBtn = document.getElementById("pauseplaybtn")
let forward = document.getElementById("nextbtn")
let rewind = document.getElementById("prevbtn")
let prgBar = document.querySelector(".prg-bar")
let volumeNumber = document.querySelector("#volume-change")
let songNumber = document.querySelector(".song-number")
let cover = document.querySelector(".cover")
let songTitle = document.querySelector(".song-title")
let artistTitle = document.querySelector(".artist-title")
let current = document.querySelector(".current")
let total = document.querySelector(".total")


let timer = 0
let index = 0
let isPlaying = false 


let audio = document.createElement('audio')

let songList = [
    {songname : "Baby One More Time",
    songpath : "music/babyonemoretime.mp3",
    img: "images/babyonemoretime.jpg",
    artistname: "Britney Spears"},
    
    {songname : "Baby Shark",
    songpath : "music/babyshark.mp3",
    img: "images/babyshark.jpg",
    artistname: "PinkFong"},

    {songname : "Twinkle Twinkle Little Star",
    songpath : "music/twinkle.mp3",
    img: "images/twinkle.jpg",
    artistname: "Super Simple Songs"},

    {songname : "Wheels on The Bus",
    songpath : "music/wheelsonbus.mp3",
    img: "images/wheelsonbus.jpg",
    artistname: "Cocomelon"}
]

function loadTrack(index){
    audio.src= songList[index].songpath
    songTitle.innerHTML=songList[index].songname
    cover.src=songList[index].img
    artistTitle.innerHTML=songList[index].artistname
    audio.load()
    total.innerHTML = songList.length
    current.innerHTML = index + 1 
    let time = setInterval(actual_slider, 1000)

}
loadTrack(index)



function pausePlay(){
    if (isPlaying== false){
        playsong()
    }
    else{
        pausesong()
    }
   
}

function playsong(){
    audio.play()
    isPlaying = true
}

function pausesong(){
    audio.pause()
    isPlaying = false
}


function next(){
    if(index< songList.length -1){
        index++
        loadTrack(index)
        playsong()
    }
    else{
        index=0
        loadTrack(index)
        playsong()
    }

}

function prev(){
    if(index>0){
        index= index-1
        loadTrack(index)
        playsong()
    }
    else{
        pausesong()
    }
}

function change_volume(){
    audio.volume = volumeNumber.value/100 

}

function change_duration(){
   let prgBarPos= audio.duration * (prgBar.value/100)
   audio.currentTime = prgBarPos

}

function actual_slider(){
     
    let pos = 0 
    if (!isNaN(audio.duration)){
        pos = audio.currentTime * (100/audio.duration)
        prgBar.value = pos

    }

}