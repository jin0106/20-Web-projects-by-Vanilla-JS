const search = document.querySelector('#search'),
  submit = document.querySelector('#submit'),
  random = document.querySelector('#random'),
  mealsEl = document.querySelector('#meals'),
  resultHeading = document.querySelector('#result-heading'),
  single_mealEl = document.querySelector('#single-meal');
  body = document.body

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  .then(res => res.json())
  .then(data => {
    const meal = data.meals[0];

    addMealToDOM(meal);
  })
}


// Fetch random Meal
function getRandomMeal(){
  // clear meals and heading
  mealsEl.innerHTML='';
  resultHeading.innerHTML ='';

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(data => {
    const meal = data.meals[0]
    addMealToDOM(meal)
  })
}

// Add meal to DOM
function addMealToDOM(meal) {
  const ingredients = [];

  for (let i=1; i<=20; i ++){
    if (meal[`strIngredient${i}`]){
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  single_mealEl.innerHTML = `
  <div class='single-meal'>
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <div class="single-meal-info">
      ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
      ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
  </div>
  <div class="main">
    <p>${meal.strInstructions}</p>
    <h2>Ingredients</h2>
    <ul>
      ${ingredients.map(img => `<li>${img}</li>`).join('')}
    </ul>
  </div>
</div>
`;
single_mealEl.style.display='block'

 showModal();
}

function showModal(){
  single_mealEl.style.display='block'
  body.style.overflow='hidden'
  

}

// Search meal and fetch from API

function searchMeal(e){
  e.preventDefault();

  const term = search.value;

  // check for empty
  if (term.trim()){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      resultHeading.innerHTML = `<h2>Search results for ${term}:</h2>`
      if(data.meals == null) {
        resultHeading.innerHTML = '<p>There are no search results. Try again!<p>'
      } else {
        mealsEl.innerHTML = data.meals.map(meal => 
          `<div class='meal'>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealID="${meal.idMeal}">
              <h3>${meal.strMeal}</h3>
            </div>
          </div>`
        ).join('');
      }
      // clear search text
      search.value ='';
    })
  } else{
    alert('Please enter a search term')
  }
  // clear single meal
  single_mealEl.innerText='';
}





// Event Listeners
submit.addEventListener('submit',searchMeal);

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

random.addEventListener('click', getRandomMeal)
window.addEventListener('click', event=>{
  const modal = document.querySelector('.single-meal');
  if (event.target == modal){
    true
  } else {
    single_mealEl.style.display='none'
    body.style.overflow='visible'
  }
})
