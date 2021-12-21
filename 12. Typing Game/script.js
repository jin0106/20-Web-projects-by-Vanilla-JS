const word = document.querySelector('#word'),
text = document.querySelector('#text'),
scoreEl = document.querySelector('#score'),
timeEl = document.querySelector('#time'),
endgameEl = document.querySelector('#end-game-container'),
settingsBtn = document.querySelector('#settings-btn'),
settings = document.querySelector('#settings'),
settingsForm = document.querySelector('#settings-form'),
difficultySelect = document.querySelector('#difficulty');

// List of words for game

const words = [
  'Deep',
  'Vaseline',
  'bauschlomb',
  'interview',
  'dependent',
  'superficial',
  'establish',
  'marshall',
  'justice'
];

// Init word

let randomWord;

// Init Score

let score = 0;

// Init Time

let time = 10;

// Set difficulty to value in local storage or medium

let difficulty = localStorage.getItem('difficulty') !== null 
? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = difficulty;

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random Word
function getRandomWord(){
  return words[Math.floor(Math.random()* words.length)];
}

// Add word to Dom
function addWordToDOM(){
  randomWord = getRandomWord()
  word.innerText = randomWord
}


// Update score
function updateScore(){
  if (difficulty==='hard'){
    score += 2;
  } else if (difficulty==='medium'){
    score +=1;
  } else{
    score += 0.5;
  }
  scoreEl.innerText=score;
}


//Update time
function updateTime(){
  time -=1;
  timeEl.innerText=time+'s';
  if (time == 0){
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `
  endgameEl.style.display='flex';

}

addWordToDOM();

// Event Listenres
text.addEventListener('input', e =>{
  if (e.target.value === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value=''

    if (difficulty==='hard'){
      time += 2;
    } else if (difficulty==='medium'){
      time += 3;
    } else{
      time +=5;
    }
    updateTime();
  }
})

// settings btn event

settingsBtn.addEventListener('click', ()=> settings.classList.toggle('hide'))

// Settings select

settingsForm.addEventListener('change', e=> {
  difficulty = e.target.value;
  localStorage.setItem('difficulty',difficulty)
  scoreEl.innerText='';
  time = 10;
  time.innerText= time+'s';
})

