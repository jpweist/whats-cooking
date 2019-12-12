let number1 = 0;
let randomCook1 = 0;
let randomCook2 = 0;
let randomCook3 = 0;
let saveImages = [];
let userName, user, pantry, recipe, cookbook;
let loadAllRecipes = document.querySelector(".book-btn");
let loadChefRecipes = document.querySelector(".chef-btn");
let loadHeartRecipes = document.querySelector(".heart-btn");
let heartPage = document.querySelector(".favorite");
let allPage = document.querySelector(".all");
let chefPage = document.querySelector(".chef");

let cardSection = document.querySelector(".card-section");
let search;
let searchAnswers;

function getRandomInt(max) {
  return number1 = Math.floor(Math.random() * Math.floor(max));
}
getRandomInt(49) // for random user

function getRandomCookInt1(max) {
  return randomCook1 = Math.floor(Math.random() * Math.floor(max));
}
getRandomCookInt1(47) // for random user

function getRandomCookInt2(max) {
  return randomCook2 = Math.floor(Math.random() * Math.floor(max));
}
getRandomCookInt2(47) // for random user

function getRandomCookInt3(max) {
  return randomCook3 = Math.floor(Math.random() * Math.floor(max));
}
getRandomCookInt3(47) // for random user

userName = $('#user-login').val() || users[0].name;
pantry = new Pantry(users[number1].pantry);
user = new User(1, users[number1].name, users[number1].pantry);
cookbook = new Cookbook(recipeData);
cookbook.loadBook();
user.recipesToCook(cookbook.cookbook);

loadHeartRecipes.addEventListener('click', createFavoritedCards);
loadAllRecipes.addEventListener('click', createAllCards);
loadChefRecipes.addEventListener('click', createChefCards);
cardSection.addEventListener('click', addToFavorites);

function loadAll(event) {
  createCard(event);
}

// window.onload = function() {
//   loadRecipes.addEventListener('click', loadAll(event));
// }

function createCard(event) {
  console.log('load recipes');
  console.log('hello');
  cookbook.cookbook.map(recipe => {
    event.preventDefault();
    allPage.innerHTML += `
    <div id="display-all">
      <img class="add-heart" src="../assets/heartY.svg">
      <button class="build-full"><img class="crop full" src=${recipe.image} alt="${recipe.name}"></button>
      <h4>${recipe.name}</h4>
    </div>`;
  })
};

function createFavoritedCards(event) {
  getData(event);
  user.favorites.map(recipe => {
    event.preventDefault();
    cardSection.innerHTML += `
    <div id="display-all">
      <img class="add-heart" src="../assets/heartY.svg">
      <button class="build-full"><img class="crop full" src=${recipe.image} alt="${recipe.name}"></button>
      <h4>${recipe.name}</h4>
    </div>`;
  })
};

function createChefCards(event) {
  console.log(user.availableRecipes);
  user.availableRecipes.map(recipe => {
    event.preventDefault();
    chefPage.innerHTML += `
    <div id="display-all">
      <img class="add-heart" src="../assets/heartY.svg">
      <button class="build-full"><img class="crop full" src=${recipe.image} alt="${recipe.name}"></button>
      <h4>${recipe.name}</h4>
    </div>`;
  })
};

function addToFavorites(event) {
  event.preventDefault();
  user.saveToFavorites(event.path[0].alt);
  saveImages.push(event.path[0].src);
  saveData();
  console.log(event.path[0]);
}

function saveData() {
  localStorage.setItem('recipe', JSON.stringify(user.favorites));
  localStorage.setItem('img', JSON.stringify(saveImages));
}

function getData(event) {
  var retrievedRecipe = JSON.parse(localStorage.getItem("recipe"));
  event.preventDefault();
  cardSection.innerHTML += `
  <div id="display-all">
    <img class="add-heart" src="../assets/heartY.svg">
    <button class="build-full"><img class="crop full" src=${saveImages[0]} alt="${retrievedRecipe[0].name}"></button>
    <h4>${retrievedRecipe[0]}</h4>
  </div>`;
}










// recipe = new Recipe(595736,
//   'Loaded Chocolate Chip Pudding Cookie Cups',
//   '../recipe-images/choco-cookies.jpg',
//   ['antipasti', 'starter', 'snack'],
//   ["In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."],
//   [{
//       "name": "all purpose flour",
//       "id": 20081,
//       "quanitity": {
//         "amount": 1.5,
//         "unit": "c"
//       }
//     },
//     {
//       "name": "baking soda",
//       "id": 18372,
//       "quanitity": {
//         "amount": 0.5,
//         "unit": "tsp"
//       }
//     }
//   ]);

  // ingredient = new Ingredient(20081, "wheat flour", 142);

