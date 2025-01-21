const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//music
const songs =[
  {
    name: 'music-1',
    displayName : 'Electric Chill Machine',
    artist: 'Xander',
    image : 'image-1'
  },
{
  name: 'music-2',
  displayName:'Seven Nation Army (Remix)',
  artist:'Xander',
  image : 'image-2'
},{
  name:'music-3',
  displayName:'Front Row (Remix)',
  artist:'Xander',  
  image:'image-3'
},{
  name:'metric-1',
  displayName:'Front Row (Remix)',
  artist:'Xander',
  image:'metric-1'
}
]

let isPlaying = false;

function playSong(){
  music.play();
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause')
  playBtn.setAttribute('title', 'pause');
}
function pauseSong(){
  music.pause();
  isPlaying = false;
  playBtn.classList.replace('fa-pause','fa-play'); 
  playBtn.setAttribute('title', 'play');
}

//play or pause
playBtn.addEventListener('click', ()=>(isPlaying ? pauseSong() : playSong()));

//play/pause functionality done

//next/prev functionality
function loadSong (song){
  title.textContent = song.displayName;
  artist.textContent= song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.image}.jpg`;   
}

//current song 
let songIndex = 0;

//prev song
function prevSong(){
  songIndex--;  
  if (songIndex <0){
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);  
  playSong();
}

//next song
function nextSong(){
  songIndex++;
  if (songIndex > songs.length -1){
songIndex = 0;  
  }
  loadSong(songs[songIndex]);  
  playSong();
}

//on startup
loadSong(songs[songIndex]); 
//updates progres bar and time
function updateProgressBar(e){
  if (isPlaying){
    const {duration, currentTime} = e.srcElement;
    //update progress bar width
    const progressPercent = (currentTime/duration)*100; 
    progress.style.width = `${progressPercent}%`;
  }
}

//event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar)