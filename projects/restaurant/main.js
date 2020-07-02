
// API information
const url = `https://www.themealdb.com/api/json/v1/1/filter.php`;
const queryParams = '?i=';
// elements
// search field
const userSearch = document.querySelector('#userInput');
// form
const form = document.querySelector('#searchField')
// search button
const buttonOfSearch = document.querySelector('#searchButton')
// filtered cards
const card = document.querySelector('.filterCard')
// ===============================================//
// a div wrapping all the filtered cards
const sectionFour = document.querySelector('#filterContainer')
// A DIV CONTAINING SEARCH INPUT AND SEARCH BUTTON 
const boxOfSearch = document.querySelector('#searchbox');
// hide button
const getHide = document.createElement('BUTTON');
getHide.innerHTML = 'hide'
getHide.setAttribute('id', 'hide');
boxOfSearch.appendChild(getHide);
// ===============================================//

// main function
const main = (res) => {
    const data = res.meals.map(obj => {
      return `<div class="filterCard"><img src="${obj.strMealThumb}"></img> <h4>${obj.strMeal}</h4></div>`;
    })
    sectionFour.style.display = 'flex';
    sectionFour.innerHTML = data;
    getHide.style.display = 'block';
};

//hide button function 
const hideFunc = () => {
  sectionFour.style.display = 'none';
  getHide.style.display = 'none';
};



// AJAX FUNCTION
const call = () => {
const wordQuery = userSearch.value;
const endpoint = `${url}${queryParams}${wordQuery}`;
fetch(endpoint)
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
  main(jsonResponse);

},)
}

// on search button click function
buttonOfSearch.onclick = (event) => {
    event.preventDefault()
    call();
}
// on hide button click function
getHide.onclick = event => {
  hideFunc();
  event.preventDefault();
}





// Clears previous results and display results to webpage
// const displayResults = (event) => {
//     event.preventDefault();
//     while(responseField.firstChild){
//       responseField.removeChild(responseField.firstChild);
//     }
//     call();
//   };
  