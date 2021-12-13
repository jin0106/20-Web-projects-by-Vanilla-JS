# Movie Seat Booking

좌석을 선택하고, 해당 영화의 가격과 선택한 좌석 갯수에 따라 아래의 텍스트가 실시간으로 변경이 된다.

LocalStorage에 데이터를 저장해서 새로고침을 해도 선택한 좌석과 영화 정보를 유지 하도록 했다.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/02.%20Movie%20Seat%20Booking/readme.assets/image-20211212205954205.png"  width="300" height="400"/>





#### 2) 좌석 선택시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/02.%20Movie%20Seat%20Booking/readme.assets/image-20211212210016170.png"  width="300" height="400"/>



## 2. 프로젝트를 통해 배운것



#### 1) localStorage

localStorage는 오직 string만 지원하고 키와 밸류의 형태로 값을 저장 하기 때문에 배열을 저장하고 싶을때는  `JSON.stringify()` JSON 객체를 String 객체로 변환시켜준다. 대신 localstorage에서 JS로 값을 불러 올 때는 `JSON.parse()` 함수를 사용하여 string객체를 다시 JSON 객체로 변환시켜준다.



`localStorage.setItem(key, value)` :  key와 value를 입력하여 localStorage에 저장

`localStorage.getItem(key)` : Storage에서 이 key를 가진 값을 반환

`localStorage.removeItem(key)` : Storage에서 이 key를 가진 값을 삭제

`localStorage.clear()` : Storage에 있는 값들 모두 삭제

```javascript
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  //spread snytax
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount*ticketPrice;
}

```



#### 2) CSS - `perspective`

하위 요소를 관찰하는 원근 거리를 설정하는 값.

perspective의 숫자가 커질수록 멀리서 보는 느낌이 난다.





## 3. 추가 작업

개인적으로 reset 버튼을 만들었다. reset 버튼을 누르면 LocalStorage에 저장되어있던 모든 좌석과 영화 정보들을 초기화 시켰다.

```javascript
function resetSelected(){
  localStorage.clear();
  seats.forEach(seat =>{
    seat.classList.remove('selected');
  })
  updateSelectCount();
}

reset.addEventListener('click', event => resetSelected());
```



