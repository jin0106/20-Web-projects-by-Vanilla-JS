# Lyrics Search App

lyrics.ovh API를 이용해 가수 혹은 노래 제목을 입력하여 노래 가사 검색 앱 구현

* Fetch를 사용하여 DOM 조작
* 페이지네이션 추가

## 1. 실행 화면

#### 1) 기본 화면

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/15.%20Lyrics%20Search%20App/readme.assets/image-20211229155822301.png"/>



#### 2) 노래 및 가수 검색시

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/15.%20Lyrics%20Search%20App/readme.assets/image-20211229160107333.png"/>



#### 3) 가사 버튼 클릭시

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/15.%20Lyrics%20Search%20App/readme.assets/image-20211229160045345.png"/>





## 2. 프로젝트를 통해 배운것

#### 1) 이스케이프 문자 \r \n

이스케이스 문자는 특별한 문자를 입력하기 위해 백슬래쉬를 붙이는 문자

주로 쓰이는 이스케이프 문자들

\n 개행문자 (LineFeed 다음행으로 바꿈)

\r 개행문자 (Carriage Return 커서를 행의 앞으로 이동)

\r\n 커서를 앞으로 보내고 엔터를 친다고 생각.



#### 2) 정규 표현식

g : 전역 검색

```javascript
async function getLyrics(artist,songtitle) {
  const res = await fetch(`${apiUrl}/v1/${artist}/${songtitle}`);
  const data = await res.json();

  // 정규표현식을 사용해 <br>로 변경
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,'<br>')
  result.innerHTML = `<h2><strong>${artist}</strong> - ${songtitle}</h2><span>${lyrics}</span>`
  more.innerHTML='';
}
```



>https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions

