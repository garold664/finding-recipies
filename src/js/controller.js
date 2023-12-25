// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// #288 Loading a Recipe from API

// const showRecipe = async function () {
//   try {
//     const res = await fetch(
//       'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`${data.message} (${res.status})`);
//     }
//     console.log(res, data);
//     // let recipe = data.data.recipe;
//     let { recipe } = data.data;
//     recipe = {
//       publisher: recipe.publisher,
//       ingredients: recipe.ingredients,
//       sourceUrl: recipe.source_url,
//       image: recipe.image_url,
//       title: recipe.title,
//       servings: recipe.servings,
//       cookingTime: recipe.cooking_time,
//       id: recipe.id,
//     };
//     console.log(recipe);
//   } catch (err) {
//     alert(err);
//   }
// };

// showRecipe();

// #289 Rendering recipe

// const showRecipe = async function () {
//   try {
//     // 1 loading recipe
//     renderSpinner(recipeContainer);
//     const res = await fetch(
//       'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`${data.message} (${res.status})`);
//     }
//     console.log(res, data);
//     // let recipe = data.data.recipe;
//     let { recipe } = data.data;
//     recipe = {
//       publisher: recipe.publisher,
//       ingredients: recipe.ingredients,
//       sourceUrl: recipe.source_url,
//       image: recipe.image_url,
//       title: recipe.title,
//       servings: recipe.servings,
//       cookingTime: recipe.cooking_time,
//       id: recipe.id,
//     };
//     console.log(recipe);

//     // 2) Rendering recipe:

//     const markup = `
//       <figure class="recipe__fig">
//         <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
//         <h1 class="recipe__title">
//           <span>${recipe.title}</span>
//         </h1>
//       </figure>

//       <div class="recipe__details">
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="${icons}#icon-clock"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--minutes">${
//             recipe.cookingTime
//           }</span>
//           <span class="recipe__info-text">minutes</span>
//         </div>
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="${icons}#icon-users"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--people">${
//             recipe.servings
//           }</span>
//           <span class="recipe__info-text">servings</span>

//           <div class="recipe__info-buttons">
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="${icons}#icon-minus-circle"></use>
//               </svg>
//             </button>
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="${icons}#icon-plus-circle"></use>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div class="recipe__user-generated">
//           <svg>
//             <use href="${icons}#icon-user"></use>
//           </svg>
//         </div>
//         <button class="btn--round">
//           <svg class="">
//             <use href="${icons}#icon-bookmark-fill"></use>
//           </svg>
//         </button>
//       </div>

//       <div class="recipe__ingredients">
//         <h2 class="heading--2">Recipe ingredients</h2>
//         <ul class="recipe__ingredient-list">
//           ${recipe.ingredients
//             .map(ing => {
//               return `
//               <li class="recipe__ingredient">
//                 <svg class="recipe__icon">
//                   <use href="${icons}#icon-check"></use>
//                 </svg>
//                 <div class="recipe__quantity">${ing.quantity}</div>
//                 <div class="recipe__description">
//                   <span class="recipe__unit">${ing.unit}</span>
//                   ${ing.description}
//                 </div>
//               </li>
//             `;
//             })
//             .join('')}

//         </ul>
//       </div>

//       <div class="recipe__directions">
//         <h2 class="heading--2">How to cook it</h2>
//         <p class="recipe__directions-text">
//           This recipe was carefully designed and tested by
//           <span class="recipe__publisher">${
//             recipe.publisher
//           }</span>. Please check out
//           directions at their website.
//         </p>
//         <a
//           class="btn--small recipe__btn"
//           href="${recipe.sourceUrl}"
//           target="_blank"
//         >
//           <span>Directions</span>
//           <svg class="search__icon">
//             <use href="${icons}#icon-arrow-right"></use>
//           </svg>
//         </a>
//       </div>
//     `;
//     recipeContainer.innerHTML = '';
//     recipeContainer.insertAdjacentHTML('afterbegin', markup);
//   } catch (err) {
//     alert(err);
//   }
// };

// showRecipe();

// // ! 12:50 importing SVG!!!

// // import icons from '../img/icons.svg'; // Parcel 1
// import icons from 'url:../img/icons.svg'; // Parcel 2 - we using this syntax for non scripts
// console.log(icons);

// function renderSpinner(parentEl) {
//   const markup = `
//     <svg>
//       <use href="${icons}#icon-loader"></use>
//     </svg>
//     </div>
//   `;
//   parentEl.innerHTML = '';
//   parentEl.insertAdjacentHTML('afterbegin', markup);
// }

