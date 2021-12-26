const cardsContainer = document.querySelector('#cards-container'),
prevBtn = document.querySelector('#prev'),
nextBtn = document.querySelector('#next'),
currentEl = document.querySelector('#current'),
showBtn = document.querySelector('#show'),
hidenBtn = document.querySelector('#hide'),
questionEl = document.querySelector('#question'),
answerEl = document.querySelector('#answer'),
addCardBtn = document.querySelector('#add-card'),
clearBtn = document.querySelector('#clear'),
addContainer = document.querySelector('#add-container');


// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards

const cardsEl = [];

// Store cards data
const cardsData = getCardsData();

// Create all cards

function createCards() {
  cardsData.forEach((data,index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
          <p>${data.question}</p>
        </div>
        <div class="inner-card-back">
          <p>${data.answer}</p>
        </div>
      </div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));
  // Add to DOM cards
  cardsEl.push(card);
  cardsContainer.appendChild(card);

  updateCurrentText();
}

// Show number of cards
function updateCurrentText(){
  currentEl.innerText = `${currentActiveCard +1}/${cardsEl.length}`;
}


// Get cards from local storages
function getCardsData(){
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}


// Add card to local storages
function setCardsData(cards){
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
  // 새로고침
}

createCards();




// Event Listenres

// Next button
nextBtn.addEventListener('click', () =>{
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard>cardsEl.length - 1){
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = 'card active'
  updateCurrentText();
})

// Prev Button
prevBtn.addEventListener('click', () =>{
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard +-1;

  if (currentActiveCard<0){
    currentActiveCard = cardsEl.length-1;
  }

  cardsEl[currentActiveCard].className = 'card active'
  updateCurrentText();
})

//show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));

// hiden add container
hidenBtn.addEventListener('click', () => addContainer.classList.remove('show'));


// add new card button
addCardBtn.addEventListener('click', () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if (question.trim() && answer.trim()) {
    const newCard ={ question, answer };

    createCard(newCard);

    questionEl.value ='';
    answerEl.value='';

    addContainer.classList.remove('show');
    cardsData.push(newCard);
    setCardsData(cardsData);
  }
});

// Clear cards button
clearBtn.addEventListener('click', () =>{
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
})

