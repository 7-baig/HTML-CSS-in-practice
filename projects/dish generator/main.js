const box = document.getElementById('container');
const userInput = document.querySelector('#search');
const submitButton = document.querySelector('#searchButton');
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const queryParams = '?i=';


// AJAX FUNCTION
const call = () => {
  const wordQuery = userInput.value;
    fetch(`${url}${queryParams}${wordQuery}`)
    .then((response) => {
      if(response.ok) {
        return response.json()
      }
      throw new Error('Request failed!');
    }, (networkError) => {
      console.log(networkError.message)
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      const data = jsonResponse.meals
      .map(obj => {
          return `<div class="cards"><img src="${obj.strMealThumb}"></img><p>${obj.strMeal}</p></div>`
      }).join('<br>')  

      console.log(data);
      box.innerHTML = data;

    },)
};
submitButton.onclick = (event) => {
  event.preventDefault();
  box.style.display = 'flex';  
  call();
}
