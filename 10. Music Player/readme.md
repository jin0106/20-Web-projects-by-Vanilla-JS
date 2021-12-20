# Music Player

HTML audio를 이용한 뮤직 플레이어 구현

플레이, 일시정지, 이전노래, 다음 노래로 이동을 구현. 실행을 하면 해당 노래의 제목과 노래 진행 정도가 바로 표시 된다.

## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/10.%20Music%20Player/readme.assets/image-20211219212109801.png"/>





#### 2) 노래 재생시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/10.%20Music%20Player/readme.assets/image-20211219212151012.png"/>



## 2. 프로젝트를 통해 배운것

#### 1) HTML audio 이벤트

1. audio태그의 이벤트들로 pause()를 하면 일시정지 play()를 하면 다시 재생이 된다.

   또한 ended는 media가 끝이나서 멈췄을때를 말하며, 이 때 다음곡으로 재생하게 해주었다.

   ```javascript
   const audio = document.querySelector('.audio'),
   
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
   
   // Song ends
   audio.addEventListener('ended', nextSong);
   ```

   



>https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio