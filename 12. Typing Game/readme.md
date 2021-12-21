# Typing Game

제시되는 단어들을 제한시간 내에 많이 맞추는 게임

`setInterval` 을 사용하여 제한시간을 조정하여 0초가 되면 시간초과 메시지가 나오고 Reload 버튼을 누르면 다시 게임을 플레에 할 수 있다.

제일 위에서 난이도를 설정 할 수 있으며 난이도에 따라 단어를 맞췄을시에 추가되는 시간과 점수가 달라진다.

좌측 하단의 셋팅 버튼을 누르면 상단의 난이도 조절 칸을 없앨 수 있다.

## 1. 실행 화면

#### 1) 기본 화면

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/12.%20Typing%20Game/readme.assets/image-20211221135322474.png"/>



#### 2) 시간 초과시

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/12.%20Typing%20Game/readme.assets/image-20211221135248496.png"/>



## 2. 프로젝트를 통해 배운것

#### 1) `setInterval()`

`delay`  마다 함수 혹은 작성한 코드를 반복적으로 실행한다. delay와 ar1... argN은 옵션이다.

* `delay` : 실행전 대기 시간으로 기본값은 0이고 단위는 millsecond
  * FYI) 1000ms = 1s

* arg,... argN 함수에 전달할 인수들



#### 2) `clearInterval()`

`setInterval` 의 함수를 중단시킬 대 사용한다.

##### Syntax

```javascript
// func에 전달한 요소 지정 가능
var intervalID = setInterval(func, [delay, arg1, arg2, ...]);
var intervalID = setInterval(function[, delay]);
var intervalID = setInterval(code, [delay]);
```



##### 프로젝트 코드

```javascript
const timeInterval = setInterval(updateTime, 1000);


function updateTime(){
  time -=1;
  timeEl.innerText=time+'s';
  if (time == 0){
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}
```





>Source: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