// //21:00

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// #290 Listening For load and hashchange Events

// import icons from 'url:../img/icons.svg'; // Parcel 2 - we using this syntax for non scripts
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// const showRecipe = async function () {
//   try {
//     // using hash
//     const id = window.location.hash.slice(1);
//     if (!id) return;
//     // console.log(id);

//     // 1 loading recipe
//     renderSpinner(recipeContainer);
//     const res = await fetch(
//       `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`${data.message} (${res.status})`);
//     }
//     console.log(res, data);
//     // let recipe = data.data.recipe;
//     let { recipe } = data.data;
//     recipe = {
//       publisher: recipe.publisher,
//       ingredients: recipe.ingredients,
//       sourceUrl: recipe.source_url,
//       image: recipe.image_url,
//       title: recipe.title,
//       servings: recipe.servings,
//       cookingTime: recipe.cooking_time,
//       id: recipe.id,
//     };
//     console.log(recipe);

//     // 2) Rendering recipe:

//     const markup = `
//       <figure class="recipe__fig">
//         <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
//         <h1 class="recipe__title">
//           <span>${recipe.title}</span>
//         </h1>
//       </figure>

//       <div class="recipe__details">
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="${icons}#icon-clock"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--minutes">${
//             recipe.cookingTime
//           }</span>
//           <span class="recipe__info-text">minutes</span>
//         </div>
//         <div class="recipe__info">
//           <svg class="recipe__info-icon">
//             <use href="${icons}#icon-users"></use>
//           </svg>
//           <span class="recipe__info-data recipe__info-data--people">${
//             recipe.servings
//           }</span>
//           <span class="recipe__info-text">servings</span>

//           <div class="recipe__info-buttons">
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="${icons}#icon-minus-circle"></use>
//               </svg>
//             </button>
//             <button class="btn--tiny btn--increase-servings">
//               <svg>
//                 <use href="${icons}#icon-plus-circle"></use>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div class="recipe__user-generated">
//           <svg>
//             <use href="${icons}#icon-user"></use>
//           </svg>
//         </div>
//         <button class="btn--round">
//           <svg class="">
//             <use href="${icons}#icon-bookmark-fill"></use>
//           </svg>
//         </button>
//       </div>

//       <div class="recipe__ingredients">
//         <h2 class="heading--2">Recipe ingredients</h2>
//         <ul class="recipe__ingredient-list">
//           ${recipe.ingredients
//             .map(ing => {
//               return `
//               <li class="recipe__ingredient">
//                 <svg class="recipe__icon">
//                   <use href="${icons}#icon-check"></use>
//                 </svg>
//                 <div class="recipe__quantity">${ing.quantity}</div>
//                 <div class="recipe__description">
//                   <span class="recipe__unit">${ing.unit}</span>
//                   ${ing.description}
//                 </div>
//               </li>
//             `;
//             })
//             .join('')}

//         </ul>
//       </div>

//       <div class="recipe__directions">
//         <h2 class="heading--2">How to cook it</h2>
//         <p class="recipe__directions-text">
//           This recipe was carefully designed and tested by
//           <span class="recipe__publisher">${
//             recipe.publisher
//           }</span>. Please check out
//           directions at their website.
//         </p>
//         <a
//           class="btn--small recipe__btn"
//           href="${recipe.sourceUrl}"
//           target="_blank"
//         >
//           <span>Directions</span>
//           <svg class="search__icon">
//             <use href="${icons}#icon-arrow-right"></use>
//           </svg>
//         </a>
//       </div>
//     `;
//     recipeContainer.innerHTML = '';
//     recipeContainer.insertAdjacentHTML('afterbegin', markup);
//   } catch (err) {
//     alert(err);
//   }
// };

// // showRecipe();

// function renderSpinner(parentEl) {
//   const markup = `
//     <svg>
//       <use href="${icons}#icon-loader"></use>
//     </svg>
//     </div>
//   `;
//   parentEl.innerHTML = '';
//   parentEl.insertAdjacentHTML('afterbegin', markup);
// }

// ! 03:40

// window.addEventListener('hashchange', showRecipe);

// ! 6:20 but now if we copy an address and open in a new tab, it won't load recipe, because has hasn't changed!

// window.addEventListener('load', showRecipe);

// ! 7:30 !!!

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

// #292 Refactoring for MVC

// import * as model from './model.js';

// //! 12:00 recipeView.js

// import recipeView from './views/recipeView.js';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// //! npm i fractional

// // import fraction from 'fractional';
// // console.log(fraction);

// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// const controlRecipes = async function () {
//   try {
//     // using hash
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     //! 24:40 moving renderSpinner to recipeView.js
//     recipeView.renderSpinner();
//     // 1 loading recipe

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     // 2) Rendering recipe:

//     // ! 16:00
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     alert(err);
//   }
// };

// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );

// #293 Helpers and Configuration Files

// // new config.js

// // 4:40 js/views/helpers.js

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// // ! 13:00 moving it to the helpers
// // const timeout = function (s) {
// //   return new Promise(function (_, reject) {
// //     setTimeout(function () {
// //       reject(new Error(`Request took too long! Timeout after ${s} second`));
// //     }, s * 1000);
// //   });
// // };

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     console.error(err);
//   }
// };

// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );

// #294 Subscriber, Publisher in MVC

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     console.error(err);
//   }
// };

// ! 02:00
// ! Events should be handled in the CONTROLLER
// ! Events should be listened for in the VIEW

// 2:50
// controlRecipes() from controller.js
// addHandlerRender() from RecipeView
// when event occurs we need to call controlRecipes() from RecipeView
// but that is not possible because VIEW doesn't know anything about CONTROLLER!!! So we can't import CONTROLLER in VIEW!!!
//! 3:50 Publisher-Subscriber Design Pattern - solution!
// controlRecipes() from controller.js is a SUBSCRIBER
// addHandlerRender() from RecipeView is a PUBLISHER

// % 5:00  we can subscribe by passing in the subscriber function (controlRecipes) to addHandlerRender()
// addHandlerRender listens for events and uses controlRecipes as a callback!
// ! 6:40
// % Profound difference between function calling another function directly and calling a function passed as a parameter!!!
// 7:35 Back to code

// 8:00 moving to RecipeView
// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
// };

// init();

//#295 Error & Success Messages

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     // console.error(err);
//     // ! 4:00
//     // recipeView.renderError(`${err} 💥💥💥💥`);

//     // Error: Invalid _id: 5ed6604591c37cdc054bc90b23. (400) 💥💥💥💥
//     // ! but it is not meaningful message
//     recipeView.renderError();
//     // now the message is in private field recipeView.#errorMessage = `We couldn't find that recipe. Please try another one!`;
//     // ! 09:30 adding success message
//   }
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
// };

// init();

// % RecipeView new methods:

// renderError(message = this.#errorMessage) {
//   const markup = `
//     <div class="error">
//       <div>
//         <svg>
//           <use href="src/img/icons.svg#icon-alert-triangle"></use>
//         </svg>
//       </div>
//       <p>${message}</p>
//     </div>
//   `;
//   this.#clear();
//   this.#parentElement.insertAdjacentHTML('afterbegin', markup);
// }
// renderMessage(message = this.#message) {
//   const markup = `
//     <div class="message">
//       <div>
//         <svg>
//           <use href="src/img/icons.svg#icon-smile"></use>
//         </svg>
//       </div>
//       <p>${message}</p>
//     </div>
//   `;
//   this.#clear();
//   this.#parentElement.insertAdjacentHTML('afterbegin', markup);
// }

//#296 Search Results Part1

// //! 01:00 model.js

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// // !17:00

// import searchView from './views/searchView.js';

// const recipeContainer = document.querySelector('.recipe');

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// // ! 10:30

// const controlSearchResults = async function () {
//   try {
//     // ! get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     console.log(model.state.search.results);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   // ! 19:00 Publisher - Subscriber
//   searchView.addHandlerSearch(controlSearchResults);
// };

// init();

// ! creating new VIEW: views/searchView.js

//#297 Search Results Part2

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// // ! 1:00 new resultsView.js
// // ! 1:50 creating parent Class for views!!!
// import resultsView from './views/resultsView.js';

// // ! 21:00

// if (module.hot) {
//   module.hot.accept();
// }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     console.log(model.state.search.results);
//     resultsView.render(model.state.search.results);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   searchView.addHandlerSearch(controlSearchResults);
// };

// init();

//#298 Search Results Pagination Part1

// ! 2:00 model.js
// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';

// if (module.hot) {
//   module.hot.accept();
// }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     console.log(model.state.search.results);
//     // resultsView.render(model.state.search.results); //! 7:00
//     resultsView.render(model.getSearchResultsPage());
//   } catch (err) {
//     console.log(err);
//   }
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   searchView.addHandlerSearch(controlSearchResults);
// };

