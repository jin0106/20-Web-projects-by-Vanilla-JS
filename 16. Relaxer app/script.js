const container = document.querySelector('#container'),
text= document.querySelector('#text'),
totalTime=7500,
breathTime = (totalTime/5) *2,
holdTime = totalTime/5;

breathAnimation();

function breathAnimation() {
  text.innerText= 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText ='Hold!';

    setTimeout(()=>{
      text.innerText='Breathe Out!';
      container.className='container shirink';
    }, holdTime);
  }, breathTime);
}


setInterval(breathAnimation, totalTime);