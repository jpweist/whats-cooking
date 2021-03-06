class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favorites = [];
    this.pantryItemsId = [];
    this.recipeIngId = [];
    this.availableRecipes = [];
  }

  searchByTags(userInput, cookBook) {
    availableRecipes = [];
    cookBook.forEach(recipe => {
      if (recipe.tags.includes(userInput)) {
        this.availableRecipes.push(recipe);
      }
    });
    return this.availableRecipes;
  }

  saveToFavorites(recipe) {
    this.favorites.push(recipe);
    return this.favorites;
  }

  condenseUserIngredientById() {
    this.pantry.forEach((item) => {
      this.pantryItemsId.push(item.ingredient);
    });
    return this.pantryItemsId;
  }

  condenseRecipeIngredientById(cookbook) {
    cookbook.filter((recipe) => {
      return recipe.ingredients.forEach((ingredient) => {
        if (!this.recipeIngId.includes(ingredient.id)) {
          this.recipeIngId.push(ingredient.id);
        }
      })
    });
    return this.recipeIngId
  }


  recipesToCook(cookbook) {
    this.condenseUserIngredientById();
    this.condenseRecipeIngredientById(cookbook);
    cookbook.forEach(recipe => {
      if (this.pantryItemsId.every(id => this.recipeIngId.includes(id))) {
        this.availableRecipes.push(recipe);
      }
    });
    cookbook.shift();
    return this.availableRecipes;
  }
}

if (typeof module !== "undefined") {
  module.exports = User;
}