// init();

//#299 Search Results Pagination Part

//! 2:00 new file paginationView.js
// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 04:30
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// //! 18:30

// const controlPagination = function (goToPage) {
//   // console.log('Pag controller');
//   //! 28:00 receiving page number
//   // console.log(goToPage);

//   //! 30:00
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
// };

// init();

// //! 24:00 adding data attr to buttons in paginationView

//#301 Updating Recipe Servings.js

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();

//     await model.loadRecipe(id);
//     const { recipe } = model.state;

//     recipeView.render(model.state.recipe);
//     // controlServings();
//     recipeView.addHandlerUpdateServings(controlServings);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// // ! 0:30

// const controlServings = function (newServings) {
//   // Update state (number of servings)
//   //! 02:30

//   //! 18:30 controller shouldn't be responsible for the number of servings - it's View's job
//   model.updateServings(newServings);
//   // Update the Recipe view
//   //!8:00 - just rendering recipe again
//   recipeView.render(model.state.recipe);

//   recipeView.addHandlerUpdateServings(controlServings);
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
// };

// init();

//#302 DOM Updating System

//% !!!!!!!!!!! createContextualFragment()
//% 11:00 isEqualNode()
//% nodeValue

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //! 30:40
//     //!  0) Update results view to mark selected search result
//     // resultsView.render(model.getSearchResultsPage());
//     resultsView.update(model.getSearchResultsPage());
//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   // ! 1:40 - adding in View.js
//   recipeView.update(model.state.recipe);

//   // recipeView.addHandlerUpdateServings(controlServings);
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
// };

// init();

// //! 28:00 updating Search Results using new DOM updating algorithm

//#303 Bookmarks Part 1

//! 2:00 Bug vith pagination - if we search something and go to page 2 and the search something else, we still will be on page 2

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //!  0) Update results view to mark selected search result
//     resultsView.update(model.getSearchResultsPage());
//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   recipeView.update(model.state.recipe);
// };

// //! 04:10 bookmarks

// //!06:40

// const controlAddBookmark = function () {
//   //! 21:20
//   // if (!model.state.recipe.bookmarked) {
//   //   model.addBookmark(model.state.recipe);
//   // } else {
//   //   model.deleteBookmark(model.state.recipe.id);
//   // }
//   !model.state.recipe.bookmarked
//     ? model.addBookmark(model.state.recipe)
//     : model.deleteBookmark(model.state.recipe.id);
//   // console.log(model.state.recipe);
//   recipeView.update(model.state.recipe);
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
// };

// init();

//#304 Bookmarks Part 2

//! 01:20 copying resultsView to make bookmarksView

//! 08:00 we need to create parent class for resultsView and bookmarksView, becase they are practically the same!
// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';
// import bookmarksView from './views/bookmarksView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //!  0) Update results view to mark selected search result
//     resultsView.update(model.getSearchResultsPage());
//     //! 5:30 updating bookmarks view
//     bookmarksView.update(model.state.bookmarks);

//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;
//     resultsView.renderSpinner();

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   recipeView.update(model.state.recipe);
// };

// const controlAddBookmark = function () {
//   // ! 1) Add/remove bookmark
//   !model.state.recipe.bookmarked
//     ? model.addBookmark(model.state.recipe)
//     : model.deleteBookmark(model.state.recipe.id);

//   //! 2) update recipe view
//   recipeView.update(model.state.recipe);

//   //! 03:00
//   //! 3)Render bookmarks

//   bookmarksView.render(model.state.bookmarks);
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
// };

// init();

//#305 Bookmarks and LocalStorage

//! 01:30  model.js
// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';
// import bookmarksView from './views/bookmarksView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //!  0) Update results view to mark selected search result
//     resultsView.update(model.getSearchResultsPage());
//     bookmarksView.update(model.state.bookmarks);

//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;
//     resultsView.renderSpinner();

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   recipeView.update(model.state.recipe);
// };

// const controlAddBookmark = function () {
//   // ! 1) Add/remove bookmark
//   !model.state.recipe.bookmarked
//     ? model.addBookmark(model.state.recipe)
//     : model.deleteBookmark(model.state.recipe.id);

//   //! 2) update recipe view
//   recipeView.update(model.state.recipe);

//   //! 3)Render bookmarks

//   bookmarksView.render(model.state.bookmarks);
// };

