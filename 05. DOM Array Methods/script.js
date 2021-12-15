const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add_user');
const doubleBtn = document.querySelector('#double');
const millionairesBtn = document.querySelector('#show_millionaires');
const sortBtn = document.querySelector('#sort');
const calcBtn = document.querySelector('#calculate_wealth');
const sortPoolBtn = document.querySelector('#sort_reverse');
const deleteBtn = document.querySelector('#delete_all');


if (JSON.parse(localStorage.getItem('data'))){
  var data = JSON.parse(localStorage.getItem('data'));
  updateDOM()
} else {
  var data = []
}

// let data = JSON.parse(localStorage.getItem('data'));



// fetch random user and add money
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

// Add new obj to data arr
function addData(obj){
  data.push(obj);
  updateDOM();
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


// Format number as money
function formatMoney(number){
  return "$"+number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

// Double Update Event

function doubleUpdate(providedData = data){
  data = data.map(user =>{
    return {...user, money: user.money*2}
  });
  updateDOM();
}

// Only Millionaires Event

function onlyMillionaries(){
  const temp = data.filter(user => user.money>1000000);
  updateDOM(temp)
}

// Sort Event

function sortByMoney(){
  const temp = data.sort((a,b) => b.money-a.money)
  console.log(temp)
  updateDOM(temp)
}

function sortByMoneyReverse(){
  const temp = data.sort((a,b) => a.money-b.money)
  updateDOM(temp)
}


//Calc Event

function calcAllMoney(){
  const temp = data.reduce((acc, user) => (acc + user.money), 0);
  const wealthEl = document.createElement('div');
  wealthEl.classList.add('total')
  wealthEl.classList.add('person')
  wealthEl.innerHTML = `<h3>Total Wealth</h3> ${formatMoney(temp)}`
  main.appendChild(wealthEl);
}

//Delete Event
function deleteAll(){
  localStorage.clear()
  data= []
  updateDOM()
}

// Event Listners

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleUpdate );
millionairesBtn.addEventListener('click', onlyMillionaries)
sortBtn.addEventListener('click', sortByMoney)
millionairesBtn.addEventListener('click', onlyMillionaries)
calcBtn.addEventListener('click', calcAllMoney)
sortPoolBtn.addEventListener('click', sortByMoneyReverse)
deleteBtn.addEventListener('click', deleteAll);