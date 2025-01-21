const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

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
