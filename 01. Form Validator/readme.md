# Form Validator

username, email, password의 최소, 최대 길이를 지정하고 email의 경우에는 형식에 맞는지 검사, password는 두개가 일치하는지 확인. 

오류가 있을시와 성공했을시에 따라 테두리에 색깔을 다르게 주고, 오류가 있을시에는 해당 부분의 오류문구도 표시.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/01.%20Form%20Validator/readme.assets/image-20211212160119588.png"  width="300" height="400"/>

#### 2) 이메일 형식 오류

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/01.%20Form%20Validator/readme.assets/image-20211212160556269.png"  width="300" height="400"/>

#### 3) 아무것도 입력 안했을 때

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/01.%20Form%20Validator/readme.assets/image-20211212160614044.png"  width="300" height="400"/>

## 2. 프로젝트를 통해 배운것

#### 1)` test() `

주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 `true` 또는 `false`로 변환

```javascript
function checkEmail(input){
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid')
  }
}
```



#### 2) `charAt()`

해당 부분의 문자열 읽기. 파이썬의 []와 동일



cf) `substring(a,b)` : charAt은 문자 하나를 읽어내지만 substring 문자열을 읽어낸다.

   `substring(1,3)`- 1번 인덱스부터 3번인덱스까지의 문자열을 불러옴

```javascript
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
```



### 3) `slice()`

어떤 배열의 시작부터 끝까지에 대한 얕은 복사본을 새로분 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.

slice(begin, end) - end는 미포함한다. 예를들어, spice(1,4)이면 1번부터 3번까지이다.

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// 2번부터 끝까지
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// 2번부터 4번까지(4번 미포함)
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```