// //! 13:30

// const controlBookmarks = () => {
//   bookmarksView.render(model.state.bookmarks);
// };

// const init = function () {
//   bookmarksView.addHanlerRender(controlBookmarks);
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
// };

// init();

//! 9:00 DEBUGGING

//!11:20 in View.js

// newElements = Array(14)
// curElements = Array(5)

// at this moment Bookmarks list in html is still empty and our update() method is trying to insert new Data there by comparing

//! 12:50 Solution in bookmarksView.js
// to solve it, we need first to render bookmarks

//! 16:10 function for debugging (model.js)

//#307 Uploading a New Recipe Part 1

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';
// import bookmarksView from './views/bookmarksView.js';
// //!06:30
// import addRecipeViews from './views/addRecipeView.js';
// import addRecipeView from './views/addRecipeView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //!  0) Update results view to mark selected search result
//     resultsView.update(model.getSearchResultsPage());
//     bookmarksView.update(model.state.bookmarks);

//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;
//     resultsView.renderSpinner();

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   recipeView.update(model.state.recipe);
// };

// const controlAddBookmark = function () {
//   // ! 1) Add/remove bookmark
//   !model.state.recipe.bookmarked
//     ? model.addBookmark(model.state.recipe)
//     : model.deleteBookmark(model.state.recipe.id);

//   //! 2) update recipe view
//   recipeView.update(model.state.recipe);

//   //! 3)Render bookmarks

//   bookmarksView.render(model.state.bookmarks);
// };

// const controlBookmarks = () => {
//   bookmarksView.render(model.state.bookmarks);
// };

// //! 13:30

// const controlAddRecipe = newRecipe => {
//   console.log(newRecipe);
// };

// const init = function () {
//   bookmarksView.addHanlerRender(controlBookmarks);
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
//   addRecipeView.addHanlderUpload(controlAddRecipe);
// };

// init();

// //! 00:40 new file addRecipeView.js

// //#308 Uploading a New Recipe Part 2

// //! 00:20 model.js

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import { MODAL_CLOSE_SEC } from './config.js';
// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';
// import bookmarksView from './views/bookmarksView.js';
// import addRecipeViews from './views/addRecipeView.js';
// import addRecipeView from './views/addRecipeView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //!  0) Update results view to mark selected search result
//     resultsView.update(model.getSearchResultsPage());
//     bookmarksView.update(model.state.bookmarks);

//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;
//     resultsView.renderSpinner();

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   recipeView.update(model.state.recipe);
// };

// const controlAddBookmark = function () {
//   // ! 1) Add/remove bookmark
//   !model.state.recipe.bookmarked
//     ? model.addBookmark(model.state.recipe)
//     : model.deleteBookmark(model.state.recipe.id);

//   //! 2) update recipe view
//   recipeView.update(model.state.recipe);

//   //! 3)Render bookmarks

//   bookmarksView.render(model.state.bookmarks);
// };

// const controlBookmarks = () => {
//   bookmarksView.render(model.state.bookmarks);
// };

// // const controlAddRecipe = newRecipe => {
// //   // console.log(newRecipe);

// //   // model.uploadRecipe(newRecipe);

// //! 12:00 adding try catch

// //   try {
// //     model.uploadRecipe(newRecipe);
// //   } catch (err) {
// //     console.error('💥', err);
// //     addRecipeView.renderError(err.message);
// //   }
// // };

// //! 14:30 we need to make function async

// const controlAddRecipe = async newRecipe => {
//   // console.log(newRecipe);

//   // model.uploadRecipe(newRecipe);

//   try {
//     //!38:40
//     //! spinner
//     addRecipeView.renderSpinner();
//     await model.uploadRecipe(newRecipe);
//     console.log(model.state.recipe);
//     //! 34:00
//     //! Render Recipe
//     recipeView.render(model.state.recipe);

//     //! 37:00 Success message

//     addRecipeView.renderMessage();

//     //! close form window
//     // setTimeout(function () {
//     //   addRecipeView.toggleWindow();
//     // }, 2500);
//     //! 35:40 we shouldn't use magic number
//     setTimeout(function () {
//       addRecipeView.toggleWindow();
//     }, MODAL_CLOSE_SEC * 1000);
//   } catch (err) {
//     console.error('💥', err);
//     addRecipeView.renderError(err.message);
//   }
// };

// const init = function () {
//   bookmarksView.addHanlerRender(controlBookmarks);
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
//   addRecipeView.addHanlderUpload(controlAddRecipe);
// };