$( document ).ready(function() {
  $('.login').on( "click", function() {
    window.location = 'index.html';
  });


  $('#user-name').html(user.name);

  // $('.heart').on( "click", function() {
  //   console.log("heart")
  // });
  //
  // $('.chef').on( "click", function() {
  //   console.log('chef')
  // });
  //
  // $('.recipe-book').on( "click", function() {
  //   console.log("recipe book");
  // });
// var featureRecipe ='<img id="recipe-image" src="recipe.image"><div class="recipe"><h1 class="recipe-header"></h1><li class="recipe-number"></li><p class="recipe-instructions"><p></div>'
  // $('.recipe h1').html(cookbook["cookbook"][number1].name);
  // // $('.recipe li').html(cookbook["cookbook"][0].image);
  // $('.recipe-ingredients').html(cookbook["cookbook"][number1].ingredients[0].name)
  // $('.recipe p').html(cookbook["cookbook"][number1].instructions[0].instruction);

  $('.recipe').html(`<div class="recipe"><h1 class="recipe-header">${cookbook["cookbook"][number1].name}</h1><p class="recipe-ingredients">Ingredients: <br />${cookbook["cookbook"][number1].ingredients[0].name}, ${cookbook["cookbook"][number1].ingredients[1].name}, ${cookbook["cookbook"][number1].ingredients[2].name}, ${cookbook["cookbook"][number1].ingredients[3].name} cont...<hr></p><p class="recipe-instructions">1: ${cookbook["cookbook"][number1].instructions[0].instruction} <br/> 2: ${cookbook["cookbook"][number1].instructions[1].instruction} <br/> 3: ${cookbook["cookbook"][number1].instructions[2].instruction} <br/> 4: ${cookbook["cookbook"][number1].instructions[3].instruction} <br/> cont...<p></div>`)

  $('#user-login').attr("value", user.name)

  $('#recipe-image').attr("src", cookbook["cookbook"][number1].image);
  $('#recipe-image').attr("alt", cookbook["cookbook"][number1].name);


  $('.favorites-one').attr("src", cookbook["cookbook"][1].image);
  $('.favorites-one').attr("alt", cookbook["cookbook"][1].name);
  $('.favorites-one').on("click", function() {
    user.favorites.push(cookbook["cookbook"][1]);
    console.log(user.favorites)
  });

  $('.favorites-two').attr("src", cookbook["cookbook"][2].image);
  $('.favorites-two').attr("alt", cookbook["cookbook"][2].name);
  $('.favorites-two').on("click", function() {
    user.favorites.push(cookbook["cookbook"][2]);
    console.log(user.favorites);
  });

  $('.favorites-three').attr("src", cookbook["cookbook"][3].image);
  $('.favorites-three').attr("alt", cookbook["cookbook"][3].name);
  $('.favorites-three').on("click", function() {
    user.favorites.push(cookbook["cookbook"][3]);
    console.log(user.favorites);
  })

  $('.available-one').attr("src", cookbook["cookbook"][5].image);
  $('.available-one').attr("alt", cookbook["cookbook"][5].name);

  $('.available-two').attr("src", cookbook["cookbook"][6].image);
  $('.available-two').attr("alt", cookbook["cookbook"][6].name);

  $('.available-three').attr("src", cookbook["cookbook"][9].image);
  $('.available-three').attr("alt", cookbook["cookbook"][9].name);

  $('.all-recipes-one').attr("src", cookbook["cookbook"][randomCook1].image);
  $('.all-recipes-one').attr("alt", cookbook["cookbook"][randomCook1].name);

  $('.all-recipes-two').attr("src", cookbook["cookbook"][randomCook2].image);
  $('.all-recipes-two').attr("alt", cookbook["cookbook"][randomCook2].name);

  $('.all-recipes-three').attr("src", cookbook["cookbook"][randomCook3].image);
  $('.all-recipes-three').attr("alt", cookbook["cookbook"][randomCook3].name);


  $('.search-button').on("click", function() {
    search = $('#search').val();
    // console.log(search)
    findSearchItem(search);

  })
  function findSearchItem(input) {
    searchAnswers = cookbook["cookbook"].filter(cookbook => cookbook.name.includes(input));
    console.log(searchAnswers);
  };




}); // end jQuery
