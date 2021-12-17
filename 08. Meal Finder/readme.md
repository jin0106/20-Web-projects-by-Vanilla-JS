# Meal Finder

fetch를 통해 외부 API를 받아와 검색 혹은 랜덤 버튼을 누르면 해당 음식이 검색이 된다.

음식 사진을 누르면 modal창으로 해당 음식에 대한 정보 및 레시피가 나타나도록 하였다.



## 1. 실행 화면

#### 1) 기본 화면

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/08.%20Meal%20Finder/readme.assets/image-20211217155829308.png"  width="500" height="400"/>





#### 2) 음식 검색시 

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/08.%20Meal%20Finder/readme.assets/image-20211217155926270.png"/>



#### 3) 음식 선택시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/08.%20Meal%20Finder/readme.assets/image-20211217160041769.png"/>



#### 4) 랜덤 버튼 클릭시

<img align='center' src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/08.%20Meal%20Finder/readme.assets/image-20211217160110183.png"/>



## 2. 프로젝트를 통해 배운것

#### 1) `event.path/event.composedPath`()

 1. event.path / event.composedPath()

    > 이벤트가 발생된 노드에서 최상위 노드(Window)까지의 상하관계를 배열로 표현.

    브라우저마다 호환성이 다르다. IE를 제외한 모든 브라우저에서 composedPath를 지원하므로 composedPath를 사용하자.

```javascript
mealsEl.addEventListener('click', e => {
  const path = e.path || (e.composedPath && e.composedPath());
  const mealInfo = path.find(item=> {
    if(item.classList) {
      return item.classList.contains('meal-info');
    } else{
      return false;
    }
  })

  if(mealInfo){
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
  })
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



## 3. 추가 작업

강의에서는 음식의 상세정보를 음식 사진들 아래에 나오게 했는데, 이를 모달로 추가 작업을 해주었다.