// init();

// //! 18:00 making sending method in helper.js
// //! 22:05 using sendJSON in model.js

// //#309 Uploading a New Recipe Part 3

// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView.js';

// import { MODAL_CLOSE_SEC } from './config.js';
// import resultsView from './views/resultsView.js';
// import paginationView from './views/paginationView.js';
// import bookmarksView from './views/bookmarksView.js';
// import addRecipeViews from './views/addRecipeView.js';
// import addRecipeView from './views/addRecipeView.js';

// // if (module.hot) {
// //   module.hot.accept();
// // }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeView.renderSpinner();
//     //!  0) Update results view to mark selected search result
//     resultsView.update(model.getSearchResultsPage());
//     bookmarksView.update(model.state.bookmarks);

//     //! 1) Load recipe
//     await model.loadRecipe(id);
//     const { recipe } = model.state;
//     //! 2) Render recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     // ! 1) get search query
//     const query = searchView.getQuery();
//     if (!query) return;
//     resultsView.renderSpinner();

//     //! 2) Load search results
//     await model.loadSearchResults(query);
//     //! 3) Render results
//     // console.log(model.state.search.results);
//     resultsView.render(model.getSearchResultsPage());
//     //! 4) Render initial pagination buttons:
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const controlPagination = function (goToPage) {
//   // ! Render new results
//   resultsView.render(model.getSearchResultsPage(goToPage));
//   // ! Render new pagination buttons
//   paginationView.render(model.state.search);
// };

// const controlServings = function (newServings) {
//   // Update state (number of servings)

//   model.updateServings(newServings);
//   // Update the Recipe view
//   recipeView.update(model.state.recipe);
// };

// const controlAddBookmark = function () {
//   // ! 1) Add/remove bookmark
//   !model.state.recipe.bookmarked
//     ? model.addBookmark(model.state.recipe)
//     : model.deleteBookmark(model.state.recipe.id);

//   //! 2) update recipe view
//   recipeView.update(model.state.recipe);

//   //! 3)Render bookmarks

//   bookmarksView.render(model.state.bookmarks);
// };

// const controlBookmarks = () => {
//   bookmarksView.render(model.state.bookmarks);
// };

// const controlAddRecipe = async newRecipe => {
//   try {
//     //! spinner
//     addRecipeView.renderSpinner();
//     await model.uploadRecipe(newRecipe);
//     // console.log(model.state.recipe);

//     //! Render Recipe
//     recipeView.render(model.state.recipe);

//     addRecipeView.renderMessage();

//     //! 2:00

//     model.addBookmark(model.state.recipe);
//     bookmarksView.render(model.state.bookmarks);

//     //! 02:40

//     window.history.pushState(null, '', `#${model.state.recipe.id}`);

//     setTimeout(function () {
//       addRecipeView.toggleWindow();
//     }, MODAL_CLOSE_SEC * 1000);
//   } catch (err) {
//     console.error('💥', err);
//     addRecipeView.renderError(err.message);
//   }
// };

// const init = function () {
//   bookmarksView.addHanlerRender(controlBookmarks);
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
//   addRecipeView.addHanlderUpload(controlAddRecipe);
// };

// init();

// //! 04:30 helpers

// //! 08:00 marking our own recipies using KEY

//#310 jsDoc

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';

import { MODAL_CLOSE_SEC } from './config.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeViews from './views/addRecipeView.js';
import addRecipeView from './views/addRecipeView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    //!  0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    //! 1) Load recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;
    //! 2) Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // ! 1) get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    //! 2) Load search results
    await model.loadSearchResults(query);
    //! 3) Render results
    // console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    //! 4) Render initial pagination buttons:
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // ! Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // ! Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update state (number of servings)

  model.updateServings(newServings);
  // Update the Recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // ! 1) Add/remove bookmark
  !model.state.recipe.bookmarked
    ? model.addBookmark(model.state.recipe)
    : model.deleteBookmark(model.state.recipe.id);

  //! 2) update recipe view
  recipeView.update(model.state.recipe);

  //! 3)Render bookmarks

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = () => {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async newRecipe => {
  try {
    //! spinner
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    // console.log(model.state.recipe);

    //! Render Recipe
    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage();

    model.addBookmark(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHanlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHanlderUpload(controlAddRecipe);
};

init();

//! 00:50 View.js

//! 07:55 POSSIBLE IMPROVEMENTS
