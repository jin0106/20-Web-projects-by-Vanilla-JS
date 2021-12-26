# Memory Cards

질문과 답변을 저장하는 메모리 카드 추가 및 제거하는 기능 구현. 카드를 누르면 flip을 하며 질문에서 해답으로, 해답에서 질문으로 바뀜

* CSS 사용해 flipcards 생성
* Add new card 버튼을 이용해 form overlay
* 이전, 다음 버튼을 통해 카드 움직이기
* local storage에 새로운 카드 추가 및 clear



## 1. 실행 화면

#### 1) 기본 화면

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/14.%20Memory%20Cards/readme.assets/image-20211226212302874.png"/>



#### 2) 새로운 카드 추가 화면

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/14.%20Memory%20Cards/readme.assets/image-20211226212151192.png"/>





#### 3) 카드 추가 이후 기본 화면

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/14.%20Memory%20Cards/readme.assets/image-20211226211937846.png"/>



## 2. 프로젝트를 통해 배운것

#### 1) `window.location.reload()`

자바스크립트를 사용하여 현재 페이지 새로고침하기

```javascript
clearBtn.addEventListener('click', () =>{
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
})
```



#### 2) `history객체`

* `history.back()` : 현재 페이지에서 이전페이지로 이동. `history.go(-1)`과 동일
* `history.go()` : 이전 또는 다음 페이지로 이동 가능. () 안에 숫자를 넣어 이동 가능 하다
* `history.forward()` : 다음 페이지로 이동한다. `history.go(1)`과 동일
