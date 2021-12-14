# Exchange Rate Calculator

자동 환율 계산 시스템

두 가지의 화폐 단위를 선택을 할 수 있고, 첫 번째 화폐와 두 번째 화폐 단위의 환율을 자동으로 환산해서 입력값을 나타낸다. 초기에는 USD와 KRW를 기본 selected로 설정하였다.

Swap 버튼을 누르면 현재 선택한 두 가지 화폐단위의 위치를 서로 바꿔준다. 또한 Swap버튼의 오른쪽에는 1 A화폐단위가 B화폐단위로 얼마인지 화폐 단위를 바꿀 때마다 자동으로 변경되어 표시하도록 하였다.

돈의 자릿수 소수점 자리는 2번째까지만 표시하도록 하였다.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/04.%20Exchange%20Rate%20Calculator/readme.assets/image-20211214123644819.png"  width="500" height="400"/>

#### 2) 금액 입력시 

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/04.%20Exchange%20Rate%20Calculator/readme.assets/image-20211214123738347.png"  width="500" height="400"/>





## 2. 프로젝트를 통해 배운것

#### 1) `fetch()`

`axios` 라이브러리와 거의 유사하다.

`fetch()` 함수는 첫번째 인자로 URL, 두번재 인자로 옵션 객체를 받고, Promise타입의 객체를 반환한다.

반환된 객체는 API호출이 성공하면 응답(response)객체를 resolve, 실패했을 때는 예외(error)객체를 reject한다.

옵션 객체에는 HTTP방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 등을 설정 해 줄 수 있다. 응답(response) 객체로부터는 HTTP 응답 상태(status), HTTP 응답 헤더(headers),  HTTP 요청 전문(body) 등을 읽어 올 수 있다.

또한 `fetch()` 함수는 디폴트로 GET방식으로 작동을 하고 있기에 GET 요청을 할 때에는 옵션 인자가 필요가 없다.

하지만 POST호출 일때는 `method` 옵션을 `POST` 로 지정해주고, `header` 옵션을 통해 JSON 포멧을 사용한다고 알려줘야 한다. 그리고 요청 전문을 JSON 포켓으로 직렬화해 가장 중요한 `body`옵션에 설정해준다. 



PUT 호출을 POST 호출과 유사하고, DELETE는 보낼 데이터가 없기 때문에 `header`와 `body` 옵션이 필요하지 않다.

```javascript
function calculate(){
  const currency1 = currencyOne.value;
  const currency2 = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then(res => res.json())
    .then(data => {
      const amountTwoChange = data['rates'][`${currency2}`]
      rate.innerText = `1 ${currency1} = ${currency2} ${amountTwoChange}`
      amountTwo.value= (amountTwoChange * amountOne.value).toFixed(2);
    })
}
```





#### 2) `toFixed()`

`numObj.toFixed([소수 부분 자릿수])`

Number 인스턴스의 소수 부분 자릿수를 전달 받은 값으로 고정한 후, 그 값을 문자열로 반환한다.

```javascript
amountTwo.value= (amountTwoChange * amountOne.value).toFixed(2);
```
