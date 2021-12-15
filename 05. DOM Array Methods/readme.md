# DOM Array Methods

Array Methods 연습 프로젝트

API를 통해 자동으로 user정보를 받아오고 랜덤으로 Wealth 값을 주었다.

이후에 좌측에 있는 버튼들을 통해 유저 추가, 유저의 돈 2배 증가, 백만장자만 보기, 분류, 계산 각각 `map`, `filter`, `sort`, `reduce` 함수를 사용하여 구현하였다.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/05.%20DOM%20Array%20Methods/readme.assets/image-20211215131357325.png"  width="600" height="500"/>



#### 2) 유저 추가

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/05.%20DOM%20Array%20Methods/readme.assets/image-20211215131436825.png"  width="600" height="500"/>



#### 3) 백만장자만 표시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/05.%20DOM%20Array%20Methods/readme.assets/image-20211215131601729.png"  width="600" height="500"/>



#### 4) 금액순 정렬

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/05.%20DOM%20Array%20Methods/readme.assets/image-20211215131624038.png"  width="600" height="500"/>



#### 5) 총 합 계산

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/05.%20DOM%20Array%20Methods/readme.assets/image-20211215131656026.png"  width="600" height="500"/>





## 2. 프로젝트를 통해 배운것

#### 1) `async`/`await`

`await` 키워드는 `async` 키워드가 붙어있는 함수 내부에서만 사용 가능하며 비동기 함수가 리턴하는 Promise로 부터 결과값을 추출해준다. `await` 키워드를 사용하면 일반 비동기처리처럼 바로 실행이 다음 라인으로 넘어가는것이 아닌 결과값을 얻을 때 까지 기다려준다. 따라서 일반적인 동기 코드 처리와 동일한 흐름으로 (함수 호출 후 결과값을 변수에 할당하는 식) 코드를 작성할 수 있으며, 가독성도 좋아진다.

```javascript
async function fetchAuthorName(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  const userId = post.userId;
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await userResponse.json();
  return user.name;
}

fetchAuthorName(1).then((name) => console.log("name:", name));
```

주의 할 점은 `async`키워드가 붙어 있는 함수를 호출하면 명시적으로 Promise객체를 생성하여 리턴하지 않아도 Promise 객체가 리턴된다. 따라서 호출부를 보면 Promise 객체를 사용한것과 동일한 방식으로 `then()`메서드를 통해 결과값을 출력한다.



하지만 만약 이 호출부가 `async` 키워드가 있는 함수 내부에 있다면 동일한 방식으로 `await`키워드를 사용해 Promise가 제공할 값에 바로 접근 가능하다.

```javascript
async function getRandomUser(){
  const res = await fetch ('https://randomuser.me/api');
  const data = await res.json();
  const user  = data.results[0];
  const newUser = {
    name : `${user.name.first} ${user.name.last}`,
    money : Math.floor(Math.random() * 1000000)
  }

  addData(newUser);
}
```



##### 예외 처리

동기/비동기 구분 없이 `try/catch`로 일관되게 예외 처리 할 수 있는 것도 `async/await`의 장점 중 하나이다.

```javascript
async function fetchAuthorName(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  const userId = post.userId;

  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userResponse.json();
    return user.name;
  } catch (err) {
    console.log("Faile to fetch user:", err);
    return "Unknown";
  }
}

fetchAuthorName(1).then((name) => console.log("name:", name));
```

> 정보 출처 : https://www.daleseo.com/js-async-async-await/

> 정보 출처 : https://www.daleseo.com/js-async-async-await/

#### 

## 3. 추가 작업

2번째 프로젝트였던 [Movie Seat Booking](https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/tree/master/02.%20Movie%20Seat%20Booking)을 하면 알게된 LocalStorage에 저장하는법을 활용해보았다. 추가했던 유저들을 LocalStorage에 저장을 하여 새로고침을 해도 표시가 되게 하였고, Delete All 버튼을 눌렀을때는 모든 유저들을 삭제 하도록 하였다.

아래의 코드를 보면 `var` 를 사용하여 `data`를 정의 및 할당하였는데, 그 이유는 자바스크립트의 호이스팅 때문이다. `updateDOM`을 함수 선언문으로 생성했기에 함수 호이스팅이 일어나는데, 만약 `data` 를 `let`이나 `const` 로 생성하면 이 둘을 호이스팅이 되지 않기 때문에 `data`를 찾을 수 없다는 오류가 뜰 것이다. 이러한 이유로 `var` 을 사용하게 되었다. 또한 localStorage가 비어있을경우 `null` 로 처리가 되어 다른 함수에서 에러가 날수도 있기 때문에 if문 처리를 통해 `data`를 정의하였다.



<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/05.%20DOM%20Array%20Methods/readme.assets/image-20211215131932917.png"  width="600" height="500"/>



```javascript
if (JSON.parse(localStorage.getItem('data'))){
  var data =JSON.parse(localStorage.getItem('data'));
  updateDOM()
} else {
  var data = []
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'
  providedData.forEach(user =>{
    const elem = document.createElement('div');
    elem.classList.add('person')
    elem.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
    main.appendChild(elem);
  })
  localStorage.setItem('data',JSON.stringify(providedData))
}


//Delete Event
function deleteAll(){
  localStorage.clear()
  data= []
  updateDOM()
}
```



