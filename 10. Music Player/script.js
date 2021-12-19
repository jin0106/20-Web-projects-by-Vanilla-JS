const musicContainer = document.querySelector('.music-container'),
playBtn = document.querySelector('#play'),
prevBtn = document.querySelector('#prev'),
nextBtn = document.querySelector('#next'),
audio = document.querySelector('.audio'),
progress = document.querySelector('.progress'),
progressContainer = document.querySelector('.progress-container'),
title= document.querySelector('.title'),
cover = document.querySelector('.cover'),
songs = ['hey','summer','ukulele'];

// Keep track of song
let songIndex = 0;

// Initially load song detail into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song){
  title.innerText = song;
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}


// Pause Song
function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}

// Play Song
function playSong(){
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Chang song
function prevSong(){
  if (songIndex== 0) {
    songIndex = songs.length-1;
  } else{
    songIndex -= 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong(){
  if (songIndex== songs.length-1){
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  loadSong(songs[songIndex]);
  playSong();
  
}

function stopMusic(){

}

// Update progress bar
function updateProgess(e){
  const {duration,currentTime} = e.srcElement;
  const progressPercent = (currentTime/duration) * 100;
  progress.style.width = `${progressPercent}%`
}

// move Progress bar
function moveProgress(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX/ width) * duration;
}


// Event listenres

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {;
    pauseSong()
  } else {
    playSong();
  }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate',updateProgess);

// Click on progress bar
progressContainer.addEventListener('click', moveProgress);

// Song ends
audio.addEventListener('ended', nextSong);