let number1 = 0;
let randomCook1 = 0;
let randomCook2 = 0;
let randomCook3 = 0;
let userName, user, pantry, recipe, cookbook;
let loadRecipes = document.querySelector(".book-btn");
let cardSection = document.querySelector(".card-section");

userName = $('#user-login').val() || users[0].name;
pantry = new Pantry(users[number1].pantry);
user = new User(1, users[number1].name, users[number1].pantry);
cookbook = new Cookbook(recipeData);
cookbook.loadBook();


function loadAll(event) {
  createCard(event);
}

window.onload = function() {
  loadRecipes.addEventListener('click', loadAll(event));
}

function createCard(event) {
  console.log(cookbook.cookbook)
  cookbook.cookbook.map(recipe => {

    event.preventDefault();
    cardSection.innerHTML += `
    <div id="display-all">
      <img class="crop full" src=${recipe.image} alt="${recipe.name}">
      <h4>${recipe.name}</h4>
    </div>`;
  })

};







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

$( document ).ready(function() {
  $('.login').on( "click", function() {
    window.location = 'index.html';
  });

  $('#user-name').html(user.name);

  $('.heart').on( "click", function() {
    console.log("heart")
  });

  $('.chef').on( "click", function() {
    console.log('chef')
  });

  $('.recipe-book').on( "click", function() {
    console.log("recipe book");
  });


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





}); // end jQuery
