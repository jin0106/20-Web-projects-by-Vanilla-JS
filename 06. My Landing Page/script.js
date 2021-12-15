const toggle = document.querySelector('#toggle');
const close = document.querySelector('#close');
const open = document.querySelector('#open');
const modal = document.querySelector('.modal-container');

// Toggle nav

toggle.addEventListener('click', () =>{
  document.body.classList.toggle('show-nav')
})



// Show Modal

open.addEventListener('click', ()=>{
  modal.classList.add('show-modal');
})

close.addEventListener('click', ()=>{
  modal.classList.remove('show-modal');
})

// Hide modal on outside click
window.addEventListener('click', event=>{
  event.target == modal ? modal.classList.remove('show-modal') : false
})