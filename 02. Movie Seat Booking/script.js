const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
const reset = document.querySelector('.reset')

populatedUI()

let ticketPrice = parseInt(movieSelect.value);

function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// const ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  //spread snytax
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount*ticketPrice;
}


// Get data from localstorage and populate UI
function populatedUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
  if(selectedSeats !== null && selectedSeats.length>0){
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  
  const selectedMovie = localStorage.getItem('selectedMovieIndex');

  if(selectedMovie !== null){
    movieSelect.selectedIndex=selectedMovie;
  }
  // const selectedMoviePrice
}

//Movie select Event
movieSelect.addEventListener('change', event =>{
  ticketPrice = +event.target.value;

  setMovieData(event.target.selectedIndex, event.target.value)
  updateSelectCount();
})

// Seat click event
container.addEventListener('click', event => {
  if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
    event.target.classList.toggle('selected');
    updateSelectCount();
  }
})


// resetSelected event
function resetSelected(){
  localStorage.clear();
  seats.forEach(seat =>{
    seat.classList.remove('selected');
  })
  updateSelectCount();
}

// reset event

reset.addEventListener('click', event => resetSelected());


// Initial count and total set

updateSelectCount();
