# Custom Video Player

비디오 플레이어를 직접 커스텀.

아래의 재생 버튼을 누르면 Play와 Pause 아이콘이 바뀌면서 나타나게 구현하였고 Stop버튼을 누르면 영상이 멈추면서 재생시간을 0으로 초기화 시켰다.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/03.%20Custom%20Video%20Player/readme.assets/image-20211213133349365.png"  width="500" height="400"/>



#### 2) 영상 재생시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/03.%20Custom%20Video%20Player/readme.assets/Screen Shot 2021-12-13 at 1.29.29 PM.png"  width="500" height="400"/>



## 2. 프로젝트를 통해 배운것

#### 1) HTML - input range

슬라이드 바를 조정하여 범위 내의 숫자를 선택 할 수 있는 입력 필드

* max : input요소의 최대값을 명시

* min : input요소의 최솟값을 명시

* step : input 요소에 입력할 수 있는 숫자들 사이의 간격을 명시

* value : input 요소의 초깃값을 명시

```html
<input type="range" id="progress" class="progress" min="0" max="100" step="0.1" value="0">
```



#### 2) Video

play, pause등 여러 가본 함수 및 속성들을 가지고 있다.

* currentTime : 현재 재생중인 시간을 초 단위로 반환
* duration : 현재 오디오 / 비디오의 길이를 초 단위로 반환

```javascript
const video = document.querySelector('#video');

function toggleVideoStatus(){
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateProgress(){
  progress.value = (video.currentTime / video.duration) * 100;

  //get min

  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10){
    mins = '0' + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10){
    secs = '0' + String(secs);
  }

  timestamp.innerText = `${mins}:${secs}`;
}
```







## 3. 추가 작업

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/03.%20Custom%20Video%20Player/readme.assets/image-20211213141049779.png"  width="500" height="400"/>

Fast foward와 rewind 버튼을 만들어 각각의 버튼을 누르면 현재 영상 시간에서 +5, -5초씩을 하게 해주었다. 만약 현재 시청시간이 5초 미만이면 0으로 가게 설정을 하였다.

```javascript
function forwardVideo(){
  video.currentTime += 5
}

function backwardVideo(){
  if (video.currentTime < 5){
    video.currentTime = 0;
  } else{
    video.currentTime -=5;
  }
}
```



