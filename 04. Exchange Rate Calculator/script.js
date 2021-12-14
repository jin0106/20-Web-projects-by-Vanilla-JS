const currencyOne = document.querySelector('#currency-1');
const currencyTwo = document.querySelector('#currency-2');
const amountOne = document.querySelector('#amount-1');
const amountTwo = document.querySelector('#amount-2');

const rate = document.querySelector('#rate');
const swap = document.querySelector('#swap');

// Fetch exchange rates and update the DOM
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

// Even Listners
currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyOne.value
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
})
calculate();