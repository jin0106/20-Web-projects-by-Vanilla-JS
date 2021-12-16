# Hangman Game

Hangman Game

일정 횟수 내에 정해져 있는 단어를 맞추는 게임이다. 

틀린 글자를 입력하면 그 글자가 우측 상단에 표시가 되고 한 번 입력했었던 글자를 또 입력 하면 밑에 팝업창이 뜬다. 팝업창은 `translateY` 와 `setTimeout()` 을 사용하여 자동으로 사라지게 하였다. 틀린 글자를 입력할때마다 사람의 몸의 한 부분씩 표시가 된다.

성공 또는 실패시 각각 다른 문구를 가진 팝업창이 뜨고 Playagain버튼을 누르면 게임을 다시 시작할 수 있다.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/07.%20Hangman%20Game/readme.assets/image-20211216134340391.png"  width="500" height="400"/>



#### 2) 틀린 글자 입력시 

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/07.%20Hangman%20Game/readme.assets/image-20211216134429805.png"  width="500" height="400"/>

#### 3) 입력했던 글자 다시 입력시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/07.%20Hangman%20Game/readme.assets/image-20211216134537168.png"  width="500" height="400"/>



#### 4) 성공 및 실패 시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/07.%20Hangman%20Game/readme.assets/image-20211216134611265.png"  width="500" height="400"/>

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/07.%20Hangman%20Game/readme.assets/image-20211216134626290.png"  width="500" height="400"/>



## 2. 프로젝트를 통해 배운것

#### 1) `Math.floor(), Math.random()`

 1. Math.floor()

    > 소수점 이하를 버림하는 함수. 참고로 Math.floor(null)은 0을 반환

    cf) `Math.ceil()`: 소수점 이하를 올림 처리 

    ​	`Math.round()`: 소수점 이하를 반올림 처리

    ```javascript
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    ```

    

#### 2) `includes(x)`

String, Array 안에 x가 있는지 확인하는 함수. 있다면 true, 없다면 false 반환

```javascript
if (selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)){
        correctLetters.push(letter)
        displayWord();
      } else 
        showNotification();
    } else {
      if(!wrongLetters.includes(letter)){
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else{
        showNotification();
      }
    }
```



#### 3) 키보드 이벤트 `keydown/keyup`

키보드 이벤트는 사용자가 키를 누를 때 `keydown` 타입 이벤트가 발생하고 키를 놓을 때는 `keyup` 타입이벤트를 발생 한다. 

키보드 이벤트는 DOM 상에서 window나 document 또는 특정 element에서 발생할 수 있다. 예를 들어, window에서 발생하는 `keydown` 이벤트는 아래와 같이 콜백함수를 설정하면 된다.

```javascript
window.onkeydown = e => console.log(e);

//addEventListenr 함수를 이용 할 수도 있다.
window.addEventListner("keydown", e => console.log(e));
```



#### 키보드 이벤트 객체

키보드 이벤트 객체에는 다양한 메타정보가 담겨 있다. 예를 들어 `key`속성에는 키 값이, `code` 속성에는 코드값이, `shiftKey` 속성에는 쉬프트키가 눌린 여부를 알려준다.

아래는 키보드 `1` 를 눌러보면 다음과 같은 키보드 이벤트 객체가 넘어오는것을 볼 수 있다.

```javascript
{
  key:"1",
  code: "Digit1",
  shiftKey: false,
  //생략
}
  
// shift+a 를 눌렀을 때
{
  key: "A",
  code: "KeyA",
  shiftKey: true,
  // 생략
}
```



> 출처 : https://www.daleseo.com/