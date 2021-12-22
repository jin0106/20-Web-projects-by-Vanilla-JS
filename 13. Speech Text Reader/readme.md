# Speech Text Reader

Web Speech API를 활용하여 텍스트를 읽어주는 앱.

* CSS grid를 사용하여 반응형으로 구현
* 언어, 목소리와 엑센트 변경 가능
* custom text를 입력하고 버튼을 클릭하면 custom text를 읽어주는 기능 구현
* 메인 화면의 사진 혹은 문장을 클릭하면 해당 문장을 읽어주는 기능 구현

## 1. 실행 화면

#### 1) 기본 화면

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/13.%20Speech%20Text%20Reader/readme.assets/Screen Shot 2021-12-22 at 1.58.47 PM.png"/>



#### 2) 언어 변경 및 커스텀 입력창 

<img src="https://github.com/jin0106/20-Web-projects-by-Vanilla-JS/raw/master/13.%20Speech%20Text%20Reader/readme.assets/Screen Shot 2021-12-22 at 2.03.05 PM.png"/>





## 2. 프로젝트를 통해 배운것

#### 1) `SpeechSynthesis`

Web Speech API의 인터페이스로 speech service의 컨트롤러 인터페이스이다.

여러 장치에서 voice를 시작, 중지 등 여러 명령어를 사용 할 수 있다. 

* `SpeechSynthesis.speak()`
  * speech를 실행 ()안에 말을 할 문구가 포함되어야한다.
* `SpeechSynthesis.getVoices()`
  * 현재 장치에서 가능한 모든 voices들의 obejcts를 리스트로 반환한다.

#### 2) `SpeechSynthesisUtterance`

speech request를 대표하는 인터페이스로, 컨텐츠의 언어, 높낮이, 소리등의 정보를 포함하고 있어야한다.

* `SpeechSynthesisUtterance.text`
  * 스피치를 할 문장을 설정
* `SpeechSynthesisUtterance.voice`
  * 스피치를 할때 사용 될 voice를 설정

##### 프로젝트 코드

```javascript
// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices =[];

function getVoices(){
  voices = speechSynthesis.getVoices();

  voices.forEach(voice =>{
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText=`${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  })
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText(){
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e){
  message.voice = voices.find(voice => voice.name === e.target.value);
}


// Voice changed
speechSynthesis.addEventListener('voiceschanged', getVoices);
```



>Source: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

