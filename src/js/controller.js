import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';

import { MODAL_CLOSE_SEC } from './config.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
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

const newFeature = () => {
  console.log('new feature');
};